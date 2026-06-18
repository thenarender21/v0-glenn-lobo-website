"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle } from "lucide-react"
import { trackCallClick, trackWhatsAppClick } from "@/lib/navigation-helpers"

export function LandingHero() {
  const router = useRouter()
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 flex justify-center">
            <span className="rounded-full border border-gold/30 bg-charcoal/50 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold backdrop-blur-md sm:text-sm">
              EXCLUSIVE THANE RESIDENCES
            </span>
          </div>
          <h1 className="text-balance text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Premium 1, 2 & 3 BHK Apartments in <span className="font-medium text-gold">Thane</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/80 sm:text-xl">
            Explore luxury homes in prime locations with modern amenities. Schedule your free site visit today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            onClick={scrollToForm}
            size="lg"
            className="w-full bg-gold px-8 py-6 text-base font-medium text-charcoal hover:bg-gold-light sm:w-auto"
          >
            Book Free Site Visit
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full border-white/30 bg-transparent px-8 py-6 text-base text-white hover:bg-white/10 hover:text-white sm:w-auto"
            onClick={() => trackCallClick(router, "Landing Hero Call")}
          >
            <Phone className="mr-2 size-4" />
            Call Now
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full border-green-500/50 bg-green-500/10 px-8 py-6 text-base text-white hover:bg-green-500/20 sm:w-auto"
            onClick={() => trackWhatsAppClick(router, "https://wa.me/917972781688", "Landing Hero WhatsApp")}
          >
            WhatsApp Now
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-white/70 sm:gap-10"
        >
          <div className="flex items-center gap-2">
            <CheckCircle className="size-4 text-gold" />
            <span>Verified Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="size-4 text-gold" />
            <span>Prime Locations</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="size-4 text-gold" />
            <span>Expert Property Assistance</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
