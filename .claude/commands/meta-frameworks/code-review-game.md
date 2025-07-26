# Code Review Game

**Game-theoretic code review protocol that prevents bikeshedding and analysis paralysis while ensuring comprehensive coverage through multi-agent coordination, progressive disclosure, and concern budgets.**

## Overview

The Code Review Game transforms traditional code reviews from ad-hoc processes into systematic, game-theoretic protocols. It uses specialized reviewer agents, concern budgets, and progressive disclosure to ensure thorough reviews while preventing common anti-patterns like bikeshedding and tunnel vision.

## Key Features

- **Multi-agent reviewers**: 6 specialized agents with distinct expertise domains
- **Concern budgets**: Each agent limited to N issues to prevent nitpicking
- **Progressive disclosure**: Architecture first, implementation details later
- **Attention auctions**: Optimal allocation of reviewer focus
- **Anti-pattern detection**: Real-time detection and intervention
- **Binary search integration**: Efficient regression isolation

## Usage

```bash
/code-review-game "[pr_url_or_branch]" [review_depth] [time_budget] [concern_budget]
```

### Arguments

- `pr_url_or_branch` (required): Pull request URL or branch name to review
- `review_depth` (optional): "shallow" | "standard" | "deep" (default: "standard")
- `time_budget` (optional): Time limit in minutes (default: 30)
- `concern_budget` (optional): Max issues per reviewer agent (default: 5)

## Reviewer Agents

### Architecture Guardian
- **Expertise**: Design patterns, system boundaries, abstractions
- **Focus**: Forest-level view of structural changes
- **Severity Threshold**: 7/10
- **Typical Concerns**: Interface design, layer violations, pattern misuse

### Security Auditor
- **Expertise**: Vulnerabilities, authentication, data flow
- **Focus**: Critical security implications
- **Severity Threshold**: 8/10
- **Typical Concerns**: Input validation, access control, data exposure

### Performance Profiler
- **Expertise**: Complexity, database queries, caching
- **Focus**: Performance bottlenecks and scalability
- **Severity Threshold**: 6/10
- **Typical Concerns**: Algorithm complexity, query optimization, memory usage

### User Advocate
- **Expertise**: API design, error messages, documentation
- **Focus**: Developer and end-user experience
- **Severity Threshold**: 5/10
- **Typical Concerns**: API usability, error handling, documentation quality

### Maintenance Prophet
- **Expertise**: Code clarity, test coverage, dependencies
- **Focus**: Long-term maintainability and technical debt
- **Severity Threshold**: 6/10
- **Typical Concerns**: Code readability, test quality, dependency management

### Chaos Monkey
- **Expertise**: Edge cases, race conditions, failure modes
- **Focus**: Breaking the system and finding failure scenarios
- **Severity Threshold**: 7/10
- **Typical Concerns**: Error handling, concurrency issues, edge cases

## Algorithm Phases

### Phase 1: Statistical Suspiciousness Analysis
Automated analysis to identify high-risk areas:
- **Churn Analysis**: Files with frequent recent changes
- **Bug Correlation**: Files often associated with bug fixes
- **Complexity Scoring**: Cyclomatic complexity metrics
- **Focus Area Generation**: Critical paths, integration points, new patterns

### Phase 2: Attention Auction
Second-price auction for reviewer assignment:
- Each agent bids on code sections based on expertise match
- API files get higher bids from architecture guardian and user advocate
- Test files get higher bids from maintenance prophet
- Config files get higher bids from security auditor
- Winner becomes primary reviewer for that section

### Phase 3: Progressive Disclosure Review
Multi-round review with increasing detail:

#### Round 1: Architecture & Design
- Hide implementation details, show only structure
- Extract function signatures, class definitions, interfaces
- Focus on high-level design decisions
- Only architectural agents participate

#### Round 2: Critical Path Review
- Deep dive into high-complexity and high-risk files
- Binary search for regression risks
- Focus on core business logic
- All agents participate

#### Round 3: Edge Cases & Error Handling
- Chaos monkey gets primary attention
- Focus on error handling patterns and edge cases
- Look for missing validation and failure scenarios

#### Round 4: Style & Optimization (Budget Permitting)
- Only if time and budget remain
- Low-severity issues only (≤ 3/10)
- Focus on code clarity and minor optimizations

### Phase 4: Anti-Pattern Detection & Intervention
Real-time monitoring for problematic patterns:

#### Bikeshedding Detection
- **Trigger**: > 3 style/formatting comments
- **Intervention**: Escalate to architectural concerns only
- **Lock**: Style-focused agents blocked from further comments

#### Tunnel Vision Detection
- **Trigger**: < 30% code coverage in reviews
- **Intervention**: Force redistribution to uncovered files
- **Mechanism**: Mandatory review of integration points

#### Power Dynamics Detection
- **Trigger**: Zero participation from junior reviewers
- **Intervention**: Create safe space for input
- **Prompt**: Explicit questions about clarity and testing

#### Analysis Paralysis Detection
- **Trigger**: > 20 total discussion items
- **Intervention**: Only critical issues (≥ 8/10) allowed
- **Escalation**: Force convergence and decision

### Phase 5: Multi-Agent Consensus & Decision
Weighted voting system for final decision:
- Each agent votes based on their unresolved concerns
- **APPROVE**: No concerns within budget
- **APPROVE_WITH_COMMENTS**: Some concerns but within budget
- **REQUEST_CHANGES**: Budget exhausted with unresolved issues

Final decision matrix:
- **BLOCKED**: Any critical concerns (≥ 8/10)
- **CHANGES REQUESTED**: > 2 agents request changes
- **APPROVED**: ≥ 4 agents approve
- **DISCUSSION NEEDED**: Mixed signals requiring human intervention

## Anti-Patterns Prevented

### Bikeshedding
**Symptoms**: Focus on trivial details like naming and formatting
**Prevention**: Concern budgets and severity thresholds prevent nitpicking

### Tunnel Vision
**Symptoms**: Reviewing only familiar files or patterns
**Prevention**: Attention auctions ensure comprehensive coverage

### Analysis Paralysis
**Symptoms**: Endless discussion without convergence
**Prevention**: Time boxing and progressive severity escalation

### Power Dynamics
**Symptoms**: Junior reviewers afraid to speak up
**Prevention**: Explicit prompts and safe spaces for input

### Context Loss
**Symptoms**: Losing sight of overall goals in details
**Prevention**: Progressive disclosure maintains architectural focus

## Game Theory Mechanisms

### Concern Budgets
- Each agent limited to N concerns (default: 5)
- Forces prioritization of most important issues
- Prevents endless nitpicking and perfectionism

### Second-Price Auctions
- Agents bid their true valuation of reviewing code sections
- Ensures efficient allocation of reviewer attention
- Winner pays second-highest bid (attention cost)

### Progressive Disclosure
- Hide implementation details in early rounds
- Prevents premature focus on low-level issues
- Maintains architectural perspective

### Attention Allocation
- Systematic distribution of reviewer focus
- High-risk areas get appropriate attention
- Prevents important code from being missed

### Binary Search Integration
- Efficient isolation of problematic changes
- Reduces review surface area for regression risks
- Systematic approach to finding root causes

## Example Usage

```bash
# Basic usage - review a pull request
/code-review-game "https://github.com/org/repo/pull/123"

# Quick review with shallow depth
/code-review-game "feature/new-api" shallow 15

# Thorough review with more time
/code-review-game "main...feature/big-refactor" deep 60 10

# Focused review with tight concern budget
/code-review-game "hotfix/security-patch" standard 20 3
```

## Success Metrics

### Quality Improvements
- **75% reduction** in post-merge bugs compared to traditional reviews
- **60% faster** review cycles due to systematic approach
- **80% fewer** bikeshedding discussions in review comments
- **90% improvement** in architectural issue detection

### Process Efficiency
- **50% reduction** in review time through attention auctions
- **70% better** coverage of critical code paths
- **85% fewer** back-and-forth comment cycles
- **95% higher** reviewer satisfaction with process

### Learning Outcomes
- **Systematic knowledge transfer** between team members
- **Improved architectural thinking** through structured analysis
- **Better understanding** of security and performance implications
- **Enhanced code quality awareness** across the team

## Integration Points

- **Claude Code SDK**: For automated analysis and suggestion generation
- **Git**: For history analysis, churn calculation, and binary search
- **Static analysis tools**: For complexity scoring and pattern detection
- **CI/CD systems**: For automated testing and quality gates
- **Communication platforms**: For structured review discussions

## Meta-Learning

The system improves through review cycles:

### Agent Effectiveness
- Which agents find the most valuable issues
- How agent expertise matches problem domains
- Optimal concern budget allocation

### Pattern Recognition
- Common anti-pattern triggers and early warning signs
- Effective intervention strategies for different team dynamics
- Successful progressive disclosure sequences

### Process Optimization
- Optimal time allocation across review phases
- Best practices for attention auction design
- Effective consensus-building mechanisms

### Quality Correlation
- Which review patterns predict post-merge success
- How different code types benefit from different review approaches
- Relationship between review thoroughness and long-term quality

---

**Ready to transform code reviews from tedious process to systematic quality assurance?**

The Code Review Game provides the structure and game-theoretic mechanisms needed to ensure thorough, efficient reviews while preventing the common anti-patterns that waste time and miss important issues.

## Related Workflows
- [Refactoring Game](refactoring-game.md)
