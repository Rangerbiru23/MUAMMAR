"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Film, Play } from "lucide-react"

const navigation = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/about" },
  { name: "Layanan", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Kontak", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-md bg-opacity-90 border-b border-purple-500/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg">
                <Film className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                MUAMMAR
              </span>
              <span className="hidden sm:block text-sm text-purple-300 ml-2">
                Film Production
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-300 hover:text-purple-400 transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-200 hover:scale-105 flex items-center space-x-2"
            >
              <Play className="h-4 w-4" />
              <span>Mulai Proyek</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300 hover:text-purple-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-purple-500/20">
          <div className="space-y-2 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-semibold text-gray-300 hover:text-purple-400 hover:bg-purple-900/20 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-purple-500/20">
              <Link
                href="/contact"
                className="block w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 text-center text-base font-semibold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mulai Proyek
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}