"use client"

import { PropertyForm } from '@/components/admin/property-form'
import { useRouter } from 'next/navigation'

export default function NewPropertyPage() {
  const router = useRouter()

  const handleSubmit = async (data: any) => {
    const res = await fetch('/api/admin/properties', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      const errData = await res.json()
      throw new Error(errData.error || 'Failed to create property')
    }

    router.push('/admin/properties')
    router.refresh()
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Add New Property</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Create a new real estate listing. Fill out all features, dimensions, prices, and photos.
        </p>
      </div>
      <PropertyForm onSubmit={handleSubmit} submitLabel="Create Listing" />
    </div>
  )
}
