import React from 'react';
import { FileCode2 } from 'lucide-react';

const mockExperience = [
  {
    version: 'v2025.01 - Present',
    role: 'Security Project Manager',
    company: 'Employ',
    tags: ['Security Patch', 'Metric', 'Infrastructure'],
    details: 'Planned and Executed roll out of Rapid7 and Cobalt Integration into core products for real-time monitoring and penetration testing on AWS, GCP and Azure assets and user end points. Lead the charge on SOC 2 Type II, ISO 27001, GRC and GDPR/CCPA audits. Spearheaded a cross-functional initiative between DevOps and Engineering to prioritize and remediate critical security vulnerabilities. Developed and managed a robust vendor risk assessment framework.'
  },
  {
    version: 'v2020.08 - 2025.01',
    role: 'Trust and Safety Specialist',
    company: 'Amazon Web Services',
    tags: ['Feature Shipped', 'Process Update'],
    details: 'Developed and maintained escalation processes and SOPs to exceed SLAs. Managed escalated Tier 3 incidents using internal ticketing systems. Reviewed abuse reports, conducted root cause analysis and suggest architectural changes. Interim manager for 14 weeks and project manager for 5+ projects.'
  },
  {
    version: 'v2019.01 - 2020.08',
    role: 'Virtual Customer Service Associate',
    company: 'Amazon',
    tags: ['Metric', 'Support'],
    details: 'Investigated and resolved customer issues while meeting target KPIs and 99% positive customer experience score.'
  },
  {
    version: 'v2018.01 - 2018.12',
    role: 'Senior Technical Support Associate',
    company: 'Tech Mahindra Limited',
    tags: ['Infrastructure', 'Optimization'],
    details: 'Provided Technical Support and Network Engineering for a US-based Fortune 50 client. Identified and improved 3 escalation processes by applying advanced analytical and troubleshooting strategies.'
  },
  {
    version: 'v2017.01 - 2018.01',
    role: 'Trainee Information Security Associate',
    company: 'SecuArk Private Limited',
    tags: ['Security Patch', 'Feature Shipped'],
    details: 'Conducted Vulnerability Assessment and Penetration Testing (Application and Network). Designed, developed, and supported implementation of 5+ project-specific security solutions.'
  },
  {
    version: 'v2016.01 - 2017.01',
    role: 'Support Consultant',
    company: 'Open Destinations Infotech. Pvt. Ltd',
    tags: ['Support', 'Metric'],
    details: 'Handled client escalations related to new releases and created incident impact documents. Managed a portfolio of key accounts, including onboarding, product training, and quarterly business reviews.'
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto" id="experience">
      <div className="flex items-center gap-3 mb-10 pb-4 border-b border-border">
        <FileCode2 className="w-6 h-6 text-primary" />
        <h2 className="text-2xl font-bold text-gray-200">Release Notes / Changelog</h2>
      </div>
      
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {mockExperience.map((release, index) => (
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
