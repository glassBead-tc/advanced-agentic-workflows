# Critical Path Quest

**Schedule-driven project planning game for uncovering and protecting the tasks that truly control delivery time.**

## Overview
Critical Path Quest turns project planning into an operations-research exercise. Players model work as a directed acyclic graph of tasks, estimate durations, and then surface the critical path—the longest chain that determines overall completion. Subsequent moves focus on shortening or safeguarding this path.

## Key Features
- **Graph Modeling**: Tasks become nodes with precedence edges.
- **Duration Estimation**: Optimistic, pessimistic, and expected values encourage PERT-style thinking.
- **Slack Tracking**: Non-critical tasks expose float that can be borrowed.
- **Path Defense**: Any change to a critical task requires justification and contingency.

## Usage
```bash
/critical-path-quest "<project_goal>" [deadline]
```
- `project_goal` (required): Description of the deliverable or milestone.
- `deadline` (optional): Target completion date to stress-test schedule.

## Workflow Structure
1. **Graph Construction** – List tasks and dependencies.
2. **Duration Sampling** – Estimate task times; compute expected durations.
3. **Path Calculation** – Identify critical path and slack for each task.
4. **Mitigation Round** – Propose actions to shorten or protect the path.
5. **Monitoring Loop** – As work proceeds, recalc path to detect shifts.

## Success Metrics
- Total expected project time before vs. after mitigations.
- Number of critical path violations caught early.
- Variance reduction in final delivery time.

## Anti-Patterns Prevented
- **Wishful Scheduling** via explicit dependency modeling.
- **Local Optimization** that ignores global impact.
- **Forgotten Dependencies** uncovered by graph audits.

## Integration Points
- Gantt or CPM tools for visualization.
- Issue trackers for task status updates.
- Simulation libraries for PERT sampling.

## Example
```bash
/critical-path-quest "Launch feature X" 2024-09-30
```
