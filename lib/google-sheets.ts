import Papa from 'papaparse';
import { Property, PropertyType, PropertyStatus } from '@/lib/properties';

export async function fetchPropertiesFromSheet(): Promise<Property[] | null> {
  const url = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_CSV_URL;
  
  if (!url) {
    console.warn("No Google Sheets CSV URL found in environment variables.");
    return null;
  }

  try {
    const response = await fetch(url, { next: { revalidate: 60 } }); // Revalidate every 60s
    if (!response.ok) {
        throw new Error(`Failed to fetch properties from Google Sheets: ${response.statusText}`);
    }

    const csvText = await response.text();
    
    return new Promise((resolve, reject) => {
        Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                const properties: Property[] = results.data.map((row: any) => {
                  let gallery: string[] = [];
                  let amenities: string[] = [];
                  
                  // Handle arrays safely splitting by comma
                  if (typeof row.gallery === "string") {
                    gallery = row.gallery.split(',').map((s: string) => s.trim()).filter(Boolean);
                  }
                  if (typeof row.amenities === "string") {
                    amenities = row.amenities.split(',').map((s: string) => s.trim()).filter(Boolean);
                  }
                  
                  return {
                      id: row.id || '',
                      title: row.title || '',
                      type: (row.type as PropertyType) || '1 BHK',
                      status: (row.status as PropertyStatus) || 'Sell',
                      price: row.price || '',
                      location: row.location || '',
                      image: row.image || '',
                      description: row.description || '',
                      beds: parseInt(row.beds, 10) || 1,
                      baths: parseInt(row.baths, 10) || 1,
                      sqft: parseInt(row.sqft, 10) || 0,
                      floor: parseInt(row.floor, 10) || 1,
                      age: row.age || '',
                      gallery: gallery.length > 0 ? gallery : [row.image || ''], // Use image as fallback for gallery
                      amenities: amenities
                  }
                });
                resolve(properties);
            },
            error: (error: Error) => {
                console.error("Error parsing CSV:", error);
                reject(error as Error);
            }
        });
    });
  } catch (error) {
    console.error("Error fetching properties from Google Sheets:", error);
    return null;
  }
}
