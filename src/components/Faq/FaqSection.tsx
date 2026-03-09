"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Hexamind provide?",
    answer:
      "We provide professional digital solutions including website development, web systems, CMS platforms, ERP integration, and digital infrastructure designed to help businesses establish a strong online presence and improve operational efficiency."
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary depending on the scope and complexity. A landing page may take 1–2 weeks, a business website around 3–4 weeks, while custom systems or ERP implementations may require several months."
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes, we offer continuous support, updates, and monitoring to ensure your digital product remains secure and scalable."
  },
  {
    question: "Can Hexamind handle large-scale enterprise solutions?",
    answer:
      "Absolutely! Our architecture and development practices are designed to scale for enterprise-level applications and high-traffic systems."
  },
  {
    question: "How do you ensure project transparency?",
    answer:
      "We follow a structured workflow with regular updates, milestone reviews, and collaborative tools that keep clients informed at every stage."
  },
  {
    question: "Do you provide design prototypes before development?",
    answer:
      "Yes, we create detailed UI/UX prototypes to validate user experience and design flow before starting the development phase."
  },
  {
    question: "What are the payment terms?",
    answer:
      "Our standard payment structure typically requires a 20% initial deposit to begin the project and the remaining 80% upon completion before final delivery, ensuring commitment and clarity for both parties throughout the project lifecycle."
  },
  {
    question: "Do you provide hosting or server setup?",
    answer:
      "Yes. We can assist with hosting deployment, server configuration, and VPS infrastructure to ensure reliable performance, security, and scalability depending on the client’s requirements."
  },
  {
    question: "Do you provide maintenance after the project is launched?",
    answer:
      "Yes. We offer optional maintenance and support services that include updates, system monitoring, bug fixing, and technical assistance to ensure long-term system reliability."
  },
  {
    question: "How do we communicate during the project?",
    answer:
      "Communication is maintained through regular progress updates, scheduled discussions, and digital communication channels to ensure transparency and alignment throughout the project lifecycle."
  },
  {
    question: "Who owns the system after the project is completed?",
    answer:
      "Upon final payment, the client receives ownership of the delivered product according to the agreed terms, including access to the deployed system and relevant project assets."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-20 py-25 px-6 overflow-hidden bg-[url('/images/bgabout.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-white/40" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-black relative inline-block">
            <span className="absolute left-0 top-[55%] -translate-y-1/2 h-[100%] w-full bg-lime-400 -z-10 rounded-sm" />
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ LIST */}
        <div className="flex flex-col md:flex-row md:gap-8">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-6">
            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((item, i) => (
              <FAQItem
                key={i}
                isOpen={openIndex === i}
                onClick={() => toggleOpen(i)}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-6 mt-6 md:mt-0">
            {faqs.slice(Math.ceil(faqs.length / 2)).map((item, i) => {
              const index = i + Math.ceil(faqs.length / 2);
              return (
                <FAQItem
                  key={index}
                  isOpen={openIndex === index}
                  onClick={() => toggleOpen(index)}
                  question={item.question}
                  answer={item.answer}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ================= FAQ ITEM =================

function FAQItem({
  isOpen,
  onClick,
  question,
  answer
}: {
  isOpen: boolean;
  onClick: () => void;
  question: string;
  answer: string;
}) {
  return (
    <motion.div layout className="relative">
      
      {/* BLACK OFFSET BOX */}
      <motion.div
        layout
        initial={false}
        animate={{
          paddingBottom: isOpen ? 80 : 0
        }}
        transition={{ duration: 0.35 }}
        className="absolute inset-0 translate-x-2 translate-y-2 bg-black border-2 border-black rounded-2xl overflow-hidden"
      >
        {isOpen && (
          <div className="pt-20 px-6 pb-6 text-white text-sm md:text-base">
            {answer}
          </div>
        )}
      </motion.div>

      {/* WHITE BOX */}
      <div
        onClick={onClick}
        className="relative z-10 bg-white border-2 border-black rounded-2xl px-6 py-5 cursor-pointer flex justify-between items-center transition-all duration-300 hover:-translate-y-1"
      >
        <p className="font-medium text-sm md:text-base text-black">
          {question}
        </p>

        <ChevronDown
          size={20}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Spacer agar layout ikut turun */}
      <motion.div
        layout
        animate={{ height: isOpen ? 80 : 0 }}
        transition={{ duration: 0.35 }}
      />
    </motion.div>
  );
}