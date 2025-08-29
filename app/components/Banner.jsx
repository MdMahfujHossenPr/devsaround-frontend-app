import Image from "next/image";
import heroImg from "@/public/images/Illustration.png"; // নিজের Hero image এখানে রাখবে

export default function Banner() {
  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center py-16">
      
      {/* Left Content */}
      <div className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Navigating the
          <br />
          digital landscape
          <br />
          for success
        </h1>
        <p className="text-lg text-gray-600">
          We help brands like yours grow with smart marketing solutions 
          and powerful strategies designed for the modern digital world.
        </p>
        <button className="bg-[#191A23] text-white px-6 py-3 rounded-lg font-medium hover:opacity-80">
          Book a Consultation
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <Image
          src={heroImg}
          alt="Hero Image"
          className="rounded-lg"
          width={450}
          height={400}
          priority
        />
      </div>
    </section>
  );
}
