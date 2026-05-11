"use client"

import { motion } from "framer-motion"
import { MapPin, Train, ShoppingBag, Hospital, GraduationCap, Building } from "lucide-react"

const locations = [
  { name: "Ghodbunder Road", icon: MapPin },
  { name: "Metro Connectivity", icon: Train },
  { name: "SGNP Tunnel", icon: MapPin },
  { name: "Top Schools", icon: GraduationCap },
  { name: "Hospitals", icon: Hospital },
  { name: "D-Mart & Malls", icon: ShoppingBag },
  { name: "Business Parks", icon: Building },
  { name: "Yeoor Hills", icon: MapPin },
]

export function LocationAdvantages() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-5xl">
            At The Nerve Center of <span className="font-medium text-gold">Thane</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Luxury lifestyle with unmatched connectivity to Mumbai and surrounding regions.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {locations.map((loc, index) => {
              const Icon = loc.icon
              return (
                <motion.div
                  key={loc.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
                >
                  <div className="rounded-full bg-gold/10 p-3 text-gold">
                    <Icon className="size-6" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{loc.name}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
