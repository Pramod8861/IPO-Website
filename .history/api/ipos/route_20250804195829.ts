import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; 

const dbName = "ipo_admin_panel";

export async function GET() {
  try {
    console.log("🔌 Connecting to MongoDB...");
    const client = await MongoClient.connect(uri);
    console.log("✅ Connected to MongoDB");

    const db = client.db(dbName);

    console.log("📦 Fetching from 'ipos' collection...");
    const ipos = await db.collection("ipos").find({}).toArray();
    console.log("✅ IPOs fetched:", ipos.length);

    await client.close();
    console.log("🔒 Connection closed.");

    return NextResponse.json({
      success: true,
      data: ipos,
    });
  } catch (error) {
    console.error("❌ Failed to fetch IPO data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch IPO data" },
      { status: 500 }
    );
  }
}
