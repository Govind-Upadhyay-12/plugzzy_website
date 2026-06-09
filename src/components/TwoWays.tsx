import { motion } from 'framer-motion'
import { Home, Car, Check, ArrowRight } from 'lucide-react'
import { PhoneMockup } from './PhoneMockup'
import { useHostForm } from '../context/HostFormContext'

const cards = [
  {
    icon: Home,
    badge: 'For Hosts',
    title: "I'm a Host",
    description: 'Share your charger, earn passive income every week.',
    accent: 'from-plugzzy-600 to-emerald-500',
    borderHover: 'hover:border-plugzzy-300',
    features: [
      'List your charger in 3 minutes',
      'Set your own rates & availability',
      'Get paid directly, weekly',
      'Live dashboard & insights',
    ],
    image: '/images/host-dashboard.png',
    alt: 'Plugzzy host dashboard',
  },
  {
    icon: Car,
    badge: 'For Drivers',
    title: "I'm a Consumer",
    description: 'Find chargers nearby, book a slot, drive green.',
    accent: 'from-emerald-600 to-teal-500',
    borderHover: 'hover:border-teal-300',
    features: [
      'Live map of neighborhood sockets',
      'Filter by power, price, availability',
      'Book a slot in seconds',
      'Secure payments, cancel anytime',
    ],
    image: '/images/consumer-map.png',
    alt: 'Plugzzy consumer map view',
  },
]

export function TwoWays() {
  const { openHostForm } = useHostForm()

  return (
    <section id="features" className="relative bg-plugzzy-50/60 py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-plugzzy-700 shadow-sm">
            Two sides, one network
          </span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-plugzzy-950 sm:text-5xl">
            One app.{' '}
            <span className="text-gradient">Two ways to win.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Whether you own a charger or drive an EV — Plugzzy puts you in the network.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className={`card-shine group overflow-hidden rounded-3xl border border-plugzzy-100 bg-white shadow-xl shadow-plugzzy-900/5 transition-all duration-300 ${card.borderHover} hover:shadow-2xl hover:shadow-plugzzy-200/40`}
            >
              <div className={`h-1.5 bg-gradient-to-r ${card.accent}`} />

              <div className="p-8 pb-0">
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${card.accent} shadow-md`}>
                      <card.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-plugzzy-500">
                        {card.badge}
                      </span>
                      <h3 className="text-2xl font-bold text-plugzzy-950">{card.title}</h3>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-plugzzy-50 opacity-0 transition-all group-hover:opacity-100">
                    <ArrowRight className="h-4 w-4 text-plugzzy-600" />
                  </div>
                </div>

                <p className="mb-6 text-gray-600">{card.description}</p>

                <ul className="mb-6 space-y-3">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-plugzzy-100">
                        <Check className="h-3 w-3 text-plugzzy-700" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {card.badge === 'For Hosts' && (
                  <button
                    type="button"
                    onClick={openHostForm}
                    className="mb-6 inline-flex items-center gap-2 rounded-full bg-plugzzy-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-plugzzy-700"
                  >
                    Become a Host
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="flex justify-center bg-gradient-to-t from-plugzzy-50 to-white px-6 pb-8 pt-4">
                <PhoneMockup src={card.image} alt={card.alt} delay={i * 0.1} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
