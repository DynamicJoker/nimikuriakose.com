/**
 * Experience / Release Notes data.
 * ─────────────────────────────────
 * Each entry represents a role in the career timeline.
 * Add new roles at the TOP of the array (most recent first).
 *
 * Fields:
 *   version  – Displayed as the "release version" tag (format: vYYYY.MM)
 *   role     – Job title
 *   company  – Employer name
 *   tags     – Array of category badges shown on the card
 *   details  – Description paragraph
 */

const experience = [
  {
    version: 'v2025.01 - Present',
    role: 'Security Project Manager',
    company: 'Employ',
    tags: ['Security Patch', 'Metric', 'Infrastructure'],
    details:
      'Planned and Executed roll out of Rapid7 and Cobalt Integration into core products for real-time monitoring and penetration testing on AWS, GCP and Azure assets and user end points. Lead the charge on SOC 2 Type II, ISO 27001, GRC and GDPR/CCPA audits. Spearheaded a cross-functional initiative between DevOps and Engineering to prioritize and remediate critical security vulnerabilities. Developed and managed a robust vendor risk assessment framework.',
  },
  {
    version: 'v2020.08 - 2025.01',
    role: 'Trust and Safety Specialist',
    company: 'Amazon Web Services',
    tags: ['Feature Shipped', 'Process Update'],
    details:
      'Developed and maintained escalation processes and SOPs to exceed SLAs. Managed escalated Tier 3 incidents using internal ticketing systems. Reviewed abuse reports, conducted root cause analysis and suggest architectural changes. Interim manager for 14 weeks and project manager for 5+ projects.',
  },
  {
    version: 'v2019.01 - 2020.08',
    role: 'Virtual Customer Service Associate',
    company: 'Amazon',
    tags: ['Metric', 'Support'],
    details:
      'Investigated and resolved customer issues while meeting target KPIs and 99% positive customer experience score.',
  },
  {
    version: 'v2018.01 - 2018.12',
    role: 'Senior Technical Support Associate',
    company: 'Tech Mahindra Limited',
    tags: ['Infrastructure', 'Optimization'],
    details:
      'Provided Technical Support and Network Engineering for a US-based Fortune 50 client. Identified and improved 3 escalation processes by applying advanced analytical and troubleshooting strategies.',
  },
  {
    version: 'v2017.01 - 2018.01',
    role: 'Trainee Information Security Associate',
    company: 'SecuArk Private Limited',
    tags: ['Security Patch', 'Feature Shipped'],
    details:
      'Conducted Vulnerability Assessment and Penetration Testing (Application and Network). Designed, developed, and supported implementation of 5+ project-specific security solutions.',
  },
  {
    version: 'v2016.01 - 2017.01',
    role: 'Support Consultant',
    company: 'Open Destinations Infotech. Pvt. Ltd',
    tags: ['Support', 'Metric'],
    details:
      'Handled client escalations related to new releases and created incident impact documents. Managed a portfolio of key accounts, including onboarding, product training, and quarterly business reviews.',
  },
];

export default experience;
