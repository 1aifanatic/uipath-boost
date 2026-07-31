---
name: uipath-safe-refactor-plan
description: "Plan a behavior-preserving UiPath refactor as small, verifiable steps with safety nets and rollback points. Use when architecture health or review identifies duplicated logic, oversized workflows, tangled arguments, fragile selectors, weak seams, package migrations, or technical debt that must be improved without changing approved business behavior."
---

# UiPath Safe Refactor Plan

Make the structural change easy, then make the easy change, while keeping the automation demonstrably working after every meaningful step.

**Maturity:** core.

## Ownership Boundary

**This custom skill owns:** Make the structural change easy, then make the easy change, while keeping the automation demonstrably working after every meaningful step.

It does not own current UiPath product commands, schemas, artifact validation, live tenant operations, or policy administration unless its instructions explicitly say otherwise.

## Compose With Official UiPath Skills

Use official skills for current product commands and artifact contracts:

- `uipath-review`
- `uipath-test`
- `uipath-rpa`
- `uipath-agents`
- `uipath-maestro-flow`
- `uipath-maestro-bpmn`
- `uipath-maestro-case`
- `uipath-api-workflow`
- `uipath-solution`

Read [references/official-uipath-skill-map.md](references/official-uipath-skill-map.md) when routing is unclear.

## Workflow

### 1. Establish current behavior

Read the PDD or SDD, acceptance tests, operational evidence, callers, public contracts, ADRs, and current validation results. State what must not change.

**Completion criterion:** The behavioral invariant and refactor boundary are explicit.

### 2. Verify the problem and alternatives

Inspect the relevant artifacts, confirm the cited friction, and compare deletion, extraction, consolidation, replacement, or no-change options.

**Completion criterion:** The selected direction solves observed pain better than its alternatives.

### 3. Build the safety net

Identify or add behavior-level tests, validation snapshots, sample transactions, comparison harnesses, and rollback artifacts at the highest correct seams.

**Completion criterion:** A structural mistake will produce a detectable failure.

### 4. Design the target seam

Use uipath-component-design where a public contract changes. Record hard-to-reverse choices and compatibility strategy.

**Completion criterion:** The target shape and transition contract are stable enough to sequence.

### 5. Sequence tiny safe steps

Plan prefactoring, expand, migrate, verify, and contract steps. Each step leaves the project valid or names an integration branch and final green gate when independent green is impossible.

**Completion criterion:** Every step has a check, rollback point, and bounded blast radius.

### 6. Define stop conditions

State thresholds that trigger rollback, re-planning, or escalation, including performance, business output, exception rate, and test regressions.

**Completion criterion:** The team knows when not to continue.

### 7. Publish the plan

Create dependency-ordered work items and route implementation to the owning official skills. Do not perform the refactor in this planning skill.

**Completion criterion:** An implementer can execute without inventing transition strategy.

## Output Contract

- Behavioral invariants.
- Verified refactor rationale and alternatives.
- Safety-net plan.
- Tiny dependency-ordered steps.
- Rollback and stop conditions.

## Guardrails

- Do not combine business behavior changes with structural cleanup unless separately approved.
- Do not replace a working pattern merely because another pattern is fashionable.
- Do not use file paths as the only durable description of intent.
- Do not execute source changes during planning.

## Example Requests

- "Plan extraction of duplicated broker rules into a library."
- "Refactor a 3,000-activity workflow safely."
- "Migrate a shared queue schema without stopping production."

## Finish

End with what was completed, the evidence produced, the next official skill or owner, and every unresolved blocker. Never imply that a write, validation, test, deployment, policy change, tenant operation, or runtime action occurred unless it actually ran and its result was observed.
