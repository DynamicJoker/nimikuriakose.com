import { AnimatePresence, motion } from 'motion/react';
import EpicCardHero from './EpicCardHero';
import ExecutiveHero from './ExecutiveHero';

const HeroContainer = ({ isJiraMaximized, setIsJiraMaximized }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-zinc-950">
      {/* Z-0: Executive Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <ExecutiveHero />
      </div>

      {/* Z-40: Draggable Jira Card */}
      <div className="absolute inset-0 z-40 pointer-events-none flex items-center justify-center p-6 pt-20">
        <AnimatePresence>
          {isJiraMaximized && (
            <motion.div
              layoutId="jira-window"
              drag
              dragConstraints={{ left: -300, right: 300, top: -200, bottom: 200 }}
              dragElastic={0.4}
              onDragEnd={(e, info) => {
                const threshold = 150;
                if (
                  Math.abs(info.offset.x) > threshold ||
                  Math.abs(info.offset.y) > threshold
                ) {
                  setIsJiraMaximized(false);
                }
              }}
              animate={{ 
                rotate: [0, -1, 1, -1, 0],
                y: [0, -5, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4, 
                repeatDelay: 2,
                ease: "easeInOut" 
              }}
              className="pointer-events-auto cursor-grab active:cursor-grabbing w-full max-w-4xl"
            >
              <EpicCardHero />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroContainer;
