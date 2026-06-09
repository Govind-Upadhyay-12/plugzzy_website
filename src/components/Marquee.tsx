import { Zap, MapPin, Leaf, IndianRupee, Shield } from 'lucide-react'

const items = [
  { icon: Zap, text: 'Charge in your neighborhood' },
  { icon: MapPin, text: 'Plugs within walking distance' },
  { icon: IndianRupee, text: 'Earn from your driveway' },
  { icon: Leaf, text: 'Drive electric, live green' },
  { icon: Shield, text: 'Verified hosts only' },
  { icon: Zap, text: 'Book a slot in seconds' },
]

export function Marquee() {
  const doubled = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-plugzzy-100 bg-plugzzy-50 py-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-plugzzy-50 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-plugzzy-50 to-transparent" />

      <div className="flex w-max animate-marquee gap-10">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2.5 text-sm font-semibold text-plugzzy-800"
          >
            <item.icon className="h-4 w-4 text-plugzzy-600" />
            {item.text}
            <span className="text-plugzzy-300">•</span>
          </div>
        ))}
      </div>
    </div>
  )
}
