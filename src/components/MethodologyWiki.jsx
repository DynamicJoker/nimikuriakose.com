import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight, Target, LayoutTemplate, Zap, RefreshCw } from 'lucide-react';

const phases = [
  {
    title: 'Phase 1: Discovery & Risk Assessment',
    description: 'Scoping, stakeholder alignment, threat modeling.',
    icon: Target
  },
  {
    title: 'Phase 2: Sprint Planning',
    description: 'Resource allocation, Jira backlog grooming, capacity planning.',
    icon: LayoutTemplate
  },
  {
    title: 'Phase 3: Execution & Unblocking',
    description: 'Daily standups, cross-functional syncing, risk mitigation.',
    icon: Zap
  },
  {
    title: 'Phase 4: Retrospective & Documentation',
    description: 'Post-mortems, Confluence updates, continuous improvement.',
    icon: RefreshCw
  }
];

const MethodologyWiki = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto border-t border-border mt-10">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono text-gray-500 mb-6 flex-wrap">
        <FileText className="w-4 h-4 shrink-0" />
        <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
        <ChevronRight className="w-3 h-3 shrink-0" />
        <span className="hover:text-primary transition-colors cursor-pointer">Documentation</span>
        <ChevronRight className="w-3 h-3 shrink-0" />
        <span className="text-gray-300 bg-border px-2 py-0.5 rounded">PM_Methodology</span>
      </div>

      <div className="bg-panel border border-border rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-8 border-b border-border pb-4">Standard Operating Procedure</h1>
        
        <div className="relative border-l-2 border-border ml-4 space-y-10 pl-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[49px] md:-left-[50px] top-0 w-8 h-8 bg-console border-2 border-border rounded-full flex items-center justify-center text-gray-400 z-10 shadow-sm">
                  <Icon className="w-4 h-4 text-primary" />
                </div>
                
                <h3 className="text-base md:text-lg font-bold text-gray-200 mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-400 font-mono leading-relaxed bg-console border border-border p-3 md:p-4 rounded-md">
                  {phase.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MethodologyWiki;
