"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Bed, Bath, Maximize } from "lucide-react"
import { Property } from "@/lib/properties"
import { cn } from "@/lib/utils"

interface PropertyCardProps {
  property: Property
  index: number
}

export function PropertyCard({ property, index }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.id}`} className="block h-full">
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        whileHover={{ y: -8 }}
        className="group h-full relative overflow-hidden rounded-lg bg-card shadow-sm transition-shadow duration-300 hover:shadow-xl"
      >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span
            className={cn(
              "rounded-sm px-3 py-1 text-xs font-medium uppercase tracking-wider",
              property.type === "1 BHK" && "bg-white text-charcoal",
              property.type === "2 BHK" && "bg-gold text-charcoal",
              property.type === "3 BHK" && "bg-charcoal text-white"
            )}
          >
            {property.type}
          </span>
          <span
            className={cn(
              "rounded-sm px-3 py-1 text-xs font-medium uppercase tracking-wider",
              property.status === "Rent" ? "bg-blue-500 text-white" : "bg-emerald-500 text-white"
            )}
          >
            For {property.status}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground text-balance">
            {property.title}
          </h3>
          <p className="whitespace-nowrap text-lg font-semibold text-gold">
            {property.price}
          </p>
        </div>

        <p className="mb-3 text-sm text-muted-foreground">{property.location}</p>

        <p className="mb-4 text-sm text-foreground/70 line-clamp-2">
          {property.description}
        </p>

        <div className="flex items-center gap-4 border-t border-border pt-4">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Bed className="size-4" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Bath className="size-4" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Maximize className="size-4" />
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </div>
    </motion.article>
    </Link>
  )
}
