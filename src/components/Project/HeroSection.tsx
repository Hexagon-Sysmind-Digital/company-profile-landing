"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[500px] text-white">

      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="relative w-full h-full overflow-hidden rounded-b-[60px] md:rounded-b-[50px]">
          <Image
            src="/images/bghero.jpg"
            alt="Projects Hero Background"
            fill
            priority
            className="object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-start pt-40">
        <div className="max-w-7xl mx-auto w-full px-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            {/* TITLE */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Our Projects
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 text-gray-300 text-lg">
              Explore a collection of digital products, platforms, and systems
              we have designed and developed — delivering scalable solutions,
              modern user experiences, and real business impact across industries.
            </p>
          </motion.div>

        </div>
      </div>

    </section>
  );
}