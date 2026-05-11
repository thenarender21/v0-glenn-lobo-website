"use client"

import { motion } from "framer-motion"

export function NatureWellness() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2000&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-light tracking-tight sm:text-6xl">
            Nature At Maximum
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl font-light leading-relaxed text-white/90">
            Wake up to the serene views of Yeoor Hills and the lush green expanses of the Sanjay Gandhi National Park Biodiversity Park. A peaceful retreat right in the city.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
