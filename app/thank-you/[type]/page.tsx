"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import Link from "next/link"
import { 
  CheckCircle2, 
  MessageCircle, 
  PhoneCall, 
  ArrowLeft, 
  Home, 
  ExternalLink,
  CalendarCheck,
  FileText
} from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"
import { PropertyCard } from "@/components/property-card"
import { useProperties } from "@/components/properties-provider"
import { Button } from "@/components/ui/button"

import { PHONE_NUMBER, DEFAULT_WHATSAPP_URL, ConversionType } from "@/lib/navigation-helpers"

export default function ThankYouPage() {
  const params = useParams()
  const router = useRouter()
  const properties = useProperties()
  
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [leadSource, setLeadSource] = useState("Thank You Page")
  
  const type = (params?.type as ConversionType) || "form"

  const handleOpenContact = (source: string) => {
    setLeadSource(source)
    setContactModalOpen(true)
  }

  // Get a few featured properties to display
  const featuredProperties = properties.slice(0, 3)

  // Configuration based on conversion type
  const configMap = {
    form: {
      icon: <CheckCircle2 className="size-16 text-gold" />,
      title: "Inquiry Received",
      subtitle: "Thank you for choosing Thakurjee Properties.",
      description: "Your details have been successfully recorded. A premium property expert will review your requirements and get in touch with you within the next 24 hours.",
      primaryAction: (
        <Button 
          onClick={() => router.push("/properties")} 
          className="bg-gold text-charcoal hover:bg-gold-light w-full sm:w-auto"
          size="lg"
        >
          Browse Properties
        </Button>
      )
    },
    whatsapp: {
      icon: <MessageCircle className="size-16 text-gold animate-pulse" />,
      title: "Connecting to WhatsApp",
      subtitle: "Opening your chat session with Mukund Thakur.",
      description: "We are redirecting you to WhatsApp. If the chat window did not open automatically, please click the button below to start messaging us directly.",
      primaryAction: (
        <a 
          href={DEFAULT_WHATSAPP_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full sm:w-auto"
        >
          <Button 
            className="bg-emerald-600 text-white hover:bg-emerald-500 w-full flex items-center justify-center gap-2"
            size="lg"
          >
            Start Chat Now
            <ExternalLink className="size-4" />
          </Button>
        </a>
      )
    },
    call: {
      icon: <PhoneCall className="size-16 text-gold animate-bounce" />,
      title: "Initiating Direct Call",
      subtitle: "Connecting you with Thakurjee Properties.",
      description: "If your phone's dialer app did not open automatically, please click the button below to dial our representative directly.",
      primaryAction: (
        <a href={`tel:${PHONE_NUMBER}`} className="w-full sm:w-auto">
          <Button 
            className="bg-gold text-charcoal hover:bg-gold-light w-full flex items-center justify-center gap-2"
            size="lg"
          >
            Call +91 7972781688
            <PhoneCall className="size-4" />
          </Button>
        </a>
      )
    },
    "site-visit": {
      icon: <CalendarCheck className="size-16 text-gold" />,
      title: "Site Visit Scheduled",
      subtitle: "Thank you for scheduling a site visit.",
      description: "Your request has been successfully received. A luxury property advisor will contact you shortly to coordinate the schedule, pick-up arrangements, and specific project viewings.",
      primaryAction: (
        <Button 
          onClick={() => router.push("/properties")} 
          className="bg-gold text-charcoal hover:bg-gold-light w-full sm:w-auto"
          size="lg"
        >
          View Premium Listings
        </Button>
      )
    },
    "price-sheet": {
      icon: <FileText className="size-16 text-gold animate-pulse" />,
      title: "Cost Sheet Requested",
      subtitle: "Cost sheets & payment plans are being prepared.",
      description: "Thank you for your request. The pricing details, floor plans, and current payment schemes are being compiled and will be sent to your phone/WhatsApp shortly.",
      primaryAction: (
        <Button 
          onClick={() => router.push("/properties")} 
          className="bg-gold text-charcoal hover:bg-gold-light w-full sm:w-auto"
          size="lg"
        >
          Browse All Properties
        </Button>
      )
    },
    callback: {
      icon: <PhoneCall className="size-16 text-gold animate-bounce" />,
      title: "Callback Scheduled",
      subtitle: "Our advisor will call you shortly.",
      description: "Your callback request is confirmed. A Thane real estate specialist will dial you within the next 10 minutes to answer any of your questions.",
      primaryAction: (
        <a href={`tel:${PHONE_NUMBER}`} className="w-full sm:w-auto">
          <Button 
            className="bg-gold text-charcoal hover:bg-gold-light w-full flex items-center justify-center gap-2"
            size="lg"
          >
            Call Now: +91 7972781688
            <PhoneCall className="size-4" />
          </Button>
        </a>
      )
    },
    popup: {
      icon: <CheckCircle2 className="size-16 text-gold" />,
      title: "Preferences Registered",
      subtitle: "Thank you for sharing your search details.",
      description: "Your preferred location and budget have been recorded. A property expert specializing in these areas will contact you shortly with a curated list of matching residences.",
      primaryAction: (
        <Button 
          onClick={() => router.push("/properties")} 
          className="bg-gold text-charcoal hover:bg-gold-light w-full sm:w-auto"
          size="lg"
        >
          Browse Properties
        </Button>
      )
    }
  }

  const config = configMap[type] || configMap.form

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation onOpenContact={() => handleOpenContact(`Navigation CTA - Thank You ${type}`)} variant="solid" />
      
      {/* Main thank you message section */}
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-sm flex flex-col items-center"
          >
            <div className="mb-6 p-4 rounded-full bg-gold/5 flex items-center justify-center">
              {config.icon}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
              {config.title}
            </h1>
            
            <p className="text-lg font-medium text-gold mb-6">
              {config.subtitle}
            </p>
            
            <p className="text-muted-foreground text-base max-w-2xl leading-relaxed mb-8">
              {config.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
              {config.primaryAction}
              
              <Link href="/" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  className="w-full border-border hover:bg-muted text-foreground flex items-center justify-center gap-2"
                  size="lg"
                >
                  <Home className="size-4" />
                  Go to Homepage
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Featured Properties showcase */}
          {featuredProperties.length > 0 && (
            <div className="mt-20">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                  Explore Premium Listings in Thane
                </h2>
                <p className="text-muted-foreground mt-2">
                  While we process your request, browse some of our handpicked prestigious properties.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredProperties.map((property, idx) => (
                  <PropertyCard key={property.id} property={property} index={idx} />
                ))}
              </div>
              
              <div className="text-center mt-10">
                <Link href="/properties">
                  <Button variant="link" className="text-gold hover:text-gold-light text-base font-semibold">
                    View all properties <span className="ml-1">→</span>
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer onOpenContact={() => handleOpenContact(`Footer CTA - Thank You ${type}`)} />
      
      <ContactModal
        open={contactModalOpen}
        onOpenChange={setContactModalOpen}
        source={leadSource}
      />
    </div>
  )
}
