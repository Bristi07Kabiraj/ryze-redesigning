export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-10">Pricing</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { plan: "Starter", price: "$19/mo" },
          { plan: "Pro", price: "$49/mo" },
          { plan: "Enterprise", price: "Custom" },
        ].map(p => (
          <div key={p.plan} className="border rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">{p.plan}</h3>
            <p className="text-2xl font-bold mb-4">{p.price}</p>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded-md cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg active:scale-95">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}