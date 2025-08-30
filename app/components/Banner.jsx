"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import heroImg from "@/public/images/Illustration.png";  

export default function Banner() {
  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center py-16 overflow-hidden">
      
      {/* Left Content */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Navigating the
          <br />
          digital landscape
          <br />
          for success
        </motion.h1>

        <motion.p
          className="text-lg text-gray-600"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          We help brands like yours grow with smart marketing solutions 
          and powerful strategies designed for the modern digital world.
        </motion.p>

        <motion.button
          className="bg-[#191A23] text-white px-6 py-3 rounded-lg font-medium hover:opacity-80"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Book a Consultation
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src={heroImg}
            alt="Hero Image"
            className="rounded-lg"
            width={450}
            height={400}
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
