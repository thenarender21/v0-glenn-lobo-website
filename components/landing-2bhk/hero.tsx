"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Phone, CheckCircle2, Loader2, ArrowRight } from "lucide-react"
import { trackCallClick, trackWhatsAppClick, trackFormSubmit } from "@/lib/navigation-helpers"

const heroFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string()
    .min(10, "Please enter a valid phone number")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  email: z.string().email("Please enter a valid email address"),
})

type HeroFormData = z.infer<typeof heroFormSchema>

export function Hero({ onOpenContact }: { onOpenContact?: () => void }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HeroFormData>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  })

  const onSubmit = async (data: HeroFormData) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                "Name": data.name,
                "Phone": data.phone,
                "Email": data.email,
                "Property": "2 BHK Apartment Campaign",
                "Lead Source": "2 BHK Hero Form",
                "Page URL": window.location.href,
                "Message": "Callback requested from 2 BHK campaign Hero form.",
              },
            },
          ],
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit lead")
      }

      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        reset()
        trackFormSubmit(router, "2 BHK Hero Form")
      }, 1500)
    } catch (error) {
      console.error("Error submitting hero form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden py-16 lg:py-24">
      {/* Background image & overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/70 to-charcoal/95 z-10" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Badge, Headline, Subheadline & Quick CTAs */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="mb-6 flex justify-start">
                <span className="rounded-full border border-gold/30 bg-charcoal/50 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold backdrop-blur-md sm:text-sm">
                  EXCLUSIVE 2 BHK CAMPAIGN
                </span>
              </div>
              
              <h1 className="text-balance text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
                Own Your Spacious <span className="font-medium text-gold">Dream 2 BHK</span> Home
              </h1>
              
              <p className="mt-6 max-w-2xl text-pretty text-lg text-white/80 sm:text-xl leading-relaxed">
                Experience premium living, modern amenities, excellent connectivity, and thoughtfully designed 2 BHK apartments built for comfort and convenience.
              </p>

              {/* Hero Features Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-lg">
                <div className="flex items-center gap-2 text-white">
                  <span className="text-gold font-bold">✓</span> Spacious Layouts
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-gold font-bold">✓</span> Premium Amenities
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-gold font-bold">✓</span> Excellent Connectivity
                </div>
                <div className="flex items-center gap-2 text-white">
                  <span className="text-gold font-bold">✓</span> Family-Friendly Community
                </div>
              </div>
            </motion.div>

            {/* Quick Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4"
            >
              <Button
                onClick={onOpenContact}
                size="lg"
                className="w-full bg-gold px-8 py-6 text-base font-semibold text-charcoal hover:bg-gold-light sm:w-auto transition-colors cursor-pointer"
              >
                Book Site Visit
              </Button>

              <Button
                onClick={() => scrollToSection("pricing-section")}
                variant="outline"
                size="lg"
                className="w-full border-gold/50 text-gold hover:bg-gold/10 px-8 py-6 text-base font-semibold sm:w-auto transition-colors cursor-pointer"
              >
                Get Price Details
              </Button>
              
              <div className="flex w-full sm:w-auto gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-white/30 bg-transparent px-5 py-6 text-base text-white hover:bg-white/10 hover:text-white sm:flex-initial"
                  onClick={() => trackCallClick(router, "2 BHK Hero Call")}
                >
                  <Phone className="mr-2 size-4 text-gold" />
                  Call
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-green-500/50 bg-green-500/10 px-5 py-6 text-base text-white hover:bg-green-500/20 sm:flex-initial"
                  onClick={() => trackWhatsAppClick(router, "https://wa.me/917972781688", "2 BHK Hero WhatsApp")}
                >
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Callback Lead Form Card */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full max-w-md rounded-2xl border border-white/10 bg-charcoal/45 p-8 shadow-2xl backdrop-blur-xl"
            >
              <div className="mb-6">
                <h3 className="text-xl font-medium text-white">Book Site Visit</h3>
                <p className="text-sm text-white/70 mt-1">Get custom details & schedule a direct tour.</p>
              </div>
              
              {isSuccess ? (
                <div className="flex h-[320px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="mb-4 size-16 text-gold animate-bounce" />
                  <h4 className="text-xl font-medium text-white">Inquiry Sent!</h4>
                  <p className="mt-2 text-sm text-white/80">
                    We have received your details. Our expert will contact you within 10 minutes.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-1.5 text-left">
                    <Label htmlFor="hero-name" className="text-white/90 text-sm font-medium">Full Name</Label>
                    <Input
                      id="hero-name"
                      placeholder="Your Full Name"
                      {...register("name")}
                      aria-invalid={errors.name ? "true" : "false"}
                      className="bg-charcoal/60 border-white/20 text-white placeholder:text-white/40 h-11 focus-visible:ring-gold focus-visible:border-gold"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5 text-left">
                    <Label htmlFor="hero-phone" className="text-white/90 text-sm font-medium">Mobile Number</Label>
                    <Input
                      id="hero-phone"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      {...register("phone")}
                      aria-invalid={errors.phone ? "true" : "false"}
                      className="bg-charcoal/60 border-white/20 text-white placeholder:text-white/40 h-11 focus-visible:ring-gold focus-visible:border-gold"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5 text-left">
                    <Label htmlFor="hero-email" className="text-white/90 text-sm font-medium">Email Address</Label>
                    <Input
                      id="hero-email"
                      type="email"
                      placeholder="name@email.com"
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                      className="bg-charcoal/60 border-white/20 text-white placeholder:text-white/40 h-11 focus-visible:ring-gold focus-visible:border-gold"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5 text-left">
                    <Label className="text-white/90 text-sm font-medium">Interested In</Label>
                    <div className="bg-charcoal/80 border border-white/10 text-white/60 rounded-md h-11 px-3 flex items-center text-sm font-semibold select-none cursor-not-allowed">
                      2 BHK Premium Apartment (Pre-selected)
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-charcoal h-12 text-base font-semibold mt-6 transition-all duration-300 cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 size-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Book Site Visit"
                    )}
                  </Button>
                  
                  <p className="text-center text-[11px] text-white/60 mt-4 leading-normal">
                    ⚡ Instant booking · Expert consultation · 100% Free
                  </p>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
