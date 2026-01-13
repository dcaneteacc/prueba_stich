
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { Club } from '../types';

const MOCK_CLUBS: Club[] = [
  {
    id: '1',
    name: 'Speed Runners MX',
    location: 'Ciudad de México',
    runners: 1200,
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop',
    isFollowing: false,
    category: 'Populares'
  },
  {
    id: '2',
    name: 'Cerro de la Silla Trail',
    location: 'Monterrey, NL',
    runners: 850,
    image: 'https://images.unsplash.com/photo-1516245556808-7d99c9a0d369?q=80&w=2070&auto=format&fit=crop',
    isFollowing: true,
    category: 'Trail'
  },
  {
    id: '3',
    name: 'Midnight Striders',
    location: 'Guadalajara',
    runners: 2400,
    image: 'https://images.unsplash.com/photo-1533560271127-9fb61b4bc153?q=80&w=2070&auto=format&fit=crop',
    isFollowing: false,
    category: 'Populares'
  }
];

const CATEGORIES = ['Populares', 'Cercanos', 'Mis Clubes', 'Trail'];

const ClubSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedCat, setSelectedCat] = useState('Populares');

  return (
    <div className="flex flex-col h-screen bg-white dark:bg-[#111418]">
      <header className="sticky top-0 z-20 bg-white/80 dark:bg-[#111418]/80 backdrop-blur-md px-4 pt-10 pb-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="text-[#111418] dark:text-white flex size-10 items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight flex-1 text-center pr-10">Selección de Clubes</h2>
      </header>

      <div className="flex-1 overflow-y-auto pb-32">
        <div className="px-4 py-4">
          <div className="flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-4 h-12">
            <span className="material-symbols-outlined text-[#617589]">search</span>
            <input 
              className="flex-1 border-none bg-transparent focus:ring-0 text-base placeholder:text-[#617589]" 
              placeholder="Buscar clubes de running"
            />
          </div>
        </div>

        <div className="flex gap-3 px-4 py-2 overflow-x-auto hide-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`flex h-9 shrink-0 items-center justify-center rounded-full px-5 text-sm font-medium transition-all ${
                selectedCat === cat ? 'bg-primary text-white' : 'bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <h2 className="text-[#111418] dark:text-white text-[22px] font-bold px-4 pb-1 pt-6">Recomendados para ti</h2>
        <p className="px-4 text-[#617589] text-sm mb-4">Basado en tu nivel y ubicación</p>

        <div className="flex flex-col gap-4 px-4">
          {MOCK_CLUBS.map(club => (
            <div key={club.id} className="flex items-stretch justify-between gap-4 rounded-xl bg-white dark:bg-gray-900 p-4 shadow-sm border border-gray-100 dark:border-gray-800">
              <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-primary text-xs font-bold uppercase tracking-wider">{club.location}</p>
                  <p className="text-[#111418] dark:text-white text-lg font-bold leading-tight">{club.name}</p>
                  <div className="flex items-center gap-1 text-[#617589] text-sm">
                    <span className="material-symbols-outlined text-base">groups</span>
                    <span>{(club.runners / 1000).toFixed(1)}k corredores</span>
                  </div>
                </div>
                <button className={`flex min-w-[100px] items-center justify-center rounded-full h-10 px-5 gap-2 text-sm font-semibold transition-all ${
                  club.isFollowing ? 'bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white' : 'bg-primary text-white active:scale-95'
                }`}>
                  <span className="material-symbols-outlined text-lg">{club.isFollowing ? 'check' : 'add'}</span>
                  <span>{club.isFollowing ? 'Siguiendo' : 'Unirse'}</span>
                </button>
              </div>
              <div 
                className="w-32 bg-center bg-cover rounded-xl shrink-0" 
                style={{ backgroundImage: `url(${club.image})` }}
              />
            </div>
          ))}

          <div className="mt-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-primary">Ver clubes cercanos</h3>
              <span className="material-symbols-outlined text-primary">map</span>
            </div>
            <div className="w-full h-32 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden relative">
              <img 
                className="w-full h-full object-cover opacity-60" 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Map preview"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">Abrir Mapa</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ClubSelection;
