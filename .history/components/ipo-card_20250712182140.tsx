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

export default function IPOCard({ ipo }: IPOCardProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      {/* Company Logo and Name */}
      <div className="flex items-center space-x-3 mb-4">
        <Image
          src={ipo.logo || "/placeholder.svg"}
          alt={ipo.companyName}
          width={48}
          height={48}
          className="rounded-lg"
        />
        <h3 className="font-semibold text-gray-900 text-sm">{ipo.companyName}</h3>
      </div>

      {/* IPO Details Grid */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 uppercase tracking-wide">PRICE BAND</span>
          <span className="text-xs text-gray-500 uppercase tracking-wide">OPEN</span>
          <span className="text-xs text-gray-500 uppercase tracking-wide">CLOSE</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-900">{ipo.priceRange}</span>
          <span className="text-sm text-gray-700">{ipo.openDate}</span>
          <span className="text-sm text-gray-700">{ipo.closeDate}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500 uppercase tracking-wide">ISSUE SIZE</span>
          <span className="text-xs text-gray-500 uppercase tracking-wide">ISSUE TYPE</span>
          <span className="text-xs text-gray-500 uppercase tracking-wide">LISTING DATE</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-gray-900">{ipo.issueSize}</span>
          <span className="text-sm text-gray-700">{ipo.issueType}</span>
          <span className="text-sm text-gray-700">{ipo.listingDate}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-2">
        <button className="flex-1 bg-white border border-blue-600 text-blue-600 py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-50">
          RHP
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-red-600">
         DRH
        </button>
      </div>
    </div>
  )import Image from "next/image"

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
        <div className="grid grid-cols-3 text-[11px] text-gray-500 font-semibold uppercase">
          <span>Price Band</span>
          <span>Open</span>
          <span>Close</span>
        </div>
        <div className="grid grid-cols-3 text-[13px] font-medium text-gray-800">
          <span>{ipo.priceRange}</span>
          <span>{ipo.openDate}</span>
          <span>{ipo.closeDate}</span>
        </div>

        <div className="grid grid-cols-3 text-[11px] text-gray-500 font-semibold uppercase mt-2">
          <span>Issue Size</span>
          <span>Issue Type</span>
          <span>Listing Date</span>
        </div>
        <div className="grid grid-cols-3 text-[13px] font-medium text-gray-800">
          <span>{ipo.issueSize}</span>
          <span>{ipo.issueType}</span>
          <span>{ipo.listingDate}</span>
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

}
