"use client"

import { motion } from "framer-motion"
import { PropertyType, PropertyStatus, propertyTypes } from "@/lib/properties"
import { cn } from "@/lib/utils"

interface PropertyFilterProps {
  activeTypeFilter: PropertyType | "All"
  onTypeFilterChange: (filter: PropertyType | "All") => void
  activeStatusFilter: PropertyStatus | "All"
  onStatusFilterChange: (filter: PropertyStatus | "All") => void
}

export function PropertyFilter({ 
  activeTypeFilter, 
  onTypeFilterChange,
  activeStatusFilter,
  onStatusFilterChange
}: PropertyFilterProps) {
  const typeFilters: (PropertyType | "All")[] = ["All", ...propertyTypes]
  const statusFilters: (PropertyStatus | "All")[] = ["All", "Rent", "Sell"]

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {typeFilters.map((filter) => (
          <button
            key={`type-${filter}`}
            onClick={() => onTypeFilterChange(filter)}
            className={cn(
              "relative px-5 py-2 text-sm font-medium transition-colors",
              activeTypeFilter === filter
                ? "text-charcoal"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {activeTypeFilter === filter && (
              <motion.span
                layoutId="activeTypeFilter"
                className="absolute inset-0 rounded-full bg-gold"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {statusFilters.map((filter) => (
          <button
            key={`status-${filter}`}
            onClick={() => onStatusFilterChange(filter)}
            className={cn(
              "relative px-5 py-2 text-sm font-medium transition-colors",
              activeStatusFilter === filter
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {activeStatusFilter === filter && (
              <motion.span
                layoutId="activeStatusFilter"
                className="absolute inset-0 rounded-full bg-charcoal"
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{filter === "All" ? "Any Status" : `For ${filter}`}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
