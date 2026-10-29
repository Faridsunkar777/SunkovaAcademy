import { Container, CourseMarker, CoursePill } from "./shared";

export function CatalogueCTA({ category = false }: { category?: boolean }) {
  return (
    <section className="bg-[#F5F5F7] pb-20 text-[#111115] dark:bg-[#111115] dark:text-[#F5F5F7] sm:pb-24 lg:pb-28">
      <Container>
        <div className="rounded-[22px] bg-[#EAE6FB] px-6 py-10 dark:bg-[#24242A] sm:rounded-[26px] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <CourseMarker left="YOUR NEXT STEP" right="SUNKOVA ACADEMY" />
          <div className="mt-10 grid items-end gap-8 lg:grid-cols-[1fr_0.75fr] lg:gap-12">
            <div>
              <h2 className="font-academy text-[clamp(2.6rem,9vw,5.5rem)] leading-[1.03] font-normal tracking-[-0.07em]">{category ? <>Good things start<br /><span className="text-[#6554A8] dark:text-[#B6ABF1]">with a question.</span></> : <>Not sure where<br /><span className="text-[#6554A8] dark:text-[#B6ABF1]">to begin?</span></>}</h2>
            </div>
            <div className="flex flex-col items-start gap-6 lg:items-start">
              <p className="max-w-[390px] text-[15px] leading-[1.8] text-[#111115]/65 dark:text-[#F5F5F7]/65 sm:text-[16px]">Tell us what you want to build. We&apos;ll help you choose the right direction.</p>
              <CoursePill href="/contact">Talk to the Academy</CoursePill>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
