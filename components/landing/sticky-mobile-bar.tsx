"use client"

import { useRouter } from "next/navigation"
import { Phone, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackCallClick } from "@/lib/navigation-helpers"

export function StickyMobileBar() {
  const router = useRouter()

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4 shadow-lg flex gap-3 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
      <Button
        onClick={() => trackCallClick(router, "Mobile Sticky Call")}
        className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold h-12 gap-2 cursor-pointer"
        size="lg"
      >
        <Phone className="size-4 shrink-0" />
        Call Now
      </Button>
      <Button
        onClick={scrollToForm}
        className="flex-1 bg-gold text-charcoal hover:bg-gold-light font-semibold h-12 gap-2 cursor-pointer"
        size="lg"
      >
        <MessageSquare className="size-4 shrink-0" />
        Get Callback
      </Button>
    </div>
  )
}
