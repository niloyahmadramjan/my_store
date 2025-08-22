'use client'

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-700 mb-6">
          {error?.message || 'Unknown error'}
        </p>

        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Try Again
        </button>
      </body>
    </html>
  )
}
