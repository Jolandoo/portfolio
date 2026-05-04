import { useTranslations } from "../hooks/useTranslations.jsx"

const STACK = [
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "Java",
  "PostgreSQL",
  "Docker",
  "Linux",
]

export default function About() {
  const { t } = useTranslations()

  return (
    <section id="about" className="relative py-32 sm:py-40">
      <div className="max-w-6xl mx-auto px-6">
        <SectionKicker>{t.about.kicker}</SectionKicker>

        <div className="grid md:grid-cols-12 gap-12 mt-8">
          <div className="md:col-span-7">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight">
              {t.about.title}
            </h2>
            <p className="mt-8 text-lg text-[var(--color-text)]/75 leading-relaxed max-w-xl">
              {t.about.body}
            </p>
          </div>

          <div className="md:col-span-5 md:pl-8 md:border-l md:border-[var(--color-border)]">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[var(--color-muted)] mb-6">
              {t.about.stack}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {STACK.map((s) => (
                <li
                  key={s}
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-[var(--color-border)] text-[var(--color-text)]/80 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SectionKicker({ children }) {
  return (
    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-[var(--color-muted)]">
      <span className="h-px w-8 bg-[var(--color-accent)]" />
      {children}
    </div>
  )
}
