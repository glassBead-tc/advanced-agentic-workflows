# Shadow Price Showdown

**Constraint valuation game using dual analysis from linear programming.**

## Overview
Shadow Price Showdown reveals which constraints in a linear optimization problem truly matter. Players formulate an LP, solve its dual, and interpret shadow prices to decide where relaxing a constraint would yield the biggest payoff.

## Key Features
- **Primal/Dual Pairing**: Automatically derive dual variables from the primal model.
- **Sensitivity Reports**: Quantify value of marginally relaxing each constraint.
- **Constraint Auctions**: Players bid to relax constraints based on shadow prices.
- **Re-solve Loop**: Adjust bounds and re-optimize to observe gains.

## Usage
```bash
/shadow-price-showdown "<lp_model>"
```
- `lp_model` (required): Path or reference to a linear program definition.

## Workflow Structure
1. **Model Formulation** – Define objective, variables, and constraints.
2. **Dual Analysis** – Solve LP and extract shadow prices.
3. **Constraint Auction** – Rank constraints by value of relaxation.
4. **Relaxation Rounds** – Loosen selected constraints and re-solve.
5. **Post-Mortem** – Record which relaxations yielded best objective improvement.

## Success Metrics
- Objective improvement per unit of relaxed constraint.
- Number of constraints deemed non-binding.
- Cost savings or profit increase achieved.

## Anti-Patterns Prevented
- **Arbitrary Constraint Tightening** without understanding impact.
- **Misplaced Optimization** on non-binding constraints.
- **Stagnant Models** that ignore marginal value.

## Integration Points
- LP solvers (GLPK, CPLEX, etc.).
- Modeling languages (Pyomo, AMPL) for problem definition.
- Reporting tools for sensitivity analysis.

## Example
```bash
/shadow-price-showdown "transportation-model.lp"
```
