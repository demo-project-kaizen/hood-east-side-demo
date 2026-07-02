import React from 'react';
import { Instagram, MessageCircle, Twitter, MapPin, Phone, Mail, ShieldAlert } from 'lucide-react';

interface FooterProps {
  lang: 'ID' | 'EN';
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer 
      id="main-footer"
      className="bg-white text-zinc-900 border-t border-zinc-200 pt-16 pb-12 raw-grain relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Segment: Logo and Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-zinc-950 border border-zinc-950 px-4 py-2 rounded-xl flex flex-col items-center justify-center">
                <span className="font-display font-bold text-lg tracking-widest text-white leading-none">
                  hood
                </span>
                <div className="flex justify-between w-full text-[6px] tracking-widest text-zinc-400 font-mono mt-0.5 uppercase">
                  <span>east</span>
                  <span>side</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase leading-none font-bold">cipinang, jakarta</span>
                <span className="text-[9px] font-sans text-ambient-orange font-medium tracking-wide mt-1">slow bar & social space</span>
              </div>
            </div>

            <p className="text-xs text-zinc-600 max-w-sm leading-relaxed">
              {lang === 'ID'
                ? 'Titik kumpul asik di Cipinang yang memadukan kopi premium, kesegaran teh artisanal, dan kelezatan mi legendaris di satu ruang sosial yang nyaman.'
                : 'A neighborhood hangout spot in Cipinang combining premium coffee, artisanal tea, and cozy dining in one comfortable social space.'}
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                aria-label="Follow Hood on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                aria-label="Contact Hood on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                aria-label="Follow Hood on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-2 flex flex-col space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-bold">
              {lang === 'ID' ? 'KONSEPTUAL' : 'EXPLORE'}
            </span>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li><a href="#hero" className="hover:text-zinc-950 transition-colors">{lang === 'ID' ? 'Beranda' : 'Home'}</a></li>
              <li><a href="#brands" className="hover:text-zinc-950 transition-colors">{lang === 'ID' ? 'Dua Brand' : 'Two Brands'}</a></li>
              <li><a href="#menu" className="hover:text-zinc-950 transition-colors">{lang === 'ID' ? 'Daftar Menu' : 'Menu'}</a></li>
              <li><a href="#location" className="hover:text-zinc-950 transition-colors">{lang === 'ID' ? 'Lokasi & Kontak' : 'Location & Contact'}</a></li>
            </ul>
          </div>

          {/* Concept Brands Column */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-bold">
              {lang === 'ID' ? 'KOLEKSI MENU' : 'MENU SECTIONS'}
            </span>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#0D47A1] rounded-full" />
                <span><strong>Universal People</strong> — Cafe & Beverages</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-red-700 rounded-full" />
                <span><strong>Yamie Panda Cipinang</strong> — Restoran Mi</span>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-bold">
              {lang === 'ID' ? 'KONTAK & INFORMASI' : 'CONTACT INFO'}
            </span>
            <ul className="space-y-2 text-xs text-zinc-600">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                <span>Jl. Cipinang Jaya Raya No.4, Jatinegara, Jakarta Timur</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                <span>cipinang@hoodeastside.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Segment: Copyright & Aturan 4 Portfolio Legal Disclaimer */}
        <div className="border-t border-zinc-100 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Copyright section */}
          <div className="text-center lg:text-left">
            <p className="text-xs text-zinc-400 font-mono font-bold">
              © 2026 HOOD EAST SIDE. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[10px] text-zinc-500 font-sans mt-1">
              Developed as an elite React & Tailwind visual mockup representation.
            </p>
          </div>

          {/* Mandatory Aturan 4 Legal Portfolio Disclaimer (Subtle, low-opacity, readable) */}
          <div 
            id="footer-portfolio-disclaimer"
            className="text-center lg:text-right max-w-xs text-[10px] font-mono text-zinc-400 leading-relaxed"
          >
            <span>UI/UX Design Mockup. No commercial affiliation. Concept portfolio only.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
