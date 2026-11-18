import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { SiteContent } from '../types/content';

interface ServicesSectionProps {
  services: SiteContent['services'];
  onSelectServiceForInquiry: (serviceId: string) => void;
}

export function ServicesSection({
  services,
  onSelectServiceForInquiry,
}: ServicesSectionProps) {
  const [activeId, setActiveId] = useState<string>(services.items[0].id);
  const activeService =
    services.items.find((item) => item.id === activeId) ?? services.items[0];

  return (
    <section
      id="services"
      className="border-b border-[#C6A15B]/15 bg-[#F3EBDD] py-20 text-[#211A15] lg:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium tracking-wide text-[#8A682B]">
              {services.eyebrow}
            </p>
            <h2 className="font-display text-balance mt-3 text-3xl leading-[1.2] font-semibold text-[#080808] sm:text-4xl">
              {services.heading}
            </h2>
          </div>
          <p className="text-base leading-[1.7] text-[#3F332B] lg:col-span-5">
            {services.intro}
          </p>
        </div>

        {/* Interactive 7-Service Editorial Index */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left: Clickable Service Ledger */}
          <div
            role="tablist"
            aria-label={services.eyebrow}
            className="divide-y divide-[#211A15]/15 border-y border-[#211A15]/15 lg:col-span-6"
          >
            {services.items.map((service) => {
              const isSelected = service.id === activeService.id;
              return (
                <button
                  key={service.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveId(service.id)}
                  className={`flex min-h-[60px] w-full items-center justify-between gap-4 px-3 py-4 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#211A15] ${
                    isSelected
                      ? 'bg-[#211A15] text-[#F3EBDD]'
                      : 'bg-transparent text-[#211A15] hover:bg-[#211A15]/5'
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span
                      className={`font-display text-base font-medium tabular-nums ${
                        isSelected ? 'text-[#C6A15B]' : 'text-[#8A682B]'
                      }`}
                    >
                      {service.number}
                    </span>
                    <span className="font-display text-lg font-medium sm:text-xl">
                      {service.title}
                    </span>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 shrink-0 transition-transform duration-150 ${
                      isSelected ? 'translate-x-1 text-[#C6A15B]' : 'text-[#211A15]/40'
                    }`}
                    aria-hidden="true"
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Active Service Specification Panel */}
          <div
            role="tabpanel"
            aria-label={activeService.title}
            className="border border-[#211A15]/15 bg-[#211A15] p-8 text-[#F3EBDD] lg:sticky lg:top-28 lg:col-span-6 lg:p-10"
          >
            <p className="font-display text-sm font-medium text-[#C6A15B] tabular-nums">
              {activeService.number}
            </p>
            <h3 className="font-display mt-2 text-2xl font-semibold text-[#F3EBDD] sm:text-3xl">
              {activeService.title}
            </h3>
            <p className="mt-4 text-base leading-[1.7] text-[#CFC3B0]">
              {activeService.summary}
            </p>

            <div className="mt-8 border-t border-[#C6A15B]/20 pt-6">
              <h4 className="text-xs font-medium tracking-wide text-[#C6A15B]">
                {services.deliverablesLabel}
              </h4>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#F3EBDD]">
                {activeService.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1 w-1 shrink-0 bg-[#C6A15B]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 border-t border-[#C6A15B]/20 pt-6">
              <h4 className="text-xs font-medium tracking-wide text-[#C6A15B]">
                {services.outcomeLabel}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#CFC3B0]">
                {activeService.outcomeFocus}
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                onClick={() => onSelectServiceForInquiry(activeService.id)}
                className="inline-flex min-h-[44px] items-center gap-2 bg-[#C6A15B] px-6 py-2.5 text-sm font-medium text-[#080808] transition-colors duration-150 hover:bg-[#D9B774] whitespace-nowrap"
              >
                <span>{services.inquireServiceCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
