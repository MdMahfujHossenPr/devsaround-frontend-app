import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        {/* Logo */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full"></div>
            <span className="text-xl font-bold">Positivus</span>
          </div>
          <p className="mt-4 text-sm">©2023 Positivus. All Rights Reserved</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/">Blog</Link></li>
            <li><Link href="/">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm">Email: info@gaijai</p>
          <p className="text-sm">Phone: 93847273</p>
          <p className="text-sm">Address: Dhaka, Bangladesh</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-3">Subscribe</h3>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="px-3 py-2 rounded-l-md text-dark w-full"
            />
            <button className="bg-primary text-dark px-4 py-2 rounded-r-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
