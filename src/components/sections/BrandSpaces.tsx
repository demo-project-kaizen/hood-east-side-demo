import React from 'react';
import { Coffee, Utensils, Clock, Sparkles, ChevronRight, Image as ImageIcon } from 'lucide-react';

// Import image assets for production bundling compatibility (Vercel, etc.)
import universalCoffee from '../../assets/images/universal_coffee.png';
import universalSneak from '../../assets/images/universal_sneak.png';
import universalGallery from '../../assets/images/universal_galery.png';
import universalNight from '../../assets/images/universal_night.png';
import yamiePanda from '../../assets/images/yamie_panda.png';
import yamiePanda2 from '../../assets/images/yamie_panda2.png';
import universalLandscape from '../../assets/images/universal_landscap.png';
import hoodOutdoor from '../../assets/images/hood_outdoor.png';

interface BrandSpacesProps {
  lang: 'ID' | 'EN';
}

export default function BrandSpaces({ lang }: BrandSpacesProps) {
  return (
    <section 
      id="brands" 
      className="py-24 bg-[#FAF9F5] text-zinc-900 border-t border-zinc-200 relative overflow-hidden"
    >
      {/* Subtle architectural backdrop lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-px h-full bg-zinc-900" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-zinc-900" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-zinc-900" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-zinc-900" />
        <div className="absolute top-2/3 left-0 w-full h-px bg-zinc-900" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[11px] font-mono tracking-widest text-ambient-orange uppercase block mb-3 font-bold">
            {lang === 'ID' ? 'KOLABORASI DUA BRAND' : 'TWO BRAND COLLABORATION'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-zinc-950 mb-4 uppercase">
            {lang === 'ID' ? 'Satu Ruang, Dua Cerita Rasa' : 'One Space, Two Flavors'}
          </h2>
          <p className="text-sm text-zinc-600 leading-relaxed">
            {lang === 'ID'
              ? 'HOOD EAST SIDE adalah wadah komunal yang menyatukan dua entitas kuliner berbeda di Cipinang. Nikmati kopi premium & matcha autentik dari Universal People bersanding harmonis dengan semangkuk mi hangat penuh kebahagiaan dari Yamie Panda.'
              : 'HOOD EAST SIDE is a communal enclave home to two distinct culinary destinations. Discover premium coffee & ceremonial matcha by Universal People alongside the legendary, steaming-hot noodle bowls by Yamie Panda.'}
          </p>
        </div>

        {/* Dual Brand Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Brand 1: Universal People (COBALT BLUE INDUSTRIAL THEME) */}
          <div className="flex flex-col justify-between bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/40 rounded-bl-full pointer-events-none group-hover:bg-blue-50/80 transition-colors" />
            
            <div>
              {/* Header Badge & Name */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-[#0D47A1] uppercase bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    CAFE & BEVERAGES
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-950 mt-3 tracking-tight">
                    Universal People
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#0D47A1]/5 flex items-center justify-center text-[#0D47A1] group-hover:bg-[#0D47A1] group-hover:text-white transition-all duration-300">
                  <Coffee className="w-5 h-5" />
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-600 mb-8 leading-relaxed">
                {lang === 'ID'
                  ? 'Sebuah coffee & tea sanctuary berkonsep industrial modern. Menyajikan kopi specialty filter bar, racikan Kyoto Ceremonial Matcha autentik, serta minuman soda segar bertema sunset elixirs untuk menemani fokus kerja atau santai sore Anda.'
                  : 'A modern industrial coffee & tea sanctuary. Serving specialty-grade hand brews, genuine Kyoto Ceremonial Matcha, and refreshing sunset-themed sparkling mocktails tailored for remote focus or casual evening winding down.'}
              </p>

              {/* Feature Highlights */}
              <div className="space-y-3 mb-8">
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-bold block mb-1">
                  {lang === 'ID' ? 'SOROTAN SPESIALISASI' : 'SPECIALTY OFFERS'}
                </span>
                
                {[
                  { title: lang === 'ID' ? 'Kyoto Ceremonial Matcha' : 'Kyoto Ceremonial Matcha', desc: lang === 'ID' ? 'Matcha grade tertinggi yang dikocok tradisional dengan Chasen bambu.' : 'Highest grade matcha traditionally whisked with Japanese bamboo Chasen.' },
                  { title: lang === 'ID' ? 'Concrete Latte (Signature)' : 'Concrete Latte (Signature)', desc: lang === 'ID' ? 'Es kopi susu arang bambu manis alami dengan warna gradasi abu estetik.' : 'Activated bamboo charcoal iced latte with natural sweet nectar and beautiful color.' },
                  { title: lang === 'ID' ? 'V60 Slow-Drip Filter Bar' : 'V60 Slow-Drip Filter Bar', desc: lang === 'ID' ? 'Seduhan manual dengan biji kopi single origin lokal pilihan.' : 'Manual pour-over showcasing complex flavors of premium local micro-lots.' }
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D47A1] mt-1.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-zinc-900 font-sans">{feat.title}</h4>
                      <p className="text-[11px] text-zinc-500 mt-0.5 leading-snug">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Operations Hours */}
              <div className="border-t border-zinc-100 pt-5 pb-8 flex items-center justify-between text-xs font-mono text-zinc-500">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-[#0D47A1]" />
                  <span>{lang === 'ID' ? 'Buka Setiap Hari' : 'Open Daily'}</span>
                </div>
                <span className="font-bold text-zinc-950">10:00 - 22:00</span>
              </div>
            </div>

            {/* Gallery Mockup inside cards (Real photo assets created by user) */}
            <div>
              <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-bold block mb-3">
                {lang === 'ID' ? 'GALERI UNIVERSAL PEOPLE' : 'UNIVERSAL PEOPLE GALLERY'}
              </span>
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-square rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 relative group/img">
                  <img 
                    src={universalCoffee} 
                    alt="Universal Coffee" 
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <ImageIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 relative group/img">
                  <img 
                    src={universalSneak} 
                    alt="Universal Sneak" 
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <ImageIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 relative group/img">
                  <img 
                    src={universalGallery} 
                    alt="Universal Gallery" 
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <ImageIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 relative group/img">
                  <img 
                    src={universalNight} 
                    alt="Universal Night" 
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <ImageIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Brand 2: Yamie Panda Cipinang (WARM RED ORIENTAL MODERN THEME) */}
          <div className="flex flex-col justify-between bg-white border border-zinc-200 rounded-3xl p-6 sm:p-8 hover:border-red-300 hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/40 rounded-bl-full pointer-events-none group-hover:bg-red-50/80 transition-colors" />
            
            <div>
              {/* Header Badge & Name */}
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-widest text-red-700 uppercase bg-red-50 px-2.5 py-1 rounded-full border border-red-100">
                    NOODLE HOUSE
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-zinc-950 mt-3 tracking-tight">
                    Yamie Panda Cipinang
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-red-700/5 flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white transition-all duration-300">
                  <Utensils className="w-5 h-5" />
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-zinc-600 mb-8 leading-relaxed">
                {lang === 'ID'
                  ? 'Destinasi mi legendaris dengan cita rasa manis-asin yang melimpah dan lezat. Menyajikan mi gandum segar buatan tangan bertesktur tipis kenyal dengan siraman minyak aromatik khas, suwiran ayam gurih melimpah, dan kuah kaldu hangat yang sedap.'
                  : 'The legendary noodle brand serving outstanding sweet and savory traditional recipes. Every bowl features hand-pulled, thin and springy wheat noodles tossed in signature aromatic oils, savory seasoned shredded chicken, and clear warm broth.'}
              </p>

              {/* Feature Highlights */}
              <div className="space-y-3 mb-8">
                <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-bold block mb-1">
                  {lang === 'ID' ? 'SOROTAN SPESIALISASI' : 'SPECIALTY OFFERS'}
                </span>
                
                {[
                  { title: lang === 'ID' ? 'Yamie Panda Special Chicken' : 'Yamie Panda Special Chicken', desc: lang === 'ID' ? 'Mi tipis kenyal bumbu gurih asin dengan suwiran ayam dan pangsit basah.' : 'Signature springy noodles with robust savory oil, seasoned chicken, and soft wontons.' },
                  { title: lang === 'ID' ? 'Yamie Manis-Gurih Classic' : 'Yamie Manis-Gurih Classic', desc: lang === 'ID' ? 'Paduan rasa manis gurih saus kecap khas dibalut taburan ayam cincang lezat.' : 'Delectable sweet and salty flavor profile combined with fried wonton skins.' },
                  { title: lang === 'ID' ? 'Steamed & Fried Wonton Pots' : 'Steamed & Fried Wonton Pots', desc: lang === 'ID' ? 'Sajian pangsit lembut yang dikukus matang atau digoreng super renyah.' : 'Delicious side dishes comprising hot steamed wontons or ultra-crispy skin bites.' }
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-700 mt-1.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-zinc-900 font-sans">{feat.title}</h4>
                      <p className="text-[11px] text-zinc-500 mt-0.5 leading-snug">{feat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Operations Hours */}
              <div className="border-t border-zinc-100 pt-5 pb-8 flex items-center justify-between text-xs font-mono text-zinc-500">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-red-700" />
                  <span>{lang === 'ID' ? 'Buka Setiap Hari' : 'Open Daily'}</span>
                </div>
                <span className="font-bold text-zinc-950">10:00 - 22:00</span>
              </div>
            </div>

            {/* Gallery Mockup inside cards */}
            <div>
              <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-bold block mb-3">
                {lang === 'ID' ? 'GALERI YAMIE PANDA' : 'YAMIE PANDA GALLERY'}
              </span>
              <div className="grid grid-cols-4 gap-2">
                <div className="aspect-square rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 relative group/img">
                  <img 
                    src={yamiePanda} 
                    alt="Yamie Panda Special" 
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <ImageIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 relative group/img">
                  <img 
                    src={yamiePanda2} 
                    alt="Yamie Panda 2" 
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <ImageIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
                {/* Fallbacks with beautiful placeholders or landscape */}
                <div className="aspect-square rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 relative group/img">
                  <img 
                    src={universalLandscape} 
                    alt="Yard Outdoor" 
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <ImageIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200 relative group/img">
                  <img 
                    src={hoodOutdoor} 
                    alt="Yard Table" 
                    className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <ImageIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
