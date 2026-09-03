import { img } from "./assets";
import { MelloButton } from "./MelloButton";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pt-[200px] md:px-10">
      <img
        src={img("illustration-4.svg")}
        alt=""
        className="hero-1-illu pointer-events-none absolute top-[110px] left-[40px] hidden w-[167px] md:block"
      />
      <img
        src={img("illustration-5.svg")}
        alt=""
        className="hero-2-illu pointer-events-none absolute top-[170px] right-[40px] hidden w-[195px] md:block"
      />

      <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center text-center">
        <h1 className="max-w-[720px] text-[56px] leading-[0.95] tracking-[-1.04px] text-[#284010] md:text-[104px] md:leading-[104px]">
          A brighter kind
          <br />
          of coffee break
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <MelloButton href="#menu">Explore the menu</MelloButton>
          <MelloButton href="https://google.com/maps" variant="ghost">
            Get directions
          </MelloButton>
        </div>
      </div>

      <div className="relative mx-auto mt-6 h-[520px] max-w-[1200px] overflow-hidden md:h-[640px]">
        <img
          src={img("cold-matcha.avif")}
          alt="Clear glass filled with iced green matcha tea, condensation on glass surface."
          className="absolute inset-x-0 top-0 h-[900px] w-full object-cover object-[center_20%]"
        />

        <div className="absolute top-4 left-0 z-10 flex max-w-[180px] flex-col gap-3 border-l-[2.67px] border-[#78bf30] pl-4 md:top-8 md:left-0">
          <div className="flex flex-col gap-0.5">
            <p className="font-heading text-[24px] leading-6 tracking-[-0.24px] text-[#284010]">
              Cold matcha
            </p>
            <div className="flex items-center gap-1.5 text-[14px] font-medium leading-[20px] text-[#284010]">
              <span>Matcha</span>
              <span className="h-3 w-px bg-[#284010]/40" />
              <span>Plenty of ice</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-bold leading-none text-[#284010]">
              $6.00
            </span>
            <span className="rounded-[6px] bg-[#284010]/10 px-1 py-px text-[10px] font-medium leading-[14px] text-[#284010]">
              16 oz
            </span>
          </div>
        </div>

        <img
          src={img("illustration-2.svg")}
          alt=""
          className="pointer-events-none absolute top-10 left-[190px] hidden w-[93px] rotate-[10deg] md:block"
        />

        <div className="absolute top-12 right-2 z-10 hidden rotate-[10deg] items-center gap-2.5 md:flex lg:right-8">
          <img
            src={img("illustration-3.svg")}
            alt=""
            className="size-[51px] shrink-0 -rotate-[10deg]"
          />
          <p className="font-hand text-[21px] leading-[22px] text-[#284010]">
            100% pure
            <br />
            green energy
          </p>
        </div>
      </div>
    </section>
  );
}
