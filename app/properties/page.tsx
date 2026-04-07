"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { properties, PropertyType, PropertyStatus } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { PropertyFilter } from "@/components/property-filter"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"

export default function PropertiesPage() {
  const [activeTypeFilter, setActiveTypeFilter] = useState<PropertyType | "All">("All")
  const [activeStatusFilter, setActiveStatusFilter] = useState<PropertyStatus | "All">("All")
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const passesType = activeTypeFilter === "All" || property.type === activeTypeFilter
      const passesStatus = activeStatusFilter === "All" || property.status === activeStatusFilter
      return passesType && passesStatus
    })
  }, [activeTypeFilter, activeStatusFilter])

  return (
    <main className="min-h-screen bg-background">
      <Navigation onOpenContact={() => setContactModalOpen(true)} />
      
      <div className="pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Complete Portfolio
            </p>
            <h1 className="text-balance text-4xl font-semibold text-foreground sm:text-5xl">
              Our Properties
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Explore our full range of 50+ premium residences across Thane and Ghodbunder Road. 
              Find your perfect match among our curated selection.
            </p>
          </motion.div>

          <div className="mt-12">
            <PropertyFilter
              activeTypeFilter={activeTypeFilter}
              onTypeFilterChange={setActiveTypeFilter}
              activeStatusFilter={activeStatusFilter}
              onStatusFilterChange={setActiveStatusFilter}
            />
          </div>

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
              className="mt-12 text-center text-muted-foreground font-medium"
            >
              No properties found matching your criteria.
            </motion.p>
          )}
        </div>
      </div>

      <Footer onOpenContact={() => setContactModalOpen(true)} />
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </main>
  )
}
