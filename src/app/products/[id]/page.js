import { notFound } from 'next/navigation'
import clientPromise from '@/app/lib/mongodb'
import { ObjectId } from 'mongodb'

export default async function ProductDetails({ params }) {
  const { id } = await params  
  const client = await clientPromise
  const db = client.db('mystore')

  // params.id string, এটাকে ObjectId বানাতে হবে
  const product = await db.collection('products').findOne({
    _id: new ObjectId(id),
  })

  if (!product) {
    return notFound() // shows Next.js 404 page if product not found
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className="text-2xl font-semibold text-blue-600 mb-6">
        ${product.price}
      </p>

      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </main>
  )
}
