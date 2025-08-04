import React from "react"

interface IPO {
  _id: string
  companyName: string
  logo: string
  priceRange: string
  openDate: string
  closeDate: string
  issueSize: string
  issueType: string
  listingDate: string
  status: string
  ipoPrice: number
  listingPrice: number
  listingGain: string
  cmp: number
  currentReturn: string
  rhpLink: string
  drhpLink: string
  isHidden: boolean
  createdAt: string
  updatedAt: string
}

// Utility function to fix image path
const fixLogoPath = (path: string): string => {
  // Ensure backslashes are converted to URL-friendly forward slashes
  const cleanedPath = path.replace(/\\/g, "/")
  return `/${cleanedPath}` // Assumes images are in public/uploads/
}

export default function IPOCard({ ipo }: { ipo: IPO }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition duration-300">
      <img
        src={fixLogoPath(ipo.logo)}
        alt={ipo.companyName}
        className="w-full h-32 object-contain p-2 bg-gray-50"
        onError={(e) => {
          e.currentTarget.src = "/default-logo.png" // fallback image if logo fails to load
        }}
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-1">{ipo.companyName}</h2>
        <p className="text-sm text-gray-500 mb-2">{ipo.status}</p>
        <div className="text-sm text-gray-700 space-y-1">
          <p><strong>Price Range:</strong> {ipo.priceRange}</p>
          <p><strong>Open:</strong> {new Date(ipo.openDate).toDateString()}</p>
          <p><strong>Close:</strong> {new Date(ipo.closeDate).toDateString()}</p>
          <p><strong>Issue Size:</strong> {ipo.issueSize}</p>
        </div>
      </div>
    </div>
  )
}
