import { motion } from 'framer-motion'

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
  delay?: number
  glow?: boolean
}

export function PhoneMockup({
  src,
  alt,
  className = '',
  delay = 0,
  glow = false,
}: PhoneMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ scale: 1.03, rotate: -1 }}
      className={`relative ${className}`}
    >
      {glow && (
        <div className="absolute inset-0 -z-10 rounded-full bg-plugzzy-400/25 blur-3xl animate-pulse-glow" />
      )}
      <div className="absolute inset-0 -z-10 rounded-full bg-plugzzy-400/15 blur-3xl" />
      <div className="relative mx-auto w-[260px] rounded-[2.5rem] border-[6px] border-gray-900 bg-gray-900 p-1.5 shadow-2xl shadow-plugzzy-900/25 sm:w-[280px]">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-gray-900" />
        <div className="overflow-hidden rounded-[2rem] bg-white">
          <img src={src} alt={alt} className="block w-full" loading="lazy" />
        </div>
        {/* reflection */}
        <div className="pointer-events-none absolute -bottom-8 left-1/2 h-12 w-48 -translate-x-1/2 rounded-full bg-plugzzy-600/10 blur-xl" />
      </div>
    </motion.div>
  )
}
