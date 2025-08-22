export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">MyStore</h2>
          <p className="text-sm leading-6">
            Your trusted online shop for the latest gadgets, electronics, and
            accessories. Quality products at affordable prices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-blue-500 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Customer Support
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="hover:text-blue-500 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="/returns" className="hover:text-blue-500 transition">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="/shipping" className="hover:text-blue-500 transition">
                Shipping Info
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-blue-500 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Get in Touch
          </h3>
          <p className="text-sm mb-2">📍 123 Main Street, Dhaka, Bangladesh</p>
          <p className="text-sm mb-2">📞 +880 1234 567 890</p>
          <p className="text-sm mb-4">✉️ support@mystore.com</p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-400 transition"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-pink-500 transition"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-red-600 transition"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()}{' '}
          <span className="text-white font-medium">MyStore</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
