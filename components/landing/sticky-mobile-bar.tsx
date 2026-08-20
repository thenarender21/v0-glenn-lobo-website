"use client"

import { useRouter } from "next/navigation"
import { Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackCallClick, trackWhatsAppClick } from "@/lib/navigation-helpers"

export function StickyMobileBar() {
  const router = useRouter()
  const whatsappUrl = "https://wa.me/917972781688?text=Hi,%20I'm%20interested%20in%202%20BHK%20apartments%20in%20Thane"

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4 shadow-lg flex gap-3 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
      <Button
        onClick={() => trackWhatsAppClick(router, whatsappUrl, "Mobile Sticky WhatsApp")}
        className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold h-12 gap-2 cursor-pointer"
        size="lg"
      >
        <MessageSquare className="size-4 shrink-0" />
        WhatsApp
      </Button>
      <Button
        onClick={() => trackCallClick(router, "Mobile Sticky Call")}
        className="flex-1 bg-gold text-charcoal hover:bg-gold-light font-semibold h-12 gap-2 cursor-pointer"
        size="lg"
      >
        <Phone className="size-4 shrink-0" />
        Call Now
      </Button>
    </div>
  )
}
