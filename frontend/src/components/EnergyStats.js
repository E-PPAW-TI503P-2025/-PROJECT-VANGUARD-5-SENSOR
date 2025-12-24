import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Zap, Leaf, DollarSign, Activity } from 'lucide-react';

// Data dummy untuk tampilan awal (nanti diganti API backend)
const data = [
  { time: '00:00', lux: 100 }, { time: '02:00', lux: 150 },
  { time: '04:00', lux: 200 }, { time: '06:00', lux: 800 },
  { time: '08:00', lux: 1200 }, { time: '10:00', lux: 1600 },
  { time: '12:00', lux: 1500 }, { time: '14:00', lux: 1400 },
  { time: '16:00', lux: 1100 }, { time: '18:00', lux: 900 },
  { time: '20:00', lux: 200 }, { time: '22:00', lux: 100 },
];

const EnergyStats = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Grafik Utama */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="font-bold text-lg text-slate-800">Light Intensity Over Time</h3>
            <p className="text-slate-400 text-xs">24-hour ambient light monitoring</p>
          </div>
          <span className="bg-yellow-50 text-yellow-600 px-3 py-1 rounded-full text-xs font-bold">
            Live Monitoring
          </span>
        </div>
        
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorLux" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
              <Tooltip 
                contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                itemStyle={{color: '#f59e0b', fontWeight: 'bold'}}
              />
              <Area type="monotone" dataKey="lux" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorLux)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Grid Statistik Bawah */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100">
            <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-white rounded-lg text-blue-500"><Zap size={20}/></div>
                <span className="text-[10px] font-bold text-blue-400 bg-white px-2 py-1 rounded">DAILY</span>
            </div>
            <p className="text-slate-500 text-xs font-bold">Energy Saved</p>
            <p className="text-2xl font-black text-slate-800">12.5 kWh</p>
        </div>

        <div className="bg-green-50 p-5 rounded-2xl border border-green-100">
            <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-white rounded-lg text-green-500"><Leaf size={20}/></div>
                <span className="text-[10px] font-bold text-green-400 bg-white px-2 py-1 rounded">ECO</span>
            </div>
            <p className="text-slate-500 text-xs font-bold">CO2 Reduction</p>
            <p className="text-2xl font-black text-slate-800">156.3 kg</p>
        </div>

        <div className="bg-purple-50 p-5 rounded-2xl border border-purple-100">
            <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-white rounded-lg text-purple-500"><DollarSign size={20}/></div>
                <span className="text-[10px] font-bold text-purple-400 bg-white px-2 py-1 rounded">USD</span>
            </div>
            <p className="text-slate-500 text-xs font-bold">Cost Saved</p>
            <p className="text-2xl font-black text-slate-800">$48.75</p>
        </div>

        <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100">
            <div className="flex justify-between items-start mb-2">
                <div className="p-2 bg-white rounded-lg text-orange-500"><Activity size={20}/></div>
                <span className="text-[10px] font-bold text-orange-400 bg-white px-2 py-1 rounded">SYSTEM</span>
            </div>
            <p className="text-slate-500 text-xs font-bold">Efficiency</p>
            <p className="text-2xl font-black text-slate-800">+67%</p>
        </div>
      </div>
    </div>
  );
};

export default EnergyStats;