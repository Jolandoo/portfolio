import { useTranslations } from "../hooks/useTranslations.jsx"

export default function Hero() {
  const { t } = useTranslations()

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="reveal reveal-1 inline-flex items-center gap-2 text-xs font-mono text-[var(--color-muted)] mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
          </span>
          {t.hero.eyebrow}
        </div>

        <h1 className="reveal reveal-2 font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight">
          {t.hero.name}
          <span className="text-[var(--color-accent)]">.</span>
        </h1>

        <p className="reveal reveal-3 mt-6 font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
          {t.hero.tagline}
          <span className="dot"></span>
          <span className="text-white">ENSEIRB-MATMECA '25</span>
        </p>

        <p className="reveal reveal-4 mt-10 max-w-xl text-lg text-[var(--color-text)]/80 leading-relaxed">
          {t.hero.intro}
        </p>

        <div className="reveal reveal-5 mt-12 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-[var(--color-accent)] text-[#0a0a0a] font-medium text-sm px-5 py-3 rounded-full hover:gap-3 transition-all"
          >
            {t.hero.ctaProjects}
            <ArrowRight />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm px-5 py-3 rounded-full border border-[var(--color-border)] hover:border-white/40 transition-colors"
          >
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="transition-transform group-hover:translate-x-0.5"
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
