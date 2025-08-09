#!/usr/bin/env node
// Minimal placeholder runner that echoes workflow name and args.
const [,, workflow, ...args] = process.argv;
console.log(`# ${workflow}\n\nArgs: ${args.join(' ')}`);
