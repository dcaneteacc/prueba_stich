
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EventDetail: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="bg-white dark:bg-[#111418] min-h-screen">
      <header className="sticky top-0 z-50 flex items-center bg-white/80 dark:bg-[#111418]/80 backdrop-blur-md p-4 justify-between border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => navigate(-1)} className="flex size-12 items-center justify-start">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center">Detalle del Evento</h2>
        <button className="flex size-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <span className="material-symbols-outlined">favorite</span>
        </button>
      </header>

      <main className="pb-40">
        <div className="px-4 py-3">
          <div className="relative w-full aspect-[4/3] bg-center bg-cover rounded-xl shadow-md overflow-hidden" 
               style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop")' }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="relative p-4 h-full flex flex-col justify-end items-start">
              <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">Ruta Oficial</span>
              <button className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md text-white p-2 rounded-full border border-white/30">
                <span className="material-symbols-outlined">fullscreen</span>
              </button>
            </div>
          </div>
        </div>

        <div className="px-4 pt-4">
          <h1 className="text-[#111418] dark:text-white text-3xl font-bold leading-tight">Maratón de la Ciudad 2024</h1>
          <div className="flex items-center gap-2 mt-2">
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary !text-sm">verified</span>
            </div>
            <p className="text-[#617589] dark:text-gray-400 text-sm font-medium underline">Club de Atletismo Local</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4">
          {[
            { icon: 'calendar_today', label: 'Fecha', val: '24 Nov, 2024' },
            { icon: 'schedule', label: 'Salida', val: '07:00 AM' },
            { icon: 'distance', label: 'Distancia', val: '42K • 21K' },
            { icon: 'payments', label: 'Inscripción', val: '$45.00', primary: true },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col gap-3 rounded-xl border border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900">
              <span className={`material-symbols-outlined ${stat.primary ? 'text-primary' : 'text-gray-400'}`}>{stat.icon}</span>
              <div className="flex flex-col">
                <h2 className="text-[10px] font-bold uppercase text-gray-400">{stat.label}</h2>
                <p className={`text-base font-bold ${stat.primary ? 'text-primary' : ''}`}>{stat.val}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 py-2">
          <h3 className="text-lg font-bold mb-3">Clubes Amigos</h3>
          <div className="flex items-center gap-4 overflow-x-auto pb-2 hide-scrollbar">
            {['Nocturnos', 'PowerRun', 'Elite Track'].map((name, i) => (
              <div key={name} className="flex flex-col items-center min-w-[80px] gap-2">
                <div className={`w-16 h-16 rounded-full border-2 p-0.5 ${i === 0 ? 'border-primary' : 'border-gray-200'}`}>
                  <img className="w-full h-full rounded-full object-cover" src={`https://picsum.photos/100/100?random=${i+10}`} alt={name} />
                </div>
                <span className="text-[10px] font-bold text-center">{name}</span>
              </div>
            ))}
            <div className="flex flex-col items-center min-w-[80px] gap-2">
              <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold">+12</div>
              <span className="text-[10px] font-bold">Ver más</span>
            </div>
          </div>
          <div className="flex items-center mt-4 bg-primary/5 p-3 rounded-xl">
            <div className="flex -space-x-3 mr-3">
              {[1, 2, 3].map(i => (
                <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://picsum.photos/40/40?random=${i+20}`} alt="Friend" />
              ))}
            </div>
            <p className="text-xs font-medium text-primary">Juan, Ana y 8 amigos más ya se inscribieron</p>
          </div>
        </div>

        <div className="px-4 py-6">
          <h3 className="text-lg font-bold mb-2">Sobre la carrera</h3>
          <p className="text-[#617589] dark:text-gray-400 text-sm leading-relaxed">
            Acompáñanos en la edición 2024 de la Maratón de la Ciudad. El recorrido inicia en el Parque Central y atraviesa los puntos más emblemáticos del casco histórico. Contaremos con 15 puntos de hidratación, asistencia médica en cada km y medallas conmemorativas.
          </p>
        </div>
      </main>

      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] p-4 bg-white/90 dark:bg-[#111418]/90 backdrop-blur-lg border-t border-gray-100 dark:border-gray-800 z-50">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 font-medium">Inscripción</span>
            <span className="text-xl font-bold">$45.00</span>
          </div>
          <button 
            onClick={() => navigate('/summary')}
            className="flex-1 bg-primary text-white font-bold py-4 rounded-full shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-all"
          >
            Inscribirme ahora
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        <div className="mt-2 text-center">
          <p className="text-[10px] text-orange-500 font-bold uppercase tracking-tighter">⚠️ Quedan solo 45 cupos disponibles</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
