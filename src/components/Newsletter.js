'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Subscribed with: ${email}`)
    setEmail('')
  }

  return (
    <section className=" max-w-7xl mx-auto bg-gray-100 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Subscribe to our Newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Get the latest updates, offers and products directly to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:flex-1 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
