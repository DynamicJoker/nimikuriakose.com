import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Move } from 'lucide-react';
import EpicCardHero from './EpicCardHero';
import ExecutiveHero from './ExecutiveHero';

const dragDismissQuery = '(min-width: 768px)';

const useDragDismissEnabled = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(dragDismissQuery);
    const handleChange = () => setIsEnabled(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isEnabled;
};

const HeroContainer = ({ isJiraMaximized, setIsJiraMaximized }) => {
  const isDragDismissEnabled = useDragDismissEnabled();

  const handleDragEnd = (info) => {
    if (!isDragDismissEnabled) return;

    const thresholdX = typeof window !== 'undefined' ? window.innerWidth * 0.2 : 100;
    const thresholdY = typeof window !== 'undefined' ? window.innerHeight * 0.2 : 100;
    const isFar = Math.abs(info.offset.x) > thresholdX || Math.abs(info.offset.y) > thresholdY;
    const isFast = Math.abs(info.velocity.x) > 500 || Math.abs(info.velocity.y) > 500;

    if (isFar || isFast) {
      setIsJiraMaximized(false);
    }
  };

  return (
    <div className="relative min-h-svh w-full overflow-x-hidden bg-zinc-950">
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
      <div className="relative z-40 flex min-h-svh w-full flex-col items-center p-4 pt-24 pb-24 pointer-events-none md:p-6">
        <AnimatePresence>
          {isJiraMaximized && (
            <motion.div
              layoutId="jira-window"
              drag={isDragDismissEnabled}
              dragConstraints={
                isDragDismissEnabled
                  ? {
                      left: typeof window !== 'undefined' ? -window.innerWidth / 1.5 : -500,
                      right: typeof window !== 'undefined' ? window.innerWidth / 1.5 : 500,
                      top: typeof window !== 'undefined' ? -window.innerHeight / 1.5 : -500,
                      bottom: typeof window !== 'undefined' ? window.innerHeight / 1.5 : 500,
                    }
                  : undefined
              }
              dragElastic={0.8}
              dragSnapToOrigin={true}
              onDragEnd={(_, info) => handleDragEnd(info)}
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
                className="relative md:cursor-grab md:active:cursor-grabbing"
              >
                <EpicCardHero onMinimize={() => setIsJiraMaximized(false)} />

                {/* Drag Hint */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute -bottom-16 left-1/2 hidden w-full max-w-[12rem] -translate-x-1/2 flex-col items-center gap-2 text-gray-500 pointer-events-none md:flex"
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
