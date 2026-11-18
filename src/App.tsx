/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { TRANSLATIONS } from './data/translations';
import type { Language } from './types/content';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutExpertiseSection } from './components/AboutExpertiseSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { CredentialsProcessSection } from './components/CredentialsProcessSection';
import { ContactFooterSection } from './components/ContactFooterSection';
import { Studio3DModal } from './components/ThreeBrandSculpture';

const STORAGE_KEY = 'jihad_brand_lang';

function readInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'bn' || saved === 'en') return saved;
  } catch {
    // Ignore storage errors in sandboxed iframes
  }
  return 'en';
}

export default function App() {
  const [language, setLanguage] = useState<Language>(readInitialLanguage);
  const [studio3DOpen, setStudio3DOpen] = useState(false);
  const [preselectedServiceId, setPreselectedServiceId] = useState('');

  const content = TRANSLATIONS[language];

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage errors
    }
  }, [language]);

  return (
    <div className="min-h-screen bg-[#080808] text-[#F3EBDD]">
      <Header
        content={content}
        language={language}
        onLanguageChange={setLanguage}
      />

      <main>
        <HeroSection
          content={content}
          onOpenStudio3D={() => setStudio3DOpen(true)}
          onBookAudit={() => setPreselectedServiceId('seo')}
        />

        <AboutExpertiseSection
          about={content.about}
          expertise={content.expertise}
        />

        <ServicesSection
          services={content.services}
          onSelectServiceForInquiry={setPreselectedServiceId}
        />

        <PortfolioSection portfolio={content.portfolio} />

        <CredentialsProcessSection
          caseStudies={content.caseStudies}
          skills={content.skills}
          certifications={content.certifications}
          process={content.process}
        />

        <ContactFooterSection
          content={content}
          language={language}
          onLanguageChange={setLanguage}
          preselectedServiceId={preselectedServiceId}
        />
      </main>

      <Studio3DModal
        open={studio3DOpen}
        onClose={() => setStudio3DOpen(false)}
        content={content.studio3d}
      />
    </div>
  );
}
