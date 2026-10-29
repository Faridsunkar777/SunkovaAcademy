import { LearnMarker, Container } from "./shared";

export function DashboardHero({ name }: { name: string }) {
  return (
    <section aria-labelledby="learn-dashboard-title" className="pt-12 pb-11 sm:pt-16 sm:pb-14 lg:pt-20">
      <Container>
        <LearnMarker left="YOUR LEARNING SPACE" right="LEARN / BUILD / SHIP" />
        <div className="mt-9 grid gap-5 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:gap-12">
          <h1 id="learn-dashboard-title" className="min-w-0 font-academy text-[clamp(2.9rem,10vw,5rem)] leading-[1.02] font-normal tracking-[-0.075em] lg:text-[clamp(4.5rem,6vw,6.5rem)]">
            Keep growing,<br />
            <span className="break-words text-[#6554A8] dark:text-[#B6ABF1]">{name}.</span>
          </h1>
          <p className="max-w-[370px] text-[15px] leading-[1.8] text-[#111115]/65 dark:text-[#F5F5F7]/65 sm:text-[17px]">
            Your next great project is a lesson away. Continue wherever you left off.
          </p>
        </div>
      </Container>
    </section>
  );
}
