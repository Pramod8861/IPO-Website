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
    isNaN(Date.parse(dateStr)) ? "Not Issued" : new Date(dateStr).toISOString().split("T")[0]

  return (
    <div className="w-[280px] min-h-[300px] bg-white rounded-xl border border-gray-200 p-5 shadow-sm hover:shadow-md transition-all text-sm flex flex-col justify-between">
      {/* Logo and Title */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded">
          <Image
            src={imagePath}
            alt={ipo.companyName}
            width={64}
            height={64}
            className="object-contain w-10 h-10"
          />
        </div>
        <h3 className="text-blue-700 font-semibold text-sm truncate">{ipo.companyName}</h3>
      </div>

      {/* IPO Details */}
      <div className="space-y-2 text-[13px] flex-1">
        {/* Row 1 */}
        <div>
          <div className="grid grid-cols-3 text-[11px] text-gray-500 font-semibold uppercase mb-1">
            <span>Price Band</span>
            <span>Open</span>
            <span>Close</span>
          </div>
          <div className="grid grid-cols-3 gap-x-2 font-medium text-gray-800">
            <span className="truncate">{ipo.priceBand || "Not Issued"}</span>
            <span>{formatDate(ipo.openDate)}</span>
            <span>{formatDate(ipo.closeDate)}</span>
          </div>
        </div>

        {/* Row 2 */}
        <div>
          <div className="grid grid-cols-3 text-[11px] text-gray-500 font-semibold uppercase mb-1">
            <span>Issue Size</span>
            <span>Issue Type</span>
            <span>Listing Date</span>
          </div>
          <div className="grid grid-cols-3 gap-x-2 font-medium text-gray-800">
            <span className="truncate">{ipo.issueSize || "Not Issued"}</span>
            <span className="truncate">{ipo.issueType || "Not Issued"}</span>
            <span>{formatDate(ipo.listingDate)}</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">
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
