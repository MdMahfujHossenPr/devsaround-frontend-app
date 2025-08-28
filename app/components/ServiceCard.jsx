import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ title, desc, img, bg }) {
  // Text color adjustment based on background
  const textColor = bg === "#191A23" ? "text-white" : "text-gray-800";
  const descColor = bg === "#191A23" ? "text-gray-300" : "text-gray-600";
  const buttonColor = bg === "#191A23" ? "text-white" : "text-primary";

  return (
    <div
      className={`rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-center md:items-start justify-between shadow-md hover:shadow-lg transition w-full`}
      style={{ backgroundColor: bg, minHeight: "150px" }}
    >
      {/* Left Content */}
      <div className={`space-y-2 md:space-y-3 flex-1 text-center md:text-left`}>
        <h3 className={`text-lg md:text-xl w-5/8 font-semibold ${textColor}`}>{title}</h3>
        <p className={`text-sm md:text-base ${descColor}`}>{desc}</p>
        <button className={`flex items-center gap-2 font-medium hover:underline ${buttonColor}`}>
          Learn more <ArrowRight size={16} />
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-3 md:mt-0 md:ml-4 flex-shrink-0">
        <Image src={img} alt={title} width={210} height={170} className="object-contain" />
      </div>
    </div>
  );
}
