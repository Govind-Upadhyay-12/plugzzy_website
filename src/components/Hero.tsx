import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, Leaf } from 'lucide-react'
import { PhoneMockup } from './PhoneMockup'
import { useHostForm } from '../context/HostFormContext'

const trustItems = [
  { icon: Star, text: '4.8 rated by hosts' },
  { icon: Shield, text: 'Verified & secure' },
  { icon: Leaf, text: '100% clean energy' },
]

const headlineWords = ['Find.', 'Share.', 'Charge.']

export function Hero() {
  const { openHostForm } = useHostForm()

  return (
    <section
      id="home"
      className="dot-grid relative overflow-hidden bg-gradient-to-br from-plugzzy-50 via-white to-emerald-50/40 pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      <div className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-plugzzy-300/30 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-plugzzy-200/25 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-plugzzy-200 bg-white/80 px-4 py-1.5 text-sm font-semibold text-plugzzy-700 shadow-sm backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-plugzzy-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-plugzzy-600" />
            </span>
            🇮🇳 India's 1st neighborhood EV charging app
          </motion.div>

          <h1 className="mb-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-plugzzy-950 sm:text-6xl lg:text-7xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.12 }}
                className={`mr-3 inline-block ${
                  word === 'Charge.'
                    ? 'text-gradient'
                    : ''
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8 max-w-lg text-lg leading-relaxed text-gray-600"
          >
            Your neighbour's driveway is your next charging station.{' '}
            <span className="font-medium text-plugzzy-800">
              Plug in nearby. Earn while you sleep.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mb-10 flex flex-wrap gap-4"
          >
            <button
              type="button"
              onClick={openHostForm}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-plugzzy-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-plugzzy-600/35 transition-all hover:bg-plugzzy-700 hover:shadow-xl hover:shadow-plugzzy-600/40"
            >
              <span className="absolute inset-0 animate-shimmer" />
              <span className="relative">Become a Host</span>
              <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border-2 border-plugzzy-600 bg-white/60 px-7 py-3.5 text-sm font-semibold text-plugzzy-700 backdrop-blur-sm transition-all hover:bg-plugzzy-50 hover:shadow-md"
            >
              Find a Charger
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            {trustItems.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-sm text-gray-600 shadow-sm backdrop-blur-sm"
              >
                <Icon className="h-4 w-4 text-plugzzy-600" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="animate-float">
            <PhoneMockup
              src="/images/image-0bfcf7b5-5387-4108-9456-e6e80d8e90a9.png"
              alt="Plugzzy app onboarding screen"
              delay={0.2}
              glow
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
