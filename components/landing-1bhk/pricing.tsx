"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { DollarSign, Landmark, PiggyBank, Award, Percent, ArrowRight } from "lucide-react"

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          
          {/* Card 1: Starting Price */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-gold/30 transition-all shadow-md"
          >
            <div>
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
                <DollarSign className="size-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1 block">Starting From</span>
              <h3 className="text-2xl font-extrabold text-foreground leading-tight mb-2">₹67 Lakhs</h3>
              <p className="text-xs text-muted-foreground">All-Inclusive Value Price (includes stamp duty/registration cover).</p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-[10px] text-muted-foreground">
              *Available for standard 1 BHK smart configurations.
            </div>
          </motion.div>

          {/* Card 2: Easy EMI Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="group relative rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-gold/30 transition-all shadow-md"
          >
            <div>
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
                <Percent className="size-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1 block">Easy EMI Options</span>
              <h3 className="text-2xl font-bold text-foreground leading-tight mb-2">₹35k / mo</h3>
              <p className="text-xs text-muted-foreground">Extremely low monthly payments with interest subsidies under PM Awas Yojana.</p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-[10px] text-muted-foreground">
              *Calculated on standard 20-year bank tenures.
            </div>
          </motion.div>

          {/* Card 3: Home Loan Assistance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.16 }}
            className="group relative rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-gold/30 transition-all shadow-md"
          >
            <div>
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
                <Landmark className="size-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1 block">Loan Partners</span>
              <h3 className="text-2xl font-bold text-foreground leading-tight mb-2">SBI, HDFC</h3>
              <p className="text-xs text-muted-foreground">Pre-approved projects. Instant loan approvals with complete documentation support.</p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-[10px] text-muted-foreground">
              *Interest rates starting at 8.4% annually.
            </div>
          </motion.div>

          {/* Card 4: Flexible Payment Plans */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.24 }}
            className="group relative rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-gold/30 transition-all shadow-md"
          >
            <div>
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
                <PiggyBank className="size-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1 block">Payment Plan</span>
              <h3 className="text-2xl font-bold text-foreground leading-tight mb-2">10:90 Plan</h3>
              <p className="text-xs text-muted-foreground">Pay only 10% now to reserve. Balance linked to structural construction stages.</p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-[10px] text-muted-foreground">
              *Subvention scheme offers interest waivers.
            </div>
          </motion.div>

          {/* Card 5: Limited-Time Offers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.32 }}
            className="group relative rounded-2xl border border-border bg-card p-6 flex flex-col justify-between hover:border-gold/30 transition-all shadow-md"
          >
            <div>
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-gold/10 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors">
                <Award className="size-5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold mb-1 block">Special Offer</span>
              <h3 className="text-2xl font-bold text-foreground leading-tight mb-2">Free Gold</h3>
              <p className="text-xs text-muted-foreground">Book this week to receive a free gold coin voucher worth ₹50,000 upon registration.</p>
            </div>
            <div className="mt-6 border-t border-border pt-4 text-[10px] font-bold text-gold">
              *Valid for first 5 bookings only!
            </div>
          </motion.div>

        </div>

        {/* Action Bar */}
        <div className="flex justify-center">
          <Button
            onClick={() => onOpenContact("Request Price Sheet CTA - 1 BHK Campaign")}
            className="bg-gold hover:bg-gold-light text-charcoal h-14 px-10 font-bold text-base shadow-xl flex items-center gap-2 group transition-transform hover:scale-[1.02] cursor-pointer"
          >
            Request Detailed Price Sheet
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

      </div>
    </section>
  )
}
