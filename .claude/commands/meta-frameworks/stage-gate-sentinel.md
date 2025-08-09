# Stage Gate Sentinel

**Phased delivery workflow with decision gates that blend Stage-Gate, DMAIC and Double Diamond principles.**

## Overview
Stage Gate Sentinel structures product work into discrete phases with explicit go/kill gates. It pairs the Stage-Gate model with DMAIC metrics and Double Diamond exploration/convergence to prevent runaway projects.

## Key Features
- **Sequential Phases**: Discover → Scope → Business Case → Development → Test → Launch.
- **Metric Gates**: Each gate uses DMAIC-style data to justify continuation.
- **Diverge/Converge Cadence**: Double Diamond pattern ensures broad exploration before commitment.
- **Gamified Progression**: Teams earn "gate badges" for passing criteria on first attempt.

## Usage
```bash
/stage-gate-sentinel "<project>" "<metric>" 
```
- `project`: name or description.
- `metric`: primary success metric to track (e.g., ROI, adoption).

## Workflow Structure
1. **Discover** – Research and empathise with users.
2. **Scope** – Frame problem; define constraints.
3. **Business Case** – Quantify value; decide go/no-go.
4. **Development** – Build incrementally with PDCA mini-cycles.
5. **Test** – Validate solution against metric.
6. **Launch** – Deploy and capture learnings.

Each phase ends with a gate checklist:
- [ ] Evidence meets success metric.
- [ ] Risks mitigated or accepted.
- [ ] Team consensus to continue.

## Success Metrics
- Gate pass rate on first attempt.
- Cycle time per phase.
- Ratio of validated learning vs. time invested.

## Anti-Patterns Prevented
- **Scope Creep** through enforced gates.
- **Sunk Cost Fallacy** via kill decisions.
- **Endless Exploration** curtailed by diverge/converge structure.

## Integration Points
- Project trackers for phase status.
- Analytics dashboards for DMAIC metrics.
- Reward systems for gate badges.

## Example
```bash
/stage-gate-sentinel "Realtime collaboration MVP" "weekly active users"
```
