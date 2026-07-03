"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react"
import { trackWhatsAppClick, trackFormSubmit } from "@/lib/navigation-helpers"

const finalFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string()
    .min(10, "Please enter a valid phone number")
    .regex(/^\d+$/, "Phone number must contain only digits"),
  email: z.string().email("Please enter a valid email address"),
})

type FinalFormData = z.infer<typeof finalFormSchema>

export function FinalCtaSection() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FinalFormData>({
    resolver: zodResolver(finalFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  })

  const onSubmit = async (data: FinalFormData) => {
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
                "Property": "1 BHK Apartment Campaign",
                "Lead Source": "1 BHK Final CTA Form",
                "Page URL": window.location.href,
                "Message": "Callback requested from 1 BHK campaign Final CTA form.",
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
        trackFormSubmit(router, "1 BHK Final CTA Form")
      }, 1500)
    } catch (error) {
      console.error("Error submitting final cta form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="final-lead-capture" className="bg-background py-20 sm:py-28 relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
          <div className="grid lg:grid-cols-5">
            
            {/* Left Content / WhatsApp */}
            <div className="bg-charcoal p-10 text-white lg:col-span-2 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80')] bg-cover bg-center" />
              <div className="relative z-10">
                <h3 className="text-2xl font-medium text-gold mb-4">Fast Track Your Inquiry</h3>
                <p className="text-white/80 leading-relaxed mb-8">
                  Have questions about floor plans, pricing, or availability? Chat with our experts directly on WhatsApp for instant answers.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-green-500 bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-white"
                  onClick={() => trackWhatsAppClick(router, "https://wa.me/917972781688", "1 BHK Final CTA WhatsApp")}
                >
                  <MessageCircle className="mr-2 size-5" />
                  Chat on WhatsApp
                </Button>
              </div>
              <div className="relative z-10 mt-12">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="size-10 rounded-full border-2 border-charcoal bg-gold/80" />
                    <div className="size-10 rounded-full border-2 border-charcoal bg-white/20" />
                    <div className="size-10 rounded-full border-2 border-charcoal bg-white/40" />
                  </div>
                  <p className="text-sm text-white/70">Join 500+ happy homeowners in Thane</p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="p-10 lg:col-span-3">
              <div className="mb-8 text-center sm:text-left">
                <h2 className="text-3xl font-light tracking-tight text-foreground">
                  Book Your 1 BHK Site Visit Today
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Take the first step toward owning your dream home. Discover premium 1 BHK apartments designed for comfort, convenience, and long-term value.
                </p>
              </div>

              {isSuccess ? (
                <div className="flex h-[320px] flex-col items-center justify-center text-center">
                  <CheckCircle2 className="mb-4 size-16 text-gold" />
                  <h3 className="text-2xl font-medium text-foreground">Thank You!</h3>
                  <p className="mt-2 text-muted-foreground">
                    We've received your request. Our property expert will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="final-name">Full Name</Label>
                    <Input
                      id="final-name"
                      placeholder="Your name"
                      {...register("name")}
                      aria-invalid={errors.name ? "true" : "false"}
                      className="bg-background h-12"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="final-phone">Mobile Number</Label>
                    <Input
                      id="final-phone"
                      type="tel"
                      placeholder="e.g. 9876543210"
                      {...register("phone")}
                      aria-invalid={errors.phone ? "true" : "false"}
                      className="bg-background h-12"
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="final-email">Email Address</Label>
                    <Input
                      id="final-email"
                      type="email"
                      placeholder="name@email.com"
                      {...register("email")}
                      aria-invalid={errors.email ? "true" : "false"}
                      className="bg-background h-12"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold-light text-charcoal h-14 text-lg font-medium mt-4 cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 size-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Schedule My Visit"
                    )}
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
