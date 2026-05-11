"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const amenitiesList = [
  "Skyline Jacuzzi", "Rooftop Movie Screening", "Swimming Pool", 
  "Heated Kids Pool", "Yoga Deck", "BBQ Area", 
  "Open Air Gym", "Butterfly Garden", "Mini Golf", 
  "Tropical Forest", "Kids Play Area", "Sports Plaza", 
  "Co-working Spaces", "Fitness Center", "VR Zone", "Lounge with WiFi"
]

export function LifestyleAmenities() {
  return (
    <section className="bg-charcoal py-24 sm:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-light tracking-tight sm:text-5xl">
              Maximum Lifestyle Experience
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
              Elevate your everyday with an extraordinary collection of rooftop and podium amenities designed for relaxation, fitness, and entertainment.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8">
              {amenitiesList.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="h-1 w-1 rounded-full bg-gold" />
                  <span className="text-sm font-medium text-white/90">{amenity}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1576013551627-1cc001f8088b?q=80&w=800&auto=format&fit=crop"
                alt="Swimming Pool"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl mt-12">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=800&auto=format&fit=crop"
                alt="Skyline Jacuzzi"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
