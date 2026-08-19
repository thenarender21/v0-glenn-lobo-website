"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Dumbbell,
  Droplets,
  Gamepad2,
  CalendarCheck,
  ShieldAlert,
  Flame,
  Trees,
  Users,
  Eye,
  Zap,
  Footprints,
} from "lucide-react"

const amenitiesList = [
  { name: "Grand Clubhouse", icon: Building2, desc: "Hub for social gatherings, indoor activities & networking." },
  { name: "State-of-the-Art Gymnasium", icon: Dumbbell, desc: "Modern fitness equipment, cardio training & yoga zones." },
  { name: "Premium Swimming Pool", icon: Droplets, desc: "Temperature-controlled swimming pool with dedicated kids zone." },
  { name: "Children's Play Area", icon: Footprints, desc: "Safe playground with modern swings, slides & play sand pits." },
  { name: "Indoor Games Zone", icon: Gamepad2, desc: "Table tennis, carrom, pool table, chess, and card rooms." },
  { name: "Jogging & Walking Track", icon: CalendarCheck, desc: "Paved tracks surrounded by lush green flora and oxygen zones." },
  { name: "Landscaped Gardens", icon: Trees, desc: "Beautifully manicured gardens, open green lawns & floral pathways." },
  { name: "Senior Citizen Zone", icon: Users, desc: "Peaceful sit-outs, reading corners & walking spaces for elders." },
  { name: "Multipurpose Hall", icon: Users, desc: "Air-conditioned venue for family functions & community events." },
  { name: "Multi-Tier Security System", icon: ShieldAlert, desc: "Professional guard forces stationed at all entry/exit gates." },
  { name: "24/7 CCTV Surveillance", icon: Eye, desc: "Continuous recording across common areas, elevators & perimeters." },
  { name: "100% Power Backup", icon: Zap, desc: "Automatic DG power backup for apartments & common facilities." },
]

export function AmenitiesGrid() {
  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background: "linear-gradient(160deg, #0a0a0a 0%, #111008 40%, #0d0d0d 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(184,148,73,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(184,148,73,0.12)",
              border: "1px solid rgba(184,148,73,0.35)",
              color: "#e8c97a",
            }}
          >
            Luxury Lifestyle
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Premium Amenities{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#b89449,#e8c97a,#b89449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Grid
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/60">
            A world of luxury, fitness, recreation, and top-tier safety designed to elevate your family's daily lifestyle.
          </p>
        </div>

        {/* 3x4 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenitiesList.map((amenity, idx) => {
            const Icon = amenity.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl p-6 bg-white/[0.02] border border-white/10 hover:border-gold/30 hover:bg-white/[0.05] transition-all duration-300 flex items-start gap-4"
              >
                {/* Icon wrapper */}
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 border border-gold/20 text-gold group-hover:bg-gold group-hover:text-charcoal transition-colors duration-300">
                  <Icon className="size-5" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300">
                    {amenity.name}
                  </h3>
                  <p className="text-xs leading-normal text-white/60">
                    {amenity.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
