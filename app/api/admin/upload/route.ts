import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    // 1. If Vercel Blob token is set, upload to Vercel Blob
    if (process.env.BLOB_READ_WRITE_TOKEN) {
      try {
        const { put } = await import('@vercel/blob')
        const blob = await put(file.name, file, { access: 'public' })
        return NextResponse.json({ url: blob.url })
      } catch (err) {
        console.error('Vercel Blob upload failed, falling back to local storage', err)
      }
    }

    // 2. Local fallback storage under public/uploads
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
  } catch (error: any) {
    console.error('Upload handler error:', error)
    return NextResponse.json({ error: 'Upload failed: ' + error.message }, { status: 500 })
  }
}
