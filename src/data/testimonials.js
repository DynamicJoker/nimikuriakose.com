/**
 * Stakeholder Reviews / Testimonials.
 * ────────────────────────────────────
 * Each entry renders as a comment thread in the reviews section.
 *
 * Fields:
 *   author   – Display handle (underscored for Jira-style @mention)
 *   initials – Two-letter avatar
 *   time     – Relative timestamp
 *   text     – Review body
 *   status   – Approval badge label (Approved, LGTM, etc.)
 */

const testimonials = [
  {
    author: 'VP_of_Engineering',
    initials: 'VP',
    time: '2 weeks ago',
    text: "Nimi's ability to translate complex SOC2 compliance requirements into digestible engineering sprints saved our Q3 roadmap.",
    status: 'Approved',
  },
  {
    author: 'Lead_Security_Architect',
    initials: 'LS',
    time: '1 month ago',
    text: 'Finally, a PM who actually understands cloud architecture. Unblocked our GCP migration in record time.',
    status: 'LGTM',
  },
];

export default testimonials;
