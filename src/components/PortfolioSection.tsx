import { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import type {
  PortfolioCategory,
  PortfolioProject,
  PortfolioViewMode,
  SiteContent,
} from '../types/content';
import { filterPortfolioProjects, groupProjectsByService } from '../utils/portfolio';

interface PortfolioSectionProps {
  portfolio: SiteContent['portfolio'];
}

function EditorialImage({
  src,
  alt,
  title,
  aspectClass = 'aspect-[4/3]',
}: {
  src: string;
  alt: string;
  title: string;
  aspectClass?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`relative w-full overflow-hidden bg-[#15100D] ${aspectClass}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center border border-[#C6A15B]/20 bg-[#211A15] p-6 text-center">
          <span className="font-display text-base text-[#F3EBDD]">{title}</span>
        </div>
      )}
    </div>
  );
}

export function PortfolioSection({ portfolio }: PortfolioSectionProps) {
  const [category, setCategory] = useState<PortfolioCategory>('all');
  const [viewMode, setViewMode] = useState<PortfolioViewMode>('projects');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = filterPortfolioProjects(portfolio.projects, category);
  const serviceGroups = groupProjectsByService(filteredProjects);

  useEffect(() => {
    if (!selectedProject) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="portfolio"
      className="border-b border-[#C6A15B]/15 bg-[#080808] py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Section Heading */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium tracking-wide text-[#C6A15B]">
              {portfolio.eyebrow}
            </p>
            <h2 className="font-display text-balance mt-3 text-3xl leading-[1.2] font-semibold text-[#F3EBDD] sm:text-4xl">
              {portfolio.heading}
            </h2>
          </div>
          <p className="text-base leading-[1.7] text-[#CFC3B0] lg:col-span-5">
            {portfolio.intro}
          </p>
        </div>

        {/* Transparency Disclaimer (Unboxed Editorial Note) */}
        <p className="mt-6 border-y border-[#C6A15B]/20 py-4 text-sm leading-relaxed text-[#CFC3B0]">
          {portfolio.disclaimer}
        </p>

        {/* Interactive Controls Row: Category Filters + View Mode Switcher */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div
            role="group"
            aria-label="Filter projects by discipline"
            className="flex flex-wrap items-center gap-1.5 border border-[#C6A15B]/25 bg-[#15100D] p-1"
          >
            {portfolio.filters.map((f) => {
              const active = category === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(f.id)}
                  className={`min-h-[38px] px-4 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#C6A15B] text-[#080808]'
                      : 'text-[#CFC3B0] hover:text-[#F3EBDD]'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div
            role="group"
            aria-label="Portfolio layout mode"
            className="flex flex-wrap items-center gap-1.5 border border-[#C6A15B]/25 bg-[#15100D] p-1"
          >
            {portfolio.viewModes.map((mode) => {
              const active = viewMode === mode.id;
              return (
                <button
                  key={mode.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setViewMode(mode.id)}
                  className={`min-h-[38px] px-3.5 py-1.5 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#211A15] text-[#C6A15B] border border-[#C6A15B]/45'
                      : 'text-[#CFC3B0] hover:text-[#F3EBDD]'
                  }`}
                >
                  {mode.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="mt-12 border border-[#C6A15B]/20 bg-[#15100D] p-10 text-center text-sm text-[#CFC3B0]">
            {portfolio.emptyState}
          </div>
        )}

        {/* View 1: Project-Based Editorial Grid */}
        {viewMode === 'projects' && filteredProjects.length > 0 && (
          <div
            data-testid="portfolio-grid"
            className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col border border-[#C6A15B]/20 bg-[#15100D] transition-colors duration-150 hover:border-[#C6A15B]/55"
              >
                <EditorialImage
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  title={project.title}
                />
                <div className="flex flex-1 flex-col p-6">
                  {/* Unboxed Typographic Metadata */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#C6A15B]">
                    <span>{project.label}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#CFC3B0]">{project.serviceName}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#CFC3B0] tabular-nums">{project.year}</span>
                  </div>

                  <h3 className="font-display mt-3 text-xl leading-snug font-medium text-[#F3EBDD]">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-[1.65] text-[#CFC3B0]">
                    {project.summary}
                  </p>

                  <div className="mt-6 border-t border-[#C6A15B]/15 pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-medium text-[#C6A15B] transition-colors hover:text-[#F3EBDD]"
                    >
                      <span>{portfolio.openDetailsLabel}</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* View 2: Case Study Layout */}
        {viewMode === 'case-studies' && filteredProjects.length > 0 && (
          <div className="mt-10 divide-y divide-[#C6A15B]/20 border-y border-[#C6A15B]/20">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-12 lg:items-start"
              >
                <div className="lg:col-span-4">
                  <EditorialImage
                    src={project.imageUrl}
                    alt={project.imageAlt}
                    title={project.title}
                  />
                </div>
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#C6A15B]">
                    <span>{project.label}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#CFC3B0]">{project.serviceName}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#CFC3B0] tabular-nums">{project.year}</span>
                  </div>
                  <h3 className="font-display mt-2 text-2xl font-medium text-[#F3EBDD]">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7] text-[#CFC3B0]">{project.objective}</p>

                  <div className="mt-5 grid grid-cols-1 gap-6 border-t border-[#C6A15B]/15 pt-5 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-medium text-[#C6A15B]">
                        {portfolio.deliverablesLabel}
                      </p>
                      <ul className="mt-2 space-y-1.5 text-sm text-[#F3EBDD]">
                        {project.deliverables.map((d) => (
                          <li key={d}>{d}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#C6A15B]">
                        {portfolio.measurementLabel}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-[#CFC3B0]">
                        {project.measurementFramework}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="mt-5 inline-flex min-h-[40px] items-center gap-1.5 text-sm font-medium text-[#C6A15B] transition-colors hover:text-[#F3EBDD]"
                  >
                    <span>{portfolio.openDetailsLabel}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* View 3: Visual Gallery Layout */}
        {viewMode === 'gallery' && filteredProjects.length > 0 && (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, idx) => (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedProject(project)}
                className={`group relative overflow-hidden border border-[#C6A15B]/25 bg-[#15100D] text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A15B] ${
                  idx === 0 ? 'sm:col-span-2' : ''
                }`}
              >
                <EditorialImage
                  src={project.imageUrl}
                  alt={project.imageAlt}
                  title={project.title}
                  aspectClass={idx === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 pt-16">
                  <p className="text-xs text-[#C6A15B]">
                    {project.label} · {project.serviceName}
                  </p>
                  <p className="font-display mt-1 text-lg font-medium text-[#F3EBDD]">
                    {project.title}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* View 4: Service-Based Grouped Projects */}
        {viewMode === 'by-service' && serviceGroups.length > 0 && (
          <div className="mt-10 space-y-10">
            {serviceGroups.map((group) => (
              <div key={group.serviceId} className="border-t border-[#C6A15B]/25 pt-6">
                <h3 className="font-display text-2xl font-medium text-[#C6A15B]">
                  {group.serviceName}
                </h3>
                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {group.projects.map((project) => (
                    <div
                      key={project.id}
                      className="flex flex-col justify-between border border-[#C6A15B]/20 bg-[#15100D] p-6"
                    >
                      <div>
                        <p className="text-xs text-[#CFC3B0]">
                          {project.label} · {project.year}
                        </p>
                        <h4 className="font-display mt-2 text-xl font-medium text-[#F3EBDD]">
                          {project.title}
                        </h4>
                        <p className="mt-3 text-sm leading-[1.65] text-[#CFC3B0]">
                          {project.summary}
                        </p>
                      </div>
                      <div className="mt-5">
                        <button
                          type="button"
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-medium text-[#C6A15B] hover:text-[#F3EBDD]"
                        >
                          <span>{portfolio.openDetailsLabel}</span>
                          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Accessible Project Blueprint Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 sm:p-6"
        >
          <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-[#C6A15B]/35 bg-[#15100D] p-6 sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs text-[#C6A15B]">
                  {selectedProject.label} · {selectedProject.serviceName} · {selectedProject.year}
                </p>
                <h3 className="font-display mt-2 text-2xl font-semibold text-[#F3EBDD] sm:text-3xl">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label={portfolio.closeModalLabel}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-[#C6A15B]/35 text-[#F3EBDD] transition-colors hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#080808]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6">
              <EditorialImage
                src={selectedProject.imageUrl}
                alt={selectedProject.imageAlt}
                title={selectedProject.title}
                aspectClass="aspect-[16/9]"
              />
            </div>

            <div className="mt-7 space-y-6">
              <div>
                <h4 className="text-xs font-medium tracking-wide text-[#C6A15B]">
                  {portfolio.objectiveLabel}
                </h4>
                <p className="mt-2 text-sm leading-[1.7] text-[#F3EBDD]">
                  {selectedProject.objective}
                </p>
              </div>

              <div className="border-t border-[#C6A15B]/15 pt-5">
                <h4 className="text-xs font-medium tracking-wide text-[#C6A15B]">
                  {portfolio.strategyLabel}
                </h4>
                <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-[#CFC3B0]">
                  {selectedProject.strategy.map((step) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 bg-[#C6A15B]" aria-hidden="true" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-6 border-t border-[#C6A15B]/15 pt-5 sm:grid-cols-2">
                <div>
                  <h4 className="text-xs font-medium tracking-wide text-[#C6A15B]">
                    {portfolio.deliverablesLabel}
                  </h4>
                  <ul className="mt-2.5 space-y-2 text-sm text-[#F3EBDD]">
                    {selectedProject.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-medium tracking-wide text-[#C6A15B]">
                    {portfolio.measurementLabel}
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#CFC3B0]">
                    {selectedProject.measurementFramework}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
