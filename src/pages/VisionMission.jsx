import FadeIn from "../components/FadeIn";

const PURPLE = "#581C87";
const INDIGO = "#4B0082";
const GOLD   = "#FFD700";
const CREAM  = "#FAF7F0";

/* ─── Section 1 – Page Hero ─────────────────────────────────────────────── */
function PageHero() {
  return (
    <section
      id="vision"
      className="w-full flex flex-col items-center justify-center"
      style={{ height: "200px", background: `linear-gradient(135deg, ${PURPLE} 0%, ${INDIGO} 100%)` }}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
        Vision &amp; Mission
      </h1>
      <div className="mt-4 h-1 w-16 rounded" style={{ backgroundColor: GOLD }} />
    </section>
  );
}

/* ─── Section 2 – Vision & Mission Statements ────────────────────────────── */
function Statements() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        <FadeIn delay={100}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: PURPLE }}>Our Vision</h2>
          <div className="h-1 w-12 rounded mb-5" style={{ backgroundColor: GOLD }} />
          <p className="text-gray-700 leading-relaxed">
            To be a beacon of light, hope, and love in the community, inspiring transformation
            through the power of prayer and teachings of Jesus Christ, fostering unity among
            believers and impacting lives both locally and globally.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <h2 className="text-2xl font-bold mb-3" style={{ color: PURPLE }}>Our Mission</h2>
          <div className="h-1 w-12 rounded mb-5" style={{ backgroundColor: GOLD }} />
          <p className="text-gray-700 leading-relaxed">
            To cultivate a vibrant community of faith through prayer, worship, and service,
            empowering individuals to deepen their relationship with God and actively serve
            and love their neighbor as we love ourselves.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Section 3 – Statement of Beliefs ──────────────────────────────────── */
const beliefs = [
  "We Believe the Bible to be inspired and the only infallible, authoritative Word of God.",
  "We Believe that there is one God, eternally existent in three persons: God the Father, God the Son, and God the Holy Spirit.",
  "We Believe in the deity of our Lord Jesus Christ, His virgin birth, His bodily resurrection, His ascension to the right hand of the Father, and in the blessed hope of His personal, visible future return to this earth to receive to Himself His Blood-bought Church, that it may be with Him forever.",
  "We Believe that the only means of being cleansed from sin is through repentance and faith in the precious blood of Jesus Christ.",
  "We Believe that regeneration by the Holy Spirit is absolutely essential for one's personal salvation.",
  "We Believe that the redemptive work of Christ on the cross provides healing of the human body in answer to believing prayer.",
  "We Believe that the baptism with the Holy Spirit, according to Acts 2:4, with evidence of speaking in other tongues, is given to Believers who ask for it.",
  "We Believe in the sanctifying power of the Holy Spirit by Whose indwelling enables the Christian to live a Holy life.",
  "We Believe in the resurrection of both the saved and the lost, the one to everlasting life and the other to everlasting damnation.",
  "We Believe in water baptism by immersion in the Name of our Lord Jesus Christ and observance of the Lord's Supper.",
];

function CrossIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill={GOLD}>
      <path d="M11 3h2v7h7v2h-7v7h-2v-7H4v-2h7V3z" />
    </svg>
  );
}

function Beliefs() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: CREAM }}>
      <div className="max-w-4xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: PURPLE }}>
            Statement of Beliefs
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded" style={{ backgroundColor: GOLD }} />
        </FadeIn>
        <ul className="flex flex-col gap-5">
          {beliefs.map((belief, i) => (
            <FadeIn key={i} delay={i * 50}>
              <li className="flex items-start gap-4 bg-white rounded-lg px-6 py-4 shadow-sm border"
                style={{ borderColor: "rgba(88,28,135,0.1)" }}>
                <CrossIcon />
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{belief}</p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─── Section 4 – Opportunities ─────────────────────────────────────────── */
const opportunities = [
  {
    title: "Sunday Service",
    description: "Join us every Sunday morning at 11:30 AM for a powerful time of worship, prayer, and the Word of God.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Community Outreach",
    description: "We are committed to serving our community through outreach programs that meet both physical and spiritual needs.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Midweek Fellowship",
    description: "Join us every Thursday evening at 6:00 PM for Bible study, prayer, and fellowship to deepen your faith.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Special Events",
    description: "Throughout the year we host revivals, community gatherings, and special services. Stay connected to see what's coming.",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
  },
];

function Opportunities() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: PURPLE }}>
            Discover More Opportunities
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded" style={{ backgroundColor: GOLD }} />
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {opportunities.map((item, i) => (
            <FadeIn key={item.title} delay={i * 100}>
              <div
                className="flex flex-col items-start gap-4 bg-white rounded-lg p-6 border shadow-sm h-full"
                style={{ borderColor: "rgba(88,28,135,0.15)" }}
              >
                <span style={{ color: INDIGO }}>{item.icon}</span>
                <h3 className="text-lg font-bold" style={{ color: PURPLE }}>{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 5 – Scripture Banner ──────────────────────────────────────── */
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

/* ─── Vision & Mission Page ──────────────────────────────────────────────── */
export default function VisionMission() {
  return (
    <>
      <PageHero />
      <Statements />
      <Beliefs />
      <Opportunities />
      <Scripture />
    </>
  );
}
