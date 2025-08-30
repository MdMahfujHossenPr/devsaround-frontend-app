"use client";
import Link from "next/link";
import { FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import logos from "@/public/images/logos.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-12 px-6 max-w-7xl mx-auto space-y-16 rounded-tr-4xl rounded-tl-4xl mt-16">
      <div>
        {/* Step 1: Top Navbar style */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo + Name */}
          <div className="flex items-center space-x-2">
            <Image src={logos} alt="Logo" className="w-8 h-8" />
            <span className="text-xl font-bold">Positivus</span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link href="/about" className="hover:text-primary">
              About Us
            </Link>
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
            <Link href="/" className="hover:text-primary">
              Use Cases
            </Link>
            <Link href="/" className="hover:text-primary">
              Pricing
            </Link>
            <Link href="/" className="hover:text-primary">
              Blog
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            <Link href="/">
              <FaLinkedin className="hover:text-primary" />
            </Link>
            <Link href="/">
              <FaFacebook className="hover:text-primary" />
            </Link>
            <Link href="/">
              <FaTwitter className="hover:text-primary" />
            </Link>
          </div>
        </div>

        {/* Step 2: Contact + Subscribe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us:</h3>
            <p className="text-sm">Email: info@positivus.com</p>
            <p className="text-sm mt-2">
              Address: 1234 Main St
              <br />
              Moonstone City, Stardust State 12345
            </p>
          </div>

          {/* Newsletter */}
          <div className="bg-[#292A32] rounded-lg flex flex-col sm:flex-row w-full p-8 gap-4">
            {/* Email Button Style */}
            <button className="bg-[#292A32] text-white px-4 py-3 border border-[#FFFFFF] rounded-lg w-full sm:flex-1 text-left focus:outline-none">
              Your Email
            </button>

            {/* Subscribe Button */}
            <button className="bg-[#B9FF66] text-[#292A32] px-4 py-3 rounded-lg w-full sm:flex-1 focus:outline-none">
              Subscribe to news
            </button>
          </div>
        </div>

        {/* Step 3: Bottom line + copyright */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 mt-12">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <Link href="/" className="hover:text-primary">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
