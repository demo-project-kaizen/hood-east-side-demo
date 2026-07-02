import React, { useState } from 'react';
import { ShieldAlert } from 'lucide-react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import BrandSpaces from './components/sections/BrandSpaces';
import InteractiveMenu from './components/sections/InteractiveMenu';
import LocationLive from './components/sections/LocationLive';
import Footer from './components/sections/Footer';

export default function App() {
  const [lang, setLang] = useState<'ID' | 'EN'>('ID');
  const [ambientVibe, setAmbientVibe] = useState<'dusk' | 'day' | 'night'>('dusk');
  const [isDisclaimerDismissed, setIsDisclaimerDismissed] = useState(false);

  return (
    <div className="bg-[#FAF9F5] text-zinc-800 min-h-screen selection:bg-ambient-orange selection:text-zinc-900 font-sans overflow-x-hidden relative">
      
      {/* Absolute top legal portfolio banner */}
      {!isDisclaimerDismissed && (
        <div className="bg-zinc-100 border-b border-zinc-200 py-2 px-4 sticky top-0 z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <div className="flex items-center space-x-2">
              <ShieldAlert className="w-3.5 h-3.5 text-ambient-orange shrink-0" />
              <span>
                UI/UX portfolio design concept. Not affiliated with any commercial establishment.
              </span>
            </div>
            <button 
              onClick={() => setIsDisclaimerDismissed(true)}
              className="text-zinc-600 hover:text-zinc-900 font-mono cursor-pointer pl-4 shrink-0 hover:underline"
            >
              [Dismiss]
            </button>
          </div>
        </div>
      )}

      {/* Primary Navigation bar */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
      />

      {/* Main Sections */}
      <main className="relative">
        <Hero 
          lang={lang} 
          ambientVibe={ambientVibe}
          setAmbientVibe={setAmbientVibe}
        />
        
        <BrandSpaces
          lang={lang}
        />
        
        <InteractiveMenu 
          lang={lang} 
        />
        
        <LocationLive 
          lang={lang} 
        />
      </main>

      {/* Primary Site Footer */}
      <Footer 
        lang={lang} 
      />

    </div>
  );
}
