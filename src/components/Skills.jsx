import React from 'react';
import Tilt from 'react-parallax-tilt';
import { Cpu } from 'lucide-react';

const mockSkills = [
  { name: 'AWS', category: 'Cloud Infrastructure' },
  { name: 'Linux', category: 'Cloud Infrastructure' },
  { name: 'ISO 27001', category: 'Security & Compliance' },
  { name: 'SOC 2', category: 'Security & Compliance' },
  { name: 'NIST CSF 2.0', category: 'Security & Compliance' },
  { name: 'GRC', category: 'Security & Compliance' },
  { name: 'Rapid7', category: 'Cybersecurity Tools' },
  { name: 'Sentinel One', category: 'Cybersecurity Tools' },
  { name: 'Cobalt', category: 'Cybersecurity Tools' },
  { name: 'Jira / Atlassian', category: 'Agile & Tools' },
  { name: 'Asana', category: 'Agile & Tools' },
  { name: 'SaaS / CRM', category: 'Agile & Tools' },
  { name: 'Incident Mgmt', category: 'Management' },
  { name: 'Risk Mgmt', category: 'Management' },
  { name: 'Project Mgmt', category: 'Management' },
  { name: 'Stakeholder Eng.', category: 'Management' },
];

const Skills = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-mono text-primary mb-8 flex items-center gap-3">
        <Cpu className="w-6 h-6" />
        Tech Stack & Expertise
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {mockSkills.map((skill, index) => (
          <Tilt 
            key={index} 
            tiltMaxAngleX={15} 
            tiltMaxAngleY={15} 
            scale={1.05} 
            transitionSpeed={2500}
            className="h-full"
          >
            <div className="bg-panel border border-border rounded-xl p-6 h-full flex flex-col items-center justify-center gap-2 shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all cursor-pointer">
              <span className="text-lg font-bold text-gray-200 text-center leading-tight">{skill.name}</span>
              <span className="text-xs text-gray-500 font-mono text-center">{skill.category}</span>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Skills;
