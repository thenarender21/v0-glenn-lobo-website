import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Script from 'next/script'
import { PropertiesProvider } from '@/components/properties-provider'
import { UtmTracker } from '@/components/utm-tracker'
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
        url: '/icon-light-32x32.webp',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.webp',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.webp',
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
      <body className={`${_geist.className} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N9T7N3D7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <PropertiesProvider properties={properties}>
          <UtmTracker />
          {children}
        </PropertiesProvider>
        <Analytics />
        <SpeedInsights />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5Z0B4JJ70B"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5Z0B4JJ70B');
          `}
        </Script>
        <Script id="gtm" strategy="lazyOnload">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N9T7N3D7');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y0ipmk2yic");
          `}
        </Script>
      </body>
    </html>
  )
}
