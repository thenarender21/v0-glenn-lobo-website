import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifySessionToken } from './lib/auth'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Protect page routes under /admin, except /admin/login
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const sessionCookie = request.cookies.get('admin_session')?.value
    const session = await verifySessionToken(sessionCookie)

    if (!session) {
      // Redirect to admin login page
      const loginUrl = new URL('/admin/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  // 2. Protect API routes under /api/admin, except login/logout
  if (
    pathname.startsWith('/api/admin') &&
    pathname !== '/api/admin/auth/login' &&
    pathname !== '/api/admin/auth/logout'
  ) {
    const sessionCookie = request.cookies.get('admin_session')?.value
    const session = await verifySessionToken(sessionCookie)

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
}
