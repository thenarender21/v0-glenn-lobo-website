import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { LeadCapturePopup } from '@/components/lead-capture-popup'
import { PropertiesProvider } from '@/components/properties-provider'
import { getProperties } from '@/lib/properties'
import './globals.css'

export const dynamic = 'force-dynamic'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Thakurjee Properties | Real Estate in Thane',
  description: 'Experience personalized service and access to Thane\'s most prestigious addresses with Thakurjee Properties, your trusted real estate partner.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const properties = await getProperties()
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <PropertiesProvider properties={properties}>
          {children}
          <LeadCapturePopup />
        </PropertiesProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
