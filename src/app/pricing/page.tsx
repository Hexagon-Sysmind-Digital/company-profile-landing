"use client";

import HeroSection from "../../components/Pricing/HeroSection";
import PricingSection from "../../components/Pricing/PricingSection";
import CTASection from "../../components/Home/CTASection";
import FooterSection from "../../components/Home/FooterSection";

export default function Pricing() {
  return (
    <main className="bg-white text-black overflow-hidden">

      <HeroSection />
      <PricingSection />
      <CTASection />
      <FooterSection />

    </main>
  );
}