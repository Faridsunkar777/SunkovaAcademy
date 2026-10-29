import type { ReactNode } from 'react';

/** Home-specific presentation primitives. All layout is Tailwind v4. */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-[calc(100%-40px)] max-w-[1376px] md:w-[calc(100%-72px)] xl:w-[calc(100%-112px)] ${className}`}>{children}</div>;
}

export function Eyebrow({ children, light = false, className = '' }: { children: ReactNode; light?: boolean; className?: string }) {
  return <span className={`font-academy-mono text-[10px] font-normal leading-[1.6] tracking-[0.14em] uppercase ${light ? 'text-[#bcbac5] dark:text-[#c7c3d0]' : 'text-[#6e6a7b] dark:text-[#b7b3c3]'} ${className}`}>{children}</span>;
}

export function SectionIndex({ left, right }: { left: string; right: string }) {
  return <div className="flex justify-between gap-5 border-t border-academy-text/15 pt-[18px] font-academy-mono text-[10px] uppercase tracking-[0.14em] text-academy-muted">
    <span>{left}</span><span className="text-right opacity-65">{right}</span>
  </div>;
}

export const sectionTitle = 'font-academy text-[clamp(3.2rem,7vw,6.75rem)] leading-[1.02] font-[450] tracking-[-0.075em]';
