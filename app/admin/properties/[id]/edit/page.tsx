"use client"

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { PropertyForm } from '@/components/admin/property-form'
import { Loader2 } from 'lucide-react'

export default function EditPropertyPage() {
  const router = useRouter()
  const { id } = useParams()
  const [property, setProperty] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await fetch(`/api/admin/properties/${id}`)
        if (!res.ok) throw new Error('Failed to load property')
        const data = await res.json()
        
        // Parse DB strings into arrays for form compatibility
        const parsedProperty = {
          ...data,
          gallery: typeof data.gallery === 'string' ? JSON.parse(data.gallery) : data.gallery || [],
          amenities: typeof data.amenities === 'string' ? JSON.parse(data.amenities) : data.amenities || []
        }
        
        setProperty(parsedProperty)
      } catch (err) {
        console.error(err)
        alert('Error loading property data')
        router.push('/admin/properties')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProperty()
    }
  }, [id, router])

  const handleSubmit = async (data: any) => {
    const res = await fetch(`/api/admin/properties/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      const errData = await res.json()
      throw new Error(errData.error || 'Failed to update property')
    }

    router.push('/admin/properties')
    router.refresh()
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <Loader2 className="h-10 w-10 animate-spin text-gold" />
        <p className="text-sm text-muted-foreground">Loading property details...</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Edit Property</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Modify listing details, upload new photos, or adjust configuration.
        </p>
      </div>
      {property && (
        <PropertyForm
          initialData={property}
          onSubmit={handleSubmit}
          submitLabel="Save Changes"
        />
      )}
    </div>
  )
}
