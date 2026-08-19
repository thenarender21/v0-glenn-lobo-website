"use client"

import { useEffect } from "react"

const TRACKED_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "gbraid",
  "wbraid",
  "fbclid",
]

function setCookie(name: string, value: string, days = 30) {
  if (typeof document === 'undefined') return
  const date = new Date()
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
  const expires = "; expires=" + date.toUTCString()
  document.cookie = `${name}=${encodeURIComponent(value)}${expires}; path=/; SameSite=Lax`
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null
  const nameEQ = name + "="
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length))
  }
  return null
}

export function UtmTracker() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // 1. Process URL Parameters
    const searchParams = new URLSearchParams(window.location.search)

    TRACKED_PARAMS.forEach((param) => {
      const val = searchParams.get(param)
      if (val) {
        setCookie(param, val, 30)
      }
    })

    // 2. Process Referrer (only if not already stored)
    const storedReferrer = getCookie("initial_referrer")
    if (!storedReferrer) {
      const referrer = document.referrer || "direct"
      // Avoid setting referrer to our own domain
      if (referrer !== "direct" && !referrer.includes(window.location.hostname)) {
        setCookie("initial_referrer", referrer, 30)
      } else if (!referrer || referrer === "direct") {
        setCookie("initial_referrer", "direct", 30)
      }
    }

    // 3. Process Landing Page (only if not already stored)
    const storedLanding = getCookie("landing_page")
    if (!storedLanding) {
      const landing = window.location.pathname + window.location.search
      setCookie("landing_page", landing, 30)
    }
  }, [])

  return null
}
