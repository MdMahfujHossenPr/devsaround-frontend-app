export default function WorkingProcess() {
  const steps = [
    { number: "01", title: "Research", desc: "Understand your business goals and audience." },
    { number: "02", title: "Planning", desc: "Create a roadmap for digital marketing strategies." },
    { number: "03", title: "Design", desc: "Craft visually appealing content and assets." },
    { number: "04", title: "Development", desc: "Implement campaigns across platforms efficiently." },
    { number: "05", title: "Launch", desc: "Deploy marketing campaigns to reach your audience." },
    { number: "06", title: "Optimization", desc: "Analyze results and continuously improve performance." },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Our <span className="text-primary">Working Process</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-light rounded-xl p-6 flex flex-col items-center text-center shadow hover:shadow-lg transition">
            <div className="bg-primary text-dark rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
