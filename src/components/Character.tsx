import React, { useState, useRef, useEffect } from 'react';
import { CharacterData } from '../types';

// Initialize audio objects
const slapSound = new Audio('https://www.myinstants.com/media/sounds/slap.mp3');
const ahhSound = new Audio('/ahh.mp3');

interface CharacterProps {
  data: CharacterData;
  onHit: () => void;
}

export default function Character({ data, onHit }: CharacterProps) {
  const [health, setHealth] = useState(100);
  const [isShaking, setIsShaking] = useState(false);
  const [showSpeech, setShowSpeech] = useState(false);
  
  const shakeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const speechTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleInteraction = () => {
    slapSound.currentTime = 0;
    slapSound.play().catch(e => console.log("Slap error:", e));
    
    setTimeout(() => {
        ahhSound.currentTime = 0;
        ahhSound.play().catch(e => console.log("Ahh error:", e));
    }, 200);

    // Trigger effects
    setIsShaking(false);
    setShowSpeech(false);
    
    // Read trigger to force reflow for animation restart
    setTimeout(() => {
      setIsShaking(true);
      setShowSpeech(true);
    }, 10);

    // Reduce health
    setHealth(prev => Math.max(0, prev - 10));

    // Callback to parent to update score
    onHit();

    // Clear existing timers
    if (shakeTimerRef.current) clearTimeout(shakeTimerRef.current);
    if (speechTimerRef.current) clearTimeout(speechTimerRef.current);

    // Reset animations
    shakeTimerRef.current = setTimeout(() => {
      setIsShaking(false);
    }, 500);

    speechTimerRef.current = setTimeout(() => {
      setShowSpeech(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (shakeTimerRef.current) clearTimeout(shakeTimerRef.current);
      if (speechTimerRef.current) clearTimeout(speechTimerRef.current);
    };
  }, []);

  return (
    <div className={`relative flex flex-col items-center ${data.delayAnimation ? 'animate-float-delayed' : 'animate-float'} w-1/2 max-w-[400px]`}>
      
      {/* Speech Bubble */}
      <div 
        className={`speech-bubble absolute -top-24 left-1/2 transform -translate-x-1/2 bg-surface-container-high border-2 ${data.borderColorClass} px-6 py-4 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_15px_rgba(255,75,137,0.4)] z-20 whitespace-nowrap ${showSpeech ? 'show' : ''}`}
      >
        <p className={`font-headline-lg-mobile text-lg ${data.textColorClass}`}>
          Sorry! Forgive me!
        </p>
        <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent ${data.themeColorClass}`}></div>
      </div>

      {/* Name Label */}
      <div className="mb-3 px-6 py-2 rounded-xl bg-black/70 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.9)] z-20 pointer-events-none transform hover:scale-105 transition-transform">
        <h2 className={`font-display-xl text-2xl ${data.textColorClass} drop-shadow-[0_3px_3px_rgba(0,0,0,1)] tracking-widest text-shadow-3d uppercase`}>
          {data.name}
        </h2>
      </div>

      {/* Health Bar */}
      <div className="w-48 h-4 bg-surface-container-lowest border border-outline-variant/50 rounded-full mb-6 overflow-hidden shadow-[0_4px_10px_rgba(0,0,0,0.8)] relative z-20">
        <div 
          className={`h-full ${data.healthFillClass || 'health-fill'}`} 
          style={{ width: `${health}%` }}
        />
      </div>

      {/* Character Image container for click handling */}
      <div 
        className={`relative z-10 cursor-none character-target ${isShaking ? 'shake-active' : ''}`} 
        onClick={handleInteraction}
      >
        {isShaking && (
          <>
            <div className="absolute inset-0 bg-red-600/40 mix-blend-overlay rounded-full pointer-events-none z-30 red-flash"></div>
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-40 h-[60vh] w-full">
              {Array.from({ length: 6 }).map((_, i) => (
                <span 
                  key={i} 
                  className="absolute text-5xl falling-tear" 
                  style={{ 
                    left: `${15 + i * 15}%`, 
                    animationDelay: `${i * 0.05}s` 
                  }}
                >
                  😭
                </span>
              ))}
            </div>
          </>
        )}
        <img 
          src={data.imageUrl} 
          alt={data.name} 
          className="h-[60vh] object-contain select-none pointer-events-none blended-character" 
        />
      </div>

      {/* 3D Platform */}
      <div className="platform w-64 h-16 mt-[-30px] z-0"></div>
    </div>
  );
}
