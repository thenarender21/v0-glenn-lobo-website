"use client"

import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

const trustPoints = [
  "Verified Listings",
  "Personalized Assistance",
  "End-to-End Support",
  "Experienced Property Consultants",
]

export function TrustSection() {
  return (
    <section className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
              Trusted Real Estate Guidance in Thane
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Helping families and investors discover premium homes in Thane through verified projects and expert consultation. We ensure that your home-buying journey is seamless, transparent, and rewarding.
            </p>
            <ul className="mt-8 space-y-4">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-gold shrink-0" />
                  <span className="text-foreground font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square lg:aspect-auto lg:h-[500px] overflow-hidden rounded-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop"
              alt="Real estate consultation"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
