import type React from "react"
import type { Metadata } from "next"
import { Inter, Bricolage_Grotesque } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const bricolageGrotesque = Bricolage_Grotesque({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-bricolage",
})

export const metadata: Metadata = {
  title: "Stasis Artis - Where Code Meets Craft",
  description:
    "Bridging the gap between technology and creativity through innovative programs, workshops, and hands-on learning experiences.",
  icons: {
    icon: "/sa.jpg" ,
  },
  verification: {
    google: "TueB4iYNoCRt43HIfnjb0SKvJ0la_iIu8gLiVfYzEak",
  },
    // generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bricolageGrotesque.variable} font-sans antialiased`}>
        <ScrollToTop />
        {children}
        <Footer />
      </body>
    </html>
  )
}
