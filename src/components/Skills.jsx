import React from 'react';
import { Activity, ShieldAlert, CheckCircle } from 'lucide-react';

const mockSkills = [
  { name: 'AWS Infrastructure', status: 'EXPERT', category: 'Cloud' },
  { name: 'ISO 27001 & SOC 2', status: 'CERTIFIED', category: 'Compliance' },
  { name: 'NIST CSF 2.0', status: 'EXPERT', category: 'Compliance' },
  { name: 'Rapid7 / Sentinel One', status: 'INTEGRATED', category: 'Security' },
  { name: 'Cobalt Penetration Testing', status: 'EXPERT', category: 'Security' },
  { name: 'Jira & Agile Methodologies', status: 'SCRUM MASTER', category: 'Project Mgmt' },
  { name: 'Vendor Risk Assessment', status: 'EXPERT', category: 'Risk Mgmt' },
  { name: 'Incident Response (Tier 3)', status: 'EXPERT', category: 'Operations' },
];

const Skills = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-border mt-10">
      <div className="flex items-center gap-3 mb-10">
        <Activity className="w-6 h-6 text-primary" />
        <h2 className="text-xl md:text-2xl font-bold text-gray-200">System Health / Compliance Matrix</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {mockSkills.map((skill, index) => (
          <div key={index} className="bg-panel border border-border rounded-lg p-4 relative group overflow-hidden">
            <div className="flex justify-between items-start mb-4">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{skill.category}</span>
              <div className="flex items-center gap-1.5 px-2 py-0.5 bg-success/10 text-success rounded text-[10px] font-bold font-mono border border-success/20">
                <div className="w-1.5 h-1.5 bg-success rounded-full animate-pulse"></div>
                {skill.status}
              </div>
            </div>
            <h3 className="font-semibold text-gray-200 leading-tight pr-4">{skill.name}</h3>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/95 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center p-4">
              <div className="text-center">
                <CheckCircle className="w-6 h-6 text-console mx-auto mb-2" />
                <p className="text-xs font-bold text-console">Authorized for Enterprise Deployment.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
