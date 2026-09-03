"use client";

import { useState } from "react";
import { img } from "./assets";
import { spots } from "./content";

export function PlaceSection() {
  const [active, setActive] = useState(spots[0].id);
  const current = spots.find((s) => s.id === active) ?? spots[0];

  return (
    <section id="place" className="px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <p className="font-hand text-[22px]">Take a seat</p>
        <h2 className="mt-3 max-w-[720px] text-[48px] leading-[0.95] tracking-[-0.8px] md:text-[80px] md:leading-[80px]">
          Pull up a chair. You’re staying
        </h2>
        <p className="mt-4 max-w-[420px] text-[16px] font-medium">
          Come for something good and stay as long as you like.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative min-h-[420px] overflow-hidden rounded-[24px]">
            <img
              src={img("coffee-shop.avif")}
              alt="Bright coffee shop interior with wooden stools, green tile counter, pastries, and barista at espresso machine."
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#284010]/80 to-transparent p-7 text-[#e9ebdf]">
              <p className="text-[13px] font-medium opacity-80">
                {current.index}/04
              </p>
              <h3 className="mt-2 text-[40px] leading-[40px] tracking-[-0.4px]">
                {current.title}
              </h3>
              <p className="mt-3 max-w-[420px] text-[16px] font-medium">
                {current.body}
              </p>
              <div className="mt-4 flex gap-2">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#e9ebdf]/20 px-3 py-1 text-[13px] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <ol className="flex flex-col gap-2">
            {spots.map((spot) => {
              const on = spot.id === active;
              return (
                <li key={spot.id}>
                  <button
                    type="button"
                    onClick={() => setActive(spot.id)}
                    className={`flex w-full items-center gap-4 rounded-[20px] px-5 py-4 text-left transition ${
                      on
                        ? "bg-[#78bf30] text-[#284010]"
                        : "bg-[#284010]/5 hover:bg-[#284010]/10"
                    }`}
                  >
                    <span className="text-[13px] font-medium opacity-70">
                      {spot.index}
                    </span>
                    <span className="font-medium">{spot.title}</span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
