"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, CalendarDays, ChevronDown, CheckCircle2, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PropertyItem {
  id: string
  name: string
  location: string
  price: string
  carpetArea: string
  possession: string
  badge: string
  isSoldOut?: boolean
  image?: string
  video?: string
  configs: { area: string; label: string; price: string; note: string }[]
  highlights: string[]
  amenities?: string[]
  connectivity?: string[]
  jodiOption?: string
  paymentPlans?: string[]
}

const propertiesList: PropertyItem[] = [
  {
    id: "rutu-city",
    name: "Rutu City",
    location: "Behind D-Mart, Anand Nagar, G.B. Road, Thane (W)",
    price: "Starting ₹99 Lakhs++",
    carpetArea: "696 - 705 Sq.Ft.",
    possession: "July 2029",
    badge: "New Launch",
    image: "/images/rutu-city-2bhk/image_3.webp",
    configs: [
      { area: "696 Sq.Ft.", label: "RERA Carpet (734 Sq.Ft. Usable)", price: "₹99 Lakhs++", note: "Starting Price" },
      { area: "705 Sq.Ft.", label: "RERA Carpet (745 Sq.Ft. Usable)", price: "₹99 Lakhs++", note: "Premium View" }
    ],
    jodiOption: "Jodi Flat also available — 2+2, 1500 Sq.Ft. Carpet Area — ₹2.60 Cr All Inclusive",
    highlights: [
      "14-Acre Premium Land Parcel",
      "Iconic 42-Storey Hillside Tower",
      "40,000+ Sq.Ft. Landscaped Podium",
      "15,000+ Sq.Ft. Recreational Garden",
      "50+ Lifestyle Amenities",
      "Show Flat Ready"
    ],
    paymentPlans: [
      "20:80 Builder Subvention Plan",
      "25*4 Bullet Payment Plan"
    ]
  },
  {
    id: "tathastu-thane",
    name: "Tathastu Thane (Deffodil Tower)",
    location: "Ghodbunder Road, Thane",
    price: "Starting ₹79.99 Lakhs++",
    carpetArea: "558 Sq.Ft.",
    possession: "Dec 2027",
    badge: "Hill-View Residences",
    video: "/videos/tathastu/property.mp4",
    configs: [
      { area: "558 Sq.Ft.", label: "RERA Carpet", price: "₹79.99 Lakhs++", note: "Deffodil Tower" }
    ],
    highlights: [
      "4-acre land parcel",
      "Hill-view residences",
      "Exclusive boutique-sized apartments",
      "Vaastu-compliant project",
      "Highest storey tower in the vicinity",
      "50+ lifestyle amenities",
      "Lavish clubhouse",
      "Ample car parking",
      "Multi-layer security system",
      "High-speed elevators",
      "Premium quality glass windows"
    ],
    connectivity: [
      "DG International, Eva World & Euro School",
      "D-Mart, HyperCity, R Mall & Hiranandani The Walk",
      "Thane Noble, Sharadadevi & TMC Hospital",
      "Metro Line 5, Bullet Train & Borivali Tunnel"
    ]
  },
  {
    id: "rutu-city-richland",
    name: "Rutu City – Tower Richland",
    location: "Ghodbunder Road, Thane",
    price: "Starting ₹1.15 Cr",
    carpetArea: "745 Sq.Ft.",
    possession: "Dec 2028",
    badge: "Launch Offer",
    image: "/images/rutu-city/image_1.webp",
    configs: [
      { area: "745 Sq.Ft.", label: "RERA Carpet", price: "₹1.15 Cr", note: "All Inclusive" }
    ],
    highlights: [
      "14-acre green township",
      "Two iconic G+41 storey towers",
      "Spacious 2 BHK apartments",
      "Private deck with every apartment",
      "Beautiful panoramic nature views",
      "20+ premium lifestyle amenities",
      "Premium construction by Rutu Group"
    ],
    connectivity: [
      "Upcoming Metro Stations nearby",
      "Easy access to Eastern Express Highway",
      "Direct connectivity via Thane–Borivali Tunnel",
      "Close to schools, hospitals, shopping malls"
    ]
  },
  {
    id: "raunak-max-city",
    name: "Raunak Maximum City",
    location: "Ghodbunder Road, Thane",
    price: "Starting ₹93 Lakhs",
    carpetArea: "610 - 660 Sq.Ft.",
    possession: "Jun 2027",
    badge: "✓ Phase 1 Sold Out",
    isSoldOut: true,
    image: "/images/raunak-max-city-2bhk/image_1.webp",
    configs: [
      { area: "610 Sq.Ft.", label: "RERA Carpet", price: "₹93 Lakhs", note: "All Inclusive" },
      { area: "615 Sq.Ft.", label: "RERA Carpet", price: "₹94.50 Lakhs", note: "All Inclusive" },
      { area: "660 Sq.Ft.", label: "RERA Carpet + Balcony", price: "₹1.02 Cr", note: "All Inclusive" }
    ],
    highlights: [
      "22 Acre Township Development",
      "4 Level Podium + Stilt + 35 Storey Towers",
      "Fully Furnished XL Smart Homes",
      "Powered by Jio Fiber",
      "1,00,000+ Sq.Ft. Recreation Space",
      "Rooftop Lifestyle Amenities",
      "Swimming Pool & Skyline Leisure Zones",
      "Near Metro & Ghodbunder Road",
      "Sample Flat Ready"
    ],
    amenities: [
      "Rooftop Movie Screening",
      "Yoga Deck",
      "Jacuzzi",
      "Co-working Space",
      "Indoor Games Zone",
      "Tropical Forest & Zen Garden",
      "Jogging Track",
      "Heated Kids Pool",
      "Fitness Center"
    ]
  }
]

export function PremiumFeaturedProperties() {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null)

  const toggleExpand = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id))
  }

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-background py-20 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Premium 2 BHK Residences
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our curated selection of high-end 2 BHK apartments in Thane West.
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-6">
          {propertiesList.map((property) => {
            const isExpanded = expandedCardId === property.id
            return (
              <div
                key={property.id}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-md cursor-pointer"
                onClick={() => toggleExpand(property.id)}
              >
                {/* Collapsed Face */}
                <div className="relative p-6 sm:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
                  
                  {/* Property Image/Video Thumbnail */}
                  <div className="relative w-full md:w-44 h-32 rounded-xl overflow-hidden bg-muted shrink-0">
                    {property.video ? (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={property.video} type="video/mp4" />
                      </video>
                    ) : property.image ? (
                      <Image
                        src={property.image}
                        alt={property.name}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                    
                    {/* Badge */}
                    <div className="absolute top-2 left-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        property.isSoldOut 
                          ? "bg-red-500 text-white" 
                          : "bg-gold text-charcoal"
                      }`}>
                        {property.badge}
                      </span>
                    </div>
                  </div>

                  {/* Property Core Info */}
                  <div className="flex-1 space-y-1.5 w-full">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-foreground hover:text-gold transition-colors">
                        {property.name}
                      </h3>
                      {isExpanded ? (
                        <ChevronUp className="size-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="size-5 text-muted-foreground animate-pulse" />
                      )}
                    </div>

                    <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                      <MapPin className="size-3.5 text-gold shrink-0" />
                      <span>{property.location}</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 pt-3 border-t border-border/50 text-sm">
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Starting Price</p>
                        <p className="font-semibold text-gold mt-0.5">{property.price}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Carpet Area</p>
                        <p className="font-semibold text-foreground mt-0.5">{property.carpetArea}</p>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Possession Date</p>
                        <p className="font-semibold text-foreground mt-0.5">{property.possession}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-border bg-muted/10"
                      onClick={(e) => e.stopPropagation()} // Prevent collapse when clicking inner content
                    >
                      <div className="p-6 sm:p-8 space-y-6">
                        
                        {/* Configurations list */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Available Configurations</h4>
                          <div className="grid gap-3">
                            {property.configs.map((cfg, index) => (
                              <div key={index} className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3.5 text-sm">
                                <div>
                                  <p className="font-bold text-foreground">{cfg.area}</p>
                                  <p className="text-xs text-muted-foreground mt-0.5">{cfg.label}</p>
                                </div>
                                <div className="text-right">
                                  <p className="font-bold text-gold">{cfg.price}</p>
                                  <p className="text-xs text-muted-foreground mt-0.5">{cfg.note}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Jodi flat option if exists */}
                        {property.jodiOption && (
                          <div className="rounded-xl border border-gold/20 bg-gold/5 px-4 py-3.5 flex items-start gap-2.5 text-sm">
                            <span>✨</span>
                            <div>
                              <p className="font-bold text-gold uppercase tracking-wider text-xs">Jodi Option Available</p>
                              <p className="text-foreground/90 mt-0.5 leading-relaxed">{property.jodiOption}</p>
                            </div>
                          </div>
                        )}

                        {/* Project Highlights & Amenities */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          
                          {/* Highlights */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Project Highlights</h4>
                            <ul className="space-y-2 text-sm text-foreground/80">
                              {property.highlights.map((hl, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <CheckCircle2 className="size-4 text-gold shrink-0 mt-0.5" />
                                  <span>{hl}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Dynamic Amenities or Connectivity details */}
                          {(property.amenities || property.connectivity || property.paymentPlans) && (
                            <div className="space-y-4">
                              {property.amenities && (
                                <div className="space-y-2">
                                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Lifestyle Amenities</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {property.amenities.map((am, index) => (
                                      <span key={index} className="rounded-full bg-background border border-border px-3 py-1 text-xs text-foreground/85">
                                        {am}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {property.connectivity && (
                                <div className="space-y-2">
                                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Location & Connectivity</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {property.connectivity.map((cn, index) => (
                                      <span key={index} className="rounded-full bg-background border border-border px-3 py-1 text-xs text-foreground/85">
                                        {cn}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {property.paymentPlans && (
                                <div className="space-y-2">
                                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Flexible Payment Plans</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {property.paymentPlans.map((pl, index) => (
                                      <span key={index} className="rounded-full bg-background border border-border px-3 py-1 text-xs text-foreground/85">
                                        {pl}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}

                            </div>
                          )}

                        </div>

                        {/* CTA button to scroll to bottom lead capture form */}
                        <div className="pt-4 border-t border-border/50 flex justify-end">
                          <Button
                            onClick={scrollToForm}
                            className="bg-gold text-charcoal hover:bg-gold-light font-bold text-sm h-11 px-8 cursor-pointer"
                          >
                            Schedule Site Visit
                          </Button>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
