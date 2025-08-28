import ServiceCard from "./ServiceCard";
import seoImg from "@/public/images/seo.png";
import ppcImg from "@/public/images/ppc.png";
import contentImg from "@/public/images/content.png";
import socialImg from "@/public/images/social.png";
import emailImg from "@/public/images/email.png";
import analyticsImg from "@/public/images/analytics.png";

export default function ServicesSection() {
  const bgColors = ["#F3F3F3", "#B9FF66", "#191A23"];

  const services = [
    {
      title: "Search Engine Optimization",
      desc: "Boost your rankings and get discovered with advanced SEO strategies.",
      img: seoImg,
      bg: bgColors[0 % bgColors.length],
    },
    {
      title: "Pay Per Click Advertising",
      desc: "Drive instant traffic with Google Ads, Meta Ads and more.",
      img: ppcImg,
      bg: bgColors[1 % bgColors.length],
    },
    {
      title: "Content Marketing",
      desc: "Engaging blogs, copywriting, and articles that convert.",
      img: contentImg,
      bg: bgColors[2 % bgColors.length],
    },
    {
      title: "Social Media Marketing",
      desc: "Build brand awareness across all social platforms.",
      img: socialImg,
      bg: bgColors[0 % bgColors.length],
    },
    {
      title: "Email Marketing",
      desc: "Targeted email campaigns to engage and convert leads.",
      img: emailImg,
      bg: bgColors[1 % bgColors.length],
    },
    {
      title: "Analytics & Reporting",
      desc: "Data-driven insights to measure and optimize campaigns.",
      img: analyticsImg,
      bg: bgColors[2 % bgColors.length],
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left flex flex-col md:flex-row items-center md:items-start">
        <span className="bg-[#B9FF66] px-2 py-1 mb-4 md:mb-0 md:mr-6">
          Our Services
        </span>
        <span className="text-sm text-gray-600 text-center md:text-left">
          At our digital marketing agency, we offer a range of services to{" "}
          <br className="hidden md:block" />
          help businesses grow and succeed online. These services include:
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} bg={service.bg} />
        ))}
      </div>
    </section>
  );
}
