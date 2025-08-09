# OODA Loop Sprint

**Rapid iteration workflow combining OODA, PDCA and Lean Startup's Build–Measure–Learn.**

## Overview
OODA Loop Sprint accelerates learning by running tight Observe–Orient–Decide–Act cycles wrapped in a PDCA check and Lean Startup metrics. It emphasises orientation as the evolving state and uses gamified scoring to reward validated learning.

## Key Features
- **Nested Loops**: Each OODA cycle maps to a PDCA pass.
- **MVP Focus**: Build–Measure–Learn gates decide pivot or persevere.
- **Orientation Logs**: A3-style sheets capture assumptions and root causes.
- **Feedback Points**: Teams earn points for quick validated decisions.

## Usage
```bash
/ooda-loop-sprint "<hypothesis>" [cycle_limit]
```
- `hypothesis`: statement to test.
- `cycle_limit`: max cycles before escalation (default: 5).

## Workflow Structure
1. **Observe** – Gather data from users or systems.
2. **Orient** – Update A3 sheet with insights and biases.
3. **Decide** – Choose next experiment.
4. **Act** – Build MVP or change; deploy.
5. **Check** – Measure results against hypothesis.
6. **Learn** – Adjust orientation, score cycle, decide to pivot or persevere.

## Success Metrics
- Average cycle time.
- Percent of cycles yielding validated learning.
- Points accumulated per sprint.

## Anti-Patterns Prevented
- **Slow Feedback** through tight cycles.
- **Analysis Paralysis** via cycle limit.
- **Feature Creep** checked by MVP orientation.

## Integration Points
- Experiment trackers.
- Telemetry for measurement.
- Gamified leaderboards.

## Example
```bash
/ooda-loop-sprint "Users prefer dark mode by default" 3
```
