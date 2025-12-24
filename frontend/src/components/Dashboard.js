import React, { useState } from 'react';
import { Sun, Moon, Lightbulb, Wifi, Lock, Zap, Leaf, DollarSign } from 'lucide-react';

const Dashboard = () => {
  // --- DATA DUMMY (Agar tampilan langsung terlihat penuh dan bagus) ---
  const [luxValue, setLuxValue] = useState(900); // Contoh Siang
  const [isDay, setIsDay] = useState(true);      // Mode True = Siang
  
  const [energyData, setEnergyData] = useState({
    daily_savings: 12.5,
    monthly_savings: 375,
    cost_savings: 48.75
  });

  const [rooms, setRooms] = useState([
    { id: 1, name: 'Living Room', light_on: false },
    { id: 2, name: 'Bedroom 1', light_on: false },
    { id: 3, name: 'Bedroom 2', light_on: false }, // Tambah kamar biar penuh
    { id: 4, name: 'Kitchen', light_on: false },
    { id: 5, name: 'Bathroom', light_on: false },
    { id: 6, name: 'Garage', light_on: false },
  ]);

  // Fungsi Toggle (Hanya ubah tampilan sementara)
  const toggleRoom = (id) => {
    if (isDay) return; // Mode siang terkunci
    setRooms(prev => prev.map(r => r.id === id ? { ...r, light_on: !r.light_on } : r));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in font-sans p-1">
      
      {/* === KOLOM KIRI (2/3): PANEL UTAMA STATUS === */}
      <div className="lg:col-span-2 bg-white p-6 rounded-[2rem] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden transition-all hover:shadow-lg">
        {/* Header Panel */}
        <div className="flex justify-between items-start z-10 relative mb-8">
          <div>
            <h3 className="font-bold text-xl text-slate-800">Central Panel Status</h3>
            <p className="text-slate-400 text-sm mt-1">Global lighting control sensor</p>
          </div>
          <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-sm">
            <Wifi size={14} strokeWidth={2.5} /> Connected
          </span>
        </div>

        {/* Indikator Besar Tengah (Matahari/Bulan) */}
        <div className="flex flex-col items-center justify-center py-6 z-10 relative">
          {/* Lingkaran Icon dengan Efek Glow */}
          <div className={`w-36 h-36 rounded-full flex items-center justify-center mb-5 transition-all duration-500 ${isDay ? 'bg-yellow-50 text-yellow-500 shadow-xl shadow-yellow-200/50' : 'bg-indigo-50 text-indigo-500 shadow-xl shadow-indigo-200/50'} ring-4 ${isDay ? 'ring-yellow-100' : 'ring-indigo-100'}`}>
            {isDay ? <Sun size={72} strokeWidth={1.5} /> : <Moon size={72} strokeWidth={1.5} />}
          </div>
          {/* Teks Status Besar */}
          <span className={`font-black tracking-[0.25em] text-xl ${isDay ? 'text-yellow-600' : 'text-indigo-600'}`}>
            {isDay ? 'DAY MODE' : 'NIGHT MODE'}
          </span>
        </div>

        {/* Detail Info Boxes */}
        <div className="grid grid-cols-2 gap-5 mt-8">
           <div className="bg-slate-50 p-5 rounded-2xl text-center border border-slate-100/80 hover:bg-slate-100 transition-colors">
             <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">Light Intensity</p>
             <p className="font-black text-3xl text-slate-800 flex items-baseline justify-center gap-1">
                {luxValue}<span className="text-sm font-bold text-slate-500">lux</span>
             </p>
           </div>
           <div className="bg-slate-50 p-5 rounded-2xl text-center border border-slate-100/80 hover:bg-slate-100 transition-colors">
             <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">System Status</p>
             <p className={`font-black text-xl flex items-center justify-center gap-2 ${isDay ? 'text-green-600' : 'text-blue-600'}`}>
                {isDay ? <Leaf size={18}/> : <Zap size={18}/>}
                {isDay ? 'Saving Energy' : 'Active Monitor'}
             </p>
           </div>
        </div>

        {/* Notifikasi Mode Siang */}
        {isDay && (
          <div className="mt-6 bg-blue-50/80 text-blue-700 p-4 rounded-2xl text-sm font-semibold flex items-center gap-3 border border-blue-100 animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
            </span>
            Daytime detected. Lights forced OFF to save energy.
          </div>
        )}
      </div>

      {/* === KOLOM KANAN (1/3): STATISTIK ENERGI === */}
      <div className="bg-white p-6 rounded-[2rem] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col h-full justify-center hover:shadow-lg transition-all">
        <h3 className="font-bold text-xl mb-1 text-slate-800">Energy Statistics</h3>
        <p className="text-slate-400 text-sm mb-8">Savings from centralized control</p>
        
        <div className="grid grid-cols-1 gap-5">
          {/* Card 1: Daily */}
          <div className="bg-blue-50 p-5 rounded-2xl flex justify-between items-center group transition-all hover:shadow-md border border-blue-100 hover:bg-blue-100/80">
             <div>
                <p className="text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-1">Daily Savings</p>
                <p className="text-3xl font-black text-slate-800">{energyData.daily_savings} <span className="text-sm text-slate-500 font-bold">kWh</span></p>
             </div>
             <div className="bg-white p-3 rounded-full text-blue-500 shadow-sm group-hover:scale-110 transition-transform ring-2 ring-blue-100"><Zap size={24} strokeWidth={2.5}/></div>
          </div>
          {/* Card 2: Monthly */}
          <div className="bg-green-50 p-5 rounded-2xl flex justify-between items-center group transition-all hover:shadow-md border border-green-100 hover:bg-green-100/80">
             <div>
                <p className="text-green-600 text-[10px] font-bold uppercase tracking-wider mb-1">Monthly Savings</p>
                <p className="text-3xl font-black text-slate-800">{energyData.monthly_savings} <span className="text-sm text-slate-500 font-bold">kWh</span></p>
             </div>
             <div className="bg-white p-3 rounded-full text-green-500 shadow-sm group-hover:scale-110 transition-transform ring-2 ring-green-100"><Leaf size={24} strokeWidth={2.5}/></div>
          </div>
          {/* Card 3: Cost */}
           <div className="bg-purple-50 p-5 rounded-2xl flex justify-between items-center group transition-all hover:shadow-md border border-purple-100 hover:bg-purple-100/80">
             <div>
                <p className="text-purple-600 text-[10px] font-bold uppercase tracking-wider mb-1">Cost Savings</p>
                <p className="text-3xl font-black text-slate-800">${energyData.cost_savings}</p>
             </div>
             <div className="bg-white p-3 rounded-full text-purple-500 shadow-sm group-hover:scale-110 transition-transform ring-2 ring-purple-100"><DollarSign size={24} strokeWidth={2.5}/></div>
          </div>
        </div>
      </div>

      {/* === BAGIAN BAWAH: KONTROL RUANGAN === */}
      <div className="lg:col-span-3 mt-6">
        <div className="flex justify-between items-end mb-6 px-1">
           <div>
             <h3 className="font-bold text-xl text-slate-800">Room Controls</h3>
             <p className="text-slate-400 text-sm mt-1">Manual override available only at night</p>
           </div>
           <span className="text-xs font-bold bg-slate-100 px-3 py-1.5 rounded-full text-slate-600 border border-slate-200 shadow-sm">
             Active: {rooms.filter(r => r.light_on).length} / {rooms.length}
           </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rooms.map((room) => {
            const isActive = room.light_on;
            return (
              <div key={room.id} className={`bg-white p-5 rounded-2xl shadow-sm border transition-all duration-300 flex items-center justify-between hover:shadow-md ${isActive && !isDay ? 'border-yellow-300 bg-yellow-50/30 shadow-yellow-100' : 'border-slate-100 hover:border-slate-200'}`}>
                <div className="flex items-center gap-4">
                  {/* Icon Lampu dengan Efek Glow saat Nyala */}
                  <div className={`p-3 rounded-full transition-colors duration-300 ring-2 ${isActive && !isDay ? 'bg-yellow-400 text-white shadow-lg shadow-yellow-200 ring-yellow-300' : 'bg-slate-100 text-slate-400 ring-slate-50'}`}>
                    <Lightbulb size={22} fill={isActive && !isDay ? "currentColor" : "none"} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-bold text-base text-slate-800">{room.name}</p>
                    {/* Status Text Kecil */}
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mt-1">
                      {isDay ? <><Lock size={12} className="text-slate-300"/> LOCKED BY SYSTEM</> : (isActive ? <span className="text-yellow-600">● STATUS: ON</span> : <span>● STATUS: OFF</span>)}
                    </p>
                  </div>
                </div>
                
                {/* Toggle Switch yang Lebih Modern */}
                <button 
                  onClick={() => toggleRoom(room.id)}
                  disabled={isDay}
                  className={`relative w-14 h-7 rounded-full p-1 transition-all duration-300 focus:outline-none shadow-inner ${isActive && !isDay ? 'bg-slate-900' : 'bg-slate-200'} ${isDay ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:ring-2 hover:ring-slate-300'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${isActive && !isDay ? 'translate-x-7' : 'translate-x-0'}`}></div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;