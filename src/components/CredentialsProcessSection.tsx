import { useState } from 'react';
import type { SiteContent } from '../types/content';

interface CredentialsProcessSectionProps {
  caseStudies: SiteContent['caseStudies'];
  skills: SiteContent['skills'];
  certifications: SiteContent['certifications'];
  process: SiteContent['process'];
}

export function CredentialsProcessSection({
  caseStudies,
  skills,
  certifications,
  process,
}: CredentialsProcessSectionProps) {
  const [activeCaseId, setActiveCaseId] = useState<string>(
    caseStudies.items[0]?.id ?? ''
  );
  const activeCase =
    caseStudies.items.find((item) => item.id === activeCaseId) ??
    caseStudies.items[0];

  return (
    <>
      {/* 7. Tabbed Case Studies */}
      <section
        id="case-studies"
        className="border-b border-[#C6A15B]/15 bg-[#211A15] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium tracking-wide text-[#C6A15B]">
                {caseStudies.eyebrow}
              </p>
              <h2 className="font-display text-balance mt-3 text-3xl leading-[1.2] font-semibold text-[#F3EBDD] sm:text-4xl">
                {caseStudies.heading}
              </h2>
            </div>
            <p className="text-base leading-[1.7] text-[#CFC3B0] lg:col-span-5">
              {caseStudies.intro}
            </p>
          </div>

          {/* Interactive Case Study Tabs */}
          <div
            role="tablist"
            aria-label={caseStudies.eyebrow}
            className="mt-12 flex flex-wrap gap-2 border-b border-[#C6A15B]/20 pb-4"
          >
            {caseStudies.items.map((cs) => {
              const isSelected = cs.id === activeCase?.id;
              return (
                <button
                  key={cs.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveCaseId(cs.id)}
                  className={`inline-flex min-h-[44px] items-center gap-3 px-5 py-2.5 text-left text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A15B] ${
                    isSelected
                      ? 'bg-[#C6A15B] text-[#080808]'
                      : 'border border-[#C6A15B]/25 bg-[#15100D] text-[#CFC3B0] hover:border-[#C6A15B] hover:text-[#F3EBDD]'
                  }`}
                >
                  <span className="font-display tabular-nums">{cs.number}</span>
                  <span>{cs.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Case Study Panel */}
          {activeCase && (
            <article
              role="tabpanel"
              aria-label={activeCase.title}
              className="mt-8 border border-[#C6A15B]/25 bg-[#15100D] p-8 lg:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#C6A15B]">
                <span>{activeCase.label}</span>
                <span className="text-[#CFC3B0]">{activeCase.discipline}</span>
              </div>

              <h3 className="font-display mt-4 text-2xl leading-snug font-semibold text-[#F3EBDD] sm:text-3xl">
                {activeCase.title}
              </h3>

              {/* Metrics + Editorial Growth Chart */}
              <div className="mt-8 grid grid-cols-1 gap-8 border-t border-[#C6A15B]/15 pt-8 lg:grid-cols-12 lg:items-center">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-7">
                  {activeCase.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="border border-[#C6A15B]/20 bg-[#0E0B09] p-5"
                    >
                      <p className="font-display text-3xl font-semibold text-[#C6A15B] tabular-nums">
                        {metric.value}
                      </p>
                      <p className="mt-2 text-sm font-medium text-[#F3EBDD]">
                        {metric.label}
                      </p>
                      <p className="mt-1 text-xs text-[#CFC3B0]">{metric.timeframe}</p>
                    </div>
                  ))}
                </div>

                {/* Editorial SVG Growth Curve */}
                <div className="border border-[#C6A15B]/20 bg-[#0E0B09] p-5 lg:col-span-5">
                  <p className="text-xs font-medium text-[#CFC3B0]">
                    {activeCase.chartTitle}
                  </p>
                  {(() => {
                    const pts = activeCase.chartPoints;
                    const maxVal = Math.max(...pts.map((p) => p.value), 1);
                    const minVal = Math.min(...pts.map((p) => p.value), 0);
                    const span = Math.max(maxVal - minVal, 1);
                    const width = 320;
                    const height = 112;
                    const padX = 18;
                    const padY = 16;
                    const coords = pts.map((p, idx) => {
                      const x =
                        padX + (idx / Math.max(pts.length - 1, 1)) * (width - padX * 2);
                      const y =
                        height -
                        padY -
                        ((p.value - minVal) / span) * (height - padY * 2);
                      return { x, y, ...p };
                    });
                    const linePath = coords
                      .map((c, idx) => `${idx === 0 ? 'M' : 'L'} ${c.x.toFixed(1)} ${c.y.toFixed(1)}`)
                      .join(' ');
                    const areaPath = `${linePath} L ${coords[coords.length - 1].x.toFixed(1)} ${(height - padY).toFixed(1)} L ${coords[0].x.toFixed(1)} ${(height - padY).toFixed(1)} Z`;

                    return (
                      <div className="mt-3">
                        <svg
                          viewBox={`0 0 ${width} ${height}`}
                          role="img"
                          aria-label={activeCase.chartTitle}
                          className="h-28 w-full overflow-visible"
                        >
                          <defs>
                            <linearGradient id={`goldArea-${activeCase.id}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#C6A15B" stopOpacity="0.28" />
                              <stop offset="100%" stopColor="#C6A15B" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          <line
                            x1={padX}
                            y1={height - padY}
                            x2={width - padX}
                            y2={height - padY}
                            stroke="#C6A15B"
                            strokeOpacity="0.25"
                            strokeWidth="1"
                          />
                          <path d={areaPath} fill={`url(#goldArea-${activeCase.id})`} />
                          <path
                            d={linePath}
                            fill="none"
                            stroke="#C6A15B"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          {coords.map((c) => (
                            <circle
                              key={c.period}
                              cx={c.x}
                              cy={c.y}
                              r="3.2"
                              fill="#080808"
                              stroke="#C6A15B"
                              strokeWidth="2"
                            />
                          ))}
                        </svg>
                        <div className="mt-1 flex items-center justify-between text-[11px] text-[#CFC3B0] tabular-nums">
                          {pts.map((p) => (
                            <span key={p.period}>{p.period}</span>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 border-t border-[#C6A15B]/15 pt-8 text-sm leading-[1.7] lg:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-medium text-[#C6A15B]">
                      {caseStudies.challengeLabel}
                    </h4>
                    <p className="mt-2 text-[#CFC3B0]">{activeCase.challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-xs font-medium text-[#C6A15B]">
                      {caseStudies.approachLabel}
                    </h4>
                    <p className="mt-2 text-[#F3EBDD]">{activeCase.approach}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-medium text-[#C6A15B]">
                      {caseStudies.executionLabel}
                    </h4>
                    <ul className="mt-2 space-y-2.5 text-[#CFC3B0]">
                      {activeCase.executionSteps.map((step) => (
                        <li key={step} className="flex items-start gap-2.5">
                          <span
                            className="mt-2 h-1 w-1 shrink-0 bg-[#C6A15B]"
                            aria-hidden="true"
                          />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-[#C6A15B]/15 pt-5">
                    <h4 className="text-xs font-medium text-[#C6A15B]">
                      {caseStudies.measurementLabel}
                    </h4>
                    <p className="mt-2 text-[#F3EBDD]">{activeCase.measurementPlan}</p>
                  </div>
                </div>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* 8. Skills & Tools + 9. Certifications */}
      <section
        id="skills"
        className="border-b border-[#C6A15B]/15 bg-[#080808] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium tracking-wide text-[#C6A15B]">
                {skills.eyebrow}
              </p>
              <h2 className="font-display text-balance mt-3 text-3xl leading-[1.2] font-semibold text-[#F3EBDD] sm:text-4xl">
                {skills.heading}
              </h2>
            </div>
            <p className="text-base leading-[1.7] text-[#CFC3B0] lg:col-span-5">
              {skills.intro}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-10 border-t border-[#C6A15B]/20 pt-10 md:grid-cols-3">
            {skills.groups.map((group) => (
              <div key={group.title}>
                <h3 className="font-display text-xl font-medium text-[#F3EBDD]">
                  {group.title}
                </h3>
                <ul className="mt-5 divide-y divide-[#C6A15B]/15 border-t border-[#C6A15B]/15 text-sm text-[#CFC3B0]">
                  {group.items.map((item) => (
                    <li key={item} className="py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 9. Certifications (Editable Placeholder Slots) */}
          <div id="certifications" className="mt-20 border-t border-[#C6A15B]/20 pt-16">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="text-sm font-medium tracking-wide text-[#C6A15B]">
                  {certifications.eyebrow}
                </p>
                <h2 className="font-display text-balance mt-3 text-3xl leading-[1.2] font-semibold text-[#F3EBDD] sm:text-4xl">
                  {certifications.heading}
                </h2>
              </div>
              <p className="text-base leading-[1.7] text-[#CFC3B0] lg:col-span-5">
                {certifications.intro}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {certifications.slots.map((slot) => (
                <div
                  key={slot.id}
                  className="border border-[#C6A15B]/25 bg-[#15100D] p-6"
                >
                  <p className="text-xs font-medium text-[#C6A15B] tabular-nums">
                    {slot.year} · {slot.issuer}
                  </p>
                  <h3 className="font-display mt-3 text-lg font-medium text-[#F3EBDD]">
                    {slot.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#CFC3B0]">
                    {slot.statusNote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. My Work Process */}
      <section
        id="process"
        className="border-b border-[#C6A15B]/15 bg-[#F3EBDD] py-20 text-[#211A15] lg:py-28"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium tracking-wide text-[#8A682B]">
                {process.eyebrow}
              </p>
              <h2 className="font-display text-balance mt-3 text-3xl leading-[1.2] font-semibold text-[#080808] sm:text-4xl">
                {process.heading}
              </h2>
            </div>
            <p className="text-base leading-[1.7] text-[#3F332B] lg:col-span-5">
              {process.intro}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 border-t border-[#211A15]/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step) => (
              <div key={step.number} className="flex flex-col justify-between">
                <div>
                  <span className="font-display text-3xl font-semibold text-[#8A682B] tabular-nums">
                    {step.number}
                  </span>
                  <h3 className="font-display mt-4 text-xl font-semibold text-[#080808]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.7] text-[#3F332B]">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 border-t border-[#211A15]/15 pt-4">
                  <p className="text-xs font-medium text-[#8A682B]">
                    {process.deliverablePrefix}
                  </p>
                  <p className="mt-1 text-sm font-medium text-[#080808]">{step.artifact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
