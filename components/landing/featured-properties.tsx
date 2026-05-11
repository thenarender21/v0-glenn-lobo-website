"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const properties = [
  {
    type: "1BHK Apartments",
    description: "Smartly designed homes perfect for professionals and investors.",
    cta: "Get Details",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  },
  {
    type: "2BHK Apartments",
    description: "Spacious family homes with premium amenities and connectivity.",
    cta: "Book Site Visit",
    image: "https://images.unsplash.com/photo-1502672260266-1c1de2d9d00c?w=800&q=80",
  },
  {
    type: "3BHK Apartments",
    description: "Luxury residences designed for elevated modern living.",
    cta: "Explore Projects",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
]

export function FeaturedProperties() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Featured Property Types
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover a wide range of premium apartments designed to suit your lifestyle.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {properties.map((property, index) => (
            <motion.div
              key={property.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.type}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-medium text-white">{property.type}</h3>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-6">
                <p className="text-muted-foreground">{property.description}</p>
                <Button
                  onClick={scrollToForm}
                  className="mt-6 w-full bg-gold hover:bg-gold-light text-charcoal"
                >
                  {property.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
