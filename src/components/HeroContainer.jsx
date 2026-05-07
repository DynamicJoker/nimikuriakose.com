import { AnimatePresence, motion } from 'motion/react';
import { MoveHorizontal } from 'lucide-react';
import EpicCardHero from './EpicCardHero';
import ExecutiveHero from './ExecutiveHero';

const HeroContainer = ({ isJiraMaximized, setIsJiraMaximized }) => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-zinc-950">
      {/* Z-0: Executive Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
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
              transition={{ layout: { type: "spring", stiffness: 350, damping: 30 } }}
              className="pointer-events-auto w-full max-w-4xl"
            >
              <motion.div
                animate={{ 
                  rotate: [0, -2, 2, -2, 2, 0],
                  x: [0, -5, 5, -5, 5, 0]
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
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500 gap-2 pointer-events-none w-full max-w-[200px]"
                >
                  <motion.span 
                    animate={{ 
                      textShadow: ["0px 0px 0px rgba(129,140,248,0)", "0px 0px 15px rgba(129,140,248,0.8)", "0px 0px 15px rgba(129,140,248,0.8)", "0px 0px 0px rgba(129,140,248,0)"],
                      color: ["rgba(156,163,175,0.7)", "rgba(129,140,248,1)", "rgba(129,140,248,1)", "rgba(156,163,175,0.7)"]
                    }}
                    transition={{ repeat: Infinity, duration: 0.5, repeatDelay: 12, ease: "linear" }}
                    className="text-xs font-mono tracking-widest uppercase"
                  >
                    Drag to dismiss
                  </motion.span>
                  <motion.div
                    animate={{ x: [-8, 8, -8] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="text-primary/50"
                  >
                    <MoveHorizontal className="w-5 h-5" />
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
