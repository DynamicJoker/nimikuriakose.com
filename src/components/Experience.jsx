import React from 'react';
import { Terminal } from 'lucide-react';

const mockExperience = [
  {
    timestamp: '2023-10-15 09:30:00 UTC',
    action: 'Orchestrated migration of legacy on-prem infrastructure to AWS',
    status: 'SUCCESS',
    details: 'Reduced operational costs by 35% and improved uptime to 99.99%.'
  },
  {
    timestamp: '2022-06-20 14:15:22 UTC',
    action: 'Implemented Zero Trust Security Architecture across enterprise',
    status: 'IN PROGRESS',
    details: 'Rolling out MFA and identity-aware proxies to 5,000+ employees.'
  },
  {
    timestamp: '2021-03-10 11:05:45 UTC',
    action: 'Led SOC 2 Type II compliance audit',
    status: 'SUCCESS',
    details: 'Achieved certification with zero non-conformities.'
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
              <span className="text-gray-500 shrink-0">[{log.timestamp}]</span>
              <div className="flex-1">
                <span className="text-primary font-bold">ACTION: </span>
                <span className="text-gray-300">{log.action}</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4 ml-0 md:ml-[230px]">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">STATUS: </span>
                <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                  log.status === 'SUCCESS' ? 'bg-success/20 text-success' : 'bg-warning/20 text-warning'
                }`}>
                  {log.status}
                </span>
              </div>
            </div>
            <div className="mt-2 text-gray-400 ml-0 md:ml-[230px]">
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
