"use client";

import { motion, Variants } from "framer-motion";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

const reveal: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

export default function CommentSection() {
  const testimonials = [
    {
      name: "Dava",
      role: "Startup Founder",
      text: "Hexamind helped us build a scalable platform with clean architecture and outstanding UI/UX execution."
    },
    {
      name: "Fadhil",
      role: "Tech Entrepreneur",
      text: "Their development process is structured and transparent. The final product exceeded our expectations."
    },
    {
      name: "Yusuf",
      role: "Business Owner",
      text: "From system planning to deployment, everything was handled professionally and efficiently."
    }
  ];

  return (
    <section
      id="testimonials"
      className="relative py-28 px-6 overflow-hidden
      bg-[url('/images/bgabout.jpg')] bg-cover bg-center"
    >

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60" />

      {/* Decorative Blur Accent */}
      <div className="absolute -top-20 right-0 w-72 h-72 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.6 }}
            className="inline-block text-black leading-[1.05]"
          >
            {/* Top Text */}
            <span className="block text-2xl md:text-3xl font-semibold text-justify">
              What Clients Say About
            </span>

            {/* HEXAMIND */}
            <span className="relative block mt-2">
              <span className="absolute inset-0 bg-lime-400 -z-10 rounded-sm" />
              <span className="block text-6xl md:text-7xl font-extrabold tracking-tight">
                HEXAMIND?
              </span>
            </span>
          </motion.h2>

          <div className="hidden md:flex gap-3">
            <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition">
              <ArrowLeft size={20} />
            </button>
            <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-105 transition">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4 text-yellow-400">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-6 border-t pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-700">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-black">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}