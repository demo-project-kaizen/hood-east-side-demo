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

  return (
    <div className="bg-[#FAF9F5] text-zinc-800 min-h-screen selection:bg-ambient-orange selection:text-zinc-900 font-sans overflow-x-hidden relative">
      
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
