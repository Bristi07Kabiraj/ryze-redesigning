export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      text: "Ryze AI helped us double our lead conversions within weeks."
    },
    {
      name: "David Lee",
      role: "Startup Founder",
      text: "The AI assistant feels natural and saves our team hours every day."
    },
    {
      name: "Priya Sharma",
      role: "Sales Lead",
      text: "An essential tool for scaling customer conversations."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Users Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-gray-600 mb-4">
                “{item.text}”
              </p>
              <h4 className="font-bold">{item.name}</h4>
              <span className="text-sm text-gray-500">
                {item.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}