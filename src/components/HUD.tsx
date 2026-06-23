import React from 'react';

interface HUDProps {
  score: number;
  combo: number;
}

export default function HUD({ score, combo }: HUDProps) {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-edge h-20 bg-surface/60 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_4px_0_0_rgba(0,0,0,1),0_40px_40px_rgba(0,0,0,0.5)]">
      {/* Brand Logo */}
      <div className="flex flex-col select-none">
        <div className="font-display-xl text-primary drop-shadow-[0_0_15px_rgba(255,177,195,0.8)] tracking-tighter text-3xl md:text-5xl">
          Supti's Slipper Strike
        </div>
        <div className="font-label-caps text-secondary-container drop-shadow-[0_0_10px_rgba(0,227,253,1)] tracking-widest text-sm md:text-base mt-1">
          A Special Game Made For Supti ❤️
        </div>
      </div>

      {/* Scoreboard Glass Panel */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6 px-8 py-3 bg-surface-container/80 backdrop-blur-2xl rounded-full border border-t-white/10 border-l-white/10 border-b-black/50 border-r-black/50 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col items-center min-w-[60px]">
          <span className="font-label-caps text-on-surface-variant text-[10px]">SCORE</span>
          <span id="score-display" className="font-headline-lg text-secondary-container drop-shadow-[0_0_8px_rgba(0,227,253,0.8)] tabular-nums">
            {score}
          </span>
        </div>

        <div className="w-px h-8 bg-outline-variant/50"></div>

        <div className="flex flex-col items-center min-w-[60px]">
          <span className="font-label-caps text-on-surface-variant text-[10px]">COMBO</span>
          <span id="combo-display" className="font-headline-lg text-primary drop-shadow-[0_0_8px_rgba(255,75,137,0.8)] tabular-nums">
            x{combo}
          </span>
        </div>

        <div className="w-px h-8 bg-outline-variant/50"></div>

        <div className="flex flex-col items-center min-w-[60px]">
          <span className="font-label-caps text-on-surface-variant text-[10px]">TIME</span>
          <span className="font-headline-lg text-on-surface tabular-nums">60s</span>
        </div>
      </div>

      {/* Trailing Actions */}
      <div className="flex gap-4">
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-highest transition-all hover:scale-105 active:scale-95 border border-white/5 cursor-pointer z-50">
          <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary-fixed">pause_circle</span>
        </button>
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-highest transition-all hover:scale-105 active:scale-95 border border-white/5 cursor-pointer z-50">
          <span className="material-symbols-outlined text-on-surface-variant hover:text-secondary-fixed">settings</span>
        </button>
      </div>
    </nav>
  );
}
