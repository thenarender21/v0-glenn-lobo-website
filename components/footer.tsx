"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { useRouter } from "next/navigation"
import { trackCallClick } from "@/lib/navigation-helpers"

interface FooterProps {
  onOpenContact: () => void
}

export function Footer({ onOpenContact }: FooterProps) {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-foreground">Thakurjee Properties</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Leading Real Estate Experts
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/70">
              Dedicated to providing exceptional service and access to Thane&apos;s
              most prestigious properties. Your dream home awaits.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenContact}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="size-4 text-gold" />
                <button
                  onClick={() => trackCallClick(router, "Footer Phone Link")}
                  className="transition-colors hover:text-gold text-left font-medium"
                >
                  07972781688
                </button>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="size-4 text-gold" />
                <span>contact@thakurjeeproperties.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>Shop No.-5, JVM Florencia Kavya, Haware City, Thane West, Thane, Maharashtra 400615</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Thakurjee Properties. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed by{" "}
            <a
              href="https://thenarender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-foreground"
            >
              narender
            </a>
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
