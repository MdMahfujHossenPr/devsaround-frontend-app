import Image from "next/image";
import ContactForm from "./ContactForm";
import contactImg from "@/public/images/contact.png";

export default function ContactSection() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-[#F3F3F3]">
      <div className="px-24">
        <ContactForm />
      </div>
      
      <div className="flex justify-center md:justify-end">
        <Image src={contactImg} alt="Contact Image" width={450} height={400} className="rounded-lg" />
      </div>
    </section>
  );
}
