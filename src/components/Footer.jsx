import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border mt-20 text-center font-mono text-sm text-gray-500">
      <div className="max-w-4xl mx-auto px-6">
        <p className="mb-2">System initialized. All nodes online.</p>
        <p className="text-gray-600">Press <kbd className="px-2 py-1 bg-border rounded text-gray-400">Cmd + K</kbd> or <kbd className="px-2 py-1 bg-border rounded text-gray-400">Ctrl + K</kbd> to open command palette</p>
      </div>
    </footer>
  );
};

export default Footer;
