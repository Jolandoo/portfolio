import { useTranslations } from "../hooks/useTranslations.jsx"

export default function Navbar() {
  const { t, lang, toggle } = useTranslations()

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#0a0a0a]/70 border-b border-[var(--color-border)]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-mono text-[var(--color-accent)] text-lg font-medium">
            ./
          </span>
          <span className="font-serif italic text-xl tracking-tight">
            jolann
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm text-[var(--color-muted)]">
          <li>
            <a href="#about" className="hover:text-white transition-colors">
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition-colors">
              {t.nav.projects}
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-white transition-colors">
              {t.nav.contact}
            </a>
          </li>
        </ul>

        <button
          onClick={toggle}
          aria-label="Toggle language"
          className="font-mono text-xs px-3 py-1.5 border border-[var(--color-border)] rounded-full hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
        >
          <span className={lang === "fr" ? "text-white" : "text-[var(--color-muted)]"}>FR</span>
          <span className="mx-1.5 text-[var(--color-muted)]">/</span>
          <span className={lang === "en" ? "text-white" : "text-[var(--color-muted)]"}>EN</span>
        </button>
      </nav>
    </header>
  )
}
