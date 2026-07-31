---
name: uipath-program-wayfinder
description: "Plan a large, foggy UiPath program that cannot fit in one design session. Use for enterprise automation programs, multi-business-unit transformations, platform migrations, or multi-solution initiatives where the destination is known but key decisions, dependencies, evidence, and sequencing are not yet visible."
---

# UiPath Program Wayfinder

Create a shared map of decision tickets, work only the current frontier, and produce decisions rather than premature implementation deliverables.

**Maturity:** core.

## Ownership Boundary

**This custom skill owns:** Create a shared map of decision tickets, work only the current frontier, and produce decisions rather than premature implementation deliverables.

It does not own current UiPath product commands, schemas, artifact validation, live tenant operations, or policy administration unless its instructions explicitly say otherwise.

## Compose With Official UiPath Skills

Use official skills for current product commands and artifact contracts:

- `uipath-automation-discovery`
- `uipath-planner`

Read [references/official-uipath-skill-map.md](references/official-uipath-skill-map.md) when routing is unclear.

## Workflow

### 1. Name the destination

Define what the map must make possible: approved architecture, portfolio roadmap, migration decision, or planner-ready solution designs.

**Completion criterion:** The destination fixes scope in one or two sentences.

### 2. Map the visible frontier

Create precise decision tickets, keep suspected but unformulated questions in Not Yet Specified, and separate out-of-scope work.

**Completion criterion:** Tickets, fog, and exclusions are distinct.

### 3. Type and connect tickets

Use research, prototype, discovery, or enabling-task tickets. Add genuine blocking edges and identify the unblocked frontier.

**Completion criterion:** Each ticket fits one focused session and has dependencies.

### 4. Resolve one decision

Claim one frontier ticket, gather evidence, record a durable resolution, close it, and update the map.

**Completion criterion:** One decision has a resolution and context pointer.

### 5. Advance the frontier

Create newly visible tickets, graduate clarified fog, and remove invalidated work until no decision blocks the destination.

**Completion criterion:** The route to the destination is visible.

### 6. Hand off instead of building

Collapse decisions into process or solution-design inputs and invoke uipath-planner.

**Completion criterion:** A planner-ready handoff replaces the decision map as build entry point.

## Output Contract

- Program map with destination, decisions, fog, and exclusions.
- Decision tickets with evidence and dependencies.
- Final planning handoff.

## Guardrails

- Do not pre-slice fog into fake precision.
- Do not resolve more than one non-research decision per session.
- Do not replace unanswered decisions with implementation tasks.
- Use meaningful ticket names, not only IDs.

## Example Requests

- "Plan an enterprise agentic operating model."
- "Map a thirty-process Finance transformation."
- "Resolve platform, security, and sequencing decisions."

## Finish

End with what was completed, the evidence produced, the next official skill or owner, and every unresolved blocker. Never imply that a write, validation, test, deployment, policy change, tenant operation, or runtime action occurred unless it actually ran and its result was observed.
