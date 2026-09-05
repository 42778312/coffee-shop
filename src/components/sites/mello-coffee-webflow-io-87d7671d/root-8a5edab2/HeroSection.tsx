"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { img } from "./assets";
import { MelloButton } from "./MelloButton";

const EASE = [0.16, 1, 0.3, 1] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function HeroSection() {
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageWrapRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="relative flex h-[100svh] min-h-[800px] max-h-[880px] flex-col items-center overflow-hidden bg-[#EAF3F1] px-8 pt-[228px] md:max-h-[1200px] md:min-h-[880px] md:px-10 md:pt-[252px] lg:h-screen lg:min-h-[760px] lg:pt-[184px]">
      <span
        aria-hidden
        className="hero-1-illu pointer-events-none absolute top-[120px] left-[max(12px,calc(50%-560px))] hidden aspect-square w-[140px] bg-[#4C7A3D] xl:block 2xl:w-[167px]"
        style={{
          WebkitMaskImage: `url(${img("illustration-4.svg")})`,
          maskImage: `url(${img("illustration-4.svg")})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />
      <span
        aria-hidden
        className="hero-2-illu pointer-events-none absolute top-[180px] right-[max(12px,calc(50%-580px))] hidden aspect-square w-[160px] bg-[#4C7A3D] xl:block 2xl:w-[195px]"
        style={{
          WebkitMaskImage: `url(${img("illustration-5.svg")})`,
          maskImage: `url(${img("illustration-5.svg")})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "contain",
          maskSize: "contain",
        }}
      />

      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative z-10 mx-auto flex w-full max-w-[760px] flex-col items-center text-center"
      >
        <motion.span
          variants={item}
          aria-hidden
          className="pointer-events-none mb-4 block aspect-square w-14 -rotate-[10deg] bg-[#4C7A3D] md:mb-6 md:w-20 xl:hidden"
          style={{
            WebkitMaskImage: `url(${img("illustration-4.svg")})`,
            maskImage: `url(${img("illustration-4.svg")})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
        <motion.h1
          variants={item}
          className="max-w-[360px] text-[52px] leading-none tracking-[-0.02em] text-[#1F3D38] md:max-w-[616px] md:text-[88px] lg:max-w-[720px] lg:text-[104px]"
        >
          A brighter kind
          <br />
          of coffee break
        </motion.h1>
        <motion.div
          variants={item}
          className="mt-6 flex w-full flex-col items-stretch gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center md:w-auto"
        >
          <MelloButton href="#menu" className="w-full sm:w-auto">
            Explore the menu
          </MelloButton>
          <MelloButton
            href="https://google.com/maps"
            variant="ghost"
            className="w-full sm:w-auto"
          >
            Get directions
          </MelloButton>
        </motion.div>
      </motion.div>

      <motion.div
        ref={imageWrapRef}
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.45 }}
        className="relative mx-auto mt-10 min-h-0 w-full max-w-[860px] flex-1 sm:mt-10 md:mt-12"
      >
        <motion.img
          src="/images/glass.avif"
          alt="Clear glass filled with iced green matcha tea, condensation on glass surface."
          className="absolute inset-x-0 top-0 mx-auto w-full max-w-[720px] object-contain md:max-w-[820px]"
          style={{ y: imageY }}
        />

        <div className="absolute top-16 left-0 z-10 hidden max-w-[180px] flex-col gap-3 border-l-[2.67px] border-[#1F3D38]/30 pl-4 md:flex">
          <div className="flex flex-col gap-0.5">
            <p className="font-heading text-[24px] leading-6 tracking-[-0.24px] text-[#1F3D38]">
              Cold matcha
            </p>
            <div className="flex flex-wrap items-center gap-1.5 text-[14px] font-medium leading-[20px] text-[#1F3D38]">
              <span>Matcha</span>
              <span className="h-3 w-px bg-[#1F3D38]/40" />
              <span>Plenty of ice</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-bold leading-none text-[#1F3D38]">
              $6.00
            </span>
            <span className="rounded-[6px] bg-[#1F3D38]/10 px-1 py-px text-[10px] font-medium leading-[14px] text-[#1F3D38]">
              16 oz
            </span>
          </div>
        </div>

        <img
          src={img("illustration-2.svg")}
          alt=""
          className="pointer-events-none absolute top-24 left-[190px] hidden w-[70px] rotate-[10deg] md:block"
        />

        <div className="absolute -top-10 right-0 z-10 flex rotate-[10deg] items-center gap-2.5 md:top-12">
          <img
            src={img("illustration-3.svg")}
            alt=""
            className="size-[51px] shrink-0 -rotate-[10deg]"
          />
          <p className="font-hand text-[21px] leading-[22px] text-[#1F3D38]">
            100% pure
            <br />
            green energy
          </p>
        </div>
      </motion.div>
    </section>
  );
}
