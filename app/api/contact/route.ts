import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!process.env.AIRTABLE_API_KEY) {
      throw new Error("Missing AIRTABLE_API_KEY environment variable");
    }

    // Read UTM and tracking cookies
    const cookies = request.cookies;
    const utmSource = cookies.get("utm_source")?.value || "";
    const utmMedium = cookies.get("utm_medium")?.value || "";
    const utmCampaign = cookies.get("utm_campaign")?.value || "";
    const utmTerm = cookies.get("utm_term")?.value || "";
    const utmContent = cookies.get("utm_content")?.value || "";
    const gclid = cookies.get("gclid")?.value || cookies.get("gbraid")?.value || cookies.get("wbraid")?.value || "";
    const referrer = cookies.get("initial_referrer")?.value || "";
    const landingPage = cookies.get("landing_page")?.value || "";

    // Enrich the records with tracking parameters
    let enrichedBody = body;
    if (body && Array.isArray(body.records)) {
      const enrichedRecords = body.records.map((record: any) => {
        const fields = { ...record.fields };

        // 1. Send as individual columns (disabled to prevent Airtable schema mismatch errors)
        // if (utmSource) fields["UTM Source"] = utmSource;
        // if (utmMedium) fields["UTM Medium"] = utmMedium;
        // if (utmCampaign) fields["UTM Campaign"] = utmCampaign;
        // if (utmTerm) fields["UTM Term"] = utmTerm;
        // if (utmContent) fields["UTM Content"] = utmContent;
        // if (gclid) fields["GCLID"] = gclid;
        // if (referrer) fields["Referrer"] = referrer;
        // if (landingPage) fields["Landing Page"] = landingPage;

        // 2. Append to Message field as a fail-safe fallback
        const trackingParts = [];
        if (utmSource) trackingParts.push(`Source: ${utmSource}`);
        if (utmMedium) trackingParts.push(`Medium: ${utmMedium}`);
        if (utmCampaign) trackingParts.push(`Campaign: ${utmCampaign}`);
        if (utmTerm) trackingParts.push(`Term: ${utmTerm}`);
        if (utmContent) trackingParts.push(`Content: ${utmContent}`);
        if (gclid) trackingParts.push(`GCLID: ${gclid}`);
        if (referrer) trackingParts.push(`Referrer: ${referrer}`);
        if (landingPage) trackingParts.push(`Landing Page: ${landingPage}`);

        if (trackingParts.length > 0) {
          const trackingText = `\n\n--- Tracking Info ---\n${trackingParts.join("\n")}`;
          fields["Message"] = fields["Message"]
            ? `${fields["Message"]}${trackingText}`
            : trackingText.trim();
        }

        return { ...record, fields };
      });
      enrichedBody = { ...body, records: enrichedRecords };
    }

    const response = await fetch("https://api.airtable.com/v0/appBDs9Lon1vYs2iy/Leads", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.AIRTABLE_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(enrichedBody)
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
