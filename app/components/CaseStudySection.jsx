"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function CaseStudySection() {
  const cases = [
    {
      title: "E-commerce Growth Strategy",
      desc: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
      title: "B2B Lead Generation",
      desc: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
      title: "Social Media Campaign",
      desc: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left flex flex-col md:flex-row items-center md:items-start"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="bg-[#B9FF66] px-2 py-1 mb-4 md:mb-0 md:mr-6">
          Case Studies
        </span>
        <span className="text-sm text-gray-600 text-center md:text-left">
          Explore Real-Life Examples of Our Proven Digital Marketing{" "}
          <br className="hidden md:block" />
          Success through Our Case Studies:
        </span>
      </motion.h2>

      {/* Case Cards */}
      <motion.div
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#191A23] text-white py-16 px-6 rounded-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {cases.map((c, index) => {
          const buttonColor = "text-[#B9FF66] hover:text-[#B9FF66]";
          const iconClasses = "bg-[#2A2B36] text-[#B9FF66]";

          return (
            <motion.div
              key={index}
              className="border-r-2 border-[#2A2B36] flex flex-col justify-between p-6 rounded-xl cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.2)",
              }}
            >
              {/* Content */}
              <div className="space-y-3 flex-1">
                <h3 className="text-lg md:text-xl font-semibold">{c.title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  {c.desc}
                </p>
              </div>

              {/* Button */}
              <motion.button
                className={`mt-6 flex items-center gap-2 font-medium transition ${buttonColor}`}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <span className="hidden md:inline">Learn more</span>
                <span className={`${iconClasses}`}>
                  <ArrowUpRight size={20} />
                </span>
              </motion.button>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
