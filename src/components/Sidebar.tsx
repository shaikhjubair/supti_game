import React from 'react';

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 h-full z-40 flex-col p-panel-gap bg-surface-container/80 backdrop-blur-2xl w-64 border-r border-outline-variant/20 shadow-[4px_0_0_0_rgba(0,0,0,1)] pt-28">
      {/* Player Profile Header */}
      <div className="mb-8 px-4 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-surface-container-high border-2 border-primary shadow-[0_0_10px_rgba(255,75,137,0.5)] overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2gE2Pqj27_sxghBwfLowVw0h5yVVRmJEJvNtAhL4MiJa67R5IGxkHdxG_Yh7me4Jm879fHYHC86Rq6vMcXU7hISAt6uk_XTC85imqZb3egtqqr6lZiCBNFc4Lhuddj6Cdl6gSHnasQQMtcvdy09LL7VMWmqTbzBJudHXoWMRh1wsN0u3AtO7k6aQCYSDJ8JYB284uxAMg3ndlHlcSlag7B2OEUgNJXpu_KN4p-ZKJZf6nN5G751T8yn8tK5_4Owu0U1x1CU-OGpBv"
            alt="STRIKER_01 profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <div className="font-headline-lg-mobile text-sm text-primary uppercase select-none">STRIKER_01</div>
          <div className="font-label-caps text-on-surface-variant text-[10px] select-none">Rank: Elite</div>
        </div>
      </div>

      {/* Nav Tabs */}
      <nav className="flex flex-col gap-2">
        <a href="#" className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container shadow-[0_0_15px_rgba(255,75,137,0.6)] rounded-lg font-label-caps hover:scale-[1.02] transition-transform z-50">
          <span className="material-symbols-outlined">airlines</span>
          Arsenal
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-primary hover:bg-surface-container-highest rounded-lg font-label-caps transition-all z-50">
          <span className="material-symbols-outlined">leaderboard</span>
          Leaderboard
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-primary hover:bg-surface-container-highest rounded-lg font-label-caps transition-all z-50">
          <span className="material-symbols-outlined">bolt</span>
          Upgrades
        </a>
        <a href="#" className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-primary hover:bg-surface-container-highest rounded-lg font-label-caps transition-all z-50">
          <span className="material-symbols-outlined">shopping_cart</span>
          Store
        </a>
      </nav>
    </aside>
  );
}
