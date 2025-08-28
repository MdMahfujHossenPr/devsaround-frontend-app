import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ServiceCard({ title, desc, img, bg, titleBg }) {
  // Text color adjustment based on background
  const descColor = bg === "#191A23" ? "text-gray-300" : "text-gray-600";
  const buttonColor = bg === "#191A23" ? "text-white" : "text-primary";

  // Icon background & text color conditionally
  const iconClasses =
    bg === "#191A23"
      ? "bg-white text-black hover:bg-green-600 hover:text-white"
      : "bg-black text-white hover:bg-green-600 hover:text-white";

  return (
    <div
      className={`rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-center md:items-start justify-between shadow-md hover:shadow-lg transition w-full`}
      style={{ backgroundColor: bg, minHeight: "150px" }}
    >
      {/* Left Content */}
      <div className={`space-y-4 md:space-y-16 flex flex-col justify-around md:text-left`}>
        <h3
          className={`text-lg md:text-xl font-semibold px-2 py-1 rounded w-6/8`}
          style={{ backgroundColor: titleBg }}
        >
          {title}
        </h3>
        <p className={`text-sm md:text-base ${descColor}`}>{desc}</p>

        {/* Button with custom icon */}
        <button
          className={`flex items-center gap-2 font-medium transition hover:underline ${buttonColor}`}
        >
          {/* আইকন কন্ডিশনাল bg + text color */}
          <span className={`p-1 rounded-full transition ${iconClasses}`}>
            <ArrowUpRight size={20} />
          </span>

          {/* লেখা শুধু বড় স্ক্রিনে */}
          <span className="hidden md:inline">Learn more</span>
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-3 md:mt-0 md:ml-4 flex-shrink-0">
        <Image
          src={img}
          alt={title}
          width={210}
          height={170}
          className="object-contain"
        />
      </div>
    </div>
  );
}
