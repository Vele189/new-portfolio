import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ContactCTA } from "./ContactCTA";
import { ArrowUpLeftContained } from "./icons";
import { LinkPreview } from "./ui/link-preview";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Reveal } from "./ui/reveal";
import imgProject from "../../imports/Home/3393feeedcab0173f93e608738dbd98509eadb39.webp";

const projects = [
  {
    id: "continuum-app",
    title: "Continuum App",
    image: imgProject,
    alt: "Continuum App, a project time tracking tool with one click time logging and a board view for sprints and tasks",
    href: "https://www.continuumapp.co.za",
  },
  {
    id: "chunky-fm",
    title: "Chunky FM",
    image: "/chunky-fm-cover.webp",
    alt: "Chunky FM, a live internet radio station where every listener hears the same second of the same song",
    href: "https://chunkyfm-production.up.railway.app/",
  },
  {
    id: "horizon-climate-risk",
    title: "Horizon Climate Risk",
    image: "/horizon-climate-risk-cover.webp",
    alt: "Horizon Climate Risk, a dashboard covering thirty years of observations for fifteen cities, scored a week ahead",
    href: "https://horizon-climate-risk.streamlit.app/",
  },
];

function ProjectCard({
  title,
  image,
  alt,
  href,
}: {
  title: string;
  image: string;
  alt: string;
  href: string;
}) {
  return (
    <LinkPreview
      url={href}
      className="flex flex-col gap-7 group text-left"
      width={320}
      height={200}
    >
      <div className="rounded-[42px] overflow-hidden aspect-[807/470] w-full">
        <ImageWithFallback
          src={image}
          alt={alt}
          width={1600}
          height={932}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="rotate-[44deg]">
          <ArrowUpLeftContained size={48} color="black" />
        </span>
        <h3 className="font-['Inter:Regular',sans-serif] font-normal text-[clamp(1.5rem,3vw,2.5rem)] text-black">
          {title}
        </h3>
      </div>
    </LinkPreview>
  );
}

export function ProjectsSection() {
  return (
    <section className="bg-white" id="projects" aria-labelledby="projects-heading">
      <div className="px-6 md:px-12 lg:px-[133px] py-16 md:py-[100px] flex flex-col gap-12 md:gap-[66px]">
        <TextGenerateEffect
          as="h2"
          id="projects-heading"
          words="welcome to my realm of wild projects and awesome creations"
          className="font-['Inter:Medium',sans-serif] font-medium text-[clamp(2rem,5vw,5rem)] leading-[1.05] text-black max-w-[1078px]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.12} y={40}>
              <ProjectCard
                title={p.title}
                image={p.image}
                alt={p.alt}
                href={p.href}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ContactCTA variant="light" showChat />
    </section>
  );
}
