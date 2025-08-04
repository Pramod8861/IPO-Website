import Image from "next/image"

export interface IPO {
  _id: string
  companyName: string
  logo: string // e.g. "vodafone.png"
  priceRange: string
  openDate: string
  closeDate: string
  issueSize: string
  issueType: string
  listingDate: string
  status: string
}

export default function IPOCard({ ipo }: { ipo: IPO }) {
  const formatDate = (dateStr: string) =>
    isNaN(Date.parse(dateStr)) ? "—" : dateStr.slice(0, 10)

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-sm w-full max-w-xs">
      {/* Logo + Name */}
      <div className="flex items-center space-x-2 mb-4">
        <Image
          src={ipo.logo ? `/uploads/${ipo.logo}` : "/placeholder.svg"}
          alt={ipo.companyName}
          width={40}
          height={40}
          className="rounded object-cover bg-gray-100"
        />
        <h3 className="font-medium text-blue-700 text-sm truncate">{ipo.companyName}</h3>
      </div>

      {/* IPO Info */}
      <div className="space-y-1 mb-3">
        {/* Row 1 */}
        <div className="grid grid-cols-3 text-[11px] text-gray-500 font-semibold uppercase">
          <span>Price Band</span>
          <span>Open</span>
          <span>Close</span>
        </div>
        <div className="grid grid-cols-3 gap-x-2 text-[13px] font-medium text-gray-800">
          <span>{ipo.priceRange}</span>
          <span>{formatDate(ipo.openDate)}</span>
          <span>{formatDate(ipo.closeDate)}</span>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 text-[11px] text-gray-500 font-semibold uppercase mt-2">
          <span>Issue Size</span>
          <span>Issue Type</span>
          <span>Listing Date</span>
        </div>
        <div className="grid grid-cols-3 gap-x-2 text-[13px] font-medium text-gray-800">
          <span>{ipo.issueSize}</span>
          <span>{ipo.issueType}</span>
          <span>{formatDate(ipo.listingDate)}</span>
        </div>
      </div>

      {/* Buttons */}
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
