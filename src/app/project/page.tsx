"use client";

import HeroSection from "../../components/Project/HeroSection";
import ProjectSection from "../../components/Project/ProjectSection";
import CTASection from "../../components/Home/CTASection";
import FooterSection from "../../components/Home/FooterSection";

export default function Project() {
  return (
    <main className="bg-white text-black overflow-hidden">

      <HeroSection />
      <ProjectSection />
      <CTASection />
      <FooterSection />

    </main>
  );
}