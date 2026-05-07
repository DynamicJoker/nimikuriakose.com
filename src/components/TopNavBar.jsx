import { motion, AnimatePresence } from 'motion/react';
import { Layout } from 'lucide-react';

const TopNavBar = ({ isJiraMaximized, setIsJiraMaximized }) => {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
      {/* Left Links */}
      <div className="flex items-center gap-6 pointer-events-auto backdrop-blur-md bg-console/40 px-6 py-2.5 rounded-full border border-border shadow-lg">
        <button onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Experience</button>
        <button onClick={() => document.getElementById('methodology-wiki')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Methodology</button>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Contact</button>
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
