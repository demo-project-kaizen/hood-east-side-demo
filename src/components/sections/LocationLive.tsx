import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, MessageSquare, Send, Check, Star } from 'lucide-react';
import { Review } from '../../types';

interface LocationLiveProps {
  lang: 'ID' | 'EN';
}

export default function LocationLive({ lang }: LocationLiveProps) {
  const [guestEmail, setGuestEmail] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestFeedback, setGuestFeedback] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'universal-people' | 'yamie-panda'>('universal-people');
  const [isSuccess, setIsSuccess] = useState(false);

  // Local storage guestbook feedbacks
  const [feedbacks, setFeedbacks] = useState<Review[]>([
    {
      id: 'f1',
      name: 'Anindya Lestari',
      role: 'Social Media Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      comment: lang === 'ID' 
        ? 'Vibe semi-industrial di sini estetik banget, pas buat foto-foto OOTD. Banyak sudut minimalis yang kece buat konten medsos!' 
        : 'The aesthetic semi-industrial vibe here is perfect for OOTD shots. So many photogenic minimal corners for my social media feed!',
      date: '2026-06-25'
    },
    {
      id: 'f2',
      name: 'Amelia Fitri',
      role: 'HR Specialist',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      comment: lang === 'ID'
        ? 'Iced Matcha Latte dengan gelas bermotif gadis biru ini super creamy dan menyegarkan pikiran di sela kesibukan pekerjaan HR saya!'
        : 'The creamy Iced Matcha Latte served in our custom blue girl illustration cups is incredibly refreshing during busy HR tasks!',
      date: '2026-06-29'
    },
    {
      id: 'f3',
      name: 'Bambang Prasetyo',
      role: 'Akuntan',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      comment: lang === 'ID'
        ? 'Suka banget kerja remote di sini. Kopinya enak banget, wifinya kenceng buat kirim laporan keuangan bulanan, dan tempatnya tenang.'
        : 'Love working remotely here. The coffee is top notch, the wifi is fast enough for sending monthly financial reports, and the place is so peaceful.',
      date: '2026-06-28'
    },
    {
      id: 'f4',
      name: 'Rian Hidayat',
      role: 'Brand Designer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      rating: 5,
      comment: lang === 'ID'
        ? 'Tempat favorit saya buat mendesain rona visual klien. Menu Yamie Panda-nya sangat lezat dan bumbu kuahnya gurih mantap.'
        : 'My absolute favorite space for client design sessions. Their signature Yamie Panda noodle bowl is incredibly savory and satisfying.',
      date: '2026-06-30'
    }
  ]);

  // Load feedbacks from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('hood_feedbacks');
    if (saved) {
      try {
        setFeedbacks(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmitFeedback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestEmail || !guestName || !guestFeedback) return;

    const newFeedback: Review = {
      id: Date.now().toString(),
      name: guestName,
      role: selectedCategory === 'universal-people' ? 'UP Cafe Fan' : 'Noodle Lover',
      avatar: `https://images.unsplash.com/photo-${1500000000000 + Math.floor(Math.random() * 999999)}?auto=format&fit=crop&q=80&w=200`,
      rating: 5,
      comment: guestFeedback,
      date: new Date().toISOString().split('T')[0]
    };

    const updated = [newFeedback, ...feedbacks];
    setFeedbacks(updated);
    localStorage.setItem('hood_feedbacks', JSON.stringify(updated));

    setGuestName('');
    setGuestEmail('');
    setGuestFeedback('');
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 4000);
  };

  return (
    <section 
      id="location" 
      className="py-24 bg-white text-zinc-900 raw-grain border-t border-zinc-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Column 1: Map Coordinates & Coordinates Mockup */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-ambient-orange uppercase block mb-3 font-bold">
                {lang === 'ID' ? 'TITIK LOKASI CIPINANG' : 'GEOGRAPHICAL LOCATION'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-zinc-950 mb-4">
                {lang === 'ID' ? 'KUNJUNGI LOKASI KAMI' : 'VISIT OUR LOCATION'}
              </h2>
              <p className="text-sm text-zinc-600 max-w-xl mb-6 leading-relaxed">
                {lang === 'ID'
                  ? 'Kami berlokasi di area strategis Cipinang Jatinegara, Jakarta Timur. Silakan mampir untuk menikmati kopi pilihan atau sajian mi hangat bersama teman.'
                  : 'We are located strategically in Cipinang Jatinegara, East Jakarta. Stop by to enjoy specialty coffee, Kyoto matcha, or hot noodle bowls.'}
              </p>

              {/* Google Maps Embed */}
              <div className="relative w-full h-[340px] bg-zinc-100 border border-zinc-200 rounded-3xl overflow-hidden shadow-sm group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2917714152774!2d106.8813033!3d-6.223847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f33f677d33d5%3A0x6b4fb24e39ec2f87!2sYamie%20Panda%20Cipinang!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) brightness(0.98)' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HOOD EAST SIDE Map"
                  className="w-full h-full"
                ></iframe>
                
                {/* Custom float overlay button for maps navigation */}
                <a
                  href="https://maps.app.goo.gl/3fR658Uq7hB76G5R9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 left-4 bg-zinc-950 hover:bg-zinc-800 text-white transition-all duration-300 border border-zinc-800 rounded-full px-4 py-2 text-[10px] font-mono uppercase tracking-wider flex items-center space-x-1.5 z-20 shadow-lg"
                >
                  <Navigation className="w-3 h-3 text-ambient-orange" />
                  <span>{lang === 'ID' ? 'Petunjuk Arah' : 'Get Directions'}</span>
                </a>
              </div>

            </div>

          </div>

          {/* Column 2: Guestbook feedbacks & RSVP Form */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="bg-[#FAF9F5] border border-zinc-200 p-6 sm:p-8 rounded-3xl shadow-sm h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <MessageSquare className="w-5 h-5 text-zinc-900" />
                  <span className="text-[11px] font-mono tracking-widest text-zinc-500 uppercase font-bold">
                    {lang === 'ID' ? 'BUKU TAMU KOMUNITAS' : 'CREATIVE COMMUNITY LOG'}
                  </span>
                </div>

                {/* Submission Form */}
                <form onSubmit={handleSubmitFeedback} className="space-y-4 mb-8">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider mb-1 font-bold">
                        {lang === 'ID' ? 'NAMA LENGKAP' : 'YOUR NAME'}
                      </label>
                      <input
                        type="text"
                        required
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-white border border-zinc-200 rounded-full px-4 py-2.5 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider mb-1 font-bold">
                        {lang === 'ID' ? 'EMAIL AKTIF' : 'EMAIL ADDRESS'}
                      </label>
                      <input
                        type="email"
                        required
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        placeholder="john@creative.com"
                        className="w-full bg-white border border-zinc-200 rounded-full px-4 py-2.5 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors"
                      />
                    </div>
                  </div>
 
                  <div>
                    <label className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider mb-1 font-bold">
                      {lang === 'ID' ? 'FAVORIT KAMU DI HOOD EAST SIDE' : 'YOUR FAVORITE ENCLAVE'}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: 'universal-people', label: 'Universal People' },
                        { id: 'yamie-panda', label: 'Yamie Panda' }
                      ].map((b) => (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setSelectedCategory(b.id as any)}
                          className={`py-1.5 rounded-full border text-[9px] font-mono uppercase transition-all ${
                            selectedCategory === b.id
                              ? 'bg-zinc-950 border-zinc-950 text-white font-bold'
                              : 'bg-white border-zinc-200 text-zinc-500 hover:text-zinc-900'
                          }`}
                        >
                          {b.label}
                        </button>
                      ))}
                    </div>
                  </div>
 
                  <div>
                    <label className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider mb-1 font-bold">
                      {lang === 'ID' ? 'FEEDBACK ATAU CATATAN RUANG' : 'SPACE NOTE / FEEDBACK'}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={guestFeedback}
                      onChange={(e) => setGuestFeedback(e.target.value)}
                      placeholder={lang === 'ID' ? 'Tulis tanggapan atau pengalaman Anda tentang tempat kami...' : 'Type your design audit, spatial feelings, or blend feedback...'}
                      className="w-full bg-white border border-zinc-200 rounded-2xl px-4 py-3 text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors resize-none"
                    />
                  </div>
 
                  <button
                    type="submit"
                    className="w-full py-3 bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-xs font-mono uppercase tracking-widest rounded-full flex items-center justify-center space-x-2 transition-all shadow-sm"
                  >
                    <span>{lang === 'ID' ? 'KIRIM FEEDBACK' : 'SUBMIT SPACE NOTE'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
 
                  {isSuccess && (
                    <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center space-x-2 text-emerald-700 text-xs font-mono">
                      <Check className="w-4 h-4 shrink-0" />
                      <span>{lang === 'ID' ? 'Feedback berhasil dikirim ke log komunitas!' : 'Log entry saved successfully!'}</span>
                    </div>
                  )}
                </form>
              </div>

              {/* Feedbacks Stream List */}
              <div className="border-t border-zinc-200 pt-6">
                <span className="text-[9px] font-mono text-zinc-400 uppercase block tracking-widest mb-4 font-bold">
                  {lang === 'ID' ? 'LOG FEEDBACK KOMUNITAS TERBARU' : 'RECENT VISITOR LOG ENTRIES'}
                </span>
                
                <div className="space-y-4 max-h-[220px] overflow-y-auto pr-2">
                  {feedbacks.map((f) => {
                    const getRoleColor = (role: string) => {
                      if (role.toLowerCase().includes('coffee') || role.toLowerCase().includes('social')) return 'text-amber-700';
                      if (role.toLowerCase().includes('matcha') || role.toLowerCase().includes('hr')) return 'text-[#0D47A1]';
                      return 'text-red-700';
                    };

                    return (
                      <div key={f.id} className="bg-white border border-zinc-150 p-3.5 rounded-2xl flex items-start space-x-3 shadow-2xs">
                        <img
                          src={f.avatar}
                          alt={f.name}
                          className="w-8 h-8 rounded-full object-cover border border-zinc-200 shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <span className="text-[11px] font-bold text-zinc-950 font-display">{f.name}</span>
                            <span className="text-[8px] font-mono text-zinc-400">{f.date}</span>
                          </div>
                          <span className={`text-[8px] font-mono uppercase block tracking-wider leading-none mt-0.5 font-bold ${getRoleColor(f.role)}`}>
                            {f.role}
                          </span>
                          <p className="text-[11px] text-zinc-600 leading-relaxed mt-1.5">
                            "{f.comment}"
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
