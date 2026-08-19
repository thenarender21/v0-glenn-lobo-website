import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium 2 BHK Apartments | Spacious Family Homes',
  description: 'Discover premium 2 BHK apartments with modern amenities, spacious layouts, excellent connectivity, and attractive pricing. Book your site visit today.',
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
