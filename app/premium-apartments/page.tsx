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
import { ConversionType } from "@/lib/navigation-helpers"

export default function PremiumApartmentsLanding() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [leadSource, setLeadSource] = useState("Website Premium Landing")
  const [conversionType, setConversionType] = useState<ConversionType>("form")

  const handleOpenContact = (source: string, type: ConversionType = "form") => {
    setLeadSource(source)
    setConversionType(type)
    setContactModalOpen(true)
  }

  return (
    <>
      <Navigation onOpenContact={() => handleOpenContact("Navigation CTA - Premium Landing", "form")} />
      
      <PremiumLandingHero onOpenContact={() => handleOpenContact("Hero CTA - Premium Landing", "site-visit")} />
      <PremiumFeaturedProperties />
      <PremiumAmenities />
      
      <AgentSection onOpenContact={() => handleOpenContact("Agent Section CTA - Premium Landing", "form")} />
      <Testimonials />
      
      <LeadCaptureSection />
      
      <Footer onOpenContact={() => handleOpenContact("Footer CTA - Premium Landing", "form")} />
      
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
        source={leadSource}
        conversionType={conversionType}
      />
    </>
  )
}
