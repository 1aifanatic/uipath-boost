import assert from "node:assert/strict";
import test from "node:test";
import { loadCatalog } from "../src/catalog.mjs";
import { SKILL_CONTRACTS, USER_INVOKED_SKILLS } from "../src/skill-contracts.mjs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = resolve(fileURLToPath(new URL("..", import.meta.url)));
const catalog = loadCatalog(packageRoot);

test("every skill has an exhaustive behavioral contract", () => {
  assert.equal(Object.keys(SKILL_CONTRACTS).length, 34);
  assert.deepEqual(
    Object.keys(SKILL_CONTRACTS).sort(),
    catalog.map((skill) => skill.name).sort()
  );

  for (const [name, contract] of Object.entries(SKILL_CONTRACTS)) {
    assert.match(contract.invocation, /^(user|model)$/, `${name}: invocation`);
    assert.ok(contract.shortDescription.length >= 25, `${name}: short description is too short`);
    assert.ok(contract.shortDescription.length <= 64, `${name}: short description is too long`);
    assert.ok(contract.defaultPrompt.includes(`$${name}`), `${name}: default prompt`);
    assert.ok(contract.triggerScenario.length >= 30, `${name}: trigger scenario`);
    assert.ok(contract.nonTriggerScenario.length >= 25, `${name}: non-trigger scenario`);
    assert.ok(contract.safetyScenario.length >= 30, `${name}: safety scenario`);
    assert.ok(contract.completionScenario.length >= 30, `${name}: completion scenario`);
  }
});

test("the approved invocation split is 15 user and 19 model skills", () => {
  assert.equal(USER_INVOKED_SKILLS.length, 15);
  assert.equal(
    Object.values(SKILL_CONTRACTS).filter((contract) => contract.invocation === "model").length,
    19
  );
});
