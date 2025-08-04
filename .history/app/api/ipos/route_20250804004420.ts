import { NextResponse } from "next/server"

// Mock data for demonstration
const mockIPOs = [
  {
    _id: "1",
    companyName: "Tech Solutions Ltd",
    logo: "/placeholder.svg?height=60&width=60&text=TS",
    priceRange: "₹100-120",
    openDate: "15-Jan-24",
    closeDate: "17-Jan-24",
    issueSize: "₹500 Cr.",
    issueType: "Book Built",
    listingDate: "22-Jan-24",
    status: "Open",
  },
  {
    _id: "2",
    companyName: "Green Energy Corp",
    logo: "/placeholder.svg?height=60&width=60&text=GE",
    priceRange: "₹80-95",
    openDate: "20-Jan-24",
    closeDate: "22-Jan-24",
    issueSize: "₹300 Cr.",
    issueType: "Book Built",
    listingDate: "27-Jan-24",
    status: "Upcoming",
  },
  {
    _id: "3",
    companyName: "Digital Finance Inc",
    logo: "/placeholder.svg?height=60&width=60&text=DF",
    priceRange: "₹150-180",
    openDate: "10-Jan-24",
    closeDate: "12-Jan-24",
    issueSize: "₹750 Cr.",
    issueType: "Book Built",
    listingDate: "17-Jan-24",
    status: "Closed",
  },
  {
    _id: "4",
    companyName: "Healthcare Innovations",
    logo: "/placeholder.svg?height=60&width=60&text=HI",
    priceRange: "Not Issued",
    openDate: "25-Jan-24",
    closeDate: "27-Jan-24",
    issueSize: "₹400 Cr.",
    issueType: "Book Built",
    listingDate: "01-Feb-24",
    status: "Upcoming",
  },
]

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      data: mockIPOs,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch IPO data",
      },
      { status: 500 },
    )
  }
}
