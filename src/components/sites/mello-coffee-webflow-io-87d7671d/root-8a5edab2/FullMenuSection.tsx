import { menuCategories } from "./content";

export function FullMenuSection() {
  return (
    <section id="menu" className="px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="max-w-[720px] text-[48px] leading-[0.95] tracking-[-0.8px] md:text-[80px] md:leading-[80px]">
          The complete Mello menu
        </h2>
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 md:grid-cols-2 xl:grid-cols-3">
          {menuCategories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-[28px] leading-[28px] tracking-[-0.28px]">
                {cat.title}
              </h3>
              <p className="mt-2 text-[15px] font-medium text-[#284010]/80">
                {cat.subtitle}
              </p>
              <div className="mt-6 flex justify-end gap-8 text-[13px] font-medium text-[#284010]/70">
                <span>{cat.sizeLabels[0]}</span>
                <span className="w-14 text-right">{cat.sizeLabels[1]}</span>
              </div>
              <ul className="mt-3 divide-y divide-[#284010]/15">
                {cat.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-3 py-3 text-[16px] font-medium"
                  >
                    <span>{item.name}</span>
                    <span className="flex shrink-0 gap-8 tabular-nums">
                      <span className="w-12 text-right">{item.small}</span>
                      <span className="w-14 text-right">{item.large}</span>
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
