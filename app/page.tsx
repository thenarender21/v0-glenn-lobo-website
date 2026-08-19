"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { PropertyShowcase } from "@/components/property-showcase"
import { AgentSection } from "@/components/agent-section"
import { Testimonials } from "@/components/testimonials"
import { ContactModal } from "@/components/contact-modal"
import { Footer } from "@/components/footer"

export default function Home() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [leadSource, setLeadSource] = useState("Website Home")

  const handleOpenContact = (source: string) => {
    setLeadSource(source)
    setContactModalOpen(true)
  }

  return (
    <main>
      <Navigation onOpenContact={() => handleOpenContact("Navigation CTA - Home")} />
      <Hero onOpenContact={() => handleOpenContact("Hero CTA - Home")} />
      <PropertyShowcase limit={6} />
      <AgentSection onOpenContact={() => handleOpenContact("Agent Section CTA - Home")} />
      <Testimonials />
      <Footer onOpenContact={() => handleOpenContact("Footer CTA - Home")} />
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
        source={leadSource}
      />
    </main>
  )
}
