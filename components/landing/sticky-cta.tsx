"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CalendarCheck } from "lucide-react"

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 500px
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 sm:bottom-10 sm:right-10"
        >
          <button
            onClick={scrollToForm}
            className="group flex items-center gap-3 rounded-full bg-gold px-6 py-4 font-medium text-charcoal shadow-xl transition-transform hover:scale-105 hover:bg-gold-light focus:outline-none focus:ring-4 focus:ring-gold/30"
          >
            <CalendarCheck className="size-5" />
            <span className="hidden sm:inline-block">Book Free Visit</span>
            <span className="sm:hidden">Book</span>
            
            {/* Ping animation effect behind the button */}
            <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-gold/40 opacity-75 group-hover:bg-gold/60"></span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
