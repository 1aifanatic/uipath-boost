# UiPath Project Knowledge Base

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-project-knowledge-base/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Create a portable, linked Markdown knowledge base for durable UiPath project knowledge. |
| **Use it when** | Decisions, runbooks, research, glossary terms, patterns, and lessons are scattered or duplicated. |
| **Do not use it for** | Copying full source documents into notes or making one proprietary note application mandatory. |
| **Primary output** | Knowledge conventions, topic notes, index notes, links, ownership and freshness metadata, and a navigation report. |
| **Maturity** | Pilot |

## Why this skill exists

Projects accumulate useful knowledge faster than people can find it. The same queue rule may appear in an SDD, issue, chat, runbook, and post-mortem with different wording. New team members cannot tell which statement is current, and operational knowledge disappears when a person leaves.

This skill creates a navigable knowledge layer using ordinary Markdown. It preserves authoritative sources through links and adds the context needed to find, judge, and maintain them.

## Before and after

### Before

Architecture decisions live in one folder, runbooks in another, research in personal notes, and glossary definitions inside several documents. Searching returns duplicates with no owner or review date. A newly created note may repeat an existing fact and make the inconsistency worse.

### After

The project has:

- A small documented naming and metadata convention.
- Topic notes for durable concepts.
- Index notes for architecture, operations, testing, and business language.
- Links from concepts to SDDs, ADRs, reviews, tests, and runbooks.
- Relationship links such as prerequisite, related, and superseded-by.
- Owners, source dates, review triggers, status, and sensitivity labels.
- A report of broken links, orphan notes, duplicates, and stale content.

## When to use

- Important project knowledge is difficult to discover.
- The same concept is described in several places.
- Runbooks, decisions, research, and lessons need one navigation system.
- A long-running program needs knowledge that survives tools and team changes.
- Readers need freshness and ownership signals before trusting a note.
- You want portable Markdown that can also work with optional wiki-link tools.

## When not to use

- You only need a short transfer to the next session; use `uipath-project-handoff`.
- The project first needs business terms and decisions clarified; use `uipath-process-domain-modeling`.
- You intend to duplicate complete SDDs, issue bodies, logs, or reports.
- The only navigation method would require one proprietary application.
- Sensitive production records, credentials, or unrestricted personal data would be stored in the knowledge base.

## What you need before starting

- Access to existing Markdown, SDDs, ADRs, runbooks, reviews, research, post-mortems, diagrams, and issue links.
- Existing folder and naming conventions worth preserving.
- Known document owners and sensitivity expectations.
- The project areas readers most often need to navigate.
- Permission to create or reorganize Markdown documentation.

## What it produces

- A short convention guide covering titles, filenames, indexes, links, metadata, sensitivity, ownership, and archives.
- Focused topic notes that point to source-of-truth documents.
- Index notes that group related concepts and workflows.
- Backlinks and dependency relationships.
- Freshness metadata such as source date, version, owner, status, and review trigger.
- A validation report for broken links, orphan notes, duplicate titles, missing indexes, and moved artifacts.

## How it works

1. **Discover existing knowledge.** Inventory sources and identify overlaps before writing.
2. **Define portable conventions.** Keep the system understandable in ordinary Markdown.
3. **Create focused notes and indexes.** Make every new note reachable from a relevant index.
4. **Connect dependencies.** Link business concepts through design, build, test, release, and support knowledge.
5. **Add ownership and freshness.** Help readers decide whether a note is trustworthy today.
6. **Search before creating.** Update or merge existing notes rather than multiplying duplicates.
7. **Validate navigation.** Expose orphaned, broken, duplicate, stale, and moved content.

## Example scenario

A queue-processing program has three different retry definitions in an SDD, a support runbook, and a post-mortem. The skill creates one “Queue retry policy” topic note that explains the concept briefly, links to the approved ADR and current runbook, identifies the owner and review trigger, and marks the older post-mortem as historical evidence. Architecture and operations indexes both link to the topic note.

The knowledge base does not rewrite the full SDD or runbook. It makes the authoritative relationship discoverable.

## Example prompt

```text
Use uipath-project-knowledge-base.

Organize the Markdown knowledge for this UiPath program. Start by finding
existing ADRs, runbooks, research notes, glossary terms, reviews, and duplicate
queue-design notes. Define portable conventions, create index notes, link to
authoritative sources instead of copying them, and add owner, freshness,
status, and sensitivity metadata. Finish with a broken-link and orphan report.
```

## How to know it is done

- Every new topic note is reachable from an index.
- One durable concept has one primary note.
- Authoritative documents are linked rather than duplicated.
- Important relationships and superseded content are visible.
- Readers can identify owner, source date, status, and review trigger.
- Broken links, orphan notes, duplicates, and stale items are reported.
- Navigation works without a proprietary note application.
- Sensitive information is excluded or access-controlled appropriately.

## Official UiPath handoffs

This skill organizes knowledge about official product work but does not replace product owners. Current commands, schemas, validation, tenant behavior, test operations, troubleshooting, and deployment remain with the matching official UiPath skills.

Use `uipath-research-note` to create a cited answer to one current technical question, `uipath-solution-storytelling` to turn verified material into an audience narrative, and `uipath-project-handoff` for short-term continuity.

## Related resources

- [Skill source](../../skills/uipath-project-knowledge-base/SKILL.md)
