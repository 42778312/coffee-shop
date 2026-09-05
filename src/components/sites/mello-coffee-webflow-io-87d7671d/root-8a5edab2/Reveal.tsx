"use client";

import { motion, type Variants, type MotionProps } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

const tags = {
  div: motion.div,
  span: motion.span,
  p: motion.p,
  h2: motion.h2,
  h3: motion.h3,
  article: motion.article,
  ul: motion.ul,
  li: motion.li,
} as const;

type Tag = keyof typeof tags;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: EASE } },
};

const variantMap = { fadeUp, fadeIn, scaleIn };

export function Reveal({
  children,
  as = "div",
  variant = "fadeUp",
  delay = 0,
  className,
  once = true,
  amount = 0.3,
}: {
  children: ReactNode;
  as?: Tag;
  variant?: keyof typeof variantMap;
  delay?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}) {
  const MotionTag = tags[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
      variants={variantMap[variant]}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealGroup({
  children,
  as = "div",
  className,
  stagger = 0.1,
  delay = 0,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
  amount?: number;
}) {
  const MotionTag = tags[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

export function RevealItem({
  children,
  as = "div",
  variant = "fadeUp",
  className,
  ...motionProps
}: {
  children: ReactNode;
  as?: Tag;
  variant?: keyof typeof variantMap;
  className?: string;
} & MotionProps) {
  const MotionTag = tags[as];
  return (
    <MotionTag
      className={className}
      variants={variantMap[variant]}
      {...motionProps}
    >
      {children}
    </MotionTag>
  );
}

export const tapScale: MotionProps = {
  whileTap: { scale: 0.96 },
};

export const hoverLift: MotionProps = {
  whileHover: { y: -4 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.25, ease: EASE },
};
