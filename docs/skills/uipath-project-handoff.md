# UiPath Project Handoff

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-project-handoff/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Preserve verified, live project context for another session, agent, or team member. |
| **Use it when** | Work pauses, ownership changes, context is full, or a separate investigation needs a safe starting point. |
| **Do not use it for** | Copying complete SDDs, issue bodies, logs, diffs, or review reports into another document. |
| **Primary output** | A concise Markdown handoff with durable pointers, exact next action, success signal, boundaries, and redaction confirmation. |
| **Maturity** | Core |

## Why this skill exists

UiPath projects often span several sessions, roles, and tools. Without a deliberate handoff, the receiver must reconstruct decisions from chat history or may unknowingly repeat work, use stale evidence, or cross an approval boundary.

This skill compacts only the context that is still live. Detailed evidence remains in its authoritative artifact and is referenced by a verified pointer.

## Before and after

### Before

An architect has completed discovery and selected an approach, but the developer joining next only has a long conversation and several loosely named files. The current branch, unresolved access gap, approved decision, and next validation step are unclear. Sensitive production details may also be mixed into the conversation.

### After

The developer receives one handoff containing:

- The next session’s purpose.
- Current objective and verified state.
- Decisions already made and where they are recorded.
- Exact links to the SDD, work item, ADR, evidence, branch, and test result.
- Open blockers and owners.
- The exact next skill, file, action, and success signal.
- A fallback if the first action is blocked.
- A confirmation that secrets and sensitive data were removed.

## When to use

- A context window or working session is ending.
- Work transfers between architect, developer, tester, operator, or support owner.
- A project pauses and must restart safely later.
- A debugging or prototype branch needs an isolated context.
- Another agent or person must continue without rereading the full history.
- You need to preserve next steps before changing focus.

## When not to use

- The durable artifacts do not exist yet and must first be created.
- You want a new SDD, issue, ADR, test report, or runbook rather than a pointer to one.
- You intend to paste complete logs, source diffs, customer content, or credentials into the handoff.
- You want to launch another agent without explicit authorization.
- The “next action” is still an unbounded goal such as “finish the automation.”

## What you need before starting

- The purpose and receiver of the next session.
- Current objective, state, branch, issue, or work item.
- Existing SDDs, ADRs, glossaries, reviews, tests, logs, and evidence locations.
- Verified facts, decisions, assumptions, and blockers.
- Known access and approval constraints.
- A requested output path, or permission to choose a temporary Markdown location.

Every referenced artifact should be checked. Missing artifacts must be marked unavailable rather than implied to exist.

## What it produces

- A concise handoff Markdown document.
- Verified pointers to durable sources of truth.
- A small summary of only current facts and decisions.
- One exact next action with a success signal.
- A suggested official or UiPath Boost skill for that action.
- A fallback action for known blockers.
- Explicit source-data and mutation boundaries.
- A sensitive-data redaction check.

## How it works

1. **Name the destination.** State what the receiver must accomplish and what is outside scope.
2. **Verify durable artifacts.** Check that each referenced file, issue, commit, branch, report, or evidence item exists.
3. **Summarize live context.** Capture current facts, decisions, assumptions, blockers, access, and environment without copying whole documents.
4. **Specify the next action.** Name the skill, target, action, success signal, approval boundary, and fallback.
5. **Redact and bound.** Remove credentials, personal data, customer content, and sensitive endpoints.
6. **Save intentionally.** Report the path. Launch a new agent only when explicitly authorized and actually supported.

## Example prompt

```text
Use uipath-project-handoff.

Prepare a handoff from the solution architect to the developer for work item
AUT-142. Point to the approved SDD, ADR-007, current branch, and review report.
The next action is to implement the approved queue retry behavior with
uipath-rpa. Include the success signal, access blocker fallback, and a full
redaction check. Save it under docs/handoffs/ without copying the source files.
```

## How to know it is done

- The receiver and next purpose are explicit.
- All context pointers exist or are marked unavailable.
- Verified facts are separated from assumptions.
- Decisions include their authoritative source.
- The next action names a skill, target, success signal, and boundary.
- A practical fallback exists for the known blocker.
- Sensitive material is absent.
- The output location is reported.
- No receiving agent is claimed to have started unless a launch actually succeeded.

## Official UiPath handoffs

The handoff may point to any official owner required next—for example `uipath-rpa`, `uipath-agents`, `uipath-review`, `uipath-test`, `uipath-troubleshoot`, or `uipath-solution`. It does not perform that owner’s work.

Use `uipath-project-router` when the next skill is unclear. Use `uipath-project-knowledge-base` when the need is durable knowledge organization rather than one transfer of live context.

## Related resources

- [Handoff template](../../skills/uipath-project-handoff/assets/handoff-template.md)
- [Skill source](../../skills/uipath-project-handoff/SKILL.md)
