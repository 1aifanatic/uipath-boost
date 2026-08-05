# UiPath Safe Refactor Plan

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-safe-refactor-plan/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | Model-invoked — start it explicitly or let the agent select it when the request fits. |
| **Purpose** | Plan a structural UiPath change as tiny, behavior-preserving steps with evidence, rollback, and stop conditions. |
| **Use it when** | A review or architecture decision has selected a direction and the change must preserve approved behavior. |
| **Do not use it for** | Executing the refactor, mixing unapproved business changes into cleanup, or replacing working patterns because another is fashionable. |
| **Primary output** | Behavioral invariants, rationale, safety net, dependency-ordered steps, rollback points, and stop conditions. |
| **Maturity** | Core |

## What it does

Large UiPath refactors are risky because small structural edits can change outputs, exception behavior, timing, or operations. A safe plan first defines what must remain true, builds a failure-detecting safety net, stabilizes the target seam, and then sequences expand-migrate-contract steps that keep the project verifiable.

## Before and after

### Before

A 3,000-activity workflow contains duplicated broker rules and fragile selectors. The team proposes a large rewrite while also changing retry behavior. Existing tests do not cover the public business outcome, and rollback means restoring files manually.

### After

Approved behavior is expressed as invariants and high-level tests. Alternatives—including no change—are compared. The plan introduces preparatory tests, adds a compatible new seam, migrates one caller at a time, verifies each step, and removes the old path only after evidence is green. Performance, output, exception, and regression thresholds trigger rollback or re-planning.

## When to reach for it

Invoke this skill as `$uipath-safe-refactor-plan`, or let the agent select it automatically when the request matches its defined job.

- Official review or architecture deepening proves structural pain and selects a direction.
- Logic is duplicated across workflows or packages.
- Workflows are oversized or arguments are tangled.
- Selectors or external dependencies have weak seams.
- Queue, package, or contract migrations must preserve service.
- Technical debt must be split into safe, assignable work items.

### Use a neighboring skill instead

- The underlying problem is not verified.
- The architecture direction is still open; use `uipath-architecture-deepening` first.
- The request includes unapproved business behavior changes.
- No behavior-level safety net or rollback evidence can be established.
- The proposed replacement is based only on fashion or preference.
- You want the planning skill to edit artifacts itself.

## Prerequisites

- PDD or SDD, public contracts, callers, ADRs, acceptance tests, and operational evidence.
- Current official validation and review results.
- A clear hotspot, its observed cost, and the selected architecture direction.
- Behavior that must not change.
- Candidate safety tests, sample transactions, snapshots, or comparison harnesses.
- Official product owners for eventual implementation and validation.

## What it produces

- Explicit behavioral invariants and refactor boundary.
- Evidence that the problem is real.
- Compared alternatives: deletion, extraction, consolidation, replacement, or no change.
- A safety-net plan at the highest correct public seams.
- Stable target contract and compatibility strategy.
- Tiny prefactor, expand, migrate, verify, and contract steps.
- A check, bounded blast radius, rollback point, and owner for every step.
- Stop conditions for business output, performance, exceptions, and regressions.

## How it works

1. **Establish current behavior.** State what must not change.
2. **Confirm the selected direction.** Record the evidence and rejected alternatives without reopening the architecture survey.
3. **Build the safety net first.** Make structural mistakes observable.
4. **Design the target seam.** Use component design when a public contract changes.
5. **Sequence tiny safe steps.** Keep each step green or explicitly define an integration gate.
6. **Define stop conditions.** Make rollback and escalation objective.
7. **Publish the plan.** Route implementation to the owning official skills.

## Example prompt

```text
Use uipath-safe-refactor-plan.

Plan extraction of duplicated broker rules from six workflows into the approved
component contract. State the business invariants, compare extraction with
consolidation and no change, define behavior-level tests and sample transactions,
then sequence prefactor, expand, migrate, verify, and contract steps. Give every
step a check, rollback point, stop condition, and official owner. Do not edit source.
```

## Common questions

**Will this skill make changes simply because it is model-invoked?**

No. Model invocation only lets the agent load the instructions when the request fits. Source writes, tracker changes, tenant operations, deployments, and other consequential actions still require the authority stated by the request and the owning official skill.

## It's working if

- Approved behavior and the refactor boundary are explicit.
- The selected direction is supported by evidence and rejected alternatives are recorded.
- A structural mistake would cause a detectable failure.
- The target seam and compatibility strategy are stable.
- Every step is small, ordered, checked, and reversible.
- Business, performance, exception, and regression stop thresholds are defined.
- Business behavior changes are separated for independent approval.
- Implementation owners can proceed without inventing a transition strategy.

## Where it fits

This is a **model-invoked complementary discipline** in UiPath Boost. It may be selected directly by the agent or reached from a user-invoked workflow. Use [uipath-project-router](uipath-project-router.md) when the larger route is unclear.

## Official UiPath handoff

Official skills such as `uipath-rpa`, `uipath-agents`, Maestro skills, and `uipath-api-workflow` own source changes and product validation. `uipath-review` confirms structural quality, `uipath-test` owns Test Manager operations, and `uipath-solution` owns packaging and deployment.

## Related resources

- [Architecture Deepening guide](uipath-architecture-deepening.md)
- [Pattern Migration guide](uipath-pattern-migration.md)
- [Skill source](../../skills/uipath-safe-refactor-plan/SKILL.md)
