'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'الرئيسية' },
    { href: '/courses', label: 'جدول الدورات' },
    { href: '/training-methodology', label: 'أسلوبنا التدريبي' },
    { href: '/storytelling', label: 'السرد القصصي' },
    { href: '/about', label: 'من نحن' },
    { href: '/contact', label: 'اتصل بنا' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-3 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 space-x-reverse">
            <div className="w-10 h-10 ai-gradient rounded-full flex items-center justify-center pulse-glow">
              <i className="fas fa-brain text-white" aria-hidden="true"></i>
            </div>
            <h1 className="text-xl font-bold text-glow">معهد اكسفورد للذكاء الاصطناعي</h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-blue-400 transition-colors duration-300 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="فتح القائمة"
            aria-expanded={isMenuOpen}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} aria-hidden="true"></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-blue-400 transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

