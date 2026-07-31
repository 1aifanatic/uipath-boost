---
name: uipath-discovery-with-docs
description: "Run UiPath discovery while maintaining durable project documentation. Use when the conversation must update a process glossary, evidence index, decision log, assumptions, and architecture decision records as understanding evolves, especially for multi-session discovery or repository-backed projects."
---

# UiPath Discovery With Docs

Combine rigorous discovery with immediate documentation so decisions survive context windows and later agents use the same business language.

**Maturity:** core.

## Ownership Boundary

**This custom skill owns:** Combine rigorous discovery with immediate documentation so decisions survive context windows and later agents use the same business language.

It does not own current UiPath product commands, schemas, artifact validation, live tenant operations, or policy administration unless its instructions explicitly say otherwise.

## Compose With Official UiPath Skills

Use official skills for current product commands and artifact contracts:

- `uipath-automation-discovery`
- `uipath-planner`

Read [references/official-uipath-skill-map.md](references/official-uipath-skill-map.md) when routing is unclear.

## Workflow

### 1. Load existing context

Read project context, CONTEXT.md, PDD or SDD, ADRs, evidence index, and prior notes. Do not re-ask resolved questions.

**Completion criterion:** The current source of truth is identified.

### 2. Run focused discovery

Apply uipath-discovery-interview using one-question or frontier-batch mode as appropriate.

**Completion criterion:** The active decision frontier is explicit.

### 3. Update language inline

When a term is clarified, update CONTEXT.md immediately and keep implementation details out of the glossary.

**Completion criterion:** Resolved domain terms are captured once.

### 4. Record durable choices

Use ADRs only for hard-to-reverse, surprising trade-offs. Put ordinary choices in the decision log.

**Completion criterion:** Every load-bearing choice has a durable home.

### 5. Index evidence and gaps

Link samples, logs, policies, screenshots, and source documents with owner, freshness, sensitivity, and what each proves.

**Completion criterion:** The evidence index supports major requirements.

### 6. Hand off at readiness

Create a planner-ready summary and route PDD or SDD work to uipath-planner.

**Completion criterion:** The next agent can design without replaying the interview.

## Output Contract

- CONTEXT.md.
- Discovery decision log.
- Evidence index.
- ADRs when justified.
- Planner-ready handoff.

## Guardrails

- Preserve user edits and existing document structure.
- Link rather than duplicate content already captured elsewhere.
- Never place secrets or unredacted production data in discovery docs.
- Do not write implementation code during discovery.

## Example Requests

- "Continue a discovery workshop across sessions."
- "Turn meeting notes and samples into project knowledge."
- "Prepare a clean business-to-architecture handoff."

## Finish

End with what was completed, the evidence produced, the next official skill or owner, and every unresolved blocker. Never imply that a write, validation, test, deployment, policy change, tenant operation, or runtime action occurred unless it actually ran and its result was observed.
