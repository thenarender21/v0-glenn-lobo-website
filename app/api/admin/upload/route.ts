import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'
import { verifySessionToken } from '@/lib/auth'
import { cookies } from 'next/headers'

async function checkAuth() {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('admin_session')?.value
  return await verifySessionToken(sessionCookie)
}

export async function POST(request: Request) {
  try {
    const session = await checkAuth()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const blobToken =
      process.env.BLOB_READ_WRITE_TOKEN_READ_WRITE_TOKEN ||
      process.env.BLOB_READ_WRITE_TOKEN

    // 1. If Vercel Blob token is set, upload to Vercel Blob
    if (blobToken) {
      try {
        const { put } = await import('@vercel/blob')
        const blob = await put(file.name, file, { access: 'public', token: blobToken })
        return NextResponse.json({ url: blob.url })
      } catch (err: any) {
        console.error('Vercel Blob upload failed:', err)
        return NextResponse.json(
          { error: 'Vercel Blob upload failed: ' + (err?.message || String(err)) },
          { status: 500 }
        )
      }
    }

    // 2. Local fallback storage under public/uploads (only for local dev)
    if (!process.env.VERCEL) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const uploadDir = join(process.cwd(), 'public', 'uploads')
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true })
      }

      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`
      const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_')
      const fileName = `${uniqueSuffix}-${sanitizedName}`
      const filePath = join(uploadDir, fileName)

      await writeFile(filePath, buffer)
      return NextResponse.json({ url: `/uploads/${fileName}` })
    }

    // On Vercel without token configured - fail clearly instead of trying local write
    return NextResponse.json(
      { error: 'Vercel Blob token is not configured' },
      { status: 500 }
    )
  } catch (error: any) {
    console.error('Upload handler error:', error)
    return NextResponse.json({ error: 'Upload failed: ' + error.message }, { status: 500 })
  }
}
