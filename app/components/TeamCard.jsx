"use client";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

export default function TeamCard({ img, name, role, desc }) {
  return (
    <motion.div
      className="bg-white shadow-md rounded-xl p-6 flex gap-4 flex-col cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: "0px 15px 35px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Top Row: Image + Info (with underline) */}
      <motion.div
        className="flex items-center gap-4 w-full relative pb-2"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {/* Left Image */}
        <div className="flex-shrink-0">
          <Image
            src={img}
            alt={name}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Right Info */}
        <div className="flex flex-col flex-1">
          {/* Role + LinkedIn */}
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold">{role}</span>
            <div className="bg-[#191A23] text-[#B9FF66] p-2 rounded-full">
              <FaLinkedinIn size={14} />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-lg font-bold">{name}</h3>
        </div>

        {/* Underline */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#191A23]"></div>
      </motion.div>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-3">{desc}</p>
    </motion.div>
  );
}
