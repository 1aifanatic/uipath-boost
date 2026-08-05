# UiPath UAT Session

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-uat-session/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | User-invoked — start it explicitly. |
| **Purpose** | Facilitate business-language UAT and turn each observation into a reproducible, correctly routed record. |
| **Use it when** | Business testers are walking through approved scenarios and need structured evidence capture. |
| **Do not use it for** | Test Manager administration, Action Center operations, root-cause diagnosis, or submitting product feedback. |
| **Primary output** | Anchored session record, focused observations/defects, evidence links, reproduction steps, routes, and session summary. |
| **Maturity** | Pilot |

## What it does

During UAT, business testers speak in outcomes: “the claim should have gone to review” or “the amount is wrong.” If the session captures only a screenshot or a technical guess, developers cannot reproduce the issue and requirements ambiguities become mislabeled defects. This skill anchors every observation to a version, environment, scenario, data set, time, and acceptance source.

## Before and after

### Before

A tester reports “approval did not work” during a shared call. No one records the build, task ID, timestamp, expected criterion, exact steps, or whether the behavior repeats. The team guesses that the workflow is defective.

### After

One UAT record captures the business expectation, actual behavior, steps, environment, build, timestamp, safe correlation IDs, frequency, impact, and acceptance criterion. The observation is classified as a suspected defect, requirement ambiguity, test-data issue, access/environment issue, usability feedback, or accepted behavior. A named official owner receives the next action without a guessed cause.

## When to reach for it

Invoke this skill explicitly as `$uipath-uat-session`. UiPath Boost treats it as a deliberate workflow; Codex enforces that policy in `agents/openai.yaml`.

- Business testers are executing acceptance scenarios live.
- A Coded App, agent, RPA workflow, Maestro journey, or human-review experience is under UAT.
- Observations must be captured without interrupting the tester with a long interview.
- Evidence must be correlated to one exact run.
- Independent symptoms need separate work records.

### Use a neighboring skill instead

- You need to create or operate Test Manager projects, cases, sets, executions, or reports.
- You need to assign or complete Action Center tasks.
- The request is to diagnose root cause.
- You want to send UiPath product feedback immediately.
- The session cannot protect customer, employee, credential, or production data.

## Prerequisites

- Build or package version and environment.
- Process/solution name, scenario, test data set, tester, and timestamp.
- The expected source: acceptance criterion, requirement, or approved behavior.
- Approved evidence and redaction rules.
- Relevant transaction, instance, task, or sample identifiers.
- A durable destination for session and observation records.

## What it produces

- One anchored UAT context for the session.
- One record per independent behavior.
- Expected versus actual behavior in business language.
- Reproduction steps, frequency, impact, environment, and timestamp.
- Safe evidence and correlation pointers.
- One classification and verification status.
- Named next official or community owner.
- End-of-session counts, blockers, and unresolved observations.

## How it works

1. **Anchor the run.** Make every later observation reproducible.
2. **Capture one observation.** Ask only short questions needed for clarity.
3. **Collect safe evidence.** Correlate it to the run and redact sensitive data.
4. **Classify and split.** Give each behavior one category.
5. **Verify or route.** Do not guess the cause.
6. **Write the durable record.** Use stable business meaning rather than transient file paths.
7. **Continue deliberately.** Confirm each record and ask for the next independent observation.

## Example prompt

```text
Use uipath-uat-session.

Facilitate UAT for release 0.9.3 in the TEST environment. Anchor the tester,
scenario, data set, timestamp, and acceptance criteria. Capture one observation
at a time using business language, gather only authorized redacted evidence,
classify each behavior without guessing cause, and route Test Manager,
diagnosis, task operations, or feedback to their official owners.
```

## Common questions

**Why does the agent not start this automatically?**

This workflow benefits from an intentional human start because it orchestrates a session, changes durable project structure, or makes a cross-work decision. Installation makes it available; it does not run it.

## It's working if

- Every observation belongs to one versioned, timestamped UAT context.
- Expected and actual behavior are clear enough to verify.
- Evidence can be correlated safely.
- Independent symptoms are separate records.
- Each record has one category and one behavior.
- Root cause was not guessed.
- A developer or investigator can act without replaying the conversation.
- Every reported observation was captured exactly once.
- Session totals and blockers are summarized.

## Where it fits

This is a **user-invoked orchestration skill** in UiPath Boost. Use [uipath-project-router](uipath-project-router.md) when you need to decide whether it is the right entry point or what should follow it.

## Official UiPath handoff

- `uipath-test` owns Test Manager resources and reports.
- `uipath-tasks` owns Action Center task operations.
- `uipath-troubleshoot` owns causal diagnosis.
- `uipath-feedback` owns confirmed feedback submission.
- `uipath-review` owns artifact quality review.

## Related resources

- [UAT observation template](../../skills/uipath-uat-session/assets/uat-defect-template.md)
- [Requirement Traceability guide](uipath-requirement-traceability.md)
- [Skill source](../../skills/uipath-uat-session/SKILL.md)
