import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rugved Salpekar - Full Stack Developer",
  description:
    "Portfolio of Rugved Salpekar - Full Stack Developer & Software Engineer passionate about creating innovative web solutions.",
  keywords: "Rugved Salpekar, Full Stack Developer, Software Engineer, React, Next.js, Node.js, Portfolio",
  authors: [{ name: "Rugved Salpekar" }],
  openGraph: {
    title: "Rugved Salpekar - Full Stack Developer",
    description: "Portfolio of Rugved Salpekar - Full Stack Developer & Software Engineer",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
