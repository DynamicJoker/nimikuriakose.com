import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Unlock, Server, Shield, Cloud } from 'lucide-react';

const mockProjects = [
  {
    id: 'PRJ-101',
    title: 'Cloud Security Posture Management',
    status: 'COMPLETED',
    icon: <Shield className="w-5 h-5" />,
    description: 'Deployed automated compliance checks across AWS, GCP, and Azure using Terraform and customized security rules. Remediation workflows reduced vulnerabilities by 80% within 3 months.'
  },
  {
    id: 'PRJ-102',
    title: 'Enterprise Identity Migration',
    status: 'IN PROGRESS',
    icon: <Lock className="w-5 h-5" />,
    description: 'Managing the migration of 10,000+ internal user accounts from legacy Active Directory to Okta. Integrating SSO for 50+ critical internal applications.'
  },
  {
    id: 'PRJ-103',
    title: 'Kubernetes Cluster Hardening',
    status: 'COMPLETED',
    icon: <Server className="w-5 h-5" />,
    description: 'Implemented network policies, RBAC tuning, and container vulnerability scanning in CI/CD pipeline. Achieved CIS benchmark compliance score of 98%.'
  }
];

const ProjectCard = ({ project }) => {
  const [isDecrypted, setIsDecrypted] = useState(false);

  return (
    <div className="bg-panel border border-border rounded-lg p-5 flex flex-col h-full hover:border-primary/50 transition-colors shadow-lg relative overflow-hidden group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-border rounded-md text-primary">
            {project.icon}
          </div>
          <div>
            <div className="text-xs text-gray-500 font-mono">{project.id}</div>
            <h3 className="font-bold text-gray-200">{project.title}</h3>
          </div>
        </div>
        <span className={`text-[10px] px-2 py-1 rounded-full font-mono font-bold ${
          project.status === 'COMPLETED' ? 'bg-success/20 text-success' : 'bg-blue-900 text-blue-200'
        }`}>
          {project.status}
        </span>
      </div>

      <div className="relative flex-1 mt-4">
        <motion.div 
          animate={{ filter: isDecrypted ? 'blur(0px)' : 'blur(6px)', opacity: isDecrypted ? 1 : 0.6 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-sm text-gray-400 leading-relaxed select-none pointer-events-none"
        >
          {project.description}
        </motion.div>
        
        {!isDecrypted && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="bg-console/80 absolute inset-0 backdrop-blur-[2px]"></div>
            <button 
              onClick={() => setIsDecrypted(true)}
              className="relative z-20 flex items-center gap-2 px-4 py-2 bg-border hover:bg-primary hover:text-console text-gray-300 rounded text-xs font-mono font-bold transition-all"
            >
              <Lock className="w-4 h-4" />
              Authenticate to Decrypt
            </button>
          </div>
        )}
      </div>
      
      {isDecrypted && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-success text-xs font-mono"
        >
          <Unlock className="w-4 h-4" />
          Decryption Successful
        </motion.div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-mono text-primary flex items-center gap-3">
          <Cloud className="w-6 h-6" />
          Active Sprint Board
        </h2>
        <div className="text-sm font-mono text-gray-500 hidden md:block">
          Sprint 42 • 3 Issues
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
