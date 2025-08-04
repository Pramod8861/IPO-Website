import Image from "next/image"

interface IPO {
  _id: string
  companyName: string
  companyLogo: string
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
  const imagePath = "/" + ipo.companyLogo.replace(/\\/g, "/")

  const formatDate = (dateStr: string) =>
    isNaN(Date.parse(dateStr)) ? "—" : new Date(dateStr).toLocaleDateString()

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition-all w-full max-w-sm text-[13px]">
      {/* Logo and Title */}
      <div className="flex items-center gap-3 mb-4">
        <Image
          src={imagePath}
          alt={ipo.companyName}
          width={44}
          height={44}
          className="rounded-md bg-gray-100 object-cover"
        />
        <h3 className="font-semibold text-blue-700 text-base">{ipo.companyName}</h3>
      </div>

      {/* IPO Info Grid */}
      <div className="space-y-3">
        {/* Row 1: Price / Open / Close */}
        <div>
          <div className="grid grid-cols-3 text-xs font-semibold text-gray-500 uppercase mb-1">
            <span>Price Band</span>
            <span>Open</span>
            <span>Close</span>
          </div>
          <div className="grid grid-cols-3 text-gray-800 font-medium gap-1">
            <span className="truncate">{ipo.priceBand}</span>
            <span className="truncate">{formatDate(ipo.openDate)}</span>
            <span className="truncate">{formatDate(ipo.closeDate)}</span>
          </div>
        </div>

        {/* Row 2: Issue Size / Type / Listing */}
        <div>
          <div className="grid grid-cols-3 text-xs font-semibold text-gray-500 uppercase mb-1">
            <span>Issue Size</span>
            <span>Issue Type</span>
            <span>Listing Date</span>
          </div>
          <div className="grid grid-cols-3 text-gray-800 font-medium gap-1">
            <span className="truncate">{ipo.issueSize}</span>
            <span className="truncate">{ipo.issueType}</span>
            <span className="truncate">{formatDate(ipo.listingDate)}</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-4">
        <button className="w-full border border-blue-500 text-blue-500 rounded-md py-2 text-xs font-semibold hover:bg-blue-50">
          RHP
        </button>
        <button className="w-full bg-red-500 text-white rounded-md py-2 text-xs font-semibold hover:bg-red-600">
          DRHP
        </button>
      </div>
    </div>
  )
}
