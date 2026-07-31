#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
from pathlib import Path

EXACT = {
    "project.json": "rpa",
    "agent.json": "agent",
    "caseplan.json": "maestro_case",
    "app.config.json": "coded_app",
    "project.uiproj": "api_workflow",
}
SUFFIX = {
    ".uipx": "solution",
    ".flow": "maestro_flow",
    ".bpmn": "maestro_bpmn",
}
SKIP = {".git", "node_modules", "bin", "obj", ".local"}


def main() -> int:
    parser = argparse.ArgumentParser(description="List UiPath project markers under a repository.")
    parser.add_argument("root", nargs="?", default=".")
    parser.add_argument("--require", action="append", default=[], help="Require at least one marker type.")
    args = parser.parse_args()
    root = Path(args.root).expanduser().resolve()
    if not root.is_dir():
        raise SystemExit(f"Not a directory: {root}")

    found: list[dict[str, str]] = []
    for path in sorted(root.rglob("*")):
        if not path.is_file():
            continue
        rel = path.relative_to(root)
        if any(part in SKIP for part in rel.parts):
            continue
        kind = EXACT.get(path.name) or SUFFIX.get(path.suffix.lower())
        if kind:
            found.append({"type": kind, "path": rel.as_posix()})

    types = sorted({item["type"] for item in found})
    missing = sorted(set(args.require) - set(types))
    print(json.dumps({"root": str(root), "types": types, "markers": found, "missing_required": missing}, indent=2))
    return 1 if missing else 0


if __name__ == "__main__":
    raise SystemExit(main())
