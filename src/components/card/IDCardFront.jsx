import React from 'react';
import { SmartChip, BarcodeStrip } from './HardwareElements';

export const IDCardFront = ({ data, theme, orientation = 'vertical', showSheen = true }) => {
  const isVertical = orientation === 'vertical';

  return (
    <div
      className={`relative rounded-3xl overflow-hidden shadow-2xl border ${theme.cardBorder} text-white select-none bg-gradient-to-br ${theme.gradient} flex flex-col justify-between p-6 transition-all duration-300 shadow-2xl ${theme.glow}`}
      style={{
        width: isVertical ? '324px' : '490px',
        height: isVertical ? '508px' : '312px'
      }}
    >
      {/* Holographic Sheen Layer */}
      {showSheen && (
        <div className="absolute -inset-full bg-gradient-to-tr from-transparent via-white/10 to-transparent rotate-45 pointer-events-none" />
      )}

      {/* Lanyard punch-hole */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-1.5 bg-black/50 rounded-full border border-white/20" />

      {/* Header */}
      <div className="mt-3 flex items-center justify-between border-b border-white/15 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/25 shadow-inner">
            <span className="font-black text-xs text-white">
              {data.institutionCode || 'UNI'}
            </span>
          </div>
          <div>
            <h2 className="text-[11px] font-black tracking-widest uppercase leading-tight line-clamp-1">
              {data.institutionName || 'INSTITUTE OF TECHNOLOGY'}
            </h2>
            <p className="text-[9px] text-white/60 tracking-wider">
              {data.campusCity || 'MAIN CAMPUS'}
            </p>
          </div>
        </div>
        <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded-full border ${theme.badgeColor}`}>
          ACTIVE
        </span>
      </div>

      {/* Body Section */}
      <div className={`my-auto ${isVertical ? 'flex flex-col items-center text-center' : 'flex items-center gap-5 text-left'}`}>
        {/* Avatar */}
        <div className="relative group">
          <div className="w-24 h-28 rounded-2xl overflow-hidden border-2 border-white/60 shadow-xl bg-slate-900 flex items-center justify-center">
            {data.avatarUrl ? (
              <img src={data.avatarUrl} alt={data.fullName} className="w-full h-full object-cover" />
            ) : (
              <span className="text-3xl text-white/30 font-black">?</span>
            )}
          </div>
          <div className="absolute -bottom-2 -right-1.5 bg-black/90 px-2 py-0.5 rounded-md text-[9px] font-mono border border-white/30">
            {data.bloodGroup || 'O+'}
          </div>
        </div>

        {/* Identity Details */}
        <div className={isVertical ? 'mt-3.5 flex flex-col items-center' : 'flex-1'}>
          <h1 className="text-lg font-black tracking-wide leading-tight">
            {data.fullName || 'STUDENT NAME'}
          </h1>
          <p className={`text-xs font-semibold ${theme.accentText} mt-0.5`}>
            {data.role || 'Scholar / Fellow'}
          </p>
          <div className="mt-2 text-[10px] text-white/80 space-y-0.5 font-mono">
            <p className="text-white/95 font-sans font-medium line-clamp-1">
              {data.degree || 'Degree Specialization'}
            </p>
            <p>ID: <span className="font-bold text-white tracking-wider">{data.studentId || 'N/A'}</span></p>
            <p>EXP: <span className="text-emerald-400 font-semibold">{data.validUntil || '00/0000'}</span></p>
          </div>
        </div>
      </div>

      {/* Footer Area */}
      <div className="flex items-end justify-between pt-3 border-t border-white/15">
        <SmartChip />
        <BarcodeStrip code={data.studentId || '8841-TECH'} />
      </div>
    </div>
  );
};