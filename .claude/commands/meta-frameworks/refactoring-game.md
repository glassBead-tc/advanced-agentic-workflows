# Refactoring Game

**Game-theoretic refactoring protocol that prevents perfectionism spirals while maintaining code quality through energy budgets, multi-agent coordination, and spiral detection.**

## Overview

The Refactoring Game uses game theory to balance the competing interests of perfectionism, shipping pressure, maintainability, and user value. It prevents endless refactoring cycles through energy budgets, commitment devices, and multi-agent consensus mechanisms.

## Key Features

- **Energy budgets**: Prevent perfectionism through resource constraints
- **Multi-agent players**: Balanced perspectives (perfectionist, shipper, maintainer, user)
- **Spiral detection**: Mathematical detection of unproductive patterns
- **Commitment devices**: Progressive constraints when problems are detected
- **Auction mechanism**: Systematic prioritization of refactoring candidates
- **Minimax regret**: Game-theoretic option selection

## Usage

```bash
/refactoring-game [codebase_path] [ship_deadline] [budget] [max_iterations] [confidence_threshold]
```

### Arguments

- `codebase_path` (required): Path to the codebase to refactor
- `ship_deadline` (optional): ISO 8601 deadline (default: 4 hours from now)
- `budget` (optional): Energy units for refactoring (default: 100)
- `max_iterations` (optional): Maximum refactoring rounds (default: 5)
- `confidence_threshold` (optional): Quality threshold 0-1 (default: 0.8)

## Game Players

### The Perfectionist
- **Weight**: 0.8
- **Goal**: Maximum code quality and architectural beauty
- **Bias**: Over-engineering, endless refinement
- **Constraint**: Energy budget forces prioritization

### The Shipper
- **Weight**: 0.9
- **Goal**: Meeting deadlines and delivering value
- **Bias**: Technical debt, shortcuts
- **Constraint**: Quality gates prevent regressions

### The Maintainer
- **Weight**: 0.7
- **Goal**: Long-term code health and clarity
- **Bias**: Conservative changes, fear of complexity
- **Constraint**: User feedback drives priorities

### The User
- **Weight**: 1.0
- **Goal**: Stable, reliable software
- **Bias**: Status quo preference
- **Constraint**: Test results provide reality check

## Algorithm Overview

### Phase 0: Initialize Game State
- Create tracking for budget, improvements, and spiral detection
- Initialize player states with satisfaction levels
- Set up auction system for refactoring candidates

### Phase 1: Codebase Auction Analysis
- Calculate refactoring bids based on:
  - Code complexity scores
  - Git churn (commit frequency)
  - Bug correlation (fix-related commits)
- Rank candidates by bid value (pain × impact)

### Phase 2: Main Game Loop
For each iteration:
1. **Spiral Detection**: Check for oscillation, scope creep, diminishing returns
2. **Commitment Device Enforcement**: Apply progressive constraints
3. **Refactoring Auction**: Select highest-value affordable candidate
4. **Option Generation**: Create minimal, moderate, and comprehensive approaches
5. **Minimax Regret Evaluation**: Select approach with minimum maximum regret
6. **Execution**: Implement with testing and rollback capability
7. **Multi-Agent Consensus**: Check if all players agree to continue

### Phase 3: Game Summary
- Calculate final metrics and outcomes
- Generate improvement reports
- Commit changes if successful
- Store learnings for future games

## Anti-Patterns Prevented

### Perfectionism Spirals
**Symptoms**: Endless refinement without shipping
**Prevention**: Energy budgets force prioritization and completion

### Scope Creep
**Symptoms**: Refactoring expanding to touch more files
**Prevention**: Commitment devices lock scope when detected

### Oscillation Patterns
**Symptoms**: A→B→A cycles in the same file
**Prevention**: Pattern detection breaks repetitive changes

### Diminishing Returns
**Symptoms**: Later iterations provide little value
**Prevention**: Value tracking and consensus voting

### Context Loss
**Symptoms**: Losing sight of original goals
**Prevention**: Multi-agent consensus maintains strategic view

## Game Theory Mechanisms

### Energy Budgets
Each refactoring operation costs energy based on:
- Complexity of the change
- Number of files touched
- Risk level of modification

### Auction System
Files compete for attention based on:
- **Complexity**: Cyclomatic complexity scores
- **Churn**: Historical change frequency
- **Bugs**: Correlation with bug fixes
- **Bid**: Composite score representing refactoring value

### Commitment Devices
Progressive constraints applied when spirals detected:
1. **Level 0**: No constraints
2. **Level 1**: Soft time box (2 hours remaining)
3. **Level 2**: Hard iteration limit
4. **Level 3**: Scope locked to touched files
5. **Level 4**: Bug fixes only
6. **Level 5**: Forced ship (merge current state)

### Minimax Regret Decision Making
For each refactoring option, evaluate regret across scenarios:
- **Ship Tomorrow**: How much regret if we ship immediately?
- **Maintain Forever**: How much regret for long-term maintenance?
- **Hand to Junior**: How much regret if junior developer takes over?
- **Scale 10x**: How much regret if system needs to scale?

Select option with minimum maximum regret across all scenarios.

## Example Usage

```bash
# Basic usage - refactor src/ folder with 4-hour deadline
/refactoring-game ./src

# Custom deadline and budget
/refactoring-game ./src "2024-12-20T17:00:00" 150

# Conservative settings for critical codebase
/refactoring-game ./critical "2024-12-20T12:00:00" 50 3 0.95

# Aggressive refactoring with more iterations
/refactoring-game ./legacy "2024-12-21T00:00:00" 200 10 0.7
```

## Success Metrics

### Quality Improvements
- **Complexity Reduction**: Measurable decrease in cyclomatic complexity
- **Test Coverage**: Maintained or improved test coverage
- **Code Duplication**: Reduced duplicated code patterns
- **Documentation**: Improved code clarity and comments

### Process Efficiency
- **Time Boxing**: Completion within allocated time budget
- **Spiral Avoidance**: No detected perfectionism or scope creep patterns
- **Consensus Achievement**: All player agents satisfied with outcome
- **Learning Capture**: Patterns and decisions documented for future use

### Business Value
- **Ship Readiness**: Code ready for production deployment
- **Maintenance Cost**: Reduced future maintenance burden
- **Developer Velocity**: Improved development speed for future changes
- **Technical Debt**: Strategic reduction without over-engineering

## Integration Points

- **Claude Code SDK**: For code analysis, refactoring suggestions, and testing
- **Git**: For historical analysis, churn calculation, and branch management
- **Testing frameworks**: For validation and regression prevention
- **Static analysis tools**: For complexity calculation and quality metrics
- **CI/CD systems**: For automated testing and deployment readiness

## Meta-Learning

The Refactoring Game learns from each execution:

### Pattern Recognition
- Which files typically need refactoring first
- What refactoring approaches work best for different code types
- How accurate spiral detection patterns are
- Which consensus mechanisms prevent problems

### Heuristic Improvement
- Refine energy budget allocation formulas
- Improve bid calculation for auction system
- Better calibration of commitment device triggers
- Enhanced regret matrix accuracy

### Organizational Learning
- Team velocity patterns with different refactoring approaches
- Cost-benefit analysis of refactoring investments
- Best practices for maintaining code quality over time
- Effective escalation and decision-making processes

---

**Ready to refactor systematically without falling into perfectionism traps?**

The Refactoring Game provides the structure and constraints needed to improve code quality efficiently while maintaining shipping velocity and team sanity.

## Related Workflows
- [Code Review Game](code-review-game.md)
- [Virgil Protocol](virgil-protocol.md)
