"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

const amenities = [
  {
    title: "Swimming Pool",
    description: "Luxury leisure pool with premium sun deck.",
    image: "/images/Swimming_pool_02.jpg",
    icon: "✦",
  },
  {
    title: "Fitness Center & Gym",
    description: "State-of-the-art gym for your active lifestyle.",
    image: "/images/Club_house.jpg",
    icon: "✦",
  },
  {
    title: "Kids Play Area",
    description: "Safe, vibrant outdoor play spaces for children.",
    image: "/images/children_play_area.jpg",
    icon: "✦",
  },
  {
    title: "Rooftop Lounge & BBQ",
    description: "Premium social spaces with open-sky skyline views.",
    image: "/images/terrace_view_02.jpg",
    icon: "✦",
  },
  {
    title: "Jogging & Sports Track",
    description: "Dedicated outdoor track for running and sports.",
    image: "/images/Cricket_Cam.jpg",
    icon: "✦",
  },
  {
    title: "Grand Clubhouse",
    description: "Iconic clubhouse at the heart of the community.",
    image: "/images/Cam_03.jpg",
    icon: "✦",
  },
  {
    title: "Tropical Garden & Green Spaces",
    description: "Lush nature-inspired zones for peace and relaxation.",
    image: "/images/evening_view.jpg",
    icon: "✦",
  },
  {
    title: "Indoor Games Zone",
    description: "Fun-filled indoor activities for the whole family.",
    image: "/images/Night_cam.jpg",
    icon: "✦",
  },
]

// Only loop through these 8, do not duplicate/repeat them
const loopedAmenities = amenities

export function PremiumAmenities() {
  const trackRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number | null>(null)
  const posRef = useRef(0)
  const isPausedRef = useRef(false)
  const isDraggingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartPosRef = useRef(0)

  // Card width + gap (px) — matches CSS
  const CARD_W = 300
  const GAP = 24
  const STEP = CARD_W + GAP
  const TOTAL_ORIGINAL = amenities.length * STEP

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const animate = () => {
      if (!isPausedRef.current && !isDraggingRef.current) {
        posRef.current += 0.6
        // Reset to start seamlessly when halfway through duplicated list
        if (posRef.current >= TOTAL_ORIGINAL) {
          posRef.current = 0
        }
        track.style.transform = `translateX(-${posRef.current}px)`
      }
      animRef.current = requestAnimationFrame(animate)
    }

    animRef.current = requestAnimationFrame(animate)
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [TOTAL_ORIGINAL])

  // Mouse drag support
  const onMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true
    dragStartXRef.current = e.clientX
    dragStartPosRef.current = posRef.current
  }
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return
    const delta = dragStartXRef.current - e.clientX
    let newPos = dragStartPosRef.current + delta
    newPos = Math.max(0, Math.min(newPos, TOTAL_ORIGINAL - 1))
    posRef.current = newPos
    if (trackRef.current) trackRef.current.style.transform = `translateX(-${posRef.current}px)`
  }
  const onMouseUp = () => { isDraggingRef.current = false }

  // Touch support
  const onTouchStart = (e: React.TouchEvent) => {
    isDraggingRef.current = true
    dragStartXRef.current = e.touches[0].clientX
    dragStartPosRef.current = posRef.current
  }
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current) return
    const delta = dragStartXRef.current - e.touches[0].clientX
    let newPos = dragStartPosRef.current + delta
    newPos = Math.max(0, Math.min(newPos, TOTAL_ORIGINAL - 1))
    posRef.current = newPos
    if (trackRef.current) trackRef.current.style.transform = `translateX(-${posRef.current}px)`
  }
  const onTouchEnd = () => { isDraggingRef.current = false }

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-28"
      style={{
        background: "linear-gradient(160deg, #0a0a0a 0%, #111008 40%, #0d0d0d 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(184,148,73,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(184,148,73,0.12)",
              border: "1px solid rgba(184,148,73,0.35)",
              color: "#e8c97a",
            }}
          >
            Luxury Lifestyle
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Luxury Lifestyle{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#b89449,#e8c97a,#b89449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Amenities
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: "rgba(245,245,235,0.6)" }}>
            Experience premium living with thoughtfully designed amenities for comfort, wellness, entertainment, and family lifestyle.
          </p>
        </div>
      </div>

      {/* Carousel Viewport */}
      <div
        className="relative select-none cursor-grab active:cursor-grabbing"
        style={{ overflow: "hidden" }}
        onMouseEnter={() => { isPausedRef.current = true }}
        onMouseLeave={() => { isPausedRef.current = false; isDraggingRef.current = false }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Left / Right fade masks */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
          style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }}
        />

        {/* Scrolling Track */}
        <div
          ref={trackRef}
          className="flex will-change-transform py-4"
          style={{ gap: `${GAP}px`, paddingLeft: "48px", paddingRight: "48px" }}
        >
          {loopedAmenities.map((amenity, idx) => (
            <div
              key={idx}
              className="group relative flex-shrink-0 overflow-hidden rounded-2xl"
              style={{
                width: `${CARD_W}px`,
                height: "380px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(184,148,73,0.18)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.45)",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = "rgba(184,148,73,0.55)"
                el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(184,148,73,0.3)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.borderColor = "rgba(184,148,73,0.18)"
                el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.45)"
              }}
            >
              {/* Image with zoom */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="300px"
                  draggable={false}
                />
              </div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,4,2,0.92) 0%, rgba(5,4,2,0.55) 45%, rgba(5,4,2,0.1) 100%)",
                }}
              />

              {/* Gold top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: "linear-gradient(90deg, transparent, #e8c97a, transparent)" }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                {/* Icon badge */}
                <div
                  className="mb-3 flex h-8 w-8 items-center justify-center rounded-full text-xs"
                  style={{
                    background: "rgba(184,148,73,0.15)",
                    border: "1px solid rgba(184,148,73,0.4)",
                    color: "#e8c97a",
                  }}
                >
                  {amenity.icon}
                </div>
                <h3 className="text-base font-bold text-white leading-snug mb-1.5">
                  {amenity.title}
                </h3>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(245,235,210,0.65)" }}
                >
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 mt-14">
        <div
          className="rounded-3xl overflow-hidden text-center px-8 py-12 sm:px-16"
          style={{
            background: "linear-gradient(135deg, #0f0f0f 0%, #1a1508 50%, #0f0f0f 100%)",
            border: "1px solid rgba(184,148,73,0.28)",
          }}
        >
          {/* Glow */}
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(184,148,73,0.15) 0%, transparent 70%)",
            }}
          />
          <span
            className="relative inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(184,148,73,0.12)",
              border: "1px solid rgba(184,148,73,0.4)",
              color: "#e8c97a",
            }}
          >
            Raunak Maximum City · Ghodbunder Road, Thane
          </span>
          <h3 className="relative text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
            Ready to Experience{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#b89449,#e8c97a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Luxury Living?
            </span>
          </h3>
          <p className="relative max-w-xl mx-auto text-sm sm:text-base leading-relaxed mb-8" style={{ color: "rgba(245,235,210,0.6)" }}>
            Schedule a free site visit today and see these world-class amenities in person.
          </p>
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToForm}
              className="h-12 px-8 font-bold text-sm gap-2 shadow-lg transition-all hover:scale-105 hover:brightness-110"
              style={{ background: "linear-gradient(90deg,#b89449,#e8c97a)", color: "#0f0f0f" }}
            >
              Schedule Site Visit
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              onClick={scrollToForm}
              variant="outline"
              className="h-12 px-8 font-semibold text-sm gap-2 transition-all hover:scale-105 hover:bg-white/5"
              style={{ borderColor: "rgba(184,148,73,0.5)", color: "#b89449" }}
            >
              <Download className="h-4 w-4" />
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
