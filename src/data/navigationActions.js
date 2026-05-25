import siteConfig from './siteConfig';

const sectionMeta = {
  top: {
    issueKey: 'NK-001',
    type: 'Epic',
    status: 'Current',
    description: 'Executive profile and security PM summary',
  },
  experience: {
    issueKey: 'NK-102',
    type: 'Release',
    status: 'Shipped',
    description: 'Career timeline and delivery history',
  },
  projects: {
    issueKey: 'NK-203',
    type: 'Board',
    status: 'Active',
    description: 'Security, compliance, and cloud project work',
  },
  impact: {
    issueKey: 'NK-304',
    type: 'Metric',
    status: 'Verified',
    description: 'Operational outcomes and portfolio KPIs',
  },
  'methodology-wiki': {
    issueKey: 'NK-405',
    type: 'Wiki',
    status: 'Maintained',
    description: 'Project management operating model',
  },
  testimonials: {
    issueKey: 'NK-506',
    type: 'Comment',
    status: 'Reviewed',
    description: 'Stakeholder feedback and endorsements',
  },
  skills: {
    issueKey: 'NK-607',
    type: 'Matrix',
    status: 'Indexed',
    description: 'Security, delivery, and platform capabilities',
  },
  contact: {
    issueKey: 'NK-708',
    type: 'Request',
    status: 'Open',
    description: 'Start a conversation or create an inquiry',
  },
};

export const navigationItems = siteConfig.navLinks.map((link) => ({
  ...link,
  id: link.targetId,
  ...sectionMeta[link.targetId],
}));

export const utilityActions = [
  {
    id: 'export-dossier',
    issueKey: 'ACT-001',
    label: 'Export Dossier (PDF)',
    type: 'Action',
    status: 'Queued',
    description: 'Prepare a shareable portfolio brief',
    action: 'exportDossier',
  },
  {
    id: 'create-contact-issue',
    issueKey: 'ACT-002',
    label: 'Create Issue (Contact)',
    type: 'Action',
    status: 'Open',
    description: 'Jump to the contact form',
    targetId: 'contact',
    action: 'navigate',
  },
];

const getScrollBehavior = (behavior) => {
  if (behavior) return behavior;

  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'smooth';
  }

  return window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
};

export const scrollToTarget = (targetId, options = {}) => {
  const behavior = getScrollBehavior(options.behavior);

  if (targetId === 'top') {
    window.scrollTo({ top: 0, behavior });
    return;
  }

  document.getElementById(targetId)?.scrollIntoView({ behavior, block: 'start' });
};
