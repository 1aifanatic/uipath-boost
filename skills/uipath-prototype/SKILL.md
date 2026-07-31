---
name: uipath-prototype
description: "Build a deliberately throwaway UiPath-oriented prototype to answer one design question. Use when a team must validate a selector strategy, extraction result shape, state model, human-review experience, queue contract, API interaction, agent behavior, or orchestration flow before committing to production architecture."
---

# UiPath Prototype

Increase discussion fidelity with the cheapest safe artifact that can produce a decisive verdict, while keeping prototype code and data out of production by default.

**Maturity:** core.

## Ownership Boundary

**This custom skill owns:** Increase discussion fidelity with the cheapest safe artifact that can produce a decisive verdict, while keeping prototype code and data out of production by default.

It does not own current UiPath product commands, schemas, artifact validation, live tenant operations, or policy administration unless its instructions explicitly say otherwise.

## Compose With Official UiPath Skills

Use official skills for current product commands and artifact contracts:

- `uipath-rpa`
- `uipath-agents`
- `uipath-maestro-flow`
- `uipath-maestro-bpmn`
- `uipath-maestro-case`
- `uipath-coded-apps`
- `uipath-api-workflow`
- `uipath-human-in-the-loop`
- `uipath-ixp`

Read [references/official-uipath-skill-map.md](references/official-uipath-skill-map.md) when routing is unclear.

## Workflow

### 1. State one falsifiable question

Write the exact uncertainty and the observable result that would answer it. Split multiple questions into separate prototypes.

**Completion criterion:** A pass, fail, or trade-off verdict is possible.

### 2. Choose the lowest-cost artifact

Select a mock, isolated workflow, coded harness, sample form, disposable flow, extraction experiment, or UI variation that exercises only the uncertain behavior.

**Completion criterion:** The artifact is smaller than a production slice.

### 3. Define safety boundaries

Use synthetic or approved redacted data, non-production resources, bounded permissions, obvious PROTOTYPE naming, and no persistent side effects unless persistence is the question.

**Completion criterion:** The prototype cannot be confused with or damage production.

### 4. Build and expose evidence

Use the owning official skill. Make inputs, state transitions, outputs, timings, confidence, errors, and human reactions visible enough to judge the question.

**Completion criterion:** A reviewer can see why the result supports the verdict.

### 5. Run representative cases

Exercise the minimum normal, edge, and failure cases needed to challenge the proposed design.

**Completion criterion:** The verdict is not based on one convenient example.

### 6. Capture the answer and clean up

Record question, setup, observations, verdict, limitations, and resulting decision. Delete or isolate throwaway artifacts and route validated decisions into planner or implementation work.

**Completion criterion:** The learning survives while accidental production use does not.

## Output Contract

- Prototype question and success signal.
- Throwaway artifact or mock.
- Observed evidence and verdict.
- Decision handoff and cleanup record.

## Guardrails

- Do not harden a prototype into production by gradual accident.
- Do not use unrestricted production credentials or live customer data.
- Do not add broad abstractions, comprehensive error handling, or polish unrelated to the question.
- Do not claim product feasibility beyond the tested conditions.

## Example Requests

- "Prototype a Coded App validation screen."
- "Test whether an IXP extraction schema handles three broker variants."
- "Compare two Maestro state models before writing the SDD."

## Finish

End with what was completed, the evidence produced, the next official skill or owner, and every unresolved blocker. Never imply that a write, validation, test, deployment, policy change, tenant operation, or runtime action occurred unless it actually ran and its result was observed.
