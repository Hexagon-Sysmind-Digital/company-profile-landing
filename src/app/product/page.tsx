"use client";

import HeroSection from "../../components/Product/HeroSection";
import PricingSection from "../../components/Product/PricingSection";
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