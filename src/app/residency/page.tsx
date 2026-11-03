import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import { CourseMarker, CoursePill } from "@/components/courses/shared";
import { Container } from "@/components/home/shared";
import {
  discoveryBoard,
  residencyOutcomes,
  residencyStages,
} from "@/lib/residency";

export const metadata: Metadata = {
  title: "Six-Month Software Engineering Residency — Working Concept",
  description:
    "A proposed 26-week, mentor-guided engineering residency: validate real problems, work in teams, and ship evidence of your skills.",
};

const enquiry = "/contact?program=Six-month%20engineering%20residency";

const discoverySteps = [
  ["01", "Frame the challenge", "Who has the problem—and why does it matter?"],
  ["02", "Talk to users", "Interview people. Replace assumptions with evidence."],
  ["03", "Explore solutions", "Map insights and alternatives in FigJam."],
  ["04", "Test the idea", "Prototype, gather feedback and decide what comes next."],
] as const;

export default function ResidencyPage() {
  return (
    <>
      <section
        aria-labelledby="residency-title"
        className="bg-[#F5F5F7] pt-32 pb-16 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:pt-40 sm:pb-20 lg:pt-44"
      >
        <Container>
          <CourseMarker left="THE RESIDENCY / WORKING CONCEPT" right="26 WEEKS · PROJECT-LED" />
          <div className="mt-12 grid items-end gap-9 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
            <div>
              <h1
                id="residency-title"
                className="font-academy text-[clamp(3.5rem,10vw,7.25rem)] font-normal leading-[0.99] tracking-[-0.075em]"
              >
                You learned<br />to code. <span className="text-[#8B7BDB]">Now<br className="hidden sm:block" /> learn to ship.</span>
              </h1>
              <p className="mt-7 max-w-[620px] text-[16px] leading-[1.75] text-[#111115]/70 dark:text-[#F5F5F7]/70 sm:text-[18px]">
                Six months of guided team projects—from finding a real problem to shipping working software.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <CoursePill href="#journey">See the 26-week journey</CoursePill>
                <Link
                  href={enquiry}
                  className="inline-flex min-h-12 items-center gap-3 rounded-full border border-[#111115]/25 px-5 text-[12px] font-semibold transition-colors hover:border-[#8B7BDB] hover:bg-[#EAE6FB]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B7BDB] dark:border-white/25 dark:hover:bg-white/10"
                >
                  Enquire <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
            <aside
              className="rounded-[22px] border border-[#111115]/10 bg-[#EAE6FB]/65 p-6 dark:border-white/15 dark:bg-[#24242A] sm:p-8"
              aria-label="Residency at a glance"
            >
              <p className="font-academy-mono text-[10px] uppercase tracking-[0.14em] text-[#6554A8] dark:text-[#B6ABF1]">AT A GLANCE</p>
              <p className="mt-5 font-academy text-[clamp(1.9rem,3.2vw,2.8rem)] leading-[1.12] tracking-[-0.055em]">
                Research. Build. Ship.
              </p>
              <dl className="mt-6 space-y-3 border-t border-[#111115]/15 pt-5 text-[12px] leading-[1.5] dark:border-white/15">
                <div><dt className="font-academy-mono text-[10px] tracking-[0.08em] text-[#6554A8] dark:text-[#B6ABF1]">FOR</dt><dd className="mt-1">Bootcamp graduates &amp; self-taught developers</dd></div>
                <div><dt className="font-academy-mono text-[10px] tracking-[0.08em] text-[#6554A8] dark:text-[#B6ABF1]">HOW</dt><dd className="mt-1">Mentored, team-based delivery</dd></div>
                <div><dt className="font-academy-mono text-[10px] tracking-[0.08em] text-[#6554A8] dark:text-[#B6ABF1]">PROOF</dt><dd className="mt-1">Reviewed, tested and deployed work</dd></div>
              </dl>
            </aside>
          </div>
          <a
            href="#why"
            className="mt-12 inline-flex items-center gap-2 font-academy-mono text-[10px] tracking-[0.12em] transition-colors hover:text-[#8B7BDB]"
          >
            WHY IT EXISTS <ArrowDown size={15} />
          </a>
        </Container>
      </section>

      <section
        id="why"
        aria-labelledby="why-title"
        className="bg-[#F5F5F7] py-14 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:py-20"
      >
        <Container>
          <CourseMarker left="01 / THE GAP" right="FROM LEARNING TO CONTRIBUTING" />
          <div className="mt-9 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <h2 id="why-title" className="font-academy text-[clamp(2.9rem,6vw,5.4rem)] leading-[1.03] tracking-[-0.07em]">
                Beyond the<br /><span className="text-[#8B7BDB]">portfolio.</span>
              </h2>
              <p className="mt-5 max-w-[410px] text-[15px] leading-[1.7] text-[#111115]/70 dark:text-white/70">
                Knowing how to code is a start. Teams also need research, collaboration, testing and releases.
              </p>
            </div>
            <div className="grid content-center gap-5 sm:grid-cols-2">
              <div className="border-t border-[#111115]/15 pt-4 dark:border-white/15">
                <p className="font-academy-mono text-[10px] tracking-[0.12em] text-[#6554A8] dark:text-[#B6ABF1]">FOR LEARNERS</p>
                <p className="mt-3 text-[15px] leading-[1.7]">Practise contributing to a team, not just finishing tutorials.</p>
              </div>
              <div className="border-t border-[#111115]/15 pt-4 dark:border-white/15">
                <p className="font-academy-mono text-[10px] tracking-[0.12em] text-[#6554A8] dark:text-[#B6ABF1]">FOR PARTNERS &amp; SUPPORTERS</p>
                <p className="mt-3 text-[15px] leading-[1.7]">See the decisions, reviewed code and results behind the work.</p>
              </div>
              <p className="text-[12px] leading-[1.6] text-[#111115]/55 dark:text-white/55 sm:col-span-2">
                The residency complements our shorter specialist courses.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="discovery"
        aria-labelledby="discovery-title"
        className="bg-[#EAE6FB] py-16 text-[#111115] dark:bg-[#24242A] dark:text-[#F5F5F7] sm:py-20"
      >
        <Container>
          <CourseMarker left="02 / DESIGN THINKING" right="MANDATORY BEFORE BUILDING" />
          <div className="mt-9 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <h2 id="discovery-title" className="font-academy text-[clamp(3rem,6.5vw,5.8rem)] leading-[1.02] tracking-[-0.075em]">
                Why should this<br /><span className="text-[#6554A8] dark:text-[#B6ABF1]">product exist?</span>
              </h2>
              <p className="mt-6 max-w-[590px] text-[16px] leading-[1.75] text-[#111115]/70 dark:text-white/70">
                Start with a challenge. Interview users. Use FigJam to find the problem worth solving.
              </p>
            </div>
            <div className="rounded-[22px] border border-[#111115]/15 bg-[#F5F5F7]/70 p-6 dark:border-white/15 dark:bg-[#111115]/50 sm:p-8">
              <p className="font-academy-mono text-[10px] uppercase tracking-[0.14em] text-[#6554A8] dark:text-[#B6ABF1]">MENTOR REVIEW GATE</p>
              <p className="mt-4 font-academy text-[clamp(2rem,3vw,2.65rem)] leading-[1.12] tracking-[-0.055em]">Proceed. Reframe. Or pause.</p>
              <p className="mt-4 text-[14px] leading-[1.7] text-[#111115]/70 dark:text-white/70">
                Mentors review user evidence, the problem and prototype feedback. Substantive implementation starts only after that review.
              </p>
            </div>
          </div>
          <div className="mt-10 border-t border-[#111115]/15 pt-6 dark:border-white/15">
            <h3 className="font-academy text-[clamp(1.8rem,3vw,2.7rem)] tracking-[-0.055em]">The FigJam journey</h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {discoverySteps.map(([number, label, description]) => (
                <div key={number} className="border-t border-[#111115]/15 pt-4 dark:border-white/15">
                  <span className="font-academy-mono text-[11px] text-[#6554A8] dark:text-[#B6ABF1]">{number}</span>
                  <h4 className="mt-3 text-[15px] font-semibold">{label}</h4>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[#111115]/65 dark:text-white/65">{description}</p>
                </div>
              ))}
            </div>
            <details className="group mt-7 border-t border-[#111115]/15 pt-5 dark:border-white/15">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-[13px] font-semibold text-[#6554A8] marker:hidden hover:underline dark:text-[#B6ABF1] [&::-webkit-details-marker]:hidden">
                View all 10 FigJam board requirements
                <ArrowDown className="transition-transform group-open:rotate-180 motion-reduce:transition-none" size={15} aria-hidden="true" />
              </summary>
              <div className="mt-6 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                {discoveryBoard.map(([number, label, description]) => (
                  <div key={number} className="flex gap-3 border-t border-[#111115]/15 pt-3 dark:border-white/15">
                    <span className="font-academy-mono text-[10px] text-[#6554A8] dark:text-[#B6ABF1]">{number}</span>
                    <div>
                      <h4 className="text-[14px] font-semibold">{label}</h4>
                      <p className="mt-1 text-[12px] leading-[1.65] text-[#111115]/65 dark:text-white/65">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </Container>
      </section>

      <section
        id="journey"
        aria-labelledby="journey-title"
        className="bg-[#F5F5F7] py-16 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:py-20"
      >
        <Container>
          <CourseMarker left="03 / SIX-MONTH JOURNEY" right="26 WEEKS · SIX STAGES" />
          <div className="mt-9 flex flex-wrap items-end justify-between gap-4">
            <h2 id="journey-title" className="font-academy text-[clamp(3rem,6.5vw,6rem)] leading-[1.03] tracking-[-0.07em]">
              From problem<br /><span className="text-[#8B7BDB]">to product.</span>
            </h2>
            <p className="max-w-[300px] text-[14px] leading-[1.65] text-[#111115]/65 dark:text-white/65">
              Six practical stages. Each ends with work a mentor can review.
            </p>
          </div>
          <div className="mt-9 divide-y divide-[#111115]/15 border-y border-[#111115]/15 dark:divide-white/15 dark:border-white/15">
            {residencyStages.map((stage) => (
              <article key={stage.number} className="grid gap-3 py-5 sm:grid-cols-[110px_1fr] sm:gap-6 lg:grid-cols-[110px_1.1fr_0.9fr] lg:items-center lg:py-6">
                <div className="font-academy-mono text-[11px] tracking-[0.1em] text-[#6554A8] dark:text-[#B6ABF1]">
                  {stage.number}
                  <span className="mt-2 block text-[10px] text-[#111115]/55 dark:text-white/55">{stage.when}</span>
                </div>
                <div>
                  <h3 className="font-academy text-[clamp(1.7rem,2.7vw,2.45rem)] leading-[1.1] tracking-[-0.055em]">{stage.title}</h3>
                  <p className="mt-2 text-[13px] leading-[1.65] text-[#111115]/65 dark:text-white/65">{stage.focus}</p>
                </div>
                <p className="text-[13px] leading-[1.65] text-[#111115]/75 dark:text-white/75 sm:col-start-2 lg:col-start-auto lg:pl-5">
                  <span className="font-academy-mono text-[10px] tracking-[0.08em] text-[#6554A8] dark:text-[#B6ABF1]">OUTPUT</span>
                  <span className="mt-1 block">{stage.evidence}</span>
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="outcomes-title"
        className="bg-[#F5F5F7] py-16 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:py-20"
      >
        <Container>
          <CourseMarker left="04 / LEARNING OUTCOMES" right="REAL WORK · REAL EVIDENCE" />
          <div className="mt-9 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <h2 id="outcomes-title" className="font-academy text-[clamp(3rem,6vw,5.5rem)] leading-[1.03] tracking-[-0.07em]">
                Work that<br /><span className="text-[#8B7BDB]">speaks.</span>
              </h2>
              <p className="mt-5 max-w-[440px] text-[15px] leading-[1.7] text-[#111115]/65 dark:text-white/65">
                Graduate with a record of discovery, teamwork and delivery—not only course completion.
              </p>
            </div>
            <ul className="border-t border-[#111115]/15 dark:border-white/15">
              {residencyOutcomes.map((outcome) => (
                <li key={outcome} className="flex gap-4 border-b border-[#111115]/15 py-4 text-[14px] leading-[1.65] dark:border-white/15">
                  <Check size={19} className="mt-0.5 shrink-0 text-[#6554A8] dark:text-[#B6ABF1]" aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="next-title"
        className="bg-[#F5F5F7] py-16 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:py-20"
      >
        <Container>
          <div className="rounded-[22px] bg-[#EAE6FB] px-6 py-11 dark:bg-[#24242A] sm:rounded-[26px] sm:px-10 sm:py-14 lg:px-14">
            <CourseMarker left="05 / WHAT'S NEXT" right="FIRST COHORT IN PLANNING" />
            <div className="mt-9 grid items-end gap-8 lg:grid-cols-[1fr_0.65fr]">
              <div>
                <h2 id="next-title" className="font-academy text-[clamp(2.7rem,6.5vw,5.5rem)] leading-[1.02] tracking-[-0.07em]">
                  Interested in<br /><span className="text-[#6554A8] dark:text-[#B6ABF1]">the first cohort?</span>
                </h2>
                <p className="mt-5 max-w-[560px] text-[14px] leading-[1.7] text-[#111115]/70 dark:text-white/70">
                  The founding team is refining the program. Dates, places and fees are not confirmed public commitments. Enquiries open an email draft; there is no online application yet.
                </p>
              </div>
              <div className="flex flex-col items-start gap-4">
                <CoursePill href={enquiry}>Enquire about the residency</CoursePill>
                <Link href="/courses" className="inline-flex min-h-11 items-center gap-2 text-[13px] font-medium transition-colors hover:text-[#8B7BDB]">
                  Explore shorter courses <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
            <details className="group mt-8 border-t border-[#111115]/15 pt-5 dark:border-white/15">
              <summary className="flex cursor-pointer list-none items-center gap-2 text-[13px] font-semibold text-[#6554A8] marker:hidden hover:underline dark:text-[#B6ABF1] [&::-webkit-details-marker]:hidden">
                Practical program notes
                <ArrowDown className="transition-transform group-open:rotate-180 motion-reduce:transition-none" size={15} aria-hidden="true" />
              </summary>
              <dl className="mt-5 grid gap-5 text-[13px] leading-[1.65] sm:grid-cols-3">
                <div><dt className="font-semibold">Who can join?</dt><dd className="mt-1 text-[#111115]/65 dark:text-white/65">Developers with the basics; final entry criteria are pending.</dd></div>
                <div><dt className="font-semibold">Are projects real?</dt><dd className="mt-1 text-[#111115]/65 dark:text-white/65">Realistic supervised challenges. Client work requires consent and safe data.</dd></div>
                <div><dt className="font-semibold">Is a job guaranteed?</dt><dd className="mt-1 text-[#111115]/65 dark:text-white/65">No. The goal is stronger, demonstrable team readiness.</dd></div>
              </dl>
            </details>
          </div>
        </Container>
      </section>
    </>
  );
}
