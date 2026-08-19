"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useFloatingCta } from "./floating-cta-form"

export function SecondaryProject() {
  const { openForm } = useFloatingCta()

  return (
    <section className="bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full overflow-hidden rounded-3xl lg:order-1"
          >
            <Image
              src="https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=1000&auto=format&fit=crop"
              alt="Raunak 108"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:order-2"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Secondary Project
            </p>
            <h2 className="text-4xl font-light tracking-tight text-foreground sm:text-5xl">
              Raunak 108
            </h2>
            <p className="mt-6 text-xl text-muted-foreground font-medium">
              Smart living starts here.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-center gap-3 border-b border-border pb-3">
                <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="font-medium text-foreground text-lg">1BHK Starting ₹67 Lakhs</span>
              </li>
              <li className="flex items-center gap-3 border-b border-border pb-3">
                <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="font-medium text-foreground text-lg">40 Storey Tower</span>
              </li>
              <li className="flex items-center gap-3 border-b border-border pb-3">
                <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="font-medium text-foreground text-lg">Rooftop Amenities</span>
              </li>
              <li className="flex items-center gap-3 border-b border-border pb-3">
                <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="font-medium text-foreground text-lg">5 Minutes from Metro</span>
              </li>
              <li className="flex items-center gap-3 border-b border-border pb-3">
                <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="font-medium text-foreground text-lg">Jio Fiber Smart Homes</span>
              </li>
            </ul>

            <Button
              onClick={openForm}
              size="lg"
              className="mt-10 bg-charcoal text-white hover:bg-charcoal/90 px-8 py-6 text-base"
            >
              Explore Project
            </Button>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
