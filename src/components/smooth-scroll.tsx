
"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // Lower values produce a heavier, softer response
      lerp: 0.075,

      // Slightly reduce wheel distance per movement
      wheelMultiplier: 0.85,

      // Smooth mouse-wheel and trackpad scrolling
      smoothWheel: true,

      // Preserve native touch scrolling on phones
      syncTouch: false,

      // Smooth same-page anchor navigation
      anchors: true,

      // Stop leftover momentum during navigation
      stopInertiaOnNavigate: true,

      // Respect accessibility preferences
      respectReducedMotion: true,

      // GSAP will control the animation frame
      autoRaf: false,
    });

    // Keep existing Story and motion animations in sync
    lenis.on("scroll", ScrollTrigger.update);

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
}
