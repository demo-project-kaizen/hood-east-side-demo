import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X, Heart, Sparkles, Check } from 'lucide-react';
import { MenuItem } from '../../types';

// Import local product image assets for Vercel bundling compatibility
import universalPeopleDrinks from '../../assets/images/universal_people_drinks.png';
import universalPeopleDrinks1 from '../../assets/images/universal_peopledrinks1.png';
import yamiePanda from '../../assets/images/yamie_panda.png';
import universalPeopleDrinks2 from '../../assets/images/universal_peopledrinks2.png';
import yamiePanda2 from '../../assets/images/yamie_panda2.png';

interface InteractiveMenuProps {
  lang: 'ID' | 'EN';
}

export default function InteractiveMenu({ lang }: InteractiveMenuProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'coffee' | 'tea-elixirs' | 'comfort-food'>('all');
  const [activeBrand, setActiveBrand] = useState<'all' | 'universal-people' | 'yamie-panda'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [maxPrice, setMaxPrice] = useState<number>(60000);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  // Curated premium menu items under the 2 establish businesses at Hood East Side:
  // 1. Universal People (Cafe and Beverages) - Coffee, Matcha, Elixirs, Pastries
  // 2. Yamie Panda cabang Cipinang (Restoran Mi) - Authentic savory noodles and comfort pots
  const menuItems: MenuItem[] = [
    {
      id: 'h1',
      name: 'Concrete Latte (Signature)',
      category: 'coffee',
      brand: 'universal-people',
      price: 32000,
      description: lang === 'ID' 
        ? 'Es kopi susu signature dengan campuran activated charcoal manis alami, memberikan visual warna gradasi abu-abu estetik dan cita rasa creamy yang unik.'
        : 'Our signature iced milk latte with natural activated charcoal, offering a beautiful aesthetic gradient look and a uniquely smooth, creamy taste.',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=1000', 
      tags: ['Signature', 'Charcoal', 'Iced'],
      isSignature: true,
      ingredients: ['House Blend Espresso', 'Fresh Creamy Milk', 'Activated Bamboo Charcoal', 'Organic Palm Sugar Nectar'],
      calories: '210 kcal'
    },
    {
      id: 'h2',
      name: 'UP V60 Slow-Drip Coffee',
      category: 'coffee',
      brand: 'universal-people',
      price: 35000,
      description: lang === 'ID'
        ? 'Metode seduh manual v60 dengan biji kopi single origin pilihan lokal dan luar negeri. Menampilkan profil rasa buah yang bersih, beraroma manis, dan jernih.'
        : 'Classic v60 manual pour-over using single origin coffee beans meticulously sourced from Indonesian micro-lots. Exhibits clean body, complex floral notes, and a sweet lingering finish.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=1000', 
      tags: ['SlowBar', 'SingleOrigin', 'Hot/Iced'],
      ingredients: ['Single Origin Coffee Beans (Gayo/Kamojang)', 'Filter Water 92°C', 'Meticulous 3-Pour Technique'],
      calories: '2 kcal'
    },
    {
      id: 'u1',
      name: 'Ceremonial Iced Matcha Latte',
      category: 'tea-elixirs',
      brand: 'universal-people',
      price: 38000,
      description: lang === 'ID'
        ? 'Bubuk matcha ceremonial asli Kyoto jepang, dikocok secara tradisional dengan chasen bambu, dituangkan di atas susu krim dingin segar dalam cangkir "Universal People" ikonik.'
        : 'Premium ceremonial-grade stone-ground matcha imported directly from Uji, Kyoto. Traditional bamboo whisked and layered over rich organic milk in our iconic custom-printed cups.',
      image: universalPeopleDrinks, 
      tags: ['KyotoOrigin', 'Creamy', 'BestSeller'],
      isSignature: true,
      ingredients: ['Uji Kyoto Ceremonial Matcha', 'Warm Whisk Water', 'Cold Whole Milk', 'Subtle Organic Honey'],
      calories: '180 kcal'
    },
    {
      id: 'u2',
      name: 'Purple Aurora Sunset Elixir',
      category: 'tea-elixirs',
      brand: 'universal-people',
      price: 30000,
      description: lang === 'ID'
        ? 'Minuman segar penurun dahaga berupa teh bunga telang ungu bergradasi dengan air soda, perasan jeruk lemon segar, daun mint hancur, dan manis buah peach.'
        : 'A beautiful visual sparkling drink layered with blue butterfly pea flower tea, fresh lemon juice, dynamic soda, peach nectar, and hand-bruised garden mint leaves.',
      image: universalPeopleDrinks1, 
      tags: ['Mocktail', 'Visual', 'Soda-Based'],
      isSignature: true,
      ingredients: ['Organic Butterfly Pea Flower', 'Fresh Squeezed Lemon Juice', 'Classic Tonic Soda', 'White Peach Syrup', 'Mint Leaves'],
      calories: '95 kcal'
    },
    {
      id: 'y1',
      name: 'Yamie Panda Special Chicken Noodle',
      category: 'comfort-food',
      brand: 'yamie-panda',
      price: 38000,
      description: lang === 'ID'
        ? 'Mi yamie tipis kenyal otentik khas Yamie Panda, disajikan dengan suwiran ayam gurih, pangsit basah lembut, bakso sapi goreng renyah, kuah kaldu hangat terpisah, dan sawi hijau segar.'
        : 'Authentic springy hand-pulled Chinese-style noodles tossed in signature savory oils. Crowned with tender shredded seasoned chicken, soft wontons, crispy fried beef meatballs, and hot savory broth.',
      image: yamiePanda, 
      tags: ['Savory', 'WarmComfort', 'NoodleMaster'],
      isSignature: true,
      ingredients: ['Handmade Thin Egg Noodles', 'Seasoned Shredded Chicken', 'Steamed Chicken Wonton', 'Fried Beef Ball', 'Chives & Savory Broth'],
      calories: '420 kcal'
    },
    {
      id: 'u3',
      name: 'Universal Boba Milk Tea',
      category: 'tea-elixirs',
      brand: 'universal-people',
      price: 28000,
      description: lang === 'ID'
        ? 'Teh susu klasik yang diseduh dari daun teh hitam Assam premium, dipadukan dengan gula aren cair pekat dan boba tapioka kenyal manis buatan tangan.'
        : 'An timeless Taiwanese milk tea brewed from bold Assam black tea leaves, sweetened with dark molasses palm sugar, and loaded with soft chewy artisanal tapioca pearls.',
      image: universalPeopleDrinks2, 
      tags: ['Boba', 'Classic', 'Sweet'],
      ingredients: ['Assam Black Tea Leaf Infusion', 'Creamer Blend & Fresh Milk', 'Artisanal Brown Sugar Boba', 'Palm Nectar Syrup'],
      calories: '310 kcal'
    },
    {
      id: 'y2',
      name: 'Yamie Panda Sweet-Savory Noodles',
      category: 'comfort-food',
      brand: 'yamie-panda',
      price: 36000,
      description: lang === 'ID'
        ? 'Sajian mi ayam dengan bumbu kecap manis gurih otentik khas Yamie Panda, disajikan dengan topping pangsit goreng renyah dan bakso sapi kenyal hangat.'
        : 'Delicious springy noodles tossed in sweet savory soy-based sauce. Topped with seasoned shredded chicken, crunchy fried wonton skins, and savory beef meatballs.',
      image: yamiePanda2,
      tags: ['SweetSavory', 'Noodles', 'Favorite'],
      ingredients: ['Premium Springy Noodles', 'Yamie Panda Sweet Soy Blend', 'Seasoned Minced Chicken', 'Crispy Fried Wonton Skins', 'Beef Meatballs'],
      calories: '440 kcal'
    },
    {
      id: 'h4',
      name: 'Crispy Butter Croissant',
      category: 'comfort-food',
      brand: 'universal-people',
      price: 26000,
      description: lang === 'ID'
        ? 'Pastri croissant mentega Prancis klasik bertekstur remah renyah di luar dan sangat lembut serta berongga di dalam. Sempurna dicelupkan ke espresso panas.'
        : 'Traditional French-style butter pastry with crisp, golden-brown laminated outer layers and an incredibly light, airy honeycomb interior. Meticulously baked fresh daily.',
      image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000', 
      tags: ['Bakery', 'Crisp', 'PerfectCombo'],
      ingredients: ['Premium Normandy Butter', 'French Wheat Flour', 'Natural Yeast Starter', 'Light Egg Wash Glaze'],
      calories: '280 kcal'
    }
  ];

  // Filtering Logic
  const filteredItems = useMemo(() => {
    return menuItems.filter(item => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchBrand = activeBrand === 'all' || item.brand === activeBrand;
      const matchSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchPrice = item.price <= maxPrice;
      return matchCategory && matchBrand && matchSearch && matchPrice;
    });
  }, [activeCategory, activeBrand, searchQuery, maxPrice, lang]);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value);
  };

  return (
    <section 
      id="menu" 
      className="py-24 bg-[#FAF9F5] text-zinc-900 raw-grain border-t border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title area */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-mono tracking-widest text-ambient-orange uppercase block mb-3 font-bold">
            {lang === 'ID' ? 'MENU ANDALAN CIPINANG' : 'CURATED CIPINANG MENU'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-zinc-950 mb-4">
            {lang === 'ID' ? 'CITARASA DI HOOD EAST SIDE' : 'EXPLORE LOCAL FARE'}
          </h2>
          <p className="text-sm text-zinc-600">
            {lang === 'ID'
              ? 'Temukan aneka minuman & kopi premium dari Universal People serta cita rasa mi legendaris dari Yamie Panda cabang Cipinang yang hangat.'
              : 'Find the premium tea & coffee line from Universal People alongside legendary noodle recipes from Yamie Panda Cipinang branch.'}
          </p>
        </div>

        {/* Dynamic Filter Controls Panel */}
        <div className="bg-white border border-zinc-200 rounded-2xl p-6 mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Search Input */}
            <div className="lg:col-span-4 relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder={lang === 'ID' ? 'Cari menu (e.g. matcha, latte...)' : 'Search menu...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-10 pr-4 py-2.5 text-xs font-mono focus:outline-none focus:border-zinc-400 text-zinc-900 transition-colors placeholder:text-zinc-400"
                id="menu-search-input"
              />
            </div>

            {/* Price Filter Slider */}
            <div className="lg:col-span-4 flex flex-col space-y-1.5">
              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 font-bold">
                <span>{lang === 'ID' ? 'BATAS HARGA MAKSIMUM' : 'MAX PRICE THRESHOLD'}</span>
                <span className="text-zinc-900 font-bold">{formatPrice(maxPrice)}</span>
              </div>
              <input
                type="range"
                min="20000"
                max="60000"
                step="2000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-zinc-950 h-1 bg-zinc-100 rounded"
                id="menu-price-slider"
              />
            </div>

            {/* Brand filter icons */}
            <div className="lg:col-span-4 flex flex-col space-y-1.5">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-bold">{lang === 'ID' ? 'FILTER BERDASARKAN USAHA' : 'FILTER BY OUTLET'}</span>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveBrand('all')}
                  className={`flex-1 py-1.5 px-2 rounded-full border text-[10px] font-mono transition-all uppercase ${
                    activeBrand === 'all' 
                      ? 'bg-zinc-950 border-zinc-950 text-white font-bold' 
                      : 'bg-zinc-100 border-zinc-200 text-zinc-500 hover:text-zinc-900'
                  }`}
                >
                  {lang === 'ID' ? 'Semua' : 'All'}
                </button>
                <button
                  onClick={() => setActiveBrand('universal-people')}
                  className={`flex-1 py-1.5 px-3 rounded-full border text-[10px] font-mono transition-all uppercase ${
                    activeBrand === 'universal-people' 
                      ? 'bg-blue-100 border-blue-300 text-[#0D47A1] font-bold' 
                      : 'bg-zinc-100 border-zinc-200 text-zinc-500 hover:text-blue-850'
                  }`}
                >
                  Universal People
                </button>
                <button
                  onClick={() => setActiveBrand('yamie-panda')}
                  className={`flex-1 py-1.5 px-3 rounded-full border text-[10px] font-mono transition-all uppercase ${
                    activeBrand === 'yamie-panda' 
                      ? 'bg-red-100 border-red-300 text-red-900 font-bold' 
                      : 'bg-zinc-100 border-zinc-200 text-zinc-500 hover:text-red-800'
                  }`}
                >
                  Yamie Panda
                </button>
              </div>
            </div>

          </div>

          {/* Category Tabs inside panel */}
          <div className="flex flex-wrap gap-2 border-t border-zinc-100 mt-6 pt-6">
            {[
              { id: 'all', name: lang === 'ID' ? 'Semua Sajian' : 'All Offerings' },
              { id: 'coffee', name: lang === 'ID' ? 'Kopi & Espresso' : 'Espresso & Slow Bar' },
              { id: 'tea-elixirs', name: lang === 'ID' ? 'Matcha, Teh & Soda' : 'Matcha & Elixirs' },
              { id: 'comfort-food', name: lang === 'ID' ? 'Mi & Makanan Berat' : 'Noodles & Mains' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-5 py-2.5 text-xs font-mono rounded-full transition-all border ${
                  activeCategory === tab.id
                    ? 'bg-zinc-950 text-white font-bold border-zinc-950'
                    : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6" id="menu-cards-grid">
            {filteredItems.map((item) => {
              const brandColor = item.brand === 'universal-people' ? 'text-[#0D47A1]' : 'text-red-700';
              const brandHoverColor = item.brand === 'universal-people' ? 'group-hover:text-[#0D47A1]' : 'group-hover:text-red-700';
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="bg-white border border-zinc-200 hover:border-zinc-300 rounded-2xl sm:rounded-3xl overflow-hidden group transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-xs hover:shadow-md animate-[fadeIn_0.5s_ease-out]"
                >
                  <div className="relative aspect-square overflow-hidden bg-zinc-50">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Category overlay tags */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-wrap gap-1">
                      {item.isSignature && (
                        <span className="bg-amber-500 text-black text-[7px] sm:text-[8px] font-mono font-bold tracking-wider uppercase px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                          Sig
                        </span>
                      )}
                      <span className="bg-white/95 text-zinc-800 text-[7px] sm:text-[8px] font-bold tracking-wider uppercase px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full border border-zinc-200 shadow-xs">
                        {item.brand === 'universal-people' ? 'UP Cafe' : 'Yamie'}
                      </span>
                    </div>

                    {/* Favorite button */}
                    <button
                      onClick={(e) => toggleLike(item.id, e)}
                      className="absolute top-2 right-2 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/80 hover:bg-white text-zinc-800 flex items-center justify-center transition-all border border-zinc-200 shadow-sm"
                      aria-label="Like menu item"
                    >
                      <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${likedItems[item.id] ? 'fill-rose-500 text-rose-500' : 'text-zinc-400'}`} />
                    </button>
                  </div>

                  <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-1 sm:mb-2">
                        <h3 className={`text-xs sm:text-sm font-display font-bold transition-colors line-clamp-1 ${brandHoverColor}`}>
                          {item.name}
                        </h3>
                        <span className={`text-[11px] sm:text-xs font-mono font-bold shrink-0 ml-1.5 ${brandColor}`}>
                          {item.price / 1000}k
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="border-t border-zinc-100 mt-3 pt-2 flex items-center justify-between gap-1 flex-wrap">
                      <span className="text-[8px] sm:text-[9px] font-mono text-zinc-400 uppercase tracking-wider font-bold truncate max-w-[55px] sm:max-w-none">
                        {item.category.replace('-', ' ')}
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 group-hover:text-zinc-950 flex items-center space-x-0.5 transition-colors shrink-0">
                        <span>{lang === 'ID' ? 'Info Rasa' : 'Details'}</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-zinc-200 rounded-3xl">
            <SlidersHorizontal className="w-12 h-12 text-zinc-400 mx-auto mb-4" />
            <p className="text-sm text-zinc-500 font-mono">
              {lang === 'ID' ? 'Tidak ada menu yang sesuai kriteria.' : 'No menu offerings matches your criteria.'}
            </p>
            <button 
              onClick={() => {
                setActiveCategory('all');
                setActiveBrand('all');
                setSearchQuery('');
                setMaxPrice(60000);
              }}
              className="text-xs text-ambient-orange font-mono underline mt-2 block mx-auto font-bold"
            >
              {lang === 'ID' ? 'Reset Semua Filter' : 'Reset All Filters'}
            </button>
          </div>
        )}

        {/* Detailed Modal Popup (100% Informational, No Whatsapp Reservation Flow) */}
        {selectedItem && (() => {
          const brandBadge = selectedItem.brand === 'universal-people' 
            ? 'bg-blue-50 border-blue-200 text-[#0D47A1]' 
            : 'bg-red-50 border-red-200 text-red-800';

          const brandColor = selectedItem.brand === 'universal-people' 
            ? 'text-[#0D47A1]' 
            : 'text-red-700';

          const dotColor = selectedItem.brand === 'universal-people' 
            ? 'bg-[#0D47A1]' 
            : 'bg-red-600';

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm transition-opacity" id="menu-item-modal">
              <div className="bg-[#FAF9F5] border border-zinc-200 rounded-3xl w-full max-w-2xl overflow-hidden relative shadow-2xl animate-[fadeIn_0.2s_ease-out]">
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center border border-zinc-200 text-zinc-600 hover:text-zinc-950 transition-all z-10 shadow-sm"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
   
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative aspect-video md:aspect-auto md:h-full min-h-[250px] bg-zinc-100">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F5] via-transparent to-transparent md:hidden" />
                  </div>
   
                  <div className="p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className={`text-[9px] font-mono uppercase border px-2.5 py-1 rounded-full font-bold ${brandBadge}`}>
                          {selectedItem.brand === 'universal-people' ? 'Universal People Cafe' : 'Yamie Panda'}
                        </span>
                        {selectedItem.isSignature && (
                          <span className="text-[9px] font-mono uppercase bg-amber-500/10 text-amber-600 px-2.5 py-1 rounded-full font-bold border border-amber-200">
                            Signature
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-display font-bold text-zinc-950 mb-2">
                        {selectedItem.name}
                      </h3>
                      
                      <p className={`text-sm font-mono font-bold mb-4 ${brandColor}`}>
                        {formatPrice(selectedItem.price)}
                      </p>

                      <p className="text-xs text-zinc-600 leading-relaxed mb-6">
                        {selectedItem.description}
                      </p>

                      {/* Ingredients detail */}
                      {selectedItem.ingredients && (
                        <div className="mb-6">
                          <span className="text-[10px] font-mono text-zinc-400 uppercase block tracking-wider mb-2 font-bold">
                            {lang === 'ID' ? 'KOMPOSISI BAHAN' : 'CRAFT INGREDIENTS'}
                          </span>
                          <ul className="grid grid-cols-1 gap-1.5">
                            {selectedItem.ingredients.map((ing, i) => (
                              <li key={i} className="text-xs text-zinc-700 flex items-center space-x-2">
                                <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
                                <span>{ing}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <div className="border-t border-zinc-200 pt-6 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-mono text-zinc-400 uppercase block tracking-wider font-bold">Est. Calories</span>
                        <span className="text-xs text-zinc-950 font-mono font-bold">{selectedItem.calories || 'N/A'}</span>
                      </div>
                      
                      {/* Premium counter location tag */}
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-600">
                          {selectedItem.brand === 'universal-people' 
                            ? (lang === 'ID' ? 'KASIR UNIVERSAL PEOPLE' : 'UNIVERSAL PEOPLE COUNTER')
                            : (lang === 'ID' ? 'KASIR YAMIE PANDA' : 'YAMIE PANDA COUNTER')}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
