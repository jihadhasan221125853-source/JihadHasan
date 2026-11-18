export type AssistantRole = 'user' | 'model';

export interface AssistantMessage {
  id: string;
  role: AssistantRole;
  text: string;
}

export interface AssistantPayloadMessage {
  role: AssistantRole;
  text: string;
}

export const MAX_ASSISTANT_MESSAGE_LENGTH = 1000;
export const MAX_ASSISTANT_HISTORY = 12;

export function sanitizeAssistantInput(input: string): string {
  return input
    .replace(/\r\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, MAX_ASSISTANT_MESSAGE_LENGTH);
}

export function validateAssistantMessages(
  messages: unknown
): { valid: true; messages: AssistantPayloadMessage[] } | { valid: false; error: string } {
  if (!Array.isArray(messages) || messages.length === 0) {
    return { valid: false, error: 'Please enter a message to start the conversation.' };
  }

  const normalized: AssistantPayloadMessage[] = [];

  for (const item of messages) {
    if (!item || typeof item !== 'object') {
      return { valid: false, error: 'Invalid message format.' };
    }

    const role = (item as { role?: unknown }).role;
    const rawText = (item as { text?: unknown }).text;

    if (role !== 'user' && role !== 'model') {
      return { valid: false, error: 'Invalid message role.' };
    }

    if (typeof rawText !== 'string') {
      return { valid: false, error: 'Message text must be a string.' };
    }

    const text = sanitizeAssistantInput(rawText);
    if (!text) {
      return { valid: false, error: 'Message cannot be empty.' };
    }

    normalized.push({ role, text });
  }

  const recent = normalized.slice(-MAX_ASSISTANT_HISTORY);
  if (recent[recent.length - 1]?.role !== 'user') {
    return { valid: false, error: 'The latest message must be from the user.' };
  }

  return { valid: true, messages: recent };
}

export function buildSystemInstruction(language: 'en' | 'bn'): string {
  const languageDirective =
    language === 'bn'
      ? 'The visitor currently has the website set to Bengali (বাংলা). Respond in natural, fluent, professional Bengali unless the visitor writes primarily in English—in which case mirror their language.'
      : 'The visitor currently has the website set to English. Respond in clear, concise, professional English unless the visitor writes in Bengali (বাংলা)—in which case respond in natural, fluent Bengali.';

  return [
    'You are the dedicated AI Marketing & SEO Assistant for JIHAD, a Digital Marketing & SEO Specialist.',
    languageDirective,
    'Core Services offered by JIHAD:',
    '1. Search Engine Optimization (SEO) — organic growth strategy, site audits, and authority building.',
    '2. Keyword Research — high-intent keyword mapping, competitor gap analysis, and topic clusters.',
    '3. On-Page SEO — title/meta optimization, semantic headings, internal linking, and content structure.',
    '4. Technical SEO — crawlability, Core Web Vitals, schema markup, XML sitemaps, and indexation fixes.',
    '5. Facebook and Instagram Ads (Meta Ads) — full-funnel paid social campaigns, audience testing, and ROAS optimization.',
    '6. YouTube Ads — video ad strategy, targeting, and conversion tracking.',
    '7. Website Design and Development — fast, conversion-focused, SEO-ready websites and landing pages.',
    'Credentials & Process:',
    '- Certified in HubSpot Digital Marketing and Google Analytics (GA4).',
    '- 4-stage workflow: 01 Discovery & Audit -> 02 Strategy & Roadmap -> 03 Execution & Optimization -> 04 Reporting & Scaling.',
    '- Visitors can book a Free SEO Audit via the Contact & Booking section on the website.',
    'Strict Rules:',
    '- Be helpful, concise (typically 2-4 short sentences or a brief bullet list), and consultative.',
    '- Never invent client names, testimonials, pricing guarantees, or unverified campaign numbers.',
    '- If a visitor wants a custom quote, audit, or project timeline, guide them to book a Free SEO Audit using the Contact section.',
    '- Never mention internal model names, APIs, or underlying AI providers.',
  ].join('\n');
}
