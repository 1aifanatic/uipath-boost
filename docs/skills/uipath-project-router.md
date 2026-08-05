# UiPath Project Router

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-project-router/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | User-invoked — start it explicitly. |
| **Purpose** | Choose the smallest correct sequence of official UiPath and UiPath Boost skills for a clearly stated outcome. |
| **Use it when** | You explicitly want help deciding which skill, workflow, or starting point to use. |
| **Do not use it for** | Performing the actual build, review, test, diagnosis, deployment, or tenant operation. |
| **Primary output** | A route card naming the first skill, optional next skill, required input, expected artifact, approval boundary, and stop condition. |
| **Maturity** | Core |

## What it does

UiPath work can involve official product skills for RPA, agents, Maestro, testing, administration, governance, platform operations, and troubleshooting, plus UiPath Boost skills for the engineering practices around that work. The router prevents users from memorizing the whole catalog or accidentally starting with a skill that does not own their desired outcome.

It is deliberately small. It chooses a route and stops. It does not begin the specialist work while the user is still deciding what should happen.

## Before and after

### Before

A user has a process document, a repository, and a broad request such as “help me automate this.” They are unsure whether to start with discovery, planning, RPA authoring, an agent, Maestro, or a review. Trying random skills could create duplicate documents or bypass an official product owner.

### After

The user receives a short route such as:

1. Start with `uipath-planner` using the approved PDD.
2. Use `uipath-task-refinement` only if a generated task is too large for one work session.
3. Hand each implementation task to its official product skill.
4. Stop before deployment unless the user gives explicit authorization.

The result is a decision about the workflow—not fabricated product work.

## When to reach for it

Invoke this skill explicitly as `$uipath-project-router`. UiPath Boost treats it as a deliberate workflow; Codex enforces that policy in `agents/openai.yaml`.

- You ask, “Which UiPath skill should I use?”
- You need the correct flow from a document, repository, error, review report, or release-evidence set.
- Several official and community skills appear relevant and their order is unclear.
- You want a read-only route before allowing source or platform changes.
- You need to identify where a UiPath Boost activity must hand control back to an official UiPath owner.

### Use a neighboring skill instead

- You already know the official product skill and want it to perform the work.
- You want an SDD or canonical implementation plan; use `uipath-planner`.
- You want a repository quality assessment; use `uipath-review`.
- You want root-cause analysis for a runtime failure; use `uipath-troubleshoot`.
- You want tenant, identity, governance, testing, or deployment operations; use the matching official skill.
- You want the router to edit files, run deployments, or change platform state. It never does those things.

## Prerequisites

Provide as much of the following as you know:

- The business or technical outcome you want.
- The artifact you already have: PDD, SDD, repository, review report, error, test evidence, or release package.
- The lifecycle phase: discovery, design, build, test, release, production support, or learning.
- The UiPath product surface, if known.
- Whether you want advice, a read-only assessment, source changes, or platform changes.
- The environment and approval limits that must not be crossed.

Unknown details are acceptable, but the requested outcome must be explicit.

## What it produces

A useful route card contains:

- **Primary skill:** the owner of the immediate outcome.
- **Optional extension:** one UiPath Boost skill only when it creates a distinct artifact.
- **Required input:** the document, repository, evidence, or confirmed symptom needed to begin.
- **Expected output:** the artifact the next skill should produce.
- **Ownership explanation:** why the official or community skill owns that step.
- **Approval boundary:** what would require additional user authority.
- **Stop condition:** where routing ends and specialist work begins.

## How it works

1. **Anchor the outcome.** Separate the requested result from the tool or skill name the user may have guessed.
2. **Apply official ownership first.** Product authoring, commands, schemas, validation, deployment, platform operations, administration, testing, review, and diagnosis remain with official UiPath skills.
3. **Choose the route shape.** Continue in the current context, clear stale context, create a portable handoff, delegate a bounded subtask, or compact the conversation only when that choice materially improves the work.
4. **Add one community extension when needed.** Add a UiPath Boost skill only when it creates a separate engineering artifact such as a decision log, regression harness, traceability matrix, handoff, or release verdict.
5. **Return the route card.** Make the first action executable and stop without doing it.

## Example prompt

```text
Use uipath-project-router.

I have an approved PDD and an existing UiPath repository.
I need to add a human approval step and prove it is ready for release.
I want a read-only route first. Do not edit files or deploy anything.
Tell me the primary skill, optional next skills, required inputs,
expected outputs, approval boundaries, and stop conditions.
```

## Common questions

**Why does the agent not start this automatically?**

This workflow benefits from an intentional human start because it orchestrates a session, changes durable project structure, or makes a cross-work decision. Installation makes it available; it does not run it.

## It's working if

The routing task is complete when:

- The first skill has one clear job.
- Every optional skill produces a distinct artifact.
- Official product ownership is not shadowed.
- Required inputs and expected outputs are named.
- Source-changing and platform-changing boundaries are explicit.
- The user can invoke the next skill without another routing discussion.
- No specialist work was performed or implied.

## Where it fits

This is the **user-invoked front door** to UiPath Boost. Use it when ownership or sequence is unclear; skip it when the correct specialist skill is already obvious.

## Official UiPath handoff

Common official owners include:

- `uipath-planner` for SDDs and canonical multi-skill task plans.
- Product owners such as `uipath-rpa`, `uipath-agents`, and Maestro skills for implementation.
- `uipath-review` for read-only artifact and solution review.
- `uipath-troubleshoot` for causal diagnosis.
- `uipath-test` for Test Manager operations.
- `uipath-process-mining` for Process Mining app analysis and process-model work.
- `uipath-platform`, `uipath-admin`, and `uipath-governance` for live platform responsibilities.
- `uipath-solution` for packaging, deployment, and activation.

The router may point to these skills, but it never reproduces their commands or performs their operations.

## Related resources

- [Routing table](../../skills/uipath-project-router/references/routing-table.md)
- [Context and phase boundaries](../../skills/uipath-project-router/references/phase-boundaries.md)
- [Official UiPath skill composition map](../../skills/uipath-project-router/references/official-uipath-skill-map.md)
- [UiPath Project Router source](../../skills/uipath-project-router/SKILL.md)
