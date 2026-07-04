import { sendGAEvent } from '@next/third-parties/google'

export const PHONE_NUMBER = "07972781688"
export const WHATSAPP_NUMBER = "917972781688"
export const DEFAULT_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

/**
 * Pushes click tracking data to GTM dataLayer and GA4 if available.
 */
function pushToDataLayer(event: string, type: string, source?: string) {
  if (typeof window !== "undefined") {
    // 1. GTM DataLayer
    const windowWithDataLayer = window as any
    windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || []
    windowWithDataLayer.dataLayer.push({
      event: event,
      cta_type: type,
      cta_source: source || "unknown",
      timestamp: new Date().toISOString()
    })

    // 2. Explicit GA4 Events (via @next/third-parties/google)
    if (event === "cta_click") {
      // General CTA click event
      sendGAEvent({
        event: "cta_click",
        cta_type: type,
        cta_source: source || "unknown"
      })
      // Specific conversion-friendly click event
      sendGAEvent({
        event: `${type}_click`,
        cta_source: source || "unknown"
      })
    } else if (event === "form_success") {
      // General form success event
      sendGAEvent({
        event: "form_success",
        form_type: type,
        form_source: source || "unknown"
      })
      // Standard GA4 recommended lead generation event
      sendGAEvent({
        event: "generate_lead",
        lead_type: type,
        lead_source: source || "unknown"
      })
    }
  }
}

/**
 * Handles Call click event: initiates the phone dialer and redirects the current tab to the Call Thank You page.
 */
export function trackCallClick(router: { push: (url: string) => void }, source?: string) {
  if (typeof window !== "undefined") {
    pushToDataLayer("cta_click", "call", source)
    window.location.href = `tel:${PHONE_NUMBER}`
    // Navigate the current window to the call thank-you page
    router.push("/thank-you/call")
  }
}

/**
 * Handles WhatsApp click event: opens WhatsApp chat in a new tab and redirects the current tab to the WhatsApp Thank You page.
 */
export function trackWhatsAppClick(
  router: { push: (url: string) => void },
  customUrl?: string,
  source?: string
) {
  if (typeof window !== "undefined") {
    pushToDataLayer("cta_click", "whatsapp", source)
    
    // If customUrl contains the old wa.me prefix with country code 910, replace it with 91
    let targetUrl = customUrl || DEFAULT_WHATSAPP_URL
    targetUrl = targetUrl.replace("wa.me/910", "wa.me/91")

    window.open(targetUrl, "_blank", "noopener,noreferrer")
    // Navigate the current window to the whatsapp thank-you page
    router.push("/thank-you/whatsapp")
  }
}

export type ConversionType = "form" | "whatsapp" | "call" | "site-visit" | "price-sheet" | "callback" | "popup"

/**
 * Handles Form submission success: redirects to the Form Thank You page.
 */
export function trackFormSubmit(
  router: { push: (url: string) => void },
  source?: string,
  conversionType: ConversionType = "form"
) {
  if (typeof window !== "undefined") {
    pushToDataLayer("form_success", conversionType, source)
    const url = `/thank-you/${conversionType}`
    router.push(url)
  }
}

