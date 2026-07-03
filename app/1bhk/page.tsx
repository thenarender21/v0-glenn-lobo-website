"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/landing-1bhk/hero"
import { WhyChoose1BHK } from "@/components/landing-1bhk/why-choose"
import { PropertyHighlights } from "@/components/landing-1bhk/highlights"
import { FloorPlanShowcase } from "@/components/landing-1bhk/floor-plan"
import { AmenitiesGrid } from "@/components/landing-1bhk/amenities"
import { LocationAdvantages } from "@/components/landing-1bhk/location"
import { Gallery } from "@/components/landing-1bhk/gallery"
import { PricePaymentSection } from "@/components/landing-1bhk/pricing"
import { InvestmentBenefits } from "@/components/landing-1bhk/investment"
import { TestimonialsSection } from "@/components/landing-1bhk/testimonials"
import { FaqSection } from "@/components/landing-1bhk/faq"
import { CrossSellSection } from "@/components/landing-1bhk/cross-sell"
import { FinalCtaSection } from "@/components/landing-1bhk/final-cta"
import { FloatingElements } from "@/components/landing-1bhk/floating-elements"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"

export default function Premium1BHKCampaign() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [leadSource, setLeadSource] = useState("1 BHK Campaign Page")

  const handleOpenContact = (source: string) => {
    setLeadSource(source)
    setContactModalOpen(true)
  }

  return (
    <>
      <Navigation onOpenContact={() => handleOpenContact("Navigation CTA - 1 BHK Campaign")} />
      
      {/* 1. Hero Section */}
      <Hero onOpenContact={() => handleOpenContact("Hero CTA - 1 BHK Campaign")} />
      
      {/* 2. Why Choose 1 BHK */}
      <WhyChoose1BHK />
      
      {/* 3. Property Highlights */}
      <PropertyHighlights />
      
      {/* 4. Floor Plan Showcase */}
      <FloorPlanShowcase onOpenContact={handleOpenContact} />
      
      {/* 5. Amenities Grid */}
      <AmenitiesGrid />
      
      {/* 6. Location Advantages */}
      <LocationAdvantages onOpenContact={handleOpenContact} />
      
      {/* 7. Gallery */}
      <Gallery />
      
      {/* 8. Price & Payment */}
      <PricePaymentSection onOpenContact={handleOpenContact} />
      
      {/* 9. Investment Benefits */}
      <InvestmentBenefits />
      
      {/* 10. Testimonials */}
      <TestimonialsSection />
      
      {/* 11. FAQ Section */}
      <FaqSection />
      
      {/* Cross-Sell Section */}
      <CrossSellSection />
      
      {/* 12. Final Lead Capture */}
      <FinalCtaSection />
      
      {/* Floating Buttons & Mobile Bottom Bar */}
      <FloatingElements onOpenContact={() => handleOpenContact("Floating Button CTA - 1 BHK Campaign")} />
      
      <Footer onOpenContact={() => handleOpenContact("Footer CTA - 1 BHK Campaign")} />
      
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
        source={leadSource}
      />
    </>
  )
}
