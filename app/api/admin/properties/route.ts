import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { revalidatePath } from 'next/cache'
import { verifySessionToken } from '@/lib/auth'
import { cookies } from 'next/headers'

async function checkAuth() {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('admin_session')?.value
  return await verifySessionToken(sessionCookie)
}

export async function GET() {
  try {
    const properties = await prisma.property.findMany({
      orderBy: { createdAt: 'desc' },
    })
    return NextResponse.json(properties)
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to fetch properties: ' + error.message }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await checkAuth()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const data = await request.json()
    
    // Auto-generate slug if not provided, or clean it up
    let slug = data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    if (!slug) {
      slug = 'property-' + Date.now()
    }

    // Check for unique slug
    let existing = await prisma.property.findUnique({ where: { slug } })
    let count = 1
    let uniqueSlug = slug
    while (existing) {
      uniqueSlug = `${slug}-${count}`
      existing = await prisma.property.findUnique({ where: { slug: uniqueSlug } })
      count++
    }

    const property = await prisma.property.create({
      data: {
        title: data.title,
        slug: uniqueSlug,
        bhkType: data.bhkType,
        status: data.status,
        priceVal: parseFloat(data.priceVal) || 0,
        priceStr: data.priceStr,
        location: data.location,
        description: data.description,
        beds: parseInt(data.beds, 10) || 1,
        baths: parseInt(data.baths, 10) || 1,
        sqft: parseInt(data.sqft, 10) || 0,
        floor: parseInt(data.floor, 10) || 1,
        age: data.age || '',
        image: data.image,
        gallery: JSON.stringify(data.gallery || []),
        amenities: JSON.stringify(data.amenities || []),
        featured: !!data.featured,
      },
    })

    // Revalidate public pages
    revalidatePath('/')
    revalidatePath('/properties')
    
    return NextResponse.json(property)
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to create property: ' + error.message }, { status: 500 })
  }
}
