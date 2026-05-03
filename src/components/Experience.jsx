import { FileCode } from 'lucide-react';
import SectionHeader from './SectionHeader';
import experience from '../data/experience';

/**
 * Experience section — renders the career timeline as a "Release Notes / Changelog".
 * Data is sourced from src/data/experience.js for easy updates.
 */
const Experience = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto" id="experience">
      <SectionHeader icon={FileCode} title="Release Notes / Changelog" />
      
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {experience.map((release, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/5 bg-panel text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-panel p-5 rounded-lg border border-border shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-gray-500 bg-console px-2 py-1 rounded">{release.version}</span>
                <div className="flex gap-1 flex-wrap">
                  {release.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">{tag}</span>
                  ))}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-200">{release.role}</h3>
              <h4 className="text-sm font-medium text-gray-400 mb-4">@ {release.company}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                {release.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
