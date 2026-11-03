import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
const read = (path) => readFileSync(path, 'utf8');
const page = read('src/app/residency/page.tsx');
const program = read('src/lib/residency.ts');
const nav = read('src/components/nav.tsx');
const contact = read('src/components/contact/contact-form.tsx');
const hero = read('src/components/home/hero.tsx');

test('residency route and structured 26-week working curriculum exist', () => {
  assert.ok(existsSync('src/app/residency/page.tsx'));
  assert.equal((program.match(/number: "0[1-6]"/g) ?? []).length, 6);
  for (const range of ['01–04', '05–08', '09–12', '13–16', '17–22', '23–26']) assert.ok(program.includes(range), range);
  assert.match(page, /residencyStages\.map/);
});
test('mandatory design thinking precedes implementation with ten FigJam sections', () => {
  for (const phrase of ['Challenge & context','Interview approach','User evidence','Synthesis','Root problem','Alternatives','Decision factors','Prototype & feedback','MVP hypothesis','Review outcome']) assert.ok(program.includes(phrase),phrase);
  assert.match(page, /Substantive implementation starts only after that review/);
  assert.match(page, /FigJam/);
});
test('existing marketing shell links to residency without replacing course catalogue', () => {
  assert.match(nav, /href: "\/residency", label: "Residency"/);
  assert.match(hero.slice(hero.indexOf('export function HomeHero()')), /href="\/residency"/);
  assert.match(hero.slice(hero.indexOf('export function HomeHero()')), /href="\/courses"/);
  assert.match(read('src/components/footer.tsx'), /href="\/residency"/);
});
test('contact enquiry is explicitly an email draft and the residency is not presented as an active application', () => {
  assert.match(contact, /Six-month residency enquiry/);
  assert.match(page, /not confirmed public commitments/);
  assert.match(page, /there is no online application/);
});

test('residency communicates the offer quickly without exposing long research or FAQ lists', () => {
  assert.match(page, /Six months of guided team projects/);
  assert.match(page, /FOR LEARNERS/);
  assert.match(page, /FOR PARTNERS &amp; SUPPORTERS/);
  assert.match(page, /View all 10 FigJam board requirements/);
  assert.match(page, /Practical program notes/);
  assert.equal((page.match(/<details\b/g) ?? []).length, 2);
  assert.equal((page.match(/residencyStages\.map/g) ?? []).length, 1);
  assert.ok(!page.includes('Not another tutorial.'), 'avoid redundant standalone section');
});
