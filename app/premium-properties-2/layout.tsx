export default function LandingLayout2({
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
