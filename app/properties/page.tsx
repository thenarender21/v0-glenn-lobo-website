"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PropertyType, PropertyStatus } from "@/lib/properties"
import { useProperties } from "@/components/properties-provider"
import { PropertyCard } from "@/components/property-card"
import { PropertyFilter } from "@/components/property-filter"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function PropertiesPage() {
  const properties = useProperties()
  const [activeTypeFilter, setActiveTypeFilter] = useState<PropertyType | "All">("All")
  const [activeStatusFilter, setActiveStatusFilter] = useState<PropertyStatus | "All">("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [contactModalOpen, setContactModalOpen] = useState(false)

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const passesType = activeTypeFilter === "All" || property.type === activeTypeFilter
      const passesStatus = activeStatusFilter === "All" || property.status === activeStatusFilter
      
      const searchLower = searchQuery.toLowerCase()
      const passesSearch = !searchQuery || 
        property.location.toLowerCase().includes(searchLower) ||
        property.title.toLowerCase().includes(searchLower) ||
        property.type.toLowerCase().includes(searchLower)

      return passesType && passesStatus && passesSearch
    })
  }, [activeTypeFilter, activeStatusFilter, searchQuery])

  const groupedProperties = useMemo(() => {
    const groups: Record<string, typeof properties> = {}
    filteredProperties.forEach(property => {
      if (!groups[property.location]) {
        groups[property.location] = []
      }
      groups[property.location].push(property)
    })
    return groups
  }, [filteredProperties])

  return (
    <main className="min-h-screen bg-background">
      <Navigation onOpenContact={() => setContactModalOpen(true)} variant="solid" />
      
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

          <div className="mt-12 space-y-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input 
                type="text"
                placeholder="Search by location, title, or BHK"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 h-12 text-base bg-card border-border shadow-sm"
              />
            </div>
            <PropertyFilter
              activeTypeFilter={activeTypeFilter}
              onTypeFilterChange={setActiveTypeFilter}
              activeStatusFilter={activeStatusFilter}
              onStatusFilterChange={setActiveStatusFilter}
            />
          </div>

          <div className="mt-16 space-y-16">
            {Object.entries(groupedProperties).map(([location, locationProperties]) => (
              <div key={location}>
                <h2 className="text-2xl font-bold mb-6 text-foreground">{location}</h2>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  <AnimatePresence mode="popLayout">
                    {locationProperties.map((property, index) => (
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
              </div>
            ))}
          </div>

          {Object.keys(groupedProperties).length === 0 && (
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
