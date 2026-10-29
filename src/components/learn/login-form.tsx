"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react";
import { readLearner, saveLearner } from "@/lib/progress";
import { LearnMarker } from "./shared";

/** Original next= redirect behavior; only learner routes are accepted. */
function destination() {
  const next = new URLSearchParams(window.location.search).get("next") || "/learn";
  return next.startsWith("/learn") && !next.startsWith("//") ? next : "/learn";
}

const fieldClass = `
  mt-2 min-h-[52px] w-full min-w-0 rounded-xl border border-[#111115]/15
  bg-white! px-4 py-3 text-[14px] text-[#111115]!
  outline-none transition-[border-color,box-shadow] duration-300
  placeholder:text-[#111115]/35
  focus:border-[#8B7BDB]! focus:ring-2 focus:ring-[#8B7BDB]/20
  dark:border-white/20 dark:bg-[#24242A]! dark:text-[#F5F5F7]!
  dark:placeholder:text-[#F5F5F7]/35
`;

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (readLearner()) router.replace(destination());
  }, [router]);

  function login(address: string) {
    const safeAddress = address.trim();
    if (!safeAddress) return;
    const name = safeAddress.split("@")[0].replace(/[._-]+/g, " ").replace(/\b\w/g, letter => letter.toUpperCase());
    saveLearner({ email: safeAddress, name: name || "Learner", signedInAt: new Date().toISOString() });
    router.push(destination());
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login(email);
  }

  return (
    <div className="mx-auto w-full max-w-[520px] min-w-0 py-3 lg:py-5">
      <LearnMarker left="SUNKOVA ACADEMY / LEARN" />
      <h2 className="mt-7 font-academy text-[clamp(2.8rem,7vw,4.3rem)] font-normal leading-[1.04] tracking-[-0.065em]">
        Welcome <span className="text-[#6554A8] dark:text-[#B6ABF1]">back.</span>
      </h2>
      <p className="mt-4 max-w-[340px] text-[15px] leading-[1.7] text-[#111115]/65 dark:text-[#F5F5F7]/65">
        Enter your email to explore the demo learning experience.
      </p>

      <form onSubmit={submit} className="mt-8 flex flex-col gap-5 sm:mt-10">
        <div>
          <label htmlFor="login-email" className="block text-[12px] font-semibold">Email address</label>
          <input id="login-email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" value={email} onChange={event => setEmail(event.target.value)} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="login-password" className="block text-[12px] font-semibold">
            Password <span className="font-normal text-[#111115]/50 dark:text-[#F5F5F7]/50">(optional in demo)</span>
          </label>
          <input id="login-password" name="demo-password" type="password" autoComplete="off" placeholder="Not checked in demo" value={password} onChange={event => setPassword(event.target.value)} className={fieldClass} />
        </div>
        <button type="submit" className="group flex min-h-[54px] w-full items-center justify-between gap-3 rounded-full bg-[#111115]! px-5 text-[13px] font-semibold text-[#F5F5F7]! transition-[scale,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B7BDB] motion-reduce:transition-none dark:bg-[#F5F5F7]! dark:text-[#111115]!">
          <span className="text-inherit">Continue</span>
          <ArrowRight size={19} strokeWidth={1.7} className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none" />
        </button>
      </form>

      <div className="my-6 flex items-center gap-4 font-academy-mono text-[10px] uppercase tracking-[0.12em] text-[#111115]/45 dark:text-[#F5F5F7]/45">
        <span className="h-px flex-1 bg-[#111115]/10 dark:bg-white/15" />OR<span className="h-px flex-1 bg-[#111115]/10 dark:bg-white/15" />
      </div>

      <button
        type="button"
        onClick={() => login("demo@sunkova.com")}
        className="group flex min-h-[54px] w-full items-center justify-between gap-3 rounded-full border border-[#111115]/20 bg-transparent! px-5 text-[13px] font-semibold text-[#111115]! transition-[scale,border-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.015] hover:border-[#8B7BDB] hover:text-[#6554A8]! focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B7BDB] motion-reduce:transition-none dark:border-white/25 dark:text-[#F5F5F7]! dark:hover:text-[#B6ABF1]!"
      >
        <BookOpen size={18} strokeWidth={1.7} className="shrink-0" />
        <span className="flex-1 text-left">Explore as demo learner</span>
        <ArrowUpRight size={17} strokeWidth={1.7} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" />
      </button>

      <p className="mt-6 rounded-[16px] bg-[#EAE6FB] p-4 text-[12px] leading-[1.75] text-[#111115]/75 dark:bg-[#24242A] dark:text-[#F5F5F7]/70">
        <strong className="font-semibold">Demo only.</strong> Any email works; passwords are not checked. Do not enter a real password. Learning history is saved in this browser only.
      </p>
      <Link href="/courses" className="group mt-6 inline-flex min-h-10 items-center gap-2 text-[12px] text-[#111115]/65! transition-[color,scale] duration-500 hover:scale-[1.03] hover:text-[#8B7BDB]! dark:text-[#F5F5F7]/65! dark:hover:text-[#8B7BDB]!">
        Explore our courses <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}
