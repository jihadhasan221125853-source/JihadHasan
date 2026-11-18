import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import type {
  ContactFormErrors,
  ContactFormValues,
  Language,
  SiteContent,
} from '../types/content';
import { hasContactErrors, validateContactForm } from '../utils/portfolio';

interface ContactFooterSectionProps {
  content: SiteContent;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  preselectedServiceId: string;
}

export function ContactFooterSection({
  content,
  language,
  onLanguageChange,
  preselectedServiceId,
}: ContactFooterSectionProps) {
  const { contact, services, footer } = content;
  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    service: preselectedServiceId || '',
    budget: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setValues((prev) => ({ ...prev, service: preselectedServiceId }));
      setSubmitted(false);
    }
  }, [preselectedServiceId]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContactForm(values, contact.form.errors);
    setErrors(nextErrors);
    if (!hasContactErrors(nextErrors)) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setValues({ name: '', email: '', service: '', budget: '', message: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <>
      {/* 11. Contact Section */}
      <section
        id="contact"
        className="border-b border-[#C6A15B]/15 bg-[#211A15] py-20 lg:py-28"
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left: Editorial Intro & Direct Editable Contact Info */}
            <div className="lg:col-span-5">
              <p className="text-sm font-medium tracking-wide text-[#C6A15B]">
                {contact.eyebrow}
              </p>
              <h2 className="font-display text-balance mt-3 text-3xl leading-[1.2] font-semibold text-[#F3EBDD] sm:text-4xl">
                {contact.heading}
              </h2>
              <p className="mt-5 text-base leading-[1.7] text-[#CFC3B0]">{contact.intro}</p>

              <div className="mt-10 border-t border-[#C6A15B]/20 pt-8">
                <h3 className="text-xs font-medium tracking-wide text-[#C6A15B]">
                  {contact.directInfoHeading}
                </h3>
                <dl className="mt-5 space-y-4">
                  {contact.directDetails.map((item) => (
                    <div key={item.label} className="space-y-1">
                      <dt className="text-xs text-[#CFC3B0]">{item.label}</dt>
                      <dd className="text-sm font-medium text-[#F3EBDD]">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Right: Validated Lead Capture Form */}
            <div className="lg:col-span-7">
              <div className="border border-[#C6A15B]/25 bg-[#15100D] p-7 sm:p-10">
                {submitted ? (
                  <div data-testid="contact-success" className="py-8">
                    <div className="flex items-center gap-3 text-[#C6A15B]">
                      <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                      <h3 className="font-display text-2xl font-semibold text-[#F3EBDD]">
                        {contact.form.successTitle}
                      </h3>
                    </div>
                    <p className="mt-4 max-w-lg text-sm leading-[1.7] text-[#CFC3B0]">
                      {contact.form.successBody}
                    </p>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-7 inline-flex min-h-[44px] items-center justify-center border border-[#C6A15B]/55 px-6 py-2.5 text-sm font-medium text-[#F3EBDD] transition-colors hover:border-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#080808]"
                    >
                      {contact.form.sendAnotherCta}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs font-medium text-[#F3EBDD]"
                        >
                          {contact.form.nameLabel}
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={(e) => {
                            setValues((prev) => ({ ...prev, name: e.target.value }));
                            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                          }}
                          placeholder={contact.form.namePlaceholder}
                          aria-invalid={Boolean(errors.name)}
                          className="mt-2 block min-h-[44px] w-full border border-[#C6A15B]/30 bg-[#080808] px-4 py-2.5 text-sm text-[#F3EBDD] placeholder:text-[#CFC3B0]/50 focus:border-[#C6A15B] focus:outline-none"
                        />
                        {errors.name && (
                          <p role="alert" className="mt-1.5 text-xs text-[#E59866]">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-medium text-[#F3EBDD]"
                        >
                          {contact.form.emailLabel}
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={(e) => {
                            setValues((prev) => ({ ...prev, email: e.target.value }));
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                          }}
                          placeholder={contact.form.emailPlaceholder}
                          aria-invalid={Boolean(errors.email)}
                          className="mt-2 block min-h-[44px] w-full border border-[#C6A15B]/30 bg-[#080808] px-4 py-2.5 text-sm text-[#F3EBDD] placeholder:text-[#CFC3B0]/50 focus:border-[#C6A15B] focus:outline-none"
                        />
                        {errors.email && (
                          <p role="alert" className="mt-1.5 text-xs text-[#E59866]">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-service"
                          className="block text-xs font-medium text-[#F3EBDD]"
                        >
                          {contact.form.serviceLabel}
                        </label>
                        <select
                          id="contact-service"
                          name="service"
                          value={values.service}
                          onChange={(e) => {
                            setValues((prev) => ({ ...prev, service: e.target.value }));
                            if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }));
                          }}
                          aria-invalid={Boolean(errors.service)}
                          className="mt-2 block min-h-[44px] w-full border border-[#C6A15B]/30 bg-[#080808] px-4 py-2.5 text-sm text-[#F3EBDD] focus:border-[#C6A15B] focus:outline-none"
                        >
                          <option value="">{contact.form.servicePlaceholder}</option>
                          {services.items.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.title}
                            </option>
                          ))}
                        </select>
                        {errors.service && (
                          <p role="alert" className="mt-1.5 text-xs text-[#E59866]">
                            {errors.service}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-budget"
                          className="block text-xs font-medium text-[#F3EBDD]"
                        >
                          {contact.form.budgetLabel}
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={values.budget}
                          onChange={(e) => {
                            setValues((prev) => ({ ...prev, budget: e.target.value }));
                            if (errors.budget) setErrors((prev) => ({ ...prev, budget: undefined }));
                          }}
                          aria-invalid={Boolean(errors.budget)}
                          className="mt-2 block min-h-[44px] w-full border border-[#C6A15B]/30 bg-[#080808] px-4 py-2.5 text-sm text-[#F3EBDD] focus:border-[#C6A15B] focus:outline-none"
                        >
                          <option value="">{contact.form.budgetPlaceholder}</option>
                          {contact.form.budgetOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        {errors.budget && (
                          <p role="alert" className="mt-1.5 text-xs text-[#E59866]">
                            {errors.budget}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-medium text-[#F3EBDD]"
                      >
                        {contact.form.messageLabel}
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={4}
                        value={values.message}
                        onChange={(e) => {
                          setValues((prev) => ({ ...prev, message: e.target.value }));
                          if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                        }}
                        placeholder={contact.form.messagePlaceholder}
                        aria-invalid={Boolean(errors.message)}
                        className="mt-2 block w-full border border-[#C6A15B]/30 bg-[#080808] px-4 py-3 text-sm text-[#F3EBDD] placeholder:text-[#CFC3B0]/50 focus:border-[#C6A15B] focus:outline-none"
                      />
                      {errors.message && (
                        <p role="alert" className="mt-1.5 text-xs text-[#E59866]">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="inline-flex min-h-[48px] items-center justify-center bg-[#C6A15B] px-8 py-3 text-sm font-medium text-[#080808] transition-colors duration-150 hover:bg-[#D9B774] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A15B]"
                    >
                      {contact.form.submitCta}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Footer */}
      <footer className="bg-[#080808] py-14">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 border-b border-[#C6A15B]/15 pb-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <a
                href="#top"
                className="font-display text-2xl font-semibold tracking-[0.14em] text-[#F3EBDD]"
              >
                {content.brandName}
              </a>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#CFC3B0]">
                {footer.tagline}
              </p>
            </div>

            <div className="md:col-span-4">
              <p className="text-xs font-medium text-[#C6A15B]">{footer.navigationHeading}</p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-[#CFC3B0]">
                {content.nav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="transition-colors hover:text-[#F3EBDD]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-3">
              <p className="text-xs font-medium text-[#C6A15B]">{footer.languageHeading}</p>
              <div className="mt-4 inline-flex border border-[#C6A15B]/30 bg-[#15100D] p-0.5">
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`min-h-[36px] px-3 py-1 text-xs font-medium transition-colors ${
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
                  className={`min-h-[36px] px-3 py-1 text-xs font-medium transition-colors ${
                    language === 'bn'
                      ? 'bg-[#C6A15B] text-[#080808]'
                      : 'text-[#CFC3B0] hover:text-[#F3EBDD]'
                  }`}
                >
                  বাংলা
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 text-xs text-[#CFC3B0] sm:flex-row sm:items-center sm:justify-between">
            <p>{footer.copyright}</p>
            <p>{footer.note}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
