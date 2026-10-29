/**
 * Non-destructive audit of statically referenced src/components/*.tsx modules.
 * Run from repository root: node scripts/audit-root-components.mjs
 * This does NOT delete files. Manually inspect candidates for dynamic usage.
 */
import fs from "node:fs";
import path from "node:path";

const cwd = process.cwd();
const sourceRoot = path.join(cwd, "src");
const root = path.join(sourceRoot, "components");

if (!fs.existsSync(root)) {
  console.error("Could not find src/components. Run from the project root.");
  process.exit(1);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((item) => {
    if (item.name.startsWith(".")) return [];
    const name = path.join(dir, item.name);
    if (item.isDirectory()) return walk(name);
    return /\.(tsx?|jsx?|mjs|cjs)$/.test(item.name) ? [name] : [];
  });
}

const candidates = fs.readdirSync(root)
  .filter((name) => name.endsWith(".tsx"))
  .map((name) => path.join(root, name));
const incoming = new Map(candidates.map((candidate) => [candidate, new Set()]));

for (const file of walk(sourceRoot)) {
  const source = fs.readFileSync(file, "utf8");
  // Matches from '...', side-effect import '...', import('...'), require('...').
  const importRe = /\b(?:from\s*|import\s*\(\s*|require\s*\(\s*|import\s*)["']([^"']+)["']/g;
  for (const match of source.matchAll(importRe)) {
    const specifier = match[1];
    let absolute;
    if (specifier.startsWith("@/")) {
      absolute = path.resolve(sourceRoot, specifier.slice(2));
    } else if (specifier.startsWith(".")) {
      absolute = path.resolve(path.dirname(file), specifier);
    } else {
      continue;
    }
    const candidate = absolute.endsWith(".tsx") ? absolute : `${absolute}.tsx`;
    if (candidate !== file && incoming.has(candidate)) {
      incoming.get(candidate).add(path.relative(cwd, file));
    }
  }
}

console.log("\nROOT COMPONENT IMPORT AUDIT (non-destructive)\n");
for (const [file, importingFiles] of incoming) {
  const basename = path.basename(file);
  const sample = [...importingFiles];
  if (sample.length) {
    console.log(`REFERENCED  ${basename.padEnd(26)} by ${sample.slice(0, 3).join(", ")}${sample.length > 3 ? ` (+${sample.length - 3} more)` : ""}`);
  } else {
    console.log(`REVIEW      ${basename.padEnd(26)} no static import found`);
  }
}
console.log("\nREVIEW does not mean definitely unused. Check re-exports, dynamic resolution, tests, and other tooling before deleting.\n");
