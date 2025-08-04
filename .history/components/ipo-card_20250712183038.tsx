import Image from "next/image"

interface IPOCardProps {
  ipo: {
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
}

function formatDate(dateString: string) {
  if (!dateString) return "—"
  // Simple YYYY-MM-DD slice; change as needed
  return dateString.slice(0, 10)
}

export default function IPOCard({ ipo }: IPOCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-sm">
      {/* Company Logo and Name */}
      <div className="flex items-center space-x-2 mb-4">
        <Image
          src={ipo.logo || "/placeholder.svg"}
          alt={ipo.companyName}
          width={28}
          height={28}
          className="rounded"
        />
        <h3 className="font-medium text-blue-700 text-sm">{ipo.companyName}</h3>
      </div>

      {/* IPO Details */}
      <div className="space-y-1 mb-3">
        {/* Headers */}
        <div className="grid grid-cols-3 text-[11px] text-gray-500 font-semibold uppercase">
          <span>Price Band</span>
          <span>Open</span>
          <span>Close</span>
        </div>

        {/* Values */}
        <div className="grid grid-cols-3 gap-x-2 text-[13px] font-medium text-gray-800">
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">{ipo.priceRange}</span>
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">
            {formatDate(ipo.openDate)}
          </span>
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">
            {formatDate(ipo.closeDate)}
          </span>
        </div>

        {/* Second row headers */}
        <div className="grid grid-cols-3 text-[11px] text-gray-500 font-semibold uppercase mt-2">
          <span>Issue Size</span>
          <span>Issue Type</span>
          <span>Listing Date</span>
        </div>

        {/* Second row values */}
        <div className="grid grid-cols-3 gap-x-2 text-[13px] font-medium text-gray-800">
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">
            {ipo.issueSize}
          </span>
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">
            {ipo.issueType}
          </span>
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">
            {formatDate(ipo.listingDate)}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-2">
        <button className="w-full border border-blue-500 text-blue-500 rounded-md py-1 text-xs font-semibold hover:bg-blue-50">
          RHP
        </button>
        <button className="w-full bg-red-500 text-white rounded-md py-1 text-xs font-semibold hover:bg-red-600">
          DRHP
        </button>
      </div>
    </div>
  )
}
