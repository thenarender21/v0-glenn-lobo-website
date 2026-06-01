"use client"

import { useEffect, Suspense } from "react"
import { usePathname, useSearchParams } from "next/navigation"

function Tracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowWithDataLayer = window as any
      windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || []
      
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
      windowWithDataLayer.dataLayer.push({
        event: "pageview",
        page: url,
        title: document.title
      })
    }
  }, [pathname, searchParams])

  return null
}

export function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <Tracker />
    </Suspense>
  )
}
