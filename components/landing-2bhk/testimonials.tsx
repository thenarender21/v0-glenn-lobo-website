"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const localTestimonials = [
  {
    name: "Ameya & Rashmi Kulkarni",
    familyType: "Young Married Couple",
    photo: "/placeholder-user.jpg",
    quote: "Moving from a 1 BHK, we wanted a spacious 2 BHK. The layout here is exceptionally well-planned. There's a dedicated study room which acts as my workspace. Best decision for our growing family!",
    rating: 5
  },
  {
    name: "Vikram & Sonali Rathore",
    familyType: "Working Professionals (IT)",
    photo: "/placeholder-user.jpg",
    quote: "With both of us working from home, we needed a home with proper room sizes and high-speed internet support. Our 2 BHK XL has a beautiful balcony and is just 12 mins away from Wagle Estate. Excellent value.",
    rating: 5
  },
  {
    name: "Ramesh & Sunita Shinde",
    familyType: "Upgraders / Retired Couple",
    photo: "/placeholder-user.jpg",
    quote: "We wanted a secure community with premium amenities like landscaped gardens and walking tracks. The senior citizen sitout is our favorite. The booking process was seamless with full loan assistance.",
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
            Hear from happy couples, expanding families, and professionals who chose these spacious 2 BHK layouts as their perfect home.
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
                  <p className="text-xs font-semibold text-gold">{t.familyType}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
