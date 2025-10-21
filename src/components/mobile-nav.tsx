import { Link, useLocation } from "react-router-dom"
import { Home, User, GraduationCap, Star, Mail } from "lucide-react"

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/about", icon: User, label: "About" },
  { to: "/courses", icon: GraduationCap, label: "Courses" },
  { to: "/reviews", icon: Star, label: "Reviews" },
  { to: "/contact", icon: Mail, label: "Contact" },
]

export function MobileNav() {
  const location = useLocation()

  // Figure out the basename (Vite/GH Pages friendly)
  const base =
    (import.meta.env.BASE_URL || "").replace(/\/$/, "") || "" // e.g. "/sportsmindmastered"

  // Normalize path by removing basename
  let path = location.pathname.startsWith(base)
    ? location.pathname.slice(base.length)
    : location.pathname
  if (path === "") path = "/"

  const matchItem = (itemPath: string) =>
    itemPath === "/" ? path === "/" : path.startsWith(itemPath)

  let activeIndex = navItems.findIndex((n) => matchItem(n.to))
  if (activeIndex === -1) activeIndex = 0

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0b1a2b]/95 backdrop-blur border-t border-white/10">
      <div className="relative flex items-center justify-around h-16 px-2">
        {/* Animated active indicator */}
        <div
          className="absolute bottom-0 h-1 bg-[#6EE7B7] rounded-full transition-all duration-500 ease-in-out"
          style={{
            width: `${100 / navItems.length}%`,
            left: `${(activeIndex * 100) / navItems.length}%`,
            boxShadow: "0 0 15px #6EE7B7",
          }}
        />

        {navItems.map((item) => {
          const isActive = matchItem(item.to)
          const Icon = item.icon
          return (
            <Link
              key={item.to}
              to={item.to}
              className="flex flex-col items-center justify-center flex-1 h-full gap-1 transition-colors"
            >
              <Icon
                className={`w-5 h-5 transition-all duration-300 ${
                  isActive ? "text-[#6EE7B7] scale-110" : "text-gray-400"
                }`}
                style={isActive ? { filter: "drop-shadow(0 0 8px #6EE7B7)" } : undefined}
              />
              <span
                className={`text-xs transition-colors ${
                  isActive ? "text-[#6EE7B7] font-medium" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
