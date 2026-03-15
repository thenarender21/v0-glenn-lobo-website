"use client"

import { motion } from "framer-motion"
import { PropertyType, propertyTypes } from "@/lib/properties"
import { cn } from "@/lib/utils"

interface PropertyFilterProps {
  activeFilter: PropertyType | "All"
  onFilterChange: (filter: PropertyType | "All") => void
}

export function PropertyFilter({ activeFilter, onFilterChange }: PropertyFilterProps) {
  const filters: (PropertyType | "All")[] = ["All", ...propertyTypes]

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={cn(
            "relative px-5 py-2 text-sm font-medium transition-colors",
            activeFilter === filter
              ? "text-charcoal"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {activeFilter === filter && (
            <motion.span
              layoutId="activeFilter"
              className="absolute inset-0 rounded-full bg-gold"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{filter}</span>
        </button>
      ))}
    </div>
  )
}
