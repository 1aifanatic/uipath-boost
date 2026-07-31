import assert from "node:assert/strict";
import test from "node:test";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { STARTER_SKILLS } from "../src/catalog.mjs";
import { buildSkillsCliArgs, parseCliArgs } from "../src/cli-args.mjs";
import { validateCatalog } from "../src/validate.mjs";

test("defaults to an interactive install", () => {
  const parsed = parseCliArgs([]);
  assert.equal(parsed.command, "install");
  assert.deepEqual(buildSkillsCliArgs(parsed.options, "C:/catalog"), ["add", "C:/catalog"]);
});

test("maps the starter set to repeated skill selectors", () => {
  const parsed = parseCliArgs(["install", "--starter", "--agent", "codex", "--global", "--yes"]);
  const args = buildSkillsCliArgs(parsed.options, "C:/catalog");
  for (const skill of STARTER_SKILLS) {
    const position = args.indexOf(skill);
    assert.ok(position > 0, `${skill} was not delegated`);
    assert.equal(args[position - 1], "--skill");
  }
  assert.ok(args.includes("codex"));
  assert.ok(args.includes("--global"));
  assert.ok(args.includes("--yes"));
});

test("maps all skills to the wildcard selector", () => {
  const parsed = parseCliArgs(["--all", "-a", "codex"]);
  assert.deepEqual(buildSkillsCliArgs(parsed.options, "catalog"), [
    "add",
    "catalog",
    "--skill",
    "*",
    "--agent",
    "codex"
  ]);
});

test("rejects conflicting selection modes", () => {
  assert.throws(
    () => parseCliArgs(["--all", "--starter"]),
    /Choose only one/
  );
});

test("the bundled catalog is structurally valid", () => {
  const packageRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
  const result = validateCatalog(packageRoot);
  assert.deepEqual(result.errors, []);
  assert.equal(result.catalog.length, 34);
});
