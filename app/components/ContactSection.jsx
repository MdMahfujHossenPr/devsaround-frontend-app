import Image from "next/image";
import ContactForm from "./ContactForm";
import contactImg from "@/public/images/contact.png";

export default function ContactSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto">

      {/* Section Heading */}
      <div className="mb-10 text-center md:text-left">
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
      </div>

      {/* Section Content */}
      <div className="grid md:grid-cols-2 items-center bg-[#F3F3F3] rounded-2xl p-6 sm:p-10 gap-8">
        {/* Left: Contact Form */}
        <div className="w-full">
          <ContactForm />
        </div>

        {/* Right: Contact Image */}
        <div className="w-full flex justify-center md:justify-end lg:ml-62">
          <Image
            src={contactImg}
            alt="Contact Image"
            width={450}
            height={400}
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
