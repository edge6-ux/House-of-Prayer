import Hero from "../components/Hero";
import FadeIn from "../components/FadeIn";

/* ─── Section 2 – Welcome Strip ─────────────────────────────────────────── */
function Welcome() {
  return (
    <section style={{ backgroundColor: "#581C87" }} className="py-16 px-6">
      <FadeIn className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
          Welcome to The House of Prayer of the Living God, Inc.
        </h2>
        <div
          className="mx-auto mt-4 mb-6 h-1 w-20 rounded"
          style={{ backgroundColor: "#FFD700" }}
        />
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          A place of worship where we pray, fellowship, and worship the one and
          only true and living God. We aim to create a welcoming environment for
          all who seek spiritual growth and guidance.
        </p>
      </FadeIn>
    </section>
  );
}

/* ─── Section 3 – Service Times ─────────────────────────────────────────── */
function ServiceCard({ day, time, label }) {
  return (
    <div
      className="flex flex-col items-center gap-3 px-4 py-6 sm:px-8 sm:py-8 rounded-lg border-2 shadow-md"
      style={{ borderColor: "#581C87" }}
    >
      <svg
        className="h-10 w-10"
        style={{ color: "#4B0082" }}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
      <div
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: "#FFD700", backgroundColor: "#581C87", padding: "2px 12px", borderRadius: "9999px" }}
      >
        {day}
      </div>
      <p className="text-lg font-semibold" style={{ color: "#581C87" }}>{label}</p>
      <p className="text-2xl sm:text-3xl font-bold" style={{ color: "#4B0082" }}>{time}</p>
    </div>
  );
}

function ServiceTimes() {
  return (
    <section id="services" className="py-16 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "#581C87" }}>
            Join Us For Worship
          </h2>
          <div
            className="mx-auto mt-4 mb-10 h-1 w-20 rounded"
            style={{ backgroundColor: "#FFD700" }}
          />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <FadeIn delay={100}><ServiceCard day="Sunday" label="Sunday Morning" time="11:30 AM" /></FadeIn>
          <FadeIn delay={200}><ServiceCard day="Thursday" label="Thursday Evening" time="6:00 PM" /></FadeIn>
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4 – Scripture Banner ──────────────────────────────────────── */
function Scripture() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#4B0082" }}>
      <FadeIn className="max-w-3xl mx-auto text-center">
        <p
          className="text-lg sm:text-xl md:text-2xl italic leading-relaxed font-medium"
          style={{ color: "#FFD700" }}
        >
          "The Lord himself goes before you and will be with you; he will never
          leave you nor forsake you. Do not be afraid; do not be discouraged."
        </p>
        <p
          className="mt-4 text-sm sm:text-base font-semibold tracking-wide"
          style={{ color: "#FFD700", opacity: 0.75 }}
        >
          — Deuteronomy 31:8
        </p>
      </FadeIn>
    </section>
  );
}

/* ─── Section 5 – Quick Links ───────────────────────────────────────────── */
const quickCards = [
  {
    href: "#about",
    label: "About Us",
    description:
      "Learn about our history, our leadership, and the community that makes our church a spiritual home.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-1a4 4 0 00-5.477-3.74M9 20H4v-1a4 4 0 015.477-3.74M15 7a4 4 0 11-8 0 4 4 0 018 0zM21 20a4 4 0 00-3-3.87M3 20a4 4 0 013-3.87" />
      </svg>
    ),
  },
  {
    href: "#vision",
    label: "Vision & Mission",
    description:
      "Discover the vision and mission that drives everything we do as a congregation committed to God's purpose.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    href: "#visit",
    label: "Visit Us",
    description:
      "Find our location, service times, and everything you need to know before your first visit to our church.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

function QuickLinks() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#FAF7F0" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {quickCards.map((card, i) => (
            <FadeIn key={card.href} delay={i * 120}>
              <div
                className="flex flex-col items-center text-center gap-4 bg-white rounded-lg px-6 py-8 shadow-sm border h-full"
                style={{ borderColor: "rgba(46,0,84,0.1)" }}
              >
                <span style={{ color: "#4B0082" }}>{card.icon}</span>
                <h3 className="text-lg font-bold" style={{ color: "#581C87" }}>
                  {card.label}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
                <a
                  href={card.href}
                  className="mt-auto text-sm font-semibold transition-opacity hover:opacity-75"
                  style={{ color: "#FFD700", textDecoration: "underline", textUnderlineOffset: "3px" }}
                >
                  Learn More
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Home Page ─────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <Welcome />
      <ServiceTimes />
      <Scripture />
      <QuickLinks />
    </>
  );
}
