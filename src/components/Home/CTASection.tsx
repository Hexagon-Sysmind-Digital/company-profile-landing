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

export default function CTASection() {
  return (
    <section id="contact" className="py-32 text-center px-6 border-t border-gray-200">
            <motion.h2
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.6 }}
              className="text-4xl font-bold"
            >
              Let’s Build Something Great Together
            </motion.h2>
    
            <motion.p
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.6 }}
              className="mt-6 text-gray-600"
            >
              Ready to start your next digital project?
            </motion.p>
    
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="mt-10 px-8 py-4 bg-black text-white rounded-full font-semibold shadow-lg hover:shadow-2xl"
            >
              Contact Us
            </motion.button>
          </section>
  );
}