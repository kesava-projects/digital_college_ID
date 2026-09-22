import React from 'react';
import { QRCodeBadge } from './HardwareElements';

export const IDCardBack = ({ data, theme, orientation = 'vertical' }) => {
  const isVertical = orientation === 'vertical';

  return (
    <div
      className={`relative rounded-3xl overflow-hidden shadow-2xl border ${theme.cardBorder} text-white select-none bg-gradient-to-tl ${theme.gradient} flex flex-col justify-between transition-all duration-300 ${theme.glow}`}
      style={{
        width: isVertical ? '324px' : '490px',
        height: isVertical ? '508px' : '312px'
      }}
    >
      {/* Magnetic Stripe */}
      <div className="w-full h-12 bg-neutral-950 mt-5 border-y border-white/10 relative">
        <div className="absolute inset-y-2 inset-x-0 bg-neutral-900 flex items-center justify-end px-5">
          <span className="text-[8px] font-mono text-white/30 tracking-widest">
            HICO 4000 OE MAGNETIC STRIPE
          </span>
        </div>
      </div>

      {/* Regulations & Directives */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3 text-[10px] text-white/70">
          <div className="bg-black/30 p-3 rounded-xl border border-white/10 text-[9px] leading-relaxed">
            <p className="font-bold text-white/90 mb-0.5">PROPERTY OF INSTITUTION</p>
            Possession constitutes acceptance of campus policies. This credential must be surrendered upon termination of affiliation or upon demand by Campus Security.
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px]">
            <div>
              <span className="block text-white/40 text-[8px] uppercase">Emergency Line</span>
              <span className="font-mono text-white/95">{data.emergencyContact || 'N/A'}</span>
            </div>
            <div>
              <span className="block text-white/40 text-[8px] uppercase">Official Mail</span>
              <span className="font-mono text-white/95 truncate block">{data.officialEmail || 'N/A'}</span>
            </div>
          </div>
        </div>

        {/* QR Code & Signature Strip */}
        <div className="flex items-end justify-between pt-3 border-t border-white/10">
          <QRCodeBadge data={`ENCRYPTED:${data.studentId}|${data.fullName}|${data.validUntil}`} />
          <div className="text-right">
            <div className="h-8 w-28 border-b border-dashed border-white/40 flex items-end justify-center">
              <span className="font-serif italic text-base text-slate-300 select-none">
                E. R. Watson
              </span>
            </div>
            <span className="text-[8px] tracking-wider text-white/50 uppercase block mt-1">
              Authorized Registrar
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};