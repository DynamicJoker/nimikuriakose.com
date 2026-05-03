import { Command } from 'lucide-react';
import siteConfig from '../data/siteConfig';

/**
 * Footer – Displays version, ⌘K hint, and copyright.
 * Version and name sourced from siteConfig.
 */
const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-500 font-mono text-xs border-t border-border mt-20 relative">
      <p className="mb-2">System Version {siteConfig.version}</p>
      <div className="flex items-center justify-center gap-2 text-gray-400">
        <span>Press</span>
        <kbd className="px-2 py-1 bg-panel border border-border rounded shadow-sm text-gray-300 font-sans flex items-center gap-1">
          <Command className="w-3 h-3" /> K
        </kbd>
        <span>to search issues</span>
      </div>
      <p className="mt-4 opacity-50">&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
