import React, { useState, useEffect, useRef } from 'react';
import HUD from './components/HUD';
import Sidebar from './components/Sidebar';
import Cursor from './components/Cursor';
import Character from './components/Character';
import { CharacterData } from './types';

const CHARACTERS: CharacterData[] = [
  {
    id: 'char-1',
    name: "Supti's playboy bf",
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDK_L8C1wq9Z_MlL0FjzW3N34i_K0On7N05HW1yLynpAt9vnrMsqSB7MLjWCTvpgvfsv9uW1uUl4zbSSDktyKyjxTDOMV_2oR6ZZhnPc5QtT2fUSCV94Pl5OAPAuq0soBOiUhd1tYQLDJqg5-KUA-mQcu5l1PlSXZbNa5HtuWw8fhAY_ZdPUCuSQXbRTKi0RejMe1NPmvFHlccGHdnv5F1y_4oYGptXv9BydptqIJRuxSqhsvRKoloSP8DCQehoo5rNSXcyW_54lEk',
    themeColorClass: 'border-t-primary',
    borderColorClass: 'border-primary',
    textColorClass: 'text-primary-fixed',
    healthFillClass: 'health-fill'
  },
  {
    id: 'char-2',
    name: 'Sufferings',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYSxWYdKqOqQDQv8R2_lnZD4mzWHaKmDF_u-hj_pcuvPQrP86cywazIe22bYfsr4kYIFiGbkcvJDR6h2jcDvG-MfUapkf300T01BrKbAmh8LfHPtEogJq7ecHHhTgNpQyB977e3m8srkppPUvUZU-PBIoXhCYjGEk5AuDDwatbwihlsGG9mUOLCKiSPxB5PGjWBpPSKiZxyU9peXn3TjQyc_4hBhE791k9RXFtfENUjwNRJMtWrSFVsCv9P0_YzIQsCi8hcZY0W-Uq',
    themeColorClass: 'border-t-secondary-container',
    borderColorClass: 'border-secondary-container',
    textColorClass: 'text-secondary-fixed',
    healthFillClass: 'health-fill-alt',
    delayAnimation: true
  }
];

export default function App() {
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(1);
  const comboTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleHit = () => {
    setScore(prev => prev + (10 * combo));
    setCombo(prev => prev + 1);

    if (comboTimerRef.current) {
      clearTimeout(comboTimerRef.current);
    }
    
    // Reset combo if no hits within 2 seconds
    comboTimerRef.current = setTimeout(() => {
      setCombo(1);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (comboTimerRef.current) clearTimeout(comboTimerRef.current);
    };
  }, []);

  return (
    <div className="text-on-background bg-background h-screen w-screen flex flex-col relative overflow-hidden select-none">
      <Cursor />
      
      {/* Background Grid */}
      <div className="cyber-grid pointer-events-none"></div>

      <HUD score={score} combo={combo} />
      <Sidebar />

      {/* Main Game Arena */}
      <main className="flex-1 relative z-10 flex items-end justify-center md:pl-64 pb-20">
        <div className="flex justify-around w-full max-w-6xl px-4 items-end gap-8">
          {CHARACTERS.map((char) => (
            <Character 
              key={char.id} 
              data={char} 
              onHit={handleHit} 
            />
          ))}
        </div>
      </main>
    </div>
  );
}
