import Link from 'next/link'

export default function SpecialOffer() {
  return (
    <section className="max-w-7xl mx-auto bg-gradient-to-r from-blue-600 to-blue-500 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl font-bold mb-2">🎉 Summer Sale</h2>
          <p className="text-lg">
            Up to <span className="font-bold">50% Off</span> on selected items!
          </p>
        </div>
        <Link
          href="/products"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Shop Sale
        </Link>
      </div>
    </section>
  )
}
