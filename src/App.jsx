import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CategorySelection from './components/CategorySelection';
import NaturaPage from './components/NaturaPage';
import DroniPage from './components/DroniPage';
import FrequenzePage from './components/FrequenzePage';
import FattiGuidarePage from './components/FattiGuidarePage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategorySelection />} />
        <Route path="/categories/nature" element={<NaturaPage />} />
        <Route path="/categories/drones" element={<DroniPage />} />
        <Route path="/categories/frequencies" element={<FrequenzePage />} />
        <Route path="/categories/guided" element={<FattiGuidarePage />} />
      </Routes>
    </Router>
  );
}

export default App;
