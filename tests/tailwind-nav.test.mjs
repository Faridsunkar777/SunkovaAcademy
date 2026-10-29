import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = file => readFileSync(file, 'utf8');

test('Tailwind v4 is wired to Next.js PostCSS without global Preflight reset', () => {
  const pkg = JSON.parse(read('package.json'));
  assert.match(pkg.devDependencies.tailwindcss, /^\^4\./);
  assert.ok(pkg.devDependencies['@tailwindcss/postcss']);
  assert.match(read('postcss.config.mjs'), /@tailwindcss\/postcss/);
  const css = read('src/app/tailwind.css');
  assert.match(css, /tailwindcss\/utilities\.css/);
  assert.doesNotMatch(css, /@import\s+["']tailwindcss(?:["']|\/preflight\.css)/);
  assert.match(read('src/app/layout.tsx'), /\.\/tailwind\.css/);
});

test('navigation renders exactly one genuine brand image without hard-coded 50x10 sizing', () => {
  const nav = read('src/components/nav.tsx');
  assert.equal((nav.match(/<Image\b/g) || []).length, 1);
  assert.match(nav, /src="\/assets\/brand\/black-logo\.png"/);
  assert.match(nav, /\bfill\b[\s\S]*?sizes=/);
  assert.match(nav, /object-contain object-left/);
  assert.doesNotMatch(nav, /width=\{50\}|height=\{10\}|wordmark|brand-logo-dark|brand-logo-light/);
  assert.match(nav, /className=\{`fixed/);
  assert.match(nav, /const dark = theme === "dark"/);
});
