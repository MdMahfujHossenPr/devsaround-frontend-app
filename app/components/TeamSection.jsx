import TeamCard from "./TeamCard";
import member1 from "@/public/images/member1.png";
import member2 from "@/public/images/member2.png";
import member3 from "@/public/images/member3.png";
import member4 from "@/public/images/member4.png";
import member5 from "@/public/images/member5.png";
import member6 from "@/public/images/member6.png";

export default function TeamSection() {
  const team = [
    { img: member1, name: "Alice Johnson", role: "CEO & Founder", desc: "Leading the team with vision and strategy." },
    { img: member2, name: "Bob Smith", role: "Marketing Head", desc: "Crafting campaigns that deliver results." },
    { img: member3, name: "Cathy Lee", role: "UI/UX Designer", desc: "Designing user-friendly experiences." },
    { img: member4, name: "David Kim", role: "Developer", desc: "Building fast and scalable web apps." },
    { img: member5, name: "Emma Brown", role: "Content Strategist", desc: "Creating engaging and compelling content." },
    { img: member6, name: "Frank Wilson", role: "SEO Specialist", desc: "Optimizing websites for better visibility." },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center md:text-left flex flex-col md:flex-row items-center md:items-start">
        <span className="bg-[#B9FF66] px-2 py-1 mb-4 md:mb-0 md:mr-6">
           Team
        </span>
        <span className="text-sm text-gray-600 text-center md:text-left">
          Meet the skilled and experienced team behind our{" "}
          <br className="hidden md:block" />
          successful digital marketing strategies.
        </span>
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
