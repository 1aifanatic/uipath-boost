import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const readJson = (path) => JSON.parse(readFileSync(join(root, path), "utf8"));

test("package and plugin release metadata stay aligned", () => {
  const packageJson = readJson("package.json");
  const packageLock = readJson("package-lock.json");
  const codexPlugin = readJson(".codex-plugin/plugin.json");
  const claudePlugin = readJson(".claude-plugin/plugin.json");

  assert.equal(packageJson.name, "uipath-boost");
  assert.equal(packageJson.version, "0.2.0");
  assert.equal(packageLock.version, packageJson.version);
  assert.equal(packageLock.packages[""].version, packageJson.version);
  assert.equal(codexPlugin.version, packageJson.version);
  assert.equal(claudePlugin.version, packageJson.version);
  assert.equal(codexPlugin.skills, "./skills/");
  assert.equal(claudePlugin.skills, "./skills/");

  for (const packagedPath of [
    ".codex-plugin/",
    ".claude-plugin/",
    "ACKNOWLEDGMENTS.md",
    "CHANGELOG.md"
  ]) {
    assert.ok(packageJson.files.includes(packagedPath), `${packagedPath} must ship in npm package`);
  }

  const changelog = readFileSync(join(root, "CHANGELOG.md"), "utf8");
  assert.match(changelog, new RegExp(`^# Changelog[\\s\\S]*## ${packageJson.version}\\b`));
});
