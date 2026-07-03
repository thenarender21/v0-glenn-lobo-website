"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CrossSellSection() {
  return (
    <section className="bg-background py-12 relative border-t border-border">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div
          className="rounded-3xl overflow-hidden px-8 py-10 sm:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative"
          style={{
            background: "linear-gradient(135deg, #0f0f0f 0%, #1a1508 50%, #0f0f0f 100%)",
            border: "1px solid rgba(184,148,73,0.28)",
          }}
        >
          {/* Glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(184,148,73,0.1) 0%, transparent 70%)",
            }}
          />
          
          <div className="relative text-center md:text-left">
            <span
              className="inline-block rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-widest mb-3"
              style={{
                background: "rgba(184,148,73,0.12)",
                border: "1px solid rgba(184,148,73,0.4)",
                color: "#e8c97a",
              }}
            >
              Alternative Option
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">
              Need More Space?
            </h3>
            <p className="text-sm leading-relaxed text-white/60 max-w-md">
              Explore our spacious premium 2 BHK apartments designed for growing families and enhanced comfort.
            </p>
          </div>

          <div className="relative flex-shrink-0">
            <Button
              asChild
              className="h-12 px-6 font-bold text-sm gap-2 shadow-lg transition-all hover:scale-105 hover:brightness-110 cursor-pointer"
              style={{ background: "linear-gradient(90deg,#b89449,#e8c97a)", color: "#0f0f0f" }}
            >
              <Link href="/2bhk">
                View 2 BHK Options
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
