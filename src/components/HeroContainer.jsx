import { AnimatePresence, motion } from 'motion/react';
import { Move } from 'lucide-react';
import EpicCardHero from './EpicCardHero';
import ExecutiveHero from './ExecutiveHero';

const HeroContainer = ({ isJiraMaximized, setIsJiraMaximized }) => {
  return (
    <div className="relative w-full min-h-screen bg-zinc-950 overflow-x-hidden">
      {/* Z-0: Executive Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto overflow-hidden">
        <ExecutiveHero />
      </div>

      {/* Z-10: Original aesthetic background that hides executive view */}
      <AnimatePresence>
        {isJiraMaximized && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-10 bg-console pointer-events-none" 
          />
        )}
      </AnimatePresence>

      {/* Z-40: Draggable Jira Card */}
      <div className="relative z-40 pointer-events-none flex flex-col items-center min-h-screen w-full p-4 md:p-6 pt-24 pb-24">
        <AnimatePresence>
          {isJiraMaximized && (
            <motion.div
              layoutId="jira-window"
              drag={true}
              dragConstraints={{ 
                left: typeof window !== 'undefined' ? -window.innerWidth / 1.5 : -500, 
                right: typeof window !== 'undefined' ? window.innerWidth / 1.5 : 500,
                top: typeof window !== 'undefined' ? -window.innerHeight / 1.5 : -500,
                bottom: typeof window !== 'undefined' ? window.innerHeight / 1.5 : 500
              }}
              dragElastic={0.8}
              onDragEnd={(e, info) => {
                const thresholdX = typeof window !== 'undefined' ? window.innerWidth * 0.2 : 100;
                const thresholdY = typeof window !== 'undefined' ? window.innerHeight * 0.2 : 100;
                if (Math.abs(info.offset.x) > thresholdX || Math.abs(info.offset.y) > thresholdY) {
                  setIsJiraMaximized(false);
                }
              }}
              transition={{ layout: { type: "spring", stiffness: 350, damping: 30 } }}
              className="pointer-events-auto w-full max-w-4xl my-auto touch-pan-y"
              style={{ perspective: 1000 }}
            >
              <motion.div
                animate={{ 
                  rotate: [0, -1, 1, -1, 1, 0],
                  x: [0, '-0.2rem', '0.2rem', '-0.2rem', '0.2rem', 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 0.5, 
                  repeatDelay: 12,
                  ease: "linear" 
                }}
                className="cursor-grab active:cursor-grabbing relative"
              >
                <EpicCardHero />

                {/* Drag Hint */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 gap-2 pointer-events-none w-full max-w-[12rem]"
                >
                  <motion.span 
                    animate={{ 
                      textShadow: ["0 0 0 rgba(129,140,248,0)", "0 0 1rem rgba(129,140,248,0.8)", "0 0 1rem rgba(129,140,248,0.8)", "0 0 0 rgba(129,140,248,0)"],
                      color: ["rgba(156,163,175,0.7)", "rgba(129,140,248,1)", "rgba(129,140,248,1)", "rgba(156,163,175,0.7)"]
                    }}
                    transition={{ repeat: Infinity, duration: 0.5, repeatDelay: 12, ease: "linear" }}
                    className="text-xs font-mono tracking-widest uppercase"
                  >
                    Drag to dismiss
                  </motion.span>
                  <motion.div
                    animate={{ y: ['-0.3rem', '0.3rem', '-0.3rem'] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="text-primary/50 mt-1"
                  >
                    <Move className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HeroContainer;
