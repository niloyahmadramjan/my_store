'use client'
import { signIn } from 'next-auth/react'
import { LogIn, Mail, Shield } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-6">
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 max-w-md w-full text-center border dark:border-gray-700">
        {/* Header */}
        <div className="flex justify-center mb-4">
          <Shield className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          Login to{' '}
          <span className="text-blue-600 dark:text-blue-400">MyStore</span>
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Access your account to explore products & offers
        </p>

        {/* Google Login Button */}
        <button
          onClick={() => signIn('google', { callbackUrl: '/products' })}
          className="w-full cursor-pointer py-3 px-6 flex items-center justify-center gap-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <LogIn className="w-5 h-5" />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-300 dark:border-gray-600"></div>
        </div>

        {/* Email/Password (Optional Future Expansion) */}
        <form className="space-y-4">
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 ml-2 bg-transparent outline-none text-gray-700 dark:text-gray-200"
            />
          </div>

          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-gray-700">
            <Shield className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              placeholder="Enter your password"
              className="flex-1 ml-2 bg-transparent outline-none text-gray-700 dark:text-gray-200"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" />
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
