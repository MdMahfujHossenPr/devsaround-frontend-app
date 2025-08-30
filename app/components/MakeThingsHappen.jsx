"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MakeThingsHappen() {
  return (
    <motion.section
      className="max-w-7xl mx-auto bg-[#F3F3F3] rounded-3xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-12 lg:px-20 py-12">
        
        {/* Left Content */}
        <motion.div
          className="lg:w-1/2 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Let’s make things happen
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <motion.button
            className="bg-black text-white px-6 md:px-8 py-3 md:py-4 rounded-lg shadow-md hover:bg-gray-800 transition"
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Get your free proposal
          </motion.button>
        </motion.div>

        {/* Right Image (hidden on small screens) */}
        <motion.div
          className="lg:w-1/2 hidden sm:flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="/images/marketing.png"
            alt="Marketing Illustration"
            width={500}
            height={400}
            className="rounded-xl object-contain w-full h-auto max-w-md"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
