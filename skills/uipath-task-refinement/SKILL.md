---
name: uipath-task-refinement
description: "Refine an existing uipath-planner task list or an explicitly supplied backlog into session-sized, verifiable work items with clear dependencies and ownership. Use only after the canonical SDD and initial task plan already exist, when items are too large, too horizontal, ambiguously blocked, or difficult to assign. Do not author the initial SDD, choose the product architecture, or replace planner task derivation."
---

# UiPath Task Refinement

Improve the execution quality of an approved plan without creating a competing plan or duplicating architecture content.

**Maturity:** core.

## Ownership Boundary

**This custom skill owns:** Improve the execution quality of an approved plan without creating a competing plan or duplicating architecture content.

It does not own current UiPath product commands, schemas, artifact validation, live tenant operations, or policy administration unless its instructions explicitly say otherwise.

## Compose With Official UiPath Skills

Use official skills for current product commands and artifact contracts:

- `uipath-planner`

Read [references/official-uipath-skill-map.md](references/official-uipath-skill-map.md) when routing is unclear.

## Workflow

### 1. Load the canonical plan

Read the ready SDD, planner handoff marker, canonical task file, parent work item, and current statuses. Stop when no approved source exists.

**Completion criterion:** One authoritative task list and its parent design are pinned.

### 2. Test each item for executability

Check outcome, owner, input, acceptance evidence, product owner, estimated context size, blockers, and independence. Mark items that are horizontal layers, duplicate architecture, or mix several official owners.

**Completion criterion:** Every item has a concrete refinement reason or is accepted as-is.

### 3. Split or merge vertically

Create the smallest end-to-end slices that can be validated independently. Use expand-contract for wide migrations and preserve the planner architecture by reference rather than copying it.

**Completion criterion:** Each refined item fits one focused execution session and produces observable behavior.

### 4. Rebuild dependencies and frontier

Declare only genuine blocking edges, identify parallel work, shared prerequisites, integration checkpoints, and the next unblocked frontier.

**Completion criterion:** The dependency graph has no unexplained cycles or artificial serialization.

### 5. Approve and update the canonical location

Present the proposed delta. Update the task file or tracker only with explicit authority, preserving IDs, history, and parent links.

**Completion criterion:** The canonical list is refined once, and no shadow backlog exists.

## Output Contract

- Refinement assessment for each original task.
- Proposed split, merge, or dependency delta.
- Session-sized acceptance criteria.
- Updated frontier and ownership map.
- Optional authorized update to the canonical task location.

## Guardrails

- Require an existing planner task list or explicit backlog.
- Never create a second SDD or initial implementation plan.
- Do not copy architecture sections into every task.
- Do not create or modify tracker items without authority.

## Example Requests

- "Refine these planner tasks so each fits one coding-agent session."
- "Split this oversized multi-product task without changing the SDD."
- "Correct the blocking edges in this approved UiPath task plan."

## Finish

End with what was completed, the evidence produced, the next official skill or owner, and every unresolved blocker. Never imply that a write, validation, test, deployment, policy change, tenant operation, or runtime action occurred unless it actually ran and its result was observed.
