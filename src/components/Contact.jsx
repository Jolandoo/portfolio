import { useTranslations } from "../hooks/useTranslations.jsx"
import { SectionKicker } from "./About.jsx"

const EMAIL = "jolann.madec21@gmail.com"
const GITHUB = "https://github.com/your-handle"

export default function Contact() {
  const { t } = useTranslations()

  return (
    <section id="contact" className="relative py-32 sm:py-40 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionKicker>{t.contact.kicker}</SectionKicker>

        <h2 className="mt-8 font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
          {t.contact.title}
        </h2>

        <p className="mt-6 text-lg text-[var(--color-text)]/75 max-w-xl leading-relaxed">
          {t.contact.body}
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex items-center gap-2 bg-[var(--color-accent)] text-[#0a0a0a] font-medium text-sm px-5 py-3 rounded-full hover:gap-3 transition-all"
          >
            {t.contact.email}
            <span className="font-mono">→</span>
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm px-5 py-3 rounded-full border border-[var(--color-border)] hover:border-white/40 transition-colors"
          >
            {t.contact.github}
            <span className="font-mono text-[var(--color-muted)]">↗</span>
          </a>
        </div>

        <div className="mt-16 font-mono text-sm text-[var(--color-muted)]">
          <span className="text-[var(--color-accent)]">$</span> echo {EMAIL}
        </div>
      </div>
    </section>
  )
}
