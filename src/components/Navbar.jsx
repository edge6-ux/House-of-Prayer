import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Vision & Mission", href: "#vision" },
  { label: "Service", href: "#services" },
  { label: "Visit Us", href: "#visit" },
  { label: "Gallery", href: "#gallery" },
  { label: "Donate", href: "#donate" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-md border-b"
      style={{ backgroundColor: "#ffffff", borderColor: "rgba(88,28,135,0.15)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Church Name */}
          <a href="#home" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
            <img
              src="/button2.png"
              alt="House of Prayer Logo"
              className="h-10 w-10 object-contain"
            />
            <span
              className="font-bold text-sm sm:text-base leading-tight max-w-[200px] sm:max-w-xs"
              style={{ color: "#581C87" }}
            >
              The House of Prayer of the Living God, Inc.
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{ color: "#581C87" }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden p-2 rounded focus:outline-none"
              style={{ color: "#581C87" }}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="lg:hidden px-4 pb-4 pt-2 flex flex-col gap-3 shadow-md border-t"
          style={{ backgroundColor: "#ffffff", borderColor: "rgba(88,28,135,0.15)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-1 border-b transition-opacity hover:opacity-70"
              style={{ color: "#581C87", borderColor: "rgba(88,28,135,0.1)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center px-4 py-2 rounded font-semibold text-sm transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#581C87", color: "#ffffff" }}
          >
            Give Now
          </a>
        </div>
      )}
    </nav>
  );
}
