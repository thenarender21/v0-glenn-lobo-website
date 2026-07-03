"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react"

const galleryCategories = [
  {
    id: "exterior",
    name: "Exterior Views",
    images: [
      { src: "/images/raunak-max-city-2bhk/image_1.jpg", caption: "Premium Tower Exterior Render" },
      { src: "/images/raunak-max-city-2bhk/image_2.jpg", caption: "Township Entrance & Plaza" },
      { src: "/images/evening_view.jpg", caption: "Twilight Exterior Landscape View" },
    ]
  },
  {
    id: "living",
    name: "Living Room",
    images: [
      { src: "/images/raunak-max-city-2bhk/image_3.jpg", caption: "Spacious Premium 2 BHK Living Area" },
      { src: "/images/raunak-max-city-2bhk/image_4.jpg", caption: "Living Area & Adjoining Dining Room" },
    ]
  },
  {
    id: "bedrooms",
    name: "Bedrooms",
    images: [
      { src: "/images/raunak-max-city-2bhk/image_5.jpg", caption: "Master Bedroom with Premium Fittings" },
      { src: "/images/raunak-max-city-2bhk/image_6.jpg", caption: "Kids Bedroom / Dedicated Study Room" },
    ]
  },
  {
    id: "kitchen",
    name: "Kitchen",
    images: [
      { src: "/images/raunak-max-city-2bhk/image_7.jpg", caption: "Modern Semi-Modular Kitchen Setup" },
      { src: "/images/raunak-max-city-2bhk/image_8.jpg", caption: "Kitchen Counter & Utility Balcony Area" },
    ]
  },
  {
    id: "amenities",
    name: "Amenities",
    images: [
      { src: "/images/Swimming_pool_02.jpg", caption: "Luxury Swimming Pool & Deck Area" },
      { src: "/images/Club_house.jpg", caption: "State-of-the-Art Gymnasium & Fitness Center" },
      { src: "/images/children_play_area.jpg", caption: "Kids Safety Play Park" },
    ]
  },
  {
    id: "common",
    name: "Common Areas",
    images: [
      { src: "/images/raunak-max-city-2bhk/image_9.jpg", caption: "Double-Height Lift Lobby & Lounge" },
      { src: "/images/raunak-max-city-2bhk/image_10.jpg", caption: "Rooftop Leisure Deck & Skyline Views" },
      { src: "/images/Cam_03.jpg", caption: "Podium Level Landscaped Lawn" },
    ]
  }
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("exterior")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const activeCategoryData = galleryCategories.find(cat => cat.id === activeCategory) || galleryCategories[0]
  const currentImages = activeCategoryData.images

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const prevSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + currentImages.length) % currentImages.length)
    }
  }

  const nextSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % currentImages.length)
    }
  }

  return (
    <section id="gallery" className="bg-charcoal py-20 sm:py-28 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span
            className="inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(184,148,73,0.12)",
              border: "1px solid rgba(184,148,73,0.35)",
              color: "#e8c97a",
            }}
          >
            Visual Showcase
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight text-white">
            Premium{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#b89449,#e8c97a,#b89449)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Gallery
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/60">
            Take a visual tour through our luxury towers, model apartment interiors, premium amenities, and common spaces.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gold text-charcoal shadow-lg"
                  : "bg-charcoal-light text-white/80 hover:bg-charcoal-light/75 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {currentImages.map((img, idx) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-charcoal-light cursor-pointer shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  sizes="(max-w-700px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="size-10 rounded-full bg-gold/90 text-charcoal flex items-center justify-center shadow-lg transition-transform duration-300 scale-90 group-hover:scale-100">
                    <Maximize2 className="size-5" />
                  </div>
                </div>

                {/* Caption bar */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-charcoal/90 via-charcoal/60 to-transparent">
                  <p className="text-xs font-semibold text-white/90 truncate">{img.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/20"
            >
              <X className="size-6" />
            </button>

            {/* Slider container */}
            <div className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-[16/10] max-h-[75vh] flex items-center justify-center">
              {/* Prev Button */}
              <button
                onClick={prevSlide}
                className="absolute left-4 z-10 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <ChevronLeft className="size-6" />
              </button>

              {/* Slide Image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={currentImages[lightboxIndex].src}
                  alt={currentImages[lightboxIndex].caption}
                  fill
                  priority
                  className="object-contain"
                />
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-4 z-10 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>

            {/* Metadata Bar */}
            <div className="mt-6 text-center max-w-xl">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold bg-gold/10 border border-gold/30 px-2 py-0.5 rounded">
                Category: {activeCategoryData.name} · Slide {lightboxIndex + 1} / {currentImages.length}
              </span>
              <p className="mt-3 text-sm font-semibold text-white/90">{currentImages[lightboxIndex].caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
