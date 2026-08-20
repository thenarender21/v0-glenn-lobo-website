"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function PremiumLandingHero() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16">
      <link 
        rel="preload" 
        href="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" 
        as="image" 
        media="(max-width: 767px)" 
      />
      <link 
        rel="preload" 
        href="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop" 
        as="image" 
        media="(min-width: 768px)" 
      />
      {/* Background image & overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop')] md:bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1920&auto=format&fit=crop')]"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/70 to-charcoal/95 z-10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center"
        >
          <div className="mb-3 sm:mb-4">
            <span className="inline-block rounded-full border border-gold/30 bg-charcoal/50 px-3 py-1 text-[10px] sm:text-xs font-semibold tracking-widest text-gold backdrop-blur-md">
              EXCLUSIVE THANE RESIDENCES
            </span>
          </div>
          
          <h1 className="text-balance text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white px-2">
            2 BHK Apartments in Thane — Starting <span className="font-semibold text-gold">₹79.99 Lakhs</span>
          </h1>
          
          <p className="mt-3 sm:mt-4 max-w-2xl text-pretty text-xs sm:text-base md:text-lg text-white/80 leading-relaxed px-4">
            Verified Raunak & Lodha projects · 13+ years · 800+ properties sold
          </p>

          <div className="mt-5 sm:mt-6 w-full max-w-[280px]">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="w-full bg-gold text-charcoal hover:bg-gold-light text-sm sm:text-base font-semibold h-11 sm:h-12 rounded-xl transition-colors cursor-pointer"
            >
              Book Free Site Visit
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
