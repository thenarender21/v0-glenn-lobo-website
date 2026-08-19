"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "What is the carpet area of the 2 BHK?",
    a: "The 2 BHK configurations come in two sizes: the Standard Smart configuration with a carpet area of 615 Sq.Ft., and the Premium XL configuration (featuring a balcony) with a carpet area of 660 Sq.Ft."
  },
  {
    q: "Is home loan assistance available?",
    a: "Yes, we offer complete end-to-end home loan assistance. The project is pre-approved by leading financial institutions, including SBI, HDFC, and ICICI, allowing you to secure instant approvals at competitive interest rates."
  },
  {
    q: "What amenities are included?",
    a: "The project includes a premium swimming pool, a fully equipped gymnasium, children's play parks, indoor games, a jogging track, senior citizen zones, 24/7 smart CCTV surveillance, power backup, and a grand social clubhouse."
  },
  {
    q: "Are there flexible payment options?",
    a: "Yes. In addition to standard construction-linked plans, we offer campaign-exclusive 10:90 subvention schemes where you pay 10% now to book and have zero EMI/interest till possession."
  },
  {
    q: "Is the project RERA registered?",
    a: "Yes, all our projects are fully RERA approved and compliant. Specific RERA registration numbers are displayed on each building's configuration sheet."
  },
  {
    q: "What are the possession timelines?",
    a: "The possession timeline for this exclusive phase is scheduled for June 2027, with construction currently progressing ahead of schedule."
  },
  {
    q: "Can I schedule a site visit?",
    a: "Absolutely! We organize free daily site visits, complete with complimentary pickup and drop-off services across Thane. You can request a visit using any booking form on this page."
  }
]

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx)
  }

  return (
    <section id="faq-section" className="bg-charcoal py-20 sm:py-28 relative">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
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
            F.A.Q
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#b89449,#e8c97a,#b89449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Questions
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/60">
            Quick answers to help you understand configurations, loans, timelines, and visit bookings.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-charcoal-light/30 overflow-hidden transition-colors"
                style={{
                  borderColor: isOpen ? "rgba(184,148,73,0.4)" : "rgba(255,255,255,0.1)"
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 flex justify-between items-center text-left text-white hover:text-gold transition-colors duration-300 font-semibold text-base sm:text-lg gap-4"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`size-5 text-gold shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-white/5 text-sm leading-relaxed text-white/70">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
