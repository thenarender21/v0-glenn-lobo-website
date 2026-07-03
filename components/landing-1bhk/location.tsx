"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MapPin, School, Landmark, Heart, ShoppingBag, Train, Briefcase, GraduationCap } from "lucide-react"

const locationsData = [
  {
    category: "Connectivity",
    icon: Train,
    items: [
      { name: "Upcoming Metro Station", dist: "3 mins / 800m" },
      { name: "Ghodbunder Road Highway", dist: "2 mins / 500m" },
      { name: "Thane Railway Station", dist: "12 mins / 4.5km" },
    ]
  },
  {
    category: "Education",
    icon: School,
    items: [
      { name: "Singhania School", dist: "8 mins" },
      { name: "Orchids International", dist: "5 mins" },
      { name: "Podar International School", dist: "7 mins" },
    ]
  },
  {
    category: "Colleges",
    icon: GraduationCap,
    items: [
      { name: "KC College of Engineering", dist: "9 mins" },
      { name: "Bedekar College", dist: "11 mins" },
      { name: "Muchhala Polytechnic", dist: "6 mins" },
    ]
  },
  {
    category: "Healthcare",
    icon: Heart,
    items: [
      { name: "Jupiter Hospital", dist: "10 mins" },
      { name: "Vedant Hospital", dist: "2 mins" },
      { name: "Hiranandani Hospital", dist: "7 mins" },
    ]
  },
  {
    category: "Shopping & Retail",
    icon: ShoppingBag,
    items: [
      { name: "Viviana Mall", dist: "10 mins" },
      { name: "Korum Mall", dist: "12 mins" },
      { name: "Hypercity / R-Mall", dist: "6 mins" },
    ]
  },
  {
    category: "Business Hubs",
    icon: Briefcase,
    items: [
      { name: "TCS Olympus IT Park", dist: "12 mins" },
      { name: "Wagle Industrial Estate", dist: "15 mins" },
      { name: "Employment Offices Hub", dist: "10 mins" },
    ]
  }
]

export function LocationAdvantages({ onOpenContact }: { onOpenContact: (source: string) => void }) {
  const [activeCat, setActiveCat] = useState(0)

  return (
    <section id="location-advantages" className="bg-background py-20 sm:py-28 relative">
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
            Connectivity Hub
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
            Location{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#b89449,#e8c97a,#b89449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Advantages
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Perfect proximity to leading schools, major transit hubs, premium shopping malls, and top multi-specialty hospitals.
          </p>
        </div>

        {/* Proximity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Proximity categories & detailed items */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-wrap gap-2">
              {locationsData.map((loc, i) => {
                const Icon = loc.icon
                return (
                  <button
                    key={i}
                    onClick={() => setActiveCat(i)}
                    className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                      activeCat === i
                        ? "bg-gold text-charcoal shadow-md"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    <Icon className="size-3.5" />
                    {loc.category}
                  </button>
                )
              })}
            </div>

            {/* Display active category details */}
            <div className="rounded-2xl border border-border bg-card p-8 shadow-lg min-h-[250px] flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <MapPin className="size-5 text-gold shrink-0 animate-bounce" />
                  {locationsData[activeCat].category} Proximity
                </h3>

                <div className="space-y-4">
                  {locationsData[activeCat].items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b border-border pb-3 last:border-0 last:pb-0">
                      <span className="text-sm font-semibold text-foreground">{item.name}</span>
                      <span className="text-xs font-bold text-gold bg-gold/10 border border-gold/20 px-2.5 py-1 rounded-full">{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                onClick={() => onOpenContact("Location Details CTA - 1 BHK Campaign")}
                className="w-full bg-gold hover:bg-gold-light text-charcoal h-12 font-semibold text-sm mt-8 transition-transform hover:scale-[1.01] cursor-pointer"
              >
                Get Location Details
              </Button>
            </div>
          </div>

          {/* Right Column: Premium map placeholder with pulsing targets */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full aspect-[4/3] rounded-2xl border border-border bg-card overflow-hidden shadow-xl p-4 flex items-center justify-center">
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(184,148,73,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(184,148,73,0.02)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
              
              {/* Premium Abstract Map Graphic */}
              <div className="absolute inset-0 bg-cover bg-center opacity-30 select-none pointer-events-none filter grayscale contrast-125"
                   style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1974&auto=format&fit=crop')" }} />
              
              {/* Pulsing Radar Ring Overlay */}
              <div className="relative flex items-center justify-center size-36">
                <div className="absolute inset-0 rounded-full border border-gold/30 animate-ping opacity-75" />
                <div className="absolute inset-4 rounded-full border border-gold/20 animate-pulse" />
                <div className="absolute inset-10 rounded-full bg-gold/15 flex items-center justify-center border border-gold/50 shadow-lg">
                  <MapPin className="size-8 text-gold animate-bounce" />
                </div>
              </div>

              {/* Labels on the map */}
              <div className="absolute top-[20%] left-[25%] bg-charcoal/80 border border-white/10 rounded px-2 py-1 text-[10px] text-white font-semibold shadow-md">
                Upcoming Metro (3 min)
              </div>
              <div className="absolute bottom-[25%] right-[20%] bg-charcoal/80 border border-white/10 rounded px-2 py-1 text-[10px] text-white font-semibold shadow-md">
                Jupiter Hospital (10 min)
              </div>
              <div className="absolute top-[45%] right-[15%] bg-charcoal/80 border border-white/10 rounded px-2 py-1 text-[10px] text-white font-semibold shadow-md">
                Viviana Mall (10 min)
              </div>
              <div className="absolute bottom-[15%] left-[10%] bg-charcoal/80 border border-white/10 rounded px-2 py-1 text-[10px] text-white font-semibold shadow-md">
                Vedant Hospital (2 min)
              </div>

              <div className="absolute bottom-4 right-4 bg-charcoal/90 border border-white/10 px-3 py-1.5 rounded-lg text-[10px] text-white font-medium shadow-xl flex items-center gap-1.5">
                <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                Prime Central Thane Sector
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
