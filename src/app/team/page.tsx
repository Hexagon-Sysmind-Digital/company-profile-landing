"use client";

import HeroSection from "../../components/Team/HeroSection";
import OurTeamSection from "../../components/Team/OurTeamSection";
import CTASection from "../../components/Home/CTASection";
import FooterSection from "../../components/Home/FooterSection";

export default function Team() {
  return (
    <main className="bg-white text-black overflow-hidden">

      <HeroSection />
      <OurTeamSection />
      <CTASection />
      <FooterSection />

    </main>
  );
}