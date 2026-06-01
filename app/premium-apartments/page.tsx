"use client"

import { useState } from "react"
import { PremiumLandingHero } from "@/components/landing/premium-landing-hero"
import { PremiumFeaturedProperties } from "@/components/landing/premium-featured-properties"
import { PremiumAmenities } from "@/components/landing/premium-amenities"
import { LeadCaptureSection } from "@/components/landing/lead-capture-section"

import { Navigation } from "@/components/navigation"
import { AgentSection } from "@/components/agent-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"

export default function PremiumApartmentsLanding() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [leadSource, setLeadSource] = useState("Website Premium Landing")

  const handleOpenContact = (source: string) => {
    setLeadSource(source)
    setContactModalOpen(true)
  }

  return (
    <>
      <Navigation onOpenContact={() => handleOpenContact("Navigation CTA - Premium Landing")} />
      
      <PremiumLandingHero onOpenContact={() => handleOpenContact("Hero CTA - Premium Landing")} />
      <PremiumFeaturedProperties />
      <PremiumAmenities />
      
      <AgentSection onOpenContact={() => handleOpenContact("Agent Section CTA - Premium Landing")} />
      <Testimonials />
      
      <LeadCaptureSection />
      
      <Footer onOpenContact={() => handleOpenContact("Footer CTA - Premium Landing")} />
      
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
        source={leadSource}
      />
    </>
  )
}
