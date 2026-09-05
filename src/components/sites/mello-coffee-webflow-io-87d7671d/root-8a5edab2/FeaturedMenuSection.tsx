import { featuredItems } from "./content";
import { Reveal, RevealGroup, RevealItem, hoverLift } from "./Reveal";
import { SplitHeading } from "./SplitHeading";
import type { FeaturedItem } from "@/types/mello";

function Pill({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-[#FFFFFF]/20 px-3 py-1 text-[13px] font-medium text-[#FFFFFF]">
      {children}
    </span>
  );
}

function PhotoCard({ item }: { item: FeaturedItem }) {
  const tall = item.variant === "photo-tall";
  return (
    <article
      className={`relative overflow-hidden rounded-[24px] border-[3px] border-[#1F3D38] p-6 text-[#FFFFFF] md:p-7 ${
        tall
          ? "aspect-[3/4] lg:aspect-auto lg:min-h-[608px]"
          : "aspect-[3/4] md:aspect-square lg:aspect-auto lg:min-h-[315px]"
      }`}
    >
      <img
        src={item.image}
        alt={item.imageAlt ?? ""}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1F3D38]/25" />
      <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="absolute top-6 left-6 flex flex-wrap gap-2 pr-24 md:top-7 md:left-7">
          <Pill>{item.tags[0]}</Pill>
          <Pill>{item.tags[1]}</Pill>
        </div>
        <div className="min-w-0">
          <h3 className="text-[32px] leading-none tracking-[-0.4px] md:text-[40px] md:leading-[40px]">
            {item.title}
          </h3>
          <p className="mt-2 max-w-[280px] text-[14px] font-medium md:text-[16px]">
            {item.description}
          </p>
          <div className="mt-4 flex items-end justify-between gap-3">
            <span className="font-heading text-[24px] leading-none md:text-[28px]">
              {item.price}
            </span>
            <span className="rounded-full bg-[#FFFFFF]/20 px-3 py-1 text-[14px] font-medium">
              {item.size}
            </span>
          </div>
        </div>
        {item.badge === "Favorite" ? (
          <span className="absolute top-6 right-6 rounded-full bg-[#AAD0C8] px-3 py-1 text-[13px] font-medium text-[#1F3D38] md:top-7 md:right-7">
            Favorite
          </span>
        ) : null}
      </div>
    </article>
  );
}

function ColorCard({ item }: { item: FeaturedItem }) {
  const lime = item.variant === "lime";
  return (
    <article
      className={`relative flex min-h-[240px] flex-col overflow-hidden rounded-[24px] border-[3px] border-[#1F3D38] p-6 md:min-h-[277px] md:p-7 ${
        lime ? "bg-[#AAD0C8] text-[#1F3D38]" : "bg-[#1F3D38] text-[#FFFFFF]"
      }`}
    >
      {item.badge ? (
        <p className="font-hand text-[18px] leading-[1.1] whitespace-pre-line md:text-[22px]">
          {item.badge.replace(" ", "\n")}
        </p>
      ) : null}
      <div className="mt-3 flex gap-2">
        <span className="rounded-full bg-black/10 px-3 py-1 text-[13px] font-medium">
          {item.tags[0]}
        </span>
        <span className="rounded-full bg-black/10 px-3 py-1 text-[13px] font-medium">
          {item.tags[1]}
        </span>
      </div>
      <div className="mt-auto">
        <h3 className="max-w-[320px] text-[28px] leading-[28px] tracking-[-0.28px] md:text-[32px] md:leading-none">
          {item.title}
        </h3>
        <p className="mt-2 text-[14px] font-medium md:text-[16px]">
          {item.description}
        </p>
        <div className="mt-4 flex items-end justify-between">
          <span className="font-heading text-[28px] leading-none">
            {item.price}
          </span>
          <span className="text-[14px] font-medium">{item.size}</span>
        </div>
      </div>
      {item.illustration ? (
        <img
          src={item.illustration}
          alt=""
          className="pointer-events-none absolute right-4 bottom-4 w-[56px] opacity-90 md:w-[67px]"
        />
      ) : null}
    </article>
  );
}

export function FeaturedMenuSection() {
  const [tall, wide, lime, forest] = featuredItems;
  return (
    <section className="bg-white px-8 py-32 md:px-16 md:py-32 lg:py-40">
      <div className="mx-auto max-w-[1180px]">
        <Reveal as="p" className="font-hand text-[18px] text-[#1F3D38] md:text-[22px]">
          Coffee this way
        </Reveal>
        <div className="mt-3 flex flex-col gap-4 lg:mt-4 lg:flex-row lg:items-end lg:justify-between">
          <SplitHeading
            as="h2"
            delay={0.05}
            segments={["Choose your cup of happy"]}
            className="max-w-[288px] text-[48px] leading-none tracking-[-0.02em] md:max-w-[408px] md:text-[68px] lg:max-w-[640px] lg:text-[80px] lg:leading-[80px]"
          />
          <Reveal
            as="p"
            delay={0.1}
            className="max-w-[280px] text-[16px] font-medium md:text-[18px]"
          >
            Hot, iced, bold, or sweet – there’s a happy cup waiting.
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.12}
          className="mt-16 flex flex-col gap-4 lg:mt-20 lg:grid lg:grid-cols-[1.05fr_1fr] lg:gap-4"
        >
          {tall ? (
            <RevealItem variant="scaleIn" {...hoverLift}>
              <PhotoCard item={tall} />
            </RevealItem>
          ) : null}
          <div className="flex flex-col gap-4">
            {wide ? (
              <RevealItem variant="scaleIn" {...hoverLift}>
                <PhotoCard item={wide} />
              </RevealItem>
            ) : null}
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
              {lime ? (
                <RevealItem variant="scaleIn" {...hoverLift}>
                  <ColorCard item={lime} />
                </RevealItem>
              ) : null}
              {forest ? (
                <RevealItem variant="scaleIn" {...hoverLift}>
                  <ColorCard item={forest} />
                </RevealItem>
              ) : null}
            </div>
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
