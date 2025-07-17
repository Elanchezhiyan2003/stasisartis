// @ts-ignore
import { type NextRequest, NextResponse } from "next/server"

// This is a mock database - in production, you'd use a real database
const contacts: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.interest || !body.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create contact entry
    const contact = {
      id: Date.now().toString(),
      name: body.name,
      email: body.email,
      phone: body.phone || "",
      company: body.company || "",
      interest: body.interest,
      message: body.message,
      newsletter: body.newsletter || false,
      createdAt: new Date().toISOString(),
    }

    // Store in mock database (replace with real database in production)
    contacts.push(contact)

    // In production, you might want to:
    // 1. Save to a real database (PostgreSQL, MongoDB, etc.)
    // 2. Send email notifications
    // 3. Integrate with CRM systems
    // 4. Send WhatsApp notifications

    console.log("New contact submission:", contact)

    return NextResponse.json({ message: "Contact form submitted successfully", id: contact.id }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function GET() {
  // This endpoint could be used to retrieve contacts (admin only)
  return NextResponse.json({ contacts }, { status: 200 })
}
