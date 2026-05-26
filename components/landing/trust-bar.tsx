"use client"

import { motion } from "framer-motion"
import { BadgeCheck, Clock, Home, Users } from "lucide-react"

const trustItems = [
  {
    icon: BadgeCheck,
    label: "RERA Verified Projects",
  },
  {
    icon: Clock,
    label: "13+ Years in Thane",
  },
  {
    icon: Home,
    label: "800+ Properties Sold",
  },
  {
    icon: Users,
    label: "1,200+ Happy Families",
  },
]

export function TrustBar() {
  return (
    <section className="border-y border-border bg-secondary/50 py-5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-y-5 gap-x-4 lg:grid-cols-4 lg:gap-0">
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-center gap-3 justify-center lg:justify-center relative
                  [&:not(:last-child)]:lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-1/2
                  lg:after:-translate-y-1/2 lg:after:h-8 lg:after:w-px lg:after:bg-border last:lg:after:hidden"
              >
                <div className="flex-shrink-0 rounded-full bg-gold/10 p-2">
                  <Icon className="size-5 text-gold" strokeWidth={1.75} />
                </div>
                <span className="text-sm font-medium text-foreground leading-snug">
                  {item.label}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
