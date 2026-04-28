import React from 'react';
import { Command } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-gray-500 font-mono text-xs border-t border-border mt-20 relative">
      <p className="mb-2">System Version 2.0.1</p>
      <div className="flex items-center justify-center gap-2 text-gray-400">
        <span>Press</span>
        <kbd className="px-2 py-1 bg-panel border border-border rounded shadow-sm text-gray-300 font-sans flex items-center gap-1">
          <Command className="w-3 h-3" /> K
        </kbd>
        <span>to search issues</span>
      </div>
      <p className="mt-4 opacity-50">&copy; {new Date().getFullYear()} Nimi Kuriakose. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
