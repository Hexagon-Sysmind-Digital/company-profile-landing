"use client";

import HeroSection from "../components/Home/HeroSection";
import ChoseeMeSection from "../components/Home/ChoseeMeSection";
import ServiceSection from "../components/Home/ServiceSection";
import CommentSection from "../components/Home/CommentSection";
import CTASection from "../components/Home/CTASection";
import FooterSection from "../components/Home/FooterSection";

export default function Home() {
  return (
    <main className="bg-white text-black overflow-hidden">

      <HeroSection />
      <ChoseeMeSection />
      <ServiceSection />
      <CommentSection />
      <CTASection />
      <FooterSection />

    </main>
  );
}