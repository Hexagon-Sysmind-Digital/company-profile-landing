"use client";

import { motion, Variants } from "framer-motion";
import { Mail } from "lucide-react";

const reveal: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

export default function CTASection() {
  return (
    <section
      id="contact"
      className="
        relative py-28 px-6 overflow-hidden
        bg-[url('/images/bgabout.jpg')] 
        bg-cover bg-center
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.6 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Let’s Work With
          <span className="relative inline-block ml-2">
            <span className="absolute inset-0 bg-lime-400 -z-10 rounded-sm" />
            HEXAMIND
          </span>
        </motion.h2>

        {/* Small Contact Card */}
<motion.a
  href="mailto:hexagonsysmindigital@gmail.com"
  variants={reveal}
  whileHover={{ y: -6 }}
  whileTap={{ scale: 0.97 }}
  className="group inline-block mt-14"
>
  <div className="relative">

    {/* Shadow Offset */}
    <div className="
      absolute inset-0
      translate-x-2 translate-y-2
      bg-black
      rounded-xl
      transition
      group-hover:translate-x-3
      group-hover:translate-y-3
    " />

    {/* Main Card */}
    <div
      className="
        relative
        bg-white
        border-2 border-black
        rounded-xl
        px-6 py-5
        flex items-center gap-4
        transition
      "
    >
      {/* Icon */}
      <div className="w-10 h-10 rounded-full bg-lime-400 flex items-center justify-center font-bold text-black">
        ✉
      </div>

      {/* Email Text */}
      <div className="text-left">
        <p className="text-xs text-gray-500">
          Contact via Email
        </p>

        <p className="
          font-semibold
          text-black
          text-sm md:text-base
          group-hover:underline
        ">
          hexagonsysmindigital@gmail.com
        </p>
      </div>

    </div>

  </div>
</motion.a>

      </div>
    </section>
  );
}