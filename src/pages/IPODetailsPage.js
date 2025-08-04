"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

const IPODetailsPage = () => {
  const { id } = useParams()
  const [ipo, setIpo] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchIPODetails()
  }, [id])

  const fetchIPODetails = async () => {
    try {
      // Mock data - replace with actual API call
      const mockData = {
        _id: id,
        companyName: "Nava AgriTech Ltd",
        logo: "",
        priceRange: "₹5 - 350",
        openDate: "2024-01-24",
        closeDate: "2024-01-26",
        issueSize: "₹4.8 Cr",
        issueType: "Book Built",
        listingDate: "Not Issued",
        status: "upcoming",
        description:
          "Nava AgriTech Ltd is a leading agricultural technology company focused on sustainable farming solutions and innovative agricultural practices.",
        objectives: [
          "Expansion of manufacturing facilities",
          "Research and development activities",
          "Working capital requirements",
          "General corporate purposes",
        ],
        financials: {
          revenue: "₹125.6 Cr",
          profit: "₹18.4 Cr",
          netWorth: "₹89.2 Cr",
        },
        lotSize: "100 shares",
        minimumInvestment: "₹35,000",
        registrar: "Link Intime India Pvt Ltd",
        leadManagers: ["ICICI Securities", "Kotak Mahindra Capital"],
      }

      setTimeout(() => {
        setIpo(mockData)
        setLoading(false)
      }, 1000)
    } catch (err) {
      setError("Error fetching IPO details")
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="error">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    )
  }

  if (!ipo) {
    return (
      <div className="error">
        <h2>IPO Not Found</h2>
        <p>The requested IPO could not be found.</p>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}>
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          color: "#2563eb",
          textDecoration: "none",
          marginBottom: "2rem",
        }}
      >
        <ArrowLeft size={20} />
        Back to IPOs
      </Link>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "2rem" }}>
        <div>
          <div
            style={{
              background: "white",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              padding: "2rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <img
                src={ipo.logo || "/placeholder-logo.png"}
                alt={ipo.companyName}
                style={{ width: "64px", height: "64px", borderRadius: "8px" }}
                onError={(e) => {
                  e.target.src =
                    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiByeD0iOCIgZmlsbD0iI0Y5RkFGQiIvPgo8cGF0aCBkPSJNMzIgNDJDMzcuNTIyOCA0MiA0MiAzNy41MjI4IDQyIDMyQzQyIDI2LjQ3NzIgMzcuNTIyOCAyMiAzMiAyMkMyNi40NzcyIDIyIDIyIDI2LjQ3NzIgMjIgMzJDMjIgMzcuNTIyOCAyNi40NzcyIDQyIDMyIDQyWiIgZmlsbD0iI0Q1RDlERCIvPgo8L3N2Zz4K"
                }}
              />
              <div>
                <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#111827", marginBottom: "0.5rem" }}>
                  {ipo.companyName}
                </h1>
                <span
                  style={{
                    background: "#fef3c7",
                    color: "#92400e",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "9999px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  {ipo.status.toUpperCase()}
                </span>
              </div>
            </div>

            <p style={{ color: "#6b7280", lineHeight: "1.6", marginBottom: "2rem" }}>{ipo.description}</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              <div>
                <h3 style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>Price Band</h3>
                <p style={{ color: "#6b7280" }}>{ipo.priceRange}</p>
              </div>
              <div>
                <h3 style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>Issue Size</h3>
                <p style={{ color: "#6b7280" }}>{ipo.issueSize}</p>
              </div>
              <div>
                <h3 style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>Lot Size</h3>
                <p style={{ color: "#6b7280" }}>{ipo.lotSize}</p>
              </div>
              <div>
                <h3 style={{ fontWeight: "600", color: "#111827", marginBottom: "0.5rem" }}>Min Investment</h3>
                <p style={{ color: "#6b7280" }}>{ipo.minimumInvestment}</p>
              </div>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>Issue Objectives</h3>
              <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "#6b7280" }}>
                {ipo.objectives.map((objective, index) => (
                  <li key={index} style={{ marginBottom: "0.5rem" }}>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 style={{ fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>Key Financials</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                <div style={{ background: "#f9fafb", padding: "1rem", borderRadius: "6px" }}>
                  <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "0.25rem" }}>REVENUE</p>
                  <p style={{ fontWeight: "600", color: "#111827" }}>{ipo.financials.revenue}</p>
                </div>
                <div style={{ background: "#f9fafb", padding: "1rem", borderRadius: "6px" }}>
                  <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "0.25rem" }}>PROFIT</p>
                  <p style={{ fontWeight: "600", color: "#111827" }}>{ipo.financials.profit}</p>
                </div>
                <div style={{ background: "#f9fafb", padding: "1rem", borderRadius: "6px" }}>
                  <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "0.25rem" }}>NET WORTH</p>
                  <p style={{ fontWeight: "600", color: "#111827" }}>{ipo.financials.netWorth}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            style={{
              background: "white",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <h3 style={{ fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>IPO Timeline</h3>
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "0.25rem" }}>Open Date</p>
              <p style={{ fontWeight: "500", color: "#111827" }}>{ipo.openDate}</p>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "0.25rem" }}>Close Date</p>
              <p style={{ fontWeight: "500", color: "#111827" }}>{ipo.closeDate}</p>
            </div>
            <div>
              <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "0.25rem" }}>Listing Date</p>
              <p style={{ fontWeight: "500", color: "#111827" }}>{ipo.listingDate}</p>
            </div>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              padding: "1.5rem",
              marginBottom: "1.5rem",
            }}
          >
            <h3 style={{ fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>Issue Details</h3>
            <div style={{ marginBottom: "1rem" }}>
              <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "0.25rem" }}>Issue Type</p>
              <p style={{ fontWeight: "500", color: "#111827" }}>{ipo.issueType}</p>
            </div>
            <div>
              <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "0.25rem" }}>Registrar</p>
              <p style={{ fontWeight: "500", color: "#111827" }}>{ipo.registrar}</p>
            </div>
          </div>

          <div style={{ background: "white", borderRadius: "8px", border: "1px solid #e5e7eb", padding: "1.5rem" }}>
            <h3 style={{ fontWeight: "600", color: "#111827", marginBottom: "1rem" }}>Lead Managers</h3>
            {ipo.leadManagers.map((manager, index) => (
              <p key={index} style={{ color: "#6b7280", marginBottom: "0.5rem" }}>
                {manager}
              </p>
            ))}
          </div>

          <button
            style={{
              width: "100%",
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "0.75rem 1.5rem",
              borderRadius: "6px",
              fontWeight: "600",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "1.5rem",
            }}
          >
            Apply for IPO
          </button>
        </div>
      </div>
    </div>
  )
}

export default IPODetailsPage
