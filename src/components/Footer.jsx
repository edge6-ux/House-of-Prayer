import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Vision & Mission", to: "/vision" },
  { label: "Services", to: "/service" },
  { label: "Visit Us", to: "/visit" },
  { label: "Gallery", to: "/gallery" },
  { label: "Donate", to: "/donate" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#581C87" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1 — Church Name & Tagline */}
          <div className="flex flex-col gap-3">
            <h2
              className="text-xl font-bold leading-snug"
              style={{ color: "#FFD700" }}
            >
              The House of Prayer of the Living God
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              A place of worship, community, and spiritual growth — rooted in
              faith and devoted to serving God and our neighbors.
            </p>
            {/* Facebook */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="mt-2 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-75"
              style={{ color: "#FFD700" }}
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Follow us on Facebook
            </a>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3
              className="text-base font-semibold mb-4 uppercase tracking-wide"
              style={{ color: "#FFD700" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact Info */}
          <div>
            <h3
              className="text-base font-semibold mb-4 uppercase tracking-wide"
              style={{ color: "#FFD700" }}
            >
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                {/* Phone icon */}
                <svg className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#FFD700" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.01 3.03a1 1 0 01-.23 1.05L7.5 9.27a16.015 16.015 0 006.23 6.23l1.505-1.508a1 1 0 011.05-.23l3.03 1.01A1 1 0 0121 15.72V18a2 2 0 01-2 2h-1C9.163 20 4 14.837 4 8V7a2 2 0 012-2h.5" />
                </svg>
                <a href="tel:2398267073" className="hover:text-white transition-colors">
                  239-826-7073
                </a>
              </li>
              <li className="flex items-start gap-2">
                {/* Email icon */}
                <svg className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#FFD700" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hope4godimm@gmail.com" className="hover:text-white transition-colors break-all">
                  hope4godimm@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                {/* Location icon */}
                <svg className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "#FFD700" }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="not-italic leading-relaxed">
                  401 S. 2nd St.<br />
                  Immokalee, FL 34142
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        className="border-t py-4 text-center text-xs text-gray-400"
        style={{ borderColor: "rgba(255,215,0,0.2)" }}
      >
        &copy; {new Date().getFullYear()} The House of Prayer of the Living God. All rights reserved.
      </div>
    </footer>
  );
}
