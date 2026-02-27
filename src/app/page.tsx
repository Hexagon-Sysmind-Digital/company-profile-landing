"use client";

import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import PackagesSection from "../components/Home/ServiceSection";
import ProjectsSection from "../components/Home/ProjectSection";
import CTASection from "../components/Home/CTASection";
import FooterSection from "../components/Home/FooterSection";

export default function Home() {
  return (
    <main className="bg-white text-black overflow-hidden">

      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <ProjectsSection />
      <CTASection />
      <FooterSection />

    </main>
  );
}