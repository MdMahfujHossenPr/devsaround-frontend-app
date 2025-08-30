"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ title, desc, img, bg, titleBg }) {
  // Text color adjustment based on background
  const descColor = bg === "#191A23" ? "text-gray-300" : "text-gray-600";
  const buttonColor = bg === "#191A23" ? "text-white" : "text-primary";

  // Icon background & text color conditionally
  const iconClasses =
    bg === "#191A23"
      ? "bg-white text-black hover:bg-green-600 hover:text-white"
      : "bg-black text-white hover:bg-green-600 hover:text-white";

  return (
    <motion.div
      className="rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-center md:items-start justify-between shadow-md transition w-full cursor-pointer"
      style={{ backgroundColor: bg, minHeight: "150px" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 15px 35px rgba(0,0,0,0.15)",
      }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Left Content */}
      <motion.div
        className="space-y-4 md:space-y-16 flex flex-col justify-around md:text-left"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3
          className="text-lg md:text-xl font-semibold px-2 py-1 rounded w-6/8"
          style={{ backgroundColor: titleBg }}
        >
          {title}
        </h3>
        <p className={`text-sm md:text-base ${descColor}`}>{desc}</p>

        {/* Button with custom icon */}
        <motion.button
          className={`flex items-center gap-2 font-medium transition hover:underline ${buttonColor}`}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <span className={`p-1 rounded-full transition ${iconClasses}`}>
            <ArrowUpRight size={20} />
          </span>
          <span className="hidden md:inline">Learn more</span>
        </motion.button>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="mt-3 md:mt-0 md:ml-4 flex-shrink-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Image
          src={img}
          alt={title}
          width={210}
          height={170}
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
