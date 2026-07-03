"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const localTestimonials = [
  {
    name: "Rahul & Sneha Sharma",
    occupation: "Software Engineer, TCS",
    photo: "/placeholder-user.jpg",
    quote: "As a young couple buying our first home, we wanted something affordable but high quality. This 1 BHK fits our budget perfectly. The EMI is comfortable, and we are close to the metro link. Highly recommended!",
    rating: 5
  },
  {
    name: "Priyanka Deshmukh",
    occupation: "Financial Analyst",
    photo: "/placeholder-user.jpg",
    quote: "The rental demand in Kasarvadavali is huge. I bought this 1 smart BHK as an investment. TCS Olympus is just down the road, and I secured a tenant within 2 weeks of registration. Excellent yield!",
    rating: 5
  },
  {
    name: "Karan Johar (Upgrader)",
    occupation: "Creative Director",
    photo: "/placeholder-user.jpg",
    quote: "I was renting a tiny flat in Mumbai. Upgrading to a premium 1 BHK here gave me access to amazing clubhouse amenities, gymnasium, and a secure gated neighborhood at half the cost. Truly satisfying.",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section id="testimonials-section" className="bg-background py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(184,148,73,0.12)",
              border: "1px solid rgba(184,148,73,0.35)",
              color: "#e8c97a",
            }}
          >
            Happy Homeowners
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-foreground">
            What Our Buyers{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#b89449,#e8c97a,#b89449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Are Saying
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-muted-foreground">
            Hear from happy couples, expanding families, and professionals who chose these premium 1 BHK layouts as their perfect home.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {localTestimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl border border-border bg-card p-8 flex flex-col justify-between shadow-lg"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 size-8 text-gold/15 pointer-events-none" />

              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-6 text-gold">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>

                <blockquote className="text-base text-foreground/80 leading-relaxed mb-8 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* User details */}
              <div className="flex items-center gap-4 border-t border-border pt-6 mt-auto">
                <div className="flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gold text-xl font-bold text-charcoal border-2 border-gold/20">
                  {t.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-xs font-semibold text-gold">{t.occupation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
