# UiPath Process Domain Modeling

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-process-domain-modeling/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Create one precise business vocabulary for a UiPath process and its lifecycle. |
| **Use it when** | Terms are vague, overloaded, or inconsistent across business, design, testing, dashboards, runbooks, and support. |
| **Do not use it for** | Turning selectors, class names, file paths, or other implementation identifiers into business terminology. |
| **Primary output** | Canonical glossary, ambiguity list, lifecycle relationships, justified ADRs, and propagation checklist. |
| **Maturity** | Core |

## Why this skill exists

Many automation defects begin as language defects. “Transaction” may mean a business case to one person, a queue item to another, and one system update to a third. “Completed” may mean extracted, posted, or acknowledged. If those meanings remain implicit, requirements, tests, dashboards, retries, and support procedures disagree.

This skill makes the business model explicit before implementation names harden the confusion.

## Before and after

### Before

The PDD describes one “case” per email, the queue stores one item per attachment, and the test plan expects one result per customer request. Exception and retry rules refer to all three as “transactions.” Teams cannot agree on counts or completion.

### After

The glossary distinguishes `Customer Request`, `Source Email`, `Business Document`, and `Queue Work Item`, explains their cardinality and lifecycles, records aliases to avoid, and provides concrete examples. Tests, dashboards, backlog items, and support documentation receive a checklist of terms to update.

## When to use

- Business and technical teams use the same word for different concepts.
- Queue semantics and business transaction semantics are being mixed.
- Exception, retry, cancellation, duplicate, or partial-success behavior is unclear.
- Human-review decisions need a stable name and lifecycle.
- Discovery, design, testing, and support need one glossary.
- Existing documents contain contradictory definitions.

## When not to use

- The vocabulary is already current, canonical, and consistently used.
- You only need a product schema or code symbol explained.
- You want to preserve two synonyms for one concept without a business reason.
- You want ADRs for ordinary, reversible terminology choices.
- You intend to overwrite a well-established term without showing the conflict and owner decision.

## What you need before starting

- Existing `CONTEXT.md`, PDD, SDD, process maps, queue schemas, test cases, ADRs, and representative artifacts.
- Business owners and technical users of the important terms.
- Normal, exception, retry, cancellation, duplicate, partial-success, and human-review examples.
- A durable glossary location.

## What it produces

- One-sentence canonical definitions.
- Aliases to avoid and concrete examples.
- A list of contradictions and proposed resolutions.
- Relationships, cardinalities, and lifecycle notes.
- ADRs only when a real, surprising, hard-to-reverse trade-off exists.
- A propagation checklist for PDD, SDD, backlog, tests, dashboards, runbooks, and support artifacts.

## How it works

1. **Load current language.** Separate business concepts from implementation names.
2. **Challenge fuzzy terms.** Recommend one canonical term for each concept.
3. **Stress-test boundaries.** Use normal and exceptional scenarios to reveal lifecycle assumptions.
4. **Update the glossary immediately.** Record each resolved term once.
5. **Use ADRs sparingly.** Reserve them for load-bearing trade-offs.
6. **Propagate the language.** Name every downstream artifact owner that must adopt it.

## Example prompt

```text
Use uipath-process-domain-modeling.

Read our CONTEXT.md, PDD, queue schema, tests, and runbook. Resolve the meanings
of case, transaction, document, queue item, exception, retry, and completion.
Stress-test the vocabulary with duplicate, partial-success, cancellation, and
human-review scenarios. Update one canonical glossary with aliases and examples,
then produce a propagation checklist. Do not include implementation identifiers.
```

## How to know it is done

- Existing contradictions and missing concepts were listed.
- Every material ambiguity has a proposed and owned resolution.
- Each concept has one canonical term and clear aliases to avoid.
- Relationships and lifecycles survive normal and exception scenarios.
- Implementation details are absent from business definitions.
- ADRs satisfy the hard-to-reverse, surprising, real-trade-off tests.
- Downstream artifact owners know what language to update.

## Official UiPath handoffs

- `uipath-automation-discovery` may use the vocabulary while sizing opportunities.
- `uipath-planner` consumes the canonical language in the SDD and task plan.
- Product, test, and operations skills use the glossary but retain ownership of their artifacts and commands.

## Related resources

- [Process context template](../../skills/uipath-process-domain-modeling/assets/context-template.md)
- [Discovery With Docs guide](uipath-discovery-with-docs.md)
- [Skill source](../../skills/uipath-process-domain-modeling/SKILL.md)
