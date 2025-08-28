import Image from "next/image";
import { ArrowRight } from "lucide-react";
import case1 from "@/public/images/Icon.png";
 
 

export default function CaseStudySection() {
  const cases = [
    {
      title: "E-commerce Growth Strategy",
      desc: "Boosted online sales by 120% with a data-driven marketing approach.",
      img: case1,
    },
    {
      title: "B2B Lead Generation",
      desc: "Generated high-quality leads for SaaS companies using SEO & Ads.",
      img: case1,
    },
    {
      title: "Social Media Campaign",
      desc: "Created viral campaigns that increased brand awareness by 80%.",
      img: case1,
    },
  ];

  return (
    <section className="bg-dark text-light py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {cases.map((c, index) => (
          <div key={index} className="bg-gray-900 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="text-gray-300 text-sm">{c.desc}</p>
            </div>
            <button className="mt-6 flex items-center gap-2 text-primary font-medium hover:underline">
              Learn more <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
