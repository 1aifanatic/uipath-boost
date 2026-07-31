---
name: uipath-workflow-spec-workspace
description: "Maintain a stateful workspace for discovering and specifying recurring business workflows that may become UiPath automations. Use when a team wants to identify repeatable loops, document triggers, work, evidence, checkpoints, exceptions, ownership, and value over multiple sessions before choosing products or creating an SDD."
---

# UiPath Workflow Spec Workspace

Turn a recurring operational loop into a complete workflow specification an automation architect can evaluate without forcing AI, RPA, Maestro, or a schedule where none is justified.

**Maturity:** core.

## Ownership Boundary

**This custom skill owns:** Turn a recurring operational loop into a complete workflow specification an automation architect can evaluate without forcing AI, RPA, Maestro, or a schedule where none is justified.

It does not own current UiPath product commands, schemas, artifact validation, live tenant operations, or policy administration unless its instructions explicitly say otherwise.

## Compose With Official UiPath Skills

Use official skills for current product commands and artifact contracts:

- `uipath-automation-discovery`
- `uipath-planner`

Read [references/official-uipath-skill-map.md](references/official-uipath-skill-map.md) when routing is unclear.

## Workflow

### 1. Create the workspace

Use one source-of-truth specification per workflow plus NOTES.md for organizational tools, channels, terminology, and reusable constraints.

**Completion criterion:** The workspace and naming convention are established.

### 2. Find a real loop

Identify repeated work through observed triggers, frequency, participants, artifacts, systems, delays, rework, and consequences. Favor current behavior over hypothetical interest.

**Completion criterion:** The selected workflow is evidenced as recurring and valuable enough to study.

### 3. Specify the end-to-end flow

Document trigger, entry criteria, inputs, steps, decisions, business rules, outputs, evidence, exception paths, retries, completion, and downstream consumers.

**Completion criterion:** A reader can trace one run from trigger to outcome.

### 4. Place human checkpoints

Use checkpoints only for judgment, authority, or exception ownership. Push each checkpoint as late as safely possible and define the decision-ready brief it receives.

**Completion criterion:** Every human touch has a reason, owner, and prepared context.

### 5. Challenge the automation shape

Separate deterministic work, extraction, reasoning, orchestration, human work, and unsupported manual work. Record product possibilities and constraints without final architecture.

**Completion criterion:** The spec does not assume a product before the need profile exists.

### 6. Reach implementation readiness

Continue discovery until an architect can evaluate or design without an unanswered process question. Route opportunity sizing to automation discovery and design to uipath-planner.

**Completion criterion:** The workflow spec has no silent process assumptions blocking design.

## Output Contract

- One workflow specification per recurring loop.
- Organizational NOTES.md.
- Checkpoint and exception model.
- Automation-shape observations.
- Discovery or planner handoff.

## Guardrails

- Do not automate a workflow solely because it repeats.
- Do not mandate AI, RPA, queues, or schedules without evidence.
- Do not hide unresolved process ownership behind technical language.
- Do not let multiple specifications compete as sources of truth for one workflow.

## Example Requests

- "Specify the monthly reconciliation loop."
- "Document an email-driven intake process across several sessions."
- "Find recurring manager workflows worth delegating."

## Finish

End with what was completed, the evidence produced, the next official skill or owner, and every unresolved blocker. Never imply that a write, validation, test, deployment, policy change, tenant operation, or runtime action occurred unless it actually ran and its result was observed.
