"use client";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/app/components/ui/utils";

// Lightweight scroll-into-view reveal: content rises and un-blurs once.
// Use `delay` to cascade siblings for a staggered, alive feel.
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  blur = true,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  blur?: boolean;
  once?: boolean;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{
        opacity: 0,
        y,
        filter: blur ? "blur(12px)" : "none",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: blur ? "blur(0px)" : "none",
      }}
      viewport={{ once, amount: 0.3 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
