"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
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
import { CheckCircle2, Loader2, Home } from "lucide-react"
import { trackFormSubmit } from "@/lib/navigation-helpers"

const locations = [
  "Ghodbunder Road, Thane",
  "Majiwada, Thane",
  "Kasarvadavali, Thane",
  "Manpada, Thane",
  "Waghbil, Thane",
  "Balkum, Thane",
  "Kolshet Road, Thane",
  "Hiranandani Estate",
]

export function LeadCapturePopup() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    budget: "",
  })

  useEffect(() => {
    // Check if popup has already been shown in this session
    const hasShown = sessionStorage.getItem("lead-capture-shown")
    
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("lead-capture-shown", "true")
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          records: [
            {
              fields: {
                "Name": formData.name,
                "Phone": formData.phone,
                "Property": formData.location || "",
                "Lead Source": "lead-capture-popup",
                "Page URL": window.location.href,
                "Message": formData.budget ? `Budget: ${formData.budget}` : ""
              }
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        handleClose()
        trackFormSubmit(router, "Lead Capture Popup")
      }, 1500)
    } catch (error) {
      console.error("Popup submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) handleClose()
    }}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center p-12 text-center bg-background">
            <CheckCircle2 className="mb-4 size-16 text-gold" />
            <DialogTitle className="text-2xl font-bold">Thank You!</DialogTitle>
            <DialogDescription className="mt-3 text-base">
              We&apos;ve received your details. A property expert will contact you shortly with personalized recommendations.
            </DialogDescription>
          </div>
        ) : (
          <div className="flex flex-col">
            {/* Top accent bar */}
            <div className="h-2 w-full bg-gold" />
            
            <div className="p-6 sm:p-8">
              <DialogHeader className="mb-6">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Home className="h-6 w-6" />
                </div>
                <DialogTitle className="text-center text-2xl font-bold tracking-tight">
                  Find Your Perfect Property in Thane
                </DialogTitle>
                <DialogDescription className="text-center text-base mt-2">
                  Get personalized property recommendations based on your budget and preferred location.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="lead-name">Name *</Label>
                  <Input
                    id="lead-name"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lead-phone">Phone Number *</Label>
                  <Input
                    id="lead-phone"
                    required
                    type="tel"
                    placeholder="+91"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lead-location">Preferred Location</Label>
                  <Select
                    value={formData.location}
                    onValueChange={(val) => setFormData({ ...formData, location: val })}
                  >
                    <SelectTrigger id="lead-location">
                      <SelectValue placeholder="Select a location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((loc) => (
                        <SelectItem key={loc} value={loc}>
                          {loc}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lead-budget">Budget (Optional)</Label>
                  <Select
                    value={formData.budget}
                    onValueChange={(val) => setFormData({ ...formData, budget: val })}
                  >
                    <SelectTrigger id="lead-budget">
                      <SelectValue placeholder="Select your budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Under 50 Lakhs">Under 50 Lakhs</SelectItem>
                      <SelectItem value="50 Lakhs - 1 Crore">50 Lakhs - 1 Crore</SelectItem>
                      <SelectItem value="1 Crore - 2 Crores">1 Crore - 2 Crores</SelectItem>
                      <SelectItem value="Above 2 Crores">Above 2 Crores</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full mt-6 bg-gold text-charcoal hover:bg-gold-light"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Get Property Details"
                  )}
                </Button>
              </form>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
