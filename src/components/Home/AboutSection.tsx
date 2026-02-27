"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const reveal: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative z-20 py-25 px-6 overflow-hidden
      bg-[url('/images/bgabout.jpg')] bg-cover bg-center"
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-white/40" />

      {/* Decorative Blur Accent */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.4 }}
        >
          <p className="text-sm uppercase tracking-widest text-black font-bold">
            Why Choose Us
          </p>

          <h2 className="relative inline-block whitespace-nowrap font-extrabold leading-[0.95] 
               text-[72px] md:text-[96px] lg:text-[85px] text-black">

  <span
    className="
      absolute
      left-[-100vw]
      top-[60%]
      -translate-y-1/2
      h-[100%]
      w-[calc(100%+100vw)]
      bg-lime-400
      -z-10
    "
  />

  Why Hexamind
</h2>

          <p className="mt-5 text-black/80 text-lg leading-relaxed">
            We build modern digital products designed for performance,
            scalability, and long-term business growth.
          </p>

          {/* COMPACT FEATURE LIST */}
          <div className="mt-8 space-y-3">

            <div className="relative">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black rounded-xl"></div>

              <div className="relative bg-white border-2 border-black rounded-xl px-5 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center font-bold text-black text-sm">
                  ✓
                </div>

                <p className="font-medium text-black text-sm md:text-base">
                  Scalable Web & App Architecture
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black rounded-xl"></div>

              <div className="relative bg-white border-2 border-black rounded-xl px-5 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-400/30 flex items-center justify-center text-purple-600 font-bold text-sm">
                  ✓
                </div>

                <p className="font-medium text-black text-sm md:text-base">
                  Performance-Driven Development
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black rounded-xl"></div>

              <div className="relative bg-white border-2 border-black rounded-xl px-5 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-400/30 flex items-center justify-center text-blue-600 font-bold text-sm">
                  ✓
                </div>

                <p className="font-medium text-black text-sm md:text-base">
                  Modern & Intuitive UI/UX Design
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black rounded-xl"></div>

              <div className="relative bg-white border-2 border-black rounded-xl px-5 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-400/30 flex items-center justify-center text-orange-600 font-bold text-sm">
                  ✓
                </div>

                <p className="font-medium text-black text-sm md:text-base">
                  Secure & Future-Ready Solutions
                </p>
              </div>
            </div>

          </div>
        </motion.div>
        {/* RIGHT IMAGE */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.4 }}
          className="relative group"
        >
          <div className="relative h-[420px] rounded-3xl overflow-hidden">

            <Image
              src="/images/bgchoseme.png"
              alt="Why Choose Hexamind"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />

          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 bg-white shadow-2xl rounded-2xl px-6 py-4 border border-gray-100">
            <p className="text-sm text-gray-500">Proven By</p>
            <p className="text-lg font-semibold">
              Successful Digital Projects
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}