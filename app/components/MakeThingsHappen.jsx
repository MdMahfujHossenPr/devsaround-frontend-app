"use client";
import Image from "next/image";

export default function MakeThingsHappen() {
  return (
    <section className="max-w-7xl mx-auto bg-[#F3F3F3] rounded-3xl">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-12 lg:px-20 py-12">
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Let’s make things happen
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-md hover:bg-gray-800 transition">
            Get your free proposal
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/images/marketing.png" 
            alt="Marketing Illustration"
            width={500}
            height={400}
            className="rounded-xl object-contain w-full h-auto max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
