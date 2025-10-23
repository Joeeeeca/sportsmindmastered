import React from "react"
import clsx from "clsx"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "light"
  size?: "sm" | "md" | "lg"
}

export function Button({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"

  const variants = {
    // ✅ Your main brand button (purple)
    default: "bg-[#646cff] text-white hover:bg-[#535bf2]",

    // ✅ Subtle outline version for light backgrounds
    outline:
      "border border-gray-300 text-gray-800 bg-transparent hover:bg-gray-100",

    // ✅ For use on dark or gradient backgrounds (like your course cards)
    light:
      "bg-white text-[#646cff] hover:bg-white/90 border border-[#646cff]/20 font-semibold",
  }

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-8 text-base",
  }

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  )
}
