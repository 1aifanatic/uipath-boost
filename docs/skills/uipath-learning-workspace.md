# UiPath Learning Workspace

[Back to all skill guides](README.md) · [View the skill source](../../skills/uipath-learning-workspace/SKILL.md)

## At a glance

| | |
|---|---|
| **Invocation** | User-invoked — start it explicitly. |
| **Purpose** | Build durable UiPath capability through a mission, baseline, current sources, short lessons, active practice, and spaced review. |
| **Use it when** | A learner or team needs a multi-session path tied to real professional work. |
| **Do not use it for** | Broad passive courses, memory-based current product facts, or fixed curricula that ignore demonstrated performance. |
| **Primary output** | Mission, curated resources, lessons, practice/feedback, learning records, and review plan. |
| **Maturity** | Pilot |

## What it does

Watching content can create familiarity without the ability to build, diagnose, review, or explain real UiPath work. This skill starts with a professional mission, measures the current ability, teaches one small capability, requires active retrieval or performance, and records what should be reviewed next.

## Before and after

### Before

A solution architect says, “I need to learn Maestro.” They receive a long list of videos and documentation pages. Progress is measured by content completed, not by the ability to design or explain an orchestration. Six weeks later, important concepts feel familiar but cannot be applied independently.

### After

`MISSION.md` defines a real demonstration such as “design and explain a Maestro journey with human review and recovery.” A baseline identifies existing strengths and misconceptions. Each short lesson cites current sources and ends with a lab, prediction, debugging exercise, or explanation. Learning records capture errors, corrections, confidence, and spaced review dates. The curriculum adapts to demonstrated performance.

## When to reach for it

Invoke this skill explicitly as `$uipath-learning-workspace`. UiPath Boost treats it as a deliberate workflow; Codex enforces that policy in `agents/openai.yaml`.

- Building capability in Studio, coded automation, agents, Maestro, IXP, testing, architecture, or platform work.
- Training a team over several sessions.
- Moving from one UiPath development model to another.
- Turning a real project into a guided learning path.
- Requiring evidence of capability rather than course completion.

### Use a neighboring skill instead

- A single factual answer or research note is sufficient.
- The learner has no real outcome or work situation in mind.
- Current product facts would be taught from memory.
- One lesson attempts to cover an entire product.
- A fixed curriculum would continue despite evidence that prerequisites are missing.

## Prerequisites

- Why the learner needs the capability.
- Target work situations and a real demonstration of success.
- Timeline, constraints, available environments, and teaching preference.
- A short baseline task, explanation, artifact review, or diagnostic exercise.
- Access to current official UiPath sources and suitable safe lab environments.

## What it produces

- `MISSION.md` with real outcome, situations, demonstration, constraints, and timeline.
- `RESOURCES.md` with trusted sources, freshness, and purpose.
- Short lessons and reference notes.
- Worked examples or visual models where useful.
- Retrieval questions, predictions, debugging tasks, modifications, comparisons, or labs.
- Immediate feedback and correction.
- Learning records with capability, errors, confidence, and next review.
- Periodic transfer projects, reviews, or explanations.

## How it works

1. **Define a professional mission.** Avoid broad topic goals.
2. **Measure the starting point.** Keep the baseline short and evidence-based.
3. **Curate current sources and reusable materials.** Every lesson should trace to high-trust material; reuse existing labs, examples, and assets when they already teach the mission well.
4. **Teach one small capability.** Author new material only for a real gap and end each session with a tangible demonstration.
5. **Require retrieval and feedback.** Learning must involve effortful performance.
6. **Record and space.** Preserve errors, corrections, confidence, and review dates.
7. **Advance through real work.** Adapt the next lesson to observed performance.

## Example prompt

```text
Use uipath-learning-workspace.

Create a six-week learning workspace for solution architects who must design and
explain Maestro journeys with RPA, agents, and human review. Define a real final
demonstration, run a short baseline, curate current official sources, and create
only the first focused lesson with active retrieval and a small lab. Record
feedback, misconceptions, confidence, and the next spaced-review date.
```

## Common questions

**Why does the agent not start this automatically?**

This workflow benefits from an intentional human start because it orchestrates a session, changes durable project structure, or makes a cross-work decision. Installation makes it available; it does not run it.

## It's working if

- The mission describes a real professional outcome.
- Baseline evidence determines the next lesson.
- Every current product claim has a trusted source.
- Existing suitable learning components are reused before new ones are created.
- Each lesson teaches one demonstrable capability.
- Practice requires retrieval or performance, not rereading.
- Feedback corrects observed errors.
- Progress and future review survive across sessions.
- Later lessons adapt to demonstrated ability and include real-work transfer.

## Where it fits

This is a **user-invoked orchestration skill** in UiPath Boost. Use [uipath-project-router](uipath-project-router.md) when you need to decide whether it is the right entry point or what should follow it.

## Official UiPath handoff

Official product skills and documentation supply current technical facts, commands, and artifact contracts. Learning Workspace organizes practice around them; it does not replace official validation or claim competence without evidence.

## Related resources

- [Training Lab Scaffolder guide](uipath-training-lab-scaffolder.md)
- [Research Note guide](uipath-research-note.md)
- [Skill source](../../skills/uipath-learning-workspace/SKILL.md)
