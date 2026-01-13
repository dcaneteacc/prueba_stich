
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";
import BottomNav from '../components/BottomNav';

const RaceSummary: React.FC = () => {
  const navigate = useNavigate();
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);
  const [loadingAi, setLoadingAi] = useState(false);

  const stats = {
    distance: 10.5,
    time: "52:14",
    pace: "4'58\" /km",
    calories: 742,
    topRank: 15
  };

  const getAiCoachFeedback = async () => {
    setLoadingAi(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Eres un coach de running profesional. Un corredor acaba de completar 10.5km en 52 minutos y 14 segundos (ritmo 4'58"/km). Quemó 742 kcal y está en el top 15 de su club. Dale un resumen motivador y un consejo corto para su siguiente carrera en español. Máximo 100 palabras.`,
      });
      setAiFeedback(response.text);
    } catch (error) {
      console.error("Gemini Error:", error);
      setAiFeedback("¡Increíble carrera! Tu ritmo es excelente. Mantén esa constancia y llegarás lejos.");
    } finally {
      setLoadingAi(false);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-32">
      <header className="sticky top-0 z-50 flex items-center bg-white dark:bg-background-dark p-4 justify-between">
        <button onClick={() => navigate(-1)} className="size-12 flex items-center">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center">Resumen de Carrera</h2>
        <button className="size-10 flex items-center justify-end">
          <span className="material-symbols-outlined">settings</span>
        </button>
      </header>

      <main className="px-4 py-2 space-y-4">
        <div className="relative w-full aspect-[4/5] bg-center bg-cover rounded-xl shadow-2xl overflow-hidden" 
             style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent, rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1518005020480-10901194e252?q=80&w=2072&auto=format&fit=crop")' }}>
          
          <div className="p-4 flex justify-center">
            <div className="bg-white/20 backdrop-blur-md p-1 rounded-full flex gap-1">
              <button className="bg-white text-black px-4 py-1.5 rounded-full text-xs font-bold">Mapa</button>
              <button className="text-white px-4 py-1.5 rounded-full text-xs font-bold">Foto</button>
            </div>
          </div>

          <div className="absolute top-16 right-4">
            <div className="bg-white dark:bg-background-dark p-2 rounded-xl shadow-lg flex items-center gap-2">
              <div className="size-8 rounded-full bg-primary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-sm">groups</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 font-bold uppercase leading-none">Club</span>
                <span className="text-xs font-bold dark:text-white leading-none">Madrid Striders</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-white/80 text-sm font-medium">Distancia Total</p>
                <h1 className="text-white text-5xl font-bold">{stats.distance}<span className="text-2xl ml-1">km</span></h1>
              </div>
              <div className="bg-primary size-14 rounded-full flex items-center justify-center text-white shadow-lg">
                <span className="material-symbols-outlined text-3xl">emoji_events</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold">¡Excelente trabajo, Runner!</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Has completado tu desafío matutino. Estás en el <span className="text-primary font-bold">Top {stats.topRank}</span> de tu club esta semana.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: 'schedule', label: 'Tiempo', val: stats.time },
            { icon: 'speed', label: 'Ritmo', val: stats.pace },
            { icon: 'local_fire_department', label: 'Calorías', val: `${stats.calories} kcal`, full: true },
          ].map((s, i) => (
            <div key={i} className={`flex flex-col gap-1 rounded-xl p-4 bg-background-light dark:bg-white/5 border border-gray-100 dark:border-white/10 ${s.full ? 'col-span-2' : ''}`}>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <span className="material-symbols-outlined text-lg">{s.icon}</span>
                <p className="text-sm font-medium">{s.label}</p>
              </div>
              <p className="text-xl font-bold">{s.val}</p>
            </div>
          ))}
        </div>

        {/* AI Coach Integration */}
        <div className="p-4 bg-primary/5 rounded-2xl border border-primary/20 space-y-3">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-full flex items-center justify-center text-white">
              <span className="material-symbols-outlined">smart_toy</span>
            </div>
            <div>
              <h4 className="font-bold text-sm">IA Coach Feedback</h4>
              <p className="text-[10px] text-primary font-bold uppercase">Powered by Gemini</p>
            </div>
            {!aiFeedback && !loadingAi && (
              <button 
                onClick={getAiCoachFeedback}
                className="ml-auto bg-primary text-white text-xs px-3 py-1.5 rounded-full font-bold shadow-sm"
              >
                Analizar
              </button>
            )}
          </div>
          
          {loadingAi && (
            <div className="py-4 flex flex-col items-center gap-2">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-gray-500 italic">El coach está analizando tu carrera...</p>
            </div>
          )}

          {aiFeedback && (
            <p className="text-sm italic leading-relaxed text-gray-700 dark:text-gray-300">
              "{aiFeedback}"
            </p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full bg-primary text-white font-bold h-14 rounded-full shadow-lg flex items-center justify-center gap-3 active:scale-95 transition-all">
            <span className="material-symbols-outlined">share</span>
            <span>Compartir en Redes</span>
          </button>
          <button className="w-full bg-primary/10 text-primary font-bold h-14 rounded-full flex items-center justify-center gap-3 active:scale-95 transition-all">
            <span className="material-symbols-outlined">leaderboard</span>
            <span>Ver Ranking del Club</span>
          </button>
        </div>
      </main>
      <BottomNav />
    </div>
  );
};

export default RaceSummary;
