"use client"
import { useNavigate } from "react-router-dom"

const IPOCard = ({ ipo }) => {
  const navigate = useNavigate()

  const handleDetailsClick = () => {
    navigate(`/ipo/${ipo._id}`)
  }

  return (
    <div className="ipo-card">
      <div className="ipo-header">
        <img
          src={ipo.logo || "/placeholder-logo.png"}
          alt={ipo.companyName}
          className="company-logo"
          onError={(e) => {
            e.target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iNiIgZmlsbD0iI0Y5RkFGQiIvPgo8cGF0aCBkPSJNMjQgMzJDMjguNDE4MyAzMiAzMiAyOC40MTgzIDMyIDI0QzMyIDE5LjU4MTcgMjguNDE4MyAxNiAyNCAxNkMxOS41ODE3IDE2IDE2IDE5LjU4MTcgMTYgMjRDMTYgMjguNDE4MyAxOS41ODE3IDMyIDI0IDMyWiIgZmlsbD0iI0Q1RDlERCIvPgo8L3N2Zz4K"
          }}
        />
        <h3 className="company-name">{ipo.companyName}</h3>
      </div>

      <div className="ipo-details">
        <div className="detail-row">
          <span className="detail-label">PRICE BAND</span>
          <span className="detail-label">OPEN</span>
          <span className="detail-label">CLOSE</span>
        </div>
        <div className="detail-row">
          <span className="detail-value">{ipo.priceRange}</span>
          <span className="detail-value">{ipo.openDate}</span>
          <span className="detail-value">{ipo.closeDate}</span>
        </div>

        <div className="detail-row">
          <span className="detail-label">ISSUE SIZE</span>
          <span className="detail-label">ISSUE TYPE</span>
          <span className="detail-label">LISTING DATE</span>
        </div>
        <div className="detail-row">
          <span className="detail-value">{ipo.issueSize}</span>
          <span className="detail-value">{ipo.issueType}</span>
          <span className="detail-value">{ipo.listingDate}</span>
        </div>
      </div>

      <div className="ipo-actions">
        <button className="bid-btn">BID</button>
        <button className="details-btn" onClick={handleDetailsClick}>
          Details
        </button>
      </div>
    </div>
  )
}

export default IPOCard
