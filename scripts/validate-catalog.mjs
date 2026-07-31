import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { validateCatalog } from "../src/validate.mjs";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const result = validateCatalog(packageRoot);

if (result.errors.length) {
  for (const error of result.errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}

console.log(`Validated ${result.catalog.length} skills successfully.`);
