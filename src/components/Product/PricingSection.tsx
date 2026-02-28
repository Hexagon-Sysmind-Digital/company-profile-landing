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

export default function PricingSection() {
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
            "Custom Design",
            "SEO Optimized Structure",
            "Analytics Setup",
            "Conversion Layout",
        ],
    },
    {
        icon: <Database size={26} />,
        title: "ERP / Web Management",
        short: "Centralized operational system for structured growth.",
        details: [
            "Custom Dashboard",
            "Workflow Integration",
            "Secure Infrastructure",
            "Performance Framework",
        ],
    },
    {
        icon: <ShoppingCart size={26} />,
        title: "E-Commerce",
        short: "Scalable online store built for seamless transactions.",
        details: [
            "Custom Storefront",
            "SEO Architecture",
            "Secure Payment",
            "Inventory Management",
        ],
    },
];

const bundleData = [
    {
        icon: <Layers size={26} />,
        title: "Landing + E-Commerce",
        short: "Acquisition & revenue system in one ecosystem.",
        details: [
            "Landing Page",
            "Online Store",
            "Analytics Integration",
            "Conversion Strategy",
        ],
    },
    {
        icon: <PackageCheck size={26} />,
        title: "Landing + ERP",
        short: "Align customer growth with operational control.",
        details: [
            "Landing System",
            "ERP Integration",
            "Workflow Automation",
            "Scalable Structure",
        ],
    },
    {
        icon: <FileText size={26} />,
        title: "Landing + CMS",
        short: "Flexible content control with strong brand presence.",
        details: [
            "Landing Page",
            "Content Management",
            "SEO Optimization",
            "Editable Structure",
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