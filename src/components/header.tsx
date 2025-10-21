import { Link, useLocation } from "react-router-dom"

export function Header() {
  const location = useLocation()

  const linkClasses = (path: string) =>
    `block text-sm font-medium transition-colors duration-200 ${
      location.pathname === path
        ? "text-[#6EE7B7]"
        : "text-white hover:text-[#6EE7B7]"
    }`

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b1a2b] border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* ✅ Mobile header */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">
        {/* Logo left */}
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
            src="/sportsmindmastered/new-logo.jpg"
            alt="Simon Capon Logo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Phone + Email stacked right */}
        <div className="flex flex-col items-end text-right text-[0.75rem] leading-tight text-gray-300">
          <a
            href="tel:+447753286234"
            className="hover:text-[#6EE7B7] transition-colors"
          >
            07753 286 234
          </a>
          <a
            href="mailto:info@simoncapon.co.uk"
            className="hover:text-[#6EE7B7] transition-colors"
          >
            info@simoncapon.co.uk
          </a>
        </div>
      </div>

      {/* ✅ Desktop header */}
      <div className="hidden md:flex container mx-auto h-16 items-center justify-between px-4">
        {/* Logo */}
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
            src="/sportsmindmastered/new-logo.jpg"
            alt="Simon Capon Logo"
            className="h-10 w-auto md:h-12 object-contain"
          />
        </Link>

        {/* Desktop Nav */}
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
