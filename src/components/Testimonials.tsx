import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Mehta',
    role: 'Tata Nexon EV owner, Bangalore',
    quote:
      'I used to drive 8 km to the nearest public charger. Now I plug in at my neighbour\'s driveway for ₹15/hr. Game changer.',
    rating: 5,
  },
  {
    name: 'Arjun Reddy',
    role: 'Host, Hyderabad',
    quote:
      'Listed my 7.4 kW charger in under 5 minutes. Already earning ₹4,000 a month from slots I wasn\'t using anyway.',
    rating: 5,
  },
  {
    name: 'Sneha Kapoor',
    role: 'MG ZS EV owner, Pune',
    quote:
      'The map shows real availability — no more showing up to a dead charger. Plugzzy just works.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-plugzzy-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-plugzzy-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-plugzzy-700">
            Real stories
          </span>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-plugzzy-950 sm:text-5xl">
            Loved by hosts & drivers
          </h2>
          <p className="mx-auto max-w-xl text-lg text-gray-600">
            Thousands of Indians are already charging smarter — here's what they say.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="card-shine group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-shadow hover:border-plugzzy-200 hover:shadow-xl hover:shadow-plugzzy-100/60"
            >
              <Quote className="mb-4 h-8 w-8 text-plugzzy-200 transition-colors group-hover:text-plugzzy-400" />
              <p className="mb-6 text-sm leading-relaxed text-gray-700">"{t.quote}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-plugzzy-500 text-plugzzy-500" />
                ))}
              </div>
              <p className="font-bold text-plugzzy-950">{t.name}</p>
              <p className="text-xs text-gray-500">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
