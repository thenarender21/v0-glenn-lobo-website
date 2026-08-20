"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsPage() {
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
              Terms &amp; Conditions
            </h1>
            
            <p className="text-muted-foreground text-sm mb-4">
              Last updated: August 20, 2026
            </p>

            <section className="space-y-4 text-foreground/80 leading-relaxed text-sm">
              <p>
                Welcome to <strong>Thakurjee Properties</strong>!
              </p>
              
              <p>
                These terms and conditions outline the rules and regulations for the use of Thakurjee Properties&apos;s Website, located at thakurjeeproperties.in.
              </p>
              
              <p>
                By accessing this website we assume you accept these terms and conditions. Do not continue to use Thakurjee Properties if you do not agree to take all of the terms and conditions stated on this page.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">1. Terminology</h2>
              <p>
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company&apos;s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">2. Cookies</h2>
              <p>
                We employ the use of cookies. By accessing Thakurjee Properties, you agreed to use cookies in agreement with the Thakurjee Properties&apos;s Privacy Policy. Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">3. License</h2>
              <p>
                Unless otherwise stated, Thakurjee Properties and/or its licensors own the intellectual property rights for all material on Thakurjee Properties. All intellectual property rights are reserved. You may access this from Thakurjee Properties for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
              <p>You must not:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Republish material from Thakurjee Properties</li>
                <li>Sell, rent or sub-license material from Thakurjee Properties</li>
                <li>Reproduce, duplicate or copy material from Thakurjee Properties</li>
                <li>Redistribute content from Thakurjee Properties</li>
              </ul>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">4. Hyperlinking to our Content</h2>
              <p>
                The following organizations may link to our Website without prior written approval: Government agencies, Search engines, News organizations, and Online directory distributors. No use of Thakurjee Properties&apos;s logo or other artwork will be allowed for linking absent a trademark license agreement.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">5. Disclaimer and Liability</h2>
              <p>
                The information provided on this website is for general informational purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website. Any reliance you place on such information is therefore strictly at your own risk.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">6. Real Estate Specific Disclaimer</h2>
              <p>
                All property prices, carpet areas, details, amenities, configurations, and timelines are indicative and subject to change per builder decisions and RERA guidelines. Potential buyers are advised to independently verify all details, including RERA registration numbers, directly with the developers before making any financial commitments.
              </p>

              <h2 className="text-xl font-semibold text-foreground pt-4 border-t border-border/50">7. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us:
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
