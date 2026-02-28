"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const reveal: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const projects = [
  {
    title: "ALPHA STRENGTH",
    desc: "Where intelligent training meets elite performance.",
    image: "/images/GYM.png",
    link: "https://alpha-strength-landing.vercel.app/",
  },
  {
    title: "MERCURE KARAWANG",
    desc: "Hotel for travellers looking for local and authentic experiences.",
    image: "/images/HOTEL.png",
    link: "#",
  },
  {
    title: "BARAYA TECHNOLOGY",
    desc: "Baraya Technology is a technology company focused on developing modern digital systems.",
    image: "/images/BARAYA.png",
    link: "#",
  },
  {
    title: "PT. AKSARA MEGAH ABADI",
    desc: "Operates in the fields of Machining, Fabrication, Welding, and General Supply. Our skilled workforce, modern equipment, and commitment to OHS make us a reliable partner.",
    image: "/images/AKSARA.png",
    link: "#",
  },
  
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="
      relative py-20 px-6 overflow-hidden
      bg-[url('/images/bgabout.jpg')] bg-cover bg-center
    "
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/40" />

      {/* BLUR */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.4 }}
          >
            <h2 className="
              text-[64px] md:text-[84px] lg:text-[96px]
              font-bold text-black leading-[1.00]
              whitespace-nowrap relative inline-block
            ">
              <span
                className="
                  absolute left-[-100vw]
                  top-1/2 -translate-y-1/2
                  h-[85%]
                  w-[calc(100%+100vw)]
                  bg-lime-400/80
                  blur-[1px]
                  -z-10
                "
              />
              Our Projects
            </h2>
          </motion.div>

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.4 }}
            className="text-lg text-black leading-relaxed"
          >
            A collection of digital products and systems I have developed,
            ranging from enterprise platforms to modern web applications
            designed for performance, scalability, and real-world business impact.
          </motion.p>
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="
                group
                bg-white
                rounded-2xl
                shadow-lg
                overflow-hidden
                flex flex-col
              "
            >
              <Link href={project.link} className="flex flex-col h-full">

                {/* IMAGE 16:9 */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      object-cover
                      transition duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* TEXT */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-sm">
                    {project.title}
                  </h3>

                  <p className="text-xs text-black/70 mt-2">
                    {project.desc}
                  </p>
                </div>

              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}