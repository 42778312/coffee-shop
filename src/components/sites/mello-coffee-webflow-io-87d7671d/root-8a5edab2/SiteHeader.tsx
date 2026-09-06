"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { img } from "./assets";
import { MelloButton } from "./MelloButton";

const contactItems = [
  { icon: "map-pin.svg", label: "28 Roastery Lane, Brooklyn, NY" },
  { icon: "illustration-22.svg", label: "Open daily, 7AM–6PM" },
];

const socialLinks = [
  { href: "https://www.instagram.com", label: "Instagram" },
  { href: "https://www.tiktok.com", label: "TikTok" },
  { href: "https://www.facebook.com", label: "Facebook" },
];

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

const midpoint = Math.ceil(navItems.length / 2);
const leftNavItems = navItems.slice(0, midpoint);
const rightNavItems = navItems.slice(midpoint);

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

function NavLink({
  href,
  label,
  onClick,
  className = "",
}: {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a href={href} onClick={onClick} className={`group relative ${className}`}>
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-[#1F3D38] transition-transform duration-300 ease-out group-hover:scale-x-100" />
    </a>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute inset-x-0 top-0 z-30 flex flex-col">
      <InfoStrip />
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="px-5 py-3 md:px-8 md:py-4"
      >
        {/* Mobile bar */}
        <div className="relative flex items-center justify-center md:hidden">
          <a href="/" className="transition-opacity hover:opacity-80">
            <img
              src="/images/logo.png"
              alt="Stadtkind Konstanz"
              className="h-32 w-32"
            />
          </a>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
            className="absolute right-0 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[#1F3D38]/20 bg-white/40"
          >
            <span className="h-[2px] w-6 bg-[#1F3D38]" />
            <span className="h-[2px] w-6 bg-[#1F3D38]" />
            <span className="h-[2px] w-6 bg-[#1F3D38]" />
          </button>
        </div>

        {/* Desktop bar: nav / logo / nav */}
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6">
          <nav className="flex items-center justify-end gap-8 text-[16px] font-medium text-[#1F3D38] sm:text-[18px]">
            {leftNavItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>
          <a href="/" className="transition-opacity hover:opacity-80">
            <img
              src="/images/logo.png"
              alt="Stadtkind Konstanz"
              className="h-28 w-28 lg:h-36 lg:w-36"
            />
          </a>
          <nav className="flex items-center justify-start gap-8 text-[16px] font-medium text-[#1F3D38] sm:text-[18px]">
            {rightNavItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Mobile sidebar */}
      <div
        aria-hidden={!isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-[#1F3D38]/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        aria-hidden={!isMenuOpen}
        className={`fixed inset-y-0 right-0 z-50 flex w-80 max-w-[85vw] flex-col overflow-y-auto bg-[#AAD0C8] px-7 py-7 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="font-hand text-[16px] leading-none text-[#1F3D38]">
            Café Stadtkind
          </p>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsMenuOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1F3D38]/30 transition-colors hover:bg-[#1F3D38]/10"
          >
            <span className="relative block h-4 w-4">
              <span className="absolute inset-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-45 bg-[#1F3D38]" />
              <span className="absolute inset-0 top-1/2 h-[2px] w-full -translate-y-1/2 -rotate-45 bg-[#1F3D38]" />
            </span>
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-5">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={() => setIsMenuOpen(false)}
              className="font-heading w-fit text-[32px] leading-none tracking-[-0.01em] text-[#1F3D38]"
            />
          ))}
        </nav>

        <div className="my-8 h-px w-full bg-[#1F3D38]/15" />

        <div className="flex flex-col gap-4">
          {contactItems.map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <img
                src={img(item.icon)}
                alt=""
                className="mt-0.5 h-4 w-4 shrink-0"
              />
              <p className="text-[14px] leading-snug font-medium text-[#1F3D38]">
                {item.label}
              </p>
            </div>
          ))}
          <a
            href="mailto:hi@mello.com"
            className="flex items-start gap-3"
          >
            <img
              src={img("envelope.svg")}
              alt=""
              className="mt-0.5 h-4 w-4 shrink-0"
            />
            <p className="text-[14px] leading-snug font-medium text-[#1F3D38] underline underline-offset-2">
              hi@mello.com
            </p>
          </a>
        </div>

        <MelloButton
          href="#visit"
          onClick={() => setIsMenuOpen(false)}
          className="mt-8 w-full bg-white hover:bg-white/80"
        >
          Find us
        </MelloButton>

        <div className="mt-auto flex items-center gap-5 pt-8 text-[12px] font-semibold tracking-[0.08em] text-[#1F3D38]/70 uppercase">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#1F3D38]"
            >
              {social.label}
            </a>
          ))}
        </div>
      </aside>
    </header>
  );
}
