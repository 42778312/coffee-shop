"use client";

import { useState } from "react";
import { img } from "./assets";
import { moods } from "./content";

export function MoodMatcherSection() {
  const [active, setActive] = useState(moods[0].id);
  const current = moods.find((m) => m.id === active) ?? moods[0];

  return (
    <section className="bg-[#284010] px-5 py-20 text-[#e9ebdf] md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="font-hand text-[22px]">Mood matcher</p>
          <h2 className="mt-3 text-[48px] leading-[0.95] tracking-[-0.8px] md:text-[80px] md:leading-[80px]">
            What are you in the mood for?
          </h2>
          <p className="mt-4 max-w-[360px] text-[16px] font-medium text-[#e9ebdf]/80">
            Choose your mood. We`ll do the rest.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {moods.map((mood) => {
              const on = mood.id === active;
              return (
                <button
                  key={mood.id}
                  type="button"
                  onClick={() => setActive(mood.id)}
                  className={`rounded-[20px] px-5 py-4 text-left transition ${
                    on
                      ? "bg-[#78bf30] text-[#284010]"
                      : "bg-[#e9ebdf]/10 text-[#e9ebdf] hover:bg-[#e9ebdf]/16"
                  }`}
                >
                  <span className="font-hand block text-[22px] leading-none">
                    {mood.title}
                  </span>
                  <span className="mt-2 block text-[14px] font-medium">
                    {mood.subtitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <article className="relative min-h-[420px] overflow-hidden rounded-[24px]">
          <img
            src={current.drink.image}
            alt={current.drink.imageAlt}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-[#284010]/20" />
          <div className="relative z-10 flex h-full min-h-[420px] flex-col p-7">
            <div className="flex gap-2">
              <span className="rounded-full bg-[#e9ebdf]/20 px-3 py-1 text-[13px] font-medium">
                {current.drink.tags[0]}
              </span>
              <span className="rounded-full bg-[#e9ebdf]/20 px-3 py-1 text-[13px] font-medium">
                {current.drink.tags[1]}
              </span>
            </div>
            <div className="mt-auto text-[#e9ebdf]">
              <h3 className="text-[40px] leading-[40px] tracking-[-0.4px]">
                {current.drink.title}
              </h3>
              <p className="mt-2 text-[16px] font-medium">
                {current.drink.description}
              </p>
              <div className="mt-4 flex items-end justify-between">
                <span className="font-heading text-[28px] leading-none">
                  {current.drink.price}
                </span>
                <span className="rounded-full bg-[#e9ebdf]/20 px-3 py-1 text-[14px] font-medium">
                  {current.drink.size}
                </span>
              </div>
            </div>
            <img
              src={img("illustration-10.svg")}
              alt=""
              className="absolute top-6 right-6 w-14"
            />
          </div>
        </article>
      </div>
    </section>
  );
}
