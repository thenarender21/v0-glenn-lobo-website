"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { contactFormSchema, ContactFormData } from "@/lib/form-schema"
import { useProperties } from "@/components/properties-provider"
import { CheckCircle2, Loader2 } from "lucide-react"
import { trackFormSubmit, trackWhatsAppClick, trackCallClick, ConversionType } from "@/lib/navigation-helpers"

interface ContactModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  source?: string
  conversionType?: ConversionType
}

export function ContactModal({ open, onOpenChange, source = "Website popup", conversionType = "form" }: ContactModalProps) {
  const properties = useProperties()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      propertyInterest: "",
      message: "",
    },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitError(null)
    
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
                "Email": data.email,
                "Property": data.propertyInterest || "",
                "Lead Source": source,
                "Page URL": window.location.href,
                "Message": data.message || ""
              }
            }
          ]
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to submit to Airtable");
      }

      setIsSuccess(true)
      setTimeout(() => {
        setIsSuccess(false)
        reset()
        onOpenChange(false)
        trackFormSubmit("lead", "contact_form");
        trackFormSubmit(router, source, conversionType)
      }, 1500)
    } catch (error: any) {
      console.error("Error submitting form:", error)
      setSubmitError(`Submission failed (${error.message}). Please try again, or contact us via WhatsApp or Call.`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = (open: boolean) => {
    if (!isSubmitting) {
      onOpenChange(open)
      if (!open) {
        setIsSuccess(false)
        setSubmitError(null)
        reset()
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle2 className="mb-4 size-16 text-gold" />
            <DialogTitle className="text-xl">Thank You!</DialogTitle>
            <DialogDescription className="mt-2">
              We&apos;ve received your inquiry and will be in touch within 24 hours.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">
                Book a Private Consultation
              </DialogTitle>
              <DialogDescription>
                Share your requirements and we&apos;ll arrange a personalized
                viewing experience.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  {...register("name")}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  {...register("phone")}
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone && (
                  <p className="text-sm text-destructive">{errors.phone.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyInterest">Property of Interest</Label>
                <Select
                  onValueChange={(value) => setValue("propertyInterest", value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a property" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    {properties.map((property) => (
                      <SelectItem key={property.id} value={property.title}>
                        {property.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.propertyInterest && (
                  <p className="text-sm text-destructive">
                    {errors.propertyInterest.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your requirements..."
                  rows={4}
                  {...register("message")}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitError && (
                <div className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive border border-destructive/20 space-y-2">
                  <p>{submitError}</p>
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="border-green-500 bg-green-500/10 text-green-600 hover:bg-green-500 hover:text-white text-xs font-normal"
                      onClick={() => trackWhatsAppClick(router, "https://wa.me/917972781688", "Contact Modal Fallback")}
                    >
                      Chat on WhatsApp
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="border-primary bg-primary/10 text-primary hover:bg-primary hover:text-white text-xs font-normal"
                      onClick={() => trackCallClick(router, "Contact Modal Fallback")}
                    >
                      Call Us
                    </Button>
                  </div>
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gold text-charcoal hover:bg-gold-light"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 size-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Inquiry"
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
