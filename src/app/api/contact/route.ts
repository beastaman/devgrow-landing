import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, note, phone } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const token = process.env.AIRTABLE_TOKEN;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME ?? "Leads";

    if (!token || !baseId) {
      console.error(
        "Missing Airtable env vars:",
        !token ? "AIRTABLE_TOKEN is not set" : "",
        !baseId ? "AIRTABLE_BASE_ID is not set" : ""
      );
      return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
    }

    if (token === "your_personal_access_token_here") {
      console.error("AIRTABLE_TOKEN is still the placeholder value");
      return NextResponse.json({ error: "Airtable token not configured" }, { status: 500 });
    }

    const res = await fetch(
      `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fields: {
            Email: email,
            ...(phone ? { Phone: phone } : {}),
            ...(note ? { Note: note } : {}),
            "Submitted At": new Date().toISOString(),
          },
        }),
      }
    );

    if (!res.ok) {
      const err = await res.json();
      console.error("Airtable error:", err);
      return NextResponse.json({ error: "Failed to save lead" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
