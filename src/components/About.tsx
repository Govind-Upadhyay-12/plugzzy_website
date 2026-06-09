import { motion } from 'framer-motion'
import { Shield, Zap, Leaf } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Secure & Trusted',
    description: 'Verified host profiles and protected data — charge with total peace of mind.',
    gradient: 'from-plugzzy-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Reliable Network',
    description: 'Real-time availability on a growing network of neighborhood chargers across India.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Leaf,
    title: 'Better for Planet',
    description: 'Every charge on Plugzzy is a step toward cleaner air and sustainable mobility.',
    gradient: 'from-teal-500 to-green-500',
  },
]

export function About() {
  return (
    <section id="about" className="relative bg-plugzzy-50/40 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-plugzzy-700 shadow-sm">
            About Plugzzy
          </span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-plugzzy-950 sm:text-5xl">
            Powering your neighborhood,{' '}
            <span className="text-gradient">together.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We're building India's first peer-to-peer EV charging network — turning
            every home charger into a community asset and every driveway into a
            green future.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="card-shine group rounded-2xl border border-plugzzy-100 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-xl hover:shadow-plugzzy-100/50"
            >
              <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${value.gradient} shadow-lg transition-transform group-hover:scale-110`}>
                <value.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-plugzzy-950">{value.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
