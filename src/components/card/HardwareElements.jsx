import React from 'react';

export const LanyardStrap = () => (
  <div className="no-print flex flex-col items-center -mb-5 z-20 pointer-events-none select-none">
    <div className="w-14 h-16 bg-gradient-to-b from-indigo-900 to-indigo-700 rounded-t-sm shadow-md border-x-2 border-indigo-400/40 relative">
      <div className="absolute inset-y-0 left-1.5 w-[2px] bg-white/20" />
      <div className="absolute inset-y-0 right-1.5 w-[2px] bg-white/20" />
    </div>
    <div className="w-8 h-4 bg-slate-400 rounded-t border border-slate-200 shadow-sm -mt-0.5" />
    <div className="w-4 h-6 border-2 border-slate-300 rounded-b-full shadow-inner" />
  </div>
);

export const SmartChip = () => (
  <div className="w-11 h-8 rounded-md bg-gradient-to-tr from-amber-400 via-amber-200 to-yellow-500 border border-amber-600/70 shadow-sm relative overflow-hidden flex items-center justify-center">
    <div className="w-full h-[1px] bg-amber-900/40 absolute top-1/2 -translate-y-1/2" />
    <div className="h-full w-[1px] bg-amber-900/40 absolute left-1/3" />
    <div className="h-full w-[1px] bg-amber-900/40 absolute right-1/3" />
    <div className="w-3 h-3 rounded-full border border-amber-800/40 bg-amber-300/40 z-10" />
  </div>
);

export const BarcodeStrip = ({ code = 'CAMPUS-8841' }) => {
  const bars = Array.from({ length: 42 }).map((_, i) => {
    const isBold = (code.charCodeAt(i % code.length) + i) % 3 === 0;
    return isBold ? 'w-1' : 'w-[1.5px]';
  });

  return (
    <div className="bg-white/95 px-3 py-1.5 rounded-lg shadow-md border border-slate-300 flex flex-col items-center">
      <div className="flex items-center gap-[2px] h-6 overflow-hidden">
        {bars.map((w, idx) => (
          <div key={idx} className={`${w} bg-black h-full`} />
        ))}
      </div>
      <span className="text-[8px] font-mono tracking-widest text-slate-900 mt-0.5 font-bold">
        *{code}*
      </span>
    </div>
  );
};

export const QRCodeBadge = ({ data, size = 62 }) => {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
    data
  )}&bgcolor=ffffff&color=090d16&margin=2`;

  return (
    <div className="p-1 bg-white rounded-lg shadow-md border border-slate-300 inline-block">
      <img src={qrUrl} alt="Verify QR" width={size} height={size} className="rounded" loading="lazy" />
    </div>
  );
};