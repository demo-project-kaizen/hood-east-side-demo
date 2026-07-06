import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Coffee, Compass, Sparkles, MapPin, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  lang: 'ID' | 'EN';
  setLang: (lang: 'ID' | 'EN') => void;
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDisclaimerDismissed, setIsDisclaimerDismissed] = useState(false);

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuItems = [
    { name: lang === 'ID' ? 'Brand Spaces' : 'Brand Spaces', href: '#brands' },
    { name: lang === 'ID' ? 'Menu Kurasi' : 'Craft Menu', href: '#menu' },
    { name: lang === 'ID' ? 'Lokasi & Waktu' : 'Location', href: '#location' },
  ];

  return (
    <>
      <header 
        id="main-navbar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isOpen
            ? 'bg-[#FAF9F5] border-b border-zinc-200/80 shadow-sm'
            : scrolled 
              ? 'bg-[#FAF9F5]/90 backdrop-blur-md border-b border-zinc-200/60 shadow-sm' 
              : 'bg-gradient-to-b from-[#FAF9F5]/80 to-transparent'
        }`}
      >
        {/* Absolute top legal portfolio banner inside fixed header to prevent overlapping */}
        {!isDisclaimerDismissed && (
          <div className="bg-zinc-100/95 border-b border-zinc-200/80 py-2 px-4 backdrop-blur-xs">
            <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] font-mono text-zinc-500">
              <div className="flex items-center space-x-2 mr-2">
                <ShieldAlert className="w-3.5 h-3.5 text-ambient-orange shrink-0 animate-pulse" />
                <span className="leading-tight text-left">
                  {lang === 'ID' 
                    ? 'Konsep desain portofolio UI/UX. Tidak terafiliasi dengan entitas bisnis nyata mana pun.' 
                    : 'UI/UX portfolio design concept. Not affiliated with any commercial establishment.'}
                </span>
              </div>
              <button 
                onClick={() => setIsDisclaimerDismissed(true)}
                className="text-zinc-600 hover:text-zinc-950 font-mono cursor-pointer pl-4 shrink-0 hover:underline"
              >
                [Dismiss]
              </button>
            </div>
          </div>
        )}

        {/* Main Navbar Row Container - Padding applied directly here to allow disclaimer to stack perfectly */}
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled || isOpen ? 'py-2 sm:py-2.5' : 'py-3 sm:py-4'
        }`}>
          {/* Brand Logo - Elegantly minimal luxury typography */}
          <a href="#hero" className="flex items-center space-x-2" id="nav-brand">
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-lg tracking-[0.2em] text-zinc-950 uppercase select-none">
                hood
              </span>
              <span className="text-[7px] tracking-[0.3em] text-zinc-400 font-mono mt-0.5 uppercase font-bold select-none">
                east side
              </span>
            </div>
            <div className="h-6 w-[1px] bg-zinc-200 mx-1.5 hidden sm:block" id="logo-divider" />
            <div className="hidden sm:flex flex-col">
              <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase leading-none font-bold">cipinang, jakarta</span>
              <span className="text-[9px] font-sans text-zinc-400 font-semibold tracking-wide mt-0.5">{lang === 'ID' ? 'ruang sosial & kopi' : 'slow bar & social'}</span>
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
      </header>

      {/* Mobile Drawer (placed outside <header> to avoid CSS stacking context & backdrop-filter bugs) */}
      <div 
        className={`fixed inset-0 z-40 bg-[#FAF9F5] transition-all duration-500 lg:hidden overflow-y-auto ${
          isOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className={`px-6 pb-12 flex flex-col justify-between space-y-8 min-h-full transition-all duration-500 ${
          isDisclaimerDismissed ? 'pt-[76px]' : 'pt-[116px]'
        }`}>
          <div className="flex flex-col space-y-4">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 border-b border-zinc-200 pb-2">
              {lang === 'ID' ? 'MENU NAVIGASI' : 'NAVIGATION MENU'}
            </p>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-display text-zinc-700 hover:text-zinc-950 py-2.5 flex items-center justify-between group border-b border-zinc-100"
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
    </>
  );
}
