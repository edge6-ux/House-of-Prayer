import FadeIn from "../components/FadeIn";

/* ─── Section 1 – Page Hero ─────────────────────────────────────────────── */
function PageHero() {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center"
      style={{
        height: "200px",
        background: "linear-gradient(135deg, #581C87 0%, #4B0082 100%)",
      }}
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
        About Us
      </h1>
      <div className="mt-4 h-1 w-16 rounded" style={{ backgroundColor: "#FFD700" }} />
    </section>
  );
}

/* ─── Section 2 – Who We Are ────────────────────────────────────────────── */
function WhoWeAre() {
  return (
    <section className="py-16 px-6 bg-white">
      <FadeIn className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#4B0082" }}>
          Who We Are
        </h2>
        <div className="mx-auto mb-8 h-1 w-16 rounded" style={{ backgroundColor: "#FFD700" }} />
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          The House of Prayer of the Living God is a Spirit-filled community of
          believers located in Immokalee, Florida. Founded on faith, prayer, and the
          uncompromising Word of God, we are a family united by our love for Jesus
          Christ and our commitment to serving one another and our community. We
          welcome all who are seeking a deeper relationship with God — whoever you are
          and wherever you are in your journey, there is a place for you here.
        </p>
      </FadeIn>
    </section>
  );
}

/* ─── Section 3 – Leadership Team ───────────────────────────────────────── */
const leaders = [
  {
    name: "Pastor Eddie D. Washington Sr.",
    role: "Senior Pastor",
    photo: "/images/leadership/eddie2_edited.avif",
    blurb: "Pastor Washington leads our congregation with a heart for God's people and an unwavering dedication to the Word.",
  },
  {
    name: "Overseer Dorothy Washington",
    role: "Overseer",
    photo: "/images/leadership/dw.avif",
    blurb: "Overseer Washington provides spiritual oversight and guidance, nurturing growth within our church family.",
  },
  {
    name: "Steven Tucker Sr.",
    role: "Ministerial Team",
    photo: "/images/leadership/steven.avif",
    blurb: "Minister Tucker serves faithfully on our ministerial team, supporting the vision of the church with dedication.",
  },
  {
    name: "Diane Albritton",
    role: "Ministerial Team",
    photo: "/images/leadership/diane.avif",
    blurb: "Minister Albritton brings warmth and passion to her ministry, helping guide members in their walk with Christ.",
  },
  {
    name: "Ann Michael Smart",
    role: "Finance",
    photo: "/images/leadership/ann.avif",
    colStart: "md:col-start-3",
    blurb: "Sister Smart ensures the faithful stewardship of our church's resources in service of God's mission.",
  },
];

function LeaderCard({ name, role, photo, blurb }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <img
        src={photo}
        alt={name}
        className="rounded-lg object-cover shadow-md w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48"
      />
      <p className="text-base font-bold leading-snug" style={{ color: "#581C87" }}>
        {name}
      </p>
      <p
        className="text-sm font-semibold"
        style={{ color: "#FFD700", backgroundColor: "#581C87", padding: "2px 14px", borderRadius: "9999px" }}
      >
        {role}
      </p>
      <p className="text-sm text-gray-600 leading-relaxed max-w-[220px]">{blurb}</p>
    </div>
  );
}

function Leadership() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#FAF7F0" }}>
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: "#4B0082" }}>
            Meet Our Leaders
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded" style={{ backgroundColor: "#FFD700" }} />
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 justify-items-center">
          {leaders.map((leader, i) => (
            <FadeIn key={leader.name} delay={i * 100} className={leader.colStart || ""}>
              <LeaderCard {...leader} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Section 4 – Overseer's Message ────────────────────────────────────── */
function OverseerMessage() {
  return (
    <section className="py-16 px-6 bg-white">
      <FadeIn className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#4B0082" }}>
          A Message from the Overseer
        </h2>
        <div className="mx-auto mb-8 h-1 w-16 rounded" style={{ backgroundColor: "#FFD700" }} />
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/zxQqLKY0wuI"
            title="A Message from the Overseer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </FadeIn>
    </section>
  );
}

/* ─── Section 5 – Scripture Banner ──────────────────────────────────────── */
function Scripture() {
  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#4B0082" }}>
      <FadeIn className="max-w-3xl mx-auto text-center">
        <p
          className="text-lg sm:text-xl md:text-2xl italic font-medium leading-relaxed"
          style={{ color: "#FFD700" }}
        >
          "For we are God's handiwork, created in Christ Jesus to do good works."
        </p>
        <p
          className="mt-4 text-sm sm:text-base font-semibold tracking-wide"
          style={{ color: "#FFD700", opacity: 0.75 }}
        >
          — Ephesians 2:10
        </p>
      </FadeIn>
    </section>
  );
}

/* ─── About Page ─────────────────────────────────────────────────────────── */
export default function About() {
  return (
    <>
      <PageHero />
      <WhoWeAre />
      <Leadership />
      <OverseerMessage />
      <Scripture />
    </>
  );
}
