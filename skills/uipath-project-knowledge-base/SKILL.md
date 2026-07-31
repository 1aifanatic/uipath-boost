---
name: uipath-project-knowledge-base
description: "Create and maintain a portable linked Markdown knowledge base for a UiPath program or project. Use when design decisions, runbooks, research, glossary terms, operational knowledge, reusable patterns, and lessons are scattered across conversations or folders and need searchable index notes, context pointers, ownership, and freshness signals."
---

# UiPath Project Knowledge Base

Make project knowledge easy to discover and update without copying the same fact into many documents or tying the workflow to one proprietary note-taking application.

**Maturity:** pilot.

## Ownership Boundary

**This custom skill owns:** Make project knowledge easy to discover and update without copying the same fact into many documents or tying the workflow to one proprietary note-taking application.

It does not own current UiPath product commands, schemas, artifact validation, live tenant operations, or policy administration unless its instructions explicitly say otherwise.

## Workflow

### 1. Discover existing knowledge

Inventory current Markdown, SDDs, ADRs, research notes, runbooks, reviews, post-mortems, diagrams, issue links, and external sources. Respect existing naming and folder conventions.

**Completion criterion:** The knowledge sources and duplicates are known.

### 2. Define portable conventions

Choose title, filename, index, link, metadata, sensitivity, ownership, and archive conventions that work in ordinary Markdown and remain compatible with optional wiki-link tools.

**Completion criterion:** The repository has a small documented convention set.

### 3. Create topic and index notes

Write focused notes for durable knowledge and index notes that group related concepts, artifacts, and workflows. Link to source-of-truth documents instead of restating them.

**Completion criterion:** Every new note is reachable from at least one relevant index.

### 4. Connect dependencies and backlinks

Add related, prerequisite, superseded-by, and operational-owner links so a reader can move from business concept to design, build, test, release, and support knowledge.

**Completion criterion:** Important notes are connected rather than isolated files.

### 5. Add freshness and ownership

Record source date, product or project version, owner, review trigger, status, and sensitivity where staleness or access matters.

**Completion criterion:** Readers can judge whether a note is current and who maintains it.

### 6. Search and reconcile before writing

Find existing notes by title, aliases, content, and backlinks before creating or updating. Merge duplicates and preserve intentional history.

**Completion criterion:** One durable concept has one primary note.

### 7. Validate navigation

Check broken links, orphan notes, duplicate titles, missing indexes, and references to moved artifacts. Report gaps and archive stale content deliberately.

**Completion criterion:** The knowledge base is navigable and its maintenance gaps are visible.

## Output Contract

- Portable Markdown knowledge-base conventions.
- Topic and index notes.
- Context and backlink graph.
- Freshness and ownership metadata.
- Navigation validation report.

## Guardrails

- Do not duplicate full SDD, issue, log, or report content into notes.
- Do not create application-specific links as the only navigation mechanism.
- Do not put credentials, personal data, or unrestricted production records in the knowledge base.
- Do not treat a recently modified old document as current without reading its content.

## Example Requests

- "Build a knowledge base for this UiPath customer program."
- "Organize our architecture decisions and runbooks."
- "Find and merge duplicate notes about queue design."

## Finish

End with what was completed, the evidence produced, the next official skill or owner, and every unresolved blocker. Never imply that a write, validation, test, deployment, policy change, tenant operation, or runtime action occurred unless it actually ran and its result was observed.
