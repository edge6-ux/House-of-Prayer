export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden" style={{ height: "100vh" }}>

      {/* Full-bleed background image */}
      <img
        src="/hero2.avif"
        alt="Congregation worshipping"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Warm dark mauve overlay — matches the template tone */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(45, 15, 25, 0.62)" }}
      />

      {/* Centered text block */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <p className="text-sm sm:text-base font-semibold uppercase tracking-[0.25em] mb-3 text-white opacity-90">
          Welcome to
        </p>
        <h1
          className="font-extrabold text-white uppercase leading-[0.95] tracking-tight
                     text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
        >
          The House of<br />
          Prayer of the<br />
          Living God
        </h1>
      </div>

      {/* Bottom-center bouncing chevron */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce"
      >
        <svg
          className="h-8 w-8"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}
