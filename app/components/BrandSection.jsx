import Image from "next/image";
import amazon from "@/public/images/amazon.png";
import dribbble from "@/public/images/dribbble.png";
import hubspot from "@/public/images/hubspot.png";
import notion from "@/public/images/notion.png";
import netflix from "@/public/images/netflix.png";
import zoom from "@/public/images/zoom.png";

export default function BrandSection() {
  return (
    <section className="bg-light py-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 items-center justify-items-center">
          <Image src={amazon} alt="Amazon" className="h-8 w-auto" />
          <Image src={dribbble} alt="Dribbble" className="h-8 w-auto" />
          <Image src={hubspot} alt="HubSpot" className="h-8 w-auto" />
          <Image src={notion} alt="Notion" className="h-8 w-auto" />
          <Image src={netflix} alt="Netflix" className="h-8 w-auto" />
          <Image src={zoom} alt="Zoom" className="h-8 w-auto" />
        </div>
      </div>
    </section>
  );
}

