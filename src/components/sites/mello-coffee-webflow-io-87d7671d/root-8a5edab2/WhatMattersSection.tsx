import { img } from "./assets";
import { MelloButton } from "./MelloButton";

const lines = [
  { label: "Kind humans", value: "Always" },
  { label: "Great beans", value: "Daily" },
  { label: "Coffee snobbery", value: "$0.00" },
  { label: "Warm pastries", value: "Yes pls" },
];

export function WhatMattersSection() {
  return (
    <section className="bg-[#284010] px-5 py-20 text-[#e9ebdf] md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-hand text-[22px]">What matters</p>
          <h2 className="mt-3 text-[48px] leading-[0.95] tracking-[-0.8px] md:text-[72px] md:leading-[72px]">
            Things that make mornings feel better.
          </h2>
          <p className="mt-5 max-w-[460px] text-[16px] font-medium text-[#e9ebdf]/85">
            We started Mello to make specialty coffee feel less serious and a
            lot more human.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MelloButton href="#reviews">Read reviews</MelloButton>
            <MelloButton href="https://google.com/maps" variant="ghostOnDark">
              Get directions
            </MelloButton>
          </div>
        </div>

        <article className="relative overflow-hidden rounded-[24px] bg-[#e9ebdf] p-7 text-[#284010]">
          <div className="flex items-center justify-between">
            <span className="font-heading text-[32px] leading-none">Mello</span>
            <span className="text-[13px] font-medium">Morning mood office</span>
          </div>
          <ul className="mt-8 space-y-3 text-[16px] font-medium">
            {lines.map((row) => (
              <li
                key={row.label}
                className="flex items-baseline justify-between border-b border-[#284010]/15 pb-3"
              >
                <span>{row.label}</span>
                <span>{row.value}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-end justify-between">
            <div>
              <p className="text-[13px] font-medium opacity-70">Total</p>
              <p className="font-heading text-[28px] leading-none">
                One good day
              </p>
            </div>
            <p className="font-hand text-[22px]">Thank you!</p>
          </div>
          <img
            src={img("barcode.svg")}
            alt=""
            className="mt-6 h-12 w-full object-contain object-left"
          />
          <img
            src={img("illustration-14.svg")}
            alt=""
            className="absolute -right-2 -top-2 w-16"
          />
        </article>
      </div>
    </section>
  );
}
