import { useState } from 'react';
import { motion } from 'motion/react';
import { Layout, Lock, Unlock, CircleCheck, CircleDashed, MoreHorizontal, MessageSquare } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { completedProjects, backlogProjects, inProgressProjects } from '../data/projects';

/**
 * ProjectCard – Renders a single project "ticket" with a decrypt reveal.
 * Used inside the "Done" column of the sprint board.
 */
const ProjectCard = ({ project }) => {
  const [isDecrypted, setIsDecrypted] = useState(false);

  return (
    <div className="bg-panel border border-border rounded-lg p-4 flex flex-col hover:border-primary/50 transition-colors shadow-sm relative overflow-hidden group cursor-pointer">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs font-mono text-gray-500 hover:text-primary transition-colors">{project.id}</span>
        <button className="text-gray-500 hover:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>
      
      <h3 className="font-medium text-gray-200 mb-2 leading-tight">{project.title}</h3>

      <div className="relative flex-1 mt-2 mb-4">
        <motion.div 
          animate={{ filter: isDecrypted ? 'blur(0px)' : 'blur(4px)', opacity: isDecrypted ? 1 : 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-xs text-gray-400 leading-relaxed select-none pointer-events-none"
        >
          {project.description}
        </motion.div>
        
        {!isDecrypted && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <button 
              onClick={(e) => { e.stopPropagation(); setIsDecrypted(true); }}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-console border border-border hover:bg-border text-gray-300 rounded shadow-sm text-xs font-mono font-medium transition-all"
            >
              <Lock className="w-3 h-3 text-primary" />
              Decrypt
            </button>
          </div>
        )}
      </div>
      
      <div className="mt-auto pt-3 border-t border-border flex justify-between items-center text-xs text-gray-500 font-mono">
        <div className="flex items-center gap-2">
          <span className="px-1.5 py-0.5 bg-console border border-border rounded text-[10px] uppercase tracking-wider">{project.type}</span>
          {isDecrypted && <Unlock className="w-3 h-3 text-success" />}
        </div>
        <div className="flex items-center gap-3">
          <MessageSquare className="w-3 h-3" />
          <div className="w-5 h-5 rounded-full bg-border flex items-center justify-center text-[10px] text-gray-300">{project.points}</div>
        </div>
      </div>
    </div>
  );
};

/**
 * Projects section — Jira-style sprint board with Backlog, In Progress, and Done columns.
 * Data is sourced from src/data/projects.js for easy updates.
 */
const Projects = () => {
  return (
    <section className="py-20 px-6 max-w-[1400px] mx-auto">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Layout className="w-6 h-6 text-primary" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-200">Active Sprint Board</h2>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center -space-x-2">
            <div className="w-8 h-8 rounded-full border-2 border-console bg-primary/20 flex items-center justify-center text-xs font-bold text-primary z-30">{siteConfig.initials}</div>
            <div className="w-8 h-8 rounded-full border-2 border-console bg-border z-20"></div>
            <div className="w-8 h-8 rounded-full border-2 border-console bg-border z-10"></div>
          </div>
          <button className="px-3 py-1.5 bg-console border border-border rounded text-gray-300 hover:text-white transition-colors">Complete Sprint</button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Backlog Column */}
        <div className="bg-console/30 rounded-xl p-4 border border-border/50 min-h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-400 flex items-center gap-2">
              <CircleDashed className="w-4 h-4 text-gray-500" />
              BACKLOG
            </h3>
            <span className="text-xs bg-border px-2 py-0.5 rounded text-gray-500 font-mono">{backlogProjects.length}</span>
          </div>
          <div className="space-y-4">
            {backlogProjects.map((item) => (
              <div key={item.id} className="bg-panel border border-border rounded-lg p-4 shadow-sm opacity-60">
                <span className="text-xs font-mono text-gray-500">{item.id}</span>
                <h3 className="font-medium text-gray-300 text-sm mt-1">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Column */}
        <div className="bg-console/30 rounded-xl p-4 border border-border/50 min-h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-400 flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
              IN PROGRESS
            </h3>
            <span className="text-xs bg-border px-2 py-0.5 rounded text-gray-500 font-mono">{inProgressProjects.length}</span>
          </div>
          <div className="space-y-4">
            {inProgressProjects.map((item) => (
              <div key={item.id} className="bg-panel border border-border rounded-lg p-4 shadow-sm border-l-2 border-l-primary">
                <span className="text-xs font-mono text-gray-500">{item.id}</span>
                <h3 className="font-medium text-gray-200 text-sm mt-1">{item.title}</h3>
                <div className="flex items-center gap-2 mt-3">
                   <div className="w-full bg-border rounded-full h-1.5"><div className="bg-primary h-1.5 rounded-full" style={{ width: `${item.progress}%` }}></div></div>
                   <span className="text-[10px] text-gray-500 font-mono">{item.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Done Column */}
        <div className="bg-console/30 rounded-xl p-4 border border-border/50 min-h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-gray-400 flex items-center gap-2">
              <CircleCheck className="w-4 h-4 text-success" />
              DONE
            </h3>
            <span className="text-xs bg-border px-2 py-0.5 rounded text-gray-500 font-mono">{completedProjects.length}</span>
          </div>
          <div className="space-y-4">
            {completedProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
