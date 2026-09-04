"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { img } from "./assets";
import { timeSlots } from "./content";
import { MelloButton } from "./MelloButton";

export function CoffeeOclockSection() {
  const [active, setActive] = useState(timeSlots[0].id);
  const current = timeSlots.find((s) => s.id === active) ?? timeSlots[0];
  const [hh, mm] = current.clock.split(":");

  function activate(id: string) {
    setActive(id);
    document.getElementById(`coffee-oclock-tab-${id}`)?.focus();
  }

  return (
    <section className="px-5 py-20 md:px-8 md:py-[128px] lg:px-16 lg:py-[160px]">
      <div className="mx-auto flex w-full max-w-[1328px] flex-col gap-16 md:gap-16 lg:gap-20">
        <div className="flex flex-col gap-4 md:gap-6 lg:grid lg:grid-cols-4 lg:items-end lg:gap-4">
          <div className="flex flex-col gap-3 md:gap-4 lg:col-span-3">
            <div className="flex items-center gap-2.5 md:gap-3">
              <span className="size-2 shrink-0 rounded-full bg-[#AAD0C8]" />
              <p className="font-hand text-[18px] leading-[1.04] md:text-[21px]">
                Coffee o’clock
              </p>
            </div>
            <h2 className="max-w-[480px] text-[48px] leading-none tracking-[-0.01em] md:max-w-[408px] md:text-[68px] lg:max-w-[480px] lg:text-[80px]">
              The right cup, right on time
            </h2>
          </div>
          <p className="max-w-[264px] text-[16px] font-medium leading-[1.44] tracking-[-0.01em] md:text-[18px]">
            Start bright, slow down, or treat yourself whenever.
          </p>
        </div>

        <div className="relative flex flex-col items-center gap-[120px] md:items-end md:gap-10">
          <div className="flex w-full flex-col rounded-[24px] bg-[#1F3D38] p-[3px] text-[#FFFFFF]">
            <div
              key={current.id}
              role="tabpanel"
              id={`coffee-oclock-panel-${current.id}`}
              aria-labelledby={`coffee-oclock-tab-${current.id}`}
              className="flex w-full flex-col gap-16 px-6 pt-6 pb-2 md:pb-2 lg:gap-16"
            >
              <div className="flex gap-2.5 md:gap-3">
                <span className="font-hand text-[18px] leading-[1.04] opacity-60 md:text-[21px]">
                  {current.index}
                </span>
                <span className="font-hand text-[18px] leading-[1.04] md:text-[21px]">
                  {current.label}
                </span>
              </div>

              <div className="flex w-full flex-col-reverse gap-2 md:gap-2 lg:grid lg:grid-cols-12 lg:gap-4">
                <div className="flex text-[#AAD0C8] lg:col-span-8">
                  <span className="font-heading text-[96px] leading-none tracking-[-0.01em] md:text-[224px] lg:text-[264px]">
                    {hh}
                  </span>
                  <span className="font-heading text-[96px] leading-none text-[#FFFFFF] md:text-[224px] lg:text-[264px]">
                    :
                  </span>
                  <span className="font-heading text-[96px] leading-none tracking-[-0.01em] md:text-[224px] lg:text-[264px]">
                    {mm}
                  </span>
                </div>

                <div className="flex h-full flex-col items-start justify-center gap-8 py-0 md:flex-row md:items-center md:gap-6 lg:col-span-4 lg:flex-col lg:items-start lg:justify-between lg:gap-4 lg:py-10">
                  <img
                    src={current.illustration}
                    alt=""
                    className="w-16 md:w-[72px] lg:w-16"
                  />
                  <div className="flex flex-1 flex-col gap-1">
                    <h3 className="max-w-[240px] text-[32px] leading-none tracking-[-0.01em] md:text-[40px]">
                      {current.title}
                    </h3>
                    <p className="max-w-[264px] text-[14px] font-medium leading-[1.44] tracking-[-0.01em]">
                      {current.body}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="grid grid-cols-1 overflow-hidden rounded-b-[21px] gap-[3px] md:grid-cols-2 lg:grid-cols-4"
              role="tablist"
              aria-label="Coffee times"
            >
              {timeSlots.map((slot) => {
                const on = slot.id === active;
                return (
                  <button
                    key={slot.id}
                    type="button"
                    role="tab"
                    id={`coffee-oclock-tab-${slot.id}`}
                    aria-selected={on}
                    aria-controls={`coffee-oclock-panel-${slot.id}`}
                    tabIndex={on ? 0 : -1}
                    onClick={() => setActive(slot.id)}
                    onKeyDown={(event) => {
                      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
                        return;
                      }
                      event.preventDefault();
                      const index = timeSlots.findIndex((s) => s.id === slot.id);
                      const next =
                        event.key === "ArrowRight"
                          ? (index + 1) % timeSlots.length
                          : (index - 1 + timeSlots.length) % timeSlots.length;
                      activate(timeSlots[next].id);
                    }}
                    className={cn(
                      "flex cursor-pointer items-start justify-start gap-6 p-6 text-left transition-colors duration-300",
                      on
                        ? "bg-[#AAD0C8] text-[#1F3D38]"
                        : "bg-[#FFFFFF] text-[#1F3D38]/80 hover:text-[#1F3D38]",
                    )}
                  >
                    <span className="flex w-full flex-col gap-0.5">
                      <span className="font-hand text-[16px] leading-[1.04]">
                        {slot.clock}
                      </span>
                      <span className="font-heading text-[21px] leading-none tracking-[-0.01em] md:text-[24px]">
                        {slot.title}
                      </span>
                    </span>
                    <img
                      src={slot.tabIllustration}
                      alt=""
                      className="w-6 shrink-0"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <img
            src={img("time-arrow.svg")}
            alt=""
            className="pointer-events-none absolute bottom-[100px] left-1/2 w-20 -translate-x-1/2 rotate-[60deg] md:bottom-6 md:left-auto md:right-[222px] md:w-24 md:translate-x-0 md:rotate-[15deg]"
          />

          <div className="flex w-full flex-col md:w-auto">
            <MelloButton href="#menu" className="w-full md:w-auto">
              Explore the menu
            </MelloButton>
          </div>
        </div>
      </div>
    </section>
  );
}
