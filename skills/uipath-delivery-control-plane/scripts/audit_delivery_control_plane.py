#!/usr/bin/env python3
from __future__ import annotations
import argparse
import json
from pathlib import Path

CONTROL_CANDIDATES = {
    "official_project_context": [".claude/rules/project-context.md", "AGENTS.md", "CLAUDE.md"],
    "tracker": ["docs/agents/issue-tracker.md", ".github/ISSUE_TEMPLATE", ".azuredevops"],
    "decisions": ["docs/adr", "docs/decisions", "DECISIONS.md"],
    "evidence": ["docs/evidence", "EVIDENCE.md", "evidence-index.md"],
    "environments": ["docs/environments.md", "ENVIRONMENTS.md", ".env.example"],
    "risks": ["docs/risks.md", "RISK-REGISTER.md"],
    "release": ["docs/release-readiness.md", "RELEASE-CHECKLIST.md"],
    "runbooks": ["docs/runbooks", "RUNBOOK.md"],
    "ownership": ["CODEOWNERS", ".github/CODEOWNERS", "OWNERS.md"],
    "ci": [".github/workflows", "azure-pipelines.yml", "Jenkinsfile"],
}

def main() -> int:
    p=argparse.ArgumentParser(description="Audit delivery control-plane artifacts without rediscovering UiPath project structure.")
    p.add_argument("root", nargs="?", default=".")
    a=p.parse_args()
    root=Path(a.root).expanduser().resolve()
    if not root.is_dir():
        raise SystemExit(f"Not a directory: {root}")
    found={}
    for key, candidates in CONTROL_CANDIDATES.items():
        found[key]=[c for c in candidates if (root/c).exists()]
    gaps=[key for key, paths in found.items() if not paths]
    result={
        "root": str(root),
        "found": found,
        "gaps": gaps,
        "official_context_present": bool(found["official_project_context"]),
        "scope_note": "This audit checks delivery governance only. UiPath artifact discovery remains owned by uipath-project-discovery-agent."
    }
    print(json.dumps(result,indent=2))
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
