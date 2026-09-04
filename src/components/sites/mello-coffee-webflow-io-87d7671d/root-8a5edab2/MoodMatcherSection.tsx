"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { img } from "./assets";
import { moods } from "./content";

const quadrants = [
  {
    id: "energized",
    rotate: -135,
    className:
      "rounded-tl-full items-end justify-end pb-10 pr-2 md:pb-[104px] md:pr-[72px] lg:pb-20 lg:pr-10",
  },
  {
    id: "cozy",
    rotate: -45,
    className:
      "rounded-tr-full items-start justify-end pb-10 pl-2 md:pb-[104px] md:pl-[72px] lg:pb-20 lg:pl-10",
  },
  {
    id: "refreshed",
    rotate: 135,
    className:
      "rounded-bl-full items-end justify-start pt-10 pr-2 md:pt-[104px] md:pr-[72px] lg:pt-20 lg:pr-10",
  },
  {
    id: "indulgent",
    rotate: 45,
    className:
      "rounded-br-full items-start justify-start pt-10 pl-2 md:pt-[104px] md:pl-[72px] lg:pt-20 lg:pl-10",
  },
] as const;

export function MoodMatcherSection() {
  const [active, setActive] = useState(moods[0].id);
  const current = moods.find((m) => m.id === active) ?? moods[0];
  const arrow = quadrants.find((q) => q.id === active)?.rotate ?? -135;

  return (
    <section className="overflow-hidden bg-[#284010] px-5 py-20 text-[#e9ebdf] md:px-8 md:py-[128px] lg:overflow-visible lg:px-16 lg:py-[160px]">
      <div className="mx-auto flex w-full max-w-[1328px] flex-col gap-[120px] lg:gap-20">
        <div className="relative flex items-center">
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <span className="size-2 shrink-0 rounded-full bg-[#78bf30]" />
              <p className="font-hand text-[18px] leading-[1.04] md:text-[21px]">
                Mood matcher
              </p>
            </div>
            <h2 className="max-w-[480px] text-[48px] leading-none tracking-[-0.01em] md:max-w-[408px] md:text-[68px] lg:max-w-[480px] lg:text-[80px]">
              What are you in the mood for?
            </h2>
          </div>
          <img
            src={img("illustration-10.svg")}
            alt=""
            className="pointer-events-none absolute top-[88px] right-[180px] hidden w-[200px] -rotate-[30deg] lg:block"
          />
          <img
            src={img("illustration-10.svg")}
            alt=""
            className="pointer-events-none absolute top-[112px] right-5 hidden w-[144px] -rotate-[30deg] md:block lg:hidden"
          />
        </div>

        <div className="grid items-center gap-[120px] lg:grid-cols-12 lg:gap-4">
          <div className="relative flex min-w-0 flex-col items-center gap-6 md:gap-10 lg:col-span-6 lg:flex-row lg:items-center">
            <p className="z-[1] text-center text-[14px] font-medium leading-[1.44] tracking-[-0.01em] md:absolute md:top-10 md:left-0 md:w-[144px] md:-rotate-45 lg:static lg:w-auto lg:rotate-180 lg:whitespace-nowrap lg:[writing-mode:vertical-rl]">
              Choose your mood. We&apos;ll do the rest.
            </p>

            <div className="relative w-full">
              <div className="flex w-full flex-col gap-[3px] bg-[#284010]">
                <div className="flex gap-[3px]">
                  {quadrants.slice(0, 2).map((quad) => (
                    <WheelSlice
                      key={quad.id}
                      id={quad.id}
                      className={quad.className}
                      active={active === quad.id}
                      onSelect={setActive}
                    />
                  ))}
                </div>
                <div className="flex gap-[3px]">
                  {quadrants.slice(2).map((quad) => (
                    <WheelSlice
                      key={quad.id}
                      id={quad.id}
                      className={quad.className}
                      active={active === quad.id}
                      onSelect={setActive}
                    />
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <img
                  src={img("illustration-8.svg")}
                  alt=""
                  className="absolute top-1/2 left-1/2 w-16 origin-left transition-transform duration-500 ease-out lg:w-[104px]"
                  style={{
                    transform: `translateY(-50%) rotate(${arrow}deg)`,
                  }}
                />
                <div className="relative flex size-16 items-center justify-center rounded-full border-[3px] border-[#284010] bg-[#78bf30] p-4 lg:size-20 lg:p-6">
                  <img
                    src={img("illustration-1.svg")}
                    alt=""
                    className="size-full"
                  />
                </div>
              </div>
            </div>

            <img
              src={img("illustration-25.svg")}
              alt=""
              className="pointer-events-none absolute right-0 bottom-0 w-12 rotate-[110deg] md:w-20 lg:-right-4 lg:-bottom-4"
            />
            <img
              src={img("illustration-8b.svg")}
              alt=""
              className="pointer-events-none absolute top-[200px] -right-[200px] hidden w-[144px] rotate-[15deg] lg:block"
            />
            <img
              src={img("illustration-9.svg")}
              alt=""
              className="pointer-events-none absolute bottom-[-80px] left-6 hidden w-20 rotate-45 md:block lg:hidden"
            />
          </div>

          <div className="flex items-center justify-center lg:col-span-4 lg:col-start-9 lg:justify-end">
            <article className="flex w-full max-w-[360px] flex-col gap-7 rounded-[24px] bg-[#e9ebdf] p-3 text-[#284010] md:max-w-[400px] lg:max-w-[360px]">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px]">
                <img
                  key={current.drink.image}
                  src={current.drink.image}
                  alt={current.drink.imageAlt}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-5 px-4 pb-4">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[14px] font-medium leading-[1.44] tracking-[-0.01em]">
                        {current.drink.tags[0]}
                      </span>
                      <span className="size-[3px] rounded-full bg-[#284010]" />
                      <span className="text-[14px] font-medium leading-[1.44] tracking-[-0.01em]">
                        {current.drink.tags[1]}
                      </span>
                    </div>
                    <h3 className="text-[24px] leading-none tracking-[-0.01em] md:text-[28px]">
                      {current.drink.title}
                    </h3>
                  </div>
                  <p className="text-[14px] font-medium leading-[1.44] tracking-[-0.01em]">
                    {current.drink.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[18px] font-bold leading-none tracking-[-0.02em]">
                    {current.drink.price}
                  </span>
                  <span className="rounded-[6px] bg-[#284010]/10 px-1 py-px text-[10px] font-medium leading-[1.44] tracking-[-0.01em] backdrop-blur-[5px]">
                    {current.drink.size}
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function WheelSlice({
  id,
  className,
  active,
  onSelect,
}: {
  id: string;
  className: string;
  active: boolean;
  onSelect: (id: string) => void;
}) {
  const mood = moods.find((m) => m.id === id);
  if (!mood) return null;

  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={() => onSelect(mood.id)}
      className={cn(
        "flex aspect-square w-full flex-col transition-colors duration-300",
        active
          ? "bg-[#78bf30] text-[#284010]"
          : "bg-[#e9ebdf] text-[#284010]/80 hover:text-[#284010]",
        className,
      )}
    >
      <span className="flex w-full max-w-[128px] flex-col items-center gap-1.5">
        <span className="font-hand text-[16px] leading-[1.04]">
          {mood.title}
        </span>
        <span className="font-heading text-[21px] leading-none tracking-[-0.01em] md:text-[24px]">
          {mood.subtitle}
        </span>
      </span>
    </button>
  );
}
