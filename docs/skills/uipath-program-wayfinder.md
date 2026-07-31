# UiPath Program Wayfinder

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-program-wayfinder/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Make a large, uncertain UiPath program navigable through a map of focused decision tickets. |
| **Use it when** | The destination is known, but key decisions, dependencies, evidence, and sequencing cannot fit in one design session. |
| **Do not use it for** | Pretending uncertain work is implementation-ready or producing a detailed build plan before decisions are resolved. |
| **Primary output** | Program map, decision tickets with evidence and dependencies, and a final planner-ready handoff. |
| **Maturity** | Core |

## Why this skill exists

Enterprise automation programs contain genuine uncertainty: platform choices, security models, operating ownership, migration paths, process priorities, and dependencies. A conventional task breakdown often hides that uncertainty by creating precise-looking implementation tasks with unproven assumptions.

Wayfinder keeps unresolved fog visible, turns only understood questions into decision tickets, and advances one decision at a time until planning becomes honest.

## Before and after

### Before

A Finance transformation wants to automate thirty processes across several business units. The roadmap lists projects and dates, but platform, data, identity, support, and sequencing decisions remain unresolved. Teams start separate designs and later discover incompatible assumptions.

### After

The program has a shared destination, explicit exclusions, a “Not Yet Specified” fog area, focused decision tickets, genuine blocking relationships, and a visible unblocked frontier. Each resolved ticket points to its evidence and decision record. When no decision blocks the destination, the map is collapsed into planner-ready solution inputs.

## When to use

- Enterprise or multi-business-unit automation programs.
- Platform migrations or operating-model changes.
- Multi-solution initiatives with shared security, data, or integration decisions.
- Portfolios where the destination is agreed but the route is not.
- Programs that keep generating premature project plans from assumptions.
- Work that needs research, prototypes, discovery, and enabling decisions sequenced together.

## When not to use

- One solution has a clear process and can go directly to discovery or planning.
- The request is to mine systems for automation opportunities.
- You already have an approved SDD and need task refinement.
- You want to create dozens of speculative tasks merely to look complete.
- You want to resolve several major non-research decisions in one session.

## What you need before starting

- A one- or two-sentence destination such as an approved architecture, portfolio roadmap, migration decision, or set of planner-ready designs.
- Known stakeholders, constraints, evidence sources, and exclusions.
- Existing program documents and previously settled decisions.
- A durable place to store the map and decision tickets.
- Owners who can decide the currently visible questions.

## What it produces

- A program destination and success meaning.
- Explicit exclusions.
- A visible fog area for suspected but unformulated questions.
- Focused research, prototype, discovery, and enabling-task tickets.
- Real dependency edges and the current unblocked frontier.
- Durable resolutions with evidence and context pointers.
- A final handoff that converts decisions into inputs for `uipath-planner`.

## How it works

1. **Name the destination.** Fix what the map must make possible.
2. **Separate tickets, fog, and exclusions.** Do not force vague uncertainty into fake precision.
3. **Type and connect tickets.** Keep each ticket achievable in one focused session and add only genuine blockers.
4. **Resolve one decision.** Gather evidence, record the resolution, and update the map.
5. **Advance the frontier.** Add newly visible questions and remove invalidated work.
6. **Hand off instead of building.** When decisions no longer block the destination, route solution planning to `uipath-planner`.

## Example scenario

A migration program must decide whether shared automations move tenant-by-tenant or capability-by-capability. That question blocks environment design and release sequencing. Wayfinder creates a research ticket for inventory evidence, a prototype ticket for package compatibility, and a decision ticket owned by the program architect. It does not create migration implementation tasks until the decision is resolved.

## Example prompt

```text
Use uipath-program-wayfinder.

Our destination is an approved roadmap for migrating twelve UiPath solutions
across three business units. Create a map of decision tickets, fog, exclusions,
and genuine dependencies. Identify the unblocked frontier and work only one
non-research decision this session. Record evidence and context pointers, then
show how the resolved map will hand off to uipath-planner. Do not create build tasks yet.
```

## How to know it is done

- The destination is concise and fixed.
- Tickets, fog, and exclusions are visibly different.
- Each ticket fits one focused session and has a meaningful name.
- Dependency edges represent real blockers.
- Only the current frontier is worked.
- Resolved decisions include evidence and durable pointers.
- No unanswered decision was converted into an implementation task.
- A planner-ready handoff exists when the destination is unblocked.

## Official UiPath handoffs

- `uipath-automation-discovery` owns enterprise opportunity discovery and sizing.
- `uipath-planner` owns solution designs and canonical task plans after program decisions are resolved.
- Product skills own implementation.

Use `uipath-research-note`, `uipath-prototype`, or `uipath-discovery-interview` to work the matching ticket type without confusing that activity with program planning.

## Related resources

- [Research Note guide](uipath-research-note.md)
- [Prototype guide](uipath-prototype.md)
- [Skill source](../../skills/uipath-program-wayfinder/SKILL.md)
