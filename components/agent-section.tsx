"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { agentInfo } from "@/lib/properties"
import { Button } from "@/components/ui/button"

interface AgentSectionProps {
  onOpenContact: () => void
}

export function AgentSection({ onOpenContact }: AgentSectionProps) {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={agentInfo.image ? "grid items-center gap-12 lg:grid-cols-2 lg:gap-16" : "max-w-3xl mx-auto text-center"}>
          {agentInfo.image && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src={agentInfo.image}
                  alt={agentInfo.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-lg bg-gold p-6 lg:block">
                <div className="text-center">
                  <p className="text-3xl font-bold text-charcoal">
                    {agentInfo.stats[2].value}
                  </p>
                  <p className="text-sm font-medium text-charcoal/80">
                    {agentInfo.stats[2].label}
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={agentInfo.image ? "" : "flex flex-col items-center"}
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Your Trusted Advisor
            </p>
            <h2 className="text-balance text-3xl font-semibold text-foreground sm:text-4xl">
              {agentInfo.name}
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              {agentInfo.title}
            </p>

            <p className="mt-6 text-pretty leading-relaxed text-foreground/80">
              {agentInfo.bio}
            </p>

            <div className="mt-8 grid w-full grid-cols-3 gap-6 border-y border-border py-8">
              {agentInfo.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold text-gold sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Button
              onClick={onOpenContact}
              size="lg"
              className="mt-8 bg-gold text-charcoal hover:bg-gold-light"
            >
              Schedule a Meeting
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
