"use client";

import { useState } from "react";
import { img } from "./assets";
import { timeSlots } from "./content";
import { MelloButton } from "./MelloButton";

export function CoffeeOclockSection() {
  const [active, setActive] = useState(timeSlots[0].id);
  const current = timeSlots.find((s) => s.id === active) ?? timeSlots[0];
  const [hh, mm] = current.clock.split(":");

  return (
    <section className="px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <p className="font-hand text-[22px]">Coffee o’clock</p>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[720px] text-[48px] leading-[0.95] tracking-[-0.8px] md:text-[80px] md:leading-[80px]">
            The right cup, right on time
          </h2>
          <p className="max-w-[280px] text-[16px] font-medium">
            Start bright, slow down, or treat yourself whenever.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <ol className="space-y-2">
            {timeSlots.map((slot) => {
              const on = slot.id === active;
              return (
                <li key={slot.id}>
                  <button
                    type="button"
                    onClick={() => setActive(slot.id)}
                    className={`flex w-full items-center justify-between rounded-[20px] px-5 py-4 text-left transition ${
                      on
                        ? "bg-[#78bf30] text-[#284010]"
                        : "hover:bg-[#284010]/5"
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[13px] font-medium opacity-70">
                        {slot.index}
                      </span>
                      <span className="font-medium">{slot.label}</span>
                    </span>
                    <span className="font-heading text-[22px] leading-none tracking-[-0.2px]">
                      {slot.clock.replace(":", " : ")}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="rounded-[24px] bg-[#284010] p-8 text-[#e9ebdf] md:p-10">
            <div className="flex items-start justify-between gap-4">
              <p className="font-heading text-[72px] leading-none tracking-[-0.8px] md:text-[96px]">
                {hh}
                <span className="px-1">:</span>
                {mm}
              </p>
              <img src={img("illustration-11.svg")} alt="" className="w-14" />
            </div>
            <h3 className="mt-8 text-[40px] leading-[40px] tracking-[-0.4px]">
              {current.title}
            </h3>
            <p className="mt-4 max-w-[420px] text-[16px] font-medium text-[#e9ebdf]/85">
              {current.body}
            </p>
          </div>
        </div>

        <div className="mt-10">
          <MelloButton href="#menu">Explore the menu</MelloButton>
        </div>
      </div>
    </section>
  );
}
