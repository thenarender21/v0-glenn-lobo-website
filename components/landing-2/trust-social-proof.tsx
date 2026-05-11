"use client"

import { motion } from "framer-motion"

const stats = [
  { value: "650", label: "Units Sold Out in Phase 1" },
  { value: "600", label: "Units Sold Out in Phase 2" },
  { value: "1980", label: "Established Since" },
  { value: "150+", label: "Buildings Delivered" },
  { value: "7,390+", label: "Happy Families" },
]

export function TrustSocialProof() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Trusted By Thousands of Families
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A legacy of excellence and trust built over decades.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="text-4xl font-light text-gold sm:text-5xl">{stat.value}</div>
                <div className="mt-4 text-sm font-medium uppercase tracking-wider text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
