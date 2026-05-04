import { useTranslations } from "../hooks/useTranslations.jsx"
import { projects } from "../data/projects.js"
import ProjectCard from "./ProjectCard.jsx"
import { SectionKicker } from "./About.jsx"

export default function Projects() {
  const { t } = useTranslations()

  return (
    <section id="projects" className="relative py-32 sm:py-40 border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionKicker>{t.projects.kicker}</SectionKicker>

        <div className="mt-8 flex items-end justify-between flex-wrap gap-6">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-2xl">
            {t.projects.title}
          </h2>
          <p className="text-sm text-[var(--color-muted)] max-w-sm">
            {t.projects.subtitle}
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
