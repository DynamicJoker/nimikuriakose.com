/**
 * PM Methodology / SOP phases.
 * ────────────────────────────
 * Each entry is a phase in the project lifecycle timeline.
 *
 * Fields:
 *   title       – Phase heading
 *   description – Summary of activities in this phase
 *   icon        – Lucide icon key (mapped to component in MethodologyWiki.jsx)
 */

const methodology = [
  {
    title: 'Phase 1: Discovery & Risk Assessment',
    description: 'Scoping, stakeholder alignment, threat modeling.',
    icon: 'Target',
  },
  {
    title: 'Phase 2: Sprint Planning',
    description: 'Resource allocation, Jira backlog grooming, capacity planning.',
    icon: 'LayoutTemplate',
  },
  {
    title: 'Phase 3: Execution & Unblocking',
    description: 'Daily standups, cross-functional syncing, risk mitigation.',
    icon: 'Zap',
  },
  {
    title: 'Phase 4: Retrospective & Documentation',
    description: 'Post-mortems, Confluence updates, continuous improvement.',
    icon: 'RefreshCw',
  },
];

export default methodology;
