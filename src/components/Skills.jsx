import { Activity, CircleCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';
import skills from '../data/skills';

/**
 * Skills section – Compliance matrix grid with hover reveal.
 * Data sourced from src/data/skills.js.
 */
const Skills = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-border mt-10">
      <SectionHeader icon={Activity} title="System Health / Compliance Matrix" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div key={index} className="bg-panel border border-border rounded-lg p-4 relative group overflow-hidden min-w-0 focus-within:border-primary/50">
            <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest break-words">{skill.category}</span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-success/10 text-success rounded text-[10px] font-bold font-mono border border-success/20">
                <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></div>
                {skill.status}
              </div>
            </div>
            <h3 className="font-semibold text-gray-200 leading-tight pr-4 break-words">{skill.name}</h3>
            
            {/* Hover overlay */}
            <div className="mt-4 rounded-md border border-primary/20 bg-primary/10 p-3 sm:absolute sm:inset-0 sm:mt-0 sm:flex sm:translate-y-full sm:items-center sm:justify-center sm:border-0 sm:bg-primary/95 sm:p-4 sm:transition-transform sm:duration-300 sm:group-hover:translate-y-0 sm:group-focus-within:translate-y-0">
              <div className="text-center">
                <CircleCheck className="w-5 h-5 text-primary mx-auto mb-2 sm:h-6 sm:w-6 sm:text-console" />
                <p className="text-xs font-bold text-primary-light sm:text-console">Authorized for Enterprise Deployment.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
