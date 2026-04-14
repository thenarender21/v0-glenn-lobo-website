import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!process.env.AIRTABLE_API_KEY) {
      throw new Error("Missing AIRTABLE_API_KEY environment variable");
    }

    const response = await fetch("https://api.airtable.com/v0/appBDs9Lon1vYs2iy/Leads", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    if (!response.ok) {
      throw new Error(`Airtable responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Airtable submission error:", error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}
