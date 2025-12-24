import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// --- IMPORT COMPONENT YANG BENAR ---
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

// PERBAIKAN 1: Panggil EnergyStats untuk halaman Analytics
import Analytics from './components/EnergyStats'; 

// PERBAIKAN 2: Panggil SettingsPage untuk halaman Settings
import Settings from './components/SettingsPage'; 

const Layout = ({ children }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 p-4 md:p-8">
      {!isLoginPage && (
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">Centralized Smart Lighting</h1>
          <p className="text-slate-500 text-sm mb-4">IoT-Based Automated Lighting Management Dashboard</p>
          <Navbar />
        </div>
      )}
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          
          {/* Rute Analytics sekarang pakai komponen EnergyStats */}
          <Route path="/analytics" element={<Analytics />} />
          
          {/* Rute Settings sekarang pakai komponen SettingsPage */}
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;