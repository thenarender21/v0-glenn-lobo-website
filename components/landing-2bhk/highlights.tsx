"use client"

import { motion } from "framer-motion"
import { Maximize2, Building, Sun, Gem, Shield, Hammer, Trees, Heart } from "lucide-react"

const highlights = [
  {
    title: "Spacious 2 BHK Layouts",
    description: "Thoughtfully planned living areas to maximize usable room and storage.",
    icon: Maximize2,
  },
  {
    title: "Modern Architecture",
    description: "Contemporary design utilizing premium structural engineering aesthetics.",
    icon: Building,
  },
  {
    title: "Ample Natural Light",
    description: "East-West facing windows providing healthy ventilation and brightness.",
    icon: Sun,
  },
  {
    title: "Premium Finishes",
    description: "Vitrified tiles, high-grade fittings, and designer doors throughout.",
    icon: Gem,
  },
  {
    title: "Secure Community",
    description: "24/7 security staff, smart CCTV, video intercoms, and access gates.",
    icon: Shield,
  },
  {
    title: "High-Quality Construction",
    description: "Built by award-winning developers using highly tested materials.",
    icon: Hammer,
  },
  {
    title: "Landscaped Surroundings",
    description: "Serene open spaces with lush green gardens and peaceful pathways.",
    icon: Trees,
  },
  {
    title: "Family-Centric Living",
    description: "Safe environment with vibrant neighborhoods designed for children and seniors.",
    icon: Heart,
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
            Uncompromising structural quality, elegant layouts, and modern security for complete peace of mind.
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
