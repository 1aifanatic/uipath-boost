# UiPath Discovery With Docs

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-discovery-with-docs/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | User-invoked — start it explicitly. |
| **Purpose** | Run rigorous discovery while updating durable project knowledge as decisions are made. |
| **Use it when** | Discovery spans multiple sessions or must leave a reusable glossary, evidence index, decision log, ADRs, and planning handoff. |
| **Do not use it for** | Writing implementation code, duplicating existing documents, or storing secrets and raw production data. |
| **Primary output** | `CONTEXT.md`, decision log, evidence index, justified ADRs, and a planner-ready handoff. |
| **Maturity** | Core |

## What it does

A good interview can still fail the project if its decisions disappear into meeting notes or chat history. Later agents may use different business terms, reopen settled questions, or design from stale evidence. This skill pairs each discovery decision with an immediate update to the correct durable document.

It distinguishes ordinary decisions from architecture decisions: routine choices go in the decision log, while only surprising or hard-to-reverse trade-offs justify an ADR.

## Before and after

### Before

Discovery has occurred across several workshops. Terms such as “case,” “exception,” and “completed” mean different things to different people. Samples and policies are scattered. Decisions are buried in transcripts, and the next planner would need to replay every discussion.

### After

The project has one current business-language context, an evidence index, a decision log, a small set of justified ADRs, and a concise planner handoff. Resolved questions are not asked again, evidence sensitivity and freshness are visible, and the next agent can design from the documents.

## When to reach for it

Invoke this skill explicitly as `$uipath-discovery-with-docs`. UiPath Boost treats it as a deliberate workflow; Codex enforces that policy in `agents/openai.yaml`.

- Discovery will continue across more than one session.
- A repository-backed project needs durable context for future agents.
- Meeting notes and samples must become structured evidence and decisions.
- Business terminology must remain consistent from discovery through support.
- Hard-to-reverse trade-offs need ADRs.
- The final output must be ready for `uipath-planner` without replaying the interview.

### Use a neighboring skill instead

- You only need a short, disposable interview with no repository documentation.
- The project already has current, approved discovery documents and is ready for planning.
- You want to write implementation code or product artifacts.
- You intend to overwrite user-authored structure or duplicate a complete PDD, SDD, or source artifact.
- Sensitive evidence cannot be safely referenced or redacted.

## Prerequisites

- Existing project context, `CONTEXT.md`, PDD, SDD, ADRs, decision log, and evidence index when present.
- Workshop notes, source documents, samples, screenshots, logs, and policies.
- The active discovery decision or frontier.
- Repository write permission and agreed documentation locations.
- Owners for business decisions and evidence gaps.

## What it produces

- **`CONTEXT.md`:** stable business language and current project context.
- **Decision log:** ordinary choices, recommendations, owners, evidence, assumptions, and status.
- **Evidence index:** what each item proves, owner, freshness, sensitivity, and location.
- **ADRs:** only for load-bearing, surprising, or hard-to-reverse choices.
- **Planner-ready handoff:** settled scope, decisions, evidence, open blockers, and source pointers.

## How it works

1. **Load existing context.** Read before asking so resolved questions stay resolved.
2. **Run focused discovery.** Use the discovery interview’s one-question or frontier-batch mode.
3. **Update language immediately.** Record a clarified business term once, without implementation detail.
4. **Record choices at the right level.** Use the decision log by default and ADRs selectively.
5. **Index evidence and gaps.** Link rather than paste; record sensitivity and freshness.
6. **Hand off at readiness.** Produce a summary that allows `uipath-planner` to begin directly.

## Example scenario

During a second workshop, the business clarifies that “processed invoice” means posted successfully in the ERP, not merely extracted. The skill updates the glossary immediately, records the acceptance decision and owner, links the ERP report that proves posting, and marks its freshness. Because this definition changes how every downstream test is judged, future design and UAT use the same meaning.

## Example prompt

```text
Use uipath-discovery-with-docs.

Continue discovery from the existing CONTEXT.md, decision log, and evidence
index. Read them before asking questions. Update clarified business terms
immediately, record ordinary decisions in the log, create an ADR only for a
hard-to-reverse trade-off, and link evidence with owner, freshness, and
sensitivity. Finish with a planner-ready handoff. Do not write implementation code.
```

## Common questions

**Why does the agent not start this automatically?**

This workflow benefits from an intentional human start because it orchestrates a session, changes durable project structure, or makes a cross-work decision. Installation makes it available; it does not run it.

## It's working if

- Existing context was read and preserved.
- Resolved questions were not repeated.
- Clarified business terms appear once in the durable context.
- Every load-bearing choice has a decision-log or ADR home.
- Major requirements have linked evidence or owned gaps.
- Sensitive material is referenced safely rather than copied.
- The planner handoff names settled decisions, sources, blockers, and next owner.
- No implementation code or product operation was performed.

## Where it fits

This is a **user-invoked orchestration skill** in UiPath Boost. Use [uipath-project-router](uipath-project-router.md) when you need to decide whether it is the right entry point or what should follow it.

## Official UiPath handoff

- `uipath-automation-discovery` owns enterprise opportunity mining.
- `uipath-planner` owns PDD/SDD transformation and the canonical task plan after discovery readiness.
- Product skills own implementation and product-specific validation.

## Related resources

- [Decision log template](../../skills/uipath-discovery-with-docs/assets/decision-log-template.md)
- [Evidence index template](../../skills/uipath-discovery-with-docs/assets/evidence-index-template.md)
- [Discovery Interview guide](uipath-discovery-interview.md)
- [Skill source](../../skills/uipath-discovery-with-docs/SKILL.md)
