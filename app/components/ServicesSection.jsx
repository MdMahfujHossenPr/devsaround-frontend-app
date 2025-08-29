import ServiceCard from "./ServiceCard";
import seoImg from "@/public/images/seo.png";
import ppcImg from "@/public/images/ppc.png";
import contentImg from "@/public/images/content.png";
import socialImg from "@/public/images/social.png";
import emailImg from "@/public/images/email.png";
import analyticsImg from "@/public/images/analytics.png";

export default function ServicesSection() {
  const bgColors = ["#F3F3F3", "#B9FF66", "#191A23"];
  const titleBgColors = ["#B9FF66", "#F3F3F3", "#F3F3F3"]; // title-এর জন্য

  const services = [
    {
      title: "Search Engine Optimization",
      img: seoImg,
      bg: bgColors[0 % bgColors.length],
      titleBg: titleBgColors[0 % titleBgColors.length],
    },
    {
      title: "Pay-per-click-advertising",
      img: ppcImg,
      bg: bgColors[1 % bgColors.length],
      titleBg: titleBgColors[1 % titleBgColors.length],
    },
    {
      title: "Social Media Marketing",
      img: contentImg,
      bg: bgColors[2 % bgColors.length],
      titleBg: titleBgColors[2 % titleBgColors.length],
    },
    {
      title: "Email Marketing",
      img: socialImg,
      bg: bgColors[0 % bgColors.length],
      titleBg: titleBgColors[0 % titleBgColors.length],
    },
    {
      title: "Content Marketing",
      img: emailImg,
      bg: bgColors[1 % bgColors.length],
      titleBg: titleBgColors[1 % titleBgColors.length],
    },
    {
      title: "Analytics & Reporting",
      img: analyticsImg,
      bg: bgColors[2 % bgColors.length],
      titleBg: titleBgColors[0 % titleBgColors.length],
    },
  ];

  return (
    <section className="py-16 max-w-7xl mx-auto">
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
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
