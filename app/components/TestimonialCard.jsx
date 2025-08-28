export default function TestimonialCard({ text, name, position }) {
  return (
    <div className="bg-light p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between h-full">
      <p className="text-gray-700 mb-4">"{text}"</p>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
    </div>
  );
}
