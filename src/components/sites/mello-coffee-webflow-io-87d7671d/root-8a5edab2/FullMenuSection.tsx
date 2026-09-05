import { img } from "./assets";
import { menuCategories } from "./content";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function FullMenuSection() {
  return (
    <section id="menu" className="bg-[#AAD0C8]/25 px-8 py-32 md:px-10 md:py-[128px] lg:py-[160px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <Reveal variant="scaleIn" as="div">
            <img
              src={img("illustration-12.svg")}
              alt=""
              className="w-16 md:w-24 lg:w-[120px]"
            />
          </Reveal>
          <Reveal
            as="h2"
            delay={0.08}
            className="max-w-[288px] text-center text-[48px] leading-none tracking-[-0.01em] md:max-w-[408px] md:text-[68px] lg:max-w-[480px] lg:text-[80px]"
          >
            The complete Mello menu
          </Reveal>
        </div>

        <RevealGroup
          stagger={0.1}
          className="mt-16 grid grid-cols-1 gap-16 md:mt-20 md:grid-cols-2 md:gap-x-10 md:gap-y-16 lg:mt-[120px] lg:gap-x-[120px] lg:gap-y-20"
        >
          {menuCategories.map((cat) => (
            <RevealItem key={cat.title} as="div" className="flex min-w-0 flex-col gap-4">
              <div className="flex flex-col gap-1.5 border-b-[3px] border-[#1F3D38]/10 pb-4">
                <h3 className="text-[24px] leading-none tracking-[-0.01em] md:text-[28px]">
                  {cat.title}
                </h3>
                <div className="flex items-start gap-3 sm:items-center sm:gap-6">
                  <p className="min-w-0 flex-1 text-[14px] font-medium leading-[1.44] tracking-[-0.01em]">
                    {cat.subtitle}
                  </p>
                  <div className="flex shrink-0 gap-4 sm:gap-6">
                    {cat.sizeLabels.map((label) => (
                      <span
                        key={label}
                        className="w-11 text-right text-[13px] font-medium leading-[1.44] tracking-[-0.01em] text-[#1F3D38]/80 sm:w-[52px] sm:text-[14px]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <ul className="flex flex-col gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex min-w-0 items-center gap-3 font-medium tracking-[-0.01em] transition-colors duration-200 hover:text-[#1F3D38]/70 sm:gap-6"
                  >
                    <span className="min-w-0 flex-1 text-[16px] leading-[1.44] sm:text-[18px]">
                      {item.name}
                    </span>
                    <span className="flex shrink-0 gap-4 tabular-nums sm:gap-6">
                      <span className="w-11 text-right text-[13px] leading-[1.44] sm:w-[52px] sm:text-[14px]">
                        {item.small}
                      </span>
                      <span className="w-11 text-right text-[13px] leading-[1.44] sm:w-[52px] sm:text-[14px]">
                        {item.large}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
