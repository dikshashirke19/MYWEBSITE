import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import BackgroundAnimation from "@/components/background-animation"
import CustomCursor from "@/components/custom-cursor"
import KubernetesCommands from "@/components/kubernetes-commands"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Diksha Shirke | DevOps Engineer",
  description: "Portfolio website of Diksha Shirke, DevOps Engineer",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 overflow-hidden relative">
            <BackgroundAnimation />
            <CustomCursor />
            <KubernetesCommands position="random" interval={10000} />
            <div className="container mx-auto px-4 relative z-10">
              <Navbar />
              <main className="relative z-10">{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'