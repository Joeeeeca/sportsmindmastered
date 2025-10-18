import { Link, useLocation } from "react-router-dom"

export function Header() {
  const location = useLocation()

  const linkClasses = (path: string) =>
    `text-sm font-medium transition-colors duration-200 ${
      location.pathname === path
        ? "text-[#6EE7B7]" // active color
        : "text-white hover:text-[#6EE7B7]" // inactive color + hover
    }`

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b1a2b] border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
       <Link
  to="/"
  onClick={() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }}
  className="flex items-center space-x-3 cursor-pointer"
>
  <img
    src="/Logo.png"
    alt="Simon Capon Logo"
    className="h-10 w-auto md:h-12 object-contain"
  />
</Link>

        <nav className="flex items-center gap-6">
          <Link to="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link to="/about" className={linkClasses("/about")}>
            About
          </Link>
          <Link to="/courses" className={linkClasses("/courses")}>
            Courses
          </Link>
          <Link to="/reviews" className={linkClasses("/reviews")}>
            Reviews
          </Link>
          <Link to="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
