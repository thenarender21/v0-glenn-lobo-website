"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, CalendarCheck } from "lucide-react"
import { useRouter } from "next/navigation"
import { useFloatingCta } from "./floating-cta-form"
import { trackCallClick } from "@/lib/navigation-helpers"

export function FinalCtaSection() {
  const router = useRouter()
  const { openForm } = useFloatingCta()

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-light tracking-tight sm:text-6xl">
            Find Your Dream Home In <span className="font-medium text-gold">Thane</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl font-light leading-relaxed text-white/80">
            Experience smart luxury living surrounded by nature, connectivity, and premium amenities.
          </p>
          
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              onClick={openForm}
              size="lg"
              className="w-full bg-gold px-8 py-7 text-base font-medium text-charcoal hover:bg-gold-light sm:w-auto"
            >
              <CalendarCheck className="mr-2 size-5" />
              Arrange a Viewing
            </Button>
            <Button
              onClick={openForm}
              variant="outline"
              size="lg"
              className="w-full border-white/30 bg-transparent px-8 py-7 text-base text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              Book Site Visit
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-white/30 bg-transparent px-8 py-7 text-base text-white hover:bg-white/10 hover:text-white sm:w-auto"
              onClick={() => trackCallClick(router, "Final CTA Section Call")}
            >
              <Phone className="mr-2 size-5" />
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
