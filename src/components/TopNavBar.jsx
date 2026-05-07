import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout } from 'lucide-react';
import siteConfig from '../data/siteConfig';

const TopNavBar = ({ isJiraMaximized, setIsJiraMaximized }) => {
  const [activeTab, setActiveTab] = useState('Home');
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
      {/* Left Links */}
      <div className="flex items-center gap-2 pointer-events-auto backdrop-blur-md bg-console/40 px-4 py-2 rounded-full border border-border shadow-lg">
        {siteConfig.navLinks.map((link, idx) => (
          <button 
            key={idx} 
            onClick={() => {
              setActiveTab(link.label);
              if (link.targetId === 'top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                document.getElementById(link.targetId)?.scrollIntoView({ behavior: 'smooth' });
              }
            }} 
            className={`text-sm font-medium transition-all duration-300 px-4 py-1.5 rounded-full border ${
              activeTab === link.label
                ? 'bg-emerald-500/20 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] border-emerald-500/30 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]'
                : 'text-gray-400 border-transparent hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:border-white/10 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Right Minimized Icon Slot */}
      <div className="pointer-events-auto h-12 flex items-center justify-end min-w-[120px]">
        <AnimatePresence>
          {!isJiraMaximized && (
            <motion.button
              layoutId="jira-window"
              onClick={() => setIsJiraMaximized(true)}
              className="flex items-center gap-2 px-4 py-2 bg-panel border border-border rounded-full shadow-2xl hover:bg-console transition-colors group cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Layout className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold text-white">View Epic</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default TopNavBar;
