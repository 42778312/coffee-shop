import { img } from "./assets";
import { Reveal } from "./Reveal";

export function SiteFooter() {
  return (
    <footer className="bg-[#AAD0C8] px-5 py-12 text-[#1F3D38] md:px-10">
      <Reveal
        as="div"
        className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[1.2fr_2fr]"
      >
        <div>
          <div className="flex items-center gap-3">
            <span className="font-heading text-[40px] leading-none">Mello</span>
            <img src={img("illustration-25.svg")} alt="" className="h-8" />
          </div>
          <p className="mt-3 text-[15px] font-medium">Open daily 7AM–6PM</p>
          <p className="mt-8 text-[13px] font-medium opacity-70">
            © 2026. All rights reserved
          </p>
          <div className="mt-2 flex gap-4 text-[13px] font-medium">
            <a href="https://mello-coffee.webflow.io/licenses" className="underline">
              Licenses
            </a>
            <a href="https://mello-coffee.webflow.io/style-guide" className="underline">
              Style Guide
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-[13px] font-medium opacity-70">Explore</p>
            <ul className="mt-3 space-y-2 text-[16px] font-medium">
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#place">Place</a>
              </li>
              <li>
                <a href="#visit">Visit</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-medium opacity-70">Follow</p>
            <ul className="mt-3 space-y-2 text-[16px] font-medium">
              <li>
                <a href="https://www.tiktok.com">TikTok</a>
              </li>
              <li>
                <a href="https://www.instagram.com">Instagram</a>
              </li>
              <li>
                <a href="https://www.facebook.com">Facebook</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-medium opacity-70">Contact</p>
            <ul className="mt-3 space-y-2 text-[16px] font-medium">
              <li className="flex items-start gap-2">
                <img src={img("map-pin.svg")} alt="" className="mt-0.5 h-4 shrink-0" />
                <span>28 Roastery Lane, Brooklyn, NY</span>
              </li>
              <li className="flex items-start gap-2">
                <img src={img("envelope.svg")} alt="" className="mt-0.5 h-4 shrink-0" />
                <a href="mailto:hi@mello.com">hi@mello.com</a>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
