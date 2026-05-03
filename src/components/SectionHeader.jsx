/**
 * SectionHeader – Reusable section heading with icon.
 * Used by Experience, ImpactDashboard, StakeholderComments, Skills, etc.
 *
 * Props:
 *   icon  – Lucide icon component
 *   title – Section heading text
 */
const SectionHeader = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-3 mb-10 pb-4 border-b border-border">
    <Icon className="w-6 h-6 text-primary" />
    <h2 className="text-xl md:text-2xl font-bold text-gray-200">{title}</h2>
  </div>
);

export default SectionHeader;
