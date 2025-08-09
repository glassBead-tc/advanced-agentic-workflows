# Pareto Pursuit

**Multi-objective optimization game to surface trade-offs along the Pareto frontier.**

## Overview
Pareto Pursuit asks players to optimize a system across competing objectives—cost vs. quality, speed vs. accuracy, etc. Rather than chase a single optimum, the game encourages generating and comparing nondominated solutions to illuminate trade-off space.

## Key Features
- **Objective Vector**: Each candidate solution scores on multiple metrics.
- **Dominance Testing**: Automatically filters dominated options.
- **Frontier Mapping**: Visualizes trade-off curve as solutions accumulate.
- **Preference Elicitation**: Optional utility functions to pick a final point.

## Usage
```bash
/pareto-pursuit "metric1" "metric2" ["metric3" ...]
```
- Metrics define the objectives to track.

## Workflow Structure
1. **Metric Definition** – Agree on which objectives matter.
2. **Candidate Generation** – Propose solutions with metric scores.
3. **Dominance Check** – Remove any option dominated on all metrics.
4. **Frontier Review** – Inspect remaining options; gather more if frontier sparse.
5. **Selection** – Use utility weights or discussion to choose a compromise.

## Success Metrics
- Number of nondominated solutions discovered.
- Clarity of trade-offs among objectives.
- Stakeholder satisfaction with chosen point.

## Anti-Patterns Prevented
- **Single-Metric Myopia** that optimizes one dimension at others' expense.
- **Hidden Trade-Offs** by making compromises explicit.
- **Premature Commitment** before exploring solution space.

## Integration Points
- Data analysis tools for metric calculation.
- Visualization libraries for frontier charts.
- Decision support systems for utility modeling.

## Example
```bash
/pareto-pursuit "cost" "quality" "time"
```
