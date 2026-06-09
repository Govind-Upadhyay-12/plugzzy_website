import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from './Logo'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass border-b border-plugzzy-100/60 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="transition-opacity hover:opacity-80">
          <Logo iconSize={40} />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-gray-600 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-plugzzy-600 after:transition-all hover:text-plugzzy-700 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#download"
            className="relative overflow-hidden rounded-full bg-plugzzy-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-plugzzy-600/30 transition-all hover:bg-plugzzy-700 hover:shadow-lg"
          >
            <span className="absolute inset-0 animate-shimmer" />
            <span className="relative">Get the App</span>
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-gray-600 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm font-medium text-gray-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#download"
                className="block rounded-full bg-plugzzy-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Get the App
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
