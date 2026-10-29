import { AboutAction, AboutMarker, Container } from "./shared";

export function AboutClosing() {
  return (
    <section
      aria-labelledby="about-closing-title"
      className="bg-[#F5F5F7] pt-0 pb-16 dark:bg-[#111115] sm:pb-20 lg:pb-24"
    >
      <Container>
        <div className="grid min-w-0 gap-10 rounded-[22px] bg-[#EAE6FB] px-6 py-12 text-[#111115] sm:rounded-[26px] sm:px-10 sm:py-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end lg:gap-14 lg:px-14 lg:py-20 dark:bg-[#24242A] dark:text-[#F5F5F7] dark:ring-1 dark:ring-white/10">
          <div>
            <AboutMarker left="FROM NAIROBI TO EVERYWHERE" />
            <h2
              id="about-closing-title"
              data-motion-reveal
              className="mt-7 font-academy text-[clamp(2.8rem,9.5vw,5rem)] leading-[1.03] font-normal tracking-[-0.07em] lg:text-[clamp(4rem,5vw,6rem)]"
            >
              Learn here.
              <br />
              <span className="text-[#6554A8] dark:text-[#B6ABF1]">Build anywhere.</span>
            </h2>
          </div>
          <div className="lg:pb-1">
            <p className="max-w-[410px] text-[15px] leading-[1.8] text-[#111115]/70 dark:text-[#F5F5F7]/70 sm:text-[16px]">
              We&apos;re proud of where we started and optimistic about where our learners will go.
            </p>
            <div className="mt-7">
              <AboutAction href="/contact">Say hello</AboutAction>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
