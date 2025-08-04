import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bluestock - Upcoming IPO in India 2024",
  description: "Upcoming IPO in India 2024 with live issue dates, issue size, price band, lot size, and other details.",
  keywords: "IPO, Initial Public Offering, India, Stock Market, Investment",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
