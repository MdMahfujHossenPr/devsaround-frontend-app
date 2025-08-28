import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() {
  const testimonials = [
    { text: "Amazing service! Our traffic increased by 200%!", name: "Alice Johnson", position: "CEO, TechCorp" },
    { text: "The team is professional and delivers results.", name: "Bob Smith", position: "Marketing Head, StartUpX" },
    { text: "Highly recommend for digital marketing solutions.", name: "Cathy Lee", position: "Founder, Creatives" },
    { text: "Our SEO rankings improved drastically.", name: "David Kim", position: "CTO, WebSolutions" },
    { text: "Excellent support and strategy guidance.", name: "Emma Brown", position: "Manager, BrightCo" },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        What Our <span className="text-primary">Clients Say</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} {...t} />
        ))}
      </div>
    </section>
  );
}
