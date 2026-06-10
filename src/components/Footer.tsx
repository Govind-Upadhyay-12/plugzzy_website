import { Share2, Globe, AtSign, Mail } from 'lucide-react'
import { Logo } from './Logo'

const productLinks = [
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'FAQ', href: '#faq' },
  { label: 'About', href: '#about' },
]

const companyLinks = [
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
]

const socials = [
  { icon: Share2, href: '#', label: 'Share' },
  { icon: Globe, href: '#', label: 'Website' },
  { icon: AtSign, href: '#', label: 'Social' },
  { icon: Mail, href: '#contact', label: 'Email' },
]

export function Footer() {
  return (
    <footer id="contact" className="border-t border-plugzzy-100 bg-plugzzy-50/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo className="mb-4" />
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-600">
              India's neighborhood-first peer-to-peer EV charging network. Share a
              plug, earn income, drive green.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-500 shadow-sm transition-all hover:bg-plugzzy-600 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-plugzzy-950">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-plugzzy-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold text-plugzzy-950">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-plugzzy-700"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-plugzzy-100 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © 2024 Plugzzy. Powering neighborhoods, together.
          </p>
          <p className="text-sm text-gray-500">
            Made with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  )
}
