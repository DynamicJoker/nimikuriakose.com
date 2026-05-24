import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { Layout, Menu, X, Grid } from 'lucide-react';
import siteConfig from '../data/siteConfig';

const TopNavBar = ({ isJiraMaximized, setIsJiraMaximized }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstMenuItemRef = useRef(null);
  const lastMenuTriggerRef = useRef(null);
  const menuWasOpenRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const navMenuId = 'site-navigation-menu';
  const menuPanelVariants = prefersReducedMotion
    ? {
        closed: { opacity: 0, transitionEnd: { visibility: 'hidden' } },
        open: { opacity: 1, visibility: 'visible' },
      }
    : {
        closed: { opacity: 0, y: '-0.75rem', transitionEnd: { visibility: 'hidden' } },
        open: { opacity: 1, y: 0, visibility: 'visible' },
      };
  const menuListVariants = {
    closed: {},
    open: {
      transition: prefersReducedMotion
        ? { staggerChildren: 0 }
        : { delayChildren: 0.03, staggerChildren: 0.02 },
    },
  };
  const menuItemVariants = prefersReducedMotion
    ? {
        closed: { opacity: 0 },
        open: { opacity: 1 },
      }
    : {
        closed: { opacity: 0, x: '-0.75rem' },
        open: { opacity: 1, x: 0 },
      };

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown, true);
    return () => window.removeEventListener('keydown', handleKeyDown, true);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      menuWasOpenRef.current = true;
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const focusDelay = prefersReducedMotion ? 0 : 120;
      const focusTimer = window.setTimeout(() => {
        firstMenuItemRef.current?.focus({ preventScroll: true });
      }, focusDelay);

      return () => {
        window.clearTimeout(focusTimer);
        document.body.style.overflow = previousOverflow;
      };
    }

    if (menuWasOpenRef.current) {
      menuWasOpenRef.current = false;
      window.setTimeout(() => {
        lastMenuTriggerRef.current?.focus({ preventScroll: true });
      }, 0);
    }

    return undefined;
  }, [isMenuOpen, prefersReducedMotion]);

  const handleMenuToggle = (event) => {
    lastMenuTriggerRef.current = event.currentTarget;
    setIsMenuOpen((open) => !open);
  };

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
            type="button"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls={navMenuId}
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
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
                  type="button"
                  aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                  aria-controls={navMenuId}
                  aria-expanded={isMenuOpen}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleMenuToggle}
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
                      type="button"
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
                  aria-label="Restore hero card"
                  title="Restore hero card"
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
      <motion.div
        id={navMenuId}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isMenuOpen}
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={menuPanelVariants}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { type: 'spring', damping: 28, stiffness: 260 }
        }
        onPointerDown={(event) => {
          if (event.target === event.currentTarget) {
            setIsMenuOpen(false);
          }
        }}
        className={`fixed inset-0 z-[90] bg-console/95 px-6 pt-24 backdrop-blur-md xl:hidden ${
          isMenuOpen ? 'pointer-events-auto overflow-y-auto' : 'pointer-events-none overflow-hidden'
        }`}
      >
        <motion.div
          variants={menuListVariants}
          className="mx-auto flex max-w-sm flex-col gap-2"
        >
          {siteConfig.navLinks.map((link, idx) => (
            <motion.button
              key={link.label}
              ref={idx === 0 ? firstMenuItemRef : null}
              type="button"
              variants={menuItemVariants}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.16, ease: 'easeOut' }}
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={() => handleNavClick(link)}
              className={`flex w-full items-center justify-between rounded-xl border p-4 transition-all ${
                activeTab === link.label
                  ? 'bg-primary/10 border-primary/30 text-primary-light shadow-[0_0_1rem_rgba(129,140,248,0.1)]'
                  : 'border-border/50 text-gray-400 hover:bg-white/5 hover:border-border text-left'
              }`}
            >
              <span className="text-lg font-bold">{link.label}</span>
              {activeTab === link.label && (
                <motion.div
                  layoutId="active-indicator"
                  className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(129,140,248,0.8)]"
                />
              )}
            </motion.button>
          ))}

          <div className="mt-8 border-t border-border/50 pt-8">
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
        </motion.div>
      </motion.div>
    </>
  );
};

export default TopNavBar;
