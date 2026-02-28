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
      ${
        scrolled
          ? "bg-white/70 shadow-sm"
          : "bg-black/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <Link
          href="/"
          className={`text-lg font-semibold tracking-wider transition-colors duration-500
          ${scrolled ? "text-black" : "text-white"}`}
        >
          HEXAMIND
        </Link>

        {/* Menu */}
<div
  className={`hidden md:flex gap-10 text-md font-bold transition-colors duration-500
  ${scrolled ? "text-black" : "text-white"}`}
>
  {[
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/project" },
    { name: "Contact", link: "/#contact" },
  ].map((item, i) => (
    <Link
      key={i}
      href={item.link}
      className="relative px-3 py-1 rounded-md overflow-hidden group transition-colors duration-300"
    >
      {/* Hover Background */}
      <span
        className={`absolute inset-0 scale-x-0 origin-left
        transition-transform duration-300
        group-hover:scale-x-100
        ${
          scrolled
            ? "bg-black"     // scroll → hitam pekat
            : "bg-lime-400"  // atas → stabilo
        }`}
      />

      {/* Text */}
      <span
        className={`relative z-10 transition-colors duration-300
        ${
          scrolled
            ? "group-hover:text-white"
            : "group-hover:text-black"
        }`}
      >
        {item.name}
      </span>
    </Link>
  ))}
</div>

      </div>
    </motion.nav>
  );
}