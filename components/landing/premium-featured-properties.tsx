"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, MapPin, CalendarDays, ArrowRight } from "lucide-react"

type BHKType = "1BHK" | "2BHK" | "3BHK"

const raunak108Highlights = [
  "40 Storey Landmark Tower",
  "5 Minutes from Upcoming Metro Station",
  "Rooftop Amenities & Lifestyle Deck",
  "Semi Modular Kitchen Included",
  "Godrej Video Door Bell",
  "Jio Fiber Connectivity",
  "Geyser & Premium WC Fittings",
  "Located Behind Vedant Hospital",
]

const raunakMaxCityConfigs = [
  { area: "610 Sq.Ft.", label: "RERA Carpet", price: "₹93 Lakhs", note: "All Inclusive" },
  { area: "615 Sq.Ft.", label: "RERA Carpet", price: "₹94.50 Lakhs", note: "All Inclusive" },
  { area: "660 Sq.Ft.", label: "RERA Carpet + Balcony", price: "₹1.02 Cr", note: "All Inclusive" },
]

const raunakMaxCityHighlights = [
  "22 Acre Township Development",
  "4 Level Podium + Stilt + 35 Storey Towers",
  "Fully Furnished XL Smart Homes",
  "Powered by Jio Fiber",
  "1,00,000+ Sq.Ft. Recreation Space",
  "Rooftop Lifestyle Amenities",
  "Swimming Pool & Skyline Leisure Zones",
  "Near Metro & Ghodbunder Road",
  "Sample Flat Ready",
]

const raunakMaxCityAmenities = [
  "Rooftop Movie Screening", "Yoga Deck", "Jacuzzi",
  "Co-working Space", "Indoor Games Zone", "Tropical Forest & Zen Garden",
  "Jogging Track", "Heated Kids Pool", "Fitness Center",
]

const rutuRichlandConfigs = [
  { area: "745 Sq.Ft.", label: "RERA Carpet", price: "₹1.15 Cr", note: "Starting Price (All Inclusive)" }
]

const rutuRichlandHighlights = [
  "14-acre green township",
  "Two iconic G+41 storey towers",
  "Spacious 2 BHK apartments",
  "745 sq. ft. carpet area",
  "Starting from ₹1.15 Cr (All Inclusive)",
  "Private deck with every apartment",
  "Beautiful panoramic nature views",
  "20+ premium lifestyle amenities",
  "Premium construction by Rutu Group"
]

const rutuRichlandConnectivity = [
  "Upcoming Metro Stations nearby",
  "Easy access to Eastern Express Highway",
  "Direct connectivity via Thane–Borivali Tunnel",
  "Close to schools, hospitals, banks, shopping centres, restaurants, and business hubs"
]

const tathastuConfigs = [
  { area: "558 Sq.Ft.", label: "RERA Carpet", price: "₹79.99 Lakhs++", note: "Deffodil Tower (3rd Tower)" }
]

const tathastuHighlights = [
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
]

const tathastuConnectivity = [
  "DG International, Eva World & Euro School",
  "D-Mart, HyperCity, R Mall & Hiranandani The Walk",
  "Thane Noble, Sharadadevi & TMC Hospital",
  "Metro Line 5, Bullet Train & Borivali Tunnel"
]

const lodhaSterlingConfigs = [
  { area: "968 Sq.Ft.", label: "RERA Carpet", price: "₹2.40 Cr", note: "All Inclusive" },
  { area: "1041 Sq.Ft.", label: "RERA Carpet", price: "₹2.70 Cr", note: "All Inclusive" },
  { area: "1134 Sq.Ft.", label: "RERA Carpet", price: "₹2.91 Cr", note: "All Inclusive" },
  { area: "1266 Sq.Ft.", label: "RERA Carpet + Balcony", price: "₹3.19 Cr", note: "All Inclusive" },
]

const lodhaSterlingHighlights = [
  "11 Acre Green Township",
  "70% Open Green Spaces",
  "25+ Luxury Amenities",
  "Near Jupiter Hospital & Viviana Mall",
  "10 Min from Thane Railway Station",
  "45 Min from International Airport",
  "Swimming Pool, Gymnasium & Clubhouse",
  "Ampitheatre & Kids Play Area",
  "RERA Registered — Tower G: P51700020158",
]

const lodhaSterlingAmenities = [
  "Swimming Pool", "Gymnasium", "Clubhouse", "Amphitheatre",
  "Kids Play Area", "Indoor Games", "Multipurpose Lawn", "Jogging Track"
]

const propertiesData = {
  "1BHK": [] as any[],
  "2BHK": [] as any[],
  // Both rendered as custom premium cards
  "3BHK": [
    {
      id: "3bhk-1",
      name: "Raymond Realty 3BHK",
      location: "Pokhran Road, Thane",
      price: "₹2.2 Cr - 2.8 Cr",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    },
    {
      id: "3bhk-2",
      name: "Oberoi Realty 3BHK",
      location: "Pokhran Road 2, Thane",
      price: "₹2.8 Cr - 3.5 Cr",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    },
    {
      id: "3bhk-3",
      name: "Godrej Ascend 3BHK",
      location: "Kolshet Road, Thane",
      price: "₹2.1 Cr - 2.6 Cr",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&q=80",
    }
  ]
}

export function PremiumFeaturedProperties() {
  const [activeTab, setActiveTab] = useState<BHKType>("2BHK")
  const [active2BHKProperty, setActive2BHKProperty] = useState<"raunak" | "rutu" | "tathastu">("raunak")
  const [rutuImageIndex, setRutuImageIndex] = useState(0)

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  const tabs: BHKType[] = ["1BHK", "2BHK", "3BHK"]

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-light tracking-tight text-foreground sm:text-4xl">
            Premium Floor Plans
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Filter our exclusive inventory based on your exact space requirements.
          </p>
        </div>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-2 sm:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-gold text-charcoal"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab} Properties
            </button>
          ))}
        </div>

        <div className="mx-auto mt-16 min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeTab === "1BHK" ? (
              <motion.div
                key="1BHK"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-2xl border border-gold/20 bg-card shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image Side */}
                  <Link href="/properties/raunak-108" className="relative min-h-[320px] lg:min-h-[520px] overflow-hidden group block">
                    <Image
                      src="/images/raunak-108/image_1.jpg"
                      alt="Raunak 108 – 1 BHK Smart Homes, Kasarvadavali Thane"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/60 lg:via-transparent lg:to-transparent" />
                    {/* Badges */}
                    <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                      <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-charcoal tracking-wide">NEW LAUNCH</span>
                      <span className="rounded-full bg-white/15 backdrop-blur-sm border border-white/30 px-3 py-1 text-xs font-semibold text-white">RERA APPROVED</span>
                    </div>
                    {/* Price overlay */}
                    <div className="absolute bottom-5 left-5">
                      <p className="text-xs font-medium text-white/70 uppercase tracking-wider">Starting from</p>
                      <p className="text-3xl font-bold text-gold leading-tight">₹67 Lakhs</p>
                      <p className="text-xs text-white/60 mt-0.5">All Inclusive</p>
                    </div>
                  </Link>
 
                   {/* Content Side */}
                   <div className="flex flex-col justify-between p-8 lg:p-10">
                     <div>
                       <span className="inline-block rounded-full bg-gold/10 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold uppercase tracking-widest mb-4">
                         1 BHK Smart Homes
                       </span>
                       <h3 className="text-3xl font-bold text-foreground leading-tight hover:text-gold transition-colors">
                         <Link href="/properties/raunak-108">
                           Premium 1 BHK Smart Homes in Thane
                         </Link>
                       </h3>
                       <p className="mt-3 text-muted-foreground leading-relaxed">
                         Live at <span className="text-foreground font-semibold">Raunak 108</span>, Kasarvadavali — thoughtfully designed homes with modern amenities, rooftop lifestyle spaces, and seamless connectivity.
                       </p>
 
                       {/* Key Details Row */}
                       <div className="mt-6 grid grid-cols-2 gap-3">
                         <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
                           <MapPin className="h-4 w-4 text-gold shrink-0" />
                           <span className="text-xs font-medium text-foreground">Kasarvadavali, Thane</span>
                         </div>
                         <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
                           <CalendarDays className="h-4 w-4 text-gold shrink-0" />
                           <span className="text-xs font-medium text-foreground">Possession: Dec 2026</span>
                         </div>
                       </div>
 
                       {/* Carpet Area */}
                       <div className="mt-4 rounded-lg border border-border bg-background px-4 py-3">
                         <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Carpet Area</p>
                         <p className="text-sm font-semibold text-foreground mt-0.5">410 / 412 / 425 Sq.Ft.</p>
                       </div>
 
                       {/* Highlights Grid */}
                       <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                         {raunak108Highlights.map((point) => (
                           <div key={point} className="flex items-start gap-2">
                             <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                             <span className="text-sm text-foreground/80">{point}</span>
                           </div>
                         ))}
                       </div>
                     </div>
 
                     {/* CTAs */}
                     <div className="mt-8 flex flex-col sm:flex-row gap-3">
                       <Button
                         onClick={scrollToForm}
                         className="flex-1 bg-gold text-charcoal hover:bg-gold/90 font-semibold text-sm h-11 gap-2"
                       >
                         Book Free Site Visit
                         <ArrowRight className="h-4 w-4" />
                       </Button>
                       <Button
                         asChild
                         variant="outline"
                         className="flex-1 border-gold/50 text-gold hover:bg-gold/10 font-semibold text-sm h-11"
                       >
                         <Link href="/properties/raunak-108">
                           View Details
                         </Link>
                       </Button>
                     </div>
                   </div>
                </div>
              </motion.div>
            ) : activeTab === "2BHK" ? (
              <motion.div
                key="2BHK"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-2xl border border-gold/20 bg-card shadow-xl"
              >
                {/* Secondary Sub-Tabs for 2BHK Properties */}
                <div className="flex flex-wrap justify-center border-b border-border/50 bg-muted/20 py-3 px-4 gap-2">
                  <button
                    onClick={() => setActive2BHKProperty("raunak")}
                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                      active2BHKProperty === "raunak"
                        ? "bg-gold text-charcoal font-bold shadow-sm"
                        : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    Raunak Maximum City
                  </button>
                  <button
                    onClick={() => setActive2BHKProperty("rutu")}
                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                      active2BHKProperty === "rutu"
                        ? "bg-gold text-charcoal font-bold shadow-sm"
                        : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    Rutu City – Tower Richland
                  </button>
                  <button
                    onClick={() => setActive2BHKProperty("tathastu")}
                    className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all ${
                      active2BHKProperty === "tathastu"
                        ? "bg-gold text-charcoal font-bold shadow-sm"
                        : "bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    Tathastu Thane
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {active2BHKProperty === "raunak" ? (
                    <motion.div
                      key="raunak"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 15 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-2"
                    >
                      {/* Image Side */}
                      <Link href="/properties/raunak-max-city-2bhk" className="relative min-h-[340px] lg:min-h-[600px] overflow-hidden group block">
                        <Image
                          src="/images/raunak-max-city-2bhk/image_1.jpg"
                          alt="Raunak Maximum City – 2 BHK XL Smart Homes, Ghodbunder Road Thane"
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/70 lg:via-black/20 lg:to-transparent" />
                        {/* Badges */}
                        <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                          <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-charcoal tracking-wide">PHASE 2 OPEN</span>
                          <span className="rounded-full bg-emerald-500/90 px-3 py-1 text-xs font-bold text-white tracking-wide">✓ Phase 1 Sold Out</span>
                        </div>
                        {/* Price overlay */}
                        <div className="absolute bottom-5 left-5">
                          <p className="text-xs font-medium text-white/70 uppercase tracking-wider">Starting from</p>
                          <p className="text-3xl font-bold text-gold leading-tight">₹93 Lakhs</p>
                          <p className="text-xs text-white/60 mt-0.5">All Inclusive · Possession Jun 2027</p>
                        </div>
                      </Link>

                      {/* Content Side */}
                      <div className="flex flex-col justify-between p-8 lg:p-10 overflow-y-auto max-h-[600px]">
                        <div>
                          <span className="inline-block rounded-full bg-gold/10 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold uppercase tracking-widest mb-4">
                            2 BHK XL Smart Homes
                          </span>
                          <h3 className="text-3xl font-bold text-foreground leading-tight hover:text-gold transition-colors">
                            <Link href="/properties/raunak-max-city-2bhk">
                              Luxury 2 BHK XL Smart Homes in Thane
                            </Link>
                          </h3>
                          <p className="mt-3 text-muted-foreground leading-relaxed">
                            Experience spacious living at <span className="text-foreground font-semibold">Raunak Maximum City</span> with premium amenities, nature-inspired lifestyle spaces, and smart home features.
                          </p>

                          {/* Key Details Row */}
                          <div className="mt-5 grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
                              <MapPin className="h-4 w-4 text-gold shrink-0" />
                              <span className="text-xs font-medium text-foreground">Ghodbunder Road, Thane</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
                              <CalendarDays className="h-4 w-4 text-gold shrink-0" />
                              <span className="text-xs font-medium text-foreground">Possession: Jun 2027</span>
                            </div>
                          </div>

                          {/* Configurations */}
                          <div className="mt-5 space-y-2">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Available Configurations</p>
                            {raunakMaxCityConfigs.map((cfg, i) => (
                              <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
                                <div>
                                  <p className="text-sm font-bold text-foreground">{cfg.area}</p>
                                  <p className="text-xs text-muted-foreground">{cfg.label}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-bold text-gold">{cfg.price}</p>
                                  <p className="text-xs text-muted-foreground">{cfg.note}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Highlights */}
                          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                            {raunakMaxCityHighlights.map((point) => (
                              <div key={point} className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                                <span className="text-sm text-foreground/80">{point}</span>
                              </div>
                            ))}
                          </div>

                          {/* Amenities chips */}
                          <div className="mt-5">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Lifestyle Amenities</p>
                            <div className="flex flex-wrap gap-2">
                              {raunakMaxCityAmenities.map((a) => (
                                <span key={a} className="rounded-full bg-muted border border-border px-3 py-1 text-xs font-medium text-foreground/80">{a}</span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                          <Button
                            onClick={scrollToForm}
                            className="flex-1 bg-gold text-charcoal hover:bg-gold/90 font-semibold text-sm h-11 gap-2"
                          >
                            Schedule Site Visit
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                          <Button
                            asChild
                            variant="outline"
                            className="flex-1 border-gold/50 text-gold hover:bg-gold/10 font-semibold text-sm h-11"
                          >
                            <Link href="/properties/raunak-max-city-2bhk">
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ) : active2BHKProperty === "rutu" ? (
                    <motion.div
                      key="rutu"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-2"
                    >
                      {/* Image Side */}
                      <div className="relative min-h-[340px] lg:min-h-[600px] overflow-hidden group">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={rutuImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                          >
                            <Image
                              src={`/images/rutu-city/image_${rutuImageIndex + 1}.jpg`}
                              alt={`Rutu City – Tower Richland - View ${rutuImageIndex + 1}`}
                              fill
                              className="object-cover"
                            />
                          </motion.div>
                        </AnimatePresence>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/70 lg:via-black/20 lg:to-transparent pointer-events-none" />
                        {/* Badges */}
                        <div className="absolute top-5 left-5 flex flex-wrap gap-2 pointer-events-none">
                          <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-charcoal tracking-wide">LAUNCH OFFER</span>
                          <span className="rounded-full bg-white/15 backdrop-blur-sm border border-white/30 px-3 py-1 text-xs font-semibold text-white">RERA APPROVED</span>
                        </div>
                        {/* Price overlay */}
                        <div className="absolute bottom-5 left-5 pointer-events-none">
                          <p className="text-xs font-medium text-white/70 uppercase tracking-wider">Starting from</p>
                          <p className="text-3xl font-bold text-gold leading-tight">₹1.15 Cr</p>
                          <p className="text-xs text-white/60 mt-0.5">All Inclusive · G+41 Storey Tower</p>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setRutuImageIndex((prev) => (prev === 0 ? 5 : prev - 1));
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 hover:bg-black/70 text-white size-8 flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        >
                          ←
                        </button>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setRutuImageIndex((prev) => (prev === 5 ? 0 : prev + 1));
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/45 hover:bg-black/70 text-white size-8 flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity z-10"
                        >
                          →
                        </button>

                        {/* Pagination Dots */}
                        <div className="absolute bottom-5 right-5 flex gap-1.5 z-10">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <button
                              key={i}
                              onClick={(e) => {
                                e.preventDefault();
                                setRutuImageIndex(i);
                              }}
                              className={`size-2 rounded-full transition-all ${
                                rutuImageIndex === i ? "bg-gold w-4" : "bg-white/50 hover:bg-white"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="flex flex-col justify-between p-8 lg:p-10 overflow-y-auto max-h-[600px]">
                        <div>
                          <span className="inline-block rounded-full bg-gold/10 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold uppercase tracking-widest mb-4">
                            2 BHK Premium Residences
                          </span>
                          
                          {/* Limited Time Launch Offer Highlight Banner */}
                          <div className="mb-5 rounded-xl border border-gold/30 bg-gold/5 p-4">
                            <p className="text-xs font-bold text-gold uppercase tracking-widest">Limited Time Launch Offer</p>
                            <p className="text-sm text-foreground/90 mt-1 font-medium">Exclusive offers available for the first 50 buyers.</p>
                          </div>

                          <h3 className="text-3xl font-bold text-foreground leading-tight hover:text-gold transition-colors">
                            Rutu City – Tower Richland
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">Developed by Rutu Group</p>
                          
                          <p className="mt-3 text-muted-foreground leading-relaxed">
                            A premium residential project spread across 14 acres of lush greenery, offering a perfect balance of nature, luxury, and city connectivity. Features two iconic G+41-storey towers with panoramic views and thoughtfully designed homes.
                          </p>

                          {/* Key Details Row with Google Maps Link */}
                          <div className="mt-5 grid grid-cols-2 gap-3">
                            <a 
                              href="https://maps.app.goo.gl/H4eDmcyX12uvaCSd7"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2 hover:bg-muted/80 transition-colors group/link"
                            >
                              <MapPin className="h-4 w-4 text-gold shrink-0 transition-transform group-hover/link:scale-110" />
                              <span className="text-xs font-semibold text-foreground underline decoration-gold/50 decoration-dotted underline-offset-2">Ghodbunder Road, Thane</span>
                            </a>
                            <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
                              <CalendarDays className="h-4 w-4 text-gold shrink-0" />
                              <span className="text-xs font-medium text-foreground">Possession: Dec 2028</span>
                            </div>
                          </div>

                          {/* Configurations */}
                          <div className="mt-5 space-y-2">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Available Configurations</p>
                            {rutuRichlandConfigs.map((cfg, i) => (
                              <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
                                <div>
                                  <p className="text-sm font-bold text-foreground">{cfg.area}</p>
                                  <p className="text-xs text-muted-foreground">{cfg.label}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-bold text-gold">{cfg.price}</p>
                                  <p className="text-xs text-muted-foreground">{cfg.note}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Highlights */}
                          <div className="mt-5 space-y-2">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Key Highlights</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                              {rutuRichlandHighlights.map((point) => (
                                <div key={point} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                                  <span className="text-sm text-foreground/80">{point}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Connectivity Advantages */}
                          <div className="mt-5">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Location & Connectivity</p>
                            <div className="flex flex-wrap gap-2">
                              {rutuRichlandConnectivity.map((c) => (
                                <span key={c} className="rounded-full bg-muted border border-border px-3 py-1 text-xs font-medium text-foreground/80">{c}</span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                          <Button
                            onClick={scrollToForm}
                            className="flex-1 bg-gold text-charcoal hover:bg-gold/90 font-semibold text-sm h-11 gap-2"
                          >
                            Book a Free Site Visit
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                          <Button
                            onClick={scrollToForm}
                            variant="outline"
                            className="flex-1 border-gold/50 text-gold hover:bg-gold/10 font-semibold text-sm h-11"
                          >
                            Get Price Sheet
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="tathastu"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-1 lg:grid-cols-2"
                    >
                      {/* Video Side */}
                      <div className="relative min-h-[340px] lg:min-h-[600px] overflow-hidden group">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        >
                          <source src="/videos/tathastu/property.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent lg:bg-gradient-to-t lg:from-black/70 lg:via-black/20 lg:to-transparent pointer-events-none" />
                        {/* Badges */}
                        <div className="absolute top-5 left-5 flex flex-wrap gap-2 pointer-events-none">
                          <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-charcoal tracking-wide">HILL-VIEW RESIDENCES</span>
                          <span className="rounded-full bg-white/15 backdrop-blur-sm border border-white/30 px-3 py-1 text-xs font-semibold text-white">RERA APPROVED</span>
                          <span className="rounded-full bg-black/50 backdrop-blur-sm border border-white/20 px-3 py-1 text-xs font-semibold text-white flex items-center gap-1">
                            <span className="size-1.5 rounded-full bg-red-500 animate-pulse inline-block" />
                            LIVE TOUR
                          </span>
                        </div>
                        {/* Price overlay */}
                        <div className="absolute bottom-5 left-5 pointer-events-none">
                          <p className="text-xs font-medium text-white/70 uppercase tracking-wider">Starting from</p>
                          <p className="text-3xl font-bold text-gold leading-tight">₹79.99 Lakhs++</p>
                          <p className="text-xs text-white/60 mt-0.5">onwards · Possession Dec 2027</p>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className="flex flex-col justify-between p-8 lg:p-10 overflow-y-auto max-h-[600px]">
                        <div>
                          <span className="inline-block rounded-full bg-gold/10 border border-gold/30 px-3 py-1 text-xs font-semibold text-gold uppercase tracking-widest mb-4">
                            2 BHK Premium Hill-View
                          </span>
                          <h3 className="text-3xl font-bold text-foreground leading-tight hover:text-gold transition-colors">
                            Tathastu Thane
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1 font-medium text-gold">Deffodil Tower (3rd Tower)</p>
                          
                          <p className="mt-3 text-muted-foreground leading-relaxed">
                            Experience premium hill-view residences at Tathastu Thane, offering thoughtfully designed homes with private sun-deck living, modern amenities, and excellent connectivity on Ghodbunder Road. The project combines nature, convenience, and contemporary lifestyle in one of Thane&apos;s fastest-growing locations.
                          </p>

                          {/* Key Details Row */}
                          <div className="mt-5 grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
                              <MapPin className="h-4 w-4 text-gold shrink-0" />
                              <span className="text-xs font-medium text-foreground">Ghodbunder Road, Thane</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
                              <CalendarDays className="h-4 w-4 text-gold shrink-0" />
                              <span className="text-xs font-medium text-foreground">Possession: Dec 2027</span>
                            </div>
                          </div>

                          {/* Configurations */}
                          <div className="mt-5 space-y-2">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Available Configurations</p>
                            {tathastuConfigs.map((cfg, i) => (
                              <div key={i} className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
                                <div>
                                  <p className="text-sm font-bold text-foreground">{cfg.area}</p>
                                  <p className="text-xs text-muted-foreground">{cfg.label}</p>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-bold text-gold">{cfg.price}</p>
                                  <p className="text-xs text-muted-foreground">{cfg.note}</p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Tower specifications */}
                          <div className="mt-4 rounded-lg border border-border bg-background px-4 py-3">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Tower Specifications</p>
                            <p className="text-sm font-medium text-foreground mt-1">36 Storey Residential Tower with 5 High-Speed Lifts</p>
                          </div>

                          {/* Highlights */}
                          <div className="mt-5 space-y-2">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Key Highlights</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                              {tathastuHighlights.map((point) => (
                                <div key={point} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 shrink-0" />
                                  <span className="text-sm text-foreground/80">{point}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Location & Connectivity Advantages */}
                          <div className="mt-5">
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-2">Location & Connectivity</p>
                            <div className="flex flex-wrap gap-2">
                              {tathastuConnectivity.map((c) => (
                                <span key={c} className="rounded-full bg-muted border border-border px-3 py-1 text-xs font-medium text-foreground/80">{c}</span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                          <Button
                            onClick={scrollToForm}
                            className="flex-1 bg-gold text-charcoal hover:bg-gold/90 font-semibold text-sm h-11 gap-2"
                          >
                            Book a Free Site Visit
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                          <Button
                            onClick={scrollToForm}
                            variant="outline"
                            className="flex-1 border-gold/50 text-gold hover:bg-gold/10 font-semibold text-sm h-11"
                          >
                            Get Price Sheet
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="3BHK"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden rounded-2xl shadow-2xl"
                style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #1a1508 50%, #0f0f0f 100%)", border: "1px solid rgba(184,148,73,0.25)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image Side */}
                  <Link href="/properties/lodha-sterling" className="relative min-h-[360px] lg:min-h-[640px] overflow-hidden group block">
                    <Image
                      src="/images/lodha-sterling/image_1.jpg"
                      alt="Lodha Sterling – 3 BHK Luxury Residences, Kolshet Road Thane"
                      fill
                      className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(15,15,15,0.85) 0%, rgba(15,15,15,0.4) 60%, transparent 100%)" }} />
                    {/* Exclusive badge */}
                    <div className="absolute top-5 left-5 flex flex-wrap gap-2">
                      <span className="rounded-full px-3 py-1 text-xs font-bold tracking-widest" style={{ background: "linear-gradient(90deg,#b89449,#e8c97a)", color: "#0f0f0f" }}>READY TO MOVE</span>
                      <span className="rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">RERA APPROVED</span>
                    </div>
                    {/* Price overlay */}
                    <div className="absolute bottom-5 left-5">
                      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(184,148,73,0.8)" }}>Starting from</p>
                      <p className="text-3xl font-bold text-white leading-tight mt-1">₹2.40 Cr</p>
                      <p className="text-xs text-white/50 mt-2">All Inclusive · Possession: Ready</p>
                    </div>
                  </Link>

                  {/* Content Side */}
                  <div className="flex flex-col justify-between p-8 lg:p-10 overflow-y-auto max-h-[640px]">
                    <div>
                      <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: "rgba(184,148,73,0.12)", border: "1px solid rgba(184,148,73,0.4)", color: "#b89449" }}>
                        3 BHK Luxury Residences
                      </span>
                      <h3 className="text-3xl font-bold leading-tight hover:text-gold transition-colors" style={{ color: "#f5f5f0" }}>
                        <Link href="/properties/lodha-sterling">
                          Luxury 3 BHK Homes in Prime Central Thane
                        </Link>
                      </h3>
                      <p className="mt-3 leading-relaxed" style={{ color: "rgba(245,245,240,0.6)" }}>
                        Experience regal London-inspired living at <span style={{ color: "#e8c97a", fontWeight: 600 }}>Lodha Sterling</span> — a 11-acre green township on Kolshet Road, Thane. Offering spacious 3 BHK residences with world-class amenities and 70% open green spaces.
                      </p>

                      {/* Configurations */}
                      <div className="mt-5 space-y-2">
                        <p className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: "rgba(184,148,73,0.7)" }}>Available Configurations</p>
                        {lodhaSterlingConfigs.map((cfg, i) => (
                          <div key={i} className="flex items-center justify-between rounded-lg px-4 py-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <div>
                              <p className="text-sm font-bold text-foreground" style={{ color: "#f5f5f0" }}>{cfg.area}</p>
                              <p className="text-xs text-muted-foreground" style={{ color: "rgba(245,245,240,0.5)" }}>{cfg.label}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-bold text-gold">{cfg.price}</p>
                              <p className="text-xs text-muted-foreground" style={{ color: "rgba(245,245,240,0.5)" }}>{cfg.note}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Key Details */}
                      <div className="mt-5 grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                          <MapPin className="h-4 w-4 shrink-0" style={{ color: "#b89449" }} />
                          <span className="text-xs font-medium" style={{ color: "rgba(245,245,240,0.85)" }}>Kolshet Road, Thane West</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg px-3 py-2" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                          <CalendarDays className="h-4 w-4 shrink-0" style={{ color: "#b89449" }} />
                          <span className="text-xs font-medium" style={{ color: "rgba(245,245,240,0.85)" }}>Possession: Ready to Move</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4">
                        {lodhaSterlingHighlights.map((point) => (
                          <div key={point} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" style={{ color: "#b89449" }} />
                            <span className="text-sm" style={{ color: "rgba(245,245,240,0.75)" }}>{point}</span>
                          </div>
                        ))}
                      </div>

                      {/* Amenity chips */}
                      <div className="mt-5">
                        <p className="text-xs uppercase tracking-wider font-semibold mb-2" style={{ color: "rgba(184,148,73,0.7)" }}>World-Class Amenities</p>
                        <div className="flex flex-wrap gap-2">
                          {lodhaSterlingAmenities.map((a) => (
                            <span key={a} className="rounded-full px-3 py-1 text-xs font-medium" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(245,245,240,0.75)" }}>{a}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={scrollToForm}
                        className="flex-1 font-semibold text-sm h-12 gap-2 transition-all"
                        style={{ background: "linear-gradient(90deg,#b89449,#e8c97a)", color: "#0f0f0f" }}
                      >
                        Schedule Site Visit
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="flex-1 font-semibold text-sm h-12 transition-all hover:bg-white/5"
                        style={{ borderColor: "rgba(184,148,73,0.5)", color: "#b89449" }}
                      >
                        <Link href="/properties/lodha-sterling">
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
