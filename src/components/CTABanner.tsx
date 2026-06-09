import { motion } from 'framer-motion'
import { ArrowRight, Smartphone } from 'lucide-react'

export function CTABanner() {
  return (
    <section id="download" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="animate-gradient relative overflow-hidden rounded-3xl bg-gradient-to-br from-plugzzy-800 via-plugzzy-600 to-emerald-600 px-8 py-16 text-center shadow-2xl shadow-plugzzy-900/30 sm:px-16 lg:py-20"
        >
          {/* decorative orbs */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-2xl" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-white/5 blur-xl" />

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
            >
              <Smartphone className="h-4 w-4" />
              Available on iOS & Android
            </motion.div>

            <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Power your neighborhood, together.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-plugzzy-100">
              Join the movement. Download Plugzzy and be the first to charge — or
              earn — in your lane.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-plugzzy-700 shadow-lg transition-all hover:bg-plugzzy-50 hover:shadow-xl"
              >
                <span className="absolute inset-0 animate-shimmer" />
                <span className="relative flex items-center gap-2">
                  Download the App
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                Learn more
              </a>
            </div>

            <p className="mt-8 text-sm text-plugzzy-200">
              Free to download · No credit card required · Made in India 🇮🇳
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
