"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 backdrop-blur-xl bg-white/60 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-lg font-semibold tracking-wider">
          HEXAMIND
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="hover:opacity-60 transition">
            Home
          </Link>

          <Link href="/about" className="hover:opacity-60 transition">
            About
          </Link>

          <Link href="/#projects" className="hover:opacity-60 transition">
            Projects
          </Link>

          <Link href="/#contact" className="hover:opacity-60 transition">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}