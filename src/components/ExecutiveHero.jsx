import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import siteConfig from '../data/siteConfig';

const ExecutiveHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-zinc-950 overflow-hidden pt-20 text-white font-sans selection:bg-primary/30">
      {/* Animated Dot Matrix Background */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#818cf8" />
            </pattern>
          </defs>
          <motion.rect 
            width="100%" 
            height="100%" 
            fill="url(#dotGrid)" 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        </svg>
      </div>

      {/* Subtle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-5xl px-6 md:px-12 text-center md:text-left flex flex-col items-center md:items-start">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary-light text-xs md:text-sm font-semibold tracking-widest uppercase shadow-[0_0_15px_rgba(129,140,248,0.2)]">
              {siteConfig.executiveEyebrow}
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6">
            {siteConfig.name}
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl font-semibold text-zinc-300 mb-6 tracking-tight">
            {siteConfig.executiveSubtitle}
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            {siteConfig.executiveDescription}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-200 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center justify-center gap-2"
            >
              View Impact & ROI
              <ChevronDown className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveHero;
