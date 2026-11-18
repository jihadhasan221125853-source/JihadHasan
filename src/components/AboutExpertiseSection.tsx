import { useRef, useState } from 'react';
import { ImagePlus, Trash2 } from 'lucide-react';
import type { SiteContent } from '../types/content';

interface AboutExpertiseSectionProps {
  about: SiteContent['about'];
  expertise: SiteContent['expertise'];
}

const DEFAULT_PORTRAIT_URL =
  '/assets/aistudio/Premium_Portrait_in_Gold_Frame_9aaced93.png';

export function AboutExpertiseSection({ about, expertise }: AboutExpertiseSectionProps) {
  const [customPortraitUrl, setCustomPortraitUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const activePortraitUrl = customPortraitUrl ?? DEFAULT_PORTRAIT_URL;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setImageError(false);
    setCustomPortraitUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return objectUrl;
    });
  };

  const handleRemovePortrait = () => {
    setImageError(false);
    setCustomPortraitUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return null;
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <>
      {/* 3. About JIHAD */}
      <section
        id="about"
        className="border-b border-[#C6A15B]/15 bg-[#211A15] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Editorial Portrait Frame */}
            <div className="lg:col-span-5">
              <div className="border border-[#C6A15B]/30 bg-[#15100D] p-4">
                <div className="relative aspect-square w-full overflow-hidden border border-[#C6A15B]/15 bg-[#080808]">
                  {!imageError ? (
                    <img
                      src={activePortraitUrl}
                      alt={about.portraitTitle}
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="h-full w-full object-cover object-center"
                    />
                  ) : (
                    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
                      <div className="flex h-16 w-16 items-center justify-center border border-[#C6A15B]/35 text-[#C6A15B]">
                        <ImagePlus className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <p className="font-display mt-6 text-xl font-medium text-[#F3EBDD]">
                        {about.portraitPendingTitle}
                      </p>
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#CFC3B0]">
                        {about.portraitPendingNote}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="sr-only"
                    id="portrait-upload-input"
                  />
                  <label
                    htmlFor="portrait-upload-input"
                    className="inline-flex min-h-[42px] cursor-pointer items-center gap-2 border border-[#C6A15B]/50 bg-[#211A15] px-4 py-2 text-xs font-medium text-[#F3EBDD] transition-colors hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#080808] whitespace-nowrap"
                  >
                    <ImagePlus className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{about.replacePortraitCta}</span>
                  </label>

                  {customPortraitUrl && (
                    <button
                      type="button"
                      onClick={handleRemovePortrait}
                      className="inline-flex min-h-[42px] items-center gap-1.5 border border-[#C6A15B]/25 px-3 py-2 text-xs font-medium text-[#CFC3B0] transition-colors hover:border-[#C6A15B] hover:text-[#F3EBDD]"
                    >
                      <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{about.removePortraitCta}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Editorial Bio & Editable Identity Details */}
            <div className="lg:col-span-7">
              <p className="text-sm font-medium tracking-wide text-[#C6A15B]">{about.eyebrow}</p>
              <h2 className="font-display text-balance mt-3 text-3xl leading-[1.2] font-semibold text-[#F3EBDD] sm:text-4xl">
                {about.heading}
              </h2>

              <p className="mt-6 text-lg leading-[1.7] text-[#F3EBDD]/90">{about.lead}</p>
              <p className="mt-5 text-base leading-[1.75] text-[#CFC3B0]">{about.body}</p>

              <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 border-t border-[#C6A15B]/20 pt-8 sm:grid-cols-2">
                {about.editableDetails.map((detail) => (
                  <div key={detail.label} className="space-y-1">
                    <dt className="text-xs font-medium text-[#C6A15B]">{detail.label}</dt>
                    <dd className="text-sm font-medium text-[#F3EBDD]">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 4. My Expertise */}
      <section
        id="expertise"
        className="border-b border-[#C6A15B]/15 bg-[#080808] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-sm font-medium tracking-wide text-[#C6A15B]">{expertise.eyebrow}</p>
              <h2 className="font-display text-balance mt-3 text-3xl leading-[1.2] font-semibold text-[#F3EBDD] sm:text-4xl">
                {expertise.heading}
              </h2>
            </div>
            <p className="text-base leading-[1.7] text-[#CFC3B0] lg:col-span-5">
              {expertise.intro}
            </p>
          </div>

          <div className="mt-14 divide-y divide-[#C6A15B]/20 border-y border-[#C6A15B]/20">
            {expertise.pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="grid grid-cols-1 gap-6 py-9 lg:grid-cols-12 lg:items-start lg:gap-8"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-2xl font-medium text-[#C6A15B] tabular-nums">
                      {pillar.number}
                    </span>
                    <h3 className="font-display text-2xl font-medium text-[#F3EBDD]">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-[#CFC3B0]">{pillar.subtitle}</p>
                </div>

                <p className="text-base leading-[1.7] text-[#CFC3B0] lg:col-span-5">
                  {pillar.description}
                </p>

                <ul className="space-y-2 text-sm text-[#F3EBDD] lg:col-span-3">
                  {pillar.focusAreas.map((area) => (
                    <li key={area} className="border-b border-[#C6A15B]/15 pb-2 last:border-b-0">
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
