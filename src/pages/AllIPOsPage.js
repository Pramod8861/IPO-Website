"use client"

import { useState, useEffect } from "react"
import IPOCard from "../components/IPOCard"

const AllIPOsPage = () => {
  const [ipos, setIpos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchAllIPOs()
  }, [])

  const fetchAllIPOs = async () => {
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
        {
          _id: "7",
          companyName: "OLA Electric Mobility Ltd",
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
          _id: "8",
          companyName: "One Mobikwik Systems Ltd",
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
          _id: "9",
          companyName: "Le Travenues Technology",
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
          _id: "10",
          companyName: "CMR Green Technologies",
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
          _id: "11",
          companyName: "Wellness Forever",
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
          _id: "12",
          companyName: "PNJ Ventures Ltd",
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
        <h1 className="page-title">All Upcoming IPOs</h1>
        <p className="page-description">
          Complete list of upcoming IPOs in India 2024 with live issue dates, issue size, price band, lot size, and
          other details.
        </p>
      </div>

      <div className="ipo-grid">
        {ipos.map((ipo) => (
          <IPOCard key={ipo._id} ipo={ipo} />
        ))}
      </div>
    </div>
  )
}

export default AllIPOsPage
