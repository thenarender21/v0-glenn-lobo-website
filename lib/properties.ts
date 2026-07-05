import { fetchPropertiesFromSheet } from './google-sheets';
import { prisma } from './db';


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
  floor: number
  age: string
  gallery: string[]
  amenities: string[]
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

const getGallery = (index: number) => {
  return [
    getImage(index),
    getImage(index + 1),
    getImage(index + 2),
    getImage(index + 3),
    getImage(index + 4),
  ]
}

const allAmenities = [
  "Gymnasium", "Swimming Pool", "Covered Parking", "24/7 Security", 
  "Power Backup", "Clubhouse", "Children's Play Area", "Lift", 
  "Intercom", "Vastu Compliant"
]

export const fallbackProperties: Property[] = Array.from({ length: 54 }, (_, i) => {
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
  const floor = (i % 25) + 1
  const age = i % 2 === 0 ? "Under Construction" : i % 3 === 0 ? "0-5 Years" : "5-10 Years"
  
  // Assign 6-8 random amenities
  const propertyAmenities = [...allAmenities].sort(() => 0.5 - Math.random()).slice(0, 6 + (i % 3));

  return {
    id,
    title: `${complex} - ${status === "Sell" ? "Premium Unit" : "Luxury Rental"}`,
    type,
    status,
    price,
    location,
    image: getImage(i),
    description: `A beautiful ${type} residence in ${complex}, offering modern amenities and excellent views. Perfectly situated near essential utilities and lifestyle hubs.`,
    beds,
    baths: beds,
    sqft,
    floor,
    age,
    gallery: getGallery(i),
    amenities: propertyAmenities,
  }
})

export const propertyTypes: PropertyType[] = ["1 BHK", "2 BHK", "3 BHK"]

export const testimonials = [
  {
    id: "1",
    name: "Rahil Jain",
    role: "2 months ago • ⭐⭐⭐⭐⭐",
    quote: "This is the best service in the whole Thane if you want the best flat and with immediate requirements. I was really welcomed by the staff and with their support found a very good flat.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: "2",
    name: "Nazim KM",
    role: "2 years ago • ⭐⭐⭐⭐⭐",
    quote: "Team was very supportive, they understand clients requirements and guide in the best possible way. Mukund along with Devesh helped me select the right flat in a good society. From search to agreement and moving in, Mukund made the process easy. Overall a great experience. Keep it up Mukund and team 👏👏👏",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: "3",
    name: "Dinup Nair",
    role: "2 years ago • ⭐⭐⭐⭐⭐",
    quote: "Working with Mukund ji was an ultimate pleasure. He guided me step-by-step on all formalities and maintained complete transparency in every transaction. Highly recommended if you’re seeking property agent support in Mumbai.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
]

export const agentInfo = {
  name: "Mukund Thakur",
  title: "Thane Real Estate Specialist",
  image: "",
  bio: "With over 13 years of experience specializing solely in Thane and Ghodbunder Road's most prized complexes, Thakurjee Properties has established itself as the trusted advisor for clients seeking quality properties. Our deep local market knowledge has resulted in over 800+ properties sold/rented.",
  stats: [
    { label: "Years Experience", value: "13+" },
    { label: "Properties Sold/Rented", value: "800+" },
    { label: "Happy Families", value: "1,200+" },
  ],
}

export const premiumApartmentProperties: Property[] = [
  {
    id: "raunak-108",
    title: "Raunak 108 – Premium 1 BHK Smart Home",
    type: "1 BHK",
    status: "Sell",
    price: "₹67 Lakhs",
    location: "Kasarvadavali, Thane",
    image: "/images/raunak-108/image_1.jpg",
    description: "Live at Raunak 108, Kasarvadavali — thoughtfully designed 1 BHK homes with modern amenities, rooftop lifestyle spaces, and seamless connectivity. This 40 storey landmark tower features smart home fittings, Godrej video door bells, and premium bathroom and kitchen sanitaryware. Conveniently located behind Vedant Hospital, it is just 5 minutes from the upcoming Kasarvadavali Metro Station, ensuring great connectivity for daily commuters.",
    beds: 1,
    baths: 1,
    sqft: 410,
    floor: 25,
    age: "New Launch",
    gallery: [
      "/images/raunak-108/image_1.jpg",
      "/images/raunak-108/image_6.jpg",
      "/images/raunak-108/image_8.jpg",
      "/images/raunak-108/image_12.jpg",
      "/images/raunak-108/image_15.jpg"
    ],
    amenities: [
      "Gymnasium",
      "Covered Parking",
      "24/7 Security",
      "Power Backup",
      "Clubhouse",
      "Children's Play Area",
      "Lift",
      "Intercom"
    ]
  },
  {
    id: "raunak-max-city-2bhk",
    title: "Raunak Maximum City – Luxury 2 BHK XL Smart Home",
    type: "2 BHK",
    status: "Sell",
    price: "₹93 Lakhs",
    location: "Ghodbunder Road, Thane",
    image: "/images/raunak-max-city-2bhk/image_1.jpg",
    description: "Experience spacious living at Raunak Maximum City with premium 2 BHK XL smart homes, nature-inspired lifestyle spaces, and world-class township amenities. Part of a 22-acre modern integrated township, these homes feature spacious bedroom layouts, high-end Jio Fiber powered home automation, and stunning views of the surrounding landscape. The project features a 4-level podium, stilt parking, and 35-storey residential towers designed for maximum efficiency.",
    beds: 2,
    baths: 2,
    sqft: 610,
    floor: 18,
    age: "Under Construction",
    gallery: [
      "/images/raunak-max-city-2bhk/image_7.jpg",
      "/images/raunak-max-city-2bhk/image_1.jpg",
      "/images/raunak-max-city-2bhk/image_3.jpg",
      "/images/raunak-max-city-2bhk/image_4.jpg",
      "/images/raunak-max-city-2bhk/image_5.jpg",
      "/images/raunak-max-city-2bhk/image_6.jpg"
    ],
    amenities: [
      "Gymnasium",
      "Swimming Pool",
      "Covered Parking",
      "24/7 Security",
      "Power Backup",
      "Clubhouse",
      "Children's Play Area",
      "Lift",
      "Intercom"
    ]
  },
  {
    id: "lodha-sterling",
    title: "Lodha Sterling – Luxury 3 BHK Homes",
    type: "3 BHK",
    status: "Sell",
    price: "Starting from ₹2.40 Cr",
    location: "Kolshet Road, Thane West",
    image: "/images/lodha-sterling/image_1.jpg",
    description: "Experience regal London-inspired living at Lodha Sterling — a 11-acre green township on Kolshet Road, Thane. Offering spacious 3 BHK residences with world-class amenities and 70% open green spaces.",
    beds: 3,
    baths: 3,
    sqft: 1266,
    floor: 5,
    age: "Ready to Move",
    gallery: [
      "/images/lodha-sterling/image_1.jpg"
    ],
    amenities: [
      "Swimming Pool",
      "Gymnasium",
      "Clubhouse",
      "Amphitheatre",
      "Children's Play Area",
      "Indoor Games",
      "Multipurpose Lawn",
      "Jogging Track"
    ]
  }
]

function mapDbProperty(dbProp: any): Property {
  return {
    id: dbProp.id,
    title: dbProp.title,
    type: dbProp.bhkType as PropertyType,
    status: dbProp.status as PropertyStatus,
    price: dbProp.priceStr,
    location: dbProp.location,
    image: dbProp.image,
    description: dbProp.description,
    beds: dbProp.beds,
    baths: dbProp.baths,
    sqft: dbProp.sqft,
    floor: dbProp.floor,
    age: dbProp.age,
    gallery: typeof dbProp.gallery === 'string' ? JSON.parse(dbProp.gallery) : dbProp.gallery || [],
    amenities: typeof dbProp.amenities === 'string' ? JSON.parse(dbProp.amenities) : dbProp.amenities || [],
  };
}

export async function getProperties(): Promise<Property[]> {
  try {
    const dbProps = await prisma.property.findMany({
      orderBy: { createdAt: 'desc' }
    });

    if (dbProps.length > 0) {
      // Map DB schema to frontend structure. Use 'slug' as the public ID so links match slugs
      return dbProps.map(dbProp => ({
        ...mapDbProperty(dbProp),
        id: dbProp.slug // Ensure dynamic pages match using /properties/[slug]
      }));
    }
  } catch (error) {
    console.error("Failed to fetch database properties, falling back to static lists", error);
  }

  let list: Property[] = []
  try {
     const fetchedProperties = await fetchPropertiesFromSheet();
     if (fetchedProperties && fetchedProperties.length > 0) {
        list = fetchedProperties;
     } else {
        list = fallbackProperties;
     }
  } catch(e) {
    console.error("Failed to fetch sheet properties, falling back to mock data", e)
    list = fallbackProperties;
  }

  // Combine and deduplicate list ensuring premium ones are at the front
  const uniqueList = [...premiumApartmentProperties];
  list.forEach(p => {
    if (!uniqueList.some(item => item.id === p.id)) {
      uniqueList.push(p);
    }
  });
  return uniqueList;
}


