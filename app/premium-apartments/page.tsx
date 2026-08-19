"use client"

import { PremiumLandingHero } from "@/components/landing/premium-landing-hero"
import { PremiumFeaturedProperties } from "@/components/landing/premium-featured-properties"
import { LeadCaptureSection } from "@/components/landing/lead-capture-section"
import { Navigation } from "@/components/navigation"
import { AgentSection } from "@/components/agent-section"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { StickyMobileBar } from "@/components/landing/sticky-mobile-bar"

export default function PremiumApartmentsLanding() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <Navigation variant="landing" onOpenContact={() => {}} />
      
      <PremiumLandingHero />
      <PremiumFeaturedProperties />
      
      <AgentSection onOpenContact={scrollToForm} />
      <Testimonials />
      
      <LeadCaptureSection />
      
      <Footer onOpenContact={scrollToForm} />
      
      <StickyMobileBar />
    </>
  )
}
