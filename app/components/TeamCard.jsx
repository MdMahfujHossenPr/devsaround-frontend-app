import Image from "next/image";

export default function TeamCard({ img, name, role, desc }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-4 hover:shadow-lg transition">
      {/* Left Image */}
      <div className="flex-shrink-0">
        <Image src={img} alt={name} width={100} height={100} className="rounded-full" />
      </div>

      {/* Right Info */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-1">
          <div className="bg-dark text-primary px-2 py-1 rounded">IN</div>
          <span className="font-semibold">{role}</span>
        </div>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{desc}</p>
      </div>
    </div>
  );
}
