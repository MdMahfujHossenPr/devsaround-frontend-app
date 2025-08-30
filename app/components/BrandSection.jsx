"use client";
import Image from "next/image";
import amazon from "@/public/images/amazon.png";
import dribbble from "@/public/images/dribbble.png";
import hubspot from "@/public/images/hubspot.png";
import notion from "@/public/images/notion.png";
import netflix from "@/public/images/netflix.png";
import zoom from "@/public/images/zoom.png";

const brands = [
  { src: amazon, alt: "Amazon" },
  { src: dribbble, alt: "Dribbble" },
  { src: hubspot, alt: "HubSpot" },
  { src: notion, alt: "Notion" },
  { src: netflix, alt: "Netflix" },
  { src: zoom, alt: "Zoom" },
];

export default function BrandSection() {
  return (
    <section className="bg-light py-14 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full overflow-hidden group">
          {/* Marquee Container */}
          <div className="flex animate-marquee space-x-16 group-hover:[animation-play-state:paused]">
            {[...brands, ...brands].map((brand, index) => (
              <Image
                key={index}
                src={brand.src}
                alt={brand.alt}
                className="h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
