/**
 * Hero section data.
 * ──────────────────
 * Contains the "Definition of Done" checklist and hero card hydration timing.
 */

export const dodItems = [
  { step: 1, text: 'End-to-end management of complex cloud security initiatives.' },
  { step: 2, text: 'Advanced proficiency in Agile, Jira, and Salesforce ecosystems.' },
  { step: 3, text: 'Seamless coordination of compliance audits and risk remediation.' },
  { step: 4, text: 'Aligning C-suite strategy with engineering execution.' },
];

export const heroSummaryLines = [
  'Tech-forward Project Manager specializing in Cloud Infrastructure & Security.',
  'Translating high-level business requirements into actionable engineering sprints.',
  'Focus areas: Risk mitigation, workflow automation, and scaling Agile methodologies across enterprise teams.',
];

export const heroSummaryText = heroSummaryLines.join('\n');

export const heroAnimationTiming = {
  initial: {
    syncDuration: 950,
    checklistStartDelay: 180,
    checklistStepInterval: 120,
    actionsRevealDelay: 120,
  },
  restore: {
    syncDuration: 220,
    checklistStartDelay: 80,
    checklistStepInterval: 70,
    actionsRevealDelay: 40,
  },
};

export const heroMetadata = {
  ticketId: 'SEC-PM-001',
  priority: 'HIGHEST',
};
