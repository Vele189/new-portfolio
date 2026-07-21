import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ContactCTA } from "./ContactCTA";
import { ArrowUpLeftContained } from "./icons";
import { LinkPreview } from "./ui/link-preview";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Reveal } from "./ui/reveal";
import imgProject from "../../imports/Home/3393feeedcab0173f93e608738dbd98509eadb39.png";

const projects = [
  {
    id: "continuum-landing",
    title: "Continuum Landing Page",
    image: imgProject,
    href: "https://joincontinuum.co.za",
  },
  {
    id: "continuum-app",
    title: "Continuum App",
    image: imgProject,
    href: "https://www.continuumapp.co.za",
  },
];

function ProjectCard({
  title,
  image,
  href,
}: {
  title: string;
  image: string;
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
          alt={title}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center gap-3">
        <span className="rotate-[44deg]">
          <ArrowUpLeftContained size={48} color="black" />
        </span>
        <p className="font-['Inter:Regular',sans-serif] font-normal text-[clamp(1.5rem,3vw,2.5rem)] text-black">
          {title}
        </p>
      </div>
    </LinkPreview>
  );
}

export function ProjectsSection() {
  return (
    <section className="bg-white" id="projects">
      <div className="px-6 md:px-12 lg:px-[133px] py-16 md:py-[100px] flex flex-col gap-12 md:gap-[66px]">
        <TextGenerateEffect
          as="h2"
          words="welcome to my realm of wild projects and awesome creations"
          className="font-['Inter:Medium',sans-serif] font-medium text-[clamp(2rem,5vw,5rem)] leading-[1.05] text-black max-w-[1078px]"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.12} y={40}>
              <ProjectCard title={p.title} image={p.image} href={p.href} />
            </Reveal>
          ))}
        </div>
      </div>

      <ContactCTA variant="light" showChat />
    </section>
  );
}
