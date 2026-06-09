import { motion } from 'framer-motion'
import { Calendar, MessageCircle, Wallet, History } from 'lucide-react'
import { PhoneMockup } from './PhoneMockup'

const features = [
  {
    icon: Calendar,
    title: 'Smart scheduling',
    description: 'Avoid clashes automatically.',
    color: 'bg-plugzzy-100 text-plugzzy-700',
  },
  {
    icon: MessageCircle,
    title: 'Driver chat',
    description: 'Coordinate arrival in-app.',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    icon: Wallet,
    title: 'Offline payments',
    description: 'Cash or UPI — your call.',
    color: 'bg-teal-100 text-teal-700',
  },
  {
    icon: History,
    title: 'Session history',
    description: 'Receipts & insights anytime.',
    color: 'bg-green-100 text-green-700',
  },
]

export function Organized() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-plugzzy-50/40 py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-plugzzy-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <PhoneMockup
              src="/images/image-4872db82-bb94-4cf7-84b4-c1ad5e85b371.png"
              alt="Plugzzy bookings management screen"
              glow
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="mb-4 inline-block rounded-full bg-plugzzy-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-plugzzy-700">
              Host dashboard
            </span>
            <h2 className="mb-2 text-4xl font-extrabold tracking-tight text-plugzzy-950 sm:text-5xl">
              Everything stays
            </h2>
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">organized.</span>
            </h2>
            <p className="mb-10 max-w-md text-lg leading-relaxed text-gray-600">
              See upcoming, ongoing and completed sessions at a glance. Message
              drivers, view EV details, and track every rupee earned.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.04 }}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-plugzzy-200 hover:shadow-md"
                >
                  <div className={`mb-3 inline-flex rounded-xl p-2.5 ${feature.color}`}>
                    <feature.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-plugzzy-950">{feature.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
