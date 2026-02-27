"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TechMarquee from "../TechMarquee";

function AnimatedWords({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const words = text.split(" ");

  return (
    <motion.h1
      key={text} // 🔥 penting supaya reset animasi
      className={className}
      initial="hidden"
      animate="show"
      exit="hidden"
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="inline-block mr-3"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}


const slides = [
  {
    image: "/images/slider1.jpg",
    title: "We Build Modern Websites & Scalable Applications",
    subtitle:
      "Transforming your ideas into high-performance digital products designed for growth and long-term success.",
    button: "Start a Project",
  },
  {
    image: "/images/slider2.jpg",
    title: "Custom Web & Mobile Solutions for Growing Businesses",
    subtitle:
      "From responsive websites to powerful applications, we craft digital solutions tailored to your business goals.",
    button: "View Our Work",
  },
  {
    image: "/images/slider3.jpg",
    title: "Turning Complex Ideas Into Seamless Digital Experiences",
    subtitle:
      "We combine clean code, strategic thinking, and modern design to build products that perform and scale.",
    button: "Get a Free Consultation",
  },
];

export default function HeroSection() {

  const [index, setIndex] = useState(0);

  // 🔥 FIX interval supaya tidak reset terus
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []); // ❗ kosong

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative w-full min-h-[550px] text-white">

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-[85%] z-0">
  <div className="relative w-full h-full overflow-hidden rounded-b-[60px] md:rounded-b-[50px]">
        <Image
          src="/images/bghero.jpg" // ganti sesuai gambar kamu
          alt="Hero Background"
          fill
          priority
          className="object-cover"
        />

        {/* optional overlay biar text tetap kebaca */}
        <div className="absolute inset-0 bg-black/60" />
  </div>

      </div>
      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex items-start pt-25">
        <div className="max-w-7xl mx-auto w-full px-8 grid md:grid-cols-2 items-start gap-12">

          {/* LEFT CONTENT */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AnimatedWords
                  text={slides[index].title}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold leading-tight"
                />

                <motion.p
                  key={slides[index].subtitle}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="mt-6 text-gray-400 text-lg max-w-lg"
                >
                  {slides[index].subtitle}
                </motion.p>

                <motion.button
                  key={slides[index].button}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="mt-8 px-6 py-3 bg-lime-400 hover:bg-lime-500 text-black transition rounded-lg font-semibold"
                >
                  {slides[index].button}
                </motion.button>
              </motion.div>
            </AnimatePresence>

          </div>
          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-[650px] aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">

              <AnimatePresence mode="wait">
                <motion.div
                  key={slides[index].image}
                  initial={{ x: "100%" }}
                  animate={{ x: "0%" }}
                  exit={{ x: "-100%" }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slides[index].image}
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
      {/* 🔥 TECH MARQUEE (DI LUAR GRID) */}
      <div className="relative z-10 mt-10">
        <TechMarquee />
      </div>
      {/* Arrow Navigation */}
      <div className="absolute top-[28%] left-4 z-20">
        <button
          onClick={prevSlide}
          className="text-white text-4xl opacity-70 hover:opacity-100 transition"
        >
          ‹
        </button>
      </div>

      <div className="absolute top-[28%] right-4 z-20">
        <button
          onClick={nextSlide}
          className="text-white text-4xl opacity-70 hover:opacity-100 transition"
        >
          ›
        </button>
      </div>

    </section>
  );
} 
