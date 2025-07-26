# Markdown Navigation Enhancement Plan

This document outlines how to improve the navigability of markdown files for **Claude Code** by adding cross-links between workflows and their references.

## 1. Link Workflow Mentions in README
- The README references multiple workflows in table form (e.g. Ulysses Protocol, Code Review Game).
- Update these references to link directly to their command documentation under `.claude/commands`.
- Example: `[Ulysses Protocol](.claude/commands/meta-frameworks/ulysses-protocol.md)`.

## 2. Add Index File for Slash Commands
- Create a new `docs/workflows-index.md` listing all available workflows grouped by category.
- Each entry links to the appropriate markdown command file.
- This index becomes a central hub for Claude Code and users to explore commands.

## 3. Cross-Link Within Command Docs
- At the end of each command markdown file, add a "Related Workflows" section linking to complementary workflows.
- For instance, the `feature-discovery` document could link to `pattern-synthesizer` for follow-up synthesis.

## 4. Use Relative Links for Portability
- All links should be relative so they work when served inside other tools or platforms.

## 5. Future Automation
- Consider a script that scans `.claude/commands` and auto-generates the index to ensure it stays current.

---

**Note on Web Research**
Attempts were made to research how slash command search results are served to Claude Code, but outbound web access was blocked (e.g. connections to `google.com`, `bing.com`, and `duckduckgo.com` were denied). Further information may require access to Anthropic documentation or support channels.
