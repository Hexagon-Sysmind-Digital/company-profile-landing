"use client";

import { motion, Variants } from "framer-motion";
import {
  Globe,
  Code2,
  Smartphone,
  PenTool,
  Database,
  ShieldCheck,
} from "lucide-react";

const reveal: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-20 px-6 overflow-hidden
      bg-[url('/images/bgabout.jpg')] bg-cover bg-center"
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/40" />

      {/* BLUR ACCENT */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT TITLE */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.4 }}
          >
            <h2 className="text-[64px] md:text-[84px] lg:text-[96px] font-bold text-black leading-[1.00] whitespace-nowrap relative inline-block">

              <span
                className="
                absolute
                left-[-100vw]
                top-1/2
                -translate-y-1/2
                h-[85%]
                w-[calc(100%+100vw)]
                bg-lime-400/80
                blur-[1px]
                -z-10
              "
              />

              Our Services
            </h2>
          </motion.div>

          {/* RIGHT DESCRIPTION */}
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.4 }}
            className="text-lg text-black leading-relaxed"
          >
            We provide modern digital solutions tailored to elevate your
            business. From websites to scalable applications, our services are
            designed to deliver performance, security, and outstanding user
            experience.
          </motion.p>
        </div>

        {/* CONTENT GRID */}
        <div className="mt-20 grid lg:grid-cols-[1fr_2fr] gap-10 items-start">

          {/* BIG FEATURE CARD */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
            whileHover={{ y: -8 }}
            className="relative rounded-3xl p-10 bg-black text-white min-h-[320px] flex flex-col justify-between shadow-2xl"
          >
            <div>
              <h3 className="text-3xl font-semibold text-white">
                Website Development
              </h3>
              <p className="mt-6 text-white/80 leading-relaxed">
                Modern, responsive, and SEO-friendly websites tailored to your
                brand identity and business goals.
              </p>
            </div>

            <div className="mt-10 w-16 h-16 rounded-full bg-lime-400/20 flex items-center justify-center">
              <Globe size={28} className="text-lime-400" />
            </div>
          </motion.div>

          {/* RIGHT SIDE 6 CARDS */}
          <div className="grid grid-cols-2 gap-6 h-[320px]">

            {[
              {
                title: "Web Application Development",
                desc: "Scalable and high performance systems.",
                icon: <Code2 size={18} className="text-lime-400" />,
              },
              {
                title: "Mobile App Development",
                desc: "Seamless cross-platform applications.",
                icon: <Smartphone size={25} className="text-lime-400" />,
              },
              {
                title: "UI/UX Design",
                desc: "User-centered modern interface design.",
                icon: <PenTool size={25} className="text-lime-400" />,
              },
              {
                title: "Database Systems",
                desc: "Secure backend architecture.",
                icon: <Database size={25} className="text-lime-400" />,
              },
              {
                title: "Maintenance & Security",
                desc: "Ongoing support & protection.",
                icon: <ShieldCheck size={25} className="text-lime-400" />,
              },
              {
                title: "Cloud Deployment",
                desc: "Reliable cloud infrastructure setup.",
                icon: <Globe size={25} className="text-lime-400" />,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.2 }}
                whileHover={{ y: -4 }}
                className="bg-white text-black rounded-2xl px-5 py-4 shadow-lg flex items-center gap-4 h-full"
              >
                <div className="w-9 h-9 rounded-full bg-lime-400/10 flex items-center justify-center shrink-0">
                  {service.icon}
                </div>

                <div>
                  <h3 className="text-m font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-black text-xs mt-1">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}