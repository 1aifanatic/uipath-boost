# UiPath Workflow Spec Workspace

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-workflow-spec-workspace/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | User-invoked — start it explicitly. |
| **Purpose** | Maintain a stateful specification for one recurring business workflow before selecting a UiPath product or architecture. |
| **Use it when** | A team needs to discover triggers, steps, rules, evidence, checkpoints, exceptions, ownership, and value over several sessions. |
| **Do not use it for** | Assuming a repeating task must be automated or prematurely mandating AI, RPA, queues, schedules, or Maestro. |
| **Primary output** | One workflow specification, shared organizational notes, checkpoint and exception model, automation-shape observations, and planning handoff. |
| **Maturity** | Core |

## What it does

Teams often jump from “this happens every month” to a product choice. Repetition alone does not prove value, feasibility, or the need for automation. A complete workflow specification exposes the operational loop, its evidence, judgment points, exceptions, and ownership so an architect can evaluate the right shape—including the possibility that part of the work should remain manual.

## Before and after

### Before

A manager describes a monthly reconciliation through emails and spreadsheets. The team assumes it needs a scheduled robot, but the real trigger, entry criteria, data ownership, exception process, and completion evidence are not documented. Different sessions create competing process notes.

### After

One source-of-truth specification traces a run from trigger to outcome, documents rules and exception paths, places human checkpoints only where judgment or authority is required, and separates deterministic work, extraction, reasoning, orchestration, and manual work. The architect receives a complete process input without a forced product decision.

## When to reach for it

Invoke this skill explicitly as `$uipath-workflow-spec-workspace`. UiPath Boost treats it as a deliberate workflow; Codex enforces that policy in `agents/openai.yaml`.

- A recurring workflow is observed but not yet fully specified.
- Discovery will span several sessions.
- Email- or document-driven operational work crosses teams or systems.
- Human approvals or exception ownership need to be placed deliberately.
- The team needs a neutral specification before opportunity sizing or SDD design.
- Several candidate workflows need separate sources of truth.

### Use a neighboring skill instead

- The workflow does not repeat or has no demonstrated value to study.
- A complete, approved specification already exists.
- You want an SDD, implementation plan, or product artifact.
- You want to hide unresolved ownership behind technical terms.
- Multiple competing specifications would be created for the same workflow.

## Prerequisites

- Observed triggers, frequency, participants, artifacts, systems, delays, rework, and consequences.
- Representative normal and exception examples.
- Business owners for steps, decisions, and evidence.
- A workspace location with one specification per workflow and shared `NOTES.md` for organizational conventions.
- The expected downstream consumer: opportunity discovery, architect, or planner.

## What it produces

- A named source-of-truth specification for each recurring loop.
- Shared organizational notes for tools, channels, terminology, and reusable constraints.
- Trigger, entry criteria, inputs, steps, decisions, rules, outputs, evidence, retries, exceptions, completion, and consumers.
- Human checkpoints with reason, owner, and decision-ready context.
- Automation-shape observations without final architecture.
- An evidence-backed handoff to opportunity discovery or planning.

## How it works

1. **Create the workspace.** Establish one specification and shared-note conventions.
2. **Prove a real loop exists.** Use observed behavior and value, not hypothetical interest.
3. **Specify end to end.** Make one run traceable from trigger to completion.
4. **Place human checkpoints late and deliberately.** Preserve judgment and authority with prepared context.
5. **Challenge the automation shape.** Separate different work types and constraints without choosing products.
6. **Reach process readiness.** Continue until no silent process question blocks architectural evaluation.

## Example prompt

```text
Use uipath-workflow-spec-workspace.

Create one stateful specification for the monthly reconciliation loop. Use the
observed emails, spreadsheets, and meeting notes to document trigger, entry
criteria, inputs, rules, steps, evidence, exceptions, retries, ownership,
completion, and downstream consumers. Place human checkpoints only where
judgment or authority is required. Describe possible work shapes without
choosing AI, RPA, Maestro, queues, or schedules yet.
```

## Common questions

**Why does the agent not start this automatically?**

This workflow benefits from an intentional human start because it orchestrates a session, changes durable project structure, or makes a cross-work decision. Installation makes it available; it does not run it.

## It's working if

- The workflow is evidenced as recurring and valuable enough to study.
- One run can be traced from trigger to outcome.
- Rules, evidence, exception paths, retries, and completion are explicit.
- Every human checkpoint has a reason, owner, and prepared brief.
- Deterministic, extraction, reasoning, orchestration, human, and unsupported work are distinguished.
- No product is assumed before the need profile is clear.
- No silent process assumption blocks an architect or planner.

## Where it fits

This is a **user-invoked orchestration skill** in UiPath Boost. Use [uipath-project-router](uipath-project-router.md) when you need to decide whether it is the right entry point or what should follow it.

## Official UiPath handoff

- `uipath-automation-discovery` owns opportunity sizing and portfolio evidence.
- `uipath-planner` owns SDD creation and the canonical task plan once the workflow is ready.
- Product skills own implementation after architecture selection.

## Related resources

- [Discovery Interview guide](uipath-discovery-interview.md)
- [Process Domain Modeling guide](uipath-process-domain-modeling.md)
- [Skill source](../../skills/uipath-workflow-spec-workspace/SKILL.md)
