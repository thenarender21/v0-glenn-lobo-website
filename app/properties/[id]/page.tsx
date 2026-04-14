"use client"

import { useState, useMemo, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Maximize, 
  Building, 
  CalendarDays, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Dumbbell, 
  Waves, 
  Car, 
  ShieldCheck, 
  Zap, 
  Building2, 
  Baby, 
  ArrowUpSquare, 
  Compass, 
  PhoneCall
} from "lucide-react"

import { agentInfo } from "@/lib/properties"
import { useProperties } from "@/components/properties-provider"
import { PropertyCard } from "@/components/property-card"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

const amenityIcons: Record<string, any> = {
  "Gymnasium": Dumbbell,
  "Swimming Pool": Waves,
  "Covered Parking": Car,
  "24/7 Security": ShieldCheck,
  "Power Backup": Zap,
  "Clubhouse": Building2,
  "Children's Play Area": Baby,
  "Lift": ArrowUpSquare,
  "Intercom": PhoneCall,
  "Vastu Compliant": Compass,
}

export default function PropertyDetailPage() {
  const properties = useProperties()
  const { id } = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [contactModalOpen, setContactModalOpen] = useState(false)
  
  const property = useMemo(() => {
    return properties.find((p) => p.id === id)
  }, [id])

  const relatedProperties = useMemo(() => {
    if (!property) return []
    return properties
      .filter((p) => p.location === property.location && p.id !== property.id)
      .slice(0, 3)
  }, [property])

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  // Provide initial message if property exists
  useEffect(() => {
    if (property) {
      setFormData(prev => ({
        ...prev,
        message: `Hi, I am interested in ${property.title} located at ${property.location}.`
      }))
    }
  }, [property])

  if (!property) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation onOpenContact={() => setContactModalOpen(true)} variant="solid" />
        <div className="flex h-[70vh] flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Property not found</h1>
          <Button onClick={() => router.push("/properties")} variant="outline">
            Return to Properties
          </Button>
        </div>
        <Footer onOpenContact={() => setContactModalOpen(true)} />
      </main>
    )
  }

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Enquiry Sent",
      description: "Mukund Thakur will get back to you shortly.",
    })
    setFormData({ name: "", phone: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation onOpenContact={() => setContactModalOpen(true)} variant="solid" />
      
      <div className="pt-24 pb-24 lg:pt-32 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Top Bar Navigation */}
          <div className="mb-8">
            <Link 
              href="/properties" 
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Properties
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            
            {/* Left Column: Property Details (Content) */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Photo Gallery */}
              <div className="space-y-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={activeImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={property.gallery ? property.gallery[activeImageIndex] : property.image}
                        alt={`${property.title} view ${activeImageIndex + 1}`}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 66vw"
                      />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="rounded bg-black/60 px-3 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-sm">
                      {property.type}
                    </span>
                    <span className={`rounded px-3 py-1 text-xs font-semibold tracking-wider backdrop-blur-sm ${property.status === "Rent" ? "bg-blue-500/80 text-white" : "bg-emerald-500/80 text-white"}`}>
                      For {property.status}
                    </span>
                  </div>
                </div>

                {/* Thumbnails */}
                {property.gallery && property.gallery.length > 0 && (
                  <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                    {property.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative h-20 w-32 shrink-0 overflow-hidden rounded-lg transition-all ${activeImageIndex === idx ? "ring-2 ring-gold ring-offset-2 ring-offset-background" : "opacity-60 hover:opacity-100"}`}
                      >
                        <Image src={img} alt={`Thumbnail ${idx + 1}`} fill className="object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Header Info & Key Stats */}
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  {property.title}
                </h1>
                
                <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-8 pb-6 border-b border-border">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Location</span>
                    <Link href={`/${property.location.split(',')[0].trim().toLowerCase().replace(/\s+/g, '-')}-properties`} className="flex items-center gap-1.5 text-foreground font-semibold hover:text-gold transition-colors">
                      <MapPin className="h-4 w-4 text-gold" />
                      {property.location}
                    </Link>
                  </div>
                  
                  <div className="flex flex-col gap-1 border-l border-border pl-4 sm:pl-8">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Price</span>
                    <span className="text-foreground font-bold text-lg text-gold">{property.price}</span>
                  </div>
                  
                  <div className="flex flex-col gap-1 border-l border-border pl-4 sm:pl-8">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">BHK</span>
                    <div className="flex items-center gap-1.5 text-foreground font-semibold">
                      <Bed className="h-4 w-4 text-gold" />
                      {property.type}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 border-l border-border pl-4 sm:pl-8">
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Area (sqft)</span>
                    <div className="flex items-center gap-1.5 text-foreground font-semibold">
                      <Maximize className="h-4 w-4 text-gold" />
                      {property.sqft.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-semibold mb-4">About this Property</h2>
                <div className="prose prose-invert max-w-none text-muted-foreground">
                  <p className="leading-relaxed">
                    {property.description}
                  </p>
                  <p className="leading-relaxed mt-4">
                    Situated in the heart of {property.location.split(',')[0]}, this {property.type} is designed to offer a perfect blend of comfort and luxury. Boasting {property.sqft.toLocaleString()} sqft of living space and premium finishes throughout, it stands as a testament to modern architectural excellence in Thane. Whether you're looking for serene mornings or convenient connectivity to major commercial hubs, this property delivers on all fronts.
                  </p>
                </div>
              </div>

              {/* Features & Amenities */}
              {property.amenities && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Features & Amenities</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                    {property.amenities.map((amenity, idx) => {
                      const Icon = amenityIcons[amenity] || CheckCircle2
                      return (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-gold">
                            <Icon className="h-5 w-5" />
                          </div>
                          <span className="text-sm font-medium">{amenity}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}

              {/* Location Map Placeholder */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Location</h2>
                <div className="relative h-80 w-full overflow-hidden rounded-xl bg-secondary flex items-center justify-center border border-border">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-gold mx-auto mb-2 opacity-50" />
                    <p className="text-muted-foreground text-sm font-medium">Map View – {property.location}</p>
                    <p className="text-muted-foreground/60 text-xs mt-1">Google Maps Embed Placeholder</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Contact Sidebar */}
            <div className="order-first lg:order-last">
              <div className="sticky top-32 space-y-6">
                
                {/* Agent Card */}
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-gold/20">
                      {agentInfo.image ? (
                        <Image src={agentInfo.image} alt={agentInfo.name} fill className="object-cover" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-secondary text-xl font-bold text-gold">
                          {agentInfo.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{agentInfo.name}</h3>
                      <p className="text-sm text-gold">{agentInfo.title}</p>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <Button variant="outline" className="w-full justify-start gap-3 hover:border-gold hover:text-gold" asChild>
                      <a href="tel:07972781688">
                        <Phone className="h-4 w-4" />
                        07972781688
                      </a>
                    </Button>
                    <Button className="w-full justify-start gap-3 bg-[#25D366] text-white hover:bg-[#20bd5a]" asChild>
                      <a href="https://wa.me/917972781688" target="_blank" rel="noreferrer">
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-medium mb-4">Request Details</h4>
                    <form onSubmit={handleEnquirySubmit} className="space-y-4">
                      <Input 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="bg-background"
                      />
                      <Input 
                        type="tel" 
                        placeholder="Phone Number" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="bg-background"
                      />
                      <Textarea 
                        placeholder="Message" 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                        className="bg-background min-h-[100px] resize-none"
                      />
                      <Button type="submit" className="w-full bg-gold text-charcoal hover:bg-gold-light font-medium">
                        Send Enquiry
                      </Button>
                    </form>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Related Properties */}
          {relatedProperties.length > 0 && (
            <div className="mt-20 pt-12 border-t border-border">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Related Properties in {property.location.split(',')[0]}</h2>
                <Link href="/properties" className="text-sm font-medium text-gold hover:underline">
                  View all
                </Link>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProperties.map((relatedProp, idx) => (
                  <PropertyCard key={relatedProp.id} property={relatedProp} index={idx} />
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      <Footer onOpenContact={() => setContactModalOpen(true)} />
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
      />
      
      {/* Mobile Sticky Bottom Bar (visible only below lg breakpoint) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] lg:hidden">
        <div className="flex gap-3 max-w-7xl mx-auto">
          <Button variant="outline" className="flex-1 gap-2" asChild>
            <a href="tel:07972781688">
              <Phone className="h-4 w-4" />
              Call
            </a>
          </Button>
          <Button className="flex-1 gap-2 bg-[#25D366] text-white hover:bg-[#20bd5a]" asChild>
            <a href="https://wa.me/917972781688" target="_blank" rel="noreferrer">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </main>
  )
}
