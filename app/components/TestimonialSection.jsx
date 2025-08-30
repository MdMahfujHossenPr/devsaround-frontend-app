"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const testimonials = [
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "Alice Johnson",
      position: "CEO, TechCorp",
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "Bob Smith",
      position: "Marketing Head, StartUpX",
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "Cathy Lee",
      position: "Founder, Creatives",
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "David Kim",
      position: "CTO, WebSolutions",
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "Emma Brown",
      position: "Manager, BrightCo",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToIndex = (index) => setCurrentIndex(index);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      // swipe left → next
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    } else if (info.offset.x > 50) {
      // swipe right → prev
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }
  };

  return (
    <section className="py-16 max-w-7xl mx-auto">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left flex flex-col md:flex-row items-center md:items-start"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="bg-[#B9FF66] px-2 py-1 mb-4 md:mb-0 md:mr-6">
          Testimonials
        </span>
        <span className="text-sm text-gray-600 text-center md:text-left">
          Hear from Our Satisfied Clients: Read Our Testimonials{" "}
          <br className="hidden md:block" />
          to Learn More about Our Digital Marketing Services
        </span>
      </motion.h2>

      {/* Card Section */}
      <div className="bg-[#191A23] rounded-[2rem] p-8 py-16 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <TestimonialCard {...testimonials[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {testimonials.map((_, idx) => (
            <motion.button
              key={idx}
              className="w-3 h-3 rounded-full transition-all"
              onClick={() => goToIndex(idx)}
              animate={{
                backgroundColor: currentIndex === idx ? "#B9FF66" : "#6B7280",
                scale: currentIndex === idx ? 1.3 : 1,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
