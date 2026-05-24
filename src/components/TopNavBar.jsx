import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { ChevronRight, Grid, Layout, Menu, Search, X } from 'lucide-react';
import { navigationItems, scrollToTarget } from '../data/navigationActions';

const TopNavBar = ({ isJiraMaximized, setIsJiraMaximized, onOpenCommandPalette }) => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const firstMenuItemRef = useRef(null);
  const lastMenuTriggerRef = useRef(null);
  const menuWasOpenRef = useRef(false);
  const prefersReducedMotion = useReducedMotion();
  const navMenuId = 'site-navigation-menu';

  const overlayVariants = prefersReducedMotion
    ? {
        closed: { opacity: 0, transitionEnd: { visibility: 'hidden' } },
        open: { opacity: 1, visibility: 'visible' },
      }
    : {
        closed: { opacity: 0, transitionEnd: { visibility: 'hidden' } },
        open: { opacity: 1, visibility: 'visible' },
      };

  const panelVariants = prefersReducedMotion
    ? {
        closed: { opacity: 0 },
        open: { opacity: 1 },
      }
    : {
        closed: { opacity: 0, y: -8, scale: 0.98 },
        open: { opacity: 1, y: 0, scale: 1 },
      };

  const menuListVariants = {
    closed: {},
    open: {
      transition: prefersReducedMotion
        ? { staggerChildren: 0 }
        : { delayChildren: 0.04, staggerChildren: 0.018 },
    },
  };

  const menuItemVariants = prefersReducedMotion
    ? {
        closed: { opacity: 0 },
        open: { opacity: 1 },
      }
    : {
        closed: { opacity: 0, y: 4 },
        open: { opacity: 1, y: 0 },
      };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeLink = navigationItems.find((link) => link.targetId === entry.target.id);
            if (activeLink) {
              setActiveTab(activeLink.label);
            }
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    navigationItems.forEach((link) => {
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
      const focusDelay = prefersReducedMotion ? 0 : 100;
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
    scrollToTarget(link.targetId);
  };

  const handleCommandClick = () => {
    setIsMenuOpen(false);
    onOpenCommandPalette?.();
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4 flex items-center justify-between pointer-events-none gap-4">
        <div className="flex min-w-0 items-center gap-3 pointer-events-auto">
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close issue navigator' : 'Open issue navigator'}
            aria-controls={navMenuId}
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-console/50 text-gray-300 backdrop-blur-md transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/60 xl:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <button
            type="button"
            aria-label="Open command palette"
            aria-haspopup="dialog"
            onClick={handleCommandClick}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-console/50 text-gray-300 backdrop-blur-md transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/60 xl:hidden"
            title="Search sections and actions"
          >
            <Search className="h-4 w-4" />
          </button>

          <motion.div
            layout
            className="hidden xl:flex items-center backdrop-blur-md bg-console/40 p-1.5 rounded-full border border-border shadow-lg"
          >
            <AnimatePresence mode="wait">
              {isJiraMaximized ? (
                <motion.button
                  key="launcher"
                  type="button"
                  aria-label={isMenuOpen ? 'Close issue navigator' : 'Open issue navigator'}
                  aria-controls={navMenuId}
                  aria-expanded={isMenuOpen}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={handleMenuToggle}
                  className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-primary transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-primary/60"
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
                  {navigationItems.map((link) => (
                    <button
                      key={link.id}
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

        <div className="pointer-events-auto h-12 flex min-w-[7.5rem] items-center justify-end">
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

      <motion.div
        id={navMenuId}
        role="dialog"
        aria-modal="true"
        aria-label="Issue Navigator"
        aria-hidden={!isMenuOpen}
        initial={false}
        animate={isMenuOpen ? 'open' : 'closed'}
        variants={overlayVariants}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.14, ease: 'easeOut' }}
        onPointerDown={(event) => {
          if (event.target === event.currentTarget) {
            setIsMenuOpen(false);
          }
        }}
        className={`fixed inset-0 z-[90] px-2 pb-4 pt-20 sm:px-4 md:px-6 ${
          isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        } bg-console/35 backdrop-blur-[2px]`}
      >
        <motion.div
          variants={panelVariants}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { type: 'spring', stiffness: 380, damping: 34, mass: 0.8 }
          }
          className="pointer-events-auto flex max-h-[calc(100svh-6rem)] w-full max-w-[calc(100vw-1rem)] flex-col overflow-hidden rounded-lg border border-border bg-panel/95 shadow-2xl shadow-black/40 backdrop-blur-md sm:max-w-md xl:ml-0"
        >
          <div className="border-b border-border bg-console/70 px-4 py-3">
            <div className="flex min-w-0 items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-500">
                  Project: Portfolio
                </p>
                <h2 className="truncate text-sm font-bold text-white">Issue Navigator</h2>
              </div>
              <div className="flex shrink-0 items-center gap-2 rounded-md border border-success/30 bg-success/10 px-2 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_8px_rgba(16,185,129,0.9)]" />
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-success">
                  Live
                </span>
              </div>
            </div>
          </div>

          <motion.div
            variants={menuListVariants}
            className="max-h-[calc(100svh-13rem)] overflow-y-auto p-2 [scrollbar-gutter:stable]"
          >
            {navigationItems.map((link, idx) => {
              const isActive = activeTab === link.label;

              return (
                <motion.button
                  key={link.id}
                  ref={idx === 0 ? firstMenuItemRef : null}
                  type="button"
                  variants={menuItemVariants}
                  transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.14, ease: 'easeOut' }}
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={() => handleNavClick(link)}
                  className={`grid min-h-14 w-full grid-cols-[4.75rem_minmax(0,1fr)_1.25rem] items-center gap-3 rounded-md border px-3 py-2.5 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 ${
                    isActive
                      ? 'border-primary/35 bg-primary/10 text-primary-light'
                      : 'border-transparent text-gray-300 hover:border-border hover:bg-white/[0.04]'
                  }`}
                >
                  <span className="min-w-0 font-mono text-xs font-bold text-gray-500">
                    {link.issueKey}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-bold text-white">{link.label}</span>
                    <span className="mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[0.68rem] uppercase tracking-wide text-gray-500">
                      <span>{link.type}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-600" />
                      <span>{link.status}</span>
                    </span>
                  </span>
                  <span className="flex justify-end">
                    {isActive ? (
                      <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
                    ) : (
                      <ChevronRight className="h-4 w-4 text-gray-600" />
                    )}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>

          <div className="border-t border-border bg-console/60 px-4 py-3">
            <button
              type="button"
              tabIndex={isMenuOpen ? 0 : -1}
              onClick={handleCommandClick}
              className="flex min-h-10 w-full min-w-0 items-center gap-3 rounded-md border border-border bg-panel/70 px-3 py-2 text-left text-sm text-gray-300 transition-colors hover:border-primary/40 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/60"
            >
              <Search className="h-4 w-4 shrink-0 text-primary" />
              <span className="min-w-0 flex-1 truncate">Search issues and actions</span>
              <span className="hidden shrink-0 rounded border border-border px-1.5 py-0.5 font-mono text-[0.65rem] text-gray-500 sm:inline">
                Ctrl K
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default TopNavBar;
