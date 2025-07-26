#!/usr/bin/env node

// Sequential refactoring server with simple session handling inspired by the
// Clear Thought MCP server. The implementation avoids external dependencies and
// provides basic health checks and session endpoints.

const http = require('http');
const { parse } = require('url');

/** Map of sessionId -> { config, steps } */
const sessions = new Map();

function createSession(config = {}) {
  const id = `session-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
  sessions.set(id, { config, steps: [] });
  return id;
}

function addStep(sessionId, data) {
  const session = sessions.get(sessionId);
  if (!session) return null;

  const step = {
    step: data.step,
    stepNumber: data.stepNumber,
    totalSteps: data.totalSteps,
    nextStepNeeded: !!data.nextStepNeeded,
    isRevision: !!data.isRevision,
    revisesStep: data.revisesStep,
    branchFromStep: data.branchFromStep,
    branchId: data.branchId,
    needsMoreSteps: !!data.needsMoreSteps
  };

  session.steps.push(step);
  return step;
}

function sendJSON(res, status, obj) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(obj, null, 2));
}

const server = http.createServer((req, res) => {
  const url = parse(req.url, true);

  if (req.method === 'GET' && url.pathname === '/health') {
    return sendJSON(res, 200, { status: 'ok', service: 'sequential-refactor' });
  }

  if (req.method === 'POST' && url.pathname === '/sessions') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      let config = {};
      if (body) {
        try {
          config = JSON.parse(body);
        } catch {
          return sendJSON(res, 400, { error: 'Invalid JSON' });
        }
      }
      const id = createSession(config);
      sendJSON(res, 201, { sessionId: id });
    });
    return;
  }

  if (req.method === 'GET' && url.pathname === '/sessions') {
    const list = Array.from(sessions.entries()).map(([id, s]) => ({
      sessionId: id,
      stepCount: s.steps.length
    }));
    return sendJSON(res, 200, { sessions: list });
  }

  const match = url.pathname.match(/^\/sessions\/([^/]+)(\/step)?$/);
  if (match) {
    const sessionId = match[1];
    const session = sessions.get(sessionId);
    if (!session) return sendJSON(res, 404, { error: 'Session not found' });

    if (req.method === 'POST' && match[2]) {
      let body = '';
      req.on('data', c => { body += c; });
      req.on('end', () => {
        try {
          const data = JSON.parse(body);
          const step = addStep(sessionId, data);
          const remaining =
            typeof step.totalSteps === 'number'
              ? step.totalSteps - step.stepNumber
              : undefined;
          sendJSON(res, 200, {
            status: 'ok',
            sessionId,
            step,
            remainingSteps: remaining
          });
        } catch {
          sendJSON(res, 400, { error: 'Invalid JSON' });
        }
      });
      return;
    }

    if (req.method === 'GET') {
      return sendJSON(res, 200, { sessionId, steps: session.steps });
    }
  }

  res.writeHead(404);
  res.end('Not found');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Sequential refactor server listening on port ${PORT}`);
});

process.on('SIGTERM', () => server.close(() => process.exit(0)));
process.on('SIGINT', () => server.close(() => process.exit(0)));

