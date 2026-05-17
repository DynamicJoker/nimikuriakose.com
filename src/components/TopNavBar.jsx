import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Menu, X, Grid } from 'lucide-react';
import siteConfig from '../data/siteConfig';

const TopNavBar = ({ isJiraMaximized, setIsJiraMaximized }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeLink = siteConfig.navLinks.find(link => link.targetId === entry.target.id);
            if (activeLink) {
              setActiveTab(activeLink.label);
            }
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    siteConfig.navLinks.forEach((link) => {
      if (link.targetId === 'top') return;
      const el = document.getElementById(link.targetId);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) setActiveTab('Home');
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (link) => {
    setActiveTab(link.label);
    setIsMenuOpen(false);
    if (link.targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(link.targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4 flex items-center justify-between pointer-events-none gap-4">
        <div className="flex items-center gap-3 pointer-events-auto">
          {/* Mobile Menu Toggle (Always Hamburger on Mobile/Tablet) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="xl:hidden flex items-center justify-center w-10 h-10 rounded-full bg-console/40 backdrop-blur-md border border-border text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Desktop Adaptive Links Pill */}
          <motion.div 
            layout
            className="hidden xl:flex items-center backdrop-blur-md bg-console/40 p-1.5 rounded-full border border-border shadow-lg"
          >
            <AnimatePresence mode="wait">
              {isJiraMaximized ? (
                <motion.button
                  key="launcher"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-primary transition-colors rounded-full"
                  title="Open Navigation"
                >
                  <Grid className="w-6 h-6" />
                </motion.button>
              ) : (
                <motion.div
                  key="full-nav"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center gap-1 px-1"
                >
                  {siteConfig.navLinks.map((link, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => handleNavClick(link)} 
                      className={`text-sm font-medium transition-all duration-300 px-4 py-1.5 rounded-full border ${
                        activeTab === link.label
                          ? 'bg-primary/20 text-primary-light shadow-[0_0_1rem_rgba(129,140,248,0.3)] border-primary/30 drop-shadow-[0_0_0.5rem_rgba(129,140,248,0.8)]'
                          : 'text-gray-400 border-transparent hover:text-white hover:bg-white/10 hover:border-white/20 hover:drop-shadow-[0_0_0.3rem_rgba(255,255,255,0.6)] backdrop-blur-sm'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right Minimized Icon Slot */}
        <div className="pointer-events-auto h-12 flex items-center justify-end min-w-[7.5rem]">
          <AnimatePresence>
            {!isJiraMaximized && (
              <motion.div
                key="minimized-epic"
                className="relative h-10 min-w-[7.5rem]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <motion.div
                  layoutId="jira-window"
                  className="absolute inset-0 rounded-full border border-border bg-panel shadow-2xl pointer-events-none"
                  transition={{ layout: { type: 'spring', stiffness: 350, damping: 30 } }}
                />
                <motion.button
                  type="button"
                  onClick={() => {
                    setIsJiraMaximized(true);
                    setIsMenuOpen(false);
                  }}
                  className="relative z-10 flex h-10 w-full items-center justify-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-console focus:outline-none focus:ring-2 focus:ring-primary/60 group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ delay: 0.18, duration: 0.16, ease: 'easeOut' }}
                >
                  <Layout className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span>View Epic</span>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-console/95 backdrop-blur-xl pt-24 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-2 max-w-sm mx-auto">
              {siteConfig.navLinks.map((link, idx) => (
                <motion.button
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => handleNavClick(link)}
                  className={`flex items-center justify-between w-full p-4 rounded-xl border transition-all ${
                    activeTab === link.label
                      ? 'bg-primary/10 border-primary/30 text-primary-light shadow-[0_0_1rem_rgba(129,140,248,0.1)]'
                      : 'border-border/50 text-gray-400 hover:bg-white/5 hover:border-border text-left'
                  }`}
                >
                  <span className="text-lg font-bold">{link.label}</span>
                  {activeTab === link.label && (
                    <motion.div 
                      layoutId="active-indicator"
                      className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(129,140,248,0.8)]" 
                    />
                  )}
                </motion.button>
              ))}
              
              <div className="mt-8 pt-8 border-t border-border/50">
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4 text-center">System Information</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-panel/50 border border-border p-3 rounded-lg text-center">
                    <p className="text-[10px] text-gray-500 mb-1">Status</p>
                    <p className="text-xs font-bold text-success">Deployed</p>
                  </div>
                  <div className="bg-panel/50 border border-border p-3 rounded-lg text-center">
                    <p className="text-[10px] text-gray-500 mb-1">Version</p>
                    <p className="text-xs font-bold text-gray-300">2.4.0-stable</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNavBar;
