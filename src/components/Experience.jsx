import React from 'react';
import { Terminal } from 'lucide-react';

const mockExperience = [
  {
    timestamp: '2025-Present UTC',
    action: 'Security Project Manager | Employ',
    status: 'IN PROGRESS',
    details: 'Planned and Executed roll out of Rapid7 and Cobalt Integration into core products for real-time monitoring and penetration testing on AWS, GCP and Azure assets and user end points. Lead the charge on SOC 2 Type II, ISO 27001, GRC and GDPR/CCPA audits. Spearheaded a cross-functional initiative between DevOps and Engineering to prioritize and remediate critical security vulnerabilities. Developed and managed a robust vendor risk assessment framework.'
  },
  {
    timestamp: '2020-2025 UTC',
    action: 'Trust and Safety Specialist | Amazon Web Services',
    status: 'SUCCESS',
    details: 'Developed and maintained escalation processes and SOPs to exceed SLAs. Managed escalated Tier 3 incidents using internal ticketing systems. Reviewed abuse reports, conducted root cause analysis and suggest architectural changes. Interim manager for 14 weeks and project manager for 5+ projects.'
  },
  {
    timestamp: '2019-2020 UTC',
    action: 'Virtual Customer Service Associate | Amazon',
    status: 'SUCCESS',
    details: 'Investigated and resolved customer issues while meeting target KPIs and 99% positive customer experience score.'
  },
  {
    timestamp: '2018-2018 UTC',
    action: 'Senior Technical Support Associate | Tech Mahindra Limited',
    status: 'SUCCESS',
    details: 'Provided Technical Support and Network Engineering for a US-based Fortune 50 client. Identified and improved 3 escalation processes by applying advanced analytical and troubleshooting strategies.'
  },
  {
    timestamp: '2017-2018 UTC',
    action: 'Trainee Information Security Associate | SecuArk Private Limited',
    status: 'SUCCESS',
    details: 'Conducted Vulnerability Assessment and Penetration Testing (Application and Network). Designed, developed, and supported implementation of 5+ project-specific security solutions.'
  },
  {
    timestamp: '2016-2017 UTC',
    action: 'Support Consultant | Open Destinations Infotech. Pvt. Ltd',
    status: 'SUCCESS',
    details: 'Handled client escalations related to new releases and created incident impact documents. Managed a portfolio of key accounts, including onboarding, product training, and quarterly business reviews.'
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-mono text-primary mb-8 flex items-center gap-3">
        <Terminal className="w-6 h-6" />
        System Audit Trail / Experience
      </h2>
      
      <div className="bg-panel border border-border rounded-lg p-6 font-mono text-sm md:text-base space-y-6">
        {mockExperience.map((log, index) => (
          <div key={index} className="border-b border-border/50 pb-4 last:border-0 last:pb-0">
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 mb-2">
              <span className="text-gray-500 shrink-0 min-w-[180px]">[{log.timestamp}]</span>
              <div className="flex-1">
                <span className="text-primary font-bold">ACTION: </span>
                <span className="text-gray-300">{log.action}</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 ml-0 md:ml-[195px]">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">STATUS: </span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                  log.status === 'SUCCESS' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
                }`}>
                  {log.status}
                </span>
              </div>
            </div>
            <div className="mt-2 text-gray-400 ml-0 md:ml-[195px]">
              <span className="text-gray-600">Details: </span>
              {log.details}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
