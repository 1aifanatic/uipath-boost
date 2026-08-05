# UiPath Work Intake Triage

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-work-intake-triage/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | User-invoked — start it explicitly. |
| **Purpose** | Turn raw UiPath requests into evidence-backed work states and durable next-owner briefs. |
| **Use it when** | A defect, idea, enhancement, access blocker, technical-debt item, or external change is vague or unverified. |
| **Do not use it for** | Implementing work, diagnosing root cause, submitting feedback, changing access, or operating platform resources. |
| **Primary output** | Categorized attention queue, agent-ready brief, specific evidence request, or parked/rejected rationale. |
| **Maturity** | Core |

## What it does

Backlogs often mix confirmed defects, observations, ideas, access problems, duplicates, and already planned work. Treating every item as build-ready wastes effort and causes agents to elaborate claims that have never been verified. Triage creates a small, explicit state machine and sends each item to the correct official owner with the evidence needed to act.

## Before and after

### Before

An issue says, “Robot sometimes skips invoices—please fix ASAP.” It has no example transaction, timestamp, expected behavior, environment, reproduction, or duplicate check. The label says “bug,” but the central claim has not been confirmed.

### After

The item is classified as a defect in `needs-evidence` state. The brief preserves known history, requests one example transaction, execution time, expected result, and relevant logs, and identifies `uipath-troubleshoot` as the next owner after the symptom is anchored. No build task or root cause is invented.

## When to reach for it

Invoke this skill explicitly as `$uipath-work-intake-triage`. UiPath Boost treats it as a deliberate workflow; Codex enforces that policy in `agents/openai.yaml`.

- New backlog items arrive from several channels.
- An issue is too vague for discovery, design, build, or diagnosis.
- Defect status is based on a report rather than observed evidence.
- Automation ideas need value or observed-work evidence.
- Access requests need the exact resource and owner identified.
- A team needs an attention queue by state and age.

### Use a neighboring skill instead

- The item is already a canonical implementation task from `uipath-planner`.
- You are ready to diagnose a confirmed runtime symptom.
- You want to submit a confirmed UiPath product bug.
- You want to change access, close issues, or relabel tracker items without authority.
- You want to implement the requested enhancement.

## Prerequisites

- Request title, body, comments, attachments, labels, and history.
- Relevant project context and prior decisions.
- Duplicate and previously rejected item searches.
- Existing behavior and any examples or evidence.
- Tracker authority limits: read-only, comment, label, transition, or close.

## What it produces

- One category: defect, enhancement, automation idea, access blocker, technical debt, external change, or another explicitly defined class.
- One recommended state: `new`, `needs-evidence`, `ready-for-discovery`, `ready-for-design`, `ready-for-build`, `ready-for-human`, `parked`, or `rejected`.
- A central-claim verdict: confirmed, disproved, or unverified.
- A concise next-owner brief or specific evidence request.
- A rationale for parked or rejected work.
- An attention queue grouped by state and age when triaging multiple items.

## How it works

1. **Gather the complete item.** Read history, artifacts, duplicates, and prior decisions.
2. **Choose one category and state.** Avoid ambiguous multi-label routing.
3. **Verify the central claim.** Reproduce tightly, route diagnosis, confirm observed value, or verify the requested resource.
4. **Ask only targeted questions.** Preserve established facts and close decision-specific gaps.
5. **Apply the outcome within authority.** Produce the brief or recommendation; mutate tracker state only when authorized.

## Example prompt

```text
Use uipath-work-intake-triage.

Review these ten new UiPath backlog items with their comments and attachments.
For each, choose one category and one recommended state, identify whether the
central claim is confirmed, disproved, or unverified, and write the smallest
specific evidence request or next-owner brief. Do not relabel, close, diagnose,
submit feedback, or change access.
```

## Common questions

**Why does the agent not start this automatically?**

This workflow benefits from an intentional human start because it orchestrates a session, changes durable project structure, or makes a cross-work decision. Installation makes it available; it does not run it.

## It's working if

- The full item and its history were read.
- Each item has one category and one state.
- The central claim is explicitly confirmed, disproved, or unverified.
- No unverified claim became a build task.
- Information requests are specific rather than “provide more details.”
- The next owner knows what to do and what proves completion.
- Tracker mutations occurred only with authority.
- Customer and employee data is redacted.

## Where it fits

This is a **user-invoked orchestration skill** in UiPath Boost. Use [uipath-project-router](uipath-project-router.md) when you need to decide whether it is the right entry point or what should follow it.

## Official UiPath handoff

- `uipath-automation-discovery` for opportunity mining and value sizing.
- `uipath-feedback` for confirmed product or skill feedback.
- `uipath-troubleshoot` for causal diagnosis.
- `uipath-planner` for approved design and implementation planning.
- `uipath-admin` or `uipath-platform` for access and resource ownership.
- `uipath-test` for Test Manager work.

Triage prepares the handoff; it does not perform the official operation.

## Related resources

- [Project Router guide](uipath-project-router.md)
- [Discovery Interview guide](uipath-discovery-interview.md)
- [Skill source](../../skills/uipath-work-intake-triage/SKILL.md)
