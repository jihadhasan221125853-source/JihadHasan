import { ArrowRight } from 'lucide-react';
import type { SiteContent } from '../types/content';
import { ThreeBrandSculpture } from './ThreeBrandSculpture';

interface HeroSectionProps {
  content: SiteContent;
  onOpenStudio3D: () => void;
  onBookAudit: () => void;
}

export function HeroSection({
  content,
  onOpenStudio3D,
  onBookAudit,
}: HeroSectionProps) {
  const { hero, brandName } = content;

  return (
    <section
      id="top"
      className="relative border-b border-[#C6A15B]/15 bg-[#080808] pt-12 pb-16 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
        {/* Split Hero Composition */}
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Editorial Column */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="flex items-center gap-3 text-sm text-[#C6A15B]">
              <span className="font-display text-base font-semibold tracking-[0.18em] text-[#F3EBDD]">
                {brandName}
              </span>
              <span aria-hidden="true" className="text-[#C6A15B]/60">
                /
              </span>
              <span className="font-medium tracking-wide text-[#C6A15B]">{hero.kicker}</span>
            </div>

            <h1 className="font-display text-balance mt-6 text-[clamp(2.25rem,4.1vw,3.75rem)] leading-[1.12] font-semibold tracking-[-0.015em] text-[#F3EBDD]">
              {hero.headline}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-[1.7] text-[#CFC3B0] sm:text-lg">
              {hero.subheadline}
            </p>

            {/* Primary Audit CTA + Secondary Portfolio CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                onClick={onBookAudit}
                className="inline-flex min-h-[48px] items-center gap-2.5 bg-[#C6A15B] px-7 py-3 text-sm font-medium text-[#080808] transition-colors duration-150 hover:bg-[#D9B774] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A15B] whitespace-nowrap shrink-0"
              >
                <span>{hero.primaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex min-h-[48px] items-center justify-center border border-[#C6A15B]/55 bg-transparent px-7 py-3 text-sm font-medium text-[#F3EBDD] transition-colors duration-150 hover:border-[#C6A15B] hover:bg-[#211A15] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A15B] whitespace-nowrap shrink-0"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </div>

          {/* Right Sculptural 3D Focal Frame */}
          <div className="lg:col-span-5">
            <div className="h-[400px] w-full border border-[#C6A15B]/25 bg-[#0E0B09] sm:h-[460px] lg:h-full lg:min-h-[480px]">
              <ThreeBrandSculpture
                mode="embedded"
                cameraPreset="reset"
                finish="gold"
                onExpand={onOpenStudio3D}
                expandLabel={hero.inspect3dLabel}
                caption={hero.sculptureCaption}
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Architectural Discipline Strip Below Split */}
        <div className="mt-14 grid grid-cols-1 gap-6 border-t border-[#C6A15B]/20 pt-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {hero.pillarsStrip.map((item) => (
            <div key={item.label} className="space-y-1.5">
              <p className="text-xs font-medium tracking-wide text-[#C6A15B]">{item.label}</p>
              <p className="font-display text-lg font-medium text-[#F3EBDD]">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
