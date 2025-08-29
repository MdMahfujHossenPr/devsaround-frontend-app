"use client";

export default function TestimonialCard({ text, name, position }) {
  return (
    <div className="relative max-w-xl w-full mx-auto mb-10">
      {/* Message Box */}
      <div className="bg-[#191A23] border border-[#B9FF66] p-6 rounded-4xl shadow-lg relative">
        <p className="text-white text-sm md:text-base leading-relaxed">{text}</p>

        {/* Pointer Triangle at Bottom Left */}
{/* Pointer Triangle at Bottom Left */}
<div
  className="absolute -bottom-6 left-6 w-0 h-0"
  style={{
    borderLeft: "25px solid #B9FF66", // left border color
    borderRight: "25px solid #B9FF66", // right border color
    borderTop: "25px solid #191A23",   // top border matches card background
    backgroundColor: "transparent",    // full box na
  }}
></div>

      </div>

      {/* Name & Position outside card, bottom-left */}
      <div className="mt-8 ml-6">
        <h4 className="text-[#B9FF66] font-semibold">{name}</h4>
        <p className="text-white text-sm">{position}</p>
      </div>
    </div>
  );
}
