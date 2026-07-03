import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium 1 BHK Apartments | Affordable Luxury Homes',
  description: 'Discover premium 1 BHK apartments with modern amenities, excellent connectivity, smart layouts, and attractive pricing. Book your site visit today.',
}

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <main className="relative flex flex-col">{children}</main>
    </div>
  )
}
