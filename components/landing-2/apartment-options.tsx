"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText, CalendarCheck } from "lucide-react"
import { useFloatingCta } from "./floating-cta-form"

const apartments = [
  {
    type: "1BHK Smart",
    area: "430 sqft",
    price: "Price on Request",
    description: "Smart compact luxury living designed for modern professionals.",
  },
  {
    type: "2BHK",
    area: "610 sqft",
    price: "Starting ₹93 Lakhs",
    description: "Spacious layout with optimal ventilation and premium finishes.",
  },
  {
    type: "2BHK Premium",
    area: "660 sqft + Balcony",
    price: "Starting ₹1.02 Cr",
    description: "Expansive living spaces featuring private balconies and scenic views.",
  },
]

export function ApartmentOptions() {
  const { openForm } = useFloatingCta()

  return (
    <section className="bg-secondary/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-5xl">
            Residences
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Meticulously crafted living spaces that redefine luxury.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {apartments.map((apt, index) => (
            <motion.div
              key={apt.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div>
                <h3 className="text-2xl font-light text-foreground">{apt.type}</h3>
                <div className="mt-4 flex items-center gap-3">
                  <span className="rounded bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
                    {apt.area}
                  </span>
                </div>
                <p className="mt-6 text-2xl font-medium text-gold">{apt.price}</p>
                <p className="mt-4 text-muted-foreground">{apt.description}</p>
              </div>

              <div className="mt-10 flex flex-col gap-3">
                <Button
                  onClick={openForm}
                  className="w-full bg-gold text-charcoal hover:bg-gold-light transition-all"
                >
                  <CalendarCheck className="mr-2 size-4" />
                  Book Site Visit
                </Button>
                <Button
                  onClick={openForm}
                  variant="outline"
                  className="w-full hover:bg-gold/10 hover:text-gold hover:border-gold"
                >
                  <FileText className="mr-2 size-4" />
                  Get Floor Plans
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
