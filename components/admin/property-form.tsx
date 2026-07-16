"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Loader2, Upload, X, Check, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const standardAmenities = [
  "Gymnasium",
  "Swimming Pool",
  "Covered Parking",
  "24/7 Security",
  "Power Backup",
  "Clubhouse",
  "Children's Play Area",
  "Lift",
  "Intercom",
  "Vastu Compliant"
]

interface PropertyFormData {
  id?: string
  title: string
  slug: string
  bhkType: string
  status: string
  priceVal: number
  priceStr: string
  location: string
  description: string
  beds: number
  baths: number
  sqft: number
  floor: number
  age: string
  image: string
  gallery: string[]
  amenities: string[]
  featured: boolean
}

interface PropertyFormProps {
  initialData?: PropertyFormData
  onSubmit: (data: PropertyFormData) => Promise<void>
  submitLabel: string
}

export function PropertyForm({ initialData, onSubmit, submitLabel }: PropertyFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [slugTouched, setSlugTouched] = useState(false)

  const [formData, setFormData] = useState<PropertyFormData>({
    title: '',
    slug: '',
    bhkType: '1 BHK',
    status: 'Sell',
    priceVal: 0,
    priceStr: '',
    location: '',
    description: '',
    beds: 1,
    baths: 1,
    sqft: 0,
    floor: 1,
    age: '',
    image: '',
    gallery: [],
    amenities: [],
    featured: false
  })

  useEffect(() => {
    if (initialData) {
      setFormData(initialData)
      setSlugTouched(true)
    }
  }, [initialData])

  const slugify = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  }

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    setFormData(prev => {
      const updated: PropertyFormData = { ...prev, title }
      if (!slugTouched) {
        updated.slug = slugify(title)
      }
      return updated
    })
  }

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSlugTouched(true)
    setFormData(prev => ({ ...prev, slug: slugify(e.target.value) }))
  }

  const handleSingleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setLoading(true)
    const uploadData = new FormData()
    uploadData.append('file', file)

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: uploadData
      })
      if (!res.ok) throw new Error('Upload failed')
      const data = await res.json()
      setFormData(prev => ({ ...prev, image: data.url }))
    } catch (err: any) {
      alert('Image upload failed: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setLoading(true)
    const urls: string[] = []

    try {
      for (let i = 0; i < files.length; i++) {
        const uploadData = new FormData()
        uploadData.append('file', files[i])
        const res = await fetch('/api/admin/upload', {
          method: 'POST',
          body: uploadData
        })
        if (res.ok) {
          const data = await res.json()
          urls.push(data.url)
        }
      }
      setFormData(prev => ({
        ...prev,
        gallery: [...prev.gallery, ...urls]
      }))
    } catch (err: any) {
      alert('Gallery upload failed: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  const removeGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index)
    }))
  }

  const handleAmenityChange = (amenity: string) => {
    setFormData(prev => {
      const amenities = prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
      return { ...prev, amenities }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.image) {
      alert('Please upload a primary image for the property.')
      return
    }
    setLoading(true)
    try {
      await onSubmit(formData)
    } catch (err: any) {
      alert('Failed to submit form: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title">Property Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={handleTitleChange}
            placeholder="e.g. Raunak 108 – Premium 1 BHK Smart Home"
            required
            disabled={loading}
          />
        </div>

        {/* Slug */}
        <div className="space-y-2">
          <Label htmlFor="slug">Slug (URL identifier)</Label>
          <Input
            id="slug"
            value={formData.slug}
            onChange={handleSlugChange}
            placeholder="e.g. raunak-108"
            required
            disabled={loading}
          />
          <p className="text-xs text-muted-foreground">
            Auto-generated from title. Live URL will be: /properties/{formData.slug || 'slug'}
          </p>
        </div>

        {/* BHK Type */}
        <div className="space-y-2">
          <Label htmlFor="bhkType">BHK Type</Label>
          <select
            id="bhkType"
            value={formData.bhkType}
            onChange={e => setFormData(prev => ({ ...prev, bhkType: e.target.value }))}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
            disabled={loading}
          >
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
          </select>
        </div>

        {/* Status */}
        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <select
            id="status"
            value={formData.status}
            onChange={e => setFormData(prev => ({ ...prev, status: e.target.value }))}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
            disabled={loading}
          >
            <option value="Sell">For Sell</option>
            <option value="Rent">For Rent</option>
          </select>
        </div>

        {/* Price Numeric */}
        <div className="space-y-2">
          <Label htmlFor="priceVal">Price Value (for sorting/numeric sorting)</Label>
          <Input
            id="priceVal"
            type="number"
            value={formData.priceVal || ''}
            onChange={e => setFormData(prev => ({ ...prev, priceVal: parseFloat(e.target.value) || 0 }))}
            placeholder="e.g. 6700000 or 45000"
            required
            disabled={loading}
          />
        </div>

        {/* Price Display String */}
        <div className="space-y-2">
          <Label htmlFor="priceStr">Price Display Text</Label>
          <Input
            id="priceStr"
            value={formData.priceStr}
            onChange={e => setFormData(prev => ({ ...prev, priceStr: e.target.value }))}
            placeholder="e.g. ₹67 Lakhs or ₹45,000 / mo"
            required
            disabled={loading}
          />
        </div>

        {/* Location */}
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={e => setFormData(prev => ({ ...prev, location: e.target.value }))}
            placeholder="e.g. Kasarvadavali, Thane"
            required
            disabled={loading}
          />
        </div>

        {/* Floor */}
        <div className="space-y-2">
          <Label htmlFor="floor">Floor Number</Label>
          <Input
            id="floor"
            type="number"
            value={formData.floor || ''}
            onChange={e => setFormData(prev => ({ ...prev, floor: parseInt(e.target.value, 10) || 1 }))}
            placeholder="e.g. 25"
            required
            disabled={loading}
          />
        </div>

        {/* Beds */}
        <div className="space-y-2">
          <Label htmlFor="beds">Beds</Label>
          <Input
            id="beds"
            type="number"
            value={formData.beds || ''}
            onChange={e => setFormData(prev => ({ ...prev, beds: parseInt(e.target.value, 10) || 1 }))}
            placeholder="e.g. 1"
            required
            disabled={loading}
          />
        </div>

        {/* Baths */}
        <div className="space-y-2">
          <Label htmlFor="baths">Baths</Label>
          <Input
            id="baths"
            type="number"
            value={formData.baths || ''}
            onChange={e => setFormData(prev => ({ ...prev, baths: parseInt(e.target.value, 10) || 1 }))}
            placeholder="e.g. 1"
            required
            disabled={loading}
          />
        </div>

        {/* Sqft */}
        <div className="space-y-2">
          <Label htmlFor="sqft">Sqft Area</Label>
          <Input
            id="sqft"
            type="number"
            value={formData.sqft || ''}
            onChange={e => setFormData(prev => ({ ...prev, sqft: parseInt(e.target.value, 10) || 0 }))}
            placeholder="e.g. 410"
            required
            disabled={loading}
          />
        </div>

        {/* Age */}
        <div className="space-y-2">
          <Label htmlFor="age">Age of Property / Construction Stage</Label>
          <Input
            id="age"
            value={formData.age}
            onChange={e => setFormData(prev => ({ ...prev, age: e.target.value }))}
            placeholder="e.g. New Launch, Ready to Move, 0-5 Years"
            required
            disabled={loading}
          />
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
          placeholder="Enter a descriptive overview of the property..."
          rows={5}
          required
          disabled={loading}
        />
      </div>

      {/* Image Upload */}
      <div className="grid gap-6 md:grid-cols-2 border-t border-border pt-6">
        {/* Primary Image */}
        <div className="space-y-4">
          <Label>Primary Image</Label>
          <div className="flex flex-col gap-4">
            {formData.image ? (
              <div className="relative aspect-[4/3] w-full max-w-sm overflow-hidden rounded-md border border-border">
                <Image
                  src={formData.image}
                  alt="Primary Property Image"
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, image: '' }))}
                  className="absolute top-2 right-2 rounded-full bg-black/60 p-1 text-white hover:bg-black/80 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <div className="flex aspect-[4/3] w-full max-w-sm flex-col items-center justify-center rounded-md border-2 border-dashed border-border bg-muted/30 text-center p-6">
                <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                <span className="text-sm font-medium text-foreground">Upload main property photo</span>
                <span className="text-xs text-muted-foreground mt-1">PNG, JPG, WEBP up to 5MB</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSingleImageUpload}
                  className="hidden"
                  id="primary-image-file"
                  disabled={loading}
                />
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  className="mt-4 cursor-pointer"
                  asChild
                >
                  <label htmlFor="primary-image-file">Choose File</label>
                </Button>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Images */}
        <div className="space-y-4">
          <Label>Gallery Images</Label>
          <div className="grid gap-4">
            <div className="flex flex-wrap gap-3">
              {formData.gallery.map((url, idx) => (
                <div key={idx} className="relative h-20 w-28 overflow-hidden rounded border border-border bg-muted">
                  <Image
                    src={url}
                    alt={`Gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removeGalleryImage(idx)}
                    className="absolute top-1 right-1 rounded-full bg-black/70 p-0.5 text-white hover:bg-black/90 transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              <div className="relative flex h-20 w-28 flex-col items-center justify-center rounded border-2 border-dashed border-border bg-muted/20 text-center cursor-pointer hover:bg-muted/40 transition-colors">
                <Upload className="h-4 w-4 text-muted-foreground mb-1" />
                <span className="text-[10px] text-muted-foreground">Add photo</span>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleGalleryUpload}
                  className="hidden"
                  id="gallery-images-file"
                  disabled={loading}
                />
                <label htmlFor="gallery-images-file" className="absolute inset-0 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured checkbox */}
      <div className="flex items-center gap-3 border-t border-border pt-6">
        <button
          type="button"
          onClick={() => setFormData(prev => ({ ...prev, featured: !prev.featured }))}
          className={`flex h-6 w-6 items-center justify-center rounded border transition-colors cursor-pointer ${
            formData.featured
              ? 'bg-gold border-gold text-charcoal'
              : 'border-border bg-background'
          }`}
          disabled={loading}
        >
          {formData.featured && <Check className="h-4 w-4 stroke-[3px]" />}
        </button>
        <div>
          <Label
            onClick={() => setFormData(prev => ({ ...prev, featured: !prev.featured }))}
            className="flex items-center gap-1.5 cursor-pointer text-sm font-semibold select-none"
          >
            <Star className={`h-4 w-4 ${formData.featured ? 'fill-gold text-gold' : 'text-muted-foreground'}`} />
            Feature on Homepage Showcase
          </Label>
          <p className="text-xs text-muted-foreground mt-0.5">
            If selected, this property will appear in the premium showcase on the landing pages.
          </p>
        </div>
      </div>

      {/* Amenities checkboxes */}
      <div className="border-t border-border pt-6 space-y-3">
        <div>
          <Label className="text-base font-semibold">Amenities</Label>
          <p className="text-xs text-muted-foreground mt-0.5">
            Select standard amenities offered by this residence.
          </p>
        </div>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {standardAmenities.map(amenity => {
            const isChecked = formData.amenities.includes(amenity)
            return (
              <button
                type="button"
                key={amenity}
                onClick={() => handleAmenityChange(amenity)}
                className={`flex items-center gap-2 rounded border px-3 py-2 text-xs font-medium transition-colors cursor-pointer select-none ${
                  isChecked
                    ? 'bg-gold/10 border-gold text-gold'
                    : 'border-border bg-background text-muted-foreground hover:text-foreground'
                }`}
                disabled={loading}
              >
                <div className={`flex h-4 w-4 items-center justify-center rounded border transition-colors ${
                  isChecked ? 'bg-gold border-gold text-charcoal' : 'border-border bg-background'
                }`}>
                  {isChecked && <Check className="h-3 w-3 stroke-[3px]" />}
                </div>
                <span>{amenity}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Submit / Cancel */}
      <div className="flex items-center justify-end gap-4 border-t border-border pt-6">
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push('/admin/properties')}
          disabled={loading}
          className="cursor-pointer"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className="bg-gold text-charcoal hover:bg-gold-light py-5 px-6 font-semibold cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            submitLabel
          )}
        </Button>
      </div>
    </form>
  )
}
