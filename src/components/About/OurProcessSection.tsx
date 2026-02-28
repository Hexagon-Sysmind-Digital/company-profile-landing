"use client";

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

const processes = [
    { title: "Discovery & Requirement Analysis", color: "bg-lime-400 text-black" },
    { title: "Strategic Planning & Architecture", color: "bg-purple-400/30 text-purple-600" },
    { title: "UI/UX Design Creation", color: "bg-blue-400/30 text-blue-600" },
    { title: "Development & Implementation", color: "bg-orange-400/30 text-orange-600" },
    { title: "Testing & Quality Assurance", color: "bg-pink-400/30 text-pink-600" },
    { title: "Launch & Continuous Support", color: "bg-emerald-400/30 text-emerald-600" }
];

export default function OurProcessSection() {
    return (
        <section
            className="
      relative z-20 py-15 px-6 overflow-hidden
      bg-[url('/images/bgabout.jpg')] bg-cover bg-center
    "
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-white/40" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* ================= MAIN LAYOUT ================= */}
                <div className="mt-10 grid lg:grid-cols-[1fr_2fr] gap-10 items-start">

                    {/* ================= BLACK PROCESS BOX ================= */}
                    <motion.div
                        variants={reveal}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ amount: 0.3 }}
                        whileHover={{ y: -6 }}
                        className="relative group"
                    >

                        {/* ✅ WHITE 3D SHADOW */}
                        <div
                            className="
      absolute inset-0
      translate-x-3 translate-y-3
      bg-white
      border-2 border-black
      rounded-3xl
      transition-all duration-300
      group-hover:translate-x-4
      group-hover:translate-y-4
    "
                        />

                        {/* ✅ MAIN BLACK BOX */}
                        <div
                            className="
      relative rounded-3xl
      bg-black text-white
      p-10 min-h-[320px]
      flex flex-col justify-center
      shadow-2xl
    "
                        >
                            <p className="uppercase tracking-widest text-white/100 font-semibold">
                                How We Work
                            </p>

                            <h2 className="relative inline-block text-4xl md:text-5xl font-bold mt-3">

                                <span
                                    className="
      absolute
      inset-0
      bg-lime-400
      top-1/2
      -translate-y-1/2
      h-[80%]
      z-0
      rounded-sm
    "
                                />

                                <span className="relative z-10 text-black">
                                    Our Process
                                </span>

                            </h2>

                            <p className="mt-6 text-white/100 leading-relaxed text-justify">
                                A structured workflow that ensures every project is delivered
                                efficiently, transparently, and built for long-term success.
                            </p>
                        </div>

                    </motion.div>

                    {/* ================= PROCESS LIST ================= */}
                    <div className="grid grid-cols-2 gap-9.5">

                        {processes.map((item, i) => (
                            <motion.div
                                key={i}
                                variants={reveal}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ amount: 0.25 }}
                                className="relative group"
                            >
                                {/* shadow */}
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
                  rounded-xl px-6 py-5
                  flex items-center gap-4
                  transition-all duration-300
                  group-hover:-translate-y-1
                  group-hover:border-lime-400
                ">
                                    <div
                                        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm ${item.color}`}
                                    >
                                        {i + 1}
                                    </div>

                                    <p className="font-medium text-black text-sm md:text-base">
                                        {item.title}
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