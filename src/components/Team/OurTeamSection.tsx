"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

/* ================= PREMIUM REVEAL ================= */

const reveal: Variants = {
    hidden: {
        opacity: 0,
        y: 80,
        scale: 0.95,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

/* STAGGER */
const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function OurTeamSection() {
    return (
        <section
            className="
      relative z-20 py-24 px-6 overflow-hidden
      bg-[url('/images/bgabout.jpg')] bg-cover bg-center
    "
        >
            {/* overlay tetap */}
            <div className="absolute inset-0 bg-white/40" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* ================= TITLE ================= */}
                <motion.div
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.4 }}
                    className="text-center mb-20"
                >
                    <p className="uppercase tracking-widest font-bold text-black">
                        Meet Our Team
                    </p>

                    <h2 className="relative inline-block font-extrabold text-[48px] md:text-[60px] text-black px-3 py-1">
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-full bg-lime-400 -z-10" />
                        Our Team
                    </h2>
                </motion.div>

                {/* ================= TEAM GRID ================= */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto items-stretch"
                >
                    {teamData.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

/* ================= TEAM DATA ================= */

const teamData = [
    {
        image: "/images/AZDHAR.jpeg",
        name: "Muhammad Azdhar Syahputra",
        role: "Chief Technology Officer",
        desc: "2+ years of experience in backend development and system architecture. Specialized in Go, distributed systems, and scalable backend infrastructure.",
    },
    {
        image: "/images/DIMAS.jpeg",
        name: "Dimas Putra Perdana",
        role: "Front end engineer",
        desc: "2+ years of experience in designing intuitive digital experiences and modern web interfaces. Specialized in user-centered design, responsive layouts, and seamless interaction systems.",
    },
    {
        image: "/images/SULTHAN.jpeg",
        name: "SulthaN Farras Nata Saputra",
        role: "Back end engineer",
        desc: "2+ years of experience in backend development and system architecture. Specialized in building scalable APIs, database design, and secure server-side applications.",
    },
];

/* ================= TEAM CARD ================= */

function TeamCard({
    image,
    name,
    role,
    desc,
}: {
    image: string;
    name: string;
    role: string;
    desc: string;
}) {
    return (
        <motion.div variants={reveal} className="relative group h-full">

            {/* shadow offset */}
            <div
                className="
                absolute inset-0
                translate-x-2 translate-y-2
                bg-black rounded-xl
                transition-all duration-300
                group-hover:translate-x-3
                group-hover:translate-y-3
            "
            />

            {/* CARD */}
            <div
                className="
                relative bg-white
                border-2 border-black
                rounded-xl
                transition-all duration-300
                group-hover:-translate-y-1
                group-hover:border-lime-400
                flex items-center gap-5
                p-5 h-full
            "
            >

                {/* IMAGE 1:1 (TETAP SQUARE) */}
                <div className="relative w-[110px] aspect-square shrink-0 overflow-hidden rounded-lg">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="
                            object-cover
                            grayscale
                            group-hover:grayscale-0
                            group-hover:scale-105
                            transition duration-500
                        "
                    />
                </div>

                {/* CONTENT */}
                <div className="flex flex-col text-left flex-grow">

    <h3 className="text-lg font-bold text-black leading-snug">
        {name}
    </h3>

    <p className="text-lime-600 font-semibold text-sm">
        {role}
    </p>

    {/* DESC HOVER */}
    <div
        className="
        overflow-hidden
        max-h-0
        opacity-0
        transition-all duration-500 ease-in-out
        group-hover:max-h-[200px]
        group-hover:opacity-100
    "
    >
        <p className="text-black/70 text-sm mt-3 leading-relaxed">
            {desc}
        </p>
    </div>

</div>

            </div>
        </motion.div>
    );
}