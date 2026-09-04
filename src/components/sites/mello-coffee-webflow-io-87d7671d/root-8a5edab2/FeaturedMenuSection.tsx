import { featuredItems } from "./content";
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
      className={`relative overflow-hidden rounded-[24px] p-7 text-[#FFFFFF] ${
        tall ? "min-h-[608px]" : "min-h-[315px]"
      }`}
    >
      <img
        src={item.image}
        alt={item.imageAlt ?? ""}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-[#1F3D38]/25" />
      <div className="relative z-10 flex h-full min-h-[inherit] flex-col">
        <div className="flex gap-2">
          <Pill>{item.tags[0]}</Pill>
          <Pill>{item.tags[1]}</Pill>
        </div>
        <div className="mt-auto">
          <h3 className="text-[40px] leading-[40px] tracking-[-0.4px]">
            {item.title}
          </h3>
          <p className="mt-2 max-w-[280px] text-[16px] font-medium">
            {item.description}
          </p>
          <div className="mt-4 flex items-end justify-between">
            <span className="font-heading text-[28px] leading-none">
              {item.price}
            </span>
            <span className="rounded-full bg-[#FFFFFF]/20 px-3 py-1 text-[14px] font-medium">
              {item.size}
            </span>
          </div>
        </div>
        {item.badge === "Favorite" ? (
          <span className="absolute top-7 right-7 rounded-full bg-[#AAD0C8] px-3 py-1 text-[13px] font-medium text-[#1F3D38]">
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
      className={`relative flex min-h-[277px] flex-col rounded-[24px] p-7 ${
        lime ? "bg-[#AAD0C8] text-[#1F3D38]" : "bg-[#1F3D38] text-[#FFFFFF]"
      }`}
    >
      {item.badge ? (
        <p className="font-hand text-[22px] leading-[1.1] whitespace-pre-line">
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
        <h3 className="text-[28px] leading-[28px] tracking-[-0.28px]">
          {item.title}
        </h3>
        <p className="mt-2 text-[15px] font-medium">{item.description}</p>
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
          className="pointer-events-none absolute right-4 bottom-4 w-[67px] opacity-90"
        />
      ) : null}
    </article>
  );
}

export function FeaturedMenuSection() {
  const [tall, wide, lime, forest] = featuredItems;
  return (
    <section className="bg-white px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <p className="font-hand text-[22px] text-[#1F3D38]">Coffee this way</p>
        <div className="mt-3 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[640px] text-[48px] leading-[0.95] tracking-[-0.8px] md:text-[80px] md:leading-[80px]">
            Choose your cup of happy
          </h2>
          <p className="max-w-[280px] text-[16px] font-medium">
            Hot, iced, bold, or sweet – there’s a happy cup waiting.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-[1.05fr_1fr]">
          {tall ? <PhotoCard item={tall} /> : null}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {wide ? (
              <div className="sm:col-span-2">
                <PhotoCard item={wide} />
              </div>
            ) : null}
            {lime ? <ColorCard item={lime} /> : null}
            {forest ? <ColorCard item={forest} /> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
