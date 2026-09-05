"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "ghostOnDark";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#AAD0C8] text-[#1F3D38] hover:bg-[#8fc4ba]",
  ghost:
    "bg-transparent text-[#1F3D38] ring-1 ring-inset ring-[#1F3D38] hover:bg-[#AAD0C8]/40",
  ghostOnDark:
    "bg-transparent text-[#FFFFFF] ring-1 ring-inset ring-[#AAD0C8] hover:bg-[#AAD0C8] hover:text-[#1F3D38]",
};

export function MelloButton({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
}) {
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel ?? (target === "_blank" ? "noreferrer" : undefined)}
      className={cn(
        "inline-flex h-14 shrink-0 items-center justify-center rounded-[18px] px-6 text-[16px] font-medium leading-none transition-colors sm:h-[66px] sm:rounded-[20px] sm:px-7 sm:text-[18px]",
        variants[variant],
        className,
      )}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.a>
  );
}
