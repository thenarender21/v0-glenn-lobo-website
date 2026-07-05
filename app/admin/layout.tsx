"use client"

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { LogOut, Home, Building2, PlusCircle } from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()

  const isLoginPage = pathname === '/admin/login'

  const handleLogout = async () => {
    await fetch('/api/admin/auth/logout', { method: 'POST' })
    router.push('/admin/login')
    router.refresh()
  }

  if (isLoginPage) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2 font-bold text-foreground text-lg">
                <Home className="h-5 w-5 text-gold" />
                <span>Thakurjee Admin</span>
              </Link>
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  href="/admin/properties"
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    pathname === '/admin/properties' ? 'text-gold' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Building2 className="h-4 w-4" />
                  Properties
                </Link>
                <Link
                  href="/admin/properties/new"
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    pathname === '/admin/properties/new' ? 'text-gold' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <PlusCircle className="h-4 w-4" />
                  Add Property
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 rounded bg-muted px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted/80 transition-colors border border-border cursor-pointer"
              >
                <LogOut className="h-3.5 w-3.5" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        {children}
      </main>
    </div>
  )
}
