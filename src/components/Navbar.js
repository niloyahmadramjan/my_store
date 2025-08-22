'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { data: session } = useSession()

  return (
    <nav className="bg-white dark:bg-gray-900 drop-shadow-md sticky top-0 z-50 transition-colors">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          MyStore
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            href="/"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="hover:text-blue-600 dark:hover:text-blue-400"
          >
            Products
          </Link>

          {/* Only show when user is logged in */}
          {session && (
            <Link
              href="/dashboard/add-product"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Add Products
            </Link>
          )}

          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-3 shadow-md transition-colors">
          <Link
            href="/"
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block hover:text-blue-600 dark:hover:text-blue-400"
          >
            Products
          </Link>

          {/* Only show when logged in */}
          {session && (
            <Link
              href="/dashboard/add-product"
              className="block hover:text-blue-600 dark:hover:text-blue-400"
            >
              Add Products
            </Link>
          )}

          {session ? (
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="w-full text-left cursor-pointer block text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="w-full cursor-pointer block text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  )
}
