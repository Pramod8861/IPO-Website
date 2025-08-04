import Image from "next/image"

interface IPO {
  _id: string
  companyName: string
  companyLogo: string // like "uploads\\logo.png"
  priceBand: string
  openDate: string
  closeDate: string
  issueSize: string
  issueType: string
  listingDate: string
  status: string
  ipoPrice: number
  listingPrice: number
}

export default function IPOCard({ ipo }: { ipo: IPO }) {
  const imagePath = "/" + ipo.companyLogo.replace(/\\/g, "/") // ✅ handle backslashes

  const formatDate = (dateStr: string) =>
    isNaN(Date.parse(dateStr)) ? "—" : new Date(dateStr).toLocaleDateString()

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-sm w-full max-w-xs">
      <div className="flex items-center space-x-2 mb-4">
        <Image
          src={imagePath}
          alt={ipo.companyName}
          width={40}
          height={40}
          className="rounded bg-gray-100 object-cover"
        />
        <h3 className="font-medium text-blue-700 text-sm truncate">{ipo.companyName}</h3>
      </div>

      <div className="space-y-1 mb-3">
        <div className="grid grid-cols-3 text-[11px] text-gray-500 font-semibold uppercase">
          <span>Price Band</span>
          <span>Open</span>
          <span>Close</span>
        </div>
        <div className="grid grid-cols-3 gap-x-2 text-[13px] font-medium text-gray-800">
          <span>{ipo.priceBand}</span>
          <span>{formatDate(ipo.openDate)}</span>
          <span>{formatDate(ipo.closeDate)}</span>
        </div>

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
