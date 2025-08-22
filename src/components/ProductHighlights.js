import clientPromise from '@/app/lib/mongodb'
import Link from 'next/link'

export default async function ProductsPage() {
  const client = await clientPromise
  const db = client.db('mystore')

  const highlightProducts = await db
    .collection('products')
    .find()
    .toArray()
  // const products = await db.collection('products').find({}).toArray()

  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 text-blue-600 text-center">
          Highlighted Products
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlightProducts.map((p) => (
            <div
              key={p._id}
              className="p-6 border-2 border-blue-600 rounded-xl shadow-md hover:shadow-lg transition "
            >
              <h2 className="text-xl font-bold mb-2">{p.name}</h2>
              <p className="text-gray-700 mb-3">{p.description}</p>
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
      </section>
    </main>
  )
}
