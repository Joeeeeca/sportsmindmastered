export function Footer() {
  return (
    <footer
      id="contact"
      className="w-full border-t border-accent/30 bg-[#0a1726] py-16 text-gray-300"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* 3 equal columns */}
          <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">
            {/* Brand */}
            <div className="space-y-4">
             <h3 className="text-lg font-bold text-white relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#6EE7B7]">
  Sports Mind Mastered
</h3>
              <p className="text-sm leading-relaxed">
                Empowering athletes to achieve mental excellence and peak performance.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 md:text-center">
              {/* underline sits under the text, left-aligned */}
             <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 relative inline-block after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#6EE7B7]">
  Quick Links
</h4>


              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-[#6EE7B7] transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/courses"
                    className="text-gray-300 hover:text-[#6EE7B7] transition-colors duration-300"
                  >
                    Content
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-300 hover:text-[#6EE7B7] transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4 md:text-right">
              {/* same underline trick */}
          <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-200 relative inline-block md:ml-auto after:absolute after:right-0 after:-bottom-1 after:h-[2px] after:w-8 after:bg-[#6EE7B7]">
  Get In Touch
</h4>


              <div className="space-y-2 text-sm">
                <p>
                  Email:{' '}
                  <a
                    href="mailto:info@simoncapon.co.uk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#6EE7B7] transition-colors duration-300"
                  >
                    info@simoncapon.co.uk
                  </a>
                </p>
                <p>
                  Phone:{' '}
                  <a
                    href="https://wa.me/447753286234"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-300 hover:text-[#6EE7B7] transition-colors duration-300"
                  >
                    07753 286 234
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
            <p className="text-sm text-gray-400">
              &copy; 2025 Simon Capon. All rights reserved.
            </p>
            <img
              src="/sportsmindmastered/AIP-logo1.png"
              alt="AIP Certified"
              className="h-24 w-auto opacity-95"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
