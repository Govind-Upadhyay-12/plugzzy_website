import { motion } from 'framer-motion'
import { Battery, Plug, Clock, Wallet, Shield, Smartphone } from 'lucide-react'

const benefits = [
  {
    icon: Battery,
    title: 'All EV models supported',
    description:
      'Tata Nexon EV, Tiago EV, MG ZS EV, Hyundai Kona, BYD Atto 3, Mahindra XUV400 — charge any electric car or scooter.',
  },
  {
    icon: Plug,
    title: 'Every charger type',
    description:
      '7.4 kW AC wall chargers, 3.3 kW home sockets, 15A plugs, Type 2 connectors, and smart plugs — all on one map.',
  },
  {
    icon: Clock,
    title: '24/7 neighbourhood access',
    description:
      'Book charging slots early morning, late night, or weekends. Hosts set their own schedule — you pick what works.',
  },
  {
    icon: Wallet,
    title: 'Lowest AC charging rates',
    description:
      'Home charging at ₹10–₹25/hr beats public DC fast chargers for daily top-ups. Transparent pricing, zero hidden fees.',
  },
  {
    icon: Shield,
    title: 'Verified host network',
    description:
      'ID-verified hosts, star ratings, session history, and in-app chat before every booking for total peace of mind.',
  },
  {
    icon: Smartphone,
    title: 'Free app, instant booking',
    description:
      'Download Plugzzy free on Android & iOS. Find, book, navigate, and pay — the entire EV charging journey in one app.',
  },
]

export function Benefits() {
  return (
    <section
      id="benefits"
      className="bg-plugzzy-950 py-20 text-white lg:py-28"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 id="benefits-heading" className="mb-4 text-3xl font-extrabold sm:text-4xl">
            Why choose Plugzzy for EV charging in India?
          </h2>
          <p className="mx-auto max-w-2xl text-plugzzy-200">
            The only app built for daily neighbourhood electric vehicle charging — not just highway trips.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-2xl border border-plugzzy-800 bg-plugzzy-900/50 p-6"
            >
              <b.icon className="mb-4 h-7 w-7 text-plugzzy-400" aria-hidden="true" />
              <h3 className="mb-2 font-bold text-white">{b.title}</h3>
              <p className="text-sm leading-relaxed text-plugzzy-200">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
