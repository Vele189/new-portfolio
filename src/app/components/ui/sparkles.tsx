"use client";
import { useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/app/components/ui/utils";

// A cheap, dependency-free twinkling starfield rendered with motion divs.
// Deterministic layout (seeded) so it stays stable across renders.
function seeded(i: number) {
  const x = Math.sin(i * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export function Sparkles({
  className,
  count = 40,
  color = "#ffffff",
  minSize = 1,
  maxSize = 2.5,
}: {
  className?: string;
  count?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
}) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: `${seeded(i) * 100}%`,
        top: `${seeded(i + 100) * 100}%`,
        size: minSize + seeded(i + 200) * (maxSize - minSize),
        delay: seeded(i + 300) * 4,
        duration: 2 + seeded(i + 400) * 3,
      })),
    [count, minSize, maxSize],
  );

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden
    >
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            background: color,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            repeatDelay: seeded(i + 500) * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
