# UiPath Pattern Migration

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-pattern-migration/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Plan and execute a wide repeated change through an explicit contract, full inventory, dry run, bounded batches, backups, and validation. |
| **Use it when** | Names, configuration keys, queue fields, package references, arguments, fixtures, or documentation conventions must change across many locations. |
| **Do not use it for** | Blind text replacement in structured artifacts or applying a migration before inventory and dry-run review. |
| **Primary output** | Migration contract, classified inventory, dry-run report, backups, manifest, batch evidence, completeness report, and compatibility cleanup. |
| **Maturity** | Pilot |

## Why this skill exists

Repeated changes appear mechanical but hide false positives, structured formats, generated files, compatibility windows, and consumers outside the initial search. One global replacement can corrupt artifacts or leave half-migrated contracts. This skill makes the transformation reviewable and independently reversible by project or transformation class.

## Before and after

### Before

A queue field must change from `InvoiceNo` to `InvoiceNumber` across projects, tests, fixtures, docs, dashboards, and integration consumers. A text search returns hundreds of matches, including JSON and XAML. The team cannot tell which are safe, generated, ambiguous, or externally consumed.

### After

The migration contract defines exact forms, scope, exclusions, assumptions, compatibility, and rollback. Every occurrence is classified. Plain text changes have a reviewed dry run, structured artifacts go to official owners, batches have backups and manifests, and validation confirms expected counts. The old alias is removed only after all consumers and environments are verified.

## When to use

- A repeated pattern changes across many files or projects.
- Configuration keys, queue fields, arguments, packages, tests, or docs migrate together.
- The work can be discovered mechanically but includes ambiguous cases.
- Compatibility must remain during an expand-contract period.
- Completeness and rollback evidence are required.

## When not to use

- The change occurs in one location and can be reviewed directly.
- Structured XAML, BPMN, JSON, or generated artifacts would be modified by blind replacement.
- No full inventory or reviewed dry run exists.
- Backups and manifest evidence would be omitted.
- Temporary aliases would be removed before all consumers migrate.

## What you need before starting

- Exact old and new forms.
- Scope, exclusions, semantic assumptions, generated files, and structured-artifact owners.
- Searchable projects, tests, docs, configuration, examples, and consumer list.
- Batch and rollback boundaries.
- Applicable official validation commands.
- Authority to apply changes after dry-run approval.

## What it produces

- A migration contract that separates safe matches from false positives.
- A complete inventory grouped by transformation class.
- Manual handling list for ambiguous and structured cases.
- Dry-run counts and representative proposed changes.
- Per-batch backups and searchable manifest with hashes.
- Syntax, schema, build, test, review, boundary, and solution evidence.
- Reconciled old/new occurrence counts.
- Deliberate retirement of aliases, dual writes, and compatibility paths.

## How it works

1. **Define the contract.** Make scope and false positives reviewable.
2. **Inventory before writing.** Classify every in-scope occurrence.
3. **Dry-run approved plain text.** Review samples and complete counts.
4. **Apply bounded batches.** Back up and manifest every automated write.
5. **Validate every batch.** Know remaining inventory before proceeding.
6. **Reconcile completeness.** Confirm old forms, exclusions, backups, and manual cases.
7. **Retire compatibility last.** Verify all consumers and environments first.

## Optional literal-text dry run

For an approved plain-text transformation only:

```bash
python skills/uipath-pattern-migration/scripts/apply_text_migration.py . \
  --glob "**/*.md" \
  --find "OldTerm" \
  --replace "NewTerm"
```

The helper defaults to dry-run JSON. `--apply` performs writes and creates backups plus a manifest; use it only after the contract, inventory, and dry run are reviewed. Never use it blindly on structured UiPath artifacts.

## Example prompt

```text
Use uipath-pattern-migration.

Plan migration of queue field InvoiceNo to InvoiceNumber across source, tests,
fixtures, configuration, and docs. Define scope, exclusions, structured-file
owners, compatibility, and rollback. Inventory and classify every occurrence,
run a no-write dry transformation only for approved plain-text classes, and
present counts and samples for approval before applying any batch.
```

## How to know it is done

- Reviewers can distinguish safe matches from false positives.
- Every in-scope occurrence is classified before modification.
- Dry-run scope and counts match the contract.
- Each applied batch has backups, manifest, validation, and independent rollback.
- Structured artifacts were handled by official owners.
- Expected and actual occurrence counts reconcile.
- Out-of-scope forms did not change.
- Compatibility is retired only after consumers and environments are verified.

## Official UiPath handoffs

Structured RPA, agent, Maestro, app, API-workflow, test, and solution artifacts go to their official product skills for safe modification and validation. Pattern Migration coordinates the wide contract and evidence; it does not make plain-text replacement a substitute for product ownership.

## Related resources

- [Literal-text migration helper](../../skills/uipath-pattern-migration/scripts/apply_text_migration.py)
- [Safe Refactor Plan guide](uipath-safe-refactor-plan.md)
- [Skill source](../../skills/uipath-pattern-migration/SKILL.md)
