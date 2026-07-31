#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

ALLOWED_VARIANTS = {"problem", "solution", "explainer", "fixtures", "reference"}


def slug(value: str) -> str:
    value = re.sub(r"[^a-zA-Z0-9]+", "-", value.strip()).strip("-").lower()
    return value or "untitled"


def write_readme(path: Path, title: str, objective: str, variant: str, prerequisites: list[str], evidence: str) -> None:
    label = variant.replace("-", " ").title()
    lines = [f"# {title} - {label}", "", "## Objective", "", objective or "Describe the capability this exercise develops.", ""]
    if prerequisites:
        lines.extend(["## Prerequisites", "", *[f"- {item}" for item in prerequisites], ""])
    lines.extend([
        "## Exercise purpose",
        "",
        f"This directory is the **{variant}** variant for the exercise.",
        "",
        "## Completion evidence",
        "",
        evidence or "Provide the artifact or explanation that demonstrates the objective.",
        "",
    ])
    path.write_text("\n".join(lines), encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Scaffold a numbered UiPath training lab from JSON.")
    parser.add_argument("plan", help="JSON file containing sections and exercises")
    parser.add_argument("--output", default="labs")
    args = parser.parse_args()

    plan_path = Path(args.plan).expanduser().resolve()
    output = Path(args.output).expanduser().resolve()
    data = json.loads(plan_path.read_text(encoding="utf-8"))
    sections = data.get("sections")
    if not isinstance(sections, list) or not sections:
        raise SystemExit("Plan must contain a non-empty 'sections' list")

    created: list[str] = []
    seen_ids: set[str] = set()
    for section_index, section in enumerate(sections, 1):
        section_title = str(section.get("title", f"Section {section_index}"))
        section_id = str(section.get("id", f"{section_index:02d}"))
        if section_id in seen_ids:
            raise SystemExit(f"Duplicate section id: {section_id}")
        seen_ids.add(section_id)
        section_dir = output / f"{section_id}-{slug(section_title)}"
        section_dir.mkdir(parents=True, exist_ok=True)
        exercises = section.get("exercises", [])
        if not isinstance(exercises, list) or not exercises:
            raise SystemExit(f"Section {section_id} must contain exercises")
        for exercise_index, exercise in enumerate(exercises, 1):
            title = str(exercise.get("title", f"Exercise {exercise_index}"))
            exercise_id = str(exercise.get("id", f"{section_id}.{exercise_index:02d}"))
            variants = exercise.get("variants", ["explainer"])
            unknown = sorted(set(variants) - ALLOWED_VARIANTS)
            if unknown:
                raise SystemExit(f"Unknown variants for {exercise_id}: {', '.join(unknown)}")
            exercise_dir = section_dir / f"{exercise_id}-{slug(title)}"
            for variant in variants:
                variant_dir = exercise_dir / variant
                variant_dir.mkdir(parents=True, exist_ok=True)
                write_readme(
                    variant_dir / "README.md",
                    title,
                    str(exercise.get("objective", "")),
                    variant,
                    [str(item) for item in exercise.get("prerequisites", [])],
                    str(exercise.get("evidence", "")),
                )
                created.append((variant_dir / "README.md").relative_to(output).as_posix())

    print(json.dumps({"output": str(output), "created_files": created, "count": len(created)}, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
