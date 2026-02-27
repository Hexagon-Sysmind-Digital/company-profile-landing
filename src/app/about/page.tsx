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

      {/* DARK OVERLAY (biar teks kebaca) */}
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
          <p className="text-sm uppercase tracking-widest text-black/100 font-bold">
            Who We Are
          </p>

          {/* TITLE */}
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight relative inline-block text-black">

            {/* STABILO */}
            <span
              className="
                absolute
                left-[-100vw]
                top-1/2
                -translate-y-1/2
                h-[95%]
                w-[calc(100%+101vw)]
                bg-lime-400/80
                blur-[1px]
                -z-10
              "
            />

            Building Digital <br />
            Systems With Purpose
          </h2>

          <p className="mt-8 text-black leading-relaxed text-lg text-justify">
            We are a web and application development studio focused on helping startups and growing businesses turn ideas into scalable digital products.
            From robust backend architecture to intuitive UI/UX design, we build high-performance platforms that are secure, responsive, and built for long-term growth.
          </p>

          <p className="mt-6 text-black leading-relaxed text-lg text-justify">
            With a strong engineering foundation and a strategic approach,
            we transform complex concepts into seamless digital experiences that deliver real business value.
          </p>
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
              alt="About Hexamind"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />

          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 bg-white shadow-2xl rounded-2xl px-6 py-4 border border-gray-100">
            <p className="text-sm text-gray-500">Trusted By</p>
            <p className="text-lg font-semibold">
              Growing Businesses
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}