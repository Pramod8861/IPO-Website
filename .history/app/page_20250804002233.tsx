"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle, Building2, Calendar, DollarSign } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface IPO {
  _id: string
  companyName: string
  symbol?: string
  logo?: string
  bannerImage?: string
  companyImage?: string
  priceRange?: string
  openDate?: string
  closeDate?: string
  listingDate?: string
  status?: string
  sector?: string
  description?: string
}

export default function IPOsPage() {
  const [ipos, setIpos] = useState<IPO[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchIPOs()
  }, [])

  const fetchIPOs = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/ipos")
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to fetch IPOs")
      }

      if (result.success) {
        setIpos(result.data)
        console.log("📊 IPOs loaded:", result.count)
      } else {
        throw new Error(result.error || "Failed to load IPO data")
      }
    } catch (err) {
      console.error("❌ Error fetching IPOs:", err)
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status?: string) => {
    switch (status?.toLowerCase()) {
      case "open":
        return "bg-green-500"
      case "upcoming":
        return "bg-blue-500"
      case "closed":
        return "bg-gray-500"
      case "listed":
        return "bg-purple-500"
      default:
        return "bg-gray-400"
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto p-6">
        <div className="mb-8">
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-96" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-12 w-12 rounded-lg" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-32 mb-1" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-32 w-full mb-4 rounded-lg" />
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto p-6">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">IPO Dashboard</h1>
        <p className="text-muted-foreground">Manage and view all Initial Public Offerings ({ipos.length} total)</p>
      </div>

      {ipos.length === 0 ? (
        <div className="text-center py-12">
          <Building2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold mb-2">No IPOs Found</h3>
          <p className="text-muted-foreground">No IPO data is available in the database.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ipos.map((ipo) => (
            <Card key={ipo._id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center">
                      {ipo.logo ? (
                        <Image
                          src={ipo.logo || "/placeholder.svg"}
                          alt={`${ipo.companyName} logo`}
                          fill
                          className="object-cover"
                          onError={(e) => {
                            console.warn(`Failed to load logo for ${ipo.companyName}:`, ipo.logo)
                            e.currentTarget.style.display = "none"
                          }}
                        />
                      ) : (
                        <Building2 className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{ipo.companyName}</CardTitle>
                      {ipo.symbol && <p className="text-sm text-muted-foreground">{ipo.symbol}</p>}
                    </div>
                  </div>
                  {ipo.status && <Badge className={getStatusColor(ipo.status)}>{ipo.status}</Badge>}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {(ipo.bannerImage || ipo.companyImage) && (
                  <div className="relative h-32 w-full rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={ipo.bannerImage || ipo.companyImage || ""}
                      alt={`${ipo.companyName} banner`}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        console.warn(
                          `Failed to load banner for ${ipo.companyName}:`,
                          ipo.bannerImage || ipo.companyImage,
                        )
                        e.currentTarget.style.display = "none"
                      }}
                    />
                  </div>
                )}

                <div className="space-y-2">
                  {ipo.priceRange && (
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                      <span>Price Range: {ipo.priceRange}</span>
                    </div>
                  )}

                  {ipo.openDate && (
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Opens: {new Date(ipo.openDate).toLocaleDateString()}</span>
                    </div>
                  )}

                  {ipo.sector && (
                    <div className="flex items-center gap-2 text-sm">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span>Sector: {ipo.sector}</span>
                    </div>
                  )}
                </div>

                {ipo.description && <p className="text-sm text-muted-foreground line-clamp-3">{ipo.description}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
