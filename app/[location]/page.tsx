"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useParams, notFound } from "next/navigation"
import { PropertyType, PropertyStatus } from "@/lib/properties"
import { useProperties } from "@/components/properties-provider"
import { PropertyCard } from "@/components/property-card"
import { PropertyFilter } from "@/components/property-filter"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"

const validLocations: Record<string, string> = {
  "thane-west-properties": "Thane West",
  "kasarvadavali-properties": "Kasarvadavali",
  "anand-nagar-properties": "Anand Nagar",
  "waghbil-properties": "Waghbil",
  "bhayandarpada-properties": "Bhayandarpada",
  "owale-properties": "Owale",
  "hiranandani-estate-properties": "Hiranandani Estate",
  "kolshet-road-properties": "Kolshet Road",
  "ghodbunder-road-properties": "Ghodbunder Road",
  "kavesar-properties": "Kavesar",
}

export default function LocationPropertiesPage() {
  const properties = useProperties()
  const params = useParams()
  const locationSlug = typeof params?.location === 'string' ? params.location : ''
  const locationName = validLocations[locationSlug]

  const [activeTypeFilter, setActiveTypeFilter] = useState<PropertyType | "All">("All")
  const [activeStatusFilter, setActiveStatusFilter] = useState<PropertyStatus | "All">("All")
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [leadSource, setLeadSource] = useState("Website Location Page")

  const handleOpenContact = (source: string) => {
    setLeadSource(source)
    setContactModalOpen(true)
  }

  // If the route doesn't match our valid location slugs, show 404
  if (!locationName) {
    return notFound()
  }

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      // Filter based on whether the property's location contains the location name
      const passesLocation = property.location.toLowerCase().includes(locationName.toLowerCase())
      
      const passesType = activeTypeFilter === "All" || property.type === activeTypeFilter
      const passesStatus = activeStatusFilter === "All" || property.status === activeStatusFilter
      
      return passesLocation && passesType && passesStatus
    })
  }, [properties, locationName, activeTypeFilter, activeStatusFilter])

  return (
    <main className="min-h-screen bg-background">
      <Navigation onOpenContact={() => handleOpenContact(`Navigation CTA - ${locationName}`)} variant="solid" />
      
      <div className="pt-24 pb-12 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Neighborhood Properties
            </p>
            <h1 className="text-balance text-4xl font-semibold text-foreground sm:text-5xl">
              Properties in {locationName}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Discover the finest selection of residential properties available in {locationName}. 
              Whether you are looking for an affordable 1 BHK or a luxurious 3 BHK apartment, 
              explore our curated listings to find a home that perfectly matches your lifestyle 
              and budget in one of the most sought-after neighborhoods.
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
              No properties found matching your criteria in {locationName}.
            </motion.p>
          )}

          {/* Other Locations Links */}
          <div className="mt-20 pt-12 border-t border-border">
            <h2 className="text-xl font-bold text-foreground mb-6">Explore Other Neighborhoods</h2>
            <div className="flex flex-wrap gap-4">
              {Object.entries(validLocations).map(([slug, name]) => {
                if (slug === locationSlug) return null;
                return (
                  <Link 
                    key={slug} 
                    href={`/${slug}`} 
                    className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors"
                  >
                    {name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer onOpenContact={() => handleOpenContact(`Footer CTA - ${locationName}`)} />
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
        source={leadSource}
      />
    </main>
  )
}
