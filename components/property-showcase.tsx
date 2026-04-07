"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { properties, PropertyType, PropertyStatus } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { PropertyFilter } from "@/components/property-filter"
import { Button } from "@/components/ui/button"

interface PropertyShowcaseProps {
  limit?: number
}

export function PropertyShowcase({ limit }: PropertyShowcaseProps) {
  const [activeTypeFilter, setActiveTypeFilter] = useState<PropertyType | "All">("All")
  const [activeStatusFilter, setActiveStatusFilter] = useState<PropertyStatus | "All">("All")

  const filteredProperties = useMemo(() => {
    const filtered = properties.filter((property) => {
      const passesType = activeTypeFilter === "All" || property.type === activeTypeFilter
      const passesStatus = activeStatusFilter === "All" || property.status === activeStatusFilter
      return passesType && passesStatus
    })
    
    return limit ? filtered.slice(0, limit) : filtered
  }, [activeTypeFilter, activeStatusFilter, limit])

  return (
    <section id="properties" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
              {limit ? "Featured Portfolio" : "Our Portfolio"}
            </p>
            <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
              Exceptional Properties
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Discover our curated selection of Thane&apos;s finest residences,
              each chosen for its exceptional quality along Ghodbunder Road.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <PropertyFilter
            activeTypeFilter={activeTypeFilter}
            onTypeFilterChange={setActiveTypeFilter}
            activeStatusFilter={activeStatusFilter}
            onStatusFilterChange={setActiveStatusFilter}
          />
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <PropertyCard property={property} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProperties.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 text-center text-muted-foreground"
          >
            No properties found for this category.
          </motion.p>
        )}

        {limit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 flex justify-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-gold text-charcoal hover:bg-gold-light px-8 py-6 text-base font-medium"
            >
              <Link href="/properties">View All Properties</Link>
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
