---
name: uipath-project-handoff
description: "Compact the current UiPath project context into a safe handoff for a fresh session, another agent, or another team member. Use when a context window is full, work branches into a separate investigation or prototype, ownership changes, a project pauses, or continuity is needed without duplicating existing SDDs, issues, ADRs, evidence, commits, and reports."
---

# UiPath Project Handoff

Carry verified context across people and sessions through concise pointers, exact next actions, and explicit suggested skills while redacting sensitive information.

**Maturity:** core.

## Ownership Boundary

**This custom skill owns:** Carry verified context across people and sessions through concise pointers, exact next actions, and explicit suggested skills while redacting sensitive information.

It does not own current UiPath product commands, schemas, artifact validation, live tenant operations, or policy administration unless its instructions explicitly say otherwise.

## Workflow

### 1. Name the next purpose

State what the receiving session or person must accomplish and what is intentionally outside that handoff.

**Completion criterion:** The handoff has one clear destination.

### 2. Inventory durable artifacts

List and verify the SDD, work items, ADRs, glossary, evidence, branches, commits, logs, prototypes, reviews, and test results that already contain detail.

**Completion criterion:** Every referenced artifact exists or is marked unavailable.

### 3. Summarize only live context

Capture objective, current state, verified facts, decisions, assumptions, blockers, environment, access gaps, and current branch or item without copying existing documents.

**Completion criterion:** The receiver can orient without rereading the entire conversation.

### 4. Specify the exact next action

Name the next skill, file or item, command or question, success signal, and approval boundary. Include fallback when the primary action is blocked.

**Completion criterion:** The receiver can begin without guessing.

### 5. Redact and bound

Remove credentials, tokens, personal data, customer content, and sensitive endpoints. State what source data may be accessed and what must remain untouched.

**Completion criterion:** The handoff is safe to share with its intended receiver.

### 6. Save or launch intentionally

Write the handoff to a temporary or requested Markdown path. Launch another agent only when the environment supports it and the user explicitly authorizes that action.

**Completion criterion:** The handoff location or launched target is reported with no implied background promise.

## Output Contract

- Concise handoff Markdown document.
- Durable context pointers.
- Exact next action and success signal.
- Suggested custom and official skills.
- Redaction confirmation.

## Guardrails

- Do not duplicate full SDDs, issue bodies, logs, diffs, or review reports.
- Do not include secrets, personal information, or unredacted customer data.
- Do not claim a receiving agent started unless the launch command actually succeeded.
- Do not leave the next action vague.

## Example Requests

- "Prepare a handoff before opening a fresh debugging session."
- "Transfer this project from architect to developer."
- "Preserve context before prototyping a separate UI approach."

## Finish

End with what was completed, the evidence produced, the next official skill or owner, and every unresolved blocker. Never imply that a write, validation, test, deployment, policy change, tenant operation, or runtime action occurred unless it actually ran and its result was observed.
