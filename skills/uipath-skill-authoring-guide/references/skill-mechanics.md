# UiPath Skill Mechanics

Use this reference while designing or reviewing a UiPath-focused skill. Keep
the `SKILL.md` workflow as the control plane and load only the section needed
for the current design decision.

## Invocation

| Mode | Choose it when | Metadata |
|---|---|---|
| User-invoked | A human must deliberately start an orchestration, live session, or repository-changing setup. | Use an explicit-use description. For Codex, set `policy.allow_implicit_invocation: false` in `agents/openai.yaml`. Validate other agent-specific fields before adding them to a shared catalog. |
| Model-invoked | The agent should recognize the task automatically or another skill must compose with it. | Omit the Codex policy or allow implicit invocation. Put the distinct trigger branches in the description. |

A user-invoked skill may route to a model-invoked primitive. It cannot rely on
another user-invoked skill firing automatically. Use a user-invoked router when
the human would otherwise have to remember too many entry points.

Keep shared `SKILL.md` frontmatter within the portable Agent Skills contract.
Do not copy invocation fields from another harness unless every target package
validator accepts them.

## Context and cognitive load

- **Context load** is always-loaded text such as model-facing descriptions and
  repository instructions. Every word must improve invocation or execution.
- **Cognitive load** is what a human must remember. Spend it on deliberate
  choices; reduce it with routers and clear documentation.
- A **context pointer** names a reference and states the condition for reading
  it. A link without a read condition is weak progressive disclosure.

Keep universal execution steps in `SKILL.md`. Move branch-specific facts into
one-level-deep references. Keep each concept's definition, rules, and caveats
together.

## Leading words and completion

Choose a compact established term that anchors behavior, such as *frontier*,
*seam*, *red*, *tracer bullet*, *primary source*, or *rollback*. Repeat the
term where it carries the same meaning; do not repeat its definition.

End each important step with a checkable and exhaustive completion criterion.
The criterion must distinguish done from partial work and account for every
in-scope item, not merely require a document to exist.

## Single source of truth and cache

Store each meaning once. Configuration, package scripts, project structure,
and command help already describe the environment. A document that copies them
is a cache and will drift.

Cache only information that is expensive or impossible to rediscover:

- The reason behind a decision
- An unwritten convention
- Ownership or approval boundaries
- A known product or project trap
- Evidence context and freshness

Keep current UiPath product truth in official skills. A custom skill should
name the official owner and define only the complementary engineering job.

## Evaluation contract

Give every skill at least four scenarios:

1. A prompt that should trigger it
2. A neighboring prompt that should not trigger it
3. A safety or authority boundary it must preserve
4. An observable condition proving completion

Add deterministic tests for scripts, templates, metadata, links, and packaging.
Forward-test complex reasoning on raw artifacts and realistic prompts. The test
agent should not see the suspected defect, intended fix, or expected answer.
