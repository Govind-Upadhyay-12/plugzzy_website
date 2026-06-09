import { motion } from 'framer-motion'
import { MapPin, Calendar, Zap, IndianRupee } from 'lucide-react'

const steps = [
  {
    icon: MapPin,
    step: '01',
    title: 'Discover nearby plugs',
    description: 'Open the map and see every available charger in your neighborhood.',
  },
  {
    icon: Calendar,
    step: '02',
    title: 'Book in seconds',
    description: 'Pick a time slot, confirm your booking, and get instant directions.',
  },
  {
    icon: Zap,
    step: '03',
    title: 'Plug in & charge',
    description: 'Arrive, plug in your EV, and monitor your session live from the app.',
  },
  {
    icon: IndianRupee,
    step: '04',
    title: 'Pay & earn fairly',
    description: 'Drivers pay affordable rates. Hosts earn weekly. Everyone wins.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-plugzzy-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-plugzzy-700">
            How it works
          </span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-plugzzy-950 sm:text-5xl">
            Charging made{' '}
            <span className="text-gradient">ridiculously simple</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Four steps from "where do I charge?" to "fully topped up."
          </p>
        </motion.div>

        <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* connector line — desktop only */}
          <div className="pointer-events-none absolute top-14 hidden h-0.5 bg-gradient-to-r from-plugzzy-200 via-plugzzy-400 to-plugzzy-200 lg:block lg:left-[12%] lg:right-[12%]" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:border-plugzzy-200 hover:shadow-xl hover:shadow-plugzzy-100/50 sm:text-left"
            >
              <div className="relative mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-plugzzy-600 to-emerald-500 shadow-lg shadow-plugzzy-600/25 transition-transform group-hover:scale-110 sm:mx-0">
                <step.icon className="h-6 w-6 text-white" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[10px] font-bold text-plugzzy-700 shadow-md">
                  {step.step}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-plugzzy-950">{step.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
