"use client";

import { motion, Variants } from "framer-motion";

const reveal: Variants = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: "easeOut" },
    },
};

export default function VisionMissionSection() {
    return (
        <section
            className="
      relative z-20 py-25 px-6 overflow-hidden
      bg-[url('/images/bgabout.jpg')] bg-cover bg-center
    "
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/40" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* TITLE */}
                <motion.div
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.4 }}
                    className="text-center mb-16"
                >
                    <p className="uppercase tracking-widest font-bold text-black">
                        Our Direction
                    </p>

                    <h2
                        className="
  relative inline-block
  font-extrabold
  text-[48px] md:text-[60px]
  text-black px-3 py-1
"
                    >
                        <span
                            className="
    absolute
    left-0
    top-1/2
    -translate-y-1/2
    h-[70%]
    w-full
    bg-lime-400
    -z-10
  "
                        />

                        Vision & Mission
                    </h2>
                </motion.div>

                {/* CARDS */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* ================= VISION ================= */}
                    <motion.div
                        variants={reveal}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ amount: 0.3 }}
                        className="relative group"
                    >
                        {/* shadow belakang */}
                        <div className="
              absolute inset-0
              translate-x-2 translate-y-2
              bg-black rounded-xl
              transition-all duration-300
              group-hover:translate-x-3
              group-hover:translate-y-3
            " />

                        {/* card */}
                        <div className="
              relative bg-white
              border-2 border-black
              group-hover:border-lime-400
              rounded-xl p-8
              transition-all duration-300
              group-hover:-translate-y-1
            ">
                            <h3 className="text-2xl font-bold text-black mb-4">
                                Our Vision
                            </h3>

                            <p className="text-black/80 leading-relaxed text-lg">
                                To become a trusted digital innovation partner that empowers
                                businesses through scalable technology solutions and helps
                                organizations grow sustainably in the digital era.
                            </p>
                        </div>
                    </motion.div>

                    {/* ================= MISSION ================= */}
                    <motion.div
                        variants={reveal}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ amount: 0.3 }}
                        className="relative group"
                    >
                        {/* shadow belakang */}
                        <div className="
              absolute inset-0
              translate-x-2 translate-y-2
              bg-black rounded-xl
              transition-all duration-300
              group-hover:translate-x-3
              group-hover:translate-y-3
            " />

                        {/* card */}
                        <div className="
              relative bg-white
              border-2 border-black
              group-hover:border-lime-400
              rounded-xl p-8
              transition-all duration-300
              group-hover:-translate-y-1
            ">
                            <h3 className="text-2xl font-bold text-black mb-4">
                                Our Mission
                            </h3>

                            <p className="text-black/80 leading-relaxed text-lg">
                                Deliver high-quality digital products through innovation,
                                strong engineering practices, and strategic collaboration
                                that create measurable impact for our clients.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}