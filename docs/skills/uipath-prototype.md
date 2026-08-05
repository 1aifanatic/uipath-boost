# UiPath Prototype

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-prototype/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | Model-invoked — start it explicitly or let the agent select it when the request fits. |
| **Purpose** | Build the cheapest safe throwaway artifact that can answer one UiPath design question. |
| **Use it when** | A selector, extraction shape, state model, review experience, queue contract, API interaction, agent behavior, or orchestration flow is uncertain. |
| **Do not use it for** | Quietly evolving prototype code into production, broad product development, or claims beyond tested conditions. |
| **Primary output** | Falsifiable question, throwaway artifact, representative evidence, verdict, decision handoff, and cleanup record. |
| **Maturity** | Core |

## What it does

Architecture discussions become productive when a cheap experiment can expose real behavior. The danger is allowing a demo to become production through gradual additions. This skill time-boxes one falsifiable question, makes safety and cleanup explicit, and preserves only the learning.

## Before and after

### Before

The team debates two Maestro state models from diagrams. No one knows how retries, human review, or timing will feel in practice. A developer begins building a polished implementation with live integrations, expanding cost before the question is answered.

### After

A clearly labeled disposable artifact exercises only the uncertain transition using synthetic data and non-production resources. Normal, edge, and failure cases expose state changes and timing. The verdict and limitations enter the authoritative decision record; the runnable prototype remains findable as primary-source evidence on an unmerged `prototype/<name>` branch or another explicitly isolated location.

## When to reach for it

Invoke this skill as `$uipath-prototype`, or let the agent select it automatically when the request matches its defined job.

- A design decision is blocked by observable product or user behavior.
- A mock, isolated workflow, coded harness, sample form, or disposable flow can answer the question cheaply.
- Several architecture options need evidence before SDD approval.
- A research note recommends a bounded experiment.
- Human-review experience or error behavior is hard to judge from prose alone.

### Use a neighboring skill instead

- The question is vague or combines several uncertainties.
- Production credentials or live customer data would be required.
- The artifact is expected to become the production implementation.
- Comprehensive error handling, abstractions, or polish unrelated to the question are requested.
- One convenient example would be treated as proof of broad feasibility.

## Prerequisites

- One falsifiable question and observable pass, fail, or trade-off signal.
- The minimum normal, edge, and failure cases needed to challenge it.
- Synthetic or approved redacted data.
- Non-production resources and bounded permissions.
- The official product skill that owns construction.
- A cleanup and evidence-record location.

## What it produces

- The exact question and success signal.
- A lowest-cost throwaway artifact or mock with obvious `PROTOTYPE` naming.
- Visible inputs, state, outputs, timing, confidence, errors, or human reactions.
- Observations from representative cases.
- A verdict with tested conditions and limitations.
- A design or planning handoff.
- A cleanup record showing deletion or isolation.

## How it works

1. **State one falsifiable question.** Split multiple questions into separate experiments.
2. **Choose the smallest artifact.** It should be smaller than a production slice.
3. **Define safety.** Use redacted data, non-production resources, bounded access, and minimal persistence.
4. **Build through the official owner.** Expose evidence needed to judge the question.
5. **Run representative cases.** Include at least the necessary edge and failure paths.
6. **Preserve the decision and evidence.** Keep the decision on main, keep the runnable evidence outside main, and connect them with a context pointer.

## Example prompt

```text
Use uipath-prototype.

Question: can the proposed IXP result shape represent all three approved broker
document variants without manual field remapping? Define a falsifiable success
signal, use only approved redacted samples and non-production resources, build
the smallest experiment through the official IXP skill, run normal and failure
cases, record the verdict and limitations, and isolate or remove the prototype.
```

## Common questions

**Will this skill make changes simply because it is model-invoked?**

No. Model invocation only lets the agent load the instructions when the request fits. Source writes, tracker changes, tenant operations, deployments, and other consequential actions still require the authority stated by the request and the owning official skill.

## It's working if

- One question has an observable verdict.
- The artifact is smaller than a production slice and clearly disposable.
- Data, credentials, permissions, resources, and side effects are bounded.
- Evidence shows why the verdict follows.
- Normal, edge, and failure cases challenge the design.
- Limitations prevent overgeneralization.
- The resulting decision has an owner and destination.
- Main contains the decision rather than prototype code, and the isolated evidence remains findable.

## Where it fits

This is a **model-invoked complementary discipline** in UiPath Boost. It may be selected directly by the agent or reached from a user-invoked workflow. Use [uipath-project-router](uipath-project-router.md) when the larger route is unclear.

## Official UiPath handoff

The matching official skill builds and validates the experiment—for example `uipath-rpa`, `uipath-agents`, Maestro skills, `uipath-coded-apps`, `uipath-api-workflow`, `uipath-human-in-the-loop`, or `uipath-ixp`. Validated decisions then go to `uipath-planner` or the official implementation owner.

## Related resources

- [Research Note guide](uipath-research-note.md)
- [Component Design guide](uipath-component-design.md)
- [Skill source](../../skills/uipath-prototype/SKILL.md)
