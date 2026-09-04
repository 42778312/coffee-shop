"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { img } from "./assets";
import { spots } from "./content";

const hotspotClass = [
  "bottom-5 left-[30px] md:bottom-[50px] md:left-10 min-[992px]:bottom-20 min-[992px]:left-10",
  "bottom-[100px] left-[30px] md:bottom-[124px] md:left-auto md:right-[300px] min-[992px]:bottom-[174px] min-[992px]:right-[360px]",
  "bottom-[60px] left-[200px] md:bottom-[180px] md:left-[60px] min-[992px]:bottom-[230px] min-[992px]:left-10",
  "top-[120px] left-[110px] md:top-[212px] md:left-[184px] min-[992px]:top-[280px] min-[992px]:left-[200px]",
] as const;

export function PlaceSection() {
  const [active, setActive] = useState(spots[0].id);
  const current = spots.find((s) => s.id === active) ?? spots[0];

  function activate(id: string) {
    setActive(id);
    document.getElementById(`place-tab-${id}`)?.focus();
  }

  return (
    <section
      id="place"
      className="px-5 py-20 md:px-8 md:py-[128px] lg:px-16 lg:py-[160px]"
    >
      <div className="mx-auto flex w-full max-w-[1328px] flex-col gap-20">
        <div className="flex flex-col gap-4 md:gap-6 min-[992px]:grid min-[992px]:grid-cols-4 min-[992px]:items-end min-[992px]:gap-4">
          <div className="flex flex-col gap-3 md:gap-4 min-[992px]:col-span-3">
            <div className="flex items-center gap-2.5 md:gap-3">
              <span className="size-2 shrink-0 rounded-full bg-[#AAD0C8]" />
              <p className="font-hand text-[18px] leading-[1.04] md:text-[21px]">
                Take a seat
              </p>
            </div>
            <h2 className="max-w-[288px] text-[48px] leading-none tracking-[-0.01em] md:max-w-[408px] md:text-[68px] min-[992px]:max-w-[480px] min-[992px]:text-[80px]">
              Pull up a chair. You’re staying
            </h2>
          </div>
          <p className="max-w-[264px] text-[18px] font-medium leading-[1.44] tracking-[-0.01em]">
            Come for something good and stay as long as you like.
          </p>
        </div>

        <div className="flex flex-col-reverse overflow-hidden rounded-[24px] border-[3px] border-[#1F3D38] bg-[#AAD0C8] min-[992px]:grid min-[992px]:h-[670px] min-[992px]:grid-cols-3">
          <div className="relative aspect-[4/3] overflow-hidden min-[992px]:col-span-2 min-[992px]:aspect-auto min-[992px]:h-full">
            <img
              src={img("coffee-shop.avif")}
              alt="Bright coffee shop interior with wooden stools, green tile counter, pastries, and barista at espresso machine."
              className="absolute inset-0 size-full object-cover"
            />
            {spots.map((spot, index) => {
              const on = spot.id === active;
              return (
                <button
                  key={spot.id}
                  type="button"
                  aria-label={`${spot.index} ${spot.title}`}
                  aria-pressed={on}
                  onClick={() => activate(spot.id)}
                  className={cn(
                    "absolute z-[1] flex cursor-pointer items-center justify-center rounded-full border-0 bg-[#FFFFFF]/20 text-[#1F3D38]",
                    on && "p-1 md:p-1.5",
                    hotspotClass[index],
                  )}
                >
                  <span
                    className={cn(
                      "flex size-10 items-center justify-center overflow-hidden rounded-full border-[3px] border-[#FFFFFF] text-[14px] leading-none font-bold tracking-[-0.02em] md:size-12",
                      on ? "bg-[#AAD0C8]" : "bg-[#FFFFFF]",
                    )}
                  >
                    {spot.index}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex flex-col min-[992px]:h-full">
            <div
              key={current.id}
              role="tabpanel"
              id={`place-panel-${current.id}`}
              aria-labelledby={`place-tab-${current.id}`}
              className="flex h-[360px] flex-col justify-between p-7 min-[480px]:h-[296px] min-[992px]:h-[400px]"
            >
              <p className="font-hand text-[16px] leading-[1.04] text-[#1F3D38]/80">
                {current.index}/04
              </p>
              <div className="flex w-full flex-col gap-8 min-[480px]:flex-row-reverse min-[480px]:items-start min-[992px]:flex-col">
                <img
                  src={current.illustration}
                  alt=""
                  className="w-16 shrink-0"
                />
                <div className="flex min-w-0 flex-1 flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <h3 className="max-w-[192px] text-[32px] leading-none tracking-[-0.01em] md:max-w-[240px] md:text-[40px]">
                      {current.title}
                    </h3>
                    <p className="max-w-[264px] text-[14px] font-medium leading-[1.44] tracking-[-0.01em]">
                      {current.body}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-hand text-[16px] leading-[1.04]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="flex flex-col min-[992px]:mt-auto"
              role="tablist"
              aria-label="Seating spots"
            >
              {spots.map((spot, index) => {
                const on = spot.id === active;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    role="tab"
                    id={`place-tab-${spot.id}`}
                    aria-selected={on}
                    aria-controls={`place-panel-${spot.id}`}
                    tabIndex={on ? 0 : -1}
                    onClick={() => setActive(spot.id)}
                    onKeyDown={(event) => {
                      if (
                        event.key !== "ArrowDown" &&
                        event.key !== "ArrowUp" &&
                        event.key !== "ArrowRight" &&
                        event.key !== "ArrowLeft"
                      ) {
                        return;
                      }
                      event.preventDefault();
                      const next =
                        event.key === "ArrowDown" || event.key === "ArrowRight"
                          ? (index + 1) % spots.length
                          : (index - 1 + spots.length) % spots.length;
                      activate(spots[next].id);
                    }}
                    className={cn(
                      "flex cursor-pointer items-center gap-3 border-t-[3px] border-[#1F3D38]/10 px-7 py-5 text-left transition-colors duration-300",
                      on
                        ? "bg-[#1F3D38] text-[#FFFFFF]"
                        : "bg-transparent text-[#1F3D38]/80 hover:text-[#1F3D38]",
                    )}
                  >
                    <span className="font-hand shrink-0 text-[16px] leading-[1.04]">
                      {spot.index}
                    </span>
                    <span className="font-heading text-[21px] leading-none tracking-[-0.01em] md:text-[24px]">
                      {spot.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
