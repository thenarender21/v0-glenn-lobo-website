"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"
import { useRouter } from "next/navigation"
import { trackFormSubmit } from "@/lib/navigation-helpers"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { X, CalendarCheck, Loader2, CheckCircle2 } from "lucide-react"
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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  propertyInterest: z.string().min(1, "Please select an apartment type"),
  budget: z.string().min(1, "Please select a budget range"),
})

type FormData = z.infer<typeof formSchema>

interface FloatingCtaContextType {
  openForm: () => void
  closeForm: () => void
}

const FloatingCtaContext = createContext<FloatingCtaContextType | undefined>(undefined)

export function useFloatingCta() {
  const context = useContext(FloatingCtaContext)
  if (!context) {
    throw new Error("useFloatingCta must be used within a FloatingCtaProvider")
  }
  return context
}

export function FloatingCtaProvider({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      propertyInterest: "",
      budget: "",
    },
  })

  const openForm = () => setIsOpen(true)
  const closeForm = () => {
    setIsOpen(false)
    setTimeout(() => {
      setIsSuccess(false)
      reset()
    }, 500) // Reset after animation
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                "Name": data.name,
                "Phone": data.phone,
                "Email": "Raunak Lead",
                "Property": data.propertyInterest,
                "Lead Source": "Google Ads - Raunak",
                "Page URL": window.location.href,
                "Message": `Budget: ${data.budget}` // Budget appended to message
              }
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error("Failed to submit to Airtable");
      }

      setIsSuccess(true)
      setTimeout(() => {
        closeForm()
        trackFormSubmit(router, "Google Ads - Raunak")
      }, 1500)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FloatingCtaContext.Provider value={{ openForm, closeForm }}>
      {children}
      
      {/* The Floating Trigger Button */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:bottom-auto sm:left-auto sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-[calc(100%-48px)] hover:sm:translate-x-0 transition-transform duration-300">
        <button
          onClick={openForm}
          className="flex w-full items-center justify-center gap-2 bg-gold py-4 font-medium text-charcoal sm:h-auto sm:w-auto sm:origin-bottom-right sm:-rotate-90 sm:rounded-t-lg sm:px-8 sm:py-3 sm:shadow-[-5px_0_15px_rgba(0,0,0,0.1)] hover:bg-gold-light"
        >
          <CalendarCheck className="size-5 sm:rotate-90" />
          <span className="text-lg tracking-wide sm:text-base uppercase">Arrange a Viewing</span>
        </button>
      </div>

      {/* The Popup Form Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-card shadow-2xl"
            >
              <button
                onClick={closeForm}
                className="absolute right-4 top-4 rounded-full bg-secondary/50 p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="size-5" />
              </button>

              <div className="p-8 sm:p-10">
                {isSuccess ? (
                  <div className="flex h-[350px] flex-col items-center justify-center text-center">
                    <CheckCircle2 className="mb-6 size-20 text-gold" />
                    <h3 className="text-3xl font-light text-foreground">Thank You</h3>
                    <p className="mt-4 text-muted-foreground">
                      Your viewing request has been received. Our luxury property consultant will contact you shortly to confirm the schedule.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-3xl font-light tracking-tight text-foreground">
                      Schedule Site Visit
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      Experience the luxury of Raunak Maximum City firsthand.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          {...register("name")}
                          className="h-12 bg-background"
                        />
                        {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 98765 43210"
                          {...register("phone")}
                          className="h-12 bg-background"
                        />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="propertyInterest">Apartment Type</Label>
                        <Select onValueChange={(value) => setValue("propertyInterest", value)}>
                          <SelectTrigger className="h-12 bg-background">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1BHK">1 BHK Smart Home</SelectItem>
                            <SelectItem value="2BHK">2 BHK Premium</SelectItem>
                            <SelectItem value="Raunak 108">Raunak 108 Project</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.propertyInterest && <p className="text-sm text-destructive">{errors.propertyInterest.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range</Label>
                        <Select onValueChange={(value) => setValue("budget", value)}>
                          <SelectTrigger className="h-12 bg-background">
                            <SelectValue placeholder="Select budget" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Under 70L">Under ₹70 Lakhs</SelectItem>
                            <SelectItem value="70L - 1Cr">₹70 Lakhs - ₹1 Cr</SelectItem>
                            <SelectItem value="1Cr - 1.5Cr">₹1 Cr - ₹1.5 Cr</SelectItem>
                            <SelectItem value="1.5Cr+">₹1.5 Cr +</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.budget && <p className="text-sm text-destructive">{errors.budget.message}</p>}
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gold hover:bg-gold-light text-charcoal h-14 text-lg font-medium mt-4 transition-all"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 size-5 animate-spin" />
                            Confirming...
                          </>
                        ) : (
                          "Confirm Viewing"
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </FloatingCtaContext.Provider>
  )
}
