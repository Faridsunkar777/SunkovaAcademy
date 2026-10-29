
import type { Metadata } from "next";

import { AboutMotion } from "@/components/about/about-motion";
import { AboutHero } from "@/components/about/about-hero";
import { AboutStory } from "@/components/about/about-story";
import { AboutPrinciples } from "@/components/about/about-principles";
import { AboutClosing } from "@/components/about/about-closing";

export const metadata: Metadata = {
  title: "About the Academy",
  description:
    "Practical, challenge-based education designed by Sunkova, a design and technology studio in Nairobi.",
};

export default function AboutPage() {
  return (
    <AboutMotion>
      <AboutHero />
      <AboutStory />
      <AboutPrinciples />
      <AboutClosing />
    </AboutMotion>
  );
}
