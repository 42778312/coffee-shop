import { img } from "./assets";
import { cn } from "@/lib/utils";

function PhotoCard({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-[24px] bg-[#FFFFFF] p-3 text-[#1F3D38]">
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-[12px]">
        <img src={src} alt={alt} className="absolute inset-0 size-full object-cover" />
      </div>
      <div className="px-4 pt-2.5 pb-3">
        <p className="font-hand text-[18px] leading-[1.04] md:text-[21px]">{caption}</p>
      </div>
    </div>
  );
}

function HoverIllu({
  def,
  abs,
  widthClass,
}: {
  def: string;
  abs: string;
  widthClass: string;
}) {
  return (
    <div className="relative flex items-center justify-center">
      <img
        src={def}
        alt=""
        className={cn("visit-illu-default relative z-[1]", widthClass)}
      />
      <img
        src={abs}
        alt=""
        className={cn("visit-illu-abs absolute", widthClass)}
      />
    </div>
  );
}

export function VisitSection() {
  return (
    <section
      id="visit"
      className="relative overflow-hidden bg-[#1F3D38] py-[160px] text-[#FFFFFF] md:py-[200px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-[-56px] left-[-5px] h-[88px] w-[101%] -rotate-[2deg] bg-[#AAD0C8]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-56px] left-[-5px] h-[88px] w-[101%] rotate-[2deg] bg-[#AAD0C8]"
      />

      <div className="relative mx-auto flex w-full max-w-[1328px] flex-col gap-20 px-8 md:px-16">
        <div className="relative flex flex-col items-center gap-3 md:gap-4">
          <div className="flex items-center gap-2.5 md:gap-3">
            <span className="size-2 shrink-0 rounded-full bg-[#AAD0C8]" />
            <p className="font-hand text-[18px] leading-[1.04] md:text-[21px]">
              See you soon
            </p>
          </div>
          <h2 className="max-w-[288px] text-center text-[48px] leading-none tracking-[-0.01em] md:max-[991px]:max-w-[408px] md:max-[991px]:text-[68px] min-[992px]:max-w-[480px] min-[992px]:text-[80px]">
            Take a peek. Come on over
          </h2>
          <img
            src={img("illustration-23.svg")}
            alt=""
            className="visit-section-1 pointer-events-none absolute top-2 left-5 w-[29px] min-[480px]:top-4 min-[480px]:left-[154px] min-[992px]:left-[378px]"
          />
          <img
            src={img("illustration-24.svg")}
            alt=""
            className="visit-section-2 pointer-events-none absolute right-[100px] -bottom-6 hidden w-[41px] min-[480px]:block min-[992px]:right-[320px]"
          />
        </div>

        <div className="flex flex-col-reverse gap-4 md:max-[991px]:grid md:max-[991px]:grid-cols-2 min-[992px]:grid min-[992px]:h-[600px] min-[992px]:grid-cols-12">
          <div className="h-[480px] md:max-[991px]:col-start-1 md:max-[991px]:row-start-1 min-[992px]:col-span-4 min-[992px]:h-auto">
            <PhotoCard
              src={img("cherry-on-top.avif")}
              alt="Glass of iced chocolate drink topped with pink whipped cream and a cherry, beside a chocolate croissant on a green plate."
              caption="Cherry on top"
            />
          </div>

          <div className="flex flex-col-reverse gap-4 md:max-[991px]:col-span-2 md:max-[991px]:grid md:max-[991px]:grid-cols-2 min-[992px]:col-span-5 min-[992px]:flex min-[992px]:flex-col">
            <div className="h-[360px] md:max-[991px]:col-start-2 md:max-[991px]:row-start-1 md:max-[991px]:h-full min-[992px]:h-auto min-[992px]:flex-1">
              <PhotoCard
                src={img("sweet-little-moment.avif")}
                alt="People enjoying coffee and pastries inside a cozy café with green tiled counters and wooden stools."
                caption="Sweet little moment"
              />
            </div>

            <div className="flex flex-col gap-4 md:max-[991px]:col-start-1 md:max-[991px]:row-start-1 min-[992px]:flex-row">
              <a
                href="https://google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="visit-contact flex flex-1 items-start gap-6 rounded-[24px] border-[3px] border-[#AAD0C8] bg-[#AAD0C8] p-6 text-[#1F3D38] md:p-7"
              >
                <div className="flex h-full min-w-0 flex-1 flex-col gap-20">
                  <p className="font-hand text-[16px] leading-[1.04]">
                    Mello’s here
                  </p>
                  <h3 className="max-w-[224px] text-[24px] leading-none tracking-[-0.01em] md:text-[28px]">
                    28 Roastery Lane, Brooklyn, NY
                  </h3>
                </div>
                <HoverIllu
                  def={img("illustration-20.svg")}
                  abs={img("illustration-20b.svg")}
                  widthClass="w-14"
                />
              </a>

              <a
                href="mailto:hi@mello.com?subject=Support"
                className="visit-contact relative flex flex-row-reverse items-center justify-center gap-6 rounded-[24px] border-[3px] border-[#AAD0C8] bg-[#AAD0C8] px-6 py-7 text-[#1F3D38] min-[992px]:w-[88px] min-[992px]:shrink-0 min-[992px]:flex-col min-[992px]:px-6"
              >
                <HoverIllu
                  def={img("illustration-21.svg")}
                  abs={img("illustration-21b.svg")}
                  widthClass="w-7"
                />
                <h3 className="flex-1 text-[24px] leading-none tracking-[-0.01em] md:text-[28px] min-[992px]:absolute min-[992px]:bottom-[60px] min-[992px]:w-[130%] min-[992px]:flex-none min-[992px]:-rotate-90">
                  Say hello!
                </h3>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:max-[991px]:col-start-2 md:max-[991px]:row-start-1 min-[992px]:col-span-3">
            <div className="flex items-start gap-6 rounded-[24px] bg-[#FFFFFF] p-7 text-[#1F3D38]">
              <div className="flex flex-1 flex-col gap-1">
                <p className="font-hand text-[16px] leading-[1.04]">
                  See you soon
                </p>
                <h3 className="text-[24px] leading-none tracking-[-0.01em] whitespace-pre-line md:text-[28px]">
                  {"Open daily,\n7AM–6PM."}
                </h3>
              </div>
              <img
                src={img("illustration-22.svg")}
                alt=""
                className="w-10 shrink-0"
              />
            </div>
            <div className="h-[360px] md:min-h-0 md:flex-1">
              <PhotoCard
                src={img("the-mello-trio.avif")}
                alt="Iced green matcha drink with strawberries, espresso in green cup, and cinnamon roll with icing on green shapes."
                caption="The Mello trio"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
