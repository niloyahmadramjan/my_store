
import { requireAuth } from '@/app/lib/auth'
import clientPromise from '@/app/lib/mongodb'
import { redirect } from 'next/navigation'

export default async function AddProductPage() {
  const session = await requireAuth()

  if (!session) {
    redirect('/login')
  }

  // server action
  async function addProduct(formData) {
    'use server'
    const name = formData.get('name')
    const description = formData.get('description')
    const price = parseFloat(formData.get('price'))

    try {
      const client = await clientPromise
      const db = client.db('mystore')
      const products = db.collection('products')

      await products.insertOne({
        name,
        description,
        price,
        createdAt: new Date(),
        user: session.user.email,
      })

      // ✅ server থেকে safe redirect
      // return redirect('/products')
    } catch (err) {
      console.error('Error inserting product:', err)
      throw new Error('Database insert failed')
    }
  }

  return (
    <main className="max-w-2xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Add a New Product</h1>

      <form action={addProduct} className="space-y-6 shadow-md p-6 rounded-lg">
        <div>
          <label className="block text-gray-700 font-medium">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            rows="3"
            required
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium">Price ($)</label>
          <input
            type="number"
            name="price"
            required
            className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </main>
  )
}
