import { ClerkProvider } from "@clerk/nextjs"

import type { Metadata } from "next"

import "./globals.css"

import { ModalProvider } from "@/providers/modal-provider"
import { ToasterProvider } from "@/providers/toast-provider"

export const metadata: Metadata = {
  title: "Ecommerce-mercy",
  description: "Your modern e-commerce admin dashboard",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="bg-gray-900">

        <ToasterProvider />
        
        <ModalProvider/>
          {children}
        
      </body>
    </html>
    </ClerkProvider>
  )
}