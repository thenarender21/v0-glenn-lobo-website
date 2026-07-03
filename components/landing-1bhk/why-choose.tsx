"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Coins, Smile, Key, PenTool, TrendingUp } from "lucide-react"

const benefits = [
  {
    title: "Affordable Homeownership",
    description: "Low purchase price threshold makes transitioning from tenant to homeowner easy and secure.",
    icon: ShieldCheck,
  },
  {
    title: "Lower EMI Burden",
    description: "Comfortable monthly loan installments that don't stress your monthly household cash flows.",
    icon: Coins,
  },
  {
    title: "Perfect for First-Time Buyers",
    description: "Simple purchasing, lower down payments, and government subsidies under PMAY benefits.",
    icon: Smile,
  },
  {
    title: "High Rental Demand",
    description: "Constantly sought after by single professionals, students, and young working couples in Thane.",
    icon: Key,
  },
  {
    title: "Easy Maintenance",
    description: "Compact living areas mean lower cleaning times, lower upkeep costs, and reduced utility bills.",
    icon: PenTool,
  },
  {
    title: "Strong Investment Potential",
    description: "High rental yields relative to property cost and high capital appreciation trends in micro-markets.",
    icon: TrendingUp,
  },
]

export function WhyChoose1BHK() {
  return (
    <section className="bg-background py-20 sm:py-28 relative">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
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
            Smart Choice
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
            Why Choose a{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#b89449,#e8c97a,#b89449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              1 BHK Home
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            The perfect blend of modern comfort, smart space utilization, and premium financial returns.
          </p>
        </div>

        {/* Grid of Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-gold/45 hover:shadow-xl hover:translate-y-[-4px]"
              >
                {/* Glow Element */}
                <div className="absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-br from-gold/5 to-transparent transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
                
                {/* Icon Container */}
                <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-gold/10 border border-gold/20 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-charcoal">
                  <Icon className="size-6" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3 transition-colors duration-300 group-hover:text-gold">
                  {benefit.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
