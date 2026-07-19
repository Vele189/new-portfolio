import { ArrowUpLeftContained } from "./icons";

export function AboutSection() {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-[133px] py-16 md:py-[100px]">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
        <p
          className="font-['DM_Sans:Medium',sans-serif] font-medium text-[clamp(1.5rem,3vw,2.5rem)] text-black max-w-[1015px]"
          style={{ fontVariationSettings: '"opsz" 14' }}
        >
          Driven by curiosity and a love for design, I create simple, functional, and visually striking digital experiences. As a student, I&rsquo;m always learning and exploring new ideas.
        </p>

        <div className="w-full lg:w-[487px] shrink-0 flex flex-col items-start lg:items-end gap-8">
          <p
            className="font-['DM_Sans:Light',sans-serif] font-light text-[#616161] text-[clamp(1rem,1.6vw,1.375rem)] lg:text-right"
            style={{ fontVariationSettings: '"opsz" 14' }}
          >
            The fusion of my passion for design, development, and seamless user experiences places me at the intersection of creativity and technology in the digital world.
          </p>

          <button className="flex items-center gap-3 group">
            <span
              className="font-['DM_Sans:Regular',sans-serif] font-normal text-[clamp(1.25rem,2vw,1.875rem)] text-black"
              style={{ fontVariationSettings: '"opsz" 14' }}
            >
              More about me
            </span>
            <span className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpLeftContained size={44} color="black" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
