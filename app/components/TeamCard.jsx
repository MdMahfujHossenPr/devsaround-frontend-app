import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

export default function TeamCard({ img, name, role, desc }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-4 hover:shadow-lg transition flex-col">
      {/* Top Row: Image + Info (with underline) */}
      <div className="flex items-center gap-4 w-full relative pb-2">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <Image
            src={img}
            alt={name}
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>

        {/* Right Info */}
        <div className="flex flex-col flex-1">
          {/* Role + LinkedIn */}
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold">{role}</span>
            <div className="bg-[#191A23] text-[#B9FF66] p-2 rounded-full">
              <FaLinkedinIn size={14} />
            </div>
          </div>

          {/* Name */}
          <h3 className="text-lg font-bold">{name}</h3>
        </div>

        {/* Underline (goes under both image + name) */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#191A23]"></div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-3">{desc}</p>
    </div>
  );
}
