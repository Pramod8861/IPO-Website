"use client"

import { useState } from "react"
import { Menu, X, Search } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-bold text-gray-900">BLUESTOCK</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Community
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Learn
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
              Support
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-500" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">
              Sign In
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-gray-900">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Products
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Pricing
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Community
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Learn
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">
                Support
              </a>
              <button className="w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700">
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
