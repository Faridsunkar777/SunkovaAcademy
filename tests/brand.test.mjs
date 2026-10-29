import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root=process.cwd();
const read=(p)=>readFileSync(join(root,p),'utf8');
const home=read('src/app/page.tsx');
const components=['hero','ticker','manifesto','story','programs','visual-statement','proof','closing'];
const files=components.map(name=>read(`src/components/home/${name}.tsx`));
const motion=read('src/components/brand-motion.tsx');
const pack=JSON.parse(read('package.json'));

test('home is composed of eight independent sections in expected order',()=>{
  assert.ok(home.length<1300,'page.tsx should remain concise');
  for (const component of ['HomeHero','HomeTicker','HomeManifesto','HomeStory','HomePrograms','HomeVisualStatement','HomeProof','HomeClosing']){
    assert.ok(home.includes(`<${component} />`),component);
  }
});
test('original asset paths remain valid',()=>{
  const refs=new Set(files.flatMap(file=>[...file.matchAll(/src="(\/assets\/images\/[^\"]+)"/g)].map(match=>match[1])));
  assert.ok(refs.size>=5);
  for(const file of refs) assert.ok(existsSync(join(root,'public',file.slice(1))),file);
});
test('GSAP ScrollTrigger kept and native scroll preserved',()=>{
  assert.ok(pack.dependencies.gsap && pack.dependencies['@gsap/react']);
  assert.match(files[3],/ScrollTrigger\.create/);
  assert.match(motion,/scrollTrigger/);
  assert.match(motion,/\[data-home-hero\]/);
  assert.doesNotMatch(motion,/ScrollSmoother|scrollTo\(/);
});
test('homepage sections use Tailwind instead of legacy brand layout classes',()=>{
  for(const [i,file] of files.entries()){
    assert.match(file,/className=/,components[i]);
    assert.doesNotMatch(file, /className="brand-(?:hero|program|story|proof|ticker|closing|container)/,components[i]);
  }
  assert.match(read('src/app/tailwind.css'),/@custom-variant dark/);
  assert.match(read('src/app/tailwind.css'),/academy-marquee/);
});
test('reduced-motion preference is supported for motion and ticker',()=>{
  assert.match(motion,/prefers-reduced-motion: no-preference/);
  assert.match(files[1],/motion-reduce:animate-none/);
  assert.match(files[3],/motion-reduce:transition-none/);
});
