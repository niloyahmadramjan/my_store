const highlights = [
  { id: 1, name: 'Smartphone', desc: 'Latest 5G technology', price: '$799' },
  { id: 2, name: 'Headphones', desc: 'Noise-cancelling', price: '$199' },
  { id: 3, name: 'Laptop', desc: 'Lightweight and powerful', price: '$1299' },
]

export default function ProductHighlights() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Product Highlights
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {highlights.map((p) => (
          <div
            key={p.id}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
            <p className="text-gray-600 mb-2">{p.desc}</p>
            <p className="font-bold text-blue-600">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
