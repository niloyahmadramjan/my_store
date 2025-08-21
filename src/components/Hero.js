import Image from 'next/image'
import shoppingImg from '@/app/Asset/shoping-woman.png'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Shop Smarter, <br />
            <span className="text-blue-600">Live Better</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-md mx-auto md:mx-0">
            Discover hand-picked products at unbeatable prices. Start shopping
            today and enjoy a seamless experience.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/products"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Browse Products
            </a>
            <a
              href="/login"
              className="px-6 py-3 rounded-lg bg-white text-blue-600 font-medium border border-blue-600 hover:bg-blue-50 transition"
            >
              Login
            </a>
          </div>
        </div>

        {/* Right content - image */}
        <div className="flex-1 relative w-full h-64 md:h-96">
          <Image
            src={shoppingImg} // put a banner/product image in /public folder
            alt="Shopping illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  )
}
