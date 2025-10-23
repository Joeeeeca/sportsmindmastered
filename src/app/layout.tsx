// src/app/layout.tsx
import React from "react"
import { Header } from "../components/header"
import { MobileNav } from "../components/mobile-nav"
import "../app/globals.css"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans flex flex-col">
      {/* Desktop + Mobile Navigation */}
      <Header />
      <MobileNav />

      {/* Main content */}
      <main className="flex-1 w-full mx-auto">
        {children}
      </main>

       {/* Mobile bottom nav */}
      <MobileNav />
    </div>
  )
}
