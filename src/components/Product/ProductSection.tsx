"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import {
    ShoppingCart,
    Layout,
    Database,
    Layers,
    PackageCheck,
    FileText,
} from "lucide-react";

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

/* STAGGER CONTAINER */
const container: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

export default function ProductSection() {
    const [activeCore, setActiveCore] = useState<number | null>(null);
    const [activeBundle, setActiveBundle] = useState<number | null>(null);

    return (
        <section
            className="
      relative z-20 py-24 px-6 overflow-hidden
      bg-[url('/images/bgabout.jpg')] bg-cover bg-center
    "
        >
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
                        Our Solutions
                    </p>

                    <h2 className="relative inline-block font-extrabold text-[48px] md:text-[60px] text-black px-3 py-1">
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[70%] w-full bg-lime-400 -z-10" />
                        Product
                    </h2>
                </motion.div>

                {/* ================= CORE ================= */}
                <h3 className="text-3xl font-bold text-black mb-10 text-center">
                    Core Services
                </h3>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid md:grid-cols-3 gap-10 mb-24 items-start"
                >
                    {coreData.map((item, index) => (
                        <PricingCard
                            key={index}
                            {...item}
                            open={activeCore === index}
                            toggle={() =>
                                setActiveCore(activeCore === index ? null : index)
                            }
                        />
                    ))}
                </motion.div>

                {/* ================= BUNDLING ================= */}
                <h3 className="text-3xl font-bold text-black mb-10 text-center">
                    Bundling Packages
                </h3>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.2 }}
                    className="grid md:grid-cols-3 gap-10 items-start"
                >
                    {bundleData.map((item, index) => (
                        <PricingCard
                            key={index}
                            {...item}
                            open={activeBundle === index}
                            toggle={() =>
                                setActiveBundle(activeBundle === index ? null : index)
                            }
                        />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}

/* ================= DATA ================= */

const coreData = [
    {
        icon: <Layout size={26} />,
        title: "Landing Page",
        short: "Strategic SEO-ready digital presence built to convert.",
        details: [
            "Custom Design — A unique visual identity tailored specifically to your brand, ensuring credibility and distinction.",
            "SEO Optimized Structure — Built with search engine best practices to improve visibility and long-term discoverability.",
            "Analytics Setup — Integrated performance tracking so decisions are guided by real data, not assumptions.",
            "Copywriting Assistance — Clear, compelling messaging that speaks directly to your audience.",
            "Conversion Orianted Layout — Strategically arranged content that encourages engagement and action.",
        ],
    },
    {
        icon: <Database size={26} />, // Logo Database (ERP / System)
        title: "ERP / Web Management",
        short: "Centralized and structured business system for scalable, sustainable growth.",
        details: [
            "Custom Dashboard Design — Interface tailored to your workflow and brand identity",
            "Workflow & Process Integration — Centralized and connected operational structure",
            "Secure & Scalable Infrastructure — Built for long-term business expansion",
            "SEO Optimized Framework — High performance and visibility for public-facing systems",
        ],
    },
    {
        icon: <ShoppingCart size={26} />, // Logo E-Commerce
        title: "E-Commerce Solutions",
        short: "Professional and scalable online store built for seamless, trustworthy transactions.",
        details: [
            "Custom Storefront Design — A distinctive shopping experience aligned with your brand identity",
            "SEO Optimized Architecture — Structured for strong visibility and organic growth",
            "Secure Payment Integration — Reliable and protected transaction system",
            "Inventory & Order Management — Organized backend system for operational clarity",
        ],
    },
];

const bundleData = [
    {
    icon: <Layers size={26} />, // Logo Bundle System
    title: "Landing Page + E-Commerce",
    short: "Integrated acquisition and revenue engine within one scalable digital foundation.",
    details: [
        "Custom-Designed SEO Landing Page — Built for visibility, clarity, and high-conversion impact",
        "Conversion-Focused Copywriting — Structured messaging to guide users toward action",
        "Integrated Analytics System — Data-driven tracking for performance optimization",
        "Scalable E-Commerce Platform — Seamlessly connected storefront for structured revenue growth",
    ],
},
    {
    icon: <PackageCheck size={26} />, // Logo Landing + ERP Bundle
    title: "Landing Page + ERP / Web Management",
    short: "Strategic integration between customer acquisition and operational efficiency.",
    details: [
        "SEO-Optimized Landing Page — High-performing acquisition system built for visibility and conversion",
        "Centralized ERP / Web Management — Structured backend for operational clarity and control",
        "Workflow Automation — Seamless connection between front-end engagement and internal processes",
        "Scalable Business Architecture — Aligned digital foundation designed for sustainable expansion",
    ],
},
    {
    icon: <FileText size={26} />, // Logo Landing + CMS
    title: "Landing Page + CMS",
    short: "Strategic brand presence with flexible and independent content control.",
    details: [
        "Custom-Designed SEO Landing Page — Built for visibility, credibility, and conversion impact",
        "Flexible Content Management System — Easily manage and update content independently",
        "Structured SEO Framework — Maintain sustained search visibility and performance",
        "Scalable & Editable Architecture — Adaptive digital foundation for long-term growth",
    ],
},
{
    icon: <Layers size={26} />, // Logo Ecosystem / Integrated System
    title: "Landing Page + E-Commerce + ERP",
    short: "Complete digital ecosystem connecting acquisition, sales, and operational control.",
    details: [
        "Strategic SEO Landing Page — Built to drive visibility, credibility, and high-conversion acquisition",
        "Scalable E-Commerce Platform — Structured online sales system optimized for performance and growth",
        "Integrated ERP System — Centralized operational management for inventory, finance, and workflow control",
        "Unified Digital Infrastructure — Seamlessly connected framework designed for long-term scalability and performance",
    ],
},
{
    icon: <Database size={26} />, // Logo System Integration
    title: "ERP + E-Commerce Integration",
    short: "Aligned revenue generation and operational management within one scalable system.",
    details: [
        "Scalable Online Sales Platform — Reliable and structured transaction system",
        "Centralized ERP Management — Integrated inventory, finance, and workflow control",
        "Real-Time Data Synchronization — Connected transactions and operational tracking",
        "Structured Business Architecture — Built for efficiency, clarity, and long-term scalability",
    ],
},
];

/* ================= CARD ================= */

function PricingCard({
    icon,
    title,
    short,
    details,
    open,
    toggle,
}: {
    icon: React.ReactNode;
    title: string;
    short: string;
    details: string[];
    open: boolean;
    toggle: () => void;
}) {
    return (
        <motion.div
            variants={reveal}
            className="relative group"
        >
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

            <div
                className="
        relative bg-white
        border-2 border-black
        group-hover:border-lime-400
        rounded-xl p-8
        transition-all duration-300
        group-hover:-translate-y-1
        flex flex-col
        min-h-[215px]
      "
            >
                <div className="flex items-center gap-3 mb-4">
                    <div className="group-hover:text-lime-500 transition">
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold text-black">
                        {title}
                    </h3>
                </div>

                <p className="text-black/70 text-sm mb-6">
                    {short}
                </p>

                {open && (
                    <ul className="space-y-2 text-sm text-black/80 mb-6">
                        {details.map((item, i) => (
                            <li key={i}>• {item}</li>
                        ))}
                    </ul>
                )}

                <button
                    onClick={toggle}
                    className="
    mt-auto
    border-2 border-black
    rounded-lg
    px-5 py-2.5
    text-sm font-semibold
    transition-all duration-300
    hover:bg-black hover:text-white
    hover:scale-[1.03]
    active:scale-[0.98]
  "
                >
                    {open ? "Hide Details" : "View Details"}
                </button>
            </div>
        </motion.div>
    );
}