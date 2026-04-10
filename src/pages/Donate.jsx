import FadeIn from "../components/FadeIn";

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
        Give
      </h1>
      <div className="mt-4 mb-4 h-1 w-16 rounded" style={{ backgroundColor: "#FFD700" }} />
      <p className="text-base sm:text-lg font-medium" style={{ color: "#FFD700" }}>
        Support The House of Prayer
      </p>
    </section>
  );
}

/* ─── Section 2 – Why Give ───────────────────────────────────────────────── */
const whyCards = [
  {
    label: "Support Worship",
    description: "Help us create a meaningful worship experience every week.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l3-3m0 0l3 3m-3-3v12M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
      </svg>
    ),
  },
  {
    label: "Fund Outreach",
    description: "Empower programs that serve our neighbors in need.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
      </svg>
    ),
  },
  {
    label: "Build Community",
    description: "Invest in a family united by faith, love, and purpose.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-1a4 4 0 00-5.477-3.74M9 20H4v-1a4 4 0 015.477-3.74M15 7a4 4 0 11-8 0 4 4 0 018 0zM21 20a4 4 0 00-3-3.87M3 20a4 4 0 013-3.87" />
      </svg>
    ),
  },
];

function WhyGive() {
  return (
    <section className="py-16 px-6 bg-white">
      <FadeIn className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#4B0082" }}>
          Your Generosity Makes A Difference
        </h2>
        <div className="mx-auto mb-6 h-1 w-16 rounded" style={{ backgroundColor: "#FFD700" }} />
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-12">
          Your generous gifts help us continue our mission of spreading love, hope, and faith
          to our community and beyond. Every contribution goes directly toward worship,
          outreach programs, and serving those in need.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {whyCards.map((card, i) => (
            <FadeIn key={card.label} delay={i * 100}>
              <div className="flex flex-col items-center gap-3">
                <span style={{ color: "#FFD700" }}>{card.icon}</span>
                <p className="text-base font-bold" style={{ color: "#581C87" }}>{card.label}</p>
                <p className="text-sm text-gray-600">{card.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

/* ─── Section 3 – Give Now ───────────────────────────────────────────────── */
const altMethods = [
  {
    label: "By Mail",
    value: "401 S. 2nd St. Immokalee, FL 34142",
    icon: (
      <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "By Phone",
    value: "239-826-7073",
    href: "tel:2398267073",
    icon: (
      <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.01 3.03a1 1 0 01-.23 1.05L7.5 9.27a16.015 16.015 0 006.23 6.23l1.505-1.508a1 1 0 011.05-.23l3.03 1.01A1 1 0 0121 15.72V18a2 2 0 01-2 2h-1C9.163 20 4 14.837 4 8V7a2 2 0 012-2h.5" />
      </svg>
    ),
  },
  {
    label: "By Email",
    value: "hope4godimm@gmail.com",
    href: "mailto:hope4godimm@gmail.com",
    icon: (
      <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function GiveNow() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#FAF7F0" }}>
      <FadeIn className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#4B0082" }}>
          Ready To Give?
        </h2>
        <div className="mx-auto mb-8 h-1 w-16 rounded" style={{ backgroundColor: "#FFD700" }} />

        <a
          href="https://www.givelify.com/donate/the-house-of-prayer-of-the-living-god-inc-immokalee-fl-2j7wy5MTg0ODYwNw==/donation/amount"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-lg font-bold text-lg transition-opacity hover:opacity-85 shadow-lg mb-3"
          style={{ backgroundColor: "#FFD700", color: "#2E0054" }}
        >
          Give Through Givelify
        </a>
        <p className="text-sm text-gray-500 mb-10">Secure online giving powered by Givelify</p>

        <div className="flex flex-col gap-4 text-left">
          {altMethods.map((method) => (
            <div
              key={method.label}
              className="flex items-center gap-4 px-5 py-4 rounded-lg bg-white shadow-sm border"
              style={{ borderColor: "rgba(88,28,135,0.1)" }}
            >
              <span style={{ color: "#4B0082" }}>{method.icon}</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#FFD700", backgroundColor: "#581C87", padding: "1px 10px", borderRadius: "9999px", display: "inline-block" }}>
                  {method.label}
                </p>
                {method.href ? (
                  <a href={method.href} className="block text-sm text-gray-700 hover:text-purple-800 transition-colors mt-1">
                    {method.value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-700 mt-1">{method.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

/* ─── Section 4 – Scripture Banner ──────────────────────────────────────── */
function Scripture() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#4B0082" }}>
      <FadeIn className="max-w-3xl mx-auto text-center">
        <p
          className="text-lg sm:text-xl md:text-2xl italic font-medium leading-relaxed"
          style={{ color: "#FFD700" }}
        >
          "Each of you should give what you have decided in your heart to give, not
          reluctantly or under compulsion, for God loves a cheerful giver."
        </p>
        <p
          className="mt-4 text-sm sm:text-base font-semibold tracking-wide"
          style={{ color: "#FFD700", opacity: 0.75 }}
        >
          — 2 Corinthians 9:7
        </p>
      </FadeIn>
    </section>
  );
}

/* ─── Donate Page ────────────────────────────────────────────────────────── */
export default function Donate() {
  return (
    <>
      <PageHero />
      <WhyGive />
      <GiveNow />
      <Scripture />
    </>
  );
}
