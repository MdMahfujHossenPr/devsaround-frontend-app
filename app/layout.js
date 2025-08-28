import "./globals.css";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";

export const metadata = {
  title: "Positivus",
  description: "Digital Marketing Agency Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-dark">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
