#!/usr/bin/env node
/* reynard CLI: thin wrapper around existing workflows.
   Commands:
     reynard review <target>
     reynard discover "<capability>"
     reynard ulysses "<bug summary>"
     reynard demo
   Flags:
     --budget <n>   (metadata only unless underlying scripts support it)
     --dry-run      (do not invoke underlying workflow)
     --out <path>   (default: reports/)
*/
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

const REPORTS_DIR = 'reports';
if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });

function ts() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}${pad(d.getMonth()+1)}${pad(d.getDate())}-${pad(d.getHours())}${pad(d.getMinutes())}${pad(d.getSeconds())}`;
}

function parseArgs(argv) {
  const args = argv.slice(2);
  const flags = {};
  const positionals = [];
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a.startsWith('--')) {
      const [k, v] = a.includes('=') ? a.split('=') : [a, args[i+1] && !args[i+1].startsWith('--') ? args[++i] : true];
      flags[k.replace(/^--/,'')] = v === undefined ? true : v;
    } else {
      positionals.push(a);
    }
  }
  return { cmd: positionals[0], rest: positionals.slice(1), flags };
}

function writeReport(name, content, outDir) {
  const outBase = outDir || REPORTS_DIR;
  fs.mkdirSync(outBase, { recursive: true });
  const file = path.join(outBase, `${name}-${ts()}.md`);
  fs.writeFileSync(file, content, 'utf8');
  return file;
}

function runWorkflow(workflowName, args, flags) {
  if (flags['dry-run']) {
    const meta = `# ${workflowName} (dry run)\n\nArgs: ${JSON.stringify(args)}\nFlags: ${JSON.stringify(flags, null, 2)}\n`;
    const file = writeReport(workflowName, meta, flags.out);
    console.log(`Dry run. Would execute '${workflowName}' with args ${args.join(' ')}.\nWrote ${file}`);
    return 0;
  }
  // Adjust this path if your runner lives elsewhere:
  const runner = path.resolve('tools', 'workflow-runner.js');
  if (!fs.existsSync(runner)) {
    console.error(`Cannot find workflow runner at ${runner}. Update reynard CLI mapping.`);
    return 1;
  }
  const fullArgs = [runner, workflowName, ...args];
  const child = spawnSync(process.execPath, fullArgs, { encoding: 'utf8' });
  const stdout = child.stdout || '';
  const stderr = child.stderr || '';
  const header =
`---
workflow: ${workflowName}
args: ${JSON.stringify(args)}
budget: ${flags.budget || null}
timestamp: ${new Date().toISOString()}
---

`;
  const file = writeReport(workflowName, header + stdout + (stderr ? `\n\n<!-- STDERR -->\n\n${stderr}\n` : ''), flags.out);
  console.log(`Report: ${file}`);
  return child.status ?? 0;
}

function help() {
  console.log(`reynard — push-button agent playbooks

Usage:
  reynard review <pr-url|path>
  reynard discover "<capability>"
  reynard ulysses "<bug summary>"
  reynard demo
Options:
  --budget <n>    annotate report with budget
  --dry-run       do not run underlying workflow
  --out <dir>     output directory (default: reports/)
  --help          show this help
`);
}

function demo(flags) {
  const demoPath = path.resolve('examples', 'demo-report.md');
  const content = fs.existsSync(demoPath)
    ? fs.readFileSync(demoPath, 'utf8')
    : '# Reynard demo\n\nThis is a placeholder demo report.';
  const file = writeReport('demo', content, flags.out);
  console.log(`Demo report written to ${file}`);
  return 0;
}

(function main() {
  const { cmd, rest, flags } = parseArgs(process.argv);
  if (flags.help) { help(); process.exit(0); }
  if (!cmd) { help(); process.exit(1); }

  switch (cmd) {
    case 'review': {
      if (!rest[0]) { console.error('Missing <pr-url|path>'); process.exit(1); }
      process.exit(runWorkflow('code-review-game', rest, flags));
    }
    case 'discover': {
      if (!rest[0]) { console.error('Missing "<capability>"'); process.exit(1); }
      process.exit(runWorkflow('feature-discovery', rest, flags));
    }
    case 'ulysses': {
      if (!rest[0]) { console.error('Missing "<bug summary>"'); process.exit(1); }
      process.exit(runWorkflow('ulysses-protocol', rest, flags));
    }
    case 'demo': {
      process.exit(demo(flags));
    }
    default: {
      console.error(`Unknown command: ${cmd}\n`);
      help();
      process.exit(1);
    }
  }
})();
