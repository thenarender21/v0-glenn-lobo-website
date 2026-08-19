export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* We are omitting the standard Navigation and Footer here to keep the user focused */}
      <main className="relative flex flex-col">{children}</main>
    </div>
  )
}
