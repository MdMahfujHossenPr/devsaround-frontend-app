"use client";
import { useState } from "react";

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
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left flex flex-col md:flex-row items-center md:items-start">
        <span className="bg-[#B9FF66] px-2 py-1 mb-4 md:mb-0 md:mr-6">
          Our  Working Process
        </span>
        <span className="text-sm text-gray-600 text-center md:text-left">
         Step-by-Step Guide to Achieving{" "}
          <br className="hidden md:block" />
          Your Business Goals
        </span>
      </h2>
 
      <div className="flex flex-col gap-y-5">
        {steps.map((step, index) => {
          const isOpen = openIndex === index;
          const stepBg = index === 0 ? "#B9FF66" : "#F3F3F3";

          return (
            <div
              key={index}
              className="rounded-4xl border border-b-6 border-[#191A23] overflow-hidden transition-all duration-300"
              style={{
                backgroundColor: stepBg,
                boxShadow: "0 4px 10px rgba(25, 26, 35, 0.5)",
              }}
            >
              {/* Header */}
              <div
                className={`flex items-center justify-between sm:m-8 md:m-10 lg:m-12 py-8 cursor-pointer border-b-2 ${
                  isOpen ? "border-[#191A23]" : "border-gray-300"
                } transition-all duration-300`}
                onClick={() => toggle(index)}
              >
                <div className="flex items-center gap-4">
                  <span className="font-bold text-lg">{step.number}</span>
                  <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                </div>

                {/* + / − Button with rounded background */}
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-xl font-bold transition ${
                    isOpen ? "bg-[#191A23] text-white" : "bg-[#B9FF66] text-[#191A23]"
                  }`}
                >
                  {isOpen ? "−" : "+"}
                </div>
              </div>
                 
              {/* Description */}
              {isOpen && (
                <p className="px-12 pb-6 text-[#191A23] dark:text-[#191A23] text-sm md:text-base leading-relaxed transition-all duration-300">
                  {step.desc}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
