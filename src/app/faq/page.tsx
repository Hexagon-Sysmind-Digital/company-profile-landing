"use client";

import HeroSection from "../../components/Faq/HeroSection";
import FaqSection from "../../components/Faq/FaqSection";
import CTASection from "../../components/Home/CTASection";
import FooterSection from "../../components/Home/FooterSection";

export default function faq() {
  return (
    <main className="bg-white text-black overflow-hidden">

      <HeroSection />
      <FaqSection />
      <CTASection />
      <FooterSection />

    </main>
  );
}