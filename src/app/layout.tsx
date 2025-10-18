// src/app/layout.tsx
import React from "react"
import { Header } from "../components/header"
import "../app/globals.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      {/* full-width wrapper */}
      <div className="w-full">
        {/* centered content column */}
        <main className="mx-auto w-full max-w-full">
          {children}
        </main>
      </div>
    </div>
  )
}
