/**
 * Skills / Compliance Matrix data.
 * ─────────────────────────────────
 * Each entry renders as a card in the System Health grid.
 *
 * Fields:
 *   name     – Skill or technology name
 *   status   – Badge label (EXPERT, CERTIFIED, etc.)
 *   category – Small category label (Cloud, Compliance, etc.)
 */

const skills = [
  { name: 'AWS Infrastructure', status: 'EXPERT', category: 'Cloud' },
  { name: 'ISO 27001 & SOC 2', status: 'CERTIFIED', category: 'Compliance' },
  { name: 'NIST CSF 2.0', status: 'EXPERT', category: 'Compliance' },
  { name: 'Rapid7 / Sentinel One', status: 'INTEGRATED', category: 'Security' },
  { name: 'Cobalt Penetration Testing', status: 'EXPERT', category: 'Security' },
  { name: 'Jira & Agile Methodologies', status: 'SCRUM MASTER', category: 'Project Mgmt' },
  { name: 'Vendor Risk Assessment', status: 'EXPERT', category: 'Risk Mgmt' },
  { name: 'Incident Response (Tier 3)', status: 'EXPERT', category: 'Operations' },
];

export default skills;
