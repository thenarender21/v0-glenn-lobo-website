export type PropertyType = "Modern" | "Heritage" | "Coastal"

export interface Property {
  id: string
  title: string
  type: PropertyType
  price: string
  location: string
  image: string
  description: string
  beds: number
  baths: number
  sqft: number
}

export const properties: Property[] = [
  {
    id: "1",
    title: "The Obsidian Estate",
    type: "Modern",
    price: "$12,500,000",
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    description: "A striking modern masterpiece featuring floor-to-ceiling windows and panoramic city views.",
    beds: 6,
    baths: 8,
    sqft: 12500,
  },
  {
    id: "2",
    title: "Villa Serenità",
    type: "Heritage",
    price: "$8,900,000",
    location: "Pacific Palisades, CA",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description: "A timeless Mediterranean estate with meticulously restored architectural details.",
    beds: 5,
    baths: 6,
    sqft: 9800,
  },
  {
    id: "3",
    title: "Azure Point Residence",
    type: "Coastal",
    price: "$15,750,000",
    location: "Malibu, CA",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    description: "Breathtaking oceanfront property with private beach access and infinity pool.",
    beds: 7,
    baths: 9,
    sqft: 14200,
  },
  {
    id: "4",
    title: "The Glass Pavilion",
    type: "Modern",
    price: "$18,200,000",
    location: "Bel Air, CA",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "An architectural triumph of glass and steel, seamlessly blending indoor and outdoor living.",
    beds: 8,
    baths: 10,
    sqft: 16800,
  },
  {
    id: "5",
    title: "Château Lumière",
    type: "Heritage",
    price: "$22,500,000",
    location: "Holmby Hills, CA",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    description: "A grand French-inspired estate with manicured gardens and a historic wine cellar.",
    beds: 9,
    baths: 12,
    sqft: 21000,
  },
  {
    id: "6",
    title: "Oceanview Sanctuary",
    type: "Coastal",
    price: "$11,300,000",
    location: "Laguna Beach, CA",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "Contemporary coastal living with unobstructed ocean views and private cove access.",
    beds: 5,
    baths: 7,
    sqft: 8900,
  },
]

export const propertyTypes: PropertyType[] = ["Modern", "Heritage", "Coastal"]

export const testimonials = [
  {
    id: "1",
    name: "Victoria Chen",
    role: "Tech Executive",
    quote: "Glenn's understanding of the luxury market is unparalleled. He found us our dream home in Bel Air within three weeks.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "2",
    name: "Marcus Sterling",
    role: "Private Investor",
    quote: "Discretion, expertise, and impeccable taste. Glenn made the entire process effortless and exceeded all expectations.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "3",
    name: "Isabella Romano",
    role: "Interior Designer",
    quote: "Working with Glenn is a privilege. His eye for architectural quality and attention to detail is simply exceptional.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
]

export const agentInfo = {
  name: "Glenn Lobo",
  title: "Luxury Real Estate Specialist",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
  bio: "With over 15 years of experience in Los Angeles' most prestigious neighborhoods, Glenn Lobo has established himself as the trusted advisor for discerning clients seeking exceptional properties. His deep market knowledge, combined with an unwavering commitment to discretion and personalized service, has resulted in over $500 million in successful transactions.",
  stats: [
    { label: "Years Experience", value: "15+" },
    { label: "Properties Sold", value: "200+" },
    { label: "Total Sales Volume", value: "$500M+" },
  ],
}
