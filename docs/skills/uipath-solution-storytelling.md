# UiPath Solution Storytelling

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-solution-storytelling/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | Model-invoked — start it explicitly or let the agent select it when the request fits. |
| **Purpose** | Turn verified UiPath notes, evidence, designs, demos, and outcomes into an audience-ready narrative. |
| **Use it when** | Creating proposals, architecture explanations, demos, talks, case studies, articles, or release communications. |
| **Do not use it for** | Inventing outcomes, capabilities, metrics, quotations, or exposing confidential/customer material. |
| **Primary output** | Source pile, audience brief, incremental narrative, fact-check record, and final story/script. |
| **Maturity** | Pilot |

## What it does

Accurate technical content can still fail if the audience meets concepts in the wrong order, cannot see why they matter, or encounters unsupported claims. This skill separates raw exploration from shaping, introduces each load-bearing concept before using it, and builds the narrative in reviewable blocks.

## Before and after

### Before

An executive proposal combines SDD excerpts, screenshots, metrics, product names, and implementation details. It opens with architecture, assumes the reader understands queues and Maestro, and includes a benefit estimate that has no source. Useful fragments compete for attention.

### After

The audience, desired decision, format, length, prerequisites, and evidence standard are explicit. Claims are supported, inferred, or removed. The story introduces the business problem before the relevant products, shows verified evidence in the right form, and ends with a clear action. Unused fragments remain in the source pile rather than being forced into the final piece.

## When to reach for it

Invoke this skill as `$uipath-solution-storytelling`, or let the agent select it automatically when the request matches its defined job.

- Turning an SDD and demo results into an executive explanation.
- Writing a community article or talk.
- Building a demo script or customer-facing case study.
- Explaining architecture to a mixed audience.
- Editing a release communication for clarity and evidence.
- Preserving user edits while shaping a story incrementally.

### Use a neighboring skill instead

- Claims, metrics, quotations, or product behavior cannot be verified.
- Confidential architecture or customer data cannot be safely removed.
- The task is technical design rather than communication.
- Raw fragments would be overwritten while drafting.
- Every fact must be included even when it does not serve the audience outcome.

## Prerequisites

- One writing mode: fragment, shape, beat, or edit.
- One source document or source pile.
- Audience, desired decision/behavior, existing knowledge, channel, format, length, and evidence standard.
- Notes, SDD, architecture, screenshots, metrics, demos, quotations, and outcomes with source status.
- Confidentiality and current-verification requirements.

## What it produces

- Raw fragment file or organized source pile.
- Audience and prerequisite brief.
- Claim/evidence inventory with missing proof and confidentiality notes.
- Concept dependency order.
- Incrementally authored narrative blocks.
- Appropriate prose, lists, tables, diagrams, code, and callouts.
- Final fact-check covering promise, logic, examples, calls to action, citations, and channel constraints.
- Audience-ready demo, article, proposal, case study, release note, or presentation script.

## How it works

1. **Choose one mode.** Prevent research, drafting, and editing from colliding.
2. **Define audience outcome.** Make the story judgeable.
3. **Verify the source pile.** Support, label, or remove every major claim.
4. **Ground concepts in order.** Never rely on an idea before introducing it.
5. **Build in selected blocks.** Reread saved work and preserve user edits.
6. **Choose form by relationship.** Formatting should clarify, not decorate.
7. **Finish and fact-check.** Keep unused material outside the final narrative.

## Example prompt

```text
Use uipath-solution-storytelling in shape mode.

Turn the approved SDD, demo notes, review results, and verified metrics into a
1,200-word executive article. The audience understands automation but not
Maestro or agents. Inventory and verify claims first, mark confidential content,
introduce every concept before depending on it, propose two opening shapes, and
write only the selected structure. End with a fact-check and clear call to action.
```

## Common questions

**Will this skill make changes simply because it is model-invoked?**

No. Model invocation only lets the agent load the instructions when the request fits. Source writes, tracker changes, tenant operations, deployments, and other consequential actions still require the authority stated by the request and the owning official skill.

## It's working if

- Mode, audience, outcome, channel, and source document are explicit.
- Every major claim is supported, labeled inference, or removed.
- Confidential material is protected.
- No section relies on an unintroduced concept.
- Each narrative block advances the audience outcome.
- Formatting matches the information relationship.
- User edits and raw fragments are preserved.
- Opening promise, logic, examples, citations, and call to action survive final fact-check.

## Where it fits

This is a **model-invoked complementary discipline** in UiPath Boost. It may be selected directly by the agent or reached from a user-invoked workflow. Use [uipath-project-router](uipath-project-router.md) when the larger route is unclear.

## Official UiPath handoff

Official skills remain the authority for current capabilities, commands, schemas, validation, and operations. Use `uipath-research-note` when a claim needs current primary-source verification before storytelling.

## Related resources

- [Research Note guide](uipath-research-note.md)
- [Project Knowledge Base guide](uipath-project-knowledge-base.md)
- [Skill source](../../skills/uipath-solution-storytelling/SKILL.md)
