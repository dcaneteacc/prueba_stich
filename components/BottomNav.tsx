
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: 'explore', label: 'Eventos', path: '/events', fill: location.pathname === '/events' },
    { icon: 'diversity_3', label: 'Clubes', path: '/clubs', fill: location.pathname === '/clubs' },
    { icon: 'emoji_events', label: 'Logros', path: '/summary', fill: location.pathname === '/summary' },
    { icon: 'account_circle', label: 'Perfil', path: '/', fill: location.pathname === '/' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-white/90 dark:bg-[#101922]/95 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 pb-8 pt-3 z-50">
      <div className="flex justify-around items-center px-4">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              item.fill ? 'text-primary' : 'text-gray-400'
            }`}
          >
            <span 
              className="material-symbols-outlined"
              style={{ fontVariationSettings: `'FILL' ${item.fill ? 1 : 0}` }}
            >
              {item.icon}
            </span>
            <span className={`text-[10px] ${item.fill ? 'font-bold' : 'font-medium'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
