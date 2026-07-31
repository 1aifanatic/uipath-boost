# UiPath Architecture Deepening

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-architecture-deepening/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Turn one proven architecture friction point into ranked seam and interface options. |
| **Use it when** | An official review, incident, change history, or user-named hotspot shows that behavior is hard to change, test, understand, or reuse. |
| **Do not use it for** | Initial project review, broad best-practice auditing, quality grading, or direct artifact editing. |
| **Primary output** | Hotspot evidence, change-surface map, alternative designs, recommendation, and safe refactor or decision handoff. |
| **Maturity** | Core |

## Why this skill exists

An official review can prove that a hotspot exists, but a finding does not automatically identify the best new boundary. Architecture deepening focuses on one validated pain point, maps its blast radius, compares genuinely different seams, and produces a design decision that can be migrated safely.

## Before and after

### Before

An official `uipath-review` report shows that the same exception policy is duplicated across six workflows. Changes require editing all six, tests cover different paths, and ownership is unclear. The finding is valid, but “extract common logic” is not yet a safe design.

### After

The team sees the current callers, arguments, queues, configuration, systems, tests, and owners involved. It compares a shared policy component, a transaction-boundary redesign, and a centralized orchestration decision. One option is recommended with compatibility, migration, rollback, behavior-preservation, and test-seam reasoning. The result becomes an ADR or safe refactor plan.

## When to use

- An official review provides a specific structural finding.
- An incident post-mortem exposes architectural coupling.
- Change history shows one recurring hotspot.
- A user can name one painful boundary and provide evidence.
- The team needs alternatives for seam placement, ownership, interface shape, or migration.

## When not to use

- The project has not been reviewed and no hotspot is proven.
- You want a broad audit or Workflow Analyzer results.
- The request is to edit XAML, code, agents, or Maestro artifacts immediately.
- The problem is purely a product validation failure.
- No behavior-preservation or rollback evidence can be defined.

## What you need before starting

- One official review finding, incident post-mortem, change-history hotspot, or specific evidenced pain point.
- The affected business behavior.
- Relevant callers, workflows, arguments, configuration, queues, assets, systems, tests, and ownership.
- Existing ADR or SDD constraints.
- Acceptance evidence that must remain valid.

## What it produces

- A concise evidence summary for one hotspot.
- A map of current coupling, seam, change surface, and blast radius.
- At least two materially different deepening options.
- For each option: public/private behavior, interface, migration, compatibility, test seams, rollback, and operations impact.
- A ranked recommendation and reasons against the alternatives.
- A decision-record or safe-refactor handoff with no implied source edit.

## How it works

1. **Pin one proven hotspot.** Separate evidence from general dissatisfaction.
2. **Map the change surface.** Show how behavior currently travels through the system.
3. **Generate distinct options.** Use component design to move the seam or reshape the interface.
4. **Compare and recommend.** Evaluate locality, leverage, compatibility, cost, rollback, and evidence.
5. **Hand off safely.** Create an ADR or `uipath-safe-refactor-plan`, then route changes to the official artifact owner.

## Example prompt

```text
Use uipath-architecture-deepening.

Start from finding AR-04 in the uipath-review report: retry and exception logic
is duplicated across six workflows. Map the callers, configuration, queues,
tests, ownership, and blast radius. Produce at least two materially different
seam designs, compare compatibility, migration, rollback, locality, and
testability, then recommend one and hand it to uipath-safe-refactor-plan.
Do not modify UiPath artifacts.
```

## How to know it is done

- One hotspot and its evidence are pinned.
- The affected business behavior is explicit.
- Current coupling and blast radius are visible.
- Options differ in seam placement or interface shape.
- Recommendation and rejected alternatives have concrete reasons.
- Behavior preservation, compatibility, rollback, and operations are addressed.
- Conflicts with an ADR or SDD are flagged.
- The next owner has a bounded decision and no source change was implied.

## Official UiPath handoffs

`uipath-review` remains the owner of initial read-only project assessment. After deepening, the matching official product skill implements and validates source changes. `uipath-test` may own Test Manager evidence, while `uipath-solution` owns deployment lifecycle operations.

## Related resources

- [Component Design guide](uipath-component-design.md)
- [Safe Refactor Plan guide](uipath-safe-refactor-plan.md)
- [Skill source](../../skills/uipath-architecture-deepening/SKILL.md)
