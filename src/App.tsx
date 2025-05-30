import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CampaignPage } from './pages/CampaignPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campaigns/:identifier" element={<CampaignPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;