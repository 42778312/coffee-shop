"use client";

import { motion } from "motion/react";
import { img } from "./assets";

const infoItems = [
  "28 Roastery Lane, Brooklyn",
  "Open daily 7AM–6PM",
  "Coffee, matcha & fresh bakes daily",
];

const navItems = [
  { href: "#menu", label: "Menu" },
  { href: "#place", label: "Place" },
  { href: "#visit", label: "Visit" },
];

function InfoStrip() {
  const items = [...infoItems, ...infoItems, ...infoItems];
  return (
    <div className="overflow-hidden bg-[#AAD0C8] py-2">
      <div className="mello-marquee-track flex w-max items-center gap-3 pr-3">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-3 text-[14px] font-medium whitespace-nowrap text-[#1F3D38]"
          >
            <span>{item}</span>
            <img
              src={img("illustration-1.svg")}
              alt=""
              className="size-4 shrink-0"
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex flex-col">
      <InfoStrip />
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="flex flex-col items-center gap-4 px-8 py-4"
      >
        <a
          href="/"
          className="font-heading text-[40px] leading-none tracking-[-0.01em] text-[#1F3D38] transition-opacity hover:opacity-80 lg:text-[48px]"
        >
          Mello
        </a>
        <nav className="flex items-center gap-6 text-[16px] font-medium text-[#1F3D38] sm:gap-8 sm:text-[18px]">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="group relative">
              <span className="relative z-10">{item.label}</span>
              <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-[#1F3D38] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
