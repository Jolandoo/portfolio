import { useTranslations } from "../hooks/useTranslations.jsx"

export default function ProjectCard({ project }) {
  const { lang, t } = useTranslations()
  const title = project.title[lang]
  const description = project.description[lang]
  const hasGithub = !!project.github
  const hasDemo = !!project.demo

  return (
    <article
      className="group relative flex flex-col p-7 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/40 hover:bg-[var(--color-surface)] hover:border-white/15 transition-all duration-300"
    >
      <div className="absolute inset-x-7 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-2xl sm:text-3xl tracking-tight leading-tight">
          {title}
        </h3>
        <span className="font-mono text-xs text-[var(--color-muted)] mt-2 shrink-0">
          {project.year}
        </span>
      </div>

      <p className="mt-4 text-sm text-[var(--color-text)]/70 leading-relaxed flex-1">
        {description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {project.tech.map((tag) => (
          <li
            key={tag}
            className="font-mono text-[11px] px-2 py-1 rounded-md bg-white/5 text-[var(--color-text)]/70"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-6 border-t border-[var(--color-border)] flex items-center gap-4 text-xs font-mono">
        {hasGithub ? (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--color-text)]/70 hover:text-[var(--color-accent)] transition-colors"
          >
            <GithubIcon /> {t.projects.viewCode}
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-[var(--color-muted)]/60">
            <GithubIcon /> {t.projects.soon}
          </span>
        )}
        {hasDemo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-[var(--color-text)]/70 hover:text-[var(--color-accent)] transition-colors"
          >
            <ExternalIcon /> {t.projects.viewLive}
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-[var(--color-muted)]/60">
            <ExternalIcon /> {t.projects.soon}
          </span>
        )}
      </div>
    </article>
  )
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.94-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39s1.98.13 2.9.39c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.13 0 1.54-.01 2.78-.01 3.16 0 .31.21.66.79.55 4.57-1.52 7.85-5.83 7.85-10.9C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
      <path
        d="M6 3h7v7M13 3L5 11M3 7v6h6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
