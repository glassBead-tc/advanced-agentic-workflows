# Queue Triage

**Queue management game for balancing wait times and service utilization.**

## Overview
Queue Triage models incoming work as a queue with arrival rates and service rates. Players experiment with server allocations, priority rules, and batching strategies to minimize average wait time while keeping utilization high.

## Key Features
- **Arrival/Service Modeling**: Poisson and exponential defaults with override options.
- **Server Pooling**: Dynamically assign workers or compute slots.
- **Priority Disciplines**: FIFO, LIFO, shortest processing time, or custom rules.
- **Simulation Mode**: Run discrete-event simulations to test policies.

## Usage
```bash
/queue-triage [arrival_rate] [service_rate] [servers]
```
- `arrival_rate` (optional): Mean arrivals per time unit (default 1).
- `service_rate` (optional): Mean service completions per time unit (default 1.2).
- `servers` (optional): Number of parallel workers (default 1).

## Workflow Structure
1. **Baseline Simulation** – Run with defaults to observe metrics.
2. **Policy Drafting** – Choose priority rule and server allocation.
3. **Scenario Testing** – Simulate with varied loads or burst patterns.
4. **Policy Selection** – Adopt configuration that meets SLA goals.

## Success Metrics
- Average wait time vs. target.
- Server utilization percentage.
- Queue length variance under bursts.

## Anti-Patterns Prevented
- **Overstaffing** without performance gains.
- **Starvation** of low-priority tasks.
- **Unbounded Queues** during traffic spikes.

## Integration Points
- Monitoring systems for real arrival data.
- Autoscaling controllers for dynamic server allocation.
- Analytics platforms for service metrics.

## Example
```bash
/queue-triage 0.8 1.0 2
```
