# Monte Carlo Mandate

**Uncertainty exploration game that compares strategies via stochastic simulation.**

## Overview
Monte Carlo Mandate tackles decisions where outcomes vary. Players define uncertain variables with probability distributions, propose competing strategies, and run simulations to estimate expected payoff and risk. The best strategy balances mean performance with variance tolerance.

## Key Features
- **Distribution Inputs**: Supports common distributions (normal, triangular, uniform).
- **Strategy Slots**: Each strategy encapsulates decision rules or parameter settings.
- **Batch Simulation**: Runs thousands of trials to sample outcome space.
- **Risk Reports**: Provides mean, variance, and tail statistics.

## Usage
```bash
/monte-carlo-mandate "<scenario>" [trials]
```
- `scenario` (required): Description or path to model definition.
- `trials` (optional): Number of simulation runs (default 1000).

## Workflow Structure
1. **Model Setup** – Define variables and their distributions.
2. **Strategy Definition** – Specify competing decisions.
3. **Simulation Run** – Execute trials and collect outcomes.
4. **Analysis** – Compare strategies on expected value and risk.
5. **Decision** – Choose or refine strategy based on results.

## Success Metrics
- Expected value improvement over naive baseline.
- Probability of loss kept below threshold.
- Sensitivity of outcome to key variables.

## Anti-Patterns Prevented
- **Deterministic Planning** in uncertain domains.
- **Overconfidence** in single-point estimates.
- **Hidden Tail Risk** from ignoring variance.

## Integration Points
- Statistical libraries for distribution sampling.
- Spreadsheets or notebooks for scenario modeling.
- Visualization tools for outcome histograms.

## Example
```bash
/monte-carlo-mandate "ad-campaign-roi" 5000
```
