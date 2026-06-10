import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { TARGET_CITIES } from '../lib/seo'

export function CityCoverage() {
  return (
    <section
      id="cities"
      className="border-y border-plugzzy-100 bg-plugzzy-50/50 py-16 lg:py-20"
      aria-labelledby="cities-heading"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2
            id="cities-heading"
            className="mb-3 text-3xl font-extrabold tracking-tight text-plugzzy-950 sm:text-4xl"
          >
            EV charging live across India
          </h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            Find neighborhood electric vehicle chargers or become a host in your city.
            Plugzzy P2P EV charging network is growing in 180+ cities nationwide.
          </p>
        </motion.div>

        <ul className="flex flex-wrap justify-center gap-3">
          {TARGET_CITIES.map((city, i) => (
            <motion.li
              key={city}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-plugzzy-200 bg-white px-4 py-2 text-sm font-medium text-plugzzy-800 shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-plugzzy-600" aria-hidden="true" />
                EV charging {city}
              </span>
            </motion.li>
          ))}
          <li>
            <span className="inline-flex items-center rounded-full bg-plugzzy-600 px-4 py-2 text-sm font-semibold text-white">
              +162 more cities
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
