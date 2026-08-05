import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const powershellGuard = join(
  root,
  "skills",
  "uipath-source-control-guardrails",
  "scripts",
  "block_dangerous_commands.ps1"
);
const bashGuard = join(
  root,
  "skills",
  "uipath-source-control-guardrails",
  "scripts",
  "block_dangerous_commands.sh"
);
const powershellWizard = join(
  root,
  "skills",
  "uipath-runbook-wizard",
  "assets",
  "wizard-template.ps1"
);

function availableCommand(candidates, args) {
  return candidates.find((command) => spawnSync(command, args, { encoding: "utf8" }).status === 0);
}

const powershell = availableCommand(["pwsh", "powershell"], [
  "-NoProfile",
  "-Command",
  "$PSVersionTable.PSVersion.ToString()"
]);
const bash = availableCommand(["bash"], ["--version"]);

function powershellArguments(...args) {
  return ["-NoProfile", ...(process.platform === "win32" ? ["-ExecutionPolicy", "Bypass"] : []), ...args];
}

function runPowerShellGuard(command, extraEnvironment = {}) {
  return spawnSync(powershell, powershellArguments("-File", powershellGuard), {
    encoding: "utf8",
    env: { ...process.env, ...extraEnvironment },
    input: JSON.stringify({ tool_input: { command } })
  });
}

test("PowerShell helper assets parse", { skip: !powershell }, () => {
  const parser = [
    "$tokens = $null",
    "$errors = $null",
    "[System.Management.Automation.Language.Parser]::ParseFile($env:UIPATH_BOOST_ASSET_TO_PARSE, [ref]$tokens, [ref]$errors) | Out-Null",
    "if ($errors.Count -gt 0) { $errors | ForEach-Object { [Console]::Error.WriteLine($_.Message) }; exit 1 }"
  ].join("; ");

  for (const asset of [powershellGuard, powershellWizard]) {
    const result = spawnSync(powershell, powershellArguments("-Command", parser), {
      encoding: "utf8",
      env: { ...process.env, UIPATH_BOOST_ASSET_TO_PARSE: asset }
    });
    assert.equal(result.status, 0, `${asset} did not parse:\n${result.stderr}`);
  }
});

test("PowerShell guard blocks dangerous commands and permits inspection", { skip: !powershell }, () => {
  for (const command of [
    "git push origin main",
    "git reset --hard HEAD",
    "git clean -fd",
    "git branch -D obsolete",
    "git restore ."
  ]) {
    const result = runPowerShellGuard(command);
    assert.equal(result.status, 2, `${command} should be blocked`);
    assert.match(result.stderr, /BLOCKED:/);
  }

  const release = runPowerShellGuard("uip solution deploy", { UIPATH_GUARD_RELEASE_COMMANDS: "1" });
  assert.equal(release.status, 2);
  assert.match(release.stderr, /BLOCKED:/);

  const allowed = runPowerShellGuard("git status --short");
  assert.equal(allowed.status, 0);
  assert.match(allowed.stdout, /ALLOWED/);
});

test("Bash guard parses", { skip: !bash }, () => {
  assert.equal(existsSync(bashGuard), true);
  const result = spawnSync(bash, ["-n", bashGuard], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr);
});
