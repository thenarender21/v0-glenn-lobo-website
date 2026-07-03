"use client"

import { motion } from "framer-motion"
import { TrendingUp, Percent, Landmark, Construction, MapPin } from "lucide-react"

const investmentPoints = [
  {
    title: "Appreciation Potential",
    metric: "12% Y-o-Y",
    desc: "Steady property capital appreciation driven by Thane's premium status and limited land availability.",
    icon: TrendingUp
  },
  {
    title: "High Rental Yield",
    metric: "4.2% Yield",
    desc: "Robust monthly rental demand from corporate IT professionals working in Wagle Estate and TCS Olympus IT Park.",
    icon: Percent
  },
  {
    title: "Infrastructure Boom",
    metric: "Metro Line 4 & 5",
    desc: "Major connectivity boost through the upcoming metro line network reducing travel times by 40%.",
    icon: Construction
  },
  {
    title: "High-Demand micro-market",
    metric: "#1 Choice",
    desc: "Ghodbunder Road ranks as Thane's most preferred residential stretch for families and working professionals alike.",
    icon: MapPin
  },
  {
    title: "Future Development",
    metric: "Thane-Borivali Tunnel",
    desc: "Proposed tunnel highway project will reduce Borivali connectivity down to a short 15-minute commute.",
    icon: Landmark
  }
]

export function InvestmentBenefits() {
  return (
    <section className="bg-charcoal py-20 sm:py-28 relative overflow-hidden">
      {/* Glow */}
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
            Wealth Creation
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            Investment{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#b89449,#e8c97a,#b89449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Benefits
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/60">
            Secure your family's financial future with a high-yield real estate asset located in one of MMR's fastest-growing sectors.
          </p>
        </div>

        {/* Proximity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {investmentPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group relative rounded-xl border border-white/10 bg-charcoal-light/45 p-6 flex flex-col justify-between hover:border-gold/30 hover:bg-charcoal-light/60 transition-all duration-300"
              >
                <div>
                  {/* Icon */}
                  <div className="mb-4 text-gold flex items-center justify-between">
                    <Icon className="size-6" />
                    <span className="text-xs font-bold text-gold/80 bg-gold/10 px-2 py-0.5 rounded border border-gold/20">
                      {point.metric}
                    </span>
                  </div>
                  
                  <h3 className="text-base font-bold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                    {point.title}
                  </h3>
                </div>

                <p className="text-xs leading-relaxed text-white/70 mt-2">
                  {point.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
