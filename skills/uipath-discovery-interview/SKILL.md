---
name: uipath-discovery-interview
description: "Run a rigorous UiPath requirements and process discovery interview. Use to sharpen an automation idea, stress-test a proposed solution, clarify a process before a PDD or SDD, or collect business, process, data, exception, security, volume, SLA, access, and acceptance evidence. Supports one-question and frontier-batch modes."
---

# UiPath Discovery Interview

Resolve project decisions through evidence-based questions while looking up facts available in artifacts or systems instead of asking the user to remember them.

**Maturity:** core.

## Ownership Boundary

**This custom skill owns:** Resolve project decisions through evidence-based questions while looking up facts available in artifacts or systems instead of asking the user to remember them.

It does not own current UiPath product commands, schemas, artifact validation, live tenant operations, or policy administration unless its instructions explicitly say otherwise.

## Compose With Official UiPath Skills

Use official skills for current product commands and artifact contracts:

- `uipath-automation-discovery`
- `uipath-planner`

Read [references/official-uipath-skill-map.md](references/official-uipath-skill-map.md) when routing is unclear.

## Workflow

### 1. Set the interview mode

Use one-question mode for complex or sensitive decisions and frontier-batch mode for independent questions. State the recommendation.

**Completion criterion:** The mode and target decision are explicit.

### 2. Build the decision tree

Cover outcome, current behavior, actors, trigger, inputs, systems, transaction definition, rules, exceptions, volumes, SLAs, controls, access, target operating model, and acceptance evidence.

**Completion criterion:** Each question depends only on settled answers.

### 3. Prefer evidence

Ask for recent examples, samples, screenshots, logs, reports, SOPs, workarounds, time spent, error rates, and consequences. Read repository facts directly.

**Completion criterion:** Material claims have evidence or are marked unverified.

### 4. Recommend then ask

For each decision, offer a recommended answer with rationale, then let the accountable person decide. Record disagreement and assumptions.

**Completion criterion:** Every decision has a recommendation and owner.

### 5. Close the frontier

Continue until no unresolved branch remains, or each open item has an owner, evidence request, and due condition.

**Completion criterion:** The project can be handed to uipath-planner without hidden assumptions.

## Output Contract

- Decision log.
- Evidence index.
- Open questions with owners.
- Readiness verdict for discovery or planning.

## Guardrails

- Do not pitch a solution before understanding the current workflow and problem.
- Do not ask compound or hypothetical feature-wishlist questions.
- Do not ask for facts that can be read from provided artifacts.
- Do not turn unknown business rules into silent technical defaults.

## Example Requests

- "Interview the claims intake team before automation."
- "Stress-test whether this needs RPA, an agent, Maestro, or no automation."
- "Collect everything needed before an SDD."

## Finish

End with what was completed, the evidence produced, the next official skill or owner, and every unresolved blocker. Never imply that a write, validation, test, deployment, policy change, tenant operation, or runtime action occurred unless it actually ran and its result was observed.
