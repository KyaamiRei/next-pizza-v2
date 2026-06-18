import { Geist, Geist_Mono, Nunito } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Header } from "@/components/shared/header"

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(nunito.className)}>
      <body>
        <ThemeProvider>
          <main className="min-h-screen">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
