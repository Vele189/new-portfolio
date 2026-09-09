"use client";
import { useEffect, useRef } from "react";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { cn } from "@/app/components/ui/utils";

// Reveals text word-by-word with a soft blur/fade once it scrolls into view.
// Inherits the parent's font styling so it can wrap any heading or paragraph.
export const TextGenerateEffect = ({
  words,
  className,
  style,
  id,
  filter = true,
  duration = 0.6,
  stagger: staggerAmount = 0.12,
  as: Component = "p",
}: {
  words: string;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  filter?: boolean;
  duration?: number;
  stagger?: number;
  as?: keyof HTMLElementTagNameMap;
}) => {
  const [scope, animate] = useAnimate();
  const startedRef = useRef(false);
  const isInView = useInView(scope, { amount: 0.3, once: true });
  const wordsArray = words.split(" ");

  useEffect(() => {
    if (isInView && !startedRef.current) {
      startedRef.current = true;
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
          y: 0,
        },
        {
          duration,
          delay: stagger(staggerAmount),
          ease: "easeOut",
        },
      );
    }
  }, [isInView, animate, filter, duration, staggerAmount]);

  const MotionTag = motion[Component as "p"];

  return (
    <MotionTag ref={scope} id={id} className={className} style={style}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className="inline-block opacity-0"
          style={{
            filter: filter ? "blur(10px)" : "none",
            transform: "translateY(0.25em)",
          }}
        >
          {word}
          {idx < wordsArray.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
};
