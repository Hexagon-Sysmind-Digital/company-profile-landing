"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: "easeOut" }
  }
};

export default function Home() {
  return (
    <main className="bg-white text-black overflow-hidden">

      {/* NAVBAR */}
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
            <a href="#about" className="hover:opacity-60 transition">About</a>
            <a href="#projects" className="hover:opacity-60 transition">Projects</a>
            <a href="#contact" className="hover:opacity-60 transition">Contact</a>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="pt-40 pb-32 text-center px-6">
        <motion.h1
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05]"
        >
          Crafting Digital <br />
          Experiences That Matter
        </motion.h1>

        <motion.p
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.6 }}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          We design and build modern websites, systems, and digital platforms
          that elevate brands and drive real impact.
        </motion.p>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-white to-gray-50"
      >
        {/* Decorative Blur Accent */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-black/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative">

          {/* LEFT CONTENT */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.4 }}
          >
            <p className="text-sm uppercase tracking-widest text-gray-500">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Building Digital <br />
              Systems With Purpose
            </h2>

            <p className="mt-8 text-gray-600 leading-relaxed text-lg">
              We are a creative and technology-driven team focused on delivering
              high-performance digital platforms. From scalable system architecture
              to refined UI/UX design, we craft solutions that elevate brands.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              With precision engineering and a strategic mindset, we transform
              complex ideas into seamless digital experiences.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "10+", label: "Industries Served" },
                { value: "5+", label: "Years Experience" },
              ].map((stat, i) => (
                <div key={i}>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.4 }}
            className="relative group"
          >
            <div className="relative h-[420px] rounded-3xl overflow-hidden">

              <Image
                src="/images/a.png"
                alt="About Hexamind"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />


            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white shadow-2xl rounded-2xl px-6 py-4 border border-gray-100">
              <p className="text-sm text-gray-500">Trusted By</p>
              <p className="text-lg font-semibold">Growing Businesses</p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="py-24 bg-white border-t border-gray-200 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.6 }}
            className="text-4xl font-bold text-center"
          >
            Our Packages
          </motion.h2>

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.6 }}
            className="mt-6 text-center text-gray-600 max-w-2xl mx-auto"
          >
            Choose the solution that best fits your business needs.
            Both packages include 1-year maintenance warranty.
          </motion.p>

          <div className="mt-16 grid md:grid-cols-2 gap-12">

            {/* NON CUSTOM */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="border border-gray-200 rounded-3xl p-10 bg-gray-50 hover:shadow-2xl transition-all"
            >
              <h3 className="text-2xl font-semibold">Non-Custom Package</h3>
              <p className="mt-4 text-gray-600">
                Pre-built system with limited customization. Ideal for businesses
                that need a faster and cost-efficient solution.
              </p>

              <div className="mt-8 text-5xl font-bold">
                $1,500
              </div>

              <ul className="mt-8 space-y-4 text-gray-600">
                <li>✔ Ready-made system</li>
                <li>✔ Basic customization</li>
                <li>✔ Deployment support</li>
                <li>✔ 1-Year Maintenance Warranty</li>
              </ul>

              <p className="mt-8 text-sm text-gray-500">
                * Warranty covers bug fixing or system errors only.
                Feature additions or new requests are not included.
              </p>

              <button className="mt-8 w-full py-4 bg-black text-white rounded-full font-semibold hover:scale-105 transition">
                Get Started
              </button>
            </motion.div>

            {/* CUSTOM */}
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.3 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="border border-black rounded-3xl p-10 bg-black text-white hover:shadow-2xl transition-all relative"
            >
              <div className="absolute top-6 right-6 text-xs uppercase tracking-widest bg-white text-black px-3 py-1 rounded-full">
                Most Popular
              </div>

              <h3 className="text-2xl font-semibold">Custom Package</h3>
              <p className="mt-4 text-gray-300">
                Fully tailored system built specifically for your business
                workflow and operational requirements.
              </p>

              <div className="mt-8 text-5xl font-bold">
                $4,500+
              </div>

              <ul className="mt-8 space-y-4 text-gray-300">
                <li>✔ Fully custom development</li>
                <li>✔ Scalable architecture</li>
                <li>✔ Advanced system integration</li>
                <li>✔ 1-Year Maintenance Warranty</li>
              </ul>

              <p className="mt-8 text-sm text-gray-400">
                * Warranty covers system errors or bugs only.
                Any additional features, modules, or enhancements
                will be subject to additional cost.
              </p>

              <button className="mt-8 w-full py-4 bg-white text-black rounded-full font-semibold hover:scale-105 transition">
                Contact Us
              </button>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.6 }}
            className="text-4xl font-bold text-center"
          >
            Selected Projects
          </motion.h2>

          <div className="mt-16 grid md:grid-cols-2 gap-12">

            {[
              { title: "E-Procurement System", image: "/images/dummy1.jpg" },
              { title: "Hotel Reservation Platform", image: "/images/dummy2.jpg" },
              { title: "Company Profile Website", image: "/images/dummy3.jpg" },
              { title: "Custom Dashboard App", image: "/images/dummy4.jpg" },
            ].map((project, i) => (
              <motion.div
                key={i}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.3 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-200 shadow-sm group-hover:shadow-2xl transition-all duration-500">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay Premium */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-500" />

                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  Strategic digital solution delivering measurable business impact.
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
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

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © 2026 YOUR COMPANY. All rights reserved.
      </footer>

    </main>
  );
}