"use client";

import { useEffect, type ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft, LogOut } from "lucide-react";
import { signOut } from "@/lib/progress";
import { useBrowserReady, useStoredLearner } from "@/lib/client-store";
import { Container } from "./shared";

/** The same browser-local demo sign-in guard used by the original LearnerShell. */
export function LearnerShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const learner = useStoredLearner();
  const ready = useBrowserReady();

  useEffect(() => {
    if (ready && !learner) {
      router.replace(`/learn/login?next=${encodeURIComponent(pathname)}`);
    }
  }, [router, pathname, ready, learner]);

  if (!ready || !learner) {
    return (
      <div role="status" className="grid min-h-[60svh] place-items-center bg-[#F5F5F7] px-5 pt-24 text-[14px] text-[#111115]/60 dark:bg-[#111115] dark:text-[#F5F5F7]/60">
        Preparing your learning space…
      </div>
    );
  }

  return (
    <div className="min-h-[65svh] bg-[#F5F5F7] pt-28 pb-14 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:pt-32 sm:pb-20">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-4 pb-5 sm:pb-7">
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <Link
              href="/learn"
              className="group inline-flex min-h-10 items-center gap-2 text-[12px] font-medium text-[#111115]! transition-colors duration-300 hover:text-[#8B7BDB]! dark:text-[#F5F5F7]! dark:hover:text-[#B6ABF1]!"
            >
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1 motion-reduce:transform-none" />
              My learning
            </Link>
            <span className="rounded-full border border-[#8B7BDB]/40 bg-[#EAE6FB] px-3 py-2 font-academy-mono text-[9px] tracking-[0.08em] text-[#55469E] dark:bg-[#24242A] dark:text-[#B6ABF1]">
              DEMO EXPERIENCE
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="hidden max-w-[180px] truncate text-[12px] text-[#111115]/55 dark:text-[#F5F5F7]/55 sm:inline">{learner.name}</span>
            <button
              type="button"
              onClick={() => { signOut(); router.push("/learn/login"); }}
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-[#111115]/15 bg-transparent px-4 text-[12px] font-medium text-[#111115]! transition-[color,border-color,background-color] duration-300 hover:border-[#8B7BDB] hover:bg-[#EAE6FB] hover:text-[#6554A8]! focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B7BDB] dark:border-white/20 dark:text-[#F5F5F7]! dark:hover:bg-[#24242A] dark:hover:text-[#B6ABF1]!"
            >
              <LogOut size={15} /> Sign out
            </button>
          </div>
        </div>
      </Container>
      <div className="min-w-0">{children}</div>
      <Container className="mt-16 sm:mt-20">
        <p className="max-w-[850px] border-t border-[#111115]/10 pt-6 text-[11px] leading-[1.8] text-[#111115]/50 dark:border-white/15 dark:text-[#F5F5F7]/50">
          Demo learning space — sign-in and progress are stored only in this browser. This is not a production authentication system.
        </p>
      </Container>
    </div>
  );
}
