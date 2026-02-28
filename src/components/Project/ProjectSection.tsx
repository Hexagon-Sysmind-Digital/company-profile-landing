"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const reveal: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const projects = [
  {
    title: "ALPHA STRENGTH",
    desc: "Where intelligent training meets elite performance, combining advanced strategies, data-driven insights, and modern technology to help individuals and organizations achieve optimal results, enhance productivity, and continuously improve performance through smarter and more effective training experiences.",
    image: "/images/GYM.png",
    link: "https://alpha-strength-landing.vercel.app/",
  },
  {
    title: "MERCURE KARAWANG",
    desc: "A hotel designed for travelers seeking local and authentic experiences, offering comfortable accommodations combined with cultural immersion, personalized services, and opportunities to explore the destination through its traditions, cuisine, and unique community atmosphere..",
    image: "/images/HOTEL.png",
    link: "#",
  },
  {
    title: "BARAYA TECHNOLOGY",
    desc: "Baraya Technology is a technology company focused on developing modern digital solutions that help businesses improve efficiency, streamline operations, and accelerate digital transformation through innovative and scalable systems.",
    image: "/images/BARAYA.png",
    link: "#",
  },
  {
    title: "KALA SENJA",
    desc: "A coffee shop management web system is a digital platform designed to manage daily business operations efficiently, including menu management, cashier transactions, menu performance analytics, and marketing activities. The system helps owners monitor sales, analyze popular products, manage orders, and optimize marketing strategies to improve operational efficiency and business growth.",
    image: "/images/KALASENJA.jpeg",
    link: "#",
  },
  {
    title: "ANFIE'COMM",
    desc: "An animation service website is a digital platform that allows animators to promote and advertise their artwork while enabling users to browse and purchase images easily. The system provides features for showcasing visual portfolios, managing image listings, and supporting secure transactions between creators and customers.",
    image: "/images/ANFIECOM.jpeg",
    link: "#",
  },
  {
    title: "NIKAH MURAH INDONESIA",
    desc: "An e-commerce platform for wedding vendors in Indonesia is a digital marketplace that allows vendors to promote and advertise wedding service packages while enabling efficient vendor and admin management. The system helps vendors showcase their services, manage listings and bookings, while administrators oversee vendor activities, content, and platform operations to ensure a well-organized and reliable wedding service ecosystem.",
    image: "/images/NIKAHMUDA.jpeg",
    link: "#",
  },
  {
    title: "EVERGON",
    desc: "Evergon is a lightweight, portable local development environment built with Go, designed to replace complex setups like Docker with instant, high-performance workflows. It empowers developers with a seamless, cross-platform experience that accelerates software delivery and scales efficiently across any organization.",
    image: "/images/EVERGON.jpeg",
    link: "#",
  },
  {
    title: "E-Buana Procurement",
    desc: "An e-procurement web application is a digital platform that simplifies procurement processes by managing vendors, tenders, and purchasing activities in one centralized system, improving efficiency, transparency, and approval workflows within an organization.",
    image: "/images/EBP.png",
    link: "#",
  },
  {
    title: "Manajement Lead Recycle",
    desc: "A waste management website for each department in a company is a digital platform that helps monitor, record, and manage waste handling activities efficiently. It allows departments to track waste data in real time, simplify reporting processes, and support easier monitoring and audit activities while ensuring compliance with company and environmental regulations.",
    image: "/images/MLR.jpeg",
    link: "#",
  },
  {
    title: "LOKATARA",
    desc: "The Lokatara event organizer website is a competition management platform that provides participant registration, judging systems for each contestant, and real-time monitoring of scores and ongoing competition activities. The platform helps organizers manage events efficiently while ensuring transparent evaluation and live progress tracking throughout the competition.",
    image: "/images/LOKATARA.jpeg",
    link: "#",
  },
  
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      className="
      relative py-20 px-6 overflow-hidden
      bg-[url('/images/bgabout.jpg')] bg-cover bg-center
    "
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/40" />

      {/* BLUR */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* ================= HEADER ================= */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.4 }}
          >
            <h2 className="
              text-[64px] md:text-[84px] lg:text-[96px]
              font-bold text-black leading-[1.00]
              whitespace-nowrap relative inline-block
            ">
              <span
                className="
                  absolute left-[-100vw]
                  top-1/2 -translate-y-1/2
                  h-[85%]
                  w-[calc(100%+100vw)]
                  bg-lime-400/80
                  blur-[1px]
                  -z-10
                "
              />
              Our Projects
            </h2>
          </motion.div>

          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.4 }}
            className="text-lg text-justify text-black leading-relaxed"
          >
            A collection of digital products and systems I have developed,
            ranging from enterprise platforms to modern web applications
            designed for performance, scalability, and real-world business impact.
          </motion.p>
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="
                group
                bg-white
                rounded-2xl
                shadow-lg
                overflow-hidden
                flex flex-col
              "
            >
              <Link href={project.link} className="flex flex-col h-full">

                {/* IMAGE 16:9 */}
                <div className="relative w-full aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      object-cover
                      transition duration-500
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* TEXT */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-semibold text-sm text-center">
                    {project.title}
                  </h3>

                  <p className="text-justify text-xs text-black/70 mt-2">
                    {project.desc}
                  </p>
                </div>

              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}