import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Coffee, Compass, Sparkles, MapPin, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: lang === 'ID' ? 'Dua Brand' : 'Two Brands', href: '#brands' },
    { name: lang === 'ID' ? 'Menu Kurasi' : 'Craft Menu', href: '#menu' },
    { name: lang === 'ID' ? 'Lokasi & Waktu' : 'Location', href: '#location' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-zinc-200/60 py-4 shadow-sm' 
          : 'bg-gradient-to-b from-[#FAF9F5]/80 to-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Replicated styled typography as seen in reference */}
        <a href="#hero" className="flex items-center space-x-3 group" id="nav-brand">
          <div className="relative bg-zinc-950 border border-zinc-900 px-4 py-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 shadow-md">
            <span className="font-display font-bold text-lg tracking-widest text-white leading-none">
              hood
            </span>
            <div className="flex justify-between w-full text-[6px] tracking-widest text-zinc-400 font-mono mt-0.5 uppercase">
              <span>east</span>
              <span>side</span>
            </div>
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-[10px] font-mono tracking-widest text-zinc-600 uppercase leading-tight font-bold">cipinang, jakarta</span>
            <span className="text-[9px] font-sans text-ambient-orange font-semibold tracking-wide">slow bar & social space</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors duration-200 relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ambient-orange transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Action, Lang & Disclaimer */}
        <div className="hidden lg:flex items-center space-x-6">
          {/* Top Navbar Legal Disclaimer Badge (Aturan 4) */}
          <div 
            id="nav-portfolio-badge"
            className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full border border-zinc-200 bg-zinc-100 text-[10px] text-zinc-600 font-mono tracking-wide shadow-xs"
          >
            <ShieldAlert className="w-3 h-3 text-ambient-orange animate-pulse" />
            <span>PORTFOLIO DESIGN</span>
          </div>

          {/* Lang Selector */}
          <div className="flex items-center space-x-1 border border-zinc-200 rounded-full p-0.5 bg-zinc-100/80 text-xs font-mono shadow-xs">
            <button
              onClick={() => setLang('ID')}
              className={`px-3 py-1 rounded-full transition-all duration-200 ${
                lang === 'ID' 
                  ? 'bg-zinc-950 text-white font-semibold' 
                  : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              ID
            </button>
            <button
              onClick={() => setLang('EN')}
              className={`px-3 py-1 rounded-full transition-all duration-200 ${
                lang === 'EN' 
                  ? 'bg-zinc-950 text-white font-semibold' 
                  : 'text-zinc-500 hover:text-zinc-800'
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2.5 bg-zinc-950 text-white hover:bg-zinc-800 transition-all duration-300 text-xs font-mono uppercase tracking-wider rounded-full font-bold shadow-sm"
            id="nav-btn-booking"
          >
            {lang === 'ID' ? 'Kunjungi Kami' : 'Visit Space'}
          </button>
        </div>

        {/* Mobile menu and Lang triggers */}
        <div className="flex lg:hidden items-center space-x-3">
          <div className="flex items-center space-x-1 border border-zinc-200 rounded-full p-0.5 bg-zinc-100/85 text-[10px] font-mono">
            <button onClick={() => setLang('ID')} className={`px-2 py-0.5 rounded-full ${lang === 'ID' ? 'bg-zinc-950 text-white font-semibold' : 'text-zinc-500'}`}>ID</button>
            <button onClick={() => setLang('EN')} className={`px-2 py-0.5 rounded-full ${lang === 'EN' ? 'bg-zinc-950 text-white font-semibold' : 'text-zinc-500'}`}>EN</button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-zinc-600 hover:text-zinc-950 rounded-md hover:bg-zinc-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 top-[73px] z-40 bg-[#FAF9F5]/98 backdrop-blur-lg border-t border-zinc-200 transition-all duration-500 lg:hidden ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="px-6 py-8 flex flex-col space-y-6 h-full justify-between pb-24">
          <div className="flex flex-col space-y-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-2">
              Navigation Menu
            </p>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-display text-zinc-700 hover:text-zinc-950 py-2 flex items-center justify-between group border-b border-zinc-100"
              >
                <span>{item.name}</span>
                <span className="w-1.5 h-1.5 bg-ambient-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>

          <div className="flex flex-col space-y-4">
            <div className="p-4 bg-zinc-100 rounded-2xl border border-zinc-200 text-center shadow-xs">
              <span className="text-[11px] font-mono text-zinc-400 block mb-2">PORTFOLIO DESIGN PROJECT</span>
              <p className="text-[10px] text-zinc-600 leading-relaxed font-sans">
                "This website is a UI/UX portfolio design concept and is not affiliated with any real business entity."
              </p>
            </div>

            <button
              onClick={() => {
                setIsOpen(false);
                document.getElementById('location')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full py-3 bg-zinc-950 text-white hover:bg-zinc-800 transition-all text-xs font-mono uppercase tracking-widest rounded-full font-semibold text-center shadow-sm"
            >
              {lang === 'ID' ? 'Kunjungi Kami' : 'Visit Space'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
