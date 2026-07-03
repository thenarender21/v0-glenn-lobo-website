"use client"

import { motion } from "framer-motion"
import { Maximize2, Building, Gem, Sun, Wind, Shield, Hammer, MonitorPlay } from "lucide-react"

const highlights = [
  {
    title: "Efficient Space Planning",
    description: "Intelligent layouts maximizing utility, eliminating dead corridors and storage voids.",
    icon: Maximize2,
  },
  {
    title: "Modern Architecture",
    description: "Sleek contemporary design that combines luxury elements with functional logic.",
    icon: Building,
  },
  {
    title: "Premium Finishes",
    description: "Elegant vitrified tile floors, granite counters, and high-brand bathroom fits.",
    icon: Gem,
  },
  {
    title: "Ample Natural Light",
    description: "Expansive windows designed to bathe living areas in natural sunlight throughout the day.",
    icon: Sun,
  },
  {
    title: "Excellent Ventilation",
    description: "Strategic wind tunnels created by layout designs ensuring steady cross-breezes.",
    icon: Wind,
  },
  {
    title: "Secure Community",
    description: "24/7 manned security, CCTV integration, secure lobbies, and electronic intercoms.",
    icon: Shield,
  },
  {
    title: "High-Quality Construction",
    description: "Engineered using seismic-resistant RCC frameworks and lab-certified concrete.",
    icon: Hammer,
  },
  {
    title: "Smart Lifestyle Living",
    description: "Fiber-to-the-home high speed data, smart video door bells, and modular setups.",
    icon: MonitorPlay,
  },
]

export function PropertyHighlights() {
  return (
    <section className="bg-charcoal py-20 sm:py-28 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0 bg-radial-gradient from-gold/5 via-transparent to-transparent opacity-60 z-0" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(184,148,73,0.12)",
              border: "1px solid rgba(184,148,73,0.35)",
              color: "#e8c97a",
            }}
          >
            Project Features
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            Property{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#b89449,#e8c97a,#b89449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Highlights
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/60">
            Engineered spaces, premium components, structural security, and modern home automation.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, idx) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative rounded-xl border border-white/10 bg-charcoal-light/50 p-6 flex flex-col items-center text-center transition-all duration-300 hover:border-gold/30 hover:bg-charcoal-light/80 hover:shadow-xl"
              >
                {/* Gold Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* Icon Circle */}
                <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-6" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {highlight.title}
                </h3>
                
                <p className="text-xs leading-relaxed text-white/70">
                  {highlight.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
