"use client";
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const testimonials = [
    { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "Alice Johnson", position: "CEO, TechCorp" },
    { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "Bob Smith", position: "Marketing Head, StartUpX" },
    { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "Cathy Lee", position: "Founder, Creatives" },
    { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "David Kim", position: "CTO, WebSolutions" },
    { text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.", name: "Emma Brown", position: "Manager, BrightCo" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToIndex = (index) => setCurrentIndex(index);

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto bg-[#191A23]">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white">
        What Our <span className="text-[#B9FF66]">Clients Say</span>
      </h2>

      {/* Single Card */}
      <TestimonialCard {...testimonials[currentIndex]} />

      {/* Navigation Dots */}
      <div className="flex justify-center mt-6 gap-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition ${
              currentIndex === idx ? "bg-[#B9FF66]" : "bg-gray-500"
            }`}
            onClick={() => goToIndex(idx)}
          ></button>
        ))}
      </div>
    </section>
  );
}
