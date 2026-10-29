import { BrandMotion } from '@/components/brand-motion';
import { HomeHero } from '@/components/home/hero';
import { HomeTicker } from '@/components/home/ticker';
import { HomeManifesto } from '@/components/home/manifesto';
import { HomeStory } from '@/components/home/story';
import { HomePrograms } from '@/components/home/programs';
import { HomeVisualStatement } from '@/components/home/visual-statement';
import { HomeProof } from '@/components/home/proof';
import { HomeClosing } from '@/components/home/closing';

export default function Home() {
  return (
    <BrandMotion>
      <HomeHero />
      <HomeTicker />
      <HomeManifesto />
      <HomeStory />
      <HomePrograms />
      <HomeVisualStatement />
      <HomeProof />
      <HomeClosing />
    </BrandMotion>
  );
}
