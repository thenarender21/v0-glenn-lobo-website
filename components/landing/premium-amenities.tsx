"use client"

import { motion } from "framer-motion"
import { Waves, Dumbbell, Users, Leaf, Baby, ShieldCheck, CarFront } from "lucide-react"

const amenities = [
  { name: "Swimming Pool", icon: Waves },
  { name: "Gymnasium", icon: Dumbbell },
  { name: "Clubhouse", icon: Users },
  { name: "Landscaped Garden", icon: Leaf },
  { name: "Kids Play Area", icon: Baby },
  { name: "24/7 Security", icon: ShieldCheck },
  { name: "Covered Parking", icon: CarFront },
]

export function PremiumAmenities() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Premium Amenities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience world-class facilities designed to elevate your everyday living.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="flex flex-wrap justify-center gap-6">
            {amenities.map((amenity, index) => {
              const Icon = amenity.icon
              return (
                <motion.div
                  key={amenity.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex w-[160px] flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-gold/50 hover:bg-gold/5"
                >
                  <Icon className="size-8 text-gold" />
                  <span className="text-sm font-medium text-foreground">{amenity.name}</span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
