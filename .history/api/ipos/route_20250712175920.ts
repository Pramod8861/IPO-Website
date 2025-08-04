import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

// Direct connection string (for testing purposes only)
const uri = "mongodb://localhost:27017/ipo_admin_panel"; // Replace with actual URI
c//onst dbName = "yourDatabas"; // Replace with your DB name

export async function GET() {
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);

    const ipos = await db.collection("ipos").find({}).toArray();

    await client.close();

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
