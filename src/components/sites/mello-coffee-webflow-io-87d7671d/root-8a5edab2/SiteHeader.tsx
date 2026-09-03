import { img } from "./assets";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="flex items-center justify-center gap-6 bg-[#78bf30] px-4 py-2.5 text-[13px] font-medium text-[#284010] sm:gap-10 sm:text-[15px]">
        <span className="flex items-center gap-2">
          <img src={img("illustration-1.svg")} alt="" className="size-5" />
          <span className="hidden sm:inline">28 Roastery Lane, Brooklyn</span>
          <span className="sm:hidden">Brooklyn</span>
        </span>
        <span className="flex items-center gap-2">
          <img src={img("illustration-1.svg")} alt="" className="size-5" />
          Open daily 7AM–6PM
        </span>
        <span className="hidden items-center gap-2 md:flex">
          <img src={img("illustration-1.svg")} alt="" className="size-5" />
          Coffee, matcha & fresh bakes daily
        </span>
      </div>
      <div className="flex flex-col items-center gap-3 px-4 py-5">
        <a
          href="/"
          className="font-heading text-[40px] leading-none tracking-[-0.4px] text-[#284010]"
        >
          Mello
        </a>
        <nav className="flex items-center gap-8 text-[18px] font-medium text-[#284010]">
          <a href="#menu" className="hover:opacity-70">
            Menu
          </a>
          <a href="#place" className="hover:opacity-70">
            Place
          </a>
          <a href="#visit" className="hover:opacity-70">
            Visit
          </a>
        </nav>
      </div>
    </header>
  );
}
