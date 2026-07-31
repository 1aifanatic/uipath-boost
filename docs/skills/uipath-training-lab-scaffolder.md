# UiPath Training Lab Scaffolder

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-training-lab-scaffolder/SKILL.md)

## At a glance

| | |
|---|---|
| **Purpose** | Generate a consistent, navigable UiPath lab skeleton from an approved curriculum plan. |
| **Use it when** | Instructors need numbered sections, exercises, problem/solution variants, explainers, fixtures, references, and meaningful README stubs. |
| **Do not use it for** | Pretending a skeleton is a finished course, creating empty placeholders, or fabricating working UiPath project assets. |
| **Primary output** | Numbered directory tree, meaningful README stubs, structural validation, and content-authoring backlog. |
| **Maturity** | Pilot |

## Why this skill exists

Course repositories become inconsistent when every instructor creates folders and instructions manually. Learners then cannot predict where the problem, solution, fixtures, or completion evidence lives. This skill turns a curriculum plan into a deterministic structure while clearly separating scaffolding from the real product assets still to be authored.

## Before and after

### Before

A ten-module Agent Builder course has a lesson list but no repository. Folder names are inconsistent, some exercises have solutions beside the problem, README files are empty, and prerequisites or completion evidence are missing.

### After

The curriculum becomes numbered section and exercise directories with only the requested variants. Each README states title, objective, purpose, prerequisites, and completion evidence. Project exercises name the official product owner and validation expectations without inventing artifacts. Structural validation checks ordering, duplicates, required variants, non-empty files, links, and plan completeness.

## When to use

- Starting a workshop, course, bootcamp, or exercise repository.
- Converting a curriculum plan into repeatable problem and solution folders.
- Standardizing lab structure across instructors.
- Creating fixtures, reference, explainer, or solution variants deliberately.
- Preparing a repository for later content authors.

## When not to use

- The curriculum order, objectives, or expected evidence are undefined.
- The request is to build complete UiPath projects rather than scaffold structure.
- Solution content would leak into problem variants.
- Existing exercise numbering would be changed without preserving references and history.
- Empty placeholder files would be considered sufficient.

## What you need before starting

- Ordered curriculum sections and exercises.
- Unique IDs, titles, objectives, prerequisites, expected artifacts, and completion evidence.
- Requested variants: `problem`, `solution`, `explainer`, `fixtures`, or `reference`.
- Identification of exercises requiring real UiPath projects versus conceptual material.
- Approved output directory and numbering policy.

## What it produces

- Numbered, slugged section and exercise directories.
- Requested variant folders only.
- Non-empty README stubs with objective, prerequisites, purpose, and evidence.
- UiPath artifact type, official owner, sample-data policy, setup, and validation pointers for project exercises.
- Structural validation report.
- Backlog of project assets, diagrams, recordings, solutions, and test data still required.

## How it works

1. **Parse the curriculum.** Give every exercise one unique position and purpose.
2. **Review a JSON scaffold plan.** Confirm IDs, variants, prerequisites, objectives, and evidence.
3. **Generate structure deterministically.** Use the bundled script after review.
4. **Make stubs meaningful.** Every primary variant must stand alone without instructor narration.
5. **Add official product pointers.** Do not fabricate projects or validation commands.
6. **Validate the tree.** Check plan-to-filesystem completeness and navigation.
7. **Hand off content authoring.** Make unfinished assets visible.

## Optional scaffold command

```bash
python skills/uipath-training-lab-scaffolder/scripts/scaffold_lab.py curriculum.json --output labs
```

Review the JSON plan and target directory before running it. The script creates directories and README stubs; it does not generate functional UiPath product projects.

## Example prompt

```text
Use uipath-training-lab-scaffolder.

Turn this approved eight-module RPA curriculum into a reviewed JSON plan and a
numbered lab skeleton with problem, solution, fixture, and explainer variants
only where requested. Give every README a real objective, prerequisites,
learner purpose, and completion evidence. Add official RPA ownership and sample
data guidance without fabricating projects, then validate the tree and list missing content.
```

## How to know it is done

- Every planned exercise has a unique ID, order, and purpose.
- The directory tree matches the approved plan.
- Every primary README is non-empty and understandable alone.
- Problem variants do not expose solutions.
- Project exercises name artifact type, owner, setup, data policy, and validation expectations.
- Ordering, required variants, duplicates, links, and plan completeness pass validation.
- Remaining content work is explicitly listed and assigned.

## Official UiPath handoffs

The official skill for each exercise’s artifact type owns real project creation and validation. The scaffolder creates educational structure and pointers only.

## Related resources

- [Bundled scaffolder](../../skills/uipath-training-lab-scaffolder/scripts/scaffold_lab.py)
- [Learning Workspace guide](uipath-learning-workspace.md)
- [Skill source](../../skills/uipath-training-lab-scaffolder/SKILL.md)
