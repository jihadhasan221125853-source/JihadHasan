import test from 'node:test';
import assert from 'node:assert/strict';
import { TRANSLATIONS } from '../data/translations';
import {
  filterPortfolioProjects,
  groupProjectsByService,
  hasContactErrors,
  validateContactForm,
} from './portfolio';

test('filterPortfolioProjects returns all projects for "all" and narrows for specific categories', () => {
  const projects = TRANSLATIONS.en.portfolio.projects;
  assert.equal(filterPortfolioProjects(projects, 'all').length, projects.length);

  const seoOnly = filterPortfolioProjects(projects, 'seo');
  assert.ok(seoOnly.length >= 2);
  assert.ok(seoOnly.every((item) => item.category === 'seo'));

  const paidOnly = filterPortfolioProjects(projects, 'paid-ads');
  assert.ok(paidOnly.length >= 2);
  assert.ok(paidOnly.every((item) => item.category === 'paid-ads'));

  const webOnly = filterPortfolioProjects(projects, 'web-design');
  assert.ok(webOnly.length >= 1);
  assert.ok(webOnly.every((item) => item.category === 'web-design'));
});

test('groupProjectsByService groups projects cleanly by serviceId', () => {
  const projects = TRANSLATIONS.en.portfolio.projects;
  const groups = groupProjectsByService(projects);
  assert.ok(groups.length >= 4);
  const totalCount = groups.reduce((sum, g) => sum + g.projects.length, 0);
  assert.equal(totalCount, projects.length);
});

test('validateContactForm catches empty fields, invalid emails, and passes valid inquiries', () => {
  const messages = TRANSLATIONS.en.contact.form.errors;

  const emptyErrors = validateContactForm(
    { name: '', email: '', service: '', budget: '', message: '' },
    messages
  );
  assert.equal(hasContactErrors(emptyErrors), true);
  assert.equal(emptyErrors.name, messages.nameRequired);
  assert.equal(emptyErrors.email, messages.emailRequired);
  assert.equal(emptyErrors.service, messages.serviceRequired);
  assert.equal(emptyErrors.budget, messages.budgetRequired);
  assert.equal(emptyErrors.message, messages.messageRequired);

  const badEmailErrors = validateContactForm(
    {
      name: 'Amina',
      email: 'not-an-email',
      service: 'seo',
      budget: '1000-2500',
      message: 'We need an SEO audit.',
    },
    messages
  );
  assert.equal(badEmailErrors.email, messages.emailInvalid);
  assert.equal(badEmailErrors.name, undefined);

  const validErrors = validateContactForm(
    {
      name: 'Amina Rahman',
      email: 'amina@example.com',
      service: 'seo',
      budget: '1000-2500',
      message: 'Looking for a technical SEO audit for our website.',
    },
    messages
  );
  assert.equal(hasContactErrors(validErrors), false);
});

test('bilingual translations maintain complete structural parity between EN and BN', () => {
  const en = TRANSLATIONS.en;
  const bn = TRANSLATIONS.bn;

  assert.equal(en.services.items.length, 7);
  assert.equal(bn.services.items.length, 7);
  assert.equal(en.portfolio.projects.length, bn.portfolio.projects.length);
  assert.equal(en.caseStudies.items.length, bn.caseStudies.items.length);
  assert.ok(en.caseStudies.items.every((cs) => cs.metrics.length >= 2 && cs.chartPoints.length >= 5));
  assert.equal(en.contact.form.budgetOptions.length, bn.contact.form.budgetOptions.length);
  assert.equal(en.process.steps.length, bn.process.steps.length);
  assert.equal(en.nav.length, bn.nav.length);
  assert.notEqual(en.hero.headline, bn.hero.headline);
});
