"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const highlights = [
  "22 Acre Township",
  "35 Storey Towers",
  "Fully Furnished Smart Homes",
  "Rooftop Lifestyle Amenities",
  "Near Metro & GB Road",
  "Yeoor Hills Proximity",
  "Ready Sample Flat",
]

export function ProjectHighlights() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Introduction
            </p>
            <h2 className="text-4xl font-light tracking-tight text-foreground sm:text-5xl">
              Raunak Maximum City
            </h2>
            <p className="mt-6 text-xl text-muted-foreground font-medium">
              Maximum lifestyle. Maximum connectivity. Maximum comfort.
            </p>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              Step into a world where luxury meets convenience. Raunak Maximum City is designed to offer an unparalleled living experience, surrounded by nature yet connected to the heart of the city.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 border-b border-border pb-4">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="font-medium text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full overflow-hidden rounded-3xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop"
              alt="Raunak Maximum City Towers"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-sm font-medium tracking-widest text-gold uppercase">Artist&apos;s Impression</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
