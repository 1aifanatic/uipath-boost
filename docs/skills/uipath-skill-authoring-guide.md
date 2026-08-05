# UiPath Skill Authoring Guide

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-skill-authoring-guide/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | Model-invoked — start it explicitly or let the agent select it when the request fits. |
| **Purpose** | Design or improve a reusable Agent Skill with one earned job, precise triggers, gates, safety, composition, and tests. |
| **Use it when** | Creating a UiPath skill, deciding official versus community ownership, or fixing an inconsistent, broad, bloated, or untestable skill. |
| **Do not use it for** | Copying current product truth, adding generic advice that changes no behavior, or claiming untested runtime coverage. |
| **Primary output** | Skill definition, `SKILL.md`, supporting resources, evaluation scenarios, validation evidence, and package. |
| **Maturity** | Pilot |

## What it does

An Agent Skill must make a stochastic agent follow a repeatable process. A long prompt with broad triggers, hidden authority assumptions, and no completion gates will activate unpredictably and finish prematurely. This guide gives each skill one defensible job, an intentional invocation mode, a small context footprint, and clear ownership boundaries with official UiPath skills.

## Before and after

### Before

A proposed “UiPath project expert” skill handles discovery, planning, implementation, testing, deployment, and support. Its description fires on almost every UiPath request. It duplicates CLI commands, includes a fragile script that was never tested, and ends when the agent feels finished.

### After

The repeatable job is narrowed to one outcome with concrete inputs and outputs. Official product commands are delegated. The description contains clear triggers and anti-triggers. Steps are imperative and end with observable gates. Branch details move to references, deterministic work to tested scripts, and reusable output shapes to assets. Safety and evaluation scenarios prove the intended behavior and limits.

## When to reach for it

Invoke this skill as `$uipath-skill-authoring-guide`, or let the agent select it automatically when the request matches its defined job.

- Creating a community or organization-specific UiPath skill.
- Reviewing a skill with unreliable activation.
- Splitting a skill that owns too many outcomes.
- Deciding whether a workflow belongs in `UiPath/skills` or a complementary catalog.
- Adding gates, evidence, safety, official composition, or evaluations.
- Packaging a skill with references, scripts, and assets.

### Use a neighboring skill instead

- A one-off prompt does not represent recurring work.
- The skill’s only purpose is to repeat official product commands.
- Generic advice will not change agent behavior.
- Scripts cannot be tested in the claimed environment.
- Runtime or product coverage would be stated beyond observed evidence.

## Prerequisites

- Concrete input and output examples.
- Recurring failure modes.
- User authority and environment boundaries.
- The parts of the process that should remain consistent across runs.
- Current official UiPath catalog ownership.
- Trigger and anti-trigger scenarios.
- Validation and test environment.

## What it produces

- One-sentence earned job and ownership boundary.
- Precise lowercase skill name and description.
- Invocation examples and anti-trigger cases.
- Imperative workflow steps with checkable completion criteria.
- Concise `SKILL.md` control plane.
- References for branch-specific detail, scripts for fragile deterministic operations, and assets for reusable output shapes.
- UiPath safety, data handling, approval, evidence, and official handoff rules.
- Happy-path, failure-path, adversarial-trigger, structural, script, and package validation evidence.

## How it works

1. **Prove the recurring job.** Reject one-off prompts disguised as skills.
2. **Check official ownership.** Keep product truth with official UiPath skills.
3. **Design precise invocation.** Choose user invocation for deliberate orchestrators and model invocation for focused disciplines; write triggers and anti-triggers that keep neighboring work separate.
4. **Write ordered steps with gates.** Make partial completion observable.
5. **Control context load.** Keep `SKILL.md` as the control plane, point directly to branch-specific references, and cache only facts that are expensive to rediscover.
6. **Add composition and safety.** Make authority and evidence boundaries explicit.
7. **Test behavior, validate structure, and package.** Use trigger, anti-trigger, safety, and completion scenarios; claim only observed coverage.

## Example prompt

```text
Use uipath-skill-authoring-guide.

Review this proposed release-evidence skill. Prove its recurring job, compare it
with the current official UiPath owners, tighten triggers and anti-triggers,
rewrite the workflow with exhaustive completion gates, move branch details into
references, define approval and data boundaries, and create happy, failure, and
adversarial evaluation scenarios. Do not copy current product commands.
```

## Common questions

**Will this skill make changes simply because it is model-invoked?**

No. Model invocation only lets the agent load the instructions when the request fits. Source writes, tracker changes, tenant operations, deployments, and other consequential actions still require the authority stated by the request and the owning official skill.

## It's working if

- The skill solves one recurring task.
- No official product capability is forked.
- The description fires for intended tasks without capturing neighbors.
- Every important step has a checkable completion gate.
- `SKILL.md` remains concise and supporting resources have clear pointers.
- High-consequence actions, data, environment, and ownership are explicit.
- Scripts were actually tested.
- Evaluation and packaging evidence supports every critical claim.

## Where it fits

This is a **model-invoked complementary discipline** in UiPath Boost. It may be selected directly by the agent or reached from a user-invoked workflow. Use [uipath-project-router](uipath-project-router.md) when the larger route is unclear.

## Official UiPath handoff

Current product commands, schemas, validation, deployment, tenant operations, and policy administration belong to official skills. A community skill should create a distinct engineering artifact or organization-specific discipline and hand official work back explicitly.

## Related resources

- [Project Router guide](uipath-project-router.md)
- [Training Lab Scaffolder guide](uipath-training-lab-scaffolder.md)
- [Skill mechanics reference](../../skills/uipath-skill-authoring-guide/references/skill-mechanics.md)
- [Skill source](../../skills/uipath-skill-authoring-guide/SKILL.md)
