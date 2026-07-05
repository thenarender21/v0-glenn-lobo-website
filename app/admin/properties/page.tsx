"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Edit2, Trash2, Plus, Star, Search, AlertTriangle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Property {
  id: string
  title: string
  slug: string
  bhkType: string
  status: string
  priceStr: string
  priceVal: number
  location: string
  image: string
  featured: boolean
}

export default function AdminPropertiesPage() {
  const [properties, setProperties] = useState<Property[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [deleting, setDeleting] = useState(false)

  const fetchProperties = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/admin/properties')
      if (!res.ok) throw new Error('Failed to fetch')
      const data = await res.json()
      setProperties(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProperties()
  }, [])

  const handleDelete = async () => {
    if (!deleteId) return
    setDeleting(true)
    try {
      const res = await fetch(`/api/admin/properties/${deleteId}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Failed to delete')
      
      setProperties(properties.filter((p) => p.id !== deleteId))
      setDeleteId(null)
    } catch (err: any) {
      alert('Error deleting property: ' + err.message)
    } finally {
      setDeleting(false)
    }
  }

  const filteredProperties = properties.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Properties</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Manage your real estate listings, add new flats, or edit details.
          </p>
        </div>
        <Button asChild className="bg-gold text-charcoal hover:bg-gold-light py-5 font-semibold cursor-pointer">
          <Link href="/admin/properties/new" className="flex items-center gap-1">
            <Plus className="h-4 w-4" />
            Add Property
          </Link>
        </Button>
      </div>

      <div className="flex items-center gap-2 max-w-md bg-card border border-border rounded-md px-3 py-2 shadow-sm">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Filter by title or location..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0 h-auto bg-transparent text-sm"
        />
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <Loader2 className="h-10 w-10 animate-spin text-gold" />
          <p className="text-sm text-muted-foreground">Loading properties...</p>
        </div>
      ) : filteredProperties.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-card p-12 text-center">
          <p className="text-base font-semibold text-foreground">No properties found</p>
          <p className="text-sm text-muted-foreground mt-1">
            {searchQuery ? 'Try adjusting your search query.' : 'Get started by adding your first listing.'}
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border bg-card shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-sm font-semibold text-foreground">
                <th className="p-4">Property</th>
                <th className="p-4">BHK</th>
                <th className="p-4">Status</th>
                <th className="p-4">Price</th>
                <th className="p-4">Location</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {filteredProperties.map((property) => (
                <tr key={property.id} className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 flex items-center gap-3">
                    <div className="relative h-12 w-16 overflow-hidden rounded border border-border bg-muted flex-shrink-0">
                      <Image
                        src={property.image || 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=200&q=80'}
                        alt={property.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground flex items-center gap-1.5">
                        {property.title}
                        {property.featured && (
                          <span title="Featured">
                            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono">/{property.slug}</div>
                    </div>
                  </td>
                  <td className="p-4 text-foreground">{property.bhkType}</td>
                  <td className="p-4">
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${
                        property.status === 'Rent'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                      }`}
                    >
                      For {property.status}
                    </span>
                  </td>
                  <td className="p-4 font-medium text-foreground">{property.priceStr}</td>
                  <td className="p-4 text-muted-foreground">{property.location}</td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button asChild size="icon" variant="outline" className="h-8 w-8 cursor-pointer">
                        <Link href={`/admin/properties/${property.id}/edit`}>
                          <Edit2 className="h-3.5 w-3.5" />
                          <span className="sr-only">Edit</span>
                        </Link>
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => setDeleteId(property.id)}
                        className="h-8 w-8 text-destructive hover:bg-destructive/10 cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px]">
          <div className="w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Confirm Deletion</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Are you sure you want to delete this property listing? This action is permanent and cannot be undone.
            </p>
            <div className="mt-6 flex justify-end gap-3">
              <Button
                variant="outline"
                disabled={deleting}
                onClick={() => setDeleteId(null)}
                className="cursor-pointer"
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                disabled={deleting}
                onClick={handleDelete}
                className="bg-destructive hover:bg-destructive/90 cursor-pointer"
              >
                {deleting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Deleting...
                  </>
                ) : (
                  'Delete Property'
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
