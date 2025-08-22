import Link from 'next/link'
import clientPromise from '../lib/mongodb'

export default async function ProductsPage() {
  const client = await clientPromise
  const db = client.db('mystore')
  const products = await db.collection('products').find({}).toArray()
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">All Products</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p._id}
            className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
            <p className="text-gray-600 mb-3">{p.description}</p>
            <p className="font-bold text-blue-600 mb-4">${p.price}</p>
            <Link
              href={`/products/${p._id}`}
              className="inline-block px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
