"use client";

import HeroSection from "../../components/About/HeroSection";
import AboutSection from "../../components/About/AboutSection";
import VisionMissionSection from "../../components/About/VisionMissionSection";
import OurProcessSection from "../../components/About/OurProcessSection";
import CTASection from "../../components/Home/CTASection";
import FooterSection from "../../components/Home/FooterSection";

export default function About() {
  return (
    <main className="bg-white text-black overflow-hidden">

      <HeroSection />
      <AboutSection />
      <VisionMissionSection />
      <OurProcessSection />
      <CTASection />
      <FooterSection />

    </main>
  );
}