# Bottleneck Blitz

**Throughput optimization game based on the Theory of Constraints.**

## Overview
Bottleneck Blitz directs attention to the slowest step in a process. Players model a workflow, locate the current constraint, exploit it fully, then elevate the next bottleneck in rapid iterations. The cycle repeats until throughput goals are met or resources are exhausted.

## Key Features
- **Process Mapping**: Convert tasks into a flow of stages with capacities.
- **Constraint Identification**: Measure throughput to find the limiting stage.
- **Exploit & Elevate**: Focus improvements only where they increase overall flow.
- **Rolling Metrics**: After each change, recompute capacities to reveal new bottlenecks.

## Usage
```bash
/bottleneck-blitz "<process_description>" [target_throughput]
```
- `process_description` (required): Name or summary of the workflow.
- `target_throughput` (optional): Units per time goal.

## Workflow Structure
1. **Map Stages** – Document each step with capacity per time unit.
2. **Locate Constraint** – Identify the minimum throughput stage.
3. **Exploit** – Optimize that stage using quick fixes.
4. **Elevate** – If still constrained, invest in larger improvements.
5. **Repeat** – Recalculate to find the new bottleneck.

## Success Metrics
- Increase in overall throughput.
- Number of bottlenecks elevated.
- ROI of improvements per stage.

## Anti-Patterns Prevented
- **Local Optimizations** that don’t improve system flow.
- **Over-Investment** in non-bottleneck stages.
- **Blind Spots** in process capacity.

## Integration Points
- Kanban or workflow tools for stage tracking.
- Metrics dashboards for throughput measurement.
- Simulation tools for capacity planning.

## Example
```bash
/bottleneck-blitz "CI build pipeline" 20-builds/hour
```
