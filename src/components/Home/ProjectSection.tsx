"use client";

import Image from "next/image";
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

export default function ProjectsSection() {
  const projects = [
    { title: "E-Procurement System", image: "/images/dummy1.jpg" },
    { title: "Hotel Reservation Platform", image: "/images/dummy2.jpg" },
    { title: "Company Profile Website", image: "/images/dummy3.jpg" },
    { title: "Custom Dashboard App", image: "/images/dummy4.jpg" },
  ];

  return (
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
  );
}