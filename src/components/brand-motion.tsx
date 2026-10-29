'use client';

import { useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Lightweight motion enhancement: no forced scrolling, no smooth-scroll hijacking. */
export function BrandMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo('[data-hero-line]', {yPercent: 26, opacity: 0}, {
        yPercent: 0, opacity: 1, duration: 1.05, ease: 'power3.out', stagger: 0.12,
        clearProps: 'transform,opacity', delay: 0.08,
      });
      gsap.fromTo('[data-hero-art]', {y: 24, opacity: 0, scale: 0.965}, {
        y: 0, opacity: 1, scale: 1, duration: 1.25, ease: 'power3.out', delay: 0.3,
        clearProps: 'transform,opacity',
      });
      gsap.to('[data-hero-art]', {
        yPercent: -7, ease: 'none',
        scrollTrigger: {trigger: '[data-home-hero]', start: 'top top', end: 'bottom top', scrub: 1.5},
      });
      gsap.utils.toArray<HTMLElement>('[data-motion-reveal]').forEach((element) => {
        gsap.fromTo(element, {opacity: 0, y: 32}, {
          opacity: 1, y: 0, duration: 0.85, ease: 'power2.out',
          scrollTrigger: {trigger: element, start: 'top 90%', once: true},
          clearProps: 'transform,opacity',
        });
      });
    });
    return () => mm.revert();
  }, {scope: root});
  return <div ref={root} className="overflow-x-clip">{children}</div>;
}
