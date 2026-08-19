"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { testimonials } from "@/lib/properties"

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-charcoal py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Client Stories
          </p>
          <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-lg bg-charcoal-light p-8"
            >
              <Quote className="mb-4 size-8 text-gold/40" />
              <blockquote className="text-pretty text-white/90">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gold text-xl font-bold text-charcoal">
                  {testimonial.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
