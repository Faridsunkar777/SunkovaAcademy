import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export type ModuleNavItem = { href: string; eyebrow: string; title: string };

export function ModuleNavigation({ previous, next }: { previous: ModuleNavItem; next?: ModuleNavItem | null }) {
  return (
    <nav aria-label="Adjacent modules" className="mt-12 grid gap-3 border-t border-[#111115]/10 pt-6 dark:border-white/15 sm:mt-16 sm:grid-cols-2">
      <Link href={previous.href} className="group flex min-w-0 items-center gap-3 rounded-[18px] border border-[#111115]/10 bg-white p-5 transition-[border-color,background-color] duration-300 hover:border-[#8B7BDB]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B7BDB] dark:border-white/15 dark:bg-[#24242A] dark:hover:border-[#8B7BDB]/60"><ArrowLeft size={18} className="shrink-0 transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none" /><span className="min-w-0"><span className="block font-academy-mono text-[9px] tracking-[0.12em] text-[#111115]/50 dark:text-[#F5F5F7]/50">{previous.eyebrow}</span><strong className="mt-1 block text-[14px] font-semibold leading-[1.55]">{previous.title}</strong></span></Link>
      {next && <Link href={next.href} className="group flex min-w-0 items-center justify-between gap-3 rounded-[18px] border border-[#111115]/10 bg-white p-5 transition-[border-color,background-color] duration-300 hover:border-[#8B7BDB]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B7BDB] dark:border-white/15 dark:bg-[#24242A] dark:hover:border-[#8B7BDB]/60"><span className="min-w-0"><span className="block font-academy-mono text-[9px] tracking-[0.12em] text-[#111115]/50 dark:text-[#F5F5F7]/50">{next.eyebrow}</span><strong className="mt-1 block text-[14px] font-semibold leading-[1.55]">{next.title}</strong></span><ArrowRight size={18} className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" /></Link>}
    </nav>
  );
}
