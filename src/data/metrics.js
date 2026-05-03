/**
 * Impact Dashboard metrics.
 * ─────────────────────────
 * Each entry renders as a KPI card in the dashboard grid.
 *
 * Fields:
 *   title   – Metric label
 *   value   – Large display number/percentage
 *   subtext – Supporting context line
 *   icon    – Lucide icon key (mapped to component in ImpactDashboard.jsx)
 *   color   – Tailwind text-color class for the icon
 */

const metrics = [
  {
    title: 'Budget Managed',
    value: '$1M+',
    subtext: 'Delivered under budget',
    icon: 'DollarSign',
    color: 'text-success',
  },
  {
    title: 'Sprint Velocity',
    value: '+24% YoY',
    subtext: 'Optimization across 5 enterprise teams',
    icon: 'TrendingUp',
    color: 'text-primary',
  },
  {
    title: 'Compliance & Risk',
    value: '100%',
    subtext: 'SOC2/ISO27001 audit pass rate',
    icon: 'ShieldCheck',
    color: 'text-warning',
  },
  {
    title: 'Uptime/Deployment',
    value: '99.99%',
    subtext: 'Zero-downtime migrations/deployments',
    icon: 'Activity',
    color: 'text-primary-light',
  },
];

export default metrics;
