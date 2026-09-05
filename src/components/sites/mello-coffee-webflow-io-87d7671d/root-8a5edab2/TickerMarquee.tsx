import { img } from "./assets";
import { tickerItems } from "./content";

export function TickerMarquee({ inverted = false }: { inverted?: boolean }) {
  const items = [...tickerItems, ...tickerItems, ...tickerItems];
  return (
    <div
      className={`overflow-hidden ${
        inverted
          ? "bg-[#1F3D38] text-[#AAD0C8]"
          : "bg-[#AAD0C8] text-[#1F3D38]"
      }`}
    >
      <div className="mello-marquee-track flex w-max items-center gap-6 py-4 pr-6 sm:py-6">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-6">
            <img
              src={img("illustration-1.svg")}
              alt=""
              className="size-5 shrink-0"
            />
            <span className="font-heading text-[24px] leading-6 tracking-[-0.24px] whitespace-nowrap">
              {item}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
