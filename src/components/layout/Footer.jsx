import React from 'react';

export const Footer = () => (
  <footer className="mt-auto border-t border-slate-800/80 bg-slate-950/70 py-8 px-6 text-center text-xs text-slate-500">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-mono text-slate-400">ISO/IEC 7810 ID-1 Physical Card Compliance</span>
      </div>
      <p>© {new Date().getFullYear()} CampusPass Studio Inc. Engineered with Controlled Forms, State & Reusable Components.</p>
    </div>
  </footer>
);