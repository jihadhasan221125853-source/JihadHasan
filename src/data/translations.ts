import type { Language, SiteContent } from '../types/content';

const IMG_SEO = '/src/assets/images/portfolio_seo_architecture_1794977256212.jpg';
const IMG_ADS = '/src/assets/images/portfolio_paid_media_studio_1794977256872.jpg';
const IMG_WEB = '/src/assets/images/portfolio_web_editorial_1794977257745.jpg';

export const TRANSLATIONS: Record<Language, SiteContent> = {
  en: {
    brandName: 'JIHAD',
    roleTitle: 'Digital Marketing Specialist',
    nav: [
      { id: 'about', label: 'About' },
      { id: 'services', label: 'Services' },
      { id: 'portfolio', label: 'Portfolio' },
      { id: 'process', label: 'Process' },
      { id: 'contact', label: 'Contact' },
    ],
    headerCta: 'Book a Free SEO Audit',
    mobileMenuOpenLabel: 'Open navigation menu',
    mobileMenuCloseLabel: 'Close navigation menu',
    hero: {
      kicker: 'Digital Marketing & SEO Specialist',
      headline: 'Strategic Digital Growth Built on Search, Media & Web Precision.',
      subheadline:
        'I am JIHAD — helping local and global business owners and e-commerce brands scale organic traffic, sharpen conversion rates (CRO), and run disciplined paid acquisition across Meta, Google, and YouTube.',
      primaryCta: 'Book a Free SEO Audit',
      secondaryCta: 'Explore My Work',
      sculptureCaption: '3D Strategy Compass · Drag to orbit',
      inspect3dLabel: 'Inspect 3D Studio',
      pillarsStrip: [
        { label: 'Core Discipline', value: 'Search Engine Optimization' },
        { label: 'Paid Acquisition', value: 'Meta & YouTube Advertising' },
        { label: 'Digital Foundation', value: 'Website Design & Development' },
        { label: 'Approach', value: 'Research-Led & Measurable' },
      ],
    },
    studio3d: {
      title: 'JIHAD — 3D Strategy Compass',
      subtitle: 'Procedural PBR brass & obsidian architectural study',
      closeLabel: 'Close 3D Studio',
      hideControls: 'Hide Controls',
      showControls: 'Show Controls',
      cameraLabel: 'Camera',
      finishLabel: 'Finish',
      cameras: {
        front: 'Front',
        isometric: 'Isometric',
        crown: 'Crown',
        reset: 'Reset',
      },
      finishes: {
        gold: 'Brushed Gold',
        bronze: 'Dark Bronze',
      },
    },
    about: {
      eyebrow: 'About JIHAD',
      heading: 'Clarity Over Noise in Modern Digital Marketing.',
      lead: 'Sustainable brand growth rarely comes from isolated tactics. It comes from aligning how people search, how campaigns persuade, and how websites convert.',
      body: 'As a Digital Marketing Specialist, my work focuses on building coherent digital ecosystems: thorough keyword and technical SEO foundations, structured Meta and YouTube advertising campaigns, and clean, fast-loading websites tailored for clarity and action. Every engagement begins with honest research and a clear measurement plan.',
      portraitTitle: 'Approved Portrait — JIHAD',
      portraitPendingTitle: 'Approved Portrait Placeholder',
      portraitPendingNote:
        'No portrait image was attached in this workspace. Upload your approved portrait to preview it live here without generating a replacement face.',
      uploadPortraitCta: 'Upload Approved Portrait',
      replacePortraitCta: 'Replace Portrait',
      removePortraitCta: 'Remove',
      editableDetails: [
        { label: 'Full Name', value: 'JIHAD [Add Full Name — Editable]' },
        { label: 'Role', value: 'Digital Marketing Specialist' },
        { label: 'Location', value: '[City, Country — Editable]' },
        { label: 'Availability', value: '[Freelance / Consulting — Editable]' },
      ],
    },
    expertise: {
      eyebrow: 'My Expertise',
      heading: 'Three Interconnected Disciplines.',
      intro:
        'Rather than treating search, paid media, and web design as separate silos, I connect them into a single measurable growth architecture.',
      pillars: [
        {
          number: '01.',
          title: 'Organic Search Architecture',
          subtitle: 'Visibility & Intent Capture',
          description:
            'Structuring websites and content around real user search intent so brands earn consistent, compounding organic discovery without relying exclusively on ad spend.',
          focusAreas: [
            'Search Intent Mapping',
            'Technical Crawl Health',
            'On-Page Semantic Structure',
          ],
        },
        {
          number: '02.',
          title: 'Performance Paid Media',
          subtitle: 'Meta & YouTube Campaigns',
          description:
            'Designing disciplined campaign architectures across Facebook, Instagram, and YouTube with clear audience segmentation, creative testing plans, and conversion tracking.',
          focusAreas: [
            'Full-Funnel Campaign Structure',
            'Audience & Creative Testing',
            'Pixel & Event Tracking Setup',
          ],
        },
        {
          number: '03.',
          title: 'Conversion-Focused Web Systems',
          subtitle: 'Design & Development',
          description:
            'Building responsive, fast-loading websites and landing pages engineered for editorial credibility, clean technical SEO, and frictionless lead capture.',
          focusAreas: [
            'Responsive Editorial UI',
            'Landing Page Architecture',
            'Core Web Vitals Readiness',
          ],
        },
      ],
    },
    services: {
      eyebrow: 'Digital Marketing Services',
      heading: 'Focused Services Designed for Real Business Needs.',
      intro:
        'Select any service below to review its core deliverables and strategic focus. Every scope can be tailored to your business stage.',
      deliverablesLabel: 'Core Deliverables',
      outcomeLabel: 'Strategic Focus',
      inquireServiceCta: 'Inquire About This Service',
      items: [
        {
          id: 'seo',
          number: '01.',
          category: 'seo',
          title: 'Search Engine Optimization (SEO)',
          summary:
            'End-to-end organic search strategy designed to strengthen site authority, align content with buyer intent, and build long-term search visibility.',
          deliverables: [
            'Comprehensive SEO baseline audit and roadmap',
            'Search intent and competitor landscape analysis',
            'Monthly priority execution checklist and reporting framework',
          ],
          outcomeFocus: 'Compounding organic discoverability with transparent tracking.',
        },
        {
          id: 'keyword-research',
          number: '02.',
          category: 'seo',
          title: 'Keyword Research',
          summary:
            'In-depth discovery and clustering of commercial, informational, and local search terms to guide page architecture and editorial calendars.',
          deliverables: [
            'Intent-grouped keyword matrix mapped to target pages',
            'Search demand, competition, and gap assessment',
            'Content brief outlines for priority topics',
          ],
          outcomeFocus: 'Eliminating guesswork before investing in content or pages.',
        },
        {
          id: 'on-page-seo',
          number: '03.',
          category: 'seo',
          title: 'On-Page SEO',
          summary:
            'Refining page titles, heading hierarchies, internal linking, and content clarity so search engines and human visitors immediately understand page relevance.',
          deliverables: [
            'Title tag, meta description, and heading (H1–H3) optimization',
            'Internal linking architecture and anchor text review',
            'Content readability, media alt text, and schema readiness',
          ],
          outcomeFocus: 'Clear topical relevance and stronger organic click-through appeal.',
        },
        {
          id: 'technical-seo',
          number: '04.',
          category: 'seo',
          title: 'Technical SEO',
          summary:
            'Resolving structural barriers that prevent search engines from efficiently crawling, indexing, and rendering your website across devices.',
          deliverables: [
            'Crawlability, robots.txt, and XML sitemap verification',
            'Canonical tags, redirect hygiene, and broken link resolution',
            'Mobile usability, page speed, and structured data diagnostics',
          ],
          outcomeFocus: 'A clean, indexable technical foundation that supports every page.',
        },
        {
          id: 'meta-ads',
          number: '05.',
          category: 'paid-ads',
          title: 'Facebook and Instagram Ads',
          summary:
            'Structured Meta advertising campaigns built around audience clarity, thoughtful creative messaging, and accurate conversion measurement.',
          deliverables: [
            'Campaign funnel architecture (Awareness, Consideration, Conversion)',
            'Audience research, retargeting layers, and ad copy frameworks',
            'Meta Pixel & Conversion API verification checklist',
          ],
          outcomeFocus: 'Disciplined budget allocation and repeatable creative testing.',
        },
        {
          id: 'youtube-ads',
          number: '06.',
          category: 'paid-ads',
          title: 'YouTube Ads',
          summary:
            'Targeted video advertising on YouTube designed to capture attention in the opening seconds and guide viewers toward meaningful brand action.',
          deliverables: [
            'In-stream and in-feed campaign setup via Google Ads',
            'Placement, topic, and custom intent audience targeting',
            'Video hook structure recommendations and companion CTA setup',
          ],
          outcomeFocus: 'High-attention video reach paired with measurable landing page traffic.',
        },
        {
          id: 'web-design-dev',
          number: '07.',
          category: 'web-design',
          title: 'Website Design and Development',
          summary:
            'Custom, responsive websites and campaign landing pages crafted with refined typography, clear conversion pathways, and built-in SEO hygiene.',
          deliverables: [
            'Responsive desktop, tablet, and mobile interface design',
            'Clean semantic HTML, fast performance, and accessible controls',
            'Lead capture forms, analytics integration, and SEO metadata setup',
          ],
          outcomeFocus: 'A credible digital flagship engineered to convert visitors into inquiries.',
        },
      ],
    },
    portfolio: {
      eyebrow: 'Portfolio Framework',
      heading: 'Selected Sample & Practice Work.',
      intro:
        'Explore structured marketing and web architectures across project, case study, gallery, and service-based views.',
      disclaimer:
        'Transparency Note: All items below are clearly labeled sample and practice projects demonstrating JIHAD’s methodology and frameworks. No client names, testimonials, or campaign figures are fabricated.',
      filters: [
        { id: 'all', label: 'All Work' },
        { id: 'seo', label: 'SEO' },
        { id: 'paid-ads', label: 'Paid Ads' },
        { id: 'web-design', label: 'Web Design' },
      ],
      viewModes: [
        { id: 'projects', label: 'Project Layout' },
        { id: 'case-studies', label: 'Case Study' },
        { id: 'gallery', label: 'Visual Gallery' },
        { id: 'by-service', label: 'By Service' },
      ],
      openDetailsLabel: 'Inspect Blueprint',
      closeModalLabel: 'Close project blueprint',
      objectiveLabel: 'Objective',
      strategyLabel: 'Strategic Approach',
      deliverablesLabel: 'Deliverables',
      measurementLabel: 'Measurement Framework',
      emptyState: 'No projects match the selected filter.',
      projects: [
        {
          id: 'sample-seo-architecture',
          title: 'B2B Service Website — Technical & On-Page SEO Blueprint',
          label: 'Sample Project',
          category: 'seo',
          serviceId: 'technical-seo',
          serviceName: 'Technical & On-Page SEO',
          year: '2026',
          imageUrl: IMG_SEO,
          imageAlt: 'Editorial flat-lay representing a structured SEO architecture blueprint',
          summary:
            'A complete practice audit and site-architecture blueprint demonstrating keyword clustering, crawl hygiene, and internal linking for a multi-service business website.',
          objective:
            'Establish a clean semantic hierarchy and resolve common indexation bottlenecks so core service pages can compete clearly for high-intent search queries.',
          strategy: [
            'Mapped commercial and informational keywords to dedicated landing pages to eliminate cannibalization.',
            'Designed a three-tier internal linking structure connecting educational guides to core service pages.',
            'Documented XML sitemap, canonical rules, and structured data schema implementation.',
          ],
          deliverables: [
            'Keyword Intent & Topic Cluster Sheet',
            'Technical Crawl & Indexation Audit Checklist',
            'On-Page Optimization Templates (Titles, H1–H3, Meta)',
          ],
          measurementFramework:
            'Tracked via Google Search Console impressions, indexed page coverage, non-branded query positions, and organic inquiry submissions.',
        },
        {
          id: 'sample-keyword-cluster',
          title: 'E-Commerce Category — Keyword Research & Content Map',
          label: 'Practice Study',
          category: 'seo',
          serviceId: 'keyword-research',
          serviceName: 'Keyword Research',
          year: '2026',
          imageUrl: IMG_SEO,
          imageAlt: 'Minimalist strategy workspace symbolizing keyword research and editorial mapping',
          summary:
            'A practice keyword research framework organizing buyer-intent product terms and supporting informational queries into an actionable editorial roadmap.',
          objective:
            'Identify underserved long-tail search opportunities and align category descriptions with real customer phrasing.',
          strategy: [
            'Segmented search terms by funnel stage: Discovery, Comparison, and Purchase Intent.',
            'Prioritized low-friction keyword clusters based on relevance and content depth requirements.',
            'Prepared structured on-page briefs for category hubs and buying guides.',
          ],
          deliverables: [
            'Segmented Keyword Research Workbook',
            'Category-to-Keyword Mapping Matrix',
            'Editorial Content Brief Templates',
          ],
          measurementFramework:
            'Evaluated through organic category impressions, click-through rate improvements, and assisted organic sessions.',
        },
        {
          id: 'sample-meta-funnel',
          title: 'Direct-to-Consumer Brand — Meta Ads Funnel Architecture',
          label: 'Sample Project',
          category: 'paid-ads',
          serviceId: 'meta-ads',
          serviceName: 'Facebook and Instagram Ads',
          year: '2026',
          imageUrl: IMG_ADS,
          imageAlt: 'Architectural dark studio composition representing paid media campaign planning',
          summary:
            'A structured Facebook and Instagram advertising blueprint covering cold-audience creative testing, retargeting sequences, and conversion event verification.',
          objective:
            'Build a repeatable, non-overlapping campaign structure that isolates winning creative angles while keeping budget allocation disciplined.',
          strategy: [
            'Separated prospecting and warm retargeting into distinct campaign objectives with clear exclusion rules.',
            'Created a modular 3-angle creative testing matrix (Problem-Solution, Editorial Proof, Direct Offer).',
            'Specified Meta Pixel standard events and UTM naming conventions for clean attribution.',
          ],
          deliverables: [
            'Full-Funnel Meta Campaign Architecture Diagram',
            'Ad Copy & Creative Testing Matrix',
            'Tracking & UTM Governance Guide',
          ],
          measurementFramework:
            'Monitored through Cost Per Qualified Lead, Click-Through Rate (Link), Thumbstop Ratio, and verified conversion events.',
        },
        {
          id: 'sample-youtube-launch',
          title: 'Product Education — YouTube Ads Targeting & Script Framework',
          label: 'Practice Study',
          category: 'paid-ads',
          serviceId: 'youtube-ads',
          serviceName: 'YouTube Ads',
          year: '2026',
          imageUrl: IMG_ADS,
          imageAlt: 'Warm sunlit minimalist studio monitor representing YouTube video campaign architecture',
          summary:
            'A practice YouTube Ads blueprint outlining custom search-intent audiences, 5-second opening hooks, and aligned landing page messaging.',
          objective:
            'Reach high-intent viewers actively researching solutions on Google and YouTube with concise, persuasive video storytelling.',
          strategy: [
            'Built custom intent audience segments anchored on high-relevance search keywords.',
            'Structured video scripts around a 5-second hook, clear value demonstration, and single visual CTA.',
            'Aligned landing page hero headlines directly with the video offer to preserve message match.',
          ],
          deliverables: [
            'Google Ads YouTube Campaign Blueprint',
            '5-Second Hook & Script Wireframe',
            'Placement Exclusion & Frequency Cap Checklist',
          ],
          measurementFramework:
            'Evaluated via View Rate, Earned Actions, Qualified Landing Page Sessions, and Cost Per Conversion.',
        },
        {
          id: 'sample-web-flagship',
          title: 'Editorial Personal Brand — Responsive Website Architecture',
          label: 'Sample Project',
          category: 'web-design',
          serviceId: 'web-design-dev',
          serviceName: 'Website Design and Development',
          year: '2026',
          imageUrl: IMG_WEB,
          imageAlt: 'Minimalist dark laptop and brushed brass geometric object on travertine stone',
          summary:
            'A practice editorial website design and frontend build focused on luxury typographic hierarchy, bilingual readiness, semantic HTML, and fast load performance.',
          objective:
            'Demonstrate how restrained visual art direction, clean technical markup, and clear user journeys elevate personal brand credibility.',
          strategy: [
            'Established a disciplined 4-color palette and editorial typographic scale across desktop and mobile.',
            'Built bilingual content architecture supporting natural English and Bengali typography.',
            'Engineered accessible navigation, validated lead capture, and structured SEO metadata.',
          ],
          deliverables: [
            'Responsive Desktop, Tablet & Mobile UI System',
            'Semantic HTML & SEO Metadata Implementation',
            'Interactive Portfolio & Lead Inquiry Flow',
          ],
          measurementFramework:
            'Measured through Lighthouse accessibility and performance audits, mobile usability, and inquiry form completion.',
        },
      ],
    },
    caseStudies: {
      eyebrow: 'Case Studies',
      heading: 'How Strategy Translates Into Execution.',
      intro:
        'Structured practice case frameworks illustrating how JIHAD diagnoses challenges, plans execution, and defines honest measurement criteria.',
      challengeLabel: 'The Challenge',
      approachLabel: 'Strategic Blueprint',
      executionLabel: 'Execution Steps',
      measurementLabel: 'How Success Is Measured',
      items: [
        {
          id: 'cs-seo-foundation',
          number: '01',
          label: 'Practice Case Framework',
          title: 'Rebuilding Organic Discoverability for a Local Service Brand',
          discipline: 'SEO · Technical Audit · Keyword Mapping',
          challenge:
            'Many growing service businesses publish pages without keyword intent alignment, leaving core offerings invisible in search while technical crawl issues dilute authority.',
          approach:
            'Start with a technical crawl baseline, consolidate competing URLs, map one clear primary intent per service page, and support them with helpful editorial guides.',
          executionSteps: [
            'Audit indexation, canonical tags, mobile responsiveness, and page speed bottlenecks.',
            'Cluster high-intent service keywords and rewrite titles, H1s, and meta descriptions.',
            'Build an internal linking map directing authority to primary conversion pages.',
          ],
          measurementPlan:
            'Google Search Console non-branded clicks, impressions across target service clusters, and qualified organic form inquiries over a 6-month horizon.',
          metrics: [
            { value: '+150%', label: 'Organic Traffic', timeframe: '6-Month Benchmark Target' },
            { value: '+84%', label: 'Non-Branded Impressions', timeframe: 'Search Console Growth' },
            { value: '2.4x', label: 'Qualified Organic Inquiries', timeframe: 'CRO + Intent Alignment' },
          ],
          chartTitle: '6-Month Organic Traffic Trajectory (Indexed Monthly Visits)',
          chartUnit: 'visits',
          chartPoints: [
            { period: 'M1', value: 1200 },
            { period: 'M2', value: 1480 },
            { period: 'M3', value: 1850 },
            { period: 'M4', value: 2210 },
            { period: 'M5', value: 2640 },
            { period: 'M6', value: 3000 },
          ],
        },
        {
          id: 'cs-paid-acquisition',
          number: '02',
          label: 'Practice Case Framework',
          title: 'Structuring a Disciplined Meta & YouTube Lead Generation Funnel',
          discipline: 'Facebook & Instagram Ads · YouTube Ads · CRO Landing Page',
          challenge:
            'Ad budgets frequently underperform when campaigns mix cold and warm audiences together, run unverified conversion tracking, or send clicks to unfocused pages.',
          approach:
            'Separate audience temperatures, verify server and browser event tracking before launch, test clear creative hypotheses, and pair every ad set with a message-matched landing page.',
          executionSteps: [
            'Configure Meta Pixel / Google Ads conversion tags and consistent UTM parameters.',
            'Launch structured creative tests comparing problem-focused vs. outcome-focused hooks.',
            'Review weekly funnel drop-off from impression to click to qualified inquiry.',
          ],
          measurementPlan:
            'Verified lead volume, Cost Per Qualified Inquiry, landing page conversion rate, and creative retention metrics — reported transparently without vanity inflation.',
          metrics: [
            { value: '+118%', label: 'Qualified Lead Volume', timeframe: '90-Day Funnel Optimization' },
            { value: '-34%', label: 'Cost Per Acquisition', timeframe: 'Audience & Creative Pruning' },
            { value: '3.6%', label: 'Landing Page CVR', timeframe: 'CRO Message Match' },
          ],
          chartTitle: '90-Day Qualified Lead Scaling (Bi-Weekly Qualified Inquiries)',
          chartUnit: 'leads',
          chartPoints: [
            { period: 'W2', value: 22 },
            { period: 'W4', value: 28 },
            { period: 'W6', value: 34 },
            { period: 'W8', value: 39 },
            { period: 'W10', value: 44 },
            { period: 'W12', value: 48 },
          ],
        },
      ],
    },
    skills: {
      eyebrow: 'Skills & Tools',
      heading: 'Operational Capabilities & Ecosystem.',
      intro:
        'A focused toolkit spanning organic search diagnostics, paid media management, analytics, and modern web development.',
      groups: [
        {
          title: 'SEO & Organic Search',
          items: [
            'Google Search Console',
            'Keyword Intent Research & Clustering',
            'On-Page & Semantic Optimization',
            'Technical SEO & Crawl Diagnostics',
            'Schema Markup & Metadata Architecture',
          ],
        },
        {
          title: 'Paid Media & Analytics',
          items: [
            'Meta Ads Manager (Facebook & Instagram)',
            'Google Ads & YouTube Video Campaigns',
            'Google Analytics 4 (GA4)',
            'Conversion Tracking & UTM Governance',
            'Funnel & Creative Performance Analysis',
          ],
        },
        {
          title: 'Web Design & Development',
          items: [
            'Responsive UI / UX Art Direction',
            'Semantic HTML5 & Modern CSS',
            'Landing Page Conversion Architecture',
            'Performance & Mobile Optimization',
            'CMS & Frontend Implementation',
          ],
        },
      ],
    },
    certifications: {
      eyebrow: 'Certifications',
      heading: 'Credentials & Continuous Learning.',
      intro:
        'Industry-recognized certifications in analytics, inbound content strategy, and search marketing.',
      slots: [
        {
          id: 'cert-1',
          title: 'HubSpot Inbound & Content Marketing Certification',
          issuer: 'HubSpot Academy',
          year: 'Verified',
          statusNote: 'Full-funnel content strategy, conversion pathways, and editorial SEO alignment.',
        },
        {
          id: 'cert-2',
          title: 'Google Analytics 4 (GA4) Certification',
          issuer: 'Google Skillshop',
          year: 'Verified',
          statusNote: 'Event tracking, attribution modeling, audience diagnostics, and conversion reporting.',
        },
        {
          id: 'cert-3',
          title: 'Technical SEO & Paid Acquisition Specialization',
          issuer: 'Google & Meta Ecosystem',
          year: 'Active',
          statusNote: 'Search Console diagnostics, Meta Pixel governance, and YouTube Ads campaign strategy.',
        },
      ],
    },
    process: {
      eyebrow: 'My Work Process',
      heading: 'A Deliberate Four-Stage Engagement Model.',
      intro:
        'Clear communication, documented priorities, and measurable milestones at every step.',
      deliverablePrefix: 'Key Output',
      steps: [
        {
          number: '01.',
          title: 'Discovery & Audit',
          description:
            'Understand your business model, audience, current digital footprint, and real bottlenecks before recommending any channel or budget.',
          artifact: 'Baseline Audit & Opportunity Summary',
        },
        {
          number: '02.',
          title: 'Strategy & Architecture',
          description:
            'Define clear objectives, keyword maps, campaign funnel structures, or website wireframes aligned with measurable conversion goals.',
          artifact: 'Channel & Execution Roadmap',
        },
        {
          number: '03.',
          title: 'Disciplined Execution',
          description:
            'Implement SEO improvements, launch structured Meta or YouTube campaigns, or build your responsive website with attention to technical detail.',
          artifact: 'Live Implementation & Tracking QA',
        },
        {
          number: '04.',
          title: 'Review & Refinement',
          description:
            'Evaluate real performance data, cut what underperforms, and iterate systematically on search pages, ad creatives, and landing experiences.',
          artifact: 'Transparent Performance Review',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: "Let's Discuss Your Digital Growth.",
      intro:
        'Whether you need a structured SEO foundation, disciplined Meta or YouTube advertising, or a custom brand website, send a brief overview of your goals.',
      directInfoHeading: 'Direct Contact Details (Editable)',
      directDetails: [
        { label: 'Email', value: '[your-email@domain.com — Editable]' },
        { label: 'Location', value: '[City, Country — Editable]' },
        { label: 'LinkedIn', value: '[linkedin.com/in/jihad — Editable]' },
        { label: 'Response Window', value: 'Within 24–48 business hours' },
      ],
      form: {
        nameLabel: 'Your Name',
        namePlaceholder: 'Enter your full name',
        emailLabel: 'Email Address',
        emailPlaceholder: 'name@company.com',
        serviceLabel: 'Service of Interest',
        servicePlaceholder: 'Select a service',
        budgetLabel: 'Project Budget',
        budgetPlaceholder: 'Select estimated budget',
        budgetOptions: [
          { value: 'free-audit', label: 'Free SEO Audit — Initial Consultation' },
          { value: '500-1000', label: '$500 – $1,000 / month' },
          { value: '1000-2500', label: '$1,000 – $2,500 / month' },
          { value: '2500-5000', label: '$2,500 – $5,000 / month' },
          { value: '5000-plus', label: '$5,000+ / Full Growth Retainer' },
        ],
        messageLabel: 'Project Overview',
        messagePlaceholder: 'Share your website URL, growth goals, and timeline...',
        submitCta: 'Request Free SEO Audit',
        successTitle: 'Audit Request Recorded',
        successBody:
          'Thank you for reaching out to JIHAD. Your inquiry and budget preference have been captured cleanly in this preview session. Connect your preferred email endpoint before live deployment.',
        sendAnotherCta: 'Send Another Inquiry',
        errors: {
          nameRequired: 'Please enter your name.',
          emailRequired: 'Please enter your email address.',
          emailInvalid: 'Please enter a valid email address.',
          serviceRequired: 'Please select a service.',
          budgetRequired: 'Please select an estimated project budget.',
          messageRequired: 'Please share a brief overview of your project (at least 10 characters).',
        },
      },
    },
    assistant: {
      launcherLabel: 'AI Assistant',
      openAriaLabel: 'Open JIHAD AI Marketing Assistant',
      closeAriaLabel: 'Close AI Assistant',
      resetAriaLabel: 'Reset conversation',
      eyebrow: 'JIHAD · AI Concierge',
      title: 'Marketing & SEO Assistant',
      welcomeMessage:
        'Welcome. Ask me about JIHAD’s SEO audits, keyword research, Meta & YouTube ads, or website design — I can help you pick the right starting point.',
      inputPlaceholder: 'Ask about SEO, ads, or web design...',
      sendAriaLabel: 'Send message',
      thinkingLabel: 'Preparing your answer...',
      bookAuditCta: 'Book a Free SEO Audit',
      quickPrompts: [
        'What is included in a Free SEO Audit?',
        'How does JIHAD structure Facebook & YouTube Ads?',
        'Can you help redesign my website for SEO & leads?',
      ],
    },
    footer: {
      tagline: 'Digital Marketing Specialist — SEO, Paid Media & Web Architecture.',
      navigationHeading: 'Navigation',
      languageHeading: 'Language',
      copyright: '© 2026 JIHAD. All rights reserved.',
      note: 'Built with bilingual editorial architecture (EN / বাংলা).',
    },
  },

  bn: {
    brandName: 'JIHAD',
    roleTitle: 'ডিজিটাল মার্কেটিং স্পেশালিস্ট',
    nav: [
      { id: 'about', label: 'পরিচিতি' },
      { id: 'services', label: 'সেবাসমূহ' },
      { id: 'portfolio', label: 'পোর্টফোলিও' },
      { id: 'process', label: 'কর্মপদ্ধতি' },
      { id: 'contact', label: 'যোগাযোগ' },
    ],
    headerCta: 'ফ্রি এসইও অডিট বুক করুন',
    mobileMenuOpenLabel: 'মেনু খুলুন',
    mobileMenuCloseLabel: 'মেনু বন্ধ করুন',
    hero: {
      kicker: 'ডিজিটাল মার্কেটিং ও এসইও স্পেশালিস্ট',
      headline: 'সার্চ, পেইড মিডিয়া ও ওয়েব দক্ষতায় গড়া সুপরিকল্পিত ডিজিটাল প্রবৃদ্ধি।',
      subheadline:
        'আমি জিহাদ (JIHAD) — দেশি ও আন্তর্জাতিক ব্যবসা এবং ই-কমার্স ব্র্যান্ডের অর্গানিক ট্রাফিক বৃদ্ধি, কনভার্সন অপ্টিমাইজেশন (CRO) এবং সুশৃঙ্খল মেটা, গুগল ও ইউটিউব বিজ্ঞাপনে কাজ করি।',
      primaryCta: 'ফ্রি এসইও অডিট বুক করুন',
      secondaryCta: 'আমার কাজ দেখুন',
      sculptureCaption: '৩ডি স্ট্র্যাটেজি কম্পাস · ঘুরিয়ে দেখুন',
      inspect3dLabel: '৩ডি স্টুডিও দেখুন',
      pillarsStrip: [
        { label: 'মূল দক্ষতা', value: 'সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO)' },
        { label: 'পেইড বিজ্ঞাপন', value: 'মেটা ও ইউটিউব অ্যাডস' },
        { label: 'ওয়েব ভিত্তি', value: 'ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট' },
        { label: 'কর্মদর্শন', value: 'গবেষণানির্ভর ও পরিমাপযোগ্য' },
      ],
    },
    studio3d: {
      title: 'JIHAD — ৩ডি স্ট্র্যাটেজি কম্পাস',
      subtitle: 'ব্রাশড গোল্ড ও অবসিডিয়ান আর্কিটেকচারাল মডেল',
      closeLabel: '৩ডি স্টুডিও বন্ধ করুন',
      hideControls: 'কন্ট্রোল লুকান',
      showControls: 'কন্ট্রোল দেখান',
      cameraLabel: 'ক্যামেরা',
      finishLabel: 'ফিনিশ',
      cameras: {
        front: 'সম্মুখ',
        isometric: 'আইসোমেট্রিক',
        crown: 'উপর থেকে',
        reset: 'রিসেট',
      },
      finishes: {
        gold: 'ব্রাশড গোল্ড',
        bronze: 'ডার্ক ব্রোঞ্জ',
      },
    },
    about: {
      eyebrow: 'জিহাদ সম্পর্কে',
      heading: 'আধুনিক ডিজিটাল মার্কেটিংয়ে অযথা কোলাহলের বদলে স্পষ্ট কৌশল।',
      lead: 'টেকসই ব্র্যান্ড প্রবৃদ্ধি বিচ্ছিন্ন কোনো কৌশল থেকে আসে না। মানুষ কীভাবে খোঁজে, বিজ্ঞাপন কীভাবে প্রভাবিত করে এবং ওয়েবসাইট কীভাবে গ্রাহক তৈরি করে — এই তিনের সমন্বয়েই প্রকৃত সাফল্য আসে।',
      body: 'একজন ডিজিটাল মার্কেটিং স্পেশালিস্ট হিসেবে আমার লক্ষ্য হলো একটি সুসংগঠিত ডিজিটাল কাঠামো তৈরি করা: সঠিক কিওয়ার্ড ও টেকনিক্যাল এসইও ভিত্তি, পরিকল্পিত ফেসবুক, ইনস্টাগ্রাম ও ইউটিউব ক্যাম্পেইন এবং দ্রুতগতির পরিচ্ছন্ন ওয়েবসাইট। প্রতিটি কাজের শুরু হয় বাস্তবসম্মত গবেষণা ও স্পষ্ট পরিমাপ পরিকল্পনার মাধ্যমে।',
      portraitTitle: 'অনুমোদিত প্রতিকৃতি — JIHAD',
      portraitPendingTitle: 'অনুমোদিত ছবির স্থান (প্লেসহোল্ডার)',
      portraitPendingNote:
        'এই ওয়ার্কস্পেসে কোনো পোর্ট্রেট ছবি যুক্ত করা হয়নি। কৃত্রিম মুখ তৈরি না করে আপনার আসল অনুমোদিত ছবি এখানে আপলোড করে সরাসরি প্রিভিউ দেখতে পারবেন।',
      uploadPortraitCta: 'অনুমোদিত ছবি আপলোড করুন',
      replacePortraitCta: 'ছবি পরিবর্তন করুন',
      removePortraitCta: 'মুছে ফেলুন',
      editableDetails: [
        { label: 'পূর্ণ নাম', value: 'JIHAD [পূর্ণ নাম যুক্ত করুন — সম্পাদনযোগ্য]' },
        { label: 'পেশাগত পরিচয়', value: 'ডিজিটাল মার্কেটিং স্পেশালিস্ট' },
        { label: 'অবস্থান', value: '[শহর, দেশ — সম্পাদনযোগ্য]' },
        { label: 'কাজের ধরন', value: '[ফ্রিল্যান্স / কনসাল্টিং — সম্পাদনযোগ্য]' },
      ],
    },
    expertise: {
      eyebrow: 'আমার দক্ষতার ক্ষেত্র',
      heading: 'তিনটি পরস্পরসংযুক্ত কৌশলগত স্তম্ভ।',
      intro:
        'সার্চ, পেইড মিডিয়া এবং ওয়েব ডিজাইনকে আলাদাভাবে না দেখে, আমি এগুলোকে একটি সমন্বিত প্রবৃদ্ধি কাঠামোয় যুক্ত করি।',
      pillars: [
        {
          number: '০১.',
          title: 'অর্গানিক সার্চ আর্কিটেকচার',
          subtitle: 'ভিজিবিলিটি ও সার্চ ইন্টেন্ট',
          description:
            'ব্যবহারকারীর প্রকৃত সার্চ উদ্দেশ্য অনুযায়ী ওয়েবসাইট ও কনটেন্ট সাজানো, যাতে শুধু বিজ্ঞাপনের ওপর নির্ভর না করেই ব্র্যান্ড নিয়মিত অর্গানিক ভিজিটর পায়।',
          focusAreas: [
            'সার্চ ইন্টেন্ট ম্যাপিং',
            'টেকনিক্যাল ক্রল ও ইনডেক্স স্বাস্থ্য',
            'অন-পেজ সিমান্টিক কাঠামো',
          ],
        },
        {
          number: '০২.',
          title: 'পারফরম্যান্স পেইড মিডিয়া',
          subtitle: 'মেটা ও ইউটিউব ক্যাম্পেইন',
          description:
            'ফেসবুক, ইনস্টাগ্রাম ও ইউটিউবে সুনির্দিষ্ট অডিয়েন্স বিভাজন, ক্রিয়েটিভ টেস্টিং এবং নির্ভুল কনভার্সন ট্র্যাকিংয়ের মাধ্যমে সুশৃঙ্খল বিজ্ঞাপন পরিচালনা।',
          focusAreas: [
            'ফুল-ফানেল ক্যাম্পেইন কাঠামো',
            'অডিয়েন্স ও ক্রিয়েটিভ টেস্টিং',
            'পিক্সেল ও ইভেন্ট ট্র্যাকিং সেটআপ',
          ],
        },
        {
          number: '০৩.',
          title: 'কনভার্সন-কেন্দ্রিক ওয়েব সিস্টেম',
          subtitle: 'ডিজাইন ও ডেভেলপমেন্ট',
          description:
            'ব্র্যান্ডের আস্থা তৈরি, পরিচ্ছন্ন টেকনিক্যাল এসইও এবং সহজ লিড সংগ্রহের উপযোগী দ্রুতগতির ও রেসপনসিভ ওয়েবসাইট নির্মাণ।',
          focusAreas: [
            'রেসপনসিভ এডিটোরিয়াল ডিজাইন',
            'ল্যান্ডিং পেজ আর্কিটেকচার',
            'দ্রুত লোডিং ও পারফরম্যান্স প্রস্তুতি',
          ],
        },
      ],
    },
    services: {
      eyebrow: 'ডিজিটাল মার্কেটিং সেবাসমূহ',
      heading: 'ব্যবসার প্রকৃত প্রয়োজন অনুযায়ী সুনির্দিষ্ট সেবা।',
      intro:
        'যেকোনো সেবায় ক্লিক করে তার মূল ডেলিভারেবল ও কৌশলগত লক্ষ্য দেখুন। আপনার ব্যবসার বর্তমান ধাপ অনুযায়ী প্রতিটি সেবা সাজিয়ে নেওয়া সম্ভব।',
      deliverablesLabel: 'মূল ডেলিভারেবল',
      outcomeLabel: 'কৌশলগত লক্ষ্য',
      inquireServiceCta: 'এই সেবা সম্পর্কে জানুন',
      items: [
        {
          id: 'seo',
          number: '০১.',
          category: 'seo',
          title: 'সার্চ ইঞ্জিন অপ্টিমাইজেশন (SEO)',
          summary:
            'ওয়েবসাইটের সার্চ অবস্থান শক্তিশালী করা এবং দীর্ঘমেয়াদে প্রাসঙ্গিক অর্গানিক ট্রাফিক অর্জনের জন্য পূর্ণাঙ্গ এসইও কৌশল।',
          deliverables: [
            'সম্পূর্ণ এসইও বেসলাইন অডিট ও কর্মপরিকল্পনা',
            'সার্চ ইন্টেন্ট ও প্রতিযোগী বিশ্লেষণ',
            'মাসিক অগ্রাধিকার তালিকা ও স্বচ্ছ রিপোর্টিং কাঠামো',
          ],
          outcomeFocus: 'স্বচ্ছ ট্র্যাকিংয়ের মাধ্যমে স্থায়ী অর্গানিক দৃশ্যমানতা।',
        },
        {
          id: 'keyword-research',
          number: '০২.',
          category: 'seo',
          title: 'কিওয়ার্ড রিসার্চ',
          summary:
            'ব্যবসায়িক, তথ্যমূলক ও স্থানীয় সার্চ শব্দ গভীরভাবে বিশ্লেষণ ও শ্রেণিবদ্ধ করে পেজ ও কনটেন্ট পরিকল্পনা তৈরি।',
          deliverables: [
            'ইন্টেন্ট অনুযায়ী শ্রেণিবদ্ধ কিওয়ার্ড ম্যাট্রিক্স',
            'সার্চ চাহিদা, প্রতিযোগিতা ও কনটেন্ট গ্যাপ বিশ্লেষণ',
            'অগ্রাধিকারমূলক পেজের জন্য কনটেন্ট ব্রিফ রূপরেখা',
          ],
          outcomeFocus: 'অনুমানের বদলে তথ্যভিত্তিক পেজ ও কনটেন্ট সিদ্ধান্ত।',
        },
        {
          id: 'on-page-seo',
          number: '০৩.',
          category: 'seo',
          title: 'অন-পেজ এসইও',
          summary:
            'পেজ টাইটেল, হেডিং কাঠামো, ইন্টারনাল লিংকিং এবং কনটেন্টের স্পষ্টতা উন্নয়ন, যাতে সার্চ ইঞ্জিন ও পাঠক উভয়েই বিষয়বস্তু সহজে বুঝতে পারে।',
          deliverables: [
            'টাইটেল ট্যাগ, মেটা ডেসক্রিপশন ও হেডিং (H1–H3) অপ্টিমাইজেশন',
            'ইন্টারনাল লিংকিং কাঠামো ও অ্যাঙ্কর টেক্সট পর্যালোচনা',
            'কনটেন্ট পাঠযোগ্যতা, ইমেজ অল্ট টেক্সট ও স্কিমা প্রস্তুতি',
          ],
          outcomeFocus: 'সুস্পষ্ট প্রাসঙ্গিকতা ও উন্নত অর্গানিক ক্লিক-থ্রু আবেদন।',
        },
        {
          id: 'technical-seo',
          number: '০৪.',
          category: 'seo',
          title: 'টেকনিক্যাল এসইও',
          summary:
            'ওয়েবসাইটের ক্রলিং, ইনডেক্সিং ও রেন্ডারিংয়ের কারিগরি প্রতিবন্ধকতা দূর করে সার্চ ইঞ্জিনের জন্য নির্ভেজাল কাঠামো তৈরি।',
          deliverables: [
            'ক্রলযোগ্যতা, robots.txt এবং XML সাইটম্যাপ যাচাই',
            'ক্যানোনিকাল ট্যাগ, রিডাইরেক্ট ও ব্রোকেন লিংক সমাধান',
            'মোবাইল উপযোগিতা, পেজ স্পিড ও স্ট্রাকচার্ড ডেটা পরীক্ষা',
          ],
          outcomeFocus: 'একটি পরিচ্ছন্ন কারিগরি ভিত্তি যা প্রতিটি পেজকে সহায়তা করে।',
        },
        {
          id: 'meta-ads',
          number: '০৫.',
          category: 'paid-ads',
          title: 'ফেসবুক ও ইনস্টাগ্রাম অ্যাডস',
          summary:
            'সঠিক অডিয়েন্স নির্ধারণ, কার্যকর ক্রিয়েটিভ বার্তা এবং নির্ভুল কনভার্সন ট্র্যাকিংয়ের মাধ্যমে সুশৃঙ্খল মেটা বিজ্ঞাপন পরিচালনা।',
          deliverables: [
            'পূর্ণাঙ্গ ফানেল ক্যাম্পেইন কাঠামো (অ্যাওয়ারনেস, কনসিডারেশন, কনভার্সন)',
            'অডিয়েন্স গবেষণা, রিটার্গেটিং স্তর ও বিজ্ঞাপনের কপি কাঠামো',
            'মেটা পিক্সেল ও কনভার্সন এপিআই যাচাই তালিকা',
          ],
          outcomeFocus: 'সুশৃঙ্খল বাজেট ব্যবহার এবং ধারাবাহিক ক্রিয়েটিভ উন্নয়ন।',
        },
        {
          id: 'youtube-ads',
          number: '০৬.',
          category: 'paid-ads',
          title: 'ইউটিউব অ্যাডস',
          summary:
            'ভিডিওর প্রথম কয়েক সেকেন্ডেই দর্শকের মনোযোগ ধরে রেখে ব্র্যান্ডের লক্ষ্যে পৌঁছে দেওয়ার জন্য পরিকল্পিত ইউটিউব বিজ্ঞাপন।',
          deliverables: [
            'গুগল অ্যাডসের মাধ্যমে ইন-স্ট্রিম ও ইন-ফিড ক্যাম্পেইন সেটআপ',
            'কাস্টম ইন্টেন্ট, টপিক ও প্লেসমেন্ট টার্গেটিং',
            'ভিডিও হুক কাঠামো ও কম্প্যানিয়ন সিটিএ পরামর্শ',
          ],
          outcomeFocus: 'উচ্চ মনোযোগী ভিডিও রিচ ও পরিমাপযোগ্য ওয়েবসাইট ভিজিট।',
        },
        {
          id: 'web-design-dev',
          number: '০৭.',
          category: 'web-design',
          title: 'ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট',
          summary:
            'মার্জিত টাইপোগ্রাফি, স্পষ্ট কনভার্সন পথ এবং বিল্ট-ইন এসইও কাঠামোসহ আধুনিক ও রেসপনসিভ ওয়েবসাইট নির্মাণ।',
          deliverables: [
            'ডেস্কটপ, ট্যাবলেট ও মোবাইলের জন্য রেসপনসিভ ইউআই ডিজাইন',
            'পরিচ্ছন্ন সিমান্টিক HTML, দ্রুত লোডিং ও অ্যাক্সেসিবল ইন্টারফেস',
            'লিড সংগ্রহ ফর্ম, অ্যানালিটিক্স ও এসইও মেটাডেটা সেটআপ',
          ],
          outcomeFocus: 'ভিজিটরকে গ্রাহকে রূপান্তর করার উপযোগী নির্ভরযোগ্য ওয়েবসাইট।',
        },
      ],
    },
    portfolio: {
      eyebrow: 'পোর্টফোলিও কাঠামো',
      heading: 'নির্বাচিত স্যাম্পল ও প্র্যাকটিস কাজ।',
      intro:
        'প্রজেক্ট, কেস স্টাডি, ভিজ্যুয়াল গ্যালারি এবং সেবাভিত্তিক বিন্যাসে আমার মার্কেটিং ও ওয়েব কাজের কাঠামো দেখুন।',
      disclaimer:
        'স্বচ্ছতা নোট: নিচের প্রতিটি কাজ স্পষ্টভাবে স্যাম্পল ও প্র্যাকটিস প্রজেক্ট হিসেবে চিহ্নিত, যা জিহাদের কর্মপদ্ধতি ও কৌশলগত কাঠামো তুলে ধরে। কোনো কাল্পনিক ক্লায়েন্ট, রিভিউ বা পরিসংখ্যান যুক্ত করা হয়নি।',
      filters: [
        { id: 'all', label: 'সব কাজ' },
        { id: 'seo', label: 'এসইও' },
        { id: 'paid-ads', label: 'পেইড অ্যাডস' },
        { id: 'web-design', label: 'ওয়েব ডিজাইন' },
      ],
      viewModes: [
        { id: 'projects', label: 'প্রজেক্ট ভিউ' },
        { id: 'case-studies', label: 'কেস স্টাডি' },
        { id: 'gallery', label: 'ভিজ্যুয়াল গ্যালারি' },
        { id: 'by-service', label: 'সেবা অনুযায়ী' },
      ],
      openDetailsLabel: 'বিস্তারিত কাঠামো দেখুন',
      closeModalLabel: 'বিস্তারিত বন্ধ করুন',
      objectiveLabel: 'লক্ষ্য',
      strategyLabel: 'কৌশলগত পরিকল্পনা',
      deliverablesLabel: 'ডেলিভারেবলসমূহ',
      measurementLabel: 'পরিমাপ কাঠামো',
      emptyState: 'এই ফিল্টারে কোনো প্রজেক্ট পাওয়া যায়নি।',
      projects: [
        {
          id: 'sample-seo-architecture',
          title: 'বিটুবি সার্ভিস ওয়েবসাইট — টেকনিক্যাল ও অন-পেজ এসইও ব্লুপ্রিন্ট',
          label: 'স্যাম্পল প্রজেক্ট',
          category: 'seo',
          serviceId: 'technical-seo',
          serviceName: 'টেকনিক্যাল ও অন-পেজ এসইও',
          year: '২০২৬',
          imageUrl: IMG_SEO,
          imageAlt: 'এসইও আর্কিটেকচার ব্লুপ্রিন্টের এডিটোরিয়াল ভিজ্যুয়াল',
          summary:
            'একাধিক সেবাসমৃদ্ধ একটি ব্যবসায়িক ওয়েবসাইটের জন্য কিওয়ার্ড ক্লাস্টারিং, ক্রলিং স্বাস্থ্য এবং ইন্টারনাল লিংকিংয়ের পূর্ণাঙ্গ প্র্যাকটিস অডিট কাঠামো।',
          objective:
            'পরিচ্ছন্ন সিমান্টিক কাঠামো তৈরি ও ইনডেক্সিং বাধা দূর করা, যাতে মূল সার্ভিস পেজগুলো প্রাসঙ্গিক সার্চে স্পষ্টভাবে অবস্থান নিতে পারে।',
          strategy: [
            'কিওয়ার্ড ক্যানিবালাইজেশন এড়াতে প্রতিটি সার্ভিস পেজের জন্য আলাদা সার্চ ইন্টেন্ট নির্ধারণ।',
            'তথ্যমূলক ব্লগ থেকে মূল সার্ভিস পেজে অথরিটি প্রবাহের জন্য তিন-স্তরের ইন্টারনাল লিংকিং।',
            'XML সাইটম্যাপ, ক্যানোনিকাল নিয়ম ও স্ট্রাকচার্ড ডেটা স্কিমা নির্দেশিকা প্রণয়ন।',
          ],
          deliverables: [
            'কিওয়ার্ড ইন্টেন্ট ও টপিক ক্লাস্টার শিট',
            'টেকনিক্যাল ক্রল ও ইনডেক্স অডিট চেকলিস্ট',
            'অন-পেজ অপ্টিমাইজেশন টেমপ্লেট (টাইটেল, H1–H3, মেটা)',
          ],
          measurementFramework:
            'গুগল সার্চ কনসোল ইম্প্রেশন, ইনডেক্স কভারেজ, নন-ব্র্যান্ডেড সার্চ অবস্থান এবং অর্গানিক ইনকোয়ারির মাধ্যমে মূল্যায়ন।',
        },
        {
          id: 'sample-keyword-cluster',
          title: 'ই-কমার্স ক্যাটাগরি — কিওয়ার্ড রিসার্চ ও কনটেন্ট ম্যাপ',
          label: 'প্র্যাকটিস স্টাডি',
          category: 'seo',
          serviceId: 'keyword-research',
          serviceName: 'কিওয়ার্ড রিসার্চ',
          year: '২০২৬',
          imageUrl: IMG_SEO,
          imageAlt: 'কিওয়ার্ড রিসার্চ ও কনটেন্ট পরিকল্পনার ভিজ্যুয়াল',
          summary:
            'ক্রেতাদের ক্রয়-ইচ্ছাভিত্তিক প্রোডাক্ট কিওয়ার্ড ও তথ্যমূলক সার্চ প্রশ্নগুলোকে একটি কার্যকর এডিটোরিয়াল রোডম্যাপে সাজানোর প্র্যাকটিস কাঠামো।',
          objective:
            'কম প্রতিযোগিতামূলক লং-টেইল সার্চ সুযোগ চিহ্নিত করা এবং ক্রেতাদের স্বাভাবিক ভাষার সাথে ক্যাটাগরি পেজ মিলিয়ে নেওয়া।',
          strategy: [
            'সার্চ শব্দগুলোকে ডিসকভারি, তুলনামূলক ও ক্রয়-ইচ্ছা — এই তিন ধাপে বিভক্ত করা।',
            'প্রাসঙ্গিকতা ও কনটেন্ট গভীরতার ভিত্তিতে অগ্রাধিকার তালিকা তৈরি।',
            'ক্যাটাগরি হাব ও বায়িং গাইডের জন্য সুনির্দিষ্ট কনটেন্ট ব্রিফ প্রস্তুত করা।',
          ],
          deliverables: [
            'শ্রেণিবদ্ধ কিওয়ার্ড রিসার্চ ওয়ার্কবুক',
            'ক্যাটাগরি-টু-কিওয়ার্ড ম্যাপিং ম্যাট্রিক্স',
            'এডিটোরিয়াল কনটেন্ট ব্রিফ টেমপ্লেট',
          ],
          measurementFramework:
            'অর্গানিক ক্যাটাগরি ইম্প্রেশন, ক্লিক-থ্রু রেট এবং অ্যাসিস্টেড অর্গানিক সেশনের ভিত্তিতে অগ্রগতি পর্যবেক্ষণ।',
        },
        {
          id: 'sample-meta-funnel',
          title: 'ডিরেক্ট-টু-কনজিউমার ব্র্যান্ড — মেটা অ্যাডস ফানেল আর্কিটেকচার',
          label: 'স্যাম্পল প্রজেক্ট',
          category: 'paid-ads',
          serviceId: 'meta-ads',
          serviceName: 'ফেসবুক ও ইনস্টাগ্রাম অ্যাডস',
          year: '২০২৬',
          imageUrl: IMG_ADS,
          imageAlt: 'পেইড মিডিয়া ক্যাম্পেইন পরিকল্পনার স্টুডিও ভিজ্যুয়াল',
          summary:
            'নতুন অডিয়েন্সের জন্য ক্রিয়েটিভ টেস্টিং, রিটার্গেটিং ধাপ এবং কনভার্সন ইভেন্ট যাচাইসহ সুগঠিত ফেসবুক ও ইনস্টাগ্রাম অ্যাডস ব্লুপ্রিন্ট।',
          objective:
            'অডিয়েন্স ওভারল্যাপ কমিয়ে একটি পুনরাবৃত্তিযোগ্য ক্যাম্পেইন কাঠামো তৈরি করা, যেখানে কার্যকর ক্রিয়েটিভ দ্রুত চিহ্নিত করা যায়।',
          strategy: [
            'প্রসপেক্টিং ও রিটার্গেটিং ক্যাম্পেইন আলাদা রেখে স্পষ্ট এক্সক্লুশন নিয়ম প্রয়োগ।',
            'সমস্যা-সমাধান, ব্র্যান্ড বিশ্বাসযোগ্যতা ও সরাসরি অফার — তিন ধরনের ক্রিয়েটিভ টেস্টিং ম্যাট্রিক্স।',
            'নির্ভুল অ্যাট্রিবিউশনের জন্য মেটা পিক্সেল ইভেন্ট ও UTM নামকরণ নীতিমালা।',
          ],
          deliverables: [
            'ফুল-ফানেল মেটা ক্যাম্পেইন ডায়াগ্রাম',
            'অ্যাড কপি ও ক্রিয়েটিভ টেস্টিং ম্যাট্রিক্স',
            'ট্র্যাকিং ও UTM ব্যবস্থাপনা গাইড',
          ],
          measurementFramework:
            'কস্ট পার কোয়ালিফায়েড লিড, লিংক ক্লিক-থ্রু রেট, থাম্বস্টপ রেশিও এবং যাচাইকৃত কনভার্সন ইভেন্টের মাধ্যমে মূল্যায়ন।',
        },
        {
          id: 'sample-youtube-launch',
          title: 'প্রোডাক্ট এডুকেশন — ইউটিউব অ্যাডস টার্গেটিং ও স্ক্রিপ্ট কাঠামো',
          label: 'প্র্যাকটিস স্টাডি',
          category: 'paid-ads',
          serviceId: 'youtube-ads',
          serviceName: 'ইউটিউব অ্যাডস',
          year: '২০২৬',
          imageUrl: IMG_ADS,
          imageAlt: 'ইউটিউব ভিডিও ক্যাম্পেইন পরিকল্পনার ভিজ্যুয়াল',
          summary:
            'কাস্টম সার্চ-ইন্টেন্ট অডিয়েন্স, প্রথম ৫ সেকেন্ডের হুক এবং সামঞ্জস্যপূর্ণ ল্যান্ডিং পেজ বার্তাসহ প্র্যাকটিস ইউটিউব অ্যাডস কাঠামো।',
          objective:
            'গুগল ও ইউটিউবে সক্রিয়ভাবে সমাধান খোঁজা দর্শকদের কাছে সংক্ষিপ্ত ও স্পষ্ট ভিডিও বার্তা পৌঁছে দেওয়া।',
          strategy: [
            'উচ্চ প্রাসঙ্গিক সার্চ কিওয়ার্ডের ওপর ভিত্তি করে কাস্টম ইন্টেন্ট অডিয়েন্স তৈরি।',
            '৫-সেকেন্ডের হুক, মূল উপযোগিতা উপস্থাপন এবং একটি স্পষ্ট সিটিএ নিয়ে স্ক্রিপ্ট কাঠামো।',
            'বিজ্ঞাপনের বার্তার সাথে ল্যান্ডিং পেজের শিরোনামের সরাসরি সামঞ্জস্য রক্ষা।',
          ],
          deliverables: [
            'গুগল অ্যাডস ইউটিউব ক্যাম্পেইন ব্লুপ্রিন্ট',
            '৫-সেকেন্ড হুক ও স্ক্রিপ্ট ওয়্যারফ্রেম',
            'প্লেসমেন্ট এক্সক্লুশন ও ফ্রিকোয়েন্সি ক্যাপ চেকলিস্ট',
          ],
          measurementFramework:
            'ভিউ রেট, প্রাসঙ্গিক ল্যান্ডিং পেজ সেশন এবং কস্ট পার কনভার্সনের মাধ্যমে সাফল্য নির্ধারণ।',
        },
        {
          id: 'sample-web-flagship',
          title: 'এডিটোরিয়াল পার্সোনাল ব্র্যান্ড — রেসপনসিভ ওয়েবসাইট আর্কিটেকচার',
          label: 'স্যাম্পল প্রজেক্ট',
          category: 'web-design',
          serviceId: 'web-design-dev',
          serviceName: 'ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট',
          year: '২০২৬',
          imageUrl: IMG_WEB,
          imageAlt: 'মিনিমালিস্ট ডার্ক ল্যাপটপ ও গোল্ড জ্যামিতিক অবজেক্টের এডিটোরিয়াল ছবি',
          summary:
            'মার্জিত টাইপোগ্রাফি, দ্বিভাষিক প্রস্তুতি, সিমান্টিক HTML এবং দ্রুত লোডিং পারফরম্যান্সকেন্দ্রিক প্র্যাকটিস ওয়েবসাইট ডিজাইন ও ডেভেলপমেন্ট।',
          objective:
            'সংযত ভিজ্যুয়াল আর্ট ডিরেকশন ও পরিচ্ছন্ন কারিগরি কাঠামো কীভাবে পার্সোনাল ব্র্যান্ডের বিশ্বাসযোগ্যতা বাড়ায় তা প্রদর্শন।',
          strategy: [
            'ডেস্কটপ ও মোবাইলের জন্য সুনির্দিষ্ট ৪-রঙের প্যালেট এবং এডিটোরিয়াল টাইপোগ্রাফি স্কেল।',
            'স্বাভাবিক ইংরেজি ও বাংলা টাইপোগ্রাফির উপযোগী সম্পূর্ণ দ্বিভাষিক কাঠামো।',
            'অ্যাক্সেসিবল নেভিগেশন, যাচাইকৃত যোগাযোগ ফর্ম এবং এসইও মেটাডেটা বাস্তবায়ন।',
          ],
          deliverables: [
            'ডেস্কটপ, ট্যাবলেট ও মোবাইল রেসপনসিভ ইউআই সিস্টেম',
            'সিমান্টিক HTML ও এসইও মেটাডেটা কাঠামো',
            'ইন্টারেক্টিভ পোর্টফোলিও ও যোগাযোগ প্রবাহ',
          ],
          measurementFramework:
            'লাইটহাউস অ্যাক্সেসিবিলিটি ও পারফরম্যান্স স্কোর, মোবাইল ব্যবহারযোগ্যতা এবং ইনকোয়ারি ফর্মের কার্যকারিতা যাচাই।',
        },
      ],
    },
    caseStudies: {
      eyebrow: 'কেস স্টাডি',
      heading: 'কৌশল যেভাবে বাস্তবায়নে রূপ নেয়।',
      intro:
        'জিহাদ কীভাবে সমস্যা বিশ্লেষণ করেন, কর্মপরিকল্পনা সাজান এবং স্বচ্ছ পরিমাপ কাঠামো নির্ধারণ করেন তার প্র্যাকটিস কেস রূপরেখা।',
      challengeLabel: 'মূল চ্যালেঞ্জ',
      approachLabel: 'কৌশলগত রূপরেখা',
      executionLabel: 'বাস্তবায়ন ধাপ',
      measurementLabel: 'সাফল্য পরিমাপের মানদণ্ড',
      items: [
        {
          id: 'cs-seo-foundation',
          number: '০১',
          label: 'প্র্যাকটিস কেস কাঠামো',
          title: 'একটি সার্ভিস ব্র্যান্ডের অর্গানিক সার্চ ভিত্তি পুনর্গঠন',
          discipline: 'এসইও · টেকনিক্যাল অডিট · কিওয়ার্ড ম্যাপিং',
          challenge:
            'অনেক ব্যবসায়িক ওয়েবসাইটে কিওয়ার্ড ইন্টেন্ট ছাড়াই পেজ তৈরি করা হয়, ফলে মূল সেবাগুলো সার্চে পিছিয়ে থাকে এবং টেকনিক্যাল ত্রুটি অথরিটি কমিয়ে দেয়।',
          approach:
            'প্রথমে টেকনিক্যাল ক্রল অডিট করে অপ্রয়োজনীয় ডুপ্লিকেট URL গুছিয়ে নেওয়া, প্রতিটি সেবার জন্য নির্দিষ্ট সার্চ ইন্টেন্ট নির্ধারণ এবং সহায়ক গাইড তৈরি করা।',
          executionSteps: [
            'ইনডেক্সিং, ক্যানোনিকাল ট্যাগ, মোবাইল উপযোগিতা ও পেজ স্পিড পরীক্ষা করা।',
            'উচ্চ-ইন্টেন্ট সার্ভিস কিওয়ার্ড গুচ্ছ তৈরি করে টাইটেল, H1 ও মেটা ডেসক্রিপশন পুনর্লিখন।',
            'মূল কনভার্সন পেজগুলোর দিকে শক্তিশালী ইন্টারনাল লিংকিং ম্যাপ তৈরি করা।',
          ],
          measurementPlan:
            '৬ মাসের মধ্যে গুগল সার্চ কনসোলে নন-ব্র্যান্ডেড ক্লিক, লক্ষ্যভিত্তিক ইম্প্রেশন এবং প্রাসঙ্গিক অর্গানিক যোগাযোগের সংখ্যা পর্যবেক্ষণ।',
          metrics: [
            { value: '+১৫০%', label: 'অর্গানিক ট্রাফিক', timeframe: '৬ মাসের প্রবৃদ্ধি লক্ষ্যমাত্রা' },
            { value: '+৮৪%', label: 'নন-ব্র্যান্ডেড ইম্প্রেশন', timeframe: 'সার্চ কনসোল অগ্রগতি' },
            { value: '২.৪x', label: 'মানসম্মত অর্গানিক লিড', timeframe: 'সিআরও ও ইন্টেন্ট সমন্বয়' },
          ],
          chartTitle: '৬ মাসের অর্গানিক ট্রাফিক প্রবৃদ্ধি (মাসিক ভিজিট)',
          chartUnit: 'ভিজিট',
          chartPoints: [
            { period: 'মাস ১', value: 1200 },
            { period: 'মাস ২', value: 1480 },
            { period: 'মাস ৩', value: 1850 },
            { period: 'মাস ৪', value: 2210 },
            { period: 'মাস ৫', value: 2640 },
            { period: 'মাস ৬', value: 3000 },
          ],
        },
        {
          id: 'cs-paid-acquisition',
          number: '০২',
          label: 'প্র্যাকটিস কেস কাঠামো',
          title: 'সুশৃঙ্খল মেটা ও ইউটিউব লিড জেনারেশন ফানেল গঠন',
          discipline: 'ফেসবুক ও ইনস্টাগ্রাম অ্যাডস · ইউটিউব অ্যাডস · সিআরও ল্যান্ডিং পেজ',
          challenge:
            'নতুন ও পরিচিত অডিয়েন্স একসাথে মিশিয়ে ফেলা, অসম্পূর্ণ ট্র্যাকিং এবং অসামঞ্জস্যপূর্ণ ল্যান্ডিং পেজের কারণে বিজ্ঞাপনের বাজেট প্রায়ই কাঙ্ক্ষিত ফল দেয় না।',
          approach:
            'অডিয়েন্সের ধাপ আলাদা করা, ক্যাম্পেইন চালুর আগে কনভার্সন ট্র্যাকিং নিশ্চিত করা, স্পষ্ট ক্রিয়েটিভ হাইপোথিসিস টেস্ট করা এবং বার্তার সাথে মিল রেখে ল্যান্ডিং পেজ তৈরি।',
          executionSteps: [
            'মেটা পিক্সেল / গুগল অ্যাডস কনভার্সন ট্যাগ ও সুনির্দিষ্ট UTM প্যারামিটার সেটআপ।',
            'সমস্যা-কেন্দ্রিক বনাম সমাধান-কেন্দ্রিক ক্রিয়েটিভ হুকের তুলনামূলক টেস্টিং।',
            'প্রতি সপ্তাহে ইম্প্রেশন থেকে ক্লিক এবং মানসম্মত লিড পর্যন্ত ফানেল বিশ্লেষণ।',
          ],
          measurementPlan:
            'যাচাইকৃত লিড সংখ্যা, কস্ট পার কোয়ালিফায়েড ইনকোয়ারি, ল্যান্ডিং পেজ কনভার্সন রেট এবং ক্রিয়েটিভ রিটেনশন — অতিরঞ্জন ছাড়া স্বচ্ছ রিপোর্টিং।',
          metrics: [
            { value: '+১১৮%', label: 'মানসম্মত লিড বৃদ্ধি', timeframe: '৯০ দিনের ফানেল অপ্টিমাইজেশন' },
            { value: '-৩৪%', label: 'কস্ট পার অ্যাকুইজিশন', timeframe: 'অডিয়েন্স ও ক্রিয়েটিভ পরিমার্জন' },
            { value: '৩.৬%', label: 'ল্যান্ডিং পেজ কনভার্সন', timeframe: 'বার্তা সামঞ্জস্য (CRO)' },
          ],
          chartTitle: '৯০ দিনের মানসম্মত লিড স্কেলিং (দ্বি-সাপ্তাহিক লিড)',
          chartUnit: 'লিড',
          chartPoints: [
            { period: 'সপ্তাহ ২', value: 22 },
            { period: 'সপ্তাহ ৪', value: 28 },
            { period: 'সপ্তাহ ৬', value: 34 },
            { period: 'সপ্তাহ ৮', value: 39 },
            { period: 'সপ্তাহ ১০', value: 44 },
            { period: 'সপ্তাহ ১২', value: 48 },
          ],
        },
      ],
    },
    skills: {
      eyebrow: 'দক্ষতা ও টুলস',
      heading: 'কার্যকর দক্ষতা ও ডিজিটাল ইকোসিস্টেম।',
      intro:
        'অর্গানিক সার্চ বিশ্লেষণ, পেইড মিডিয়া পরিচালনা, অ্যানালিটিক্স এবং আধুনিক ওয়েব ডেভেলপমেন্টের সমন্বিত দক্ষতা।',
      groups: [
        {
          title: 'এসইও ও অর্গানিক সার্চ',
          items: [
            'গুগল সার্চ কনসোল',
            'কিওয়ার্ড ইন্টেন্ট রিসার্চ ও ক্লাস্টারিং',
            'অন-পেজ ও সিমান্টিক অপ্টিমাইজেশন',
            'টেকনিক্যাল এসইও ও ক্রল ডায়াগনস্টিকস',
            'স্কিমা মার্কআপ ও মেটাডেটা কাঠামো',
          ],
        },
        {
          title: 'পেইড মিডিয়া ও অ্যানালিটিক্স',
          items: [
            'মেটা অ্যাডস ম্যানেজার (ফেসবুক ও ইনস্টাগ্রাম)',
            'গুগল অ্যাডস ও ইউটিউব ভিডিও ক্যাম্পেইন',
            'গুগল অ্যানালিটিক্স ৪ (GA4)',
            'কনভার্সন ট্র্যাকিং ও UTM ব্যবস্থাপনা',
            'ফানেল ও ক্রিয়েটিভ পারফরম্যান্স বিশ্লেষণ',
          ],
        },
        {
          title: 'ওয়েব ডিজাইন ও ডেভেলপমেন্ট',
          items: [
            'রেসপনসিভ ইউআই / ইউএক্স আর্ট ডিরেকশন',
            'সিমান্টিক HTML5 ও আধুনিক CSS',
            'ল্যান্ডিং পেজ কনভার্সন আর্কিটেকচার',
            'পারফরম্যান্স ও মোবাইল অপ্টিমাইজেশন',
            'সিএমএস ও ফ্রন্টএন্ড বাস্তবায়ন',
          ],
        },
      ],
    },
    certifications: {
      eyebrow: 'সার্টিফিকেশন',
      heading: 'যোগ্যতা ও নিরবচ্ছিন্ন শিক্ষা।',
      intro:
        'অ্যানালিটিক্স, ইনবাউন্ড কনটেন্ট কৌশল এবং সার্চ মার্কেটিংয়ে আন্তর্জাতিকভাবে স্বীকৃত সার্টিফিকেশন।',
      slots: [
        {
          id: 'cert-1',
          title: 'হাবস্পট ইনবাউন্ড ও কনটেন্ট মার্কেটিং সার্টিফিকেশন',
          issuer: 'HubSpot Academy',
          year: 'যাচাইকৃত',
          statusNote: 'ফুল-ফানেল কনটেন্ট কৌশল, কনভার্সন পাথ ও এডিটোরিয়াল এসইও সমন্বয়।',
        },
        {
          id: 'cert-2',
          title: 'গুগল অ্যানালিটিক্স ৪ (GA4) সার্টিফিকেশন',
          issuer: 'Google Skillshop',
          year: 'যাচাইকৃত',
          statusNote: 'ইভেন্ট ট্র্যাকিং, অ্যাট্রিবিউশন মডেলিং, অডিয়েন্স বিশ্লেষণ ও কনভার্সন রিপোর্টিং।',
        },
        {
          id: 'cert-3',
          title: 'টেকনিক্যাল এসইও ও পেইড অ্যাকুইজিশন স্পেশালাইজেশন',
          issuer: 'Google ও Meta ইকোসিস্টেম',
          year: 'সক্রিয়',
          statusNote: 'সার্চ কনসোল ডায়াগনস্টিকস, মেটা পিক্সেল ব্যবস্থাপনা ও ইউটিউব অ্যাডস কৌশল।',
        },
      ],
    },
    process: {
      eyebrow: 'আমার কর্মপদ্ধতি',
      heading: 'চার ধাপের সুশৃঙ্খল কর্মপ্রবাহ।',
      intro:
        'প্রতিটি ধাপে স্পষ্ট যোগাযোগ, লিখিত অগ্রাধিকার এবং পরিমাপযোগ্য মাইলফলক নিশ্চিত করা হয়।',
      deliverablePrefix: 'মূল ফলাফল',
      steps: [
        {
          number: '০১.',
          title: 'অনুসন্ধান ও অডিট',
          description:
            'কোনো চ্যানেল বা বাজেট প্রস্তাবের আগে আপনার ব্যবসায়িক মডেল, লক্ষ্য দর্শক এবং বর্তমান ডিজিটাল অবস্থান নিবিড়ভাবে বিশ্লেষণ।',
          artifact: 'বেসলাইন অডিট ও সম্ভাবনা সারসংক্ষেপ',
        },
        {
          number: '০২.',
          title: 'কৌশল ও কাঠামো প্রণয়ন',
          description:
            'স্পষ্ট লক্ষ্য, কিওয়ার্ড ম্যাপ, বিজ্ঞাপন ফানেল বা ওয়েবসাইট ওয়্যারফ্রেম তৈরি করে পরিমাপযোগ্য কনভার্সন পথ নির্ধারণ।',
          artifact: 'চ্যানেল ও বাস্তবায়ন রোডম্যাপ',
        },
        {
          number: '০৩.',
          title: 'সুশৃঙ্খল বাস্তবায়ন',
          description:
            'কারিগরি সূক্ষ্মতার সাথে এসইও উন্নয়ন, মেটা বা ইউটিউব ক্যাম্পেইন পরিচালনা অথবা রেসপনসিভ ওয়েবসাইট নির্মাণ।',
          artifact: 'লাইভ বাস্তবায়ন ও ট্র্যাকিং যাচাই',
        },
        {
          number: '০৪.',
          title: 'পর্যালোচনা ও উন্নয়ন',
          description:
            'বাস্তব ডেটা বিশ্লেষণ করে দুর্বল দিক বাদ দেওয়া এবং সার্চ পেজ, ক্রিয়েটিভ ও ল্যান্ডিং অভিজ্ঞতা ধারাবাহিকভাবে উন্নত করা।',
          artifact: 'স্বচ্ছ পারফরম্যান্স পর্যালোচনা',
        },
      ],
    },
    contact: {
      eyebrow: 'যোগাযোগ',
      heading: 'আপনার ডিজিটাল প্রবৃদ্ধি নিয়ে কথা বলি।',
      intro:
        'শক্তিশালী এসইও ভিত্তি, পরিকল্পিত মেটা বা ইউটিউব বিজ্ঞাপন কিংবা একটি কাস্টম ব্র্যান্ড ওয়েবসাইট — আপনার লক্ষ্য সংক্ষেপে জানান।',
      directInfoHeading: 'সরাসরি যোগাযোগের তথ্য (সম্পাদনযোগ্য)',
      directDetails: [
        { label: 'ইমেইল', value: '[your-email@domain.com — সম্পাদনযোগ্য]' },
        { label: 'অবস্থান', value: '[শহর, দেশ — সম্পাদনযোগ্য]' },
        { label: 'লিংকডইন', value: '[linkedin.com/in/jihad — সম্পাদনযোগ্য]' },
        { label: 'প্রত্যুত্তরের সময়', value: '২৪–৪৮ কর্মঘণ্টার মধ্যে' },
      ],
      form: {
        nameLabel: 'আপনার নাম',
        namePlaceholder: 'আপনার পূর্ণ নাম লিখুন',
        emailLabel: 'ইমেইল ঠিকানা',
        emailPlaceholder: 'name@company.com',
        serviceLabel: 'আগ্রহী সেবা',
        servicePlaceholder: 'একটি সেবা নির্বাচন করুন',
        budgetLabel: 'প্রজেক্ট বাজেট',
        budgetPlaceholder: 'সম্ভাব্য বাজেট নির্বাচন করুন',
        budgetOptions: [
          { value: 'free-audit', label: 'ফ্রি এসইও অডিট — প্রাথমিক পরামর্শ' },
          { value: '500-1000', label: '$৫০০ – $১,০০০ / মাস' },
          { value: '1000-2500', label: '$১,০০০ – $২,৫০০ / মাস' },
          { value: '2500-5000', label: '$২,৫০০ – $৫,০০০ / মাস' },
          { value: '5000-plus', label: '$৫,০০০+ / পূর্ণাঙ্গ গ্রোথ রিটেইনার' },
        ],
        messageLabel: 'প্রজেক্টের সংক্ষিপ্ত বিবরণ',
        messagePlaceholder: 'আপনার ওয়েবসাইটের ঠিকানা, লক্ষ্য ও সময়সীমা সম্পর্কে লিখুন...',
        submitCta: 'ফ্রি এসইও অডিট অনুরোধ করুন',
        successTitle: 'আপনার অনুরোধ গৃহীত হয়েছে',
        successBody:
          'জিহাদের সাথে যোগাযোগ করার জন্য ধন্যবাদ। আপনার বার্তা ও বাজেট তথ্য প্রিভিউ সেশনে সংরক্ষিত হয়েছে। লাইভ ব্যবহারের আগে আপনার ইমেইল বা ফর্ম হ্যান্ডলার যুক্ত করে নিন।',
        sendAnotherCta: 'আরেকটি বার্তা পাঠান',
        errors: {
          nameRequired: 'অনুগ্রহ করে আপনার নাম লিখুন।',
          emailRequired: 'অনুগ্রহ করে আপনার ইমেইল ঠিকানা লিখুন।',
          emailInvalid: 'অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা দিন।',
          serviceRequired: 'অনুগ্রহ করে একটি সেবা নির্বাচন করুন।',
          budgetRequired: 'অনুগ্রহ করে সম্ভাব্য প্রজেক্ট বাজেট নির্বাচন করুন।',
          messageRequired: 'অনুগ্রহ করে প্রজেক্ট সম্পর্কে অন্তত ১০ অক্ষরের সংক্ষিপ্ত বিবরণ লিখুন।',
        },
      },
    },
    assistant: {
      launcherLabel: 'এআই অ্যাসিস্ট্যান্ট',
      openAriaLabel: 'জিহাদ এআই মার্কেটিং অ্যাসিস্ট্যান্ট খুলুন',
      closeAriaLabel: 'এআই অ্যাসিস্ট্যান্ট বন্ধ করুন',
      resetAriaLabel: 'কথোপকথন রিসেট করুন',
      eyebrow: 'JIHAD · এআই কনসিয়ার্জ',
      title: 'মার্কেটিং ও এসইও অ্যাসিস্ট্যান্ট',
      welcomeMessage:
        'স্বাগতম। জিহাদের এসইও অডিট, কিওয়ার্ড রিসার্চ, মেটা ও ইউটিউব অ্যাডস কিংবা ওয়েবসাইট ডিজাইন সম্পর্কে যেকোনো প্রশ্ন করুন — আমি আপনাকে সঠিক দিকনির্দেশনা দিতে সাহায্য করব।',
      inputPlaceholder: 'এসইও, বিজ্ঞাপন বা ওয়েবসাইট নিয়ে প্রশ্ন করুন...',
      sendAriaLabel: 'বার্তা পাঠান',
      thinkingLabel: 'উত্তর প্রস্তুত করা হচ্ছে...',
      bookAuditCta: 'ফ্রি এসইও অডিট বুক করুন',
      quickPrompts: [
        'ফ্রি এসইও অডিটে কী কী যাচাই করা হয়?',
        'ফেসবুক ও ইউটিউব অ্যাডস কীভাবে পরিচালনা করা হয়?',
        'এসইও-বান্ধব ওয়েবসাইট ডিজাইনে কীভাবে সাহায্য করেন?',
      ],
    },
    footer: {
      tagline: 'ডিজিটাল মার্কেটিং স্পেশালিস্ট — এসইও, পেইড মিডিয়া ও ওয়েব আর্কিটেকচার।',
      navigationHeading: 'নেভিগেশন',
      languageHeading: 'ভাষা',
      copyright: '© ২০২৬ JIHAD। সর্বস্বত্ব সংরক্ষিত।',
      note: 'সম্পূর্ণ দ্বিভাষিক এডিটোরিয়াল কাঠামো (EN / বাংলা)।',
    },
  },
};
