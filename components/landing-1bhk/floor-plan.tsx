"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Layout, Maximize, Ruler, Square } from "lucide-react"

export function FloorPlanShowcase({ onOpenContact }: { onOpenContact: (source: string) => void }) {
  const [activeTab, setActiveTab] = useState<"smart" | "premium">("smart")

  const configs = {
    smart: {
      type: "1 BHK Smart Layout",
      carpet: "410 Sq.Ft.",
      builtup: "580 Sq.Ft.",
      living: "10'0\" x 14'0\"",
      master: "10'0\" x 10'6\"",
      kitchen: "7'6\" x 8'6\"",
      balcony: "N/A",
    },
    premium: {
      type: "1 BHK Premium XL (With Balcony)",
      carpet: "425 Sq.Ft.",
      builtup: "610 Sq.Ft.",
      living: "10'0\" x 15'0\"",
      master: "10'0\" x 11'0\"",
      kitchen: "8'0\" x 9'0\"",
      balcony: "4'6\" Wide Balcony",
    },
  }

  const current = configs[activeTab]

  return (
    <section id="floor-plans" className="bg-background py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(184,148,73,0.12)",
              border: "1px solid rgba(184,148,73,0.35)",
              color: "#e8c97a",
            }}
          >
            Spacious Architecture
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
            Floor Plan{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#b89449,#e8c97a,#b89449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Showcase
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            View detailed floor layouts and dimensions designed for maximum efficiency and modern living comforts.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("smart")}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              activeTab === "smart"
                ? "bg-gold text-charcoal shadow-lg"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            1 BHK Smart (410 Sq.Ft.)
          </button>
          <button
            onClick={() => setActiveTab("premium")}
            className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
              activeTab === "premium"
                ? "bg-gold text-charcoal shadow-lg"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            1 BHK Premium XL (425 Sq.Ft.)
          </button>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Floor Plan Drawing */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-lg aspect-square rounded-2xl border border-border bg-card shadow-xl p-8 flex items-center justify-center overflow-hidden group">
              {/* Decorative Blueprint grid background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(184,148,73,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(184,148,73,0.04)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              
              {/* Stylized SVG Floor Plan Schematic for 1 BHK */}
              <svg viewBox="0 0 500 500" className="w-full h-full stroke-foreground/40 fill-none font-sans text-xs font-semibold select-none">
                {/* Outer frame */}
                <rect x="30" y="30" width="440" height="440" strokeWidth="4" rx="8" className="stroke-foreground/60" />
                
                {/* Rooms dividers */}
                {/* Living room (Bottom Left / Center) */}
                <rect x="30" y="230" width="250" height="240" strokeWidth="2" />
                <text x="155" y="340" textAnchor="middle" className="fill-foreground font-medium text-sm">LIVING ROOM</text>
                <text x="155" y="360" textAnchor="middle" className="fill-muted-foreground text-[10px]">{current.living}</text>

                {/* Master Bed (Top Left) */}
                <rect x="30" y="30" width="250" height="200" strokeWidth="2" />
                <text x="155" y="115" textAnchor="middle" className="fill-foreground font-medium text-sm">BEDROOM</text>
                <text x="155" y="135" textAnchor="middle" className="fill-muted-foreground text-[10px]">{current.master}</text>

                {/* Kitchen (Right Column) */}
                <rect x="280" y="230" width="190" height="170" strokeWidth="2" />
                <text x="375" y="300" textAnchor="middle" className="fill-foreground font-medium text-sm">KITCHEN</text>
                <text x="375" y="320" textAnchor="middle" className="fill-muted-foreground text-[10px]">{current.kitchen}</text>

                {/* Toilet / Bath (Top Right) */}
                <rect x="280" y="30" width="190" height="200" strokeWidth="2" />
                <text x="375" y="120" textAnchor="middle" className="fill-foreground font-medium text-sm">TOILET / BATH</text>
                <text x="375" y="140" textAnchor="middle" className="fill-muted-foreground text-[10px]">6'0" x 7'0"</text>

                {/* Dry Yard / Balcony (Bottom Right) */}
                <rect x="280" y="400" width="190" height="70" strokeWidth="1.5" className="fill-muted/10" />
                <text x="375" y="435" textAnchor="middle" className="fill-muted-foreground text-[9px]">DRY AREA</text>

                {/* Balcony overlay (if premium) */}
                {activeTab === "premium" && (
                  <>
                    <rect x="30" y="470" width="250" height="15" strokeWidth="1" className="fill-gold/10 stroke-gold/40" />
                    <text x="155" y="481" textAnchor="middle" className="fill-gold text-[8px] font-bold">BALCONY</text>
                  </>
                )}
              </svg>

              {/* Watermark/Label */}
              <div className="absolute bottom-5 right-5 text-right">
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold bg-gold/10 border border-gold/30 px-2 py-0.5 rounded">
                  Schematic Layout
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Spec details */}
          <div className="lg:col-span-5 text-left flex flex-col justify-center">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold mb-3">
              {current.type}
            </span>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Room Dimensions & Space Details
            </h3>

            {/* Spec List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-3">
                  <Maximize className="size-5 text-gold shrink-0" />
                  <span className="text-sm font-semibold text-foreground">Carpet Area</span>
                </div>
                <span className="text-base font-bold text-gold">{current.carpet}</span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-3">
                  <Square className="size-5 text-gold shrink-0" />
                  <span className="text-sm font-semibold text-foreground">Super Built-up Area</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{current.builtup}</span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-3">
                  <Ruler className="size-5 text-gold shrink-0" />
                  <span className="text-sm font-semibold text-foreground">Living Room</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{current.living}</span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-3">
                  <Layout className="size-5 text-gold shrink-0" />
                  <span className="text-sm font-semibold text-foreground">Bedroom</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{current.master}</span>
              </div>

              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-3">
                  <Layout className="size-5 text-gold shrink-0" />
                  <span className="text-sm font-semibold text-foreground">Kitchen</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{current.kitchen}</span>
              </div>

              {activeTab === "premium" && (
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <div className="flex items-center gap-3">
                    <Maximize className="size-5 text-gold shrink-0" />
                    <span className="text-sm font-semibold text-foreground">Balcony Space</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{current.balcony}</span>
                </div>
              )}
            </div>

            <Button
              onClick={() => onOpenContact("Floor Plan CTA - 1 BHK Campaign")}
              className="bg-gold hover:bg-gold-light text-charcoal h-14 font-semibold text-base shadow-lg transition-transform hover:scale-[1.02] cursor-pointer"
            >
              Request Detailed Floor Plan
            </Button>
          </div>

        </div>

      </div>
    </section>
  )
}
