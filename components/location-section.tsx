"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const locations = [
  { name: "Thane West", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
  { name: "Kasarvadavali", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" },
  { name: "Anand Nagar", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
  { name: "Waghbil", image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80" },
  { name: "Bhayandarpada", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { name: "Owale", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80" },
  { name: "Hiranandani Estate", image: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=800&q=80" },
  { name: "Kolshet Road", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" },
  { name: "Ghodbunder Road", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80" },
  { name: "Kavesar", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" },
]

export function LocationSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Neighborhoods
            </p>
            <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
              Explore Properties by Location
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Find your perfect home in Thane&apos;s most sought-after neighborhoods.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {locations.map((loc, index) => {
            const slug = loc.name.toLowerCase().replace(/\s+/g, "-")
            return (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="group h-full relative overflow-hidden rounded-lg bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl border border-border/50"
              >
                <Link href={`/${slug}-properties`} className="block h-full flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={loc.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="p-5 flex-1 flex flex-col items-center justify-center text-center">
                    <h3 className="text-lg font-semibold text-foreground text-balance mb-4">
                      {loc.name}
                    </h3>
                    <div className="mt-auto">
                      <span className="inline-block rounded-sm bg-gold px-4 py-2 text-xs font-medium uppercase tracking-wider text-charcoal transition-colors hover:bg-gold-light">
                        View Properties
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
