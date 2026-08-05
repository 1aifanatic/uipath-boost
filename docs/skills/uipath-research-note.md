# UiPath Research Note

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-research-note/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | Model-invoked — start it explicitly or let the agent select it when the request fits. |
| **Purpose** | Answer one current UiPath technical or product question with traceable first-party evidence. |
| **Use it when** | A design or delivery decision depends on current documentation, releases, APIs, repositories, CLI behavior, or deployment context. |
| **Do not use it for** | Relying on memory, treating marketing language as a technical contract, or presenting preview behavior as guaranteed. |
| **Primary output** | A cited, date-aware Markdown note with answer, confidence, constraints, gaps, and decision implications. |
| **Maturity** | Core |

## What it does

UiPath products, APIs, CLIs, and service capabilities change. A technically reasonable answer from memory may be wrong for the current version, deployment model, or maturity level. This skill makes research reusable by connecting every load-bearing claim to the source that owns it and by recording when and where the answer applies.

## Before and after

### Before

An architecture discussion assumes a Maestro capability is available in every deployment model because someone saw a demo. No one has checked the current documentation, release notes, or tenant context. The program is about to depend on that assumption.

### After

A Markdown note states the precise question, research date, deployment context, supported facts with official links, conflicting information, confidence, gaps, and the design implication. If the evidence remains incomplete, the note recommends a bounded prototype or vendor confirmation rather than pretending certainty.

## When to reach for it

Invoke this skill as `$uipath-research-note`, or let the agent select it automatically when the request matches its defined job.

- Current feature availability affects a solution decision.
- A CI design depends on supported CLI commands or package behavior.
- API, connector, testing, governance, or compatibility claims need verification.
- Documentation appears inconsistent or version-sensitive.
- A program decision needs a reusable, cited evidence record.
- A research or decision ticket from `uipath-program-wayfinder` must be resolved.

### Use a neighboring skill instead

- The answer is already captured in a current, approved project note.
- The task is to operate a UiPath product rather than research it.
- Only third-party summaries are available but a first-party technical contract should exist.
- The note would contain secrets, private internal URLs, or unredacted customer data.
- You want a broad tutorial rather than an actionable decision answer.

## Prerequisites

- The exact question and the decision it informs.
- Relevant product, feature, API, CLI, deployment model, and version context.
- A freshness requirement: for example, “current as of this release.”
- Access to official UiPath documentation, repositories, release notes, API specifications, installed CLI help, or product-owned support material.
- A repository location for the final note.

## What it produces

- Question, scope, decision context, and research date.
- A concise answer.
- First-party evidence for material claims.
- Product version, service context, and maturity where relevant.
- Clearly labeled facts, inferences, and recommendations.
- Conflicts, limitations, missing evidence, and confidence.
- A recommended next decision, experiment, or official owner.

## How it works

1. **Frame an answerable decision question.** Define when research can stop.
2. **Prefer primary sources.** Use official documentation, repositories, releases, specifications, support articles, and CLI help.
3. **Resolve version and date.** Record the context readers need to judge staleness.
4. **Separate fact from inference.** Paraphrase carefully and label architectural reasoning.
5. **Write one durable note.** Keep evidence, gaps, confidence, and decision implications together.

## Example prompt

```text
Use uipath-research-note.

Research whether the required Maestro capability is supported in our current
deployment model as of today. Use only first-party UiPath sources, record the
research date and product maturity, distinguish facts from architectural
inference, note conflicting documentation, and save a cited Markdown note with
confidence, gaps, and the decision or prototype this evidence supports.
```

## Common questions

**Will this skill make changes simply because it is model-invoked?**

No. Model invocation only lets the agent load the instructions when the request fits. Source writes, tracker changes, tenant operations, deployments, and other consequential actions still require the authority stated by the request and the owning official skill.

## It's working if

- The question is narrow enough to produce an actionable answer.
- Every load-bearing claim has first-party evidence or is labeled as inference.
- Research date, version, deployment context, and maturity are visible.
- Conflicting sources and gaps are not hidden.
- Recommendations are distinct from source facts.
- The note gives discovery, design, or review a clear decision implication.
- No live product action is claimed unless it was actually performed and observed.

## Where it fits

This is a **model-invoked complementary discipline** in UiPath Boost. It may be selected directly by the agent or reached from a user-invoked workflow. Use [uipath-project-router](uipath-project-router.md) when the larger route is unclear.

## Official UiPath handoff

Research informs, but does not replace, official product skills. After the note resolves a question, the matching official owner should perform authoring, validation, testing, platform operation, governance, or deployment. If evidence cannot settle behavior safely, route to a bounded `uipath-prototype` or the official owner.

## Related resources

- [Program Wayfinder guide](uipath-program-wayfinder.md)
- [Prototype guide](uipath-prototype.md)
- [Skill source](../../skills/uipath-research-note/SKILL.md)
