# Contributing to Reynard Playbooks

**Good first PRs:** a new playbook, an adapter, or a case study.

## Dev quickstart
pnpm install
node bin/reynard.js demo

## Adding a playbook
- Create `/playbooks/<name>/README.md` using the template.
- Expose it via the CLI (bin/reynard.js mapping).
- Provide one `examples/` input and an expected output.

## Reporting
All playbooks should emit a Markdown report to `/reports/`.
