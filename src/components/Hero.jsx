import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { AlertCircle, Calendar, CheckSquare, Clock, Globe, Mail, MoreHorizontal, Shield } from 'lucide-react';

const Hero = () => {
  const [checklist, setChecklist] = useState(0);

  return (
    <section className="min-h-screen flex items-center justify-center p-6 bg-console relative pt-20">
      <div className="w-full max-w-4xl bg-panel rounded-xl border border-border shadow-2xl overflow-hidden text-sm md:text-base">
        
        {/* Top Header / Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-border bg-console/50">
          <div className="flex items-center gap-3 text-xs md:text-sm font-mono text-gray-400">
            <span className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"><Shield className="w-4 h-4 text-primary" /> NIMI</span>
            <span>/</span>
            <span className="px-2 py-1 bg-border rounded-md text-gray-200 hover:bg-border-hover transition-colors cursor-pointer">SEC-PM-001</span>
          </div>
          <div className="flex items-center gap-3 mt-2 md:mt-0 text-xs font-mono">
            <div className="flex items-center gap-1.5 px-2 py-1 bg-warning/10 text-warning rounded-full border border-warning/20">
              <AlertCircle className="w-3 h-3" />
              <span>HIGHEST</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-success/10 text-success rounded-full border border-success/20">
              <div className="w-2 h-2 rounded-full bg-success"></div>
              <span>OPEN TO WORK</span>
            </div>
          </div>
        </div>

        {/* Issue Body */}
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Lead Cloud Security Project Manager
          </h1>
          
          {/* Metadata Row */}
          <div className="flex flex-wrap gap-6 mb-8 text-sm text-gray-400 border-b border-border pb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs border border-primary/30">NK</div>
              <span>Assignee: <span className="text-gray-200 font-medium">Nimi Kuriakose</span></span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Due: <span className="text-gray-200">Continuous</span></span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Est: <span className="text-gray-200">Long-term impact</span></span>
            </div>
          </div>

          {/* Description Section */}
          <div className="mb-8">
            <h3 className="text-gray-400 font-medium mb-3 flex items-center gap-2">Description</h3>
            <div className="bg-console border border-border rounded-lg p-5 font-mono text-gray-300 min-h-[140px] leading-relaxed relative">
              <TypeAnimation
                sequence={[
                  1000,
                  '**As a** forward-thinking tech organization,\n',
                  1000,
                  '**As a** forward-thinking tech organization,\n**I need** a Project Manager who bridges the gap between engineering and compliance,\n',
                  1000,
                  '**As a** forward-thinking tech organization,\n**I need** a Project Manager who bridges the gap between engineering and compliance,\n**so that** we can ship secure, scalable solutions on time.',
                  1000,
                  () => setChecklist(1),
                  500,
                  () => setChecklist(2),
                  500,
                  () => setChecklist(3)
                ]}
                wrapper="div"
                cursor={true}
                repeat={0}
                speed={75}
                style={{ whiteSpace: 'pre-line' }}
              />
            </div>
          </div>

          {/* Checklist Section */}
          <div className="mb-8 space-y-3">
            <h3 className="text-gray-400 font-medium mb-3">Acceptance Criteria</h3>
            {[
              { step: 1, text: 'Demonstrated AWS/GCP Security Expertise' },
              { step: 2, text: 'Proven Risk Mitigation & Compliance Auditing (SOC2/ISO27001)' },
              { step: 3, text: 'Consistent Agile Delivery & Cross-Functional Leadership' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: checklist >= item.step ? 1 : 0, x: checklist >= item.step ? 0 : -10 }}
                className="flex items-center gap-3 text-gray-300 bg-console/50 p-3 rounded-md border border-border"
              >
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${checklist >= item.step ? 'bg-primary border-primary text-console' : 'border-gray-600'}`}>
                  {checklist >= item.step && <CheckSquare className="w-3.5 h-3.5" />}
                </div>
                <span className={`transition-all ${checklist >= item.step ? 'line-through text-gray-600' : ''}`}>{item.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: checklist >= 3 ? 1 : 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-4 pt-4 border-t border-border mt-4"
          >
            <button 
              onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-2.5 bg-primary text-console rounded-md font-bold hover:bg-primary-light transition-colors"
            >
              Start Sprint
            </button>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/in/nimik" target="_blank" rel="noreferrer" className="p-2.5 bg-console border border-border rounded-md text-gray-400 hover:text-primary hover:border-primary transition-all">
                <Globe className="w-5 h-5" />
              </a>
              <a href="mailto:nimikuriakose123@gmail.com" className="p-2.5 bg-console border border-border rounded-md text-gray-400 hover:text-primary hover:border-primary transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="flex-1"></div>
            <button className="p-2.5 text-gray-500 hover:text-gray-300 bg-console rounded-md border border-border">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
