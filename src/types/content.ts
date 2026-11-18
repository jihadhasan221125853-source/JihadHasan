export type Language = 'en' | 'bn';

export type PortfolioCategory = 'all' | 'seo' | 'paid-ads' | 'web-design';

export type PortfolioViewMode = 'projects' | 'case-studies' | 'gallery' | 'by-service';

export interface NavItem {
  id: string;
  label: string;
}

export interface ExpertisePillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  category: Exclude<PortfolioCategory, 'all'>;
  title: string;
  summary: string;
  deliverables: string[];
  outcomeFocus: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  label: string; // e.g., "Sample Project" or "Practice Study"
  category: Exclude<PortfolioCategory, 'all'>;
  serviceId: string;
  serviceName: string;
  year: string;
  imageUrl: string;
  imageAlt: string;
  summary: string;
  objective: string;
  strategy: string[];
  deliverables: string[];
  measurementFramework: string;
}

export interface CaseStudyMetric {
  value: string;
  label: string;
  timeframe: string;
}

export interface CaseStudyChartPoint {
  period: string;
  value: number;
}

export interface CaseStudyBlueprint {
  id: string;
  number: string;
  label: string;
  title: string;
  discipline: string;
  challenge: string;
  approach: string;
  executionSteps: string[];
  measurementPlan: string;
  metrics: CaseStudyMetric[];
  chartTitle: string;
  chartUnit: string;
  chartPoints: CaseStudyChartPoint[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface CertificationSlot {
  id: string;
  title: string;
  issuer: string;
  year: string;
  statusNote: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  artifact: string;
}

export interface ContactFormValues {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
}

export interface SiteContent {
  brandName: string;
  roleTitle: string;
  nav: NavItem[];
  headerCta: string;
  mobileMenuOpenLabel: string;
  mobileMenuCloseLabel: string;
  hero: {
    kicker: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    sculptureCaption: string;
    inspect3dLabel: string;
    pillarsStrip: { label: string; value: string }[];
  };
  studio3d: {
    title: string;
    subtitle: string;
    closeLabel: string;
    hideControls: string;
    showControls: string;
    cameraLabel: string;
    finishLabel: string;
    cameras: {
      front: string;
      isometric: string;
      crown: string;
      reset: string;
    };
    finishes: {
      gold: string;
      bronze: string;
    };
  };
  about: {
    eyebrow: string;
    heading: string;
    lead: string;
    body: string;
    portraitTitle: string;
    portraitPendingTitle: string;
    portraitPendingNote: string;
    uploadPortraitCta: string;
    replacePortraitCta: string;
    removePortraitCta: string;
    editableDetails: { label: string; value: string }[];
  };
  expertise: {
    eyebrow: string;
    heading: string;
    intro: string;
    pillars: ExpertisePillar[];
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    deliverablesLabel: string;
    outcomeLabel: string;
    inquireServiceCta: string;
    items: ServiceItem[];
  };
  portfolio: {
    eyebrow: string;
    heading: string;
    intro: string;
    disclaimer: string;
    filters: { id: PortfolioCategory; label: string }[];
    viewModes: { id: PortfolioViewMode; label: string }[];
    openDetailsLabel: string;
    closeModalLabel: string;
    objectiveLabel: string;
    strategyLabel: string;
    deliverablesLabel: string;
    measurementLabel: string;
    emptyState: string;
    projects: PortfolioProject[];
  };
  caseStudies: {
    eyebrow: string;
    heading: string;
    intro: string;
    challengeLabel: string;
    approachLabel: string;
    executionLabel: string;
    measurementLabel: string;
    items: CaseStudyBlueprint[];
  };
  skills: {
    eyebrow: string;
    heading: string;
    intro: string;
    groups: SkillGroup[];
  };
  certifications: {
    eyebrow: string;
    heading: string;
    intro: string;
    slots: CertificationSlot[];
  };
  process: {
    eyebrow: string;
    heading: string;
    intro: string;
    deliverablePrefix: string;
    steps: ProcessStep[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
    directInfoHeading: string;
    directDetails: { label: string; value: string }[];
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      serviceLabel: string;
      servicePlaceholder: string;
      budgetLabel: string;
      budgetPlaceholder: string;
      budgetOptions: { value: string; label: string }[];
      messageLabel: string;
      messagePlaceholder: string;
      submitCta: string;
      successTitle: string;
      successBody: string;
      sendAnotherCta: string;
      errors: {
        nameRequired: string;
        emailRequired: string;
        emailInvalid: string;
        serviceRequired: string;
        budgetRequired: string;
        messageRequired: string;
      };
    };
  };
  footer: {
    tagline: string;
    navigationHeading: string;
    languageHeading: string;
    copyright: string;
    note: string;
  };
}
