# UiPath Component Design

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-component-design/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | Model-invoked — start it explicitly or let the agent select it when the request fits. |
| **Purpose** | Design a small, stable public contract that hides meaningful UiPath implementation complexity. |
| **Use it when** | A reusable workflow, library, agent, Maestro process, API workflow, human task, queue contract, or adapter needs a clear testable seam. |
| **Do not use it for** | Implementing the component during exploration or creating pass-through wrappers and speculative extension points. |
| **Primary output** | Caller brief, at least three contrasting designs, trade-off analysis, selected contract, acceptance examples, and implementation route. |
| **Maturity** | Core |

## What it does

A useful component makes difficult behavior easier for every caller. A weak component simply moves names around or exposes retry details, selectors, vendor payloads, and credentials that callers should not manage. This skill tests whether an abstraction has real depth and compares several interface shapes before committing to one.

## Before and after

### Before

Six workflows perform email intake differently. Each caller knows mailbox selectors, attachment rules, retry behavior, error translation, and vendor payload quirks. Tests bypass the same path production uses. A proposed “helper” only forwards ten arguments and hides nothing.

### After

The team compares minimal, stateful, and event-oriented contracts. It chooses a small public seam based on real callers, makes invariants and error modes explicit, hides mailbox and retry mechanics, and defines acceptance examples that tests and production callers share. The owning official skill receives an implementation-ready contract.

## When to reach for it

Invoke this skill as `$uipath-component-design`, or let the agent select it automatically when the request matches its defined job.

- A behavior will be reused by several callers.
- Callers currently repeat or understand too much implementation detail.
- External dependencies need isolation behind a stable adapter.
- Queue, event, human-task, or integration contracts need explicit state and errors.
- Tests need to use the same public seam as production.
- An architecture-deepening exercise needs materially different component shapes.

### Use a neighboring skill instead

- There is one simple implementation and no reuse or isolation need.
- A wrapper would merely pass arguments through unchanged.
- Extension points are being added for hypothetical future variation.
- The immediate need is implementation rather than contract exploration.
- Product-specific schema or command details are being guessed instead of delegated to the official owner.

## Prerequisites

- The business capability and real callers.
- Inputs, outputs, invariants, errors, performance expectations, and audit needs.
- Representative normal, edge, and failure examples.
- Details that must remain hidden from callers.
- Current variation points and external dependencies.
- The official UiPath product skill that will implement the selected design.

## What it produces

- A caller and behavior brief independent of implementation.
- A proposed public seam and the reason for its placement.
- At least three genuinely different designs:
  - minimal common-case,
  - explicit stateful,
  - extensible or event-oriented.
- Representative usage and hidden complexity for each design.
- Trade-offs covering interface size, correct-use ergonomics, misuse, observability, testing, versioning, locality, platform fit, and operations.
- A selected contract with acceptance examples and implementation handoff.

## How it works

1. **Define behavior and callers.** Make the contract judgeable without seeing its internals.
2. **Choose the highest practical seam.** Place it where real consumers and tests naturally operate.
3. **Design it at least three ways.** Force alternatives that differ in state, control, or interaction model—not names.
4. **Compare openly.** Document why each design helps and hurts.
5. **Select and specify.** Give the implementer concrete usage and acceptance examples.
6. **Apply the deletion test.** If removing the component would not redistribute meaningful complexity to callers, the abstraction is too shallow.

## Example prompt

```text
Use uipath-component-design.

Design the contract between our Maestro process and the RPA worker that posts
invoices. Identify callers, behavior, invariants, audit needs, errors, and hidden
details. Produce minimal, stateful, and event-oriented shapes with example usage.
Compare misuse risk, observability, testability, versioning, and operational cost.
Select one contract with acceptance examples, but do not implement it.
```

## Common questions

**Will this skill make changes simply because it is model-invoked?**

No. Model invocation only lets the agent load the instructions when the request fits. Source writes, tracker changes, tenant operations, deployments, and other consequential actions still require the authority stated by the request and the owning official skill.

## It's working if

- Callers and behavior are explicit.
- The public seam has a clear reason.
- At least three options differ materially.
- Hidden complexity and representative usage are shown.
- Trade-offs are visible and the first idea did not win by default.
- The selected contract has acceptance examples.
- The deletion test proves the component earns its cost.
- An official product skill is named for implementation.

## Where it fits

This is a **model-invoked complementary discipline** in UiPath Boost. It may be selected directly by the agent or reached from a user-invoked workflow. Use [uipath-project-router](uipath-project-router.md) when the larger route is unclear.

## Official UiPath handoff

Implementation belongs to the matching official owner, such as `uipath-rpa`, `uipath-agents`, Maestro skills, `uipath-api-workflow`, or `uipath-human-in-the-loop`. This skill does not invent current product schemas or implement during exploration.

## Related resources

- [Architecture Deepening guide](uipath-architecture-deepening.md)
- [Project Boundaries guide](uipath-project-boundaries.md)
- [Skill source](../../skills/uipath-component-design/SKILL.md)
