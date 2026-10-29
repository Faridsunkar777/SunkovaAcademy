const tracks = [
  "AI DESIGN",
  "MOBILE APPLICATIONS",
  "AI SECURITY",
  "AI ENGINEERING",
  "3-D ANIMATION",
  "AI DESIGN",
  "MOBILE APPLICATIONS",
  "AI SECURITY",
  "AI ENGINEERING",
  "3-D ANIMATION",
];

function TickerGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate}
      className="flex shrink-0 items-center gap-9 pr-9"
    >
      {tracks.map((track, index) => (
        <span
          key={`${track}-${index}`}
          className="inline-flex shrink-0 items-center gap-9 font-academy-mono text-[10px] font-medium tracking-[0.14em] uppercase"
        >
          <span>{track}</span>
          <span aria-hidden="true" className="text-[#8B7BDB]">
            ✳
          </span>
        </span>
      ))}
    </div>
  );
}

export function HomeTicker() {
  return (
    <div
      aria-label="Our learning paths: AI Design, Mobile Applications, AI Security, AI Engineering, and 3-D Animation"
      className="overflow-hidden bg-[#EAE6FB] py-3.5 text-[#111115] dark:bg-[#EAE6FB]/10 dark:text-white/80"
    >
      <div className="flex w-max animate-academy-marquee items-center whitespace-nowrap motion-reduce:animate-none">
        <TickerGroup />
        <TickerGroup duplicate />
      </div>
    </div>
  );
}
