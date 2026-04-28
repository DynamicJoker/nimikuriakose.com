import React, { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { Search, Download, Layout, User, X, Briefcase } from 'lucide-react';

const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-console/80 backdrop-blur-sm" 
        onClick={() => setOpen(false)}
      />
      
      <Command 
        className="w-full max-w-xl bg-panel border border-border rounded-xl shadow-2xl overflow-hidden relative z-10 font-sans"
        label="Search issues, boards, projects..."
      >
        <div className="flex items-center px-4 py-3 border-b border-border">
          <Search className="w-5 h-5 text-gray-500 mr-3" />
          <Command.Input 
            autoFocus 
            placeholder="Search issues, boards, projects..." 
            className="flex-1 bg-transparent border-none outline-none text-gray-200 placeholder:text-gray-500 text-sm"
          />
          <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-gray-300 bg-console p-1 rounded-md border border-border">
            <X className="w-4 h-4" />
          </button>
        </div>

        <Command.List className="max-h-[300px] overflow-y-auto p-2">
          <Command.Empty className="py-6 text-center text-sm text-gray-500">
            No results found.
          </Command.Empty>

          <Command.Group heading={<span className="text-xs text-gray-500 px-2 font-bold uppercase tracking-wider">Actions</span>}>
            <Command.Item 
              onSelect={() => {
                alert("Exporting Dossier...");
                setOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-3 rounded-md text-sm text-gray-300 hover:bg-border cursor-pointer transition-colors aria-selected:bg-border aria-selected:text-white"
            >
              <Download className="w-4 h-4 text-primary" />
              Export Dossier (PDF)
            </Command.Item>
          </Command.Group>

          <Command.Group heading={<span className="text-xs text-gray-500 px-2 font-bold uppercase tracking-wider mt-4 block">Navigation</span>}>
            <Command.Item 
              onSelect={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-3 rounded-md text-sm text-gray-300 hover:bg-border cursor-pointer transition-colors aria-selected:bg-border aria-selected:text-white"
            >
              <Layout className="w-4 h-4 text-gray-400" />
              Go to Epic (Hero)
            </Command.Item>
            <Command.Item 
              onSelect={() => {
                const el = document.getElementById('experience');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-3 rounded-md text-sm text-gray-300 hover:bg-border cursor-pointer transition-colors aria-selected:bg-border aria-selected:text-white"
            >
              <User className="w-4 h-4 text-gray-400" />
              View Release Notes
            </Command.Item>
            <Command.Item 
              onSelect={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-3 rounded-md text-sm text-gray-300 hover:bg-border cursor-pointer transition-colors aria-selected:bg-border aria-selected:text-white"
            >
              <Briefcase className="w-4 h-4 text-gray-400" />
              Create Issue (Contact)
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
};

export default CommandPalette;
