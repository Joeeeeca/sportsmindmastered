import React from "react"
import clsx from "clsx"

interface CardProps {
  className?: string
  children: React.ReactNode
}

export function Card({ className = "", children }: CardProps) {
  return (
    <div
      className={clsx(
        // ✨ Visible on both light + dark backgrounds
        "relative rounded-xl border bg-white/80",
        "border-gray-200 shadow-sm",
        "transition-transform duration-200 hover:-translate-y-1 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  )
}

interface CardContentProps {
  className?: string
  children: React.ReactNode
}

export function CardContent({ className = "", children }: CardContentProps) {
  return <div className={clsx("relative z-10 p-6", className)}>{children}</div>
}
