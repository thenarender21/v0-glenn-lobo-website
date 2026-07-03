"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DollarSign, Landmark, PiggyBank, Award, ArrowRight } from "lucide-react"

export function PricePaymentSection({ onOpenContact }: { onOpenContact: (source: string) => void }) {
  return (
    <section id="pricing-section" className="bg-background py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
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
            Special Campaign Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
            Price &{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#b89449,#e8c97a,#b89449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Payment Plans
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Competitive luxury pricing with flexible payment structures, bank pre-approvals, and attractive limited-time booking rewards.
          </p>
        </div>

        {/* Pricing & Offers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Card 1: Starting Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-2xl border border-border bg-card p-8 flex flex-col justify-between hover:border-gold/30 transition-all shadow-md"
          >
            <div>
              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
                <DollarSign className="size-6" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1 block">Value Starting From</span>
              <h3 className="text-3xl font-extrabold text-foreground leading-tight mb-2">₹93 Lakhs</h3>
              <p className="text-xs text-muted-foreground">All-Inclusive Price (Stamp duty & registration covered).</p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
              *Available for configurations up to 615 Sq.Ft. Carpet.
            </div>
          </motion.div>

          {/* Card 2: Flexible Payment Plans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative rounded-2xl border border-border bg-card p-8 flex flex-col justify-between hover:border-gold/30 transition-all shadow-md"
          >
            <div>
              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
                <PiggyBank className="size-6" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1 block">Payment Plan</span>
              <h3 className="text-2xl font-bold text-foreground leading-tight mb-2">10:90 Scheme</h3>
              <p className="text-xs text-muted-foreground">Pay only 10% now to book. No EMI or interest till possession (subvention plans).</p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
              *Construction linked plans also available.
            </div>
          </motion.div>

          {/* Card 3: Home Loan Assistance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group relative rounded-2xl border border-border bg-card p-8 flex flex-col justify-between hover:border-gold/30 transition-all shadow-md"
          >
            <div>
              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
                <Landmark className="size-6" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1 block">Loan Partners</span>
              <h3 className="text-2xl font-bold text-foreground leading-tight mb-2">SBI, HDFC, ICICI</h3>
              <p className="text-xs text-muted-foreground">Pre-approved projects. Instant loan sanctions at lowest interest rates starting at 8.4%.</p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">
              *End-to-end documentation support provided.
            </div>
          </motion.div>

          {/* Card 4: Limited-Time Offers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="group relative rounded-2xl border border-border bg-card p-8 flex flex-col justify-between hover:border-gold/30 transition-all shadow-md"
          >
            <div>
              <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
                <Award className="size-6" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1 block">Exclusive Booking Bonus</span>
              <h3 className="text-2xl font-bold text-foreground leading-tight mb-2">Free Modular Kitchen</h3>
              <p className="text-xs text-muted-foreground">Book this week to receive a free modular kitchen fittings and Godrej smart lock.</p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground font-bold text-gold">
              *Valid for next 5 bookings only!
            </div>
          </motion.div>

        </div>

        {/* Action Bar */}
        <div className="flex justify-center">
          <Button
            onClick={() => onOpenContact("Request Price Sheet CTA - 2 BHK Campaign")}
            className="bg-gold hover:bg-gold-light text-charcoal h-14 px-10 font-bold text-base shadow-xl flex items-center gap-2 group transition-transform hover:scale-[1.02]"
          >
            Request Detailed Price Sheet
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

      </div>
    </section>
  )
}
