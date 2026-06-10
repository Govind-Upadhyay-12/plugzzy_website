import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { FAQ_ITEMS } from '../lib/seo'

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section
      id="faq"
      className="bg-white py-20 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-plugzzy-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-plugzzy-700">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="mb-4 text-4xl font-extrabold tracking-tight text-plugzzy-950 sm:text-5xl"
          >
            EV charging FAQs — everything answered
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about finding chargers, hosting your plug, payments, and safety on Plugzzy India.
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50 transition-colors hover:border-plugzzy-200"
            >
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={openIndex === i}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-semibold text-plugzzy-950">{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-plugzzy-600 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === i && (
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className="border-t border-gray-100 px-6 pb-5 pt-4"
                >
                  <p className="text-sm leading-relaxed text-gray-600">{item.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
