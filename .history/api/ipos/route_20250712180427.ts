import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// Local MongoDB URI
const uri = "mongodb://localhost:27017";
const dbName = "ipo_admin_panel"; // ✅ Correct DB name

export async function GET() {
  try {
    // Connect to MongoDB
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);

    // Fetch data from "ipos" collection
    const ipos = await db.collection("ipos").find({}).toArray();

    // Close the connection
    await client.close();

    // Return data
    return NextResponse.json({
      success: true,
      data: ipos,
    });
  } catch (error) {
    console.error("Failed to fetch IPO data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch IPO data" },
      { status: 500 }
    );
  }
}
