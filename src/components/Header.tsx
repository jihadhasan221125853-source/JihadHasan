import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import type { Language, SiteContent } from '../types/content';

interface HeaderProps {
  content: SiteContent;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function Header({ content, language, onLanguageChange }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[#C6A15B]/20 bg-[#080808]/95">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-8 px-6 lg:h-20 lg:px-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-[0.14em] text-[#F3EBDD] transition-colors hover:text-[#C6A15B] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B] whitespace-nowrap shrink-0"
        >
          {content.brandName}
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {content.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative py-1 text-sm font-medium text-[#CFC3B0] transition-colors duration-150 hover:text-[#F3EBDD] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-[#C6A15B] after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A15B] whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language Switcher + Single Primary CTA */}
        <div className="hidden items-center gap-4 lg:flex shrink-0">
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex items-center border border-[#C6A15B]/30 bg-[#15100D] p-0.5"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-pressed={language === 'en'}
              className={`min-h-[34px] px-3 py-1 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                language === 'en'
                  ? 'bg-[#C6A15B] text-[#080808]'
                  : 'text-[#CFC3B0] hover:text-[#F3EBDD]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('bn')}
              aria-pressed={language === 'bn'}
              className={`min-h-[34px] px-3 py-1 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                language === 'bn'
                  ? 'bg-[#C6A15B] text-[#080808]'
                  : 'text-[#CFC3B0] hover:text-[#F3EBDD]'
              }`}
            >
              বাংলা
            </button>
          </div>

          <a
            href="#contact"
            className="inline-flex min-h-[40px] items-center justify-center bg-[#C6A15B] px-5 py-2 text-sm font-medium text-[#080808] transition-colors duration-150 hover:bg-[#D9B774] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A15B] whitespace-nowrap shrink-0"
          >
            {content.headerCta}
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <div
            role="group"
            aria-label="Language switcher"
            className="inline-flex items-center border border-[#C6A15B]/30 bg-[#15100D] p-0.5"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-pressed={language === 'en'}
              className={`min-h-[36px] px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                language === 'en'
                  ? 'bg-[#C6A15B] text-[#080808]'
                  : 'text-[#CFC3B0] hover:text-[#F3EBDD]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('bn')}
              aria-pressed={language === 'bn'}
              className={`min-h-[36px] px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                language === 'bn'
                  ? 'bg-[#C6A15B] text-[#080808]'
                  : 'text-[#CFC3B0] hover:text-[#F3EBDD]'
              }`}
            >
              বাংলা
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? content.mobileMenuCloseLabel : content.mobileMenuOpenLabel}
            className="inline-flex h-11 w-11 items-center justify-center border border-[#C6A15B]/30 text-[#F3EBDD] transition-colors hover:border-[#C6A15B] hover:text-[#C6A15B]"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#C6A15B]/20 bg-[#120E0B] px-6 py-5 lg:hidden"
        >
          <div className="flex flex-col gap-2">
            {content.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center border-b border-[#C6A15B]/10 py-2 text-base font-medium text-[#F3EBDD] transition-colors hover:text-[#C6A15B]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-4 inline-flex min-h-[44px] items-center justify-center bg-[#C6A15B] px-5 py-2.5 text-sm font-medium text-[#080808] transition-colors hover:bg-[#D9B774]"
            >
              {content.headerCta}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
