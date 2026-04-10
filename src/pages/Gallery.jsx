import { useState } from "react";
import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";

const images = Array.from({ length: 10 }, (_, i) => ({
  src: `/images/gallery/gallery${i + 1}.avif`,
  alt: `Gallery photo ${i + 1}`,
}));

/* ─── Section 1 – Page Hero ─────────────────────────────────────────────── */
function PageHero() {
  return (
    <section
      className="w-full flex flex-col items-center justify-center text-center px-6"
      style={{
        height: "400px",
        background: "linear-gradient(135deg, #2E0054 0%, #4B0082 100%)",
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
        Photo Gallery
      </h1>
      <div className="mt-4 mb-4 h-1 w-16 rounded" style={{ backgroundColor: "#FFD700" }} />
      <p className="text-base sm:text-lg font-medium" style={{ color: "#FFD700" }}>
        Moments From Our Community
      </p>
    </section>
  );
}

/* ─── Section 2 – Photo Grid + Lightbox ─────────────────────────────────── */
function PhotoGrid() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16 px-6 bg-white">
      <FadeIn className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "#4B0082" }}>
            Our Family In Action
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded" style={{ backgroundColor: "#FFD700" }} />
        </div>

        {/* Masonry grid */}
        <div
          style={{
            columnCount: 3,
            columnGap: "1rem",
          }}
          className="masonry-grid"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="mb-4 overflow-hidden rounded-lg shadow-md cursor-pointer group"
              style={{ breakInside: "avoid" }}
              onClick={() => setSelected(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full block rounded-lg transition-transform duration-300 group-hover:scale-105"
                style={{ display: "block" }}
              />
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={() => setSelected(null)}
        >
          <button
            className="absolute top-5 right-6 text-white text-4xl font-bold leading-none hover:opacity-70 transition-opacity"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Responsive column override */}
      <style>{`
        @media (max-width: 767px) {
          .masonry-grid { column-count: 1 !important; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .masonry-grid { column-count: 2 !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── Section 3 – CTA Banner ─────────────────────────────────────────────── */
function CTABanner() {
  return (
    <section className="py-16 px-6 text-center" style={{ backgroundColor: "#2E0054" }}>
      <FadeIn>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Want To See More?
        </h2>
        <p className="text-base sm:text-lg font-semibold mb-8" style={{ color: "#FFD700" }}>
          Join us every Sunday at 11:30 AM and Thursday at 6:00 PM
        </p>
        <Link
          to="/visit"
          className="inline-block px-8 py-3 rounded font-bold text-sm sm:text-base transition-opacity hover:opacity-85 shadow-lg"
          style={{ backgroundColor: "#FFD700", color: "#2E0054" }}
        >
          Plan Your Visit
        </Link>
      </FadeIn>
    </section>
  );
}

/* ─── Gallery Page ───────────────────────────────────────────────────────── */
export default function Gallery() {
  return (
    <>
      <PageHero />
      <PhotoGrid />
      <CTABanner />
    </>
  );
}
