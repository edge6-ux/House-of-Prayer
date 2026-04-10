import FadeIn from "../components/FadeIn";

const PURPLE = "#581C87";
const INDIGO = "#4B0082";
const GOLD   = "#FFD700";
const CREAM  = "#FAF7F0";

/* ─── Section 1 – Page Hero ─────────────────────────────────────────────── */
function PageHero() {
  return (
    <section
      id="visit"
      className="w-full flex flex-col items-center justify-center"
      style={{ height: "200px", background: `linear-gradient(135deg, ${PURPLE} 0%, ${INDIGO} 100%)` }}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
        Visit Us
      </h1>
      <div className="mt-4 h-1 w-16 rounded" style={{ backgroundColor: GOLD }} />
    </section>
  );
}

/* ─── Section 2 – Service Times ─────────────────────────────────────────── */
const services = [
  {
    day: "Sunday",
    label: "Sunday Morning Service",
    time: "11:30 AM",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    day: "Thursday",
    label: "Thursday Evening Service",
    time: "6:00 PM",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth={1.2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
      </svg>
    ),
  },
];

function ServiceTimes() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: PURPLE }}>
            Join Us For Worship
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded" style={{ backgroundColor: GOLD }} />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <FadeIn key={s.day} delay={i * 150}>
              <div
                className="flex flex-col items-center text-center gap-4 rounded-xl px-4 py-6 sm:px-8 sm:py-10 border-2 shadow-md"
                style={{ borderColor: PURPLE }}
              >
                <span style={{ color: INDIGO }}>{s.icon}</span>
                <span
                  className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ backgroundColor: PURPLE, color: GOLD }}
                >
                  {s.day}
                </span>
                <p className="text-xl font-semibold" style={{ color: PURPLE }}>{s.label}</p>
                <p className="text-3xl sm:text-5xl font-extrabold" style={{ color: GOLD }}>{s.time}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 3 – Contact & Location ────────────────────────────────────── */
function Contact() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: CREAM }}>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">

        {/* Left — contact info */}
        <FadeIn delay={100}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: PURPLE }}>
            Get In Touch
          </h2>
          <div className="h-1 w-16 rounded mb-8" style={{ backgroundColor: GOLD }} />
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <svg className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: GOLD }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a1 1 0 01.948.684l1.01 3.03a1 1 0 01-.23 1.05L7.5 9.27a16.015 16.015 0 006.23 6.23l1.505-1.508a1 1 0 011.05-.23l3.03 1.01A1 1 0 0121 15.72V18a2 2 0 01-2 2h-1C9.163 20 4 14.837 4 8V7a2 2 0 012-2h.5" />
              </svg>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: PURPLE }}>Phone</p>
                <a href="tel:2398267073" className="text-gray-700 hover:text-purple-800 transition-colors">
                  239-826-7073
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <svg className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: GOLD }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: PURPLE }}>Email</p>
                <a href="mailto:hope4godimm@gmail.com" className="text-gray-700 hover:text-purple-800 transition-colors break-all">
                  hope4godimm@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <svg className="h-6 w-6 flex-shrink-0 mt-0.5" style={{ color: GOLD }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: PURPLE }}>Address</p>
                <address className="not-italic text-gray-700 leading-relaxed">
                  401 S. 2nd St.<br />
                  Immokalee, FL 34142
                </address>
              </div>
            </li>
          </ul>
        </FadeIn>

        {/* Right — Google Maps embed */}
        <FadeIn delay={200}>
          <div className="rounded-xl overflow-hidden shadow-md border" style={{ borderColor: "rgba(88,28,135,0.15)" }}>
            <iframe
              title="Church Location"
              src="https://maps.google.com/maps?q=401+S+2nd+St,+Immokalee,+FL+34142&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Section 4 – Scripture Banner ──────────────────────────────────────── */
function Scripture() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: INDIGO }}>
      <FadeIn className="max-w-3xl mx-auto text-center">
        <p className="text-lg sm:text-xl md:text-2xl italic font-medium leading-relaxed" style={{ color: GOLD }}>
          "The Lord himself goes before you and will be with you; he will never leave you nor
          forsake you. Do not be afraid; do not be discouraged."
        </p>
        <p className="mt-4 text-sm sm:text-base font-semibold tracking-wide" style={{ color: GOLD, opacity: 0.75 }}>
          — Deuteronomy 31:8
        </p>
      </FadeIn>
    </section>
  );
}

/* ─── Visit Us Page ──────────────────────────────────────────────────────── */
export default function VisitUs() {
  return (
    <>
      <PageHero />
      <ServiceTimes />
      <Contact />
      <Scripture />
    </>
  );
}
