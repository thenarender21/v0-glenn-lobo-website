import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { verifySessionToken } from '@/lib/auth'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

async function checkAuth() {
  const cookieStore = await cookies()
  const sessionCookie = cookieStore.get('admin_session')?.value
  return await verifySessionToken(sessionCookie)
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await checkAuth()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const property = await prisma.property.findFirst({
      where: {
        OR: [
          { id },
          { slug: id }
        ]
      }
    })

    if (!property) {
      return NextResponse.json({ error: 'Property not found' }, { status: 404 })
    }

    return NextResponse.json(property)
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to fetch property: ' + error.message }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await checkAuth()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params
    const data = await request.json()

    // Find the property to ensure it exists
    const existingProperty = await prisma.property.findUnique({
      where: { id }
    })

    if (!existingProperty) {
      return NextResponse.json({ error: 'Property not found' }, { status: 404 })
    }

    // Clean up slug if edited
    let slug = data.slug || data.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
    if (!slug) {
      slug = 'property-' + Date.now()
    }

    // Check for unique slug (excluding this property)
    if (slug !== existingProperty.slug) {
      let existingSlugOwner = await prisma.property.findUnique({ where: { slug } })
      let count = 1
      let uniqueSlug = slug
      while (existingSlugOwner) {
        uniqueSlug = `${slug}-${count}`
        existingSlugOwner = await prisma.property.findUnique({ where: { slug: uniqueSlug } })
        count++
      }
      slug = uniqueSlug
    }

    const updated = await prisma.property.update({
      where: { id },
      data: {
        title: data.title,
        slug,
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

    return NextResponse.json(updated)
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to update property: ' + error.message }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await checkAuth()
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params

    await prisma.property.delete({
      where: { id }
    })

    // Revalidate public pages
    revalidatePath('/')
    revalidatePath('/properties')

    return NextResponse.json({ success: true })
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to delete property: ' + error.message }, { status: 500 })
  }
}
