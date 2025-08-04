import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; // ✅ Localhost Mongo URI
const dbName = "ipo_admin_panel"; // ✅ Your actual DB name

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
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("📥 Received POST data:", body);

    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);

    console.log("📦 Inserting into 'ipos' collection...");
    const result = await db.collection("ipos").insertOne(body);
    console.log("✅ IPO inserted with ID:", result.insertedId);

    await client.close();
    console.log("🔒 Connection closed.");

    return NextResponse.json({
      success: true,
      data: { id: result.insertedId },
    });
  } catch (error) {
    console.error("❌ Failed to insert IPO data:", error);
    return NextResponse.json(
      { success: false, error: "Failed to insert IPO data" },
      { status: 500 }
    );
  }
}
export async function DELETE(request: Request) {