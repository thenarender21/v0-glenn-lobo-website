import { NextResponse } from 'next/server'
import { createSessionToken } from '@/lib/auth'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@thakurjeeproperties.in'
    const adminPassword = process.env.ADMIN_PASSWORD || 'password123'

    if (email === adminEmail && password === adminPassword) {
      const token = await createSessionToken(email)
      
      const response = NextResponse.json({ success: true })
      
      response.cookies.set({
        name: 'admin_session',
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
      })
      
      return response
    }

    return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
  } catch (e) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
