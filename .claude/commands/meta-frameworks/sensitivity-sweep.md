# Sensitivity Sweep

**Parameter robustness game for stress-testing plan assumptions.**

## Overview
Sensitivity Sweep examines how fragile a plan is by systematically varying input parameters. Players identify high-impact assumptions, perturb them across ranges, and observe outcome volatility. Decisions are then adjusted to hedge against sensitive variables.

## Key Features
- **Parameter Catalog**: Track assumptions with baseline values and ranges.
- **Sweep Engine**: Auto-run scenarios across parameter grids or one-at-a-time variations.
- **Tornado Charts**: Visualize which variables swing outcomes most.
- **Mitigation Hooks**: Suggest hedges or safeguards for sensitive inputs.

## Usage
```bash
/sensitivity-sweep "<model>" [step]
```
- `model` (required): Reference to decision model or plan.
- `step` (optional): Percent increment for sweeps (default 10%).

## Workflow Structure
1. **Assumption Listing** – Document key parameters and plausible ranges.
2. **Sweep Execution** – Vary parameters per the chosen step size.
3. **Impact Analysis** – Measure outcome changes.
4. **Plan Adjustment** – Revise plan to reduce dependence on volatile inputs.

## Success Metrics
- Number of assumptions tested.
- Range over which plan remains viable.
- Risk reduction after mitigations.

## Anti-Patterns Prevented
- **Fragile Plans** that break with minor assumption changes.
- **Implicit Assumptions** left undocumented.
- **Overconfidence** in narrow forecasts.

## Integration Points
- Modeling tools (spreadsheets, OR solvers) for recalculations.
- Visualization libraries for tornado or spider charts.
- Risk registers to log mitigations.

## Example
```bash
/sensitivity-sweep "supply-chain-model" 5%
```
