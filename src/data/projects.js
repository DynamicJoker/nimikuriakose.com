/**
 * Sprint Board project data.
 * ──────────────────────────
 * Separated into three swim-lane arrays so the component
 * can render each column independently.
 *
 * Fields (completed):
 *   id          – Jira-style ticket ID
 *   title       – Project headline
 *   type        – Epic | Story | Task
 *   points      – Story-point estimate
 *   description – Detailed scope (revealed via "Decrypt")
 */

export const completedProjects = [
  {
    id: 'SEC-101',
    title: 'Cloud Security Posture Management',
    type: 'Epic',
    points: 8,
    description:
      'Deployed automated compliance checks across AWS, GCP, and Azure using Terraform and customized security rules. Remediation workflows reduced vulnerabilities by 80% within 3 months.',
  },
  {
    id: 'SEC-102',
    title: 'Enterprise Identity Migration',
    type: 'Task',
    points: 5,
    description:
      'Managing the migration of 10,000+ internal user accounts from legacy Active Directory to Okta. Integrating SSO for 50+ critical internal applications.',
  },
  {
    id: 'SEC-103',
    title: 'Kubernetes Cluster Hardening',
    type: 'Story',
    points: 3,
    description:
      'Implemented network policies, RBAC tuning, and container vulnerability scanning in CI/CD pipeline. Achieved CIS benchmark compliance score of 98%.',
  },
];

export const backlogProjects = [
  { id: 'SEC-104', title: 'Implement Zero Trust Architecture v2' },
  { id: 'SEC-105', title: 'Vendor Risk Assessment Overhaul' },
];

export const inProgressProjects = [
  {
    id: 'SEC-106',
    title: 'Automate ISO 27001 Evidence Collection',
    progress: 60,
  },
];
