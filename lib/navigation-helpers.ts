export const PHONE_NUMBER = "07972781688"
export const WHATSAPP_NUMBER = "917972781688"
export const DEFAULT_WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export function pushToDataLayer(event: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
}

/**
 * Handles Call click event: initiates the phone dialer and redirects the current tab to the Call Thank You page.
 */
export function trackCallClick(): void;
export function trackCallClick(router: any, source?: string): void;
export function trackCallClick(router?: any, source?: string): void {
  pushToDataLayer({ event: "call_click" });
  if (router && typeof router.push === "function") {
    if (typeof window !== "undefined") {
      window.location.href = `tel:${PHONE_NUMBER}`
      // Navigate the current window to the call thank-you page
      router.push("/thank-you/call")
    }
  }
}

/**
 * Handles WhatsApp click event: opens WhatsApp chat in a new tab and redirects the current tab to the WhatsApp Thank You page.
 */
export function trackWhatsAppClick(): void;
export function trackWhatsAppClick(router: any, customUrl?: string, source?: string): void;
export function trackWhatsAppClick(router?: any, customUrl?: string, source?: string): void {
  pushToDataLayer({ event: "whatsapp_click" });
  if (router && typeof router.push === "function") {
    if (typeof window !== "undefined") {
      // If customUrl contains the old wa.me prefix with country code 910, replace it with 91
      let targetUrl = customUrl || DEFAULT_WHATSAPP_URL
      targetUrl = targetUrl.replace("wa.me/910", "wa.me/91")

      window.open(targetUrl, "_blank", "noopener,noreferrer")
      // Navigate the current window to the whatsapp thank-you page
      router.push("/thank-you/whatsapp")
    }
  }
}

export type ConversionType = "form" | "whatsapp" | "call" | "site-visit" | "price-sheet" | "callback" | "popup"

/**
 * Handles Form submission success: redirects to the Form Thank You page.
 */
export function trackFormSubmit(conversionType: string, source: string): void;
export function trackFormSubmit(router: any, source?: string, conversionType?: ConversionType): void;
export function trackFormSubmit(first: any, second?: any, third?: any): void {
  if (first && typeof first === "object" && typeof first.push === "function") {
    // Old signature: trackFormSubmit(router, source, conversionType)
    const router = first;
    const source = second || "";
    const conversionType = third || "form";
    pushToDataLayer({ event: "form_submit", conversionType, source });
    if (typeof window !== "undefined") {
      const url = "/thank-you"
      router.push(url)
    }
  } else {
    // New signature: trackFormSubmit(conversionType, source)
    const conversionType = typeof first === "string" ? first : "form";
    const source = typeof second === "string" ? second : "contact_form";
    pushToDataLayer({ event: "form_submit", conversionType, source });
  }
}

