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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Phone, CheckCircle, Loader2, CheckCircle2 } from "lucide-react"
import { trackCallClick, trackWhatsAppClick, trackFormSubmit } from "@/lib/navigation-helpers"

const heroFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string()
    .min(10, "Please enter a valid phone number")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  bhk: z.string().min(1, "Please select preferred BHK"),
})

type HeroFormData = z.infer<typeof heroFormSchema>

export function PremiumLandingHero({ onOpenContact }: { onOpenContact?: () => void }) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<HeroFormData>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      bhk: "",
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
                "Email": "Hero Inline Lead",
                "Property": `${data.bhk} Preferred`,
                "Lead Source": "Hero Callback Form",
                "Page URL": window.location.href,
                "Message": `Callback requested for ${data.bhk}`,
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
        trackFormSubmit(router, "Hero Callback Form")
      }, 1500)
    } catch (error) {
      console.error("Error submitting hero form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden py-16 lg:py-24">
      {/* Background image & overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')",
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
                  EXCLUSIVE THANE RESIDENCES
                </span>
              </div>
              
              <h1 className="text-balance text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
                Find Your Dream Home in <span className="font-medium text-gold">Thane</span> — 1 BHK, 2 BHK, 3 BHK & Luxury Apartments
              </h1>
              
              <p className="mt-6 max-w-2xl text-pretty text-lg text-white/80 sm:text-xl leading-relaxed">
                Trusted real estate advisor with 13+ years in Thane. Explore verified projects by Raunak and Lodha — starting ₹67 Lakhs.
              </p>
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
                className="w-full bg-gold px-8 py-6 text-base font-medium text-charcoal hover:bg-gold-light sm:w-auto transition-colors cursor-pointer"
              >
                Book Free Site Visit
              </Button>
              
              <div className="flex w-full sm:w-auto gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-white/30 bg-transparent px-5 py-6 text-base text-white hover:bg-white/10 hover:text-white sm:flex-initial"
                  onClick={() => trackCallClick(router, "Premium Hero Call")}
                >
                  <Phone className="mr-2 size-4 text-gold" />
                  Call Now
                </Button>
                
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 border-green-500/50 bg-green-500/10 px-5 py-6 text-base text-white hover:bg-green-500/20 sm:flex-initial"
                  onClick={() => trackWhatsAppClick(router, "https://wa.me/917972781688", "Premium Hero WhatsApp")}
                >
                  WhatsApp Now
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
                <h3 className="text-xl font-medium text-white">Get Call Details</h3>
                <p className="text-sm text-white/70 mt-1">Request a free callbacks from our property advisor.</p>
              </div>
              
              {isSuccess ? (
                <div className="flex h-[280px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="mb-4 size-16 text-gold animate-bounce" />
                  <h4 className="text-xl font-medium text-white">Callback Scheduled!</h4>
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
                    <Label htmlFor="hero-phone" className="text-white/90 text-sm font-medium">Phone Number</Label>
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
                    <Label htmlFor="hero-bhk" className="text-white/90 text-sm font-medium">Preferred BHK</Label>
                    <Select
                      onValueChange={(value) => setValue("bhk", value)}
                    >
                      <SelectTrigger id="hero-bhk" className="w-full bg-charcoal/60 border-white/20 text-white h-11 focus:ring-gold focus:border-gold">
                        <SelectValue placeholder="Select Preferred BHK" />
                      </SelectTrigger>
                      <SelectContent className="bg-charcoal border-white/10 text-white">
                        <SelectItem value="1 BHK" className="focus:bg-gold focus:text-charcoal cursor-pointer">1 BHK</SelectItem>
                        <SelectItem value="2 BHK" className="focus:bg-gold focus:text-charcoal cursor-pointer">2 BHK</SelectItem>
                        <SelectItem value="3 BHK" className="focus:bg-gold focus:text-charcoal cursor-pointer">3 BHK</SelectItem>
                        <SelectItem value="4 BHK" className="focus:bg-gold focus:text-charcoal cursor-pointer">4 BHK</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.bhk && (
                      <p className="text-xs text-red-400 mt-1">{errors.bhk.message}</p>
                    )}
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
                      "Get Free Callback"
                    )}
                  </Button>
                  
                  <p className="text-center text-[11px] text-white/60 mt-4 leading-normal">
                    ⚡ Our team calls within 10 minutes · No spam · 100% Free
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
