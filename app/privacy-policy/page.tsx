"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation onOpenContact={() => {}} variant="solid" />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-stone dark:prose-invert max-w-none bg-card border border-border/50 rounded-2xl p-6 sm:p-10 shadow-sm"
          >
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
              Privacy Policy
            </h1>
            
            <p className="text-muted-foreground text-sm mb-4">
              Last updated: August 20, 2026
            </p>

            <section className="space-y-4 text-foreground/80 leading-relaxed text-sm">
              <p>
                At <strong>Thakurjee Properties</strong>, accessible from thakurjeeproperties.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Thakurjee Properties and how we use it.
              </p>
              
              <p>
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">1. Consent</h2>
              <p>
                By using our website, you hereby consent to our Privacy Policy and agree to its terms.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">2. Information We Collect</h2>
              <p>
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </p>
              <p>
                If you contact us directly or fill out a lead form, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">3. How We Use Your Information</h2>
              <p> We use the information we collect in various ways, including to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li>Send you text messages, WhatsApp updates, or make phone calls to discuss property details</li>
                <li>Find and prevent fraud</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">4. Cookies and Web Beacons</h2>
              <p>
                Like any other website, Thakurjee Properties uses &quot;cookies&quot;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">5. Google DoubleClick DART Cookie</h2>
              <p>
                Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">6. Third Party Privacy Policies</h2>
              <p>
                Thakurjee Properties&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">7. GDPR & CCPA Data Protection Rights</h2>
              <p>
                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the right to access, rectification, erasure, restrict processing, object to processing, and data portability. If you make a request, we have one month to respond to you.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">8. Contact Information</h2>
              <p>
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at:
              </p>
              <address className="not-italic bg-muted/30 p-4 rounded-lg border border-border/30">
                <strong>Thakurjee Properties</strong><br />
                Shop No.-5, JVM Florencia Kavya, Haware City,<br />
                Thane West, Thane, Maharashtra 400615<br />
                Email: contact@thakurjeeproperties.com<br />
                Phone: 07972781688
              </address>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer onOpenContact={() => {}} />
    </div>
  )
}
