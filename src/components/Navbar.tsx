"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= LOCK BODY ================= */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const menus = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/project" },
    { name: "Products", link: "/product" },
    { name: "Our Team", link: "/team" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full z-50 backdrop-blur-xl transition-all duration-500
        ${scrolled ? "bg-white/70 shadow-sm" : "bg-black/60"}`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center relative">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-extrabold tracking-wider z-50">
            <span className="text-lime-400">HEXA</span>
            <span className={scrolled ? "text-black" : "text-white"}>
              MIND
            </span>
          </Link>

          {/* ================= DESKTOP MENU (UNCHANGED) ================= */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 hidden md:flex gap-10 text-md font-bold transition-colors duration-500
            ${scrolled ? "text-black" : "text-white"}`}
          >
            {menus.map((item, i) => (
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

          {/* FAQ DESKTOP */}
          <div className="ml-auto hidden md:block">
            <Link
              href="/faq"
              className="relative px-5 py-2 rounded-lg overflow-hidden group font-bold"
            >
              <span className="absolute inset-0 rounded-lg bg-lime-400 transition-all duration-300 group-hover:bg-black" />

              <span className="relative z-10 text-black group-hover:text-white transition-colors duration-300">
                FAQ
              </span>
            </Link>
          </div>

          {/* ================= BURGER ================= */}
          <button
            onClick={() => setMenuOpen(true)}
            className="ml-auto md:hidden flex flex-col gap-1.5 z-[60]"
          >
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
          </button>

        </div>
      </motion.nav>

      {/* ================= MOBILE FULLSCREEN ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 bg-black z-[55] md:hidden"
          >
            {/* TOP */}
            <div className="flex justify-between items-center px-6 py-6">

              <span className="text-2xl font-extrabold">
                <span className="text-lime-400">HEXA</span>
                <span className="text-white">MIND</span>
              </span>

              <button
                onClick={() => setMenuOpen(false)}
                className="text-white text-3xl"
              >
                ✕
              </button>
            </div>

            {/* MENU */}
            <div className="flex flex-col items-center justify-center h-[80%] gap-10 text-white text-2xl font-bold">

              {menus.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-lime-400 transition"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/faq"
                onClick={() => setMenuOpen(false)}
                className="bg-lime-400 text-black px-8 py-3 rounded-xl mt-4"
              >
                FAQ
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}