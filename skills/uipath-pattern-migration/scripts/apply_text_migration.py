#!/usr/bin/env python3
from __future__ import annotations

import argparse
import hashlib
import json
import shutil
from pathlib import Path


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def is_text(path: Path) -> bool:
    try:
        path.read_text(encoding="utf-8")
        return True
    except (UnicodeDecodeError, OSError):
        return False


def main() -> int:
    parser = argparse.ArgumentParser(description="Dry-run or apply an approved literal text migration.")
    parser.add_argument("root")
    parser.add_argument("--glob", action="append", dest="globs", required=True)
    parser.add_argument("--find", required=True)
    parser.add_argument("--replace", required=True)
    parser.add_argument("--backup-dir", default=".migration-backup")
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()

    root = Path(args.root).expanduser().resolve()
    if not root.is_dir():
        raise SystemExit(f"Not a directory: {root}")
    if args.find == args.replace:
        raise SystemExit("--find and --replace must differ")

    matched: dict[Path, int] = {}
    for pattern in args.globs:
        for path in root.glob(pattern):
            if not path.is_file() or not is_text(path):
                continue
            text = path.read_text(encoding="utf-8")
            count = text.count(args.find)
            if count:
                matched[path] = count

    manifest: dict[str, object] = {
        "root": str(root),
        "mode": "apply" if args.apply else "dry-run",
        "find": args.find,
        "replace": args.replace,
        "files": [],
        "total_occurrences": sum(matched.values()),
    }

    backup_root = (root / args.backup_dir).resolve()
    if args.apply and matched:
        backup_root.mkdir(parents=True, exist_ok=True)

    for path, count in sorted(matched.items(), key=lambda item: item[0].as_posix()):
        rel = path.relative_to(root)
        before = sha256(path)
        entry: dict[str, object] = {"path": rel.as_posix(), "occurrences": count, "sha256_before": before}
        if args.apply:
            backup = backup_root / rel
            backup.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(path, backup)
            text = path.read_text(encoding="utf-8")
            path.write_text(text.replace(args.find, args.replace), encoding="utf-8")
            entry["backup"] = backup.relative_to(root).as_posix()
            entry["sha256_after"] = sha256(path)
        manifest["files"].append(entry)

    if args.apply:
        manifest_path = backup_root / "manifest.json"
        manifest_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
        manifest["manifest"] = manifest_path.relative_to(root).as_posix()

    print(json.dumps(manifest, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
