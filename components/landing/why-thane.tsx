"use client"

import { motion } from "framer-motion"
import { Train, Building2, Trees, GraduationCap, TrendingUp, Map } from "lucide-react"

const points = [
  {
    title: "Excellent Connectivity",
    description: "Seamless access to Eastern Express Highway and local transit.",
    icon: Map,
  },
  {
    title: "Rapid Infrastructure Growth",
    description: "Upcoming projects enhancing overall value and convenience.",
    icon: Building2,
  },
  {
    title: "Premium Lifestyle",
    description: "Surrounded by upscale malls, fine dining, and entertainment.",
    icon: Trees,
  },
  {
    title: "Schools & Hospitals",
    description: "Proximity to top-tier educational and healthcare institutions.",
    icon: GraduationCap,
  },
  {
    title: "High Investment Potential",
    description: "Consistent property appreciation and high rental yields.",
    icon: TrendingUp,
  },
  {
    title: "Metro & Highway Access",
    description: "Direct connectivity to Mumbai and surrounding regions.",
    icon: Train,
  },
]

export function WhyThane() {
  return (
    <section className="bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Why Buy in Thane?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A perfect blend of nature, infrastructure, and unmatched lifestyle.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {points.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-gold/10 p-3 text-gold">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-foreground">{point.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
