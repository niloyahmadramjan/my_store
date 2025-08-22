'use client'
import { motion } from 'framer-motion'
import { Truck, ShieldCheck, Headphones, BadgeCheck } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Free Delivery',
      desc: 'Get your products delivered at no extra cost.',
      icon: <Truck className="w-10 h-10 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: 'Secure Payment',
      desc: 'Your payment information is safe with us.',
      icon: (
        <ShieldCheck className="w-10 h-10 text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      title: '24/7 Support',
      desc: 'We’re always here to help you anytime.',
      icon: (
        <Headphones className="w-10 h-10 text-blue-600 dark:text-blue-400" />
      ),
    },
    {
      title: 'Quality Guarantee',
      desc: 'Only top-quality products for our customers.',
      icon: (
        <BadgeCheck className="w-10 h-10 text-blue-600 dark:text-blue-400" />
      ),
    },
  ]

  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
