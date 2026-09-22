import React from 'react';

export const Navbar = ({ onPrint, onApplyPreset, currentPreset }) => (
  <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between">
    <div className="flex items-center gap-3.5">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-600/30 border border-indigo-400/30">
        <span className="font-black text-white text-base tracking-tighter">CP</span>
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-base font-extrabold text-white tracking-tight">CampusPass</h1>
          <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
            STUDIO 2.4
          </span>
        </div>
        <p className="text-[11px] text-slate-400">Institutional Digital ID & Credential Engine</p>
      </div>
    </div>

    {/* University Presets & Export */}
    <div className="flex items-center gap-3">
      <div className="hidden md:flex items-center gap-1.5 bg-slate-900 border border-slate-800 p-1 rounded-xl">
        <button
          onClick={() => onApplyPreset('mit')}
          className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
            currentPreset === 'mit' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          MIT Template
        </button>
        <button
          onClick={() => onApplyPreset('stanford')}
          className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${
            currentPreset === 'stanford' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Stanford Template
        </button>
      </div>

      <button
        onClick={onPrint}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-bold rounded-xl shadow-lg shadow-indigo-600/30 transition transform hover:-translate-y-0.5"
      >
        <span>🖨️</span>
        <span>Export / Print</span>
      </button>
    </div>
  </header>
);