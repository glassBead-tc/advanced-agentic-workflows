# Knapsack Sprint

**Rapid resource allocation game using a simplified knapsack optimization.**

## Overview
Knapsack Sprint forces disciplined prioritization when resources are scarce. Players list candidate tasks with value scores and resource costs (time, budget, energy). The goal is to select the mix that maximizes total value without exceeding capacity.

## Key Features
- **Value-Cost Matrix**: Quantify payoff vs. expense for each task.
- **Capacity Constraint**: Hard limit forces trade-offs.
- **Greedy vs. Optimal**: Supports both heuristic and exact selection modes.
- **What-If Rounds**: Swap items to test marginal gains.

## Usage
```bash
/knapsack-sprint "<capacity>" "task1:value:cost" "task2:value:cost" ...
```
- `capacity` (required): Total resource budget.
- Subsequent arguments define tasks with their value and cost.

## Workflow Structure
1. **Inventory Listing** – Enumerate tasks with value and cost.
2. **Selection Phase** – Choose tasks fitting within capacity.
3. **Optimization Loop** – Try swaps or algorithms to improve total value.
4. **Commit** – Lock in chosen set and execute.

## Success Metrics
- Total value achieved vs. theoretical optimum.
- Resource utilization percentage.
- Opportunity cost of excluded tasks.

## Anti-Patterns Prevented
- **Scope Spread** from taking on too many tasks.
- **Value Blindness** by ignoring payoff scores.
- **Last-Minute Cramming** that exceeds capacity.

## Integration Points
- Project management tools for task metadata.
- Optimization libraries for solving larger instances.
- Budget trackers for resource accounting.

## Example
```bash
/knapsack-sprint "8h" "tests:5:3" "docs:2:1" "refactor:4:6"
```
