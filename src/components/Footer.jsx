import { useTranslations } from "../hooks/useTranslations.jsx"

export default function Footer() {
  const { t } = useTranslations()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[var(--color-muted)]">
        <span>
          © {year} Jolann. {t.footer.rights}
        </span>
        <span>{t.footer.built}</span>
      </div>
    </footer>
  )
}
