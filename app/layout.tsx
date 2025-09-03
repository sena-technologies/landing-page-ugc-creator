import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "UGC Creator - Portfólio de Beleza",
  description: "Portfólio profissional de UGC Creator especializada em maquiagem, skincare e produtos de cabelo",
  generator: "v0.app",
  keywords: ["UGC Creator", "beleza", "maquiagem", "skincare", "cabelo", "conteúdo", "influenciadora"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
