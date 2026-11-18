import type {
  ContactFormErrors,
  ContactFormValues,
  PortfolioCategory,
  PortfolioProject,
  SiteContent,
} from '../types/content';

export function filterPortfolioProjects(
  projects: PortfolioProject[],
  category: PortfolioCategory
): PortfolioProject[] {
  if (category === 'all') {
    return projects;
  }
  return projects.filter((project) => project.category === category);
}

export function groupProjectsByService(
  projects: PortfolioProject[]
): { serviceName: string; serviceId: string; projects: PortfolioProject[] }[] {
  const map = new Map<string, { serviceName: string; serviceId: string; projects: PortfolioProject[] }>();

  for (const project of projects) {
    const existing = map.get(project.serviceId);
    if (existing) {
      existing.projects.push(project);
    } else {
      map.set(project.serviceId, {
        serviceId: project.serviceId,
        serviceName: project.serviceName,
        projects: [project],
      });
    }
  }

  return Array.from(map.values());
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  values: ContactFormValues,
  errorMessages: SiteContent['contact']['form']['errors']
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = errorMessages.nameRequired;
  }

  const trimmedEmail = values.email.trim();
  if (!trimmedEmail) {
    errors.email = errorMessages.emailRequired;
  } else if (!EMAIL_REGEX.test(trimmedEmail)) {
    errors.email = errorMessages.emailInvalid;
  }

  if (!values.service.trim()) {
    errors.service = errorMessages.serviceRequired;
  }

  if (!values.budget.trim()) {
    errors.budget = errorMessages.budgetRequired;
  }

  if (values.message.trim().length < 10) {
    errors.message = errorMessages.messageRequired;
  }

  return errors;
}

export function hasContactErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}
