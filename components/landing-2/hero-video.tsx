"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle, Play } from "lucide-react"
import { useFloatingCta } from "./floating-cta-form"

export function HeroVideo() {
  const { openForm } = useFloatingCta()

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
        >
          {/* Using a placeholder drone video */}
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-20 text-center sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="mb-6 flex justify-center">
            <span className="rounded-full border border-gold/40 bg-charcoal/40 px-5 py-2 text-xs font-semibold tracking-[0.2em] text-gold backdrop-blur-md sm:text-sm">
              RAUNAK MAXIMUM CITY
            </span>
          </div>
          <h1 className="mx-auto max-w-4xl text-balance text-5xl font-light leading-[1.1] text-white sm:text-6xl md:text-7xl lg:text-[5rem]">
            Premium 1 & 2 BHK Apartments in <span className="font-medium text-gold">Thane</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg font-light leading-relaxed text-white/90 sm:text-xl">
            Discover fully furnished 1 & 2 BHK residences with rooftop lifestyle amenities, nature views, and modern smart living.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <Button
            onClick={openForm}
            size="lg"
            className="w-full bg-gold px-8 py-7 text-lg font-medium text-charcoal transition-all hover:bg-gold-light sm:w-auto"
          >
            Arrange a Viewing
          </Button>
          <Button
            onClick={openForm}
            variant="outline"
            size="lg"
            className="w-full border-white/30 bg-transparent px-8 py-7 text-lg text-white hover:bg-white/10 hover:text-white sm:w-auto"
          >
            Book Site Visit
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-green-500/50 bg-green-500/10 px-8 py-7 text-lg text-white transition-all hover:bg-green-500 hover:text-white sm:w-auto"
          >
            <a href="https://wa.me/9107972781688" target="_blank" rel="noopener noreferrer">
              WhatsApp Now
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 gap-4 text-sm font-medium text-white/80 sm:flex sm:flex-wrap sm:justify-center sm:gap-10"
        >
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="size-4 text-gold" />
            <span>Sample Flat Ready</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="size-4 text-gold" />
            <span>Fully Furnished Smart Homes</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="size-4 text-gold" />
            <span>1000+ Units Sold</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="size-4 text-gold" />
            <span>Prime Ghodbunder Location</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="flex h-14 w-8 justify-center rounded-full border-2 border-white/20 p-2">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="h-2 w-2 rounded-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  )
}
