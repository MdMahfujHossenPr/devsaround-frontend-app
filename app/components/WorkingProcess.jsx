"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkingProcess() {
  const steps = [
    { number: "01", title: "Consultation", desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
    { number: "02", title: "Research and Strategy Development", desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
    { number: "03", title: "Implementation", desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
    { number: "04", title: "Monitoring and Optimization", desc:"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.." },
    { number: "05", title: "Reporting and Communication", desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements." },
    { number: "06", title: "Continual Improvement", desc: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.." },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 max-w-7xl mx-auto">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left flex flex-col md:flex-row items-center md:items-start">
        <span className="bg-[#B9FF66] px-2 py-1 mb-4 md:mb-0 md:mr-6">
          Our Working Process
        </span>
        <span className="text-sm text-gray-600 text-center md:text-left">
         Step-by-Step Guide to Achieving{" "}
          <br className="hidden md:block" />
          Your Business Goals
        </span>
      </h2>

      {/* Accordion */}
      <div className="flex flex-col gap-y-5">
        {steps.map((step, index) => {
          const isOpen = openIndex === index;
          const stepBg = index === 0 ? "#B9FF66" : "#F3F3F3";

          return (
            <motion.div
              key={index}
              layout
              className="rounded-4xl border border-b-6 border-[#191A23] overflow-hidden cursor-pointer"
              style={{
                backgroundColor: stepBg,
                boxShadow: "0 4px 10px rgba(25, 26, 35, 0.5)",
              }}
              onClick={() => toggle(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* Header */}
              <div
                className={`flex items-center justify-between sm:m-8 md:m-10 lg:m-12 py-8 border-b-2 ${
                  isOpen ? "border-[#191A23]" : "border-gray-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-bold text-lg">{step.number}</span>
                  <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                </div>

                {/* + / − Button */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold transition ${
                    isOpen ? "bg-[#191A23] text-white" : "bg-[#B9FF66] text-[#191A23]"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </div>
              </div>

              {/* Description */}
              <AnimatePresence>
                {isOpen && (
                  <motion.p
                    className="px-12 pb-6 text-[#191A23] text-sm md:text-base leading-relaxed"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {step.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
