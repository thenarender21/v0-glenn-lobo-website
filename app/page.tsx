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

  return (
    <main>
      <Navigation onOpenContact={() => setContactModalOpen(true)} />
      <Hero onOpenContact={() => setContactModalOpen(true)} />
      <PropertyShowcase limit={6} />
      <AgentSection onOpenContact={() => setContactModalOpen(true)} />
      <Testimonials />
      <Footer onOpenContact={() => setContactModalOpen(true)} />
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
    </main>
  )
}
