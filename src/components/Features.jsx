export default function Features() {
  const features = [
    {
      title: "AI-Powered Conversations",
      description: "Engage users with intelligent, human-like AI chat."
    },
    {
      title: "Lead Qualification",
      description: "Automatically identify and prioritize high-quality leads."
    },
    {
      title: "Real-Time Analytics",
      description: "Track performance and conversions instantly."
    },
    {
      title: "Multi-Channel Support",
      description: "Chat across web, email, and messaging platforms."
    },
    {
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools."
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security and data protection."
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="text-indigo-600 text-2xl mb-4">⚡</div>
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}