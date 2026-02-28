"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed w-full z-50 backdrop-blur-xl transition-all duration-500
      ${scrolled ? "bg-white/70 shadow-sm" : "bg-black/60"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center relative">

        {/* ================= LOGO ================= */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-wider"
        >
          <span className="text-lime-400">HEXA</span>
          <span className={scrolled ? "text-black" : "text-white"}>
            MIND
          </span>
        </Link>

        {/* ================= CENTER MENU ================= */}
        <div
          className={`absolute left-1/2 -translate-x-1/2 hidden md:flex gap-10 text-md font-bold transition-colors duration-500
          ${scrolled ? "text-black" : "text-white"}`}
        >
          {[
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Projects", link: "/project" },
            { name: "Products", link: "/product" },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="relative px-3 py-1 rounded-md overflow-hidden group"
            >
              <span
                className={`absolute inset-0 scale-x-0 origin-left
                transition-transform duration-300
                group-hover:scale-x-100
                ${scrolled ? "bg-black" : "bg-lime-400"}`}
              />

              <span
                className={`relative z-10 transition-colors duration-300
                ${scrolled
                  ? "group-hover:text-white"
                  : "group-hover:text-black"}`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        {/* ================= FAQ RIGHT ================= */}
        <div className="ml-auto hidden md:block">
          <Link
            href="/faq"
            className="relative px-5 py-2 rounded-lg overflow-hidden group font-bold"
          >
            {/* Hover BG */}
            <span className="rounded-lg absolute inset-0 bg-lime-400 transition-all duration-300 group-hover:bg-black" />

            {/* Text */}
            <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
              FAQ
            </span>
          </Link>
        </div>

      </div>
    </motion.nav>
  );
}