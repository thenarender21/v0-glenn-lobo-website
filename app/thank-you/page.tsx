"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CheckCircle2, Home } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useProperties } from "@/components/properties-provider"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  const properties = useProperties()
  const featuredProperties = properties.slice(0, 3)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation onOpenContact={() => {}} variant="solid" />
      
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
              <CheckCircle2 className="size-16 text-gold" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3">
              Inquiry Received
            </h1>
            
            <p className="text-lg font-medium text-gold mb-6">
              Thank you for choosing Thakurjee Properties.
            </p>
            
            <p className="text-muted-foreground text-base max-w-2xl leading-relaxed mb-8">
              Thank you for reaching out! We will contact you shortly. Our premium property expert will review your requirements and get in touch with you within the next 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
              <Link href="/properties" className="w-full sm:w-auto">
                <Button className="bg-gold text-charcoal hover:bg-gold-light w-full" size="lg">
                  Browse Properties
                </Button>
              </Link>
              
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

      <Footer onOpenContact={() => {}} />
    </div>
  )
}
