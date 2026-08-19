"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { LocationSection } from "@/components/location-section"
import { ContactModal } from "@/components/contact-modal"
import { Footer } from "@/components/footer"

export default function LocationsPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [leadSource, setLeadSource] = useState("Locations Page")

  const handleOpenContact = (source: string) => {
    setLeadSource(source)
    setContactModalOpen(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation variant="solid" onOpenContact={() => handleOpenContact("Navigation CTA - Locations")} />
      <div className="pt-20 lg:pt-28">
        <LocationSection />
      </div>
      <Footer onOpenContact={() => handleOpenContact("Footer CTA - Locations")} />
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
        source={leadSource}
      />
    </main>
  )
}
