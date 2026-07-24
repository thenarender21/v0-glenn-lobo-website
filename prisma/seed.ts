import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
];

const locations = [
  "Ghodbunder Road, Thane",
  "Majiwada, Thane",
  "Kasarvadavali, Thane",
  "Manpada, Thane",
  "Waghbil, Thane",
  "Balkum, Thane",
  "Kolshet Road, Thane",
];

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
  ];
  return images[index % images.length];
};

const getGallery = (index: number) => {
  return [
    getImage(index),
    getImage(index + 1),
    getImage(index + 2),
    getImage(index + 3),
    getImage(index + 4),
  ];
};

const allAmenities = [
  "Gymnasium",
  "Swimming Pool",
  "Covered Parking",
  "24/7 Security",
  "Power Backup",
  "Clubhouse",
  "Children's Play Area",
  "Lift",
  "Intercom",
  "Vastu Compliant",
];

async function main() {
  console.log("Start seeding...");

  // Clean existing database
  await prisma.property.deleteMany();

  // Premium properties
  const premiumProperties = [
    {
      title: "Raunak 108 – Premium 1 BHK Smart Home",
      slug: "raunak-108",
      bhkType: "1 BHK",
      status: "Sell",
      priceVal: 6700000,
      priceStr: "₹67 Lakhs",
      location: "Kasarvadavali, Thane",
      image: "/images/raunak-108/image_1.jpg",
      description: "Live at Raunak 108, Kasarvadavali — thoughtfully designed 1 BHK homes with modern amenities, rooftop lifestyle spaces, and seamless connectivity. This 40 storey landmark tower features smart home fittings, Godrej video door bells, and premium bathroom and kitchen sanitaryware. Conveniently located behind Vedant Hospital, it is just 5 minutes from the upcoming Kasarvadavali Metro Station, ensuring great connectivity for daily commuters.",
      beds: 1,
      baths: 1,
      sqft: 410,
      floor: 25,
      age: "New Launch",
      featured: true,
      gallery: JSON.stringify([
        "/images/raunak-108/image_1.jpg",
        "/images/raunak-108/image_6.jpg",
        "/images/raunak-108/image_8.jpg",
        "/images/raunak-108/image_12.jpg",
        "/images/raunak-108/image_15.jpg",
      ]),
      amenities: JSON.stringify([
        "Gymnasium",
        "Covered Parking",
        "24/7 Security",
        "Power Backup",
        "Clubhouse",
        "Children's Play Area",
        "Lift",
        "Intercom",
      ]),
    },
    {
      title: "Raunak Maximum City – Luxury 2 BHK XL Smart Home",
      slug: "raunak-max-city-2bhk",
      bhkType: "2 BHK",
      status: "Sell",
      priceVal: 9300000,
      priceStr: "₹93 Lakhs",
      location: "Ghodbunder Road, Thane",
      image: "/images/raunak-max-city-2bhk/image_1.jpg",
      description: "Experience spacious living at Raunak Maximum City with premium 2 BHK XL smart homes, nature-inspired lifestyle spaces, and world-class township amenities. Part of a 22-acre modern integrated township, these homes feature spacious bedroom layouts, high-end Jio Fiber powered home automation, and stunning views of the surrounding landscape. The project features a 4-level podium, stilt parking, and 35-storey residential towers designed for maximum efficiency.",
      beds: 2,
      baths: 2,
      sqft: 610,
      floor: 18,
      age: "Under Construction",
      featured: true,
      gallery: JSON.stringify([
        "/images/raunak-max-city-2bhk/image_7.jpg",
        "/images/raunak-max-city-2bhk/image_1.jpg",
        "/images/raunak-max-city-2bhk/image_3.jpg",
        "/images/raunak-max-city-2bhk/image_4.jpg",
        "/images/raunak-max-city-2bhk/image_5.jpg",
        "/images/raunak-max-city-2bhk/image_6.jpg",
      ]),
      amenities: JSON.stringify([
        "Gymnasium",
        "Swimming Pool",
        "Covered Parking",
        "24/7 Security",
        "Power Backup",
        "Clubhouse",
        "Children's Play Area",
        "Lift",
        "Intercom",
      ]),
    },
    {
      title: "Rutu City – Premium 2 BHK Hillside Residences",
      slug: "rutu-city-2bhk",
      bhkType: "2 BHK",
      status: "Sell",
      priceVal: 9900000,
      priceStr: "₹99 Lakhs++",
      location: "Behind D-Mart, Anand Nagar, G.B. Road, Thane (W)",
      image: "/images/rutu-city-2bhk/image_3.jpg",
      description: "Experience premium living at Rutu City with iconic 42-storey hillside towers, landscaped podiums, and a wide array of lifestyle amenities. Strategically located behind D-Mart in Anand Nagar, Thane (W), these residences offer panoramic nature views and spacious 2 BHK layouts designed for ultimate comfort and ventilation.",
      beds: 2,
      baths: 2,
      sqft: 696,
      floor: 22,
      age: "New Launch",
      featured: true,
      gallery: JSON.stringify([
        "/images/rutu-city-2bhk/image_3.jpg",
        "/images/rutu-city-2bhk/image_1.jpg",
        "/images/rutu-city-2bhk/image_2.jpg",
        "/images/rutu-city-2bhk/image_4.jpg",
        "/images/rutu-city-2bhk/image_5.jpg",
        "/images/rutu-city-2bhk/image_6.jpg",
        "/images/rutu-city-2bhk/image_7.jpg",
        "/images/rutu-city-2bhk/image_8.jpg",
        "/images/rutu-city-2bhk/image_9.jpg",
        "/images/rutu-city-2bhk/image_10.jpg",
        "/images/rutu-city-2bhk/image_11.jpg",
        "/images/rutu-city-2bhk/image_12.jpg",
        "/images/rutu-city-2bhk/image_13.jpg",
        "/images/rutu-city-2bhk/image_14.jpg",
        "/images/rutu-city-2bhk/image_15.jpg",
      ]),
      amenities: JSON.stringify([
        "Gymnasium",
        "Swimming Pool",
        "Covered Parking",
        "24/7 Security",
        "Power Backup",
        "Clubhouse",
        "Children's Play Area",
        "Lift",
        "Intercom",
      ]),
    },
    {
      title: "Lodha Sterling – Luxury 3 BHK Homes",
      slug: "lodha-sterling",
      bhkType: "3 BHK",
      status: "Sell",
      priceVal: 24000000,
      priceStr: "Starting from ₹2.40 Cr",
      location: "Kolshet Road, Thane West",
      image: "/images/lodha-sterling/image_1.jpg",
      description: "Experience regal London-inspired living at Lodha Sterling — a 11-acre green township on Kolshet Road, Thane. Offering spacious 3 BHK residences with world-class amenities and 70% open green spaces.",
      beds: 3,
      baths: 3,
      sqft: 1266,
      floor: 5,
      age: "Ready to Move",
      featured: true,
      gallery: JSON.stringify([
        "/images/lodha-sterling/image_1.jpg",
      ]),
      amenities: JSON.stringify([
        "Swimming Pool",
        "Gymnasium",
        "Clubhouse",
        "Amphitheatre",
        "Children's Play Area",
        "Indoor Games",
        "Multipurpose Lawn",
        "Jogging Track",
      ]),
    },
  ];

  for (const prop of premiumProperties) {
    await prisma.property.create({
      data: prop,
    });
  }

  // Generate 54 mock properties
  for (let i = 0; i < 54; i++) {
    const slug = (i + 1).toString();
    const complex = complexes[i % complexes.length];
    const location = locations[i % locations.length];
    const bhkType = i % 3 === 0 ? "3 BHK" : i % 3 === 1 ? "2 BHK" : "1 BHK";
    const status = i % 2 === 0 ? "Sell" : "Rent";

    let priceVal = 0;
    let priceStr = "";
    if (status === "Sell") {
      if (i % 3 === 0) {
        priceVal = 35000000;
        priceStr = "₹3.5 Crores";
      } else if (i % 3 === 1) {
        priceVal = 15000000;
        priceStr = "₹1.5 Crores";
      } else {
        priceVal = 8500000;
        priceStr = "₹85 Lakhs";
      }
    } else {
      if (i % 3 === 0) {
        priceVal = 65000;
        priceStr = "₹65,000 / mo";
      } else if (i % 3 === 1) {
        priceVal = 45000;
        priceStr = "₹45,000 / mo";
      } else {
        priceVal = 25000;
        priceStr = "₹25,000 / mo";
      }
    }

    const beds = i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1;
    const sqft = i % 3 === 0 ? 1500 + i * 10 : i % 3 === 1 ? 950 + i * 5 : 500 + i;
    const floor = (i % 25) + 1;
    const age = i % 2 === 0 ? "Under Construction" : i % 3 === 0 ? "0-5 Years" : "5-10 Years";
    const propertyAmenities = [...allAmenities].sort(() => 0.5 - Math.random()).slice(0, 6 + (i % 3));

    await prisma.property.create({
      data: {
        title: `${complex} - ${status === "Sell" ? "Premium Unit" : "Luxury Rental"}`,
        slug,
        bhkType,
        status,
        priceVal,
        priceStr,
        location,
        image: getImage(i),
        description: `A beautiful ${bhkType} residence in ${complex}, offering modern amenities and excellent views. Perfectly situated near essential utilities and lifestyle hubs.`,
        beds,
        baths: beds,
        sqft,
        floor,
        age,
        gallery: JSON.stringify(getGallery(i)),
        amenities: JSON.stringify(propertyAmenities),
        featured: i < 6, // Make first 6 featured
      },
    });
  }

  console.log("Seeding finished successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
