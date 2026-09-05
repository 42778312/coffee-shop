import { img } from "./assets";
import { MelloButton } from "./MelloButton";
import { Reveal } from "./Reveal";

const lines = [
  { label: "Kind humans", value: "Always" },
  { label: "Great beans", value: "Daily" },
  { label: "Coffee snobbery", value: "$0.00" },
  { label: "Warm pastries", value: "Yes pls" },
];

function ReceiptCircles({ edge }: { edge: "top" | "bottom" }) {
  return (
    <div
      className={`pointer-events-none absolute inset-x-[-8px] flex items-center gap-2 ${
        edge === "top" ? "top-[-8px]" : "bottom-[-8px]"
      }`}
      aria-hidden
    >
      {Array.from({ length: 16 }, (_, i) => (
        <span
          key={i}
          className="size-4 shrink-0 rounded-full bg-[#1F3D38]"
        />
      ))}
    </div>
  );
}

export function WhatMattersSection() {
  return (
    <section className="overflow-hidden bg-[#1F3D38] px-8 py-32 text-[#FFFFFF] md:px-8 md:py-[128px] lg:px-16 lg:py-[160px]">
      <div className="mx-auto flex w-full max-w-[1328px] flex-col items-center gap-20 md:gap-[120px] lg:flex-row lg:gap-4">
        <div className="flex w-full min-w-0 flex-col items-start gap-8">
          <div className="flex w-full flex-col items-start gap-4 md:gap-6">
            <div className="flex w-full flex-col items-start gap-3 md:gap-4">
              <Reveal className="flex items-center gap-2.5 md:gap-3">
                <span className="size-2 shrink-0 rounded-full bg-[#AAD0C8]" />
                <p className="font-hand text-[18px] leading-[1.04] md:text-[21px]">
                  What matters
                </p>
              </Reveal>
              <Reveal
                as="h2"
                delay={0.08}
                className="max-w-[288px] text-[48px] leading-none tracking-[-0.01em] md:max-w-[408px] md:text-[68px] lg:max-w-[480px] lg:text-[80px]"
              >
                Things that make mornings{" "}
                <span className="text-[#AAD0C8]">feel better.</span>
              </Reveal>
            </div>
            <Reveal
              as="p"
              delay={0.14}
              className="max-w-[360px] text-[18px] font-medium leading-[1.44] tracking-[-0.01em]"
            >
              We started Mello to make specialty coffee feel less serious and a
              lot more human.
            </Reveal>
          </div>
          <Reveal
            delay={0.2}
            className="flex w-full flex-col items-stretch gap-3 max-[479px]:flex-col md:flex-row md:items-center md:justify-start"
          >
            <MelloButton href="#reviews" className="w-full max-[479px]:w-full md:w-auto">
              Read reviews
            </MelloButton>
            <MelloButton
              href="https://google.com/maps"
              variant="ghostOnDark"
              className="w-full max-[479px]:w-full md:w-auto"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </MelloButton>
          </Reveal>
        </div>

        <div className="flex w-full shrink-0 justify-center lg:w-auto">
          <Reveal
            as="div"
            variant="scaleIn"
            delay={0.15}
            className="relative w-full max-w-[360px]"
          >
            <article className="relative flex w-full flex-col gap-10 bg-white px-6 py-10 text-[#1F3D38] max-[479px]:px-6 md:px-7">
              <ReceiptCircles edge="top" />
              <ReceiptCircles edge="bottom" />

              <div className="flex w-full flex-col gap-4">
                <div className="flex items-start gap-6">
                  <div className="flex w-full flex-col items-start gap-2">
                    <a
                      href="/"
                      className="font-heading text-[40px] leading-none tracking-[-0.01em] md:text-[48px]"
                    >
                      Mello
                    </a>
                    <p className="font-hand text-[16px] leading-[1.04]">
                      Morning mood office
                    </p>
                  </div>
                  <img
                    src={img("illustration-14.svg")}
                    alt=""
                    className="w-12 shrink-0"
                  />
                </div>

                <div className="h-[3px] bg-[#1F3D38]/10" />

                <div className="flex flex-col gap-2.5">
                  {lines.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-center justify-between gap-6"
                    >
                      <p className="min-w-0 flex-1 text-[14px] font-medium leading-[1.44] tracking-[-0.01em]">
                        {row.label}
                      </p>
                      <span className="shrink-0 text-[14px] font-bold leading-none tracking-[-0.02em]">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="h-[3px] bg-[#1F3D38]/10" />

                <div className="flex items-end justify-between gap-6">
                  <p className="min-w-0 flex-1 text-[14px] font-medium leading-[1.44] tracking-[-0.01em]">
                    Total
                  </p>
                  <p className="font-heading shrink-0 text-[21px] leading-none tracking-[-0.01em] md:text-[24px]">
                    One good day
                  </p>
                </div>

                <div className="h-[3px] bg-[#1F3D38]/10" />
              </div>

              <div className="flex flex-col items-center gap-3">
                <img
                  src={img("barcode.svg")}
                  alt=""
                  className="h-10 w-full max-w-[200px] sm:h-12"
                />
                <div className="flex items-center gap-2">
                  <img
                    src={img("illustration-1.svg")}
                    alt=""
                    className="size-2.5"
                  />
                  <p className="pt-0.5 font-hand text-[16px] leading-[1.04]">
                    Thank you!
                  </p>
                </div>
              </div>
            </article>

            <img
              src={img("illustration-1b.svg")}
              alt=""
              className="receipt-1-illu pointer-events-none absolute bottom-20 left-[-160px] hidden w-20 xl:block"
            />
            <img
              src={img("illustration-1b.svg")}
              alt=""
              className="receipt-2-illu pointer-events-none absolute bottom-[130px] left-[-208px] hidden w-10 xl:block"
            />
            <img
              src={img("illustration-1b.svg")}
              alt=""
              className="receipt-3-illu pointer-events-none absolute bottom-[170px] left-[-160px] hidden w-6 xl:block"
            />
            <img
              src={img("illustration-26.svg")}
              alt=""
              className="receipt-4-illu pointer-events-none absolute top-[-48px] right-[-80px] hidden w-12 xl:block"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
