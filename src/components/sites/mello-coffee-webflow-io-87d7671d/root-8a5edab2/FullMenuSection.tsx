import { img } from "./assets";
import { menuCategories } from "./content";

export function FullMenuSection() {
  return (
    <section id="menu" className="px-5 py-[80px] md:px-10 md:py-[128px] lg:py-[160px]">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          <img
            src={img("illustration-12.svg")}
            alt=""
            className="w-16 md:w-24 lg:w-[120px]"
          />
          <h2 className="max-w-[288px] text-center text-[48px] leading-none tracking-[-0.01em] md:max-w-[408px] md:text-[68px] lg:max-w-[480px] lg:text-[80px]">
            The complete Mello menu
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-16 lg:mt-[120px] lg:gap-x-[120px] lg:gap-y-20">
          {menuCategories.map((cat) => (
            <div key={cat.title} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5 border-b-[3px] border-[#284010]/10 pb-4">
                <h3 className="text-[24px] leading-none tracking-[-0.01em] md:text-[28px]">
                  {cat.title}
                </h3>
                <div className="flex items-center gap-6">
                  <p className="min-w-0 flex-1 text-[14px] font-medium leading-[1.44] tracking-[-0.01em]">
                    {cat.subtitle}
                  </p>
                  <div className="flex shrink-0 gap-6">
                    {cat.sizeLabels.map((label) => (
                      <span
                        key={label}
                        className="w-[52px] text-right text-[14px] font-medium leading-[1.44] tracking-[-0.01em] text-[#284010]/80"
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
                    className="flex items-center gap-6 font-medium tracking-[-0.01em]"
                  >
                    <span className="min-w-0 flex-1 text-[18px] leading-[1.44]">
                      {item.name}
                    </span>
                    <span className="flex shrink-0 gap-6 tabular-nums">
                      <span className="w-[52px] text-right text-[14px] leading-[1.44]">
                        {item.small}
                      </span>
                      <span className="w-[52px] text-right text-[14px] leading-[1.44]">
                        {item.large}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
