export type PropertyType = "1 BHK" | "2 BHK" | "3 BHK"
export type PropertyStatus = "Rent" | "Sell"

export interface Property {
  id: string
  title: string
  type: PropertyType
  status: PropertyStatus
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
    title: "Hiranandani Estate Prime View",
    type: "3 BHK",
    status: "Sell",
    price: "₹3.5 Crores",
    location: "Ghodbunder Road, Thane",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    description: "A premium 3 BHK apartment with stunning views of the Yeoor Hills and modern luxury amenities.",
    beds: 3,
    baths: 3,
    sqft: 1500,
  },
  {
    id: "2",
    title: "Lodha Splendora Comfort",
    type: "2 BHK",
    status: "Rent",
    price: "₹45,000 / month",
    location: "Ghodbunder Road, Thane",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description: "Spacious semi-furnished 2 BHK available for rent, overlooking beautifully landscaped gardens.",
    beds: 2,
    baths: 2,
    sqft: 950,
  },
  {
    id: "3",
    title: "Rustomjee Urbania Compact",
    type: "1 BHK",
    status: "Sell",
    price: "₹85 Lakhs",
    location: "Majiwada, Ghodbunder Road, Thane",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    description: "Perfectly designed 1 BHK for modern nuclear families with excellent connectivity.",
    beds: 1,
    baths: 1,
    sqft: 500,
  },
  {
    id: "4",
    title: "Puraniks City Reserva",
    type: "2 BHK",
    status: "Sell",
    price: "₹1.2 Crores",
    location: "Kasarvadavali, Ghodbunder Rd, Thane",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Elegant 2 BHK with Un-compromised views, state-of-the-art club house and premium finishes.",
    beds: 2,
    baths: 2,
    sqft: 1100,
  },
  {
    id: "5",
    title: "Acme Ozone Premium",
    type: "3 BHK",
    status: "Rent",
    price: "₹65,000 / month",
    location: "Manpada, Ghodbunder Road, Thane",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    description: "Fully furnished high-floor 3 BHK apartment ready to move in with all premium appliances.",
    beds: 3,
    baths: 3,
    sqft: 1450,
  },
  {
    id: "6",
    title: "Cosmos Jewels Starter Home",
    type: "1 BHK",
    status: "Rent",
    price: "₹25,000 / month",
    location: "Ghodbunder Road, Thane",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "Bright and airy 1 BHK apartment, making it the perfect starter home or rental property.",
    beds: 1,
    baths: 1,
    sqft: 550,
  },
]

export const propertyTypes: PropertyType[] = ["1 BHK", "2 BHK", "3 BHK"]

export const testimonials = [
  {
    id: "1",
    name: "Vikram Singhania",
    role: "Corporate Executive",
    quote: "Thakurjee Properties' understanding of the Thane market is unparalleled. They found us our dream home in Hiranandani Estate within weeks.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "2",
    name: "Aarti Desai",
    role: "Private Investor",
    quote: "Expertise, local presence, and impeccable service. The team made the entire process around Ghodbunder Road effortless.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "3",
    name: "Rohan Kapoor",
    role: "IT Professional",
    quote: "Working with Thakurjee Properties for renting my apartment was a breeze. Their attention to detail was simply exceptional.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
]

export const agentInfo = {
  name: "Mukund Thakur",
  title: "Thane Real Estate Specialist",
  image: "",
  bio: "With over 15 years of experience specializing solely in Thane and Ghodbunder Road's most prized complexes, Thakurjee Properties has established itself as the trusted advisor for clients seeking quality properties. Our deep local market knowledge has resulted in over ₹1,000 Crores in successful transactions.",
  stats: [
    { label: "Years Experience", value: "15+" },
    { label: "Properties Sold/Rented", value: "800+" },
    { label: "Happy Families", value: "1,200+" },
  ],
}
