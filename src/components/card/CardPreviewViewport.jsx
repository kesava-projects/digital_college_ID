import React, { useState } from 'react';
import { THEMES } from '../../data/themes';
import { IDCardFront } from './IDCardFront';
import { IDCardBack } from './IDCardBack';
import { LanyardStrap } from './HardwareElements';

export const CardPreviewViewport = ({
  formData,
  currentThemeKey,
  onThemeChange,
  orientation,
  onOrientationChange
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showLanyard, setShowLanyard] = useState(true);
  const [showSheen, setShowSheen] = useState(true);

  const activeTheme = THEMES[currentThemeKey];

  return (
    <div className="w-full bg-slate-900/60 border border-slate-800/90 rounded-3xl p-6 shadow-2xl backdrop-blur-md flex flex-col items-center">
      {/* Studio Viewport Controls */}
      <div className="w-full flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
        {/* Orientation Toggle */}
        <div className="flex bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => onOrientationChange('vertical')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              orientation === 'vertical' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Vertical Pass
          </button>
          <button
            onClick={() => onOrientationChange('horizontal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              orientation === 'horizontal' ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Horizontal Card
          </button>
        </div>

        {/* Theme Dots */}
        <div className="flex items-center gap-2">
          {Object.values(THEMES).map((theme) => (
            <button
              key={theme.id}
              onClick={() => onThemeChange(theme.id)}
              className={`w-6 h-6 rounded-full border-2 transition-all transform hover:scale-110 ${
                currentThemeKey === theme.id ? 'scale-125 border-white shadow-lg' : 'border-transparent opacity-60'
              }`}
              style={{ backgroundColor: theme.primaryColor }}
              title={theme.name}
            />
          ))}
        </div>
      </div>

      {/* Physics & Physical Display Canvas */}
      <div className="py-4 flex flex-col items-center justify-center min-h-[520px]">
        {orientation === 'vertical' && showLanyard && <LanyardStrap />}

        <div>
          {!isFlipped ? (
            <IDCardFront
              data={formData}
              theme={activeTheme}
              orientation={orientation}
              showSheen={showSheen}
            />
          ) : (
            <IDCardBack
              data={formData}
              theme={activeTheme}
              orientation={orientation}
            />
          )}
        </div>
      </div>

      {/* Interactive Canvas Toggles */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => setIsFlipped((prev) => !prev)}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl text-xs font-bold text-slate-200 flex items-center gap-2 transition shadow-sm"
        >
          🔄 Flip to {isFlipped ? 'Front View' : 'Back View'}
        </button>
        <button
          onClick={() => setShowSheen((prev) => !prev)}
          className={`px-3.5 py-2 border rounded-xl text-xs font-semibold transition ${
            showSheen ? 'bg-indigo-950/60 border-indigo-500/40 text-indigo-300' : 'bg-slate-800 border-slate-700 text-slate-400'
          }`}
        >
          ✨ Hologram {showSheen ? 'On' : 'Off'}
        </button>
        {orientation === 'vertical' && (
          <button
            onClick={() => setShowLanyard((prev) => !prev)}
            className={`px-3.5 py-2 border rounded-xl text-xs font-semibold transition ${
              showLanyard ? 'bg-indigo-950/60 border-indigo-500/40 text-indigo-300' : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
          >
            🪢 Lanyard {showLanyard ? 'On' : 'Off'}
          </button>
        )}
      </div>
    </div>
  );
};