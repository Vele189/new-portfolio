import svgPaths from "../../imports/Home/svg-eoj8yryyml";

export function Footer() {
  return (
    <footer className="bg-black overflow-hidden relative px-6 md:px-12 lg:px-[69px] pt-12 pb-8">
      {/* top row: tagline + circular arrow */}
      <div className="flex items-start justify-between gap-6">
        <p
          className="font-['DM_Sans:Light',sans-serif] font-light text-white text-[clamp(1.75rem,6vw,6.25rem)] leading-[1]"
          style={{ fontVariationSettings: '"opsz" 14' }}
        >
          your friendly chaos creator
        </p>
        <a
          href="#top"
          className="shrink-0 flex items-center justify-center rounded-full bg-white size-[clamp(4rem,9vw,8.875rem)] transition-transform hover:-translate-y-1"
          aria-label="Back to top"
        >
          <div className="size-[45%] rotate-180" style={{ containerType: "size" }}>
            <div className="relative size-full">
              <div className="absolute inset-[-5.27%_-4.89%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.1 52.45">
                  <path d={svgPaths.p38069000} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* giant name */}
      <p
        className="font-['DM_Sans:Medium',sans-serif] font-medium text-white text-[clamp(3rem,18vw,18.75rem)] tracking-[0.02em] leading-[0.9] mt-4"
        style={{ fontVariationSettings: '"opsz" 14' }}
      >
        Vele
      </p>
    </footer>
  );
}
