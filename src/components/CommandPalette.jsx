import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import {
  BarChart3,
  BookOpen,
  Briefcase,
  Download,
  FileText,
  Layout,
  MessageSquare,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { navigationItems, scrollToTarget, utilityActions } from '../data/navigationActions';

const typeIcons = {
  Action: Sparkles,
  Board: Briefcase,
  Comment: MessageSquare,
  Epic: Layout,
  Matrix: ShieldCheck,
  Metric: BarChart3,
  Release: FileText,
  Request: Send,
  Wiki: BookOpen,
};

const CommandPalette = ({ open, onOpenChange }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open ?? internalOpen;
  const setIsOpen = onOpenChange ?? setInternalOpen;

  useEffect(() => {
    const down = (event) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpen((prev) => !prev);
        return;
      }

      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setIsOpen]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closePalette = () => setIsOpen(false);

  const runUtilityAction = (action) => {
    if (action.action === 'exportDossier') {
      alert('Exporting Dossier...');
      closePalette();
      return;
    }

    if (action.action === 'navigate' && action.targetId) {
      scrollToTarget(action.targetId);
      closePalette();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto px-3 py-4 sm:px-4 sm:py-8 md:py-[10svh]">
      <button
        type="button"
        aria-label="Close command palette"
        className="fixed inset-0 cursor-default bg-console/80 backdrop-blur-sm"
        onClick={closePalette}
      />

      <Command
        className="relative z-10 flex max-h-[calc(100svh-2rem)] w-full max-w-xl min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-panel font-sans shadow-2xl sm:max-h-[calc(100svh-4rem)] md:max-h-[80svh]"
        label="Search issues, boards, and actions"
      >
        <div className="border-b border-border bg-console/70 px-4 py-3">
          <div className="mb-3 flex min-w-0 items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-500">
                Command Center
              </p>
              <h2 className="truncate text-sm font-bold text-white">Search Portfolio Issues</h2>
            </div>
            <button
              type="button"
              aria-label="Close command palette"
              onClick={closePalette}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border bg-panel text-gray-500 transition-colors hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/60"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex min-h-10 min-w-0 items-center rounded-md border border-border bg-panel/80 px-3">
            <Search className="mr-3 h-4 w-4 shrink-0 text-gray-500" />
            <Command.Input
              autoFocus
              placeholder="Search issues, sections, actions..."
              className="min-w-0 flex-1 border-none bg-transparent text-sm text-gray-200 outline-none placeholder:text-gray-500"
            />
          </div>
        </div>

        <Command.List className="max-h-[calc(100svh-11rem)] overflow-y-auto p-2 [scrollbar-gutter:stable] md:max-h-[24rem]">
          <Command.Empty className="py-6 text-center text-sm text-gray-500">
            No matching issues or actions.
          </Command.Empty>

          <Command.Group
            heading={
              <span className="block px-2 pb-1 pt-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                Actions
              </span>
            }
          >
            {utilityActions.map((action) => {
              const Icon = action.id === 'export-dossier' ? Download : typeIcons[action.type] || Sparkles;

              return (
                <Command.Item
                  key={action.id}
                  value={`${action.issueKey} ${action.label} ${action.type} ${action.status} ${action.description}`}
                  onSelect={() => runUtilityAction(action)}
                  className="grid min-h-14 cursor-pointer grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-3 rounded-md border border-transparent px-3 py-2.5 text-sm text-gray-300 transition-colors aria-selected:border-primary/30 aria-selected:bg-primary/10 aria-selected:text-white"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-console text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-bold text-white">{action.label}</span>
                    <span className="mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[0.68rem] uppercase tracking-wide text-gray-500">
                      <span>{action.issueKey}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-600" />
                      <span>{action.status}</span>
                    </span>
                  </span>
                  <span className="hidden shrink-0 rounded border border-border px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-gray-500 sm:inline">
                    {action.type}
                  </span>
                </Command.Item>
              );
            })}
          </Command.Group>

          <Command.Group
            heading={
              <span className="block px-2 pb-1 pt-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                Navigation
              </span>
            }
          >
            {navigationItems.map((item) => {
              const Icon = typeIcons[item.type] || Layout;

              return (
                <Command.Item
                  key={item.id}
                  value={`${item.issueKey} ${item.label} ${item.type} ${item.status} ${item.description}`}
                  onSelect={() => {
                    scrollToTarget(item.targetId);
                    closePalette();
                  }}
                  className="grid min-h-14 cursor-pointer grid-cols-[2.75rem_minmax(0,1fr)_auto] items-center gap-3 rounded-md border border-transparent px-3 py-2.5 text-sm text-gray-300 transition-colors aria-selected:border-primary/30 aria-selected:bg-primary/10 aria-selected:text-white"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-console text-gray-400">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-bold text-white">{item.label}</span>
                    <span className="mt-1 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1 text-[0.68rem] uppercase tracking-wide text-gray-500">
                      <span>{item.issueKey}</span>
                      <span className="h-1 w-1 rounded-full bg-gray-600" />
                      <span>{item.status}</span>
                    </span>
                  </span>
                  <span className="hidden shrink-0 rounded border border-border px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-gray-500 sm:inline">
                    {item.type}
                  </span>
                </Command.Item>
              );
            })}
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
};

export default CommandPalette;
