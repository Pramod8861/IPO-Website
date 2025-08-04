"use client"

import { useState, useEffect } from "react"
import Header from "../components/header"
import IPOCard from "../components/ipo-card"
import FAQ from "../components/faq"
import Footer from "../components/footer"

interface IPO {
  _id: string
  companyName: string
  companyLogo: string
  priceRange: string
  openDate: string
  closeDate: string
  issueSize: string
  issueType: string
  listingDate: string
  status: string
}

export default function HomePage() {
  const [ipos, setIpos] = useState<IPO[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchIPOs()
  }, [])

  const fetchIPOs = async () => {
    try {
      const response = await fetch("/api/ipos")
      const data = await response.json()

      if (data.success) {
        setIpos(data.data)
      } else {
        setError("Failed to fetch IPO data")
      }
    } catch (err) {
      setError("Error fetching IPO data")
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex justify-center items-center h-64">
          <div className="text-red-600 text-center">
            <p className="text-lg font-semibold">Error</p>
            <p>{error}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Upcoming IPO</h1>
          <p className="text-gray-600">
            Upcoming IPO in India 2024 with live issue dates, issue size, price band, lot size, and other details.
          </p>
        </div>

        {/* IPO Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {ipos.map((ipo) => (
            <IPOCard key={ipo._id} ipo={ipo} />
          ))}
        </div>

        {/* FAQ Section */}
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}
