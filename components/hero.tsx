"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

interface HeroProps {
  onOpenContact: () => void
}

export function Hero({ onOpenContact }: HeroProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-gold">
            Luxury Real Estate
          </p>
          <h1 className="text-balance text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Exceptional Properties for{" "}
            <span className="font-medium">Discerning Clients</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/80 sm:text-xl">
            Experience personalized service and access to Los Angeles&apos; most
            prestigious addresses with Glenn Lobo, your trusted luxury real
            estate advisor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            onClick={onOpenContact}
            size="lg"
            className="bg-gold text-charcoal hover:bg-gold-light px-8 py-6 text-base font-medium"
          >
            Book a Private Consultation
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white px-8 py-6 text-base"
          >
            <a href="#properties">View Properties</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#properties"
          className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="size-5" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  )
}
