import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Vision & Mission", to: "/vision" },
  { label: "Service", to: "/service" },
  { label: "Visit Us", to: "/visit" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 shadow-md border-b"
      style={{ backgroundColor: "#ffffff", borderColor: "rgba(88,28,135,0.15)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo + Church Name */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 hover:opacity-80 transition-opacity">
            <img
              src="/button2.png"
              alt="House of Prayer Logo"
              className="h-10 w-10 object-contain"
            />
            <span
              className="font-bold text-sm sm:text-base leading-tight max-w-[200px] sm:max-w-xs"
              style={{ color: "#581C87" }}
            >
              The House of Prayer of the Living God
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium transition-colors hover:opacity-70"
                style={{
                  color: "#581C87",
                  fontWeight: pathname === link.to ? "700" : "500",
                  borderBottom: pathname === link.to ? "2px solid #FFD700" : "2px solid transparent",
                  paddingBottom: "2px",
                }}
              >
                {link.label}
              </Link>
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
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium py-1 border-b transition-opacity hover:opacity-70"
              style={{
                color: "#581C87",
                borderColor: "rgba(88,28,135,0.1)",
                fontWeight: pathname === link.to ? "700" : "500",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
