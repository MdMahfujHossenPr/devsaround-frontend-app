"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "@/public/images/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/", label: "Use Cases" },
    { href: "/", label: "Pricing" },
    { href: "/", label: "Blog" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold">Positivus</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {links.map((link, idx) => (
            <Link key={idx} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Request Button */}
        <div className="hidden md:block">
          <button className="text-dark px-4 py-2 border-2 rounded-lg font-medium hover:opacity-80">
            Request a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col space-y-3">
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button className="text-dark px-4 py-2 border-2 rounded-lg font-medium hover:opacity-80 mt-2">
            Request a Quote
          </button>
        </nav>
      )}
    </header>
  );
}
