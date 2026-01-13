
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import { RunningEvent } from '../types';

const MOCK_EVENTS: RunningEvent[] = [
  {
    id: '1',
    title: 'Maratón de la Ciudad',
    location: 'Parque Central, CDMX',
    date: '24 Oct',
    image: 'https://images.unsplash.com/photo-1530549387631-ce01ff9946a3?q=80&w=2070&auto=format&fit=crop',
    distances: ['42K', '21K'],
    isPopular: true,
  },
  {
    id: '2',
    title: 'Carrera Nocturna 10K',
    location: 'Paseo de la Reforma',
    date: '05 Nov',
    image: 'https://images.unsplash.com/photo-1547483238-2cbf429147bc?q=80&w=2070&auto=format&fit=crop',
    distances: ['10K'],
    isNew: true,
    slotsLeft: 20
  },
  {
    id: '3',
    title: 'Trail Running Series',
    location: 'Sierra Madre, MTY',
    date: '12 Nov',
    image: 'https://images.unsplash.com/photo-1533560271127-9fb61b4bc153?q=80&w=2070&auto=format&fit=crop',
    distances: ['5K', '15K', '25K'],
  }
];

const EventExplorer: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-32">
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-lg border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center p-4 justify-between">
          <div className="flex size-10 items-center justify-center">
            <span className="material-symbols-outlined text-[#111418] dark:text-white">search</span>
          </div>
          <h2 className="text-[#111418] dark:text-white text-lg font-bold flex-1 text-center">Explorador</h2>
          <button className="flex size-10 items-center justify-end">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
        <div className="flex gap-3 p-4 overflow-x-auto hide-scrollbar">
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 shadow-sm">
            <p className="text-sm font-medium">Próximos</p>
            <span className="material-symbols-outlined text-[20px]">expand_more</span>
          </button>
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5">
            <p className="text-sm font-medium">Este mes</p>
            <span className="material-symbols-outlined text-[20px]">calendar_today</span>
          </button>
          {['5K', '10K', '21K'].map(d => (
            <button key={d} className="flex h-10 shrink-0 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-5">
              <p className="text-sm font-medium">{d}</p>
            </button>
          ))}
        </div>
      </header>

      <main className="p-4 space-y-4">
        {MOCK_EVENTS.map(event => (
          <div 
            key={event.id}
            onClick={() => navigate(`/event/${event.id}`)}
            className="flex flex-col rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 border border-gray-50 dark:border-gray-800 cursor-pointer transition-transform active:scale-[0.98]"
          >
            <div className="relative w-full aspect-[16/9] bg-center bg-cover" style={{ backgroundImage: `url(${event.image})` }}>
              {event.isPopular && (
                <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">POPULAR</div>
              )}
              {event.isNew && (
                <div className="absolute top-3 left-3 bg-[#4ade80] text-black text-[10px] font-bold px-2 py-1 rounded-full uppercase">NUEVO</div>
              )}
              <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-black/80 backdrop-blur shadow-sm px-3 py-1 rounded-full text-xs font-semibold">
                {event.date}
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4">
              <p className="text-[#111418] dark:text-white text-xl font-bold tracking-tight">{event.title}</p>
              <div className="flex items-center gap-1 text-[#617589] dark:text-gray-400">
                <span className="material-symbols-outlined text-sm">location_on</span>
                <p className="text-sm">{event.location}</p>
              </div>
              <div className="flex items-center gap-2 mt-1">
                {event.distances.map(d => (
                  <span key={d} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-[10px] font-bold text-gray-600 dark:text-gray-400">{d}</span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4">
                {event.slotsLeft ? (
                  <div className="flex flex-col">
                    <p className="text-[10px] text-gray-400 uppercase font-bold">Quedan {event.slotsLeft} cupos</p>
                    <div className="h-1.5 w-24 bg-gray-100 dark:bg-gray-800 rounded-full mt-1 overflow-hidden">
                      <div className="h-full bg-primary w-[80%] rounded-full"></div>
                    </div>
                  </div>
                ) : (
                  <div className="flex -space-x-2 overflow-hidden">
                    {[1, 2].map(i => (
                      <img 
                        key={i} 
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white dark:ring-gray-900" 
                        src={`https://picsum.photos/40/40?random=${i}`} 
                        alt="Avatar" 
                      />
                    ))}
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-[10px] font-bold ring-2 ring-white dark:ring-gray-900">+12</div>
                  </div>
                )}
                <button className="flex min-w-[100px] items-center justify-center rounded-full h-10 px-5 bg-primary text-white text-sm font-bold shadow-md">
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
      <BottomNav />
    </div>
  );
};

export default EventExplorer;
