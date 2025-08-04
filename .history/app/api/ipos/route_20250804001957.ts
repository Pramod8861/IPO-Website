import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

const uri = "mongodb://localhost:27017"
const dbName = "ipo_admin_panel"

export async function GET() {
  let client

  try {
    console.log("🔌 Connecting to MongoDB...")
    client = new MongoClient(uri)
    await client.connect()
    console.log("✅ Connected to MongoDB")

    const db = client.db(dbName)
    console.log("📦 Fetching from 'ipos' collection...")

    const ipos = await db.collection("ipos").find({}).toArray()
    console.log("✅ IPOs fetched:", ipos.length)

    // Transform the data to ensure proper serialization
    const transformedIpos = ipos.map((ipo) => ({
      ...ipo,
      _id: ipo._id.toString(), // Convert ObjectId to string
      // Ensure image fields are properly included
      logo: ipo.logo || null,
      bannerImage: ipo.bannerImage || null,
      companyImage: ipo.companyImage || null,
    }))

    return NextResponse.json({
      success: true,
      data: transformedIpos,
      count: transformedIpos.length,
    })
  } catch (error) {
    console.error("❌ Failed to fetch IPO data:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch IPO data",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  } finally {
    if (client) {
      await client.close()
      console.log("🔒 Connection closed.")
    }
  }
}
