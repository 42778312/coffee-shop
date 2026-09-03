"use client";

import { useState } from "react";
import { img } from "./assets";
import { reviews } from "./content";

export function ReviewsSection() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  return (
    <section id="reviews" className="px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[900px] text-center">
        <p className="mx-auto max-w-[640px] text-[22px] font-medium leading-snug md:text-[28px]">
          Come for the great coffee, stay for the perfect playlist and those
          cinnamon buns you’ll keep thinking about.
        </p>

        <div className="relative mt-14 rounded-[24px] bg-[#284010] px-8 py-12 text-[#e9ebdf] md:px-16">
          <img
            src={img("illustration-18.svg")}
            alt=""
            className="mx-auto mb-4 h-8"
          />
          <p className="font-heading text-[56px] leading-none">{review.rating}</p>
          <p className="mt-6 text-[22px] font-medium leading-snug md:text-[28px]">
            {review.quote}
          </p>
          <p className="mt-6 text-[16px] font-medium opacity-80">{review.name}</p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() =>
                setIndex((i) => (i === 0 ? reviews.length - 1 : i - 1))
              }
              className="flex size-12 items-center justify-center rounded-full bg-[#e9ebdf]/15 hover:bg-[#e9ebdf]/25"
            >
              <img src={img("arrow-left.svg")} alt="" className="h-5" />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={() => setIndex((i) => (i + 1) % reviews.length)}
              className="flex size-12 items-center justify-center rounded-full bg-[#e9ebdf]/15 hover:bg-[#e9ebdf]/25"
            >
              <img src={img("arrow-right.svg")} alt="" className="h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
