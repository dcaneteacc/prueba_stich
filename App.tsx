
import React, { useState } from 'react';
import { HashRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Registration from './screens/Registration';
import ClubSelection from './screens/ClubSelection';
import EventExplorer from './screens/EventExplorer';
import EventDetail from './screens/EventDetail';
import RaceSummary from './screens/RaceSummary';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="max-w-[480px] mx-auto min-h-screen relative bg-white dark:bg-[#101922] shadow-2xl overflow-hidden">
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/clubs" element={<ClubSelection />} />
          <Route path="/events" element={<EventExplorer />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/summary" element={<RaceSummary />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;
