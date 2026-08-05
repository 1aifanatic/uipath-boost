# UiPath Task Refinement

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-task-refinement/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | User-invoked — start it explicitly. |
| **Purpose** | Improve an approved UiPath task plan into session-sized, independently verifiable work items. |
| **Use it when** | Existing planner tasks are too large, horizontal, ambiguously blocked, mixed across owners, or difficult to assign. |
| **Do not use it for** | Creating the initial SDD, choosing architecture, deriving the first task plan, or creating a shadow backlog. |
| **Primary output** | Per-task assessment, split/merge/dependency delta, acceptance criteria, frontier, and ownership map. |
| **Maturity** | Core |

## What it does

An approved plan can still be hard to execute. One task may say “build the integration layer,” span several UiPath products, or depend on everything. Task refinement preserves the planner’s architecture while improving the shape of execution work so a human or agent can complete and verify one vertical outcome per focused session.

## Before and after

### Before

The canonical plan has a task called “Implement invoice processing” that includes extraction, queueing, human review, RPA posting, tests, and deployment. It has several owners, vague acceptance, and artificial dependencies. No one can finish it in one session.

### After

The task becomes vertical slices such as “Accept one approved extraction result and create a queue item with validated fields,” each linked to the SDD rather than copying it. Official owners, inputs, acceptance evidence, blockers, parallel work, and integration checkpoints are explicit. The canonical task file is updated once with authorization.

## When to reach for it

Invoke this skill explicitly as `$uipath-task-refinement`. UiPath Boost treats it as a deliberate workflow; Codex enforces that policy in `agents/openai.yaml`.

- A ready SDD and planner task list already exist.
- Tasks exceed one focused execution session.
- Work is divided into technical layers that cannot be validated independently.
- One task mixes RPA, agent, Maestro, app, or platform owners.
- Dependencies create unexplained cycles or serial work unnecessarily.
- An existing approved backlog is explicitly supplied for refinement.

### Use a neighboring skill instead

- No approved design or authoritative task list exists.
- The product architecture still needs to be selected.
- You want a second implementation plan beside the planner output.
- Tasks are already small, observable, and correctly owned.
- You lack authority to change tracker items or the canonical task file.

## Prerequisites

- Ready SDD and planner handoff marker.
- Canonical task file or explicitly supplied backlog.
- Parent work item, existing IDs, statuses, owners, and links.
- Current blockers and integration constraints.
- Authority level for proposing versus applying task updates.

## What it produces

- An assessment for every original task: accepted as-is or a concrete refinement reason.
- Proposed vertical splits, merges, or dependency changes.
- Session-sized outcomes with input, owner, product owner, and acceptance evidence.
- Genuine blocking edges, parallel work, prerequisites, and integration checkpoints.
- The next unblocked frontier.
- An optional authorized update to the canonical location with history and parent links preserved.

## How it works

1. **Pin the canonical plan.** Stop if the authoritative design and task list are missing.
2. **Test executability.** Check outcome, owner, input, evidence, size, blockers, independence, and official owner.
3. **Split or merge vertically.** Preserve architecture by reference, create tracer-bullet behavior slices, and store each independently executable task in one tracker item or one Markdown file.
4. **Rebuild dependencies.** Remove artificial serialization and explain real blockers.
5. **Present the delta.** Update only the canonical location and only with authority.

## Example prompt

```text
Use uipath-task-refinement.

Read the approved SDD and canonical planner task file. Assess each task for
outcome, owner, input, acceptance evidence, context size, blockers, independence,
and official product owner. Split only oversized or horizontal items into
vertical session-sized slices, rebuild genuine dependencies, and show the next
unblocked frontier. Propose the delta first; do not update the tracker yet.
```

## Common questions

**Why does the agent not start this automatically?**

This workflow benefits from an intentional human start because it orchestrates a session, changes durable project structure, or makes a cross-work decision. Installation makes it available; it does not run it.

## It's working if

- One authoritative task list and parent design are pinned.
- Every original task is accepted or has a specific refinement reason.
- Each refined item fits one focused session and produces observable behavior.
- Architecture is referenced rather than duplicated.
- Official ownership is unambiguous.
- Dependencies have no unexplained cycles or artificial serialization.
- The next unblocked frontier is visible.
- No canonical tracker or file was changed without authority.

## Where it fits

This is a **user-invoked orchestration skill** in UiPath Boost. Use [uipath-project-router](uipath-project-router.md) when you need to decide whether it is the right entry point or what should follow it.

## Official UiPath handoff

`uipath-planner` remains the owner of the SDD and initial canonical task plan. Refined items are handed to their official product owners for implementation. This skill must not compete with or silently rewrite the approved architecture.

## Related resources

- [Program Wayfinder guide](uipath-program-wayfinder.md)
- [Test Driven Automation guide](uipath-test-driven-automation.md)
- [Skill source](../../skills/uipath-task-refinement/SKILL.md)
