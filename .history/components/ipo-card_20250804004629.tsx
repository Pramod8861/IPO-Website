"use client"

import { useState } from "react"
import Image from "next/image"
import { Building2 } from "lucide-react"

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
}

interface IPOCardProps {
  ipo: IPO
}

export default function IPOCard({ ipo }: IPOCardProps) {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  // Create a fallback image URL or use a placeholder
  const getImageSrc = () => {
    if (imageError || !ipo.logo) {
      return `/placeholder.svg?height=60&width=60&text=${encodeURIComponent(ipo.companyName.charAt(0))}`
    }

    // Handle relative URLs by making them absolute
    if (ipo.logo.startsWith("/")) {
      return ipo.logo
    }

    // For external URLs, you might want to proxy them through your API to avoid CORS
    if (ipo.logo.startsWith("http")) {
      return ipo.logo
    }

    // Assume it's a relative path and make it absolute
    return `/${ipo.logo}`
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "open":
        return "bg-green-100 text-green-800"
      case "upcoming":
        return "bg-blue-100 text-blue-800"
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      {/* Company Logo and Name */}
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 mr-3 flex-shrink-0">
          {imageLoading && !imageError && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>}

          {imageError ? (
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-gray-400" />
            </div>
          ) : (
            <Image
              src={getImageSrc() || "/placeholder.svg"}
              alt={`${ipo.companyName} logo`}
              width={48}
              height={48}
              className="rounded-lg object-contain"
              onError={handleImageError}
              onLoad={handleImageLoad}
              crossOrigin="anonymous"
            />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-semibold text-gray-900 truncate">{ipo.companyName}</h3>
          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(ipo.status)}`}>
            {ipo.status}
          </span>
        </div>
      </div>

      {/* IPO Details */}
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Price Band</p>
            <p className="text-sm font-semibold text-gray-900">{ipo.priceRange || "Not Issued"}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Open</p>
            <p className="text-sm font-semibold text-gray-900">{ipo.openDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Close</p>
            <p className="text-sm font-semibold text-gray-900">{ipo.closeDate}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Issue Size</p>
            <p className="text-sm font-semibold text-gray-900">{ipo.issueSize}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Issue Type</p>
            <p className="text-sm font-semibold text-gray-900">{ipo.issueType}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Listing Date</p>
            <p className="text-sm font-semibold text-gray-900">{ipo.listingDate}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-6">
        <button className="flex-1 px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition-colors">
          RHP
        </button>
        <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors">
          DRHP
        </button>
      </div>
    </div>
  )
}
