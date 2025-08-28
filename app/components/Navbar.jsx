"use client";
import Image from "next/image"; // ✅ এটা যোগ করতে হবে
import Link from "next/link";
import logo from "@/public/images/logo.png";

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold">Positivus</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/about" className="hover:text-primary">About Us</Link>
          <Link href="/services" className="hover:text-primary">Services</Link>
          <Link href="/" className="hover:text-primary">Use Cases</Link>
          <Link href="/" className="hover:text-primary">Pricing</Link>
          <Link href="/" className="hover:text-primary">Blog</Link>
        </nav>

        {/* Button */}
        <div>
          <button className="text-dark px-4 py-2 border-2 rounded-lg font-medium hover:opacity-80">
            Request a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
