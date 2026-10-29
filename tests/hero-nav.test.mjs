import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read=(path)=>readFileSync(path,'utf8');
const nav=read('src/components/nav.tsx');
const hero=read('src/components/home/hero.tsx');
const ticker=read('src/components/home/ticker.tsx');
const css=read('src/app/tailwind.css');

test('navbar uses the real Sunkova logo and both themes',()=>{
  assert.match(nav,/src="\/assets\/brand\/black-logo\.png"/);
  assert.match(nav,/const dark = theme === "dark"/);
  assert.doesNotMatch(nav,/wordmark-text|sunkova-mark\.svg/);
});
test('hero keeps headline and founding information',()=>{
  for(const value of ['Learn to','ship in the','AI era.','ACADEMY / FOUNDING','05 / 05','CHALLENGE-BASED','BUILT IN NAIROBI'])assert.ok(hero.includes(value),value);
  assert.doesNotMatch(hero,/<em[^>]*data-hero-line/);
});
test('hero has theme variants and preserves correct GSAP anchors',()=>{
  assert.match(hero,/dark:bg-\[#07090c\]/);
  assert.match(hero,/data-home-hero/);
  assert.match(hero,/data-hero-art/);
  assert.match(css,/@custom-variant dark/);
});
test('ticker duplicates content, animates continuously and respects reduced motion',()=>{
  assert.match(ticker,/<TickerGroup \/><TickerGroup duplicate \/>/);
  assert.match(ticker,/animate-academy-marquee/);
  assert.match(ticker,/motion-reduce:animate-none/);
  assert.match(css,/translateX\(-50%\)/);
});
