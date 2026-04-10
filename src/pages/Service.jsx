import FadeIn from "../components/FadeIn";

const PURPLE = "#581C87";
const INDIGO = "#4B0082";
const GOLD   = "#FFD700";
const CREAM  = "#FAF7F0";


/* ─── Section 3 – Photo Grid ─────────────────────────────────────────────── */
const servicePhotos = Array.from({ length: 15 }, (_, i) => `/images/service/service${i + 1}.avif`);

function PhotoGrid() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: CREAM }}>
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: PURPLE }}>
            Service
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded" style={{ backgroundColor: GOLD }} />
        </FadeIn>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
          {servicePhotos.map((src, i) => (
            <div key={i} className="break-inside-avoid mb-4">
              <img
                src={src}
                alt={`Service photo ${i + 1}`}
                className="w-full rounded-lg shadow-sm transition-transform duration-300 hover:scale-[1.03] cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4 – Service Types ─────────────────────────────────────────── */
const serviceTypes = [
  {
    title: "Worship & Praise",
    description: "Powerful Spirit-filled worship that ushers in the presence of God",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
      </svg>
    ),
  },
  {
    title: "The Word",
    description: "Anointed biblical teaching that applies to everyday life",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Prayer & Fellowship",
    description: "A community that prays together and supports one another",
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75s.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
];

function ServiceTypes() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: PURPLE }}>
            What To Expect
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded" style={{ backgroundColor: GOLD }} />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {serviceTypes.map((item, i) => (
            <FadeIn key={item.title} delay={i * 120}>
              <div
                className="flex flex-col items-center text-center gap-4 rounded-lg px-6 py-8 border-t-4 h-full"
                style={{ backgroundColor: CREAM, borderColor: PURPLE }}
              >
                <span style={{ color: GOLD }}>{item.icon}</span>
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


/* ─── Service Page ───────────────────────────────────────────────────────── */
export default function Service() {
  return (
    <>
      <section id="services" />
      <PhotoGrid />
      <ServiceTypes />
    </>
  );
}
