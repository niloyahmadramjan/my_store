'use client'
import Image from 'next/image'
import shoppingImg from '@/app/Asset/shoping-woman.png'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col md:flex-row items-center gap-12 shadow-md mt-10">
        {/* Left content */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-700"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Shop Smarter, <br />
            <span className="text-blue-600">Live Better</span>
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-md mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover hand-picked products at unbeatable prices. Start shopping
            today and enjoy a seamless experience.
          </motion.p>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/products"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            >
              Browse Products
            </Link>
            <Link
              href="/login"
              className="px-6 py-3 rounded-lg bg-white text-blue-600 font-medium border border-blue-600 hover:bg-blue-50 transition"
            >
              Login
            </Link>
          </motion.div>
        </motion.div>

        {/* Right content - image */}
        <motion.div
          className="flex-1 relative w-full h-64 md:h-96"
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
        >
          <Image
            src={shoppingImg}
            alt="Shopping illustration"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
