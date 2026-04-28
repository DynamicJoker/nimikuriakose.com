import React, { useState, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { ShieldCheck, ChevronRight, Globe, Mail } from 'lucide-react';

const Hero = () => {
  const [uiStep, setUiStep] = useState(0);
  const containerRef = useRef(null);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center p-6 bg-console relative overflow-hidden"
    >
      {/* Background Grid - Appears at uiStep >= 1 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: uiStep >= 1 ? 0.15 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #30363d 1px, transparent 1px),
            linear-gradient(to bottom, #30363d 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }}
      />

      {/* Main Content Rendered Behind/Around Terminal - Appears at uiStep >= 2 */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ 
            opacity: uiStep >= 2 ? 1 : 0, 
            y: uiStep >= 2 ? -40 : 30,
            scale: uiStep >= 2 ? 1 : 0.95
          }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4 text-primary">
            <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" />
            <span className="font-mono text-sm md:text-base font-bold tracking-widest uppercase">System Initialized</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-6 tracking-tight drop-shadow-2xl">
            NIMI <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">KURIAKOSE</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-400 font-mono mb-10 max-w-4xl mx-auto drop-shadow-lg">
            Security Project Manager & Trust & Safety SME
          </p>
        </motion.div>

        {/* CTA Buttons - Appears at uiStep >= 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: uiStep >= 3 ? 1 : 0, y: uiStep >= 3 ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 pointer-events-auto"
        >
          <button 
            onClick={() => {
              const el = document.getElementById('experience');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-console rounded-lg font-bold font-mono hover:bg-blue-400 transition-colors shadow-lg shadow-primary/20"
          >
            Deploy Modules <ChevronRight className="w-4 h-4" />
          </button>
          
          <div className="flex items-center gap-4 ml-4">
            <a href="https://www.linkedin.com/in/nimik" target="_blank" rel="noreferrer" className="p-3 bg-panel border border-border rounded-lg text-gray-400 hover:text-primary hover:border-primary/50 transition-all cursor-pointer">
              <Globe className="w-5 h-5" />
            </a>
            <a href="mailto:nimikuriakose123@gmail.com" className="p-3 bg-panel border border-border rounded-lg text-gray-400 hover:text-primary hover:border-primary/50 transition-all cursor-pointer">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Draggable Terminal */}
      <motion.div 
        drag 
        dragConstraints={containerRef}
        dragElastic={0.1}
        initial={{ opacity: 0, scale: 0.9, y: 0 }}
        animate={{ 
          opacity: 1, 
          scale: uiStep >= 2 ? 0.75 : 1,
          y: uiStep >= 2 ? "25vh" : 0
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full max-w-2xl bg-panel rounded-lg border border-border shadow-2xl overflow-hidden relative z-20 backdrop-blur-md bg-opacity-90"
      >
        {/* Terminal Header - Drag Handle */}
        <div className="bg-border px-4 py-3 flex items-center justify-between cursor-grab active:cursor-grabbing border-b border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-danger"></div>
            <div className="w-3 h-3 rounded-full bg-warning"></div>
            <div className="w-3 h-3 rounded-full bg-success"></div>
            <span className="ml-3 text-xs text-gray-400 font-mono select-none">root@cloud-console:~ (Drag to move)</span>
          </div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm md:text-base text-gray-300 min-h-[320px]">
          <TypeAnimation
            sequence={[
              1000,
              '> ./init_grid_protocol.sh --enable',
              () => setUiStep(1),
              500,
              '> ./init_grid_protocol.sh --enable\n[SUCCESS] Grid overlay engaged.',
              1000,
              '> ./init_grid_protocol.sh --enable\n[SUCCESS] Grid overlay engaged.\n> fetch_identity_profile --module=hero_text',
              500,
              '> ./init_grid_protocol.sh --enable\n[SUCCESS] Grid overlay engaged.\n> fetch_identity_profile --module=hero_text\n[LOADING] Decrypting profile data...',
              1000,
              () => setUiStep(2),
              '> ./init_grid_protocol.sh --enable\n[SUCCESS] Grid overlay engaged.\n> fetch_identity_profile --module=hero_text\n[LOADING] Decrypting profile data...\n[SUCCESS] Profile rendered successfully.',
              1000,
              '> ./init_grid_protocol.sh --enable\n[SUCCESS] Grid overlay engaged.\n> fetch_identity_profile --module=hero_text\n[LOADING] Decrypting profile data...\n[SUCCESS] Profile rendered successfully.\n> mount_action_modules',
              500,
              () => setUiStep(3),
              '> ./init_grid_protocol.sh --enable\n[SUCCESS] Grid overlay engaged.\n> fetch_identity_profile --module=hero_text\n[LOADING] Decrypting profile data...\n[SUCCESS] Profile rendered successfully.\n> mount_action_modules\n[SUCCESS] Action nodes online.\n> system online. ready for input.',
            ]}
            wrapper="div"
            cursor={true}
            repeat={0}
            speed={60}
            style={{ whiteSpace: 'pre-line' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
