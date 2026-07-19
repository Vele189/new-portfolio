import { useEffect, useRef, useState } from "react";
import { ArrowUpLeftContained } from "./icons";
import { FlipWords } from "./ui/flip-words";
import { Highlight } from "./ui/hero-highlight";
import { PixelatedCanvas } from "./ui/pixelated-canvas";
import { PointerHighlight } from "./ui/pointer-highlight";
import { TypewriterEffect } from "./ui/typewriter-effect";
import imgHero from "../../imports/Home/80c4a33f369c873cfb25e59846e0cacee22530fd.png";

const passionateWords = [
  "Passionate",
  "Creative",
  "Designer",
  "and",
  "Developer,",
  "dedicated",
  "to",
  "crafting",
  "innovative",
  "solutions",
  "and",
  "exceptional",
  "digital",
  "experiences",
  "through",
  "modern",
  "technologies",
].map((text) => ({ text, className: "text-white" }));

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const update = () => {
      setSize({
        width: Math.max(1, Math.floor(el.clientWidth)),
        height: Math.max(1, Math.floor(el.clientHeight)),
      });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white overflow-hidden min-h-[80vh] flex flex-col justify-between"
    >
      {size.width > 0 && size.height > 0 && (
        <PixelatedCanvas
          src={imgHero}
          width={size.width}
          height={size.height}
          cellSize={4}
          dotScale={0.85}
          shape="square"
          backgroundColor="#000000"
          grayscale
          objectFit="cover"
          interactive
          distortionMode="swirl"
          distortionStrength={4}
          distortionRadius={100}
          dropoutStrength={0.25}
          tintStrength={0}
          className="absolute inset-0 size-full"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70 pointer-events-none" />

      {/* Top bar */}
      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-start md:justify-between px-6 md:px-12 lg:px-[133px] pt-10 pointer-events-none">
        <PointerHighlight
          rectangleClassName="border-white"
          pointerClassName="text-white"
        >
          <p className="relative z-10 font-['Inter:Medium',sans-serif] font-medium text-[20px] whitespace-nowrap">
            Vele Ndamulelo
          </p>
        </PointerHighlight>
        <TypewriterEffect
          words={passionateWords}
          className="max-w-[600px] font-['Inter:Light',sans-serif] !font-light !text-[16px] sm:!text-[16px] md:!text-[20px] lg:!text-[20px] !text-right leading-normal"
          cursorClassName="bg-white w-[2px] h-[1em] md:h-[1em] lg:h-[1em] align-middle"
        />
      </div>

      {/* Hero title */}
      <div className="relative z-10 px-6 md:px-12 lg:px-[133px] pb-16 md:pb-24 pointer-events-none">
        <div className="absolute right-6 -top-16 z-20 hidden lg:right-12 lg:block xl:right-[133px]">
          <ArrowUpLeftContained size={110} color="#C6C6C6" />
        </div>

        <h1 className="whitespace-nowrap font-['Inter:Medium',sans-serif] font-medium leading-none text-[clamp(1.5rem,4vw,3.25rem)] text-black">
          <Highlight className="rounded-none from-white to-white px-2 pb-1 text-black dark:from-white dark:to-white">
            Creative{" "}
            <FlipWords
              words={["Developer", "Designer"]}
              className="text-black"
            />
          </Highlight>
        </h1>
      </div>
    </section>
  );
}
