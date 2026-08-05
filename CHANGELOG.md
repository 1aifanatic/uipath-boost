# Changelog

## 0.2.0 - 2026-08-05

### Changed

- Classified all 34 skills as user-invoked or model-invoked, enforced the split
  through Codex metadata, and added cross-agent explicit-use descriptions.
- Refreshed official UiPath ownership against the current catalog, including
  `uipath-process-mining`.
- Updated routing, discovery, handoff, wayfinding, prototyping, architecture,
  runbook, task-refinement, knowledge, source-control, and skill-authoring
  behavior.
- Reorganized every human-facing guide around invocation, before-and-after
  scenarios, common questions, observable success, and official handoffs.
- Added behavioral contracts and validation for triggers, non-triggers, safety,
  and completion.
- Added Codex and Claude Code plugin manifests.
- Updated the bundled `skills` CLI dependency to 1.5.22.
- Updated the validation workflow to the Node 24-based GitHub Actions v6 runtimes.

### Removed

- Removed duplicated official UiPath catalog snapshots from individual skills;
  the Project Router now owns the catalog snapshot.

### Attribution

- Added an acknowledgment of the engineering-skill patterns that inspired the
  UiPath-specific adaptations.
