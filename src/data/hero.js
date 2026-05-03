/**
 * Hero section data.
 * ──────────────────
 * Contains the "Definition of Done" checklist and the typing animation sequence.
 */

export const dodItems = [
  { step: 1, text: 'End-to-end management of complex cloud security initiatives.' },
  { step: 2, text: 'Advanced proficiency in Agile, Jira, and Salesforce ecosystems.' },
  { step: 3, text: 'Seamless coordination of compliance audits and risk remediation.' },
  { step: 4, text: 'Aligning C-suite strategy with engineering execution.' },
];

/**
 * Returns the sequence for the TypeAnimation component.
 * @param {Function} setChecklist - Setter to update the checklist progress.
 */
export const getTypingSequence = (setChecklist) => [
  500,
  'Tech-forward Project Manager specializing in Cloud Infrastructure & Security.\n',
  500,
  'Tech-forward Project Manager specializing in Cloud Infrastructure & Security.\nTranslating high-level business requirements into actionable engineering sprints.\n',
  500,
  'Tech-forward Project Manager specializing in Cloud Infrastructure & Security.\nTranslating high-level business requirements into actionable engineering sprints.\nFocus areas: Risk mitigation, workflow automation, and scaling Agile methodologies across enterprise teams.',
  500,
  () => setChecklist(1),
  300,
  () => setChecklist(2),
  300,
  () => setChecklist(3),
  300,
  () => setChecklist(4),
];

export const heroMetadata = {
  ticketId: 'SEC-PM-001',
  priority: 'HIGHEST',
};
