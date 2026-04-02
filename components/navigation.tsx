"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useScrollDirection } from "@/hooks/use-scroll-direction"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavigationProps {
  onOpenContact: () => void
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/#about" },
  { label: "Testimonials", href: "/#testimonials" },
]

export function Navigation({ onOpenContact }: NavigationProps) {
  const { scrollDirection, isAtTop } = useScrollDirection()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const isVisible = scrollDirection === "up" || isAtTop

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isAtTop ? "bg-transparent" : "bg-background/95 backdrop-blur-md border-b border-border"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className={cn(
              "text-xl font-semibold tracking-tight transition-colors",
              isAtTop ? "text-white" : "text-foreground"
            )}>
              Thakurjee Properties
            </span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-gold",
                  isAtTop ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              onClick={onOpenContact}
              className="bg-gold text-charcoal hover:bg-gold-light"
            >
              Book Consultation
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "md:hidden p-2 -m-2",
              isAtTop ? "text-white" : "text-foreground"
            )}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="size-6" />
            <span className="sr-only">Open menu</span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-background p-6 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold tracking-tight text-foreground">
                  Thakurjee Properties
                </span>
                <button
                  type="button"
                  className="p-2 -m-2 text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="size-6" />
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
              <div className="mt-8 flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenContact()
                  }}
                  className="mt-4 w-full bg-gold text-charcoal hover:bg-gold-light"
                  size="lg"
                >
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
