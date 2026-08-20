"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, ChevronRight } from "lucide-react"

interface PropertyItem {
  id: string
  name: string
  location: string
  price: string
  carpetArea: string
  possession: string
  badge: string
  image: string
  video?: string
  rera: string
}

const propertiesList: PropertyItem[] = [
  {
    id: "rutu-city-2bhk",
    name: "Rutu City",
    location: "Behind D-Mart, Anand Nagar, G.B. Road, Thane (W)",
    price: "Starting ₹99 Lakhs++",
    carpetArea: "696 - 705 Sq.Ft.",
    possession: "July 2029",
    badge: "New Launch",
    image: "/images/rutu-city-2bhk/image_3.webp",
    rera: "MahaRERA: P517000XXXX3"
  },
  {
    id: "tathastu-thane",
    name: "Tathastu Thane (Daffodil Tower)",
    location: "Ghodbunder Road, Thane",
    price: "Starting ₹79.99 Lakhs++",
    carpetArea: "558 Sq.Ft.",
    possession: "Dec 2027",
    badge: "Hill-View Residences",
    video: "/videos/tathastu/property.mp4",
    image: "/images/evening_view.webp",
    rera: "MahaRERA: P517000XXXX1"
  },
  {
    id: "rutu-city-richland",
    name: "Rutu City – Tower Richland",
    location: "Ghodbunder Road, Thane",
    price: "Starting ₹1.15 Cr++",
    carpetArea: "745 Sq.Ft.",
    possession: "Dec 2028",
    badge: "Launch Offer",
    image: "/images/rutu-city/image_1.webp",
    rera: "MahaRERA: P517000XXXX4"
  },
  {
    id: "raunak-max-city-2bhk",
    name: "Raunak Maximum City",
    location: "Ghodbunder Road, Thane",
    price: "Starting ₹93 Lakhs++",
    carpetArea: "610 - 660 Sq.Ft.",
    possession: "Jun 2027",
    badge: "High Demand",
    image: "/images/raunak-max-city-2bhk/image_1.webp",
    rera: "MahaRERA: P517000XXXX2"
  }
]

export function PremiumFeaturedProperties() {
  return (
    <section id="properties" className="bg-background py-16 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-foreground">
            Premium 2 BHK Residences
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            Explore our curated selection of high-end 2 BHK apartments in Thane West. Click on any property card to view its full configurations, photos, floor plans, and amenities.
          </p>
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {propertiesList.map((property) => {
            return (
              <Link
                key={property.id}
                href={`/properties/${property.id}`}
                className="block overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-gold/50 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="p-4 sm:p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
                  
                  {/* Property Image/Video Thumbnail */}
                  <div className="relative w-full md:w-44 h-32 rounded-xl overflow-hidden bg-muted shrink-0">
                    {/* Desktop Video (hidden on mobile) */}
                    {property.video ? (
                      <>
                        <div className="hidden md:block w-full h-full relative">
                          <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover"
                          >
                            <source src={property.video} type="video/mp4" />
                          </video>
                        </div>
                        <div className="block md:hidden w-full h-full relative">
                          <Image
                            src={property.image}
                            alt={property.name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 176px"
                          />
                        </div>
                      </>
                    ) : (
                      <Image
                        src={property.image}
                        alt={property.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 176px"
                      />
                    )}
                    
                    {/* Badge */}
                    <div className="absolute top-2 left-2">
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-gold text-charcoal shadow-sm">
                        {property.badge}
                      </span>
                    </div>
                  </div>

                  {/* Property Core Info */}
                  <div className="flex-1 space-y-2 w-full">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                        {property.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs font-semibold text-gold uppercase tracking-wider shrink-0">
                        <span>View Details</span>
                        <ChevronRight className="size-4" />
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs sm:text-sm">
                      <MapPin className="size-3.5 text-gold shrink-0" />
                      <span>{property.location}</span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 pt-2.5 border-t border-border/50 text-xs sm:text-sm">
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Starting Price</p>
                        <p className="font-semibold text-gold mt-0.5">{property.price}</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Carpet Area</p>
                        <p className="font-semibold text-foreground mt-0.5">{property.carpetArea}</p>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Possession Date</p>
                        <p className="font-semibold text-foreground mt-0.5">{property.possession}</p>
                      </div>
                    </div>
                    
                    {/* RERA Line */}
                    <div className="text-[10px] text-muted-foreground pt-1.5">
                      <span className="font-mono text-foreground/60">{property.rera}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
