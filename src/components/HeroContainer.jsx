import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import EpicCardHero from './EpicCardHero';
import ExecutiveHero from './ExecutiveHero';

const HeroContainer = () => {
  const [view, setView] = useState('epic'); // 'epic' or 'executive'

  return (
    <div className="relative">
      {/* Toggle Switch */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-console/80 backdrop-blur-md p-1 rounded-full border border-border shadow-xl flex items-center text-sm font-medium">
          <button
            onClick={() => setView('epic')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              view === 'epic' 
                ? 'bg-primary text-console shadow-md' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            🎫 Epic View
          </button>
          <button
            onClick={() => setView('executive')}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              view === 'executive' 
                ? 'bg-white text-zinc-950 shadow-md' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            🌍 Executive View
          </button>
        </div>
      </div>

      {/* Hero Views */}
      <div className="w-full relative overflow-hidden">
        <AnimatePresence mode="wait">
          {view === 'epic' ? (
            <motion.div
              key="epic"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <EpicCardHero />
            </motion.div>
          ) : (
            <motion.div
              key="executive"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ExecutiveHero />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroContainer;
