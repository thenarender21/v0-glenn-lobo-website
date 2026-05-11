"use client"

import { LandingHero } from "@/components/landing/landing-hero"
import { FeaturedProperties } from "@/components/landing/featured-properties"
import { WhyThane } from "@/components/landing/why-thane"
import { PremiumAmenities } from "@/components/landing/premium-amenities"
import { TrustSection } from "@/components/landing/trust-section"
import { LeadCaptureSection } from "@/components/landing/lead-capture-section"
import { FinalCta } from "@/components/landing/final-cta"
import { StickyCta } from "@/components/landing/sticky-cta"

export default function PremiumApartmentsLanding() {
  return (
    <>
      <LandingHero />
      <FeaturedProperties />
      <WhyThane />
      <PremiumAmenities />
      <TrustSection />
      <LeadCaptureSection />
      <FinalCta />
      <StickyCta />
    </>
  )
}
