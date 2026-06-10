import { motion } from 'framer-motion'
import { Zap, Home, MapPin, IndianRupee } from 'lucide-react'
import { HOW_TO_FIND_CHARGER, HOW_TO_BECOME_HOST } from '../lib/seo'

const sections = [
  {
    icon: Zap,
    id: 'ev-charging-india',
    title: 'India\'s smartest way to charge your electric vehicle',
    paragraphs: [
      'Public DC fast chargers are expensive, crowded, and often miles away. Plugzzy solves this with peer-to-peer neighborhood EV charging — real homeowners sharing their wall chargers, 15A sockets, and 7.4 kW AC chargers with drivers in the same locality.',
      'Whether you drive a Tata Nexon EV, MG ZS EV, Hyundai Kona, or BYD Atto 3, Plugzzy helps you find the cheapest, closest electric vehicle charging option — often just 500 metres away in your own neighbourhood.',
    ],
  },
  {
    icon: MapPin,
    id: 'find-ev-charger',
    title: 'Find EV chargers near me — instantly',
    paragraphs: [
      'Searching "EV charging near me" or "electric car charging station nearby" usually leads to highway fast chargers. Plugzzy shows home-based AC chargers on a live map — filter by kW rating, hourly price, connector type, and real-time availability.',
      'Book a charging slot in seconds, chat with the host, navigate with in-app directions, and pay via UPI. No membership fees, no waiting in queues at malls.',
    ],
    howTo: HOW_TO_FIND_CHARGER,
  },
  {
    icon: Home,
    id: 'host-ev-charger',
    title: 'Earn money by sharing your home EV charger',
    paragraphs: [
      'Already own a 7.4 kW wall charger or have a driveway socket? List it on Plugzzy and earn ₹3,000–₹8,000 per month in passive income. Set your own hourly rate, choose your availability, and get paid directly via UPI after every session.',
      'Thousands of Indian homeowners in Bangalore, Mumbai, Delhi, Hyderabad, and Pune are turning idle chargers into income streams — while helping their neighbours drive electric.',
    ],
    howTo: HOW_TO_BECOME_HOST,
  },
  {
    icon: IndianRupee,
    id: 'affordable-ev-charging',
    title: 'Why Plugzzy is cheaper than public fast charging',
    paragraphs: [
      'Public DC fast chargers cost ₹15–₹25 per kWh plus parking fees. Home AC charging on Plugzzy averages ₹10–₹25 per hour — perfect for overnight top-ups and daily commutes. For a Tata Nexon EV needing 30 kWh, that can save ₹500+ per full charge.',
      'Plugzzy is free to download, free to list as a host, and has no hidden platform fees during beta. The future of affordable EV charging in India is neighbourhood-first.',
    ],
  },
]

export function SEOContent() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="seo-content-heading"
    >
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2
            id="seo-content-heading"
            className="mb-4 text-3xl font-extrabold tracking-tight text-plugzzy-950 sm:text-4xl"
          >
            The complete guide to EV charging with Plugzzy
          </h2>
          <p className="text-lg text-gray-600">
            Everything about peer-to-peer electric vehicle charging in India — for drivers and hosts.
          </p>
        </motion.header>

        <div className="space-y-16">
          {sections.map((section, i) => (
            <motion.article
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="scroll-mt-28"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-plugzzy-100">
                  <section.icon className="h-5 w-5 text-plugzzy-700" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-plugzzy-950">{section.title}</h3>
              </div>

              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mb-4 leading-relaxed text-gray-600">
                  {p}
                </p>
              ))}

              {section.howTo && (
                <div className="mt-6 rounded-2xl border border-plugzzy-100 bg-plugzzy-50/50 p-6">
                  <h4 className="mb-4 font-bold text-plugzzy-900">{section.howTo.name}</h4>
                  <ol className="space-y-3">
                    {section.howTo.steps.map((step, j) => (
                      <li key={step.name} className="flex gap-3 text-sm text-gray-700">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-plugzzy-600 text-xs font-bold text-white">
                          {j + 1}
                        </span>
                        <div>
                          <strong className="text-plugzzy-950">{step.name}.</strong>{' '}
                          {step.text}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
