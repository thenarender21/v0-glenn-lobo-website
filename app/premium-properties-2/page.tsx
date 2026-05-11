import { FloatingCtaProvider } from "@/components/landing-2/floating-cta-form"
import { HeroVideo } from "@/components/landing-2/hero-video"
import { ProjectHighlights } from "@/components/landing-2/project-highlights"
import { ApartmentOptions } from "@/components/landing-2/apartment-options"
import { LifestyleAmenities } from "@/components/landing-2/lifestyle-amenities"
import { LocationAdvantages } from "@/components/landing-2/location-advantages"
import { NatureWellness } from "@/components/landing-2/nature-wellness"
import { TrustSocialProof } from "@/components/landing-2/trust-social-proof"
import { SecondaryProject } from "@/components/landing-2/secondary-project"
import { FinalCtaSection } from "@/components/landing-2/final-cta-section"

export default function PremiumProperties2Landing() {
  return (
    <FloatingCtaProvider>
      <HeroVideo />
      <ProjectHighlights />
      <ApartmentOptions />
      <LifestyleAmenities />
      <LocationAdvantages />
      <NatureWellness />
      <TrustSocialProof />
      <SecondaryProject />
      <FinalCtaSection />
    </FloatingCtaProvider>
  )
}
