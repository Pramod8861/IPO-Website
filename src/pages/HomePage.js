"use client"

import { useState, useEffect } from "react"
import IPOCard from "../components/IPOCard"
import FAQ from "../components/FAQ"
import { Link } from "react-router-dom"

const HomePage = () => {
  const [ipos, setIpos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchIPOs()
  }, [])

  const fetchIPOs = async () => {
    try {
      // Mock data - replace with actual API call
      const mockData = [
        {
          _id: "1",
          companyName: "Nava AgriTech Ltd",
          logo: "",
          priceRange: "₹5 - 350",
          openDate: "2024-01-24",
          closeDate: "2024-01-26",
          issueSize: "₹4.8 Cr",
          issueType: "Book Built",
          listingDate: "Not Issued",
          status: "upcoming",
        },
        {
          _id: "2",
          companyName: "EPACK Durable Ltd",
          logo: "",
          priceRange: "₹5 - 350",
          openDate: "2024-01-24",
          closeDate: "2024-01-26",
          issueSize: "₹4.8 Cr",
          issueType: "Book Built",
          listingDate: "Not Issued",
          status: "upcoming",
        },
        {
          _id: "3",
          companyName: "RK Swamy Ltd",
          logo: "",
          priceRange: "₹5 - 350",
          openDate: "2024-01-24",
          closeDate: "2024-01-26",
          issueSize: "₹4.8 Cr",
          issueType: "Book Built",
          listingDate: "Not Issued",
          status: "upcoming",
        },
        {
          _id: "4",
          companyName: "Orvell Stays Ltd",
          logo: "",
          priceRange: "₹5 - 350",
          openDate: "2024-01-24",
          closeDate: "2024-01-26",
          issueSize: "₹4.8 Cr",
          issueType: "Book Built",
          listingDate: "Not Issued",
          status: "upcoming",
        },
        {
          _id: "5",
          companyName: "Imagine marketing Ltd",
          logo: "",
          priceRange: "₹5 - 350",
          openDate: "2024-01-24",
          closeDate: "2024-01-26",
          issueSize: "₹4.8 Cr",
          issueType: "Book Built",
          listingDate: "Not Issued",
          status: "upcoming",
        },
        {
          _id: "6",
          companyName: "Kala Clinic India Ltd",
          logo: "",
          priceRange: "₹5 - 350",
          openDate: "2024-01-24",
          closeDate: "2024-01-26",
          issueSize: "₹4.8 Cr",
          issueType: "Book Built",
          listingDate: "Not Issued",
          status: "upcoming",
        },
      ]

      setTimeout(() => {
        setIpos(mockData)
        setLoading(false)
      }, 1000)
    } catch (err) {
      setError("Error fetching IPO data")
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

  return (
    <div>
      <div className="page-header">
        <h1 className="page-title">Upcoming IPO</h1>
        <p className="page-description">
          Upcoming IPO in India 2024 with live issue dates, issue size, price band, lot size, and other details.
        </p>
        <Link
          to="/upcoming-ipos"
          style={{
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: "500",
            marginTop: "1rem",
            display: "inline-block",
          }}
        >
          View All IPOs →
        </Link>
      </div>

      <div className="ipo-grid">
        {ipos.slice(0, 6).map((ipo) => (
          <IPOCard key={ipo._id} ipo={ipo} />
        ))}
      </div>

      <FAQ />
    </div>
  )
}

export default HomePage
