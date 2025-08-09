# Reynard Playbooks

[![npm version](https://img.shields.io/npm/v/reynard-playbooks.svg)](https://npmjs.com/package/reynard-playbooks)

<img src="./assets/logo.svg" alt="Reynard" width="64" />

Push-button agent workflows that cut cognitive load. One CLI, zero theory.

## Why
Ship work without getting stuck in bikeshedding, analysis paralysis, or perfectionist spirals. Each playbook is a proven sequence with clear inputs and crisp outputs. [Learn more](docs/why.md).

## 60-second Quickstart
```bash
# local
pnpm install  # or npm install
node bin/reynard.js demo
node bin/reynard.js review "<PR-URL-or-path>"
node bin/reynard.js discover "Add real-time collaboration"
node bin/reynard.js ulysses "Intermittent 500s in checkout"
```

## What you get
- **Playbooks that prevent traps:** Code Review Game, Feature Discovery, Ulysses Protocol.
- **Uniform interface:** one command per playbook, consistent inputs/outputs (Markdown report + next actions).
- **Model-agnostic:** bring your own provider; thin adapters only.

## Commands
- `reynard review <pr-url|path>` → Code Review report in `reports/`
- `reynard discover "<capability>"` → Feature Brief in `reports/`
- `reynard ulysses "<bug summary>"` → Debug Plan in `reports/`
- `reynard demo` → zero-setup sample output

## Install (optional)
```bash
npm i -g reynard-playbooks  # after we publish v0.1
```

See [playbooks](playbooks/) for per-playbook docs.
