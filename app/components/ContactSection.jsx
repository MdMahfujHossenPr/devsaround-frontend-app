"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import contactImg from "@/public/images/contact.png";

export default function ContactSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto">
      {/* Section Heading */}
      <motion.div
        className="mb-10 text-center md:text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold flex flex-col md:flex-row items-center md:items-start">
          <span className="bg-[#B9FF66] px-2 py-1 mb-4 md:mb-0 md:mr-6">
            Contact Us
          </span>
          <span className="text-sm text-gray-600">
            Connect with Us: Let's Discuss Your{" "}
            <br className="hidden md:block" />
            Digital Marketing Needs
          </span>
        </h2>
      </motion.div>

      {/* Section Content */}
      <motion.div
        className="grid md:grid-cols-2 items-center bg-[#F3F3F3] rounded-2xl p-6 sm:p-10 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left: Contact Form */}
        <motion.div
          className="w-full"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>

        {/* Right: Contact Image (hidden on small screens) */}
        <motion.div
          className="w-full hidden sm:flex justify-center md:justify-end lg:ml-62"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src={contactImg}
            alt="Contact Image"
            width={450}
            height={400}
            className="rounded-lg max-w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
