import React from 'react';
import { ArrowRight, Coffee, Sparkles } from 'lucide-react';
import hoodOutdoor from '../../assets/images/hood_outdoor.png';
import hoodOutdoorSenja from '../../assets/images/hood_outdoor_senja.png';
import hoodNight from '../../assets/images/hood_night.png';

interface HeroProps {
  lang: 'ID' | 'EN';
  ambientVibe: 'dusk' | 'day' | 'night';
  setAmbientVibe: (vibe: 'dusk' | 'day' | 'night') => void;
}

export default function Hero({ lang, ambientVibe, setAmbientVibe }: HeroProps) {
  // Background and color parameters for each visual vibe state
  const vibes = {
    day: {
      accentText: lang === 'ID' ? 'Kreativitas Terbuka' : 'Open Creativity',
      title: 'HOOD EAST SIDE OUTDOOR',
      description: lang === 'ID' 
        ? 'Tempat berkumpul asri beralaskan kerikil alami di Cipinang. Memadukan kedai kopi & teh Universal People serta sajian kuliner mi Yamie Panda dalam satu area komunal berdesain industrial modern.'
        : 'A curated outdoor communal space in Cipinang featuring premium beach gravel and green elements. Home to Universal People Coffee & Tea and Yamie Panda under a modern industrial architectural design.',
      image: hoodOutdoor, // High-fidelity daytime courtyard
      glow: 'shadow-[0_0_50px_rgba(0,0,0,0.05)] border-zinc-200',
      badgeBg: 'bg-zinc-100 text-zinc-800 border-zinc-200',
      tagline: lang === 'ID' ? 'Slow Bar & Ruang Kreatif' : 'Slow Bar & Creative Co-Working Space',
    },
    dusk: {
      accentText: lang === 'ID' ? 'Suasana Sore' : 'Dusk Ambient',
      title: 'HOOD EAST SIDE AT DUSK',
      description: lang === 'ID'
        ? 'Nikmati suasana santai sore hari dengan pencahayaan hangat alami dan angin sepoi-sepoi yang pas untuk berdiskusi kreatif atau berkumpul santai bersama teman.'
        : 'Enjoy a relaxing late afternoon atmosphere with warm ambient lighting and a gentle breeze, perfect for casual conversations and productive work sessions.',
      image: hoodOutdoorSenja, // High-fidelity sunset/dusk courtyard
      glow: 'shadow-[0_0_50px_rgba(224,122,95,0.08)] border-amber-200/50',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      tagline: lang === 'ID' ? 'Cahaya Hangat & Musik Akustik' : 'Warm Ambient Backlight & Acoustic Lo-Fi',
    },
    night: {
      accentText: lang === 'ID' ? 'Suasana Malam' : 'Night Ambient',
      title: 'HOOD EAST SIDE AT NIGHT',
      description: lang === 'ID'
        ? 'Suasana malam yang tenang di bawah pendaran lampu neon Universal People yang khas. Tempat berkumpul yang pas setelah seharian beraktivitas.'
        : 'A calm evening atmosphere under the steady, iconic glow of the Universal People neon sign. Ideal for relaxing meetups after a busy day.',
      image: hoodNight, // High-fidelity Universal People neon night storefront
      glow: 'shadow-[0_0_50px_rgba(13,71,161,0.08)] border-blue-200/50',
      badgeBg: 'bg-blue-50 text-[#0D47A1] border-blue-100',
      tagline: lang === 'ID' ? 'Cahaya Neon & Ketukan Tenang' : 'Iconic Neon Glow & Late-Night Coffee Culture',
    }
  };

  const currentVibe = vibes[ambientVibe];

  return (
    <section 
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#FAF9F5] text-zinc-900 raw-grain"
    >
      {/* Background image overlay with dynamic cross-fade */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/90 to-[#FAF9F5]/30 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-[#FAF9F5]/10 z-10" />
        <img 
          src={currentVibe.image} 
          alt="Hood East Side Cafe Space Vibe"
          className="w-full h-full object-cover transition-all duration-1000 ease-in-out transform scale-105"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Modern Grid Patterns - Replicating QDay wireframe details with subtle dark lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-zinc-900 to-transparent" />
        <div className="absolute left-2/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-zinc-900 to-transparent" />
        <div className="absolute left-3/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-zinc-900 to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-900 to-transparent" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-900 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Area */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-left">
            
            {/* Ambient controller pill */}
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border text-[10px] font-mono tracking-widest uppercase transition-all duration-500 font-bold ${currentVibe.badgeBg}`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>{currentVibe.accentText}</span>
              </span>
              <div className="flex items-center space-x-1 bg-zinc-100 border border-zinc-200/80 p-1 rounded-full text-[10px] font-mono shadow-xs">
                <button 
                  onClick={() => setAmbientVibe('day')}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${ambientVibe === 'day' ? 'bg-zinc-950 text-white font-semibold shadow-xs' : 'text-zinc-500 hover:text-zinc-950'}`}
                >
                  {lang === 'ID' ? 'Pagi/Siang' : 'Day'}
                </button>
                <button 
                  onClick={() => setAmbientVibe('dusk')}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${ambientVibe === 'dusk' ? 'bg-ambient-orange text-white font-semibold shadow-xs' : 'text-zinc-500 hover:text-zinc-950'}`}
                >
                  {lang === 'ID' ? 'Senja' : 'Dusk'}
                </button>
                <button 
                  onClick={() => setAmbientVibe('night')}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${ambientVibe === 'night' ? 'bg-[#0D47A1] text-white font-semibold shadow-xs' : 'text-zinc-500 hover:text-zinc-950'}`}
                >
                  {lang === 'ID' ? 'Malam' : 'Night'}
                </button>
              </div>
            </div>

            {/* Giant Title */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-display font-bold tracking-tight text-zinc-950 leading-none">
              {currentVibe.title}
            </h1>

            <p className="text-sm sm:text-base text-zinc-600 max-w-xl leading-relaxed">
              {currentVibe.description}
            </p>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button 
                onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-zinc-950 hover:bg-zinc-800 text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-xs font-mono uppercase tracking-widest rounded-full font-bold flex items-center justify-center space-x-2 shadow-md shadow-zinc-950/10"
                id="hero-cta-visit"
              >
                <span>{lang === 'ID' ? 'KUNJUNGI LOKASI' : 'VISIT LOCATION'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a 
                href="#menu"
                className="px-8 py-4 bg-white hover:bg-zinc-50 border border-zinc-200 text-zinc-700 hover:text-zinc-950 transition-all duration-300 text-xs font-mono uppercase tracking-widest rounded-full font-bold flex items-center justify-center space-x-2 shadow-xs"
                id="hero-cta-menu"
              >
                <Coffee className="w-4 h-4 animate-bounce" />
                <span>{lang === 'ID' ? 'LIHAT MENU' : 'EXPLORE MENU'}</span>
              </a>
            </div>

            {/* Simple Operational Note */}
            <div className="border-t border-zinc-200/80 pt-6 mt-4 max-w-lg">
              <p className="text-xs text-zinc-400 font-mono tracking-wide uppercase font-bold">
                {lang === 'ID' ? 'OPERASIONAL & LOKASI' : 'OPERATION & LOCATION'}
              </p>
              <p className="text-sm text-zinc-700 mt-1.5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-ambient-orange" />
                <span>{lang === 'ID' ? 'Buka Setiap Hari: 07:00 - 23:00' : 'Open Daily: 07:00 - 23:00'}</span>
                <span className="text-zinc-300 font-bold">•</span>
                <span>Jl. Cipinang Jaya Raya No.4, Jakarta Timur</span>
              </p>
            </div>

          </div>

          {/* Right Column - Beautiful clean space photograph with cozy rounded corners */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-lg lg:max-w-full aspect-[16/10] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-zinc-200 shadow-xl shadow-zinc-950/10 group">
              <img 
                src={currentVibe.image} 
                alt="Hood Communal Space Courtyard View"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              
              {/* Elegant photo tag */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-zinc-700 uppercase bg-white/95 border border-zinc-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-sm shadow-sm font-bold">
                  {lang === 'ID' ? 'Tampilan Courtyard' : 'Courtyard View'}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#0D47A1] uppercase bg-white/95 border border-zinc-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-sm shadow-sm font-bold">
                  {ambientVibe === 'day' ? (lang === 'ID' ? 'Pagi/Siang' : 'Daylight') : ambientVibe === 'dusk' ? (lang === 'ID' ? 'Senja' : 'Dusk Vibe') : (lang === 'ID' ? 'Malam' : 'Night Vibe')}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
