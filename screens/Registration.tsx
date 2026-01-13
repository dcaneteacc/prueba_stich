
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExperienceLevel } from '../types';

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState<ExperienceLevel>(ExperienceLevel.BEGINNER);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/events');
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background Image Container */}
      <div className="fixed inset-0 z-0">
        <div 
          className="w-full h-full bg-center bg-cover" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white dark:to-background-dark" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="flex items-center p-4 justify-between">
          <button className="bg-white/50 dark:bg-black/20 backdrop-blur-md rounded-full p-2 flex items-center justify-center shadow-sm">
            <span className="material-symbols-outlined text-[#111418] dark:text-white">arrow_back_ios_new</span>
          </button>
          <h2 className="text-[#111418] dark:text-white text-xs font-bold uppercase tracking-widest flex-1 text-center">Registro</h2>
          <div className="w-10"></div>
        </header>

        <div className="px-6 pt-10 pb-4">
          <h1 className="text-[#111418] dark:text-white tracking-tight text-4xl font-extrabold leading-tight">
            Prepárate para la meta.
          </h1>
          <p className="text-[#111418]/80 dark:text-white/80 text-lg font-normal mt-2">
            Únete a la comunidad de corredores más activa.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-auto glass-effect rounded-t-[3rem] px-6 pt-10 pb-12 shadow-2xl border-t border-white/20">
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-[#111418] dark:text-white text-sm font-semibold px-1">Nombre Completo</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/70">person</span>
                <input 
                  className="w-full rounded-full border border-[#dbe0e6] dark:border-[#334155] bg-white dark:bg-[#1e293b] py-4 pl-12 pr-4 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
                  placeholder="Ej. Carlos Ortiz" 
                  type="text"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#111418] dark:text-white text-sm font-semibold px-1">Correo Electrónico</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/70">mail</span>
                <input 
                  className="w-full rounded-full border border-[#dbe0e6] dark:border-[#334155] bg-white dark:bg-[#1e293b] py-4 pl-12 pr-4 text-[#111418] dark:text-white focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" 
                  placeholder="tu@email.com" 
                  type="email"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#111418] dark:text-white text-sm font-semibold px-1">Nivel de experiencia</label>
              <div className="flex bg-slate-200/50 dark:bg-slate-800 p-1 rounded-full w-full">
                {Object.values(ExperienceLevel).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setLevel(lvl)}
                    className={`flex-1 py-2 text-[10px] font-bold rounded-full transition-all ${
                      level === lvl ? 'bg-primary text-white shadow-md' : 'text-[#111418]/60 dark:text-white/60'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <button 
              type="submit"
              className="w-full bg-primary text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 active:scale-[0.98] transition-all"
            >
              Empezar a Correr
            </button>
            <div className="flex items-center justify-center gap-2 pt-2">
              <p className="text-sm text-[#111418]/60 dark:text-white/60">¿Ya tienes cuenta?</p>
              <button type="button" className="text-sm font-bold text-primary">Inicia sesión</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
