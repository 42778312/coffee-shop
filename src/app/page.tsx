import { CoffeeOclockSection } from "@/components/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/CoffeeOclockSection";
import { FeaturedMenuSection } from "@/components/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/FeaturedMenuSection";
import { FullMenuSection } from "@/components/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/FullMenuSection";
import { HeroSection } from "@/components/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/HeroSection";
import { MoodMatcherSection } from "@/components/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/MoodMatcherSection";
import { PlaceSection } from "@/components/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/PlaceSection";
import { ReviewsSection } from "@/components/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/ReviewsSection";
import { SiteFooter } from "@/components/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/SiteFooter";
import { SiteHeader } from "@/components/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/SiteHeader";
import { TickerMarquee } from "@/components/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/TickerMarquee";
import { VisitSection } from "@/components/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/VisitSection";
import { WhatMattersSection } from "@/components/sites/mello-coffee-webflow-io-87d7671d/root-8a5edab2/WhatMattersSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-[#1F3D38]">
      <SiteHeader />
      <HeroSection />
      <TickerMarquee />
      <FeaturedMenuSection />
      <FullMenuSection />
      <TickerMarquee />
      <MoodMatcherSection />
      <CoffeeOclockSection />
      <WhatMattersSection />
      <TickerMarquee />
      <PlaceSection />
      <ReviewsSection />
      <VisitSection />
      <SiteFooter />
    </main>
  );
}
