"use client"

import { Button } from "@/components/ui/button"
import { Phone, CalendarCheck } from "lucide-react"

export function FinalCta() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-charcoal py-24 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="text-3xl font-light tracking-tight sm:text-5xl">
          Find Your Dream Home in <span className="font-medium text-gold">Thane</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">
          Get expert guidance and explore premium apartments tailored to your lifestyle and budget. Our team is ready to assist you in making the best real estate decision.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="w-full bg-gold px-8 py-6 text-base font-medium text-charcoal hover:bg-gold-light sm:w-auto"
          >
            <CalendarCheck className="mr-2 size-5" />
            Schedule Visit
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-white/30 bg-transparent px-8 py-6 text-base text-white hover:bg-white/10 hover:text-white sm:w-auto"
          >
            <a href="tel:07972781688">
              <Phone className="mr-2 size-5" />
              Call Now
            </a>
          </Button>
        </div>
        <p className="mt-8 text-sm text-white/50">
          No brokerages. 100% transparent process.
        </p>
      </div>
    </section>
  )
}
