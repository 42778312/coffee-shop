import { img } from "./assets";

export function VisitSection() {
  return (
    <section
      id="visit"
      className="bg-[#284010] px-5 py-20 text-[#e9ebdf] md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <p className="font-hand text-[22px]">See you soon</p>
        <h2 className="mt-3 max-w-[720px] text-[48px] leading-[0.95] tracking-[-0.8px] md:text-[80px] md:leading-[80px]">
          Take a peek. Come on over
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <figure className="relative min-h-[320px] overflow-hidden rounded-[24px]">
            <img
              src={img("cherry-on-top.avif")}
              alt="Glass of iced chocolate drink topped with pink whipped cream and a cherry, beside a chocolate croissant on a green plate."
              className="absolute inset-0 size-full object-cover"
            />
            <figcaption className="absolute bottom-5 left-5 font-heading text-[28px] leading-none">
              Cherry on top
            </figcaption>
          </figure>
          <figure className="relative min-h-[320px] overflow-hidden rounded-[24px]">
            <img
              src={img("sweet-little-moment.avif")}
              alt="People enjoying coffee and pastries inside a cozy café with green tiled counters and wooden stools."
              className="absolute inset-0 size-full object-cover"
            />
            <figcaption className="absolute bottom-5 left-5 font-heading text-[28px] leading-none">
              Sweet little moment
            </figcaption>
          </figure>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <a
            href="https://google.com/maps"
            className="flex items-start gap-3 rounded-[24px] bg-[#e9ebdf]/10 p-6 hover:bg-[#e9ebdf]/16"
          >
            <img src={img("illustration-20.svg")} alt="" className="w-10" />
            <div>
              <p className="font-heading text-[22px] leading-none">Mello’s here</p>
              <p className="mt-2 text-[15px] font-medium">
                28 Roastery Lane, Brooklyn, NY
              </p>
            </div>
          </a>
          <a
            href="mailto:hi@mello.com"
            className="flex items-start gap-3 rounded-[24px] bg-[#e9ebdf]/10 p-6 hover:bg-[#e9ebdf]/16"
          >
            <img src={img("illustration-21.svg")} alt="" className="w-10" />
            <div>
              <p className="font-heading text-[22px] leading-none">Say hello!</p>
              <p className="mt-2 text-[15px] font-medium">hi@mello.com</p>
            </div>
          </a>
          <div className="flex items-start gap-3 rounded-[24px] bg-[#e9ebdf]/10 p-6">
            <img src={img("illustration-22.svg")} alt="" className="w-10" />
            <div>
              <p className="font-heading text-[22px] leading-none">See you soon</p>
              <p className="mt-2 text-[15px] font-medium">
                Open daily, 7AM–6PM.
              </p>
            </div>
          </div>
        </div>

        <figure className="relative mt-5 min-h-[280px] overflow-hidden rounded-[24px]">
          <img
            src={img("the-mello-trio.avif")}
            alt="Iced green matcha drink with strawberries, espresso in green cup, and cinnamon roll with icing on green shapes."
            className="absolute inset-0 size-full object-cover"
          />
          <figcaption className="absolute bottom-5 left-5 font-heading text-[28px] leading-none">
            The Mello trio
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
