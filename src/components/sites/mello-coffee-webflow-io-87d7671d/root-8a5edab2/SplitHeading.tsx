"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const word: Variants = {
  hidden: { opacity: 0.25, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const tags = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
} as const;

type Tag = keyof typeof tags;

export type HeadingSegment = string | { text: string; className?: string };

function toWords(segments: HeadingSegment[]) {
  const words: { text: string; className?: string }[] = [];
  for (const segment of segments) {
    const text = typeof segment === "string" ? segment : segment.text;
    const className = typeof segment === "string" ? undefined : segment.className;
    for (const w of text.split(" ").filter(Boolean)) {
      words.push({ text: w, className });
    }
  }
  return words;
}

export function SplitHeading({
  segments,
  as = "h2",
  className,
  delay = 0,
  once = true,
  amount = 0.4,
  immediate = false,
}: {
  segments: HeadingSegment[];
  as?: Tag;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
  /** Animate on mount instead of on scroll into view (for above-the-fold headings). */
  immediate?: boolean;
}) {
  const MotionTag = tags[as];
  const words = toWords(segments);

  const viewportProps = immediate
    ? { animate: "show" as const }
    : {
        whileInView: "show" as const,
        viewport: { once, amount, margin: "0px 0px -10% 0px" },
      };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      variants={container}
      transition={{ delayChildren: delay }}
      {...viewportProps}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={word}
          className={cn("inline-block will-change-transform", w.className)}
        >
          {w.text}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
