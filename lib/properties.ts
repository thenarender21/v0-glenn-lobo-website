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

const complexes = [
  "Hiranandani Estate",
  "Lodha Splendora",
  "Rustomjee Urbania",
  "Puraniks City Reserva",
  "Acme Ozone",
  "Cosmos Jewels",
  "Kalpataru Hills",
  "Raymond Realty Ten X",
  "Dosti West County",
  "Godrej Exquisite",
]

const locations = [
  "Ghodbunder Road, Thane",
  "Majiwada, Thane",
  "Kasarvadavali, Thane",
  "Manpada, Thane",
  "Waghbil, Thane",
  "Balkum, Thane",
  "Kolshet Road, Thane",
]

const getImage = (index: number) => {
  const images = [
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?w=800&q=80",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  ]
  return images[index % images.length]
}

export const properties: Property[] = Array.from({ length: 54 }, (_, i) => {
  const id = (i + 1).toString()
  const complex = complexes[i % complexes.length]
  const location = locations[i % locations.length]
  const type: PropertyType = i % 3 === 0 ? "3 BHK" : i % 3 === 1 ? "2 BHK" : "1 BHK"
  const status: PropertyStatus = i % 2 === 0 ? "Sell" : "Rent"
  
  let price = ""
  if (status === "Sell") {
    price = i % 3 === 0 ? "₹3.5 Crores" : i % 3 === 1 ? "₹1.5 Crores" : "₹85 Lakhs"
  } else {
    price = i % 3 === 0 ? "₹65,000 / mo" : i % 3 === 1 ? "₹45,000 / mo" : "₹25,000 / mo"
  }

  const beds = i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1
  const sqft = i % 3 === 0 ? 1500 + (i * 10) : i % 3 === 1 ? 950 + (i * 5) : 500 + i

  return {
    id,
    title: `${complex} - ${status === "Sell" ? "Premium Unit" : "Luxury Rental"}`,
    type,
    status,
    price,
    location,
    image: getImage(i),
    description: `A beautiful ${type} residence in ${complex}, offering modern amenities and excellent views.`,
    beds,
    baths: beds,
    sqft,
  }
})

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
