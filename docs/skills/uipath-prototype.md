# UiPath Prototype

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-prototype/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Build the cheapest safe throwaway artifact that can answer one UiPath design question. |
| **Use it when** | A selector, extraction shape, state model, review experience, queue contract, API interaction, agent behavior, or orchestration flow is uncertain. |
| **Do not use it for** | Quietly evolving prototype code into production, broad product development, or claims beyond tested conditions. |
| **Primary output** | Falsifiable question, throwaway artifact, representative evidence, verdict, decision handoff, and cleanup record. |
| **Maturity** | Core |

## Why this skill exists

Architecture discussions become productive when a cheap experiment can expose real behavior. The danger is allowing a demo to become production through gradual additions. This skill time-boxes one falsifiable question, makes safety and cleanup explicit, and preserves only the learning.

## Before and after

### Before

The team debates two Maestro state models from diagrams. No one knows how retries, human review, or timing will feel in practice. A developer begins building a polished implementation with live integrations, expanding cost before the question is answered.

### After

A clearly labeled disposable flow exercises only the uncertain transition using synthetic data and non-production resources. Normal, edge, and failure cases expose state changes and timing. The verdict and limitations are recorded, production architecture receives the decision, and the throwaway artifact is deleted or isolated.

## When to use

- A design decision is blocked by observable product or user behavior.
- A mock, isolated workflow, coded harness, sample form, or disposable flow can answer the question cheaply.
- Several architecture options need evidence before SDD approval.
- A research note recommends a bounded experiment.
- Human-review experience or error behavior is hard to judge from prose alone.

## When not to use

- The question is vague or combines several uncertainties.
- Production credentials or live customer data would be required.
- The artifact is expected to become the production implementation.
- Comprehensive error handling, abstractions, or polish unrelated to the question are requested.
- One convenient example would be treated as proof of broad feasibility.

## What you need before starting

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
6. **Record and clean up.** Preserve the learning, not accidental production code.

## Example prompt

```text
Use uipath-prototype.

Question: can the proposed IXP result shape represent all three approved broker
document variants without manual field remapping? Define a falsifiable success
signal, use only approved redacted samples and non-production resources, build
the smallest experiment through the official IXP skill, run normal and failure
cases, record the verdict and limitations, and isolate or remove the prototype.
```

## How to know it is done

- One question has an observable verdict.
- The artifact is smaller than a production slice and clearly disposable.
- Data, credentials, permissions, resources, and side effects are bounded.
- Evidence shows why the verdict follows.
- Normal, edge, and failure cases challenge the design.
- Limitations prevent overgeneralization.
- The resulting decision has an owner and destination.
- Prototype artifacts are deleted or isolated and cannot be mistaken for production.

## Official UiPath handoffs

The matching official skill builds and validates the experiment—for example `uipath-rpa`, `uipath-agents`, Maestro skills, `uipath-coded-apps`, `uipath-api-workflow`, `uipath-human-in-the-loop`, or `uipath-ixp`. Validated decisions then go to `uipath-planner` or the official implementation owner.

## Related resources

- [Research Note guide](uipath-research-note.md)
- [Component Design guide](uipath-component-design.md)
- [Skill source](../../skills/uipath-prototype/SKILL.md)
