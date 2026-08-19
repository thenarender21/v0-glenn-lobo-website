"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Calendar, MessageSquare } from "lucide-react"
import { trackCallClick, trackWhatsAppClick } from "@/lib/navigation-helpers"

export function FloatingElements({ onOpenContact }: { onOpenContact: () => void }) {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById("final-lead-capture")?.scrollIntoView({ behavior: "smooth" })
  }

  // We will build a fully responsive layout.
  // Mobile: Persistent bottom bar
  // Desktop: Floating bottom-right action cluster (WhatsApp, Call, Book Visit)
  return (
    <>
      {/* Mobile persistent bottom bar (visible only on mobile) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal border-t border-white/10 px-4 py-3 flex gap-2 justify-between items-center shadow-[0_-8px_32px_rgba(0,0,0,0.5)]">
        <button
          onClick={() => trackCallClick(router, "Mobile Floating Call")}
          className="flex-1 bg-white/5 border border-white/20 text-white rounded-lg py-3 flex items-center justify-center gap-2 text-xs font-bold transition-all hover:bg-white/10"
        >
          <Phone className="size-4 text-gold shrink-0" />
          Call
        </button>
        <button
          onClick={() => trackWhatsAppClick(router, "https://wa.me/917972781688", "Mobile Floating WhatsApp")}
          className="flex-1 bg-green-600/10 border border-green-500/30 text-green-400 rounded-lg py-3 flex items-center justify-center gap-2 text-xs font-bold transition-all hover:bg-green-600/20"
        >
          <MessageSquare className="size-4 shrink-0" />
          WhatsApp
        </button>
        <button
          onClick={onOpenContact}
          className="flex-2 bg-gold text-charcoal rounded-lg py-3 flex items-center justify-center gap-2 text-xs font-bold transition-all hover:bg-gold-light shadow-md"
        >
          <Calendar className="size-4 shrink-0" />
          Book Visit
        </button>
      </div>

      {/* Desktop floating buttons (visible only on desktop after scroll) */}
      <div className="hidden md:flex fixed bottom-8 right-8 z-50 flex-col gap-3 items-end">
        {isVisible && (
          <>
            {/* Site Visit button */}
            <button
              onClick={onOpenContact}
              className="group relative flex items-center gap-3 rounded-full bg-gold px-6 py-4 font-bold text-charcoal shadow-2xl transition-transform hover:scale-105 hover:bg-gold-light focus:outline-none"
            >
              <Calendar className="size-5 shrink-0" />
              <span>Book Site Visit</span>
              <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-gold/40 opacity-75 group-hover:bg-gold/60"></span>
            </button>

            {/* Call button */}
            <button
              onClick={() => trackCallClick(router, "Desktop Floating Call")}
              className="flex items-center justify-center size-12 rounded-full bg-charcoal border border-white/20 text-white shadow-xl hover:scale-105 hover:border-gold/50 transition-transform group"
            >
              <Phone className="size-5 text-gold group-hover:animate-bounce" />
            </button>

            {/* WhatsApp button */}
            <button
              onClick={() => trackWhatsAppClick(router, "https://wa.me/917972781688", "Desktop Floating WhatsApp")}
              className="flex items-center justify-center size-12 rounded-full bg-charcoal border border-green-500/30 text-green-400 shadow-xl hover:scale-105 hover:border-green-400 transition-transform group"
            >
              <MessageSquare className="size-5 group-hover:animate-bounce" />
            </button>
          </>
        )}
      </div>
    </>
  )
}
