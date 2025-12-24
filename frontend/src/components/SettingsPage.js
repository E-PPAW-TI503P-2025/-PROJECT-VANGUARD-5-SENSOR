import React, { useState } from 'react';
import { Sliders, Power, AlertTriangle, Save } from 'lucide-react';
import axios from 'axios';

const SettingsPage = () => {
  const [autoMode, setAutoMode] = useState(true);
  const [threshold, setThreshold] = useState(500);

  // Fungsi simpan (Dummy dulu, nanti disambung backend)
  const handleSave = async () => {
     console.log("Saving settings:", { autoMode, threshold });
     alert("Settings saved locally (Backend integration pending)");
     // Nanti: await axios.post('/api/settings', ...);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in">
      {/* Panel Kiri: Form Settings */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-slate-100 rounded-lg"><Sliders className="text-slate-600" size={20}/></div>
            <div>
                <h3 className="font-bold text-lg text-slate-800">System Configuration</h3>
                <p className="text-slate-400 text-xs">Manage automation rules</p>
            </div>
        </div>

        {/* Toggle Auto Mode */}
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl mb-6 border border-slate-100">
            <div>
                <p className="font-bold text-sm text-slate-800">Automatic Mode</p>
                <p className="text-xs text-slate-500">Enable sensor-based control</p>
            </div>
            <button 
                onClick={() => setAutoMode(!autoMode)}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${autoMode ? 'bg-slate-900' : 'bg-slate-300'}`}
            >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${autoMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </button>
        </div>

        {/* Slider Threshold */}
        <div className="mb-8">
            <div className="flex justify-between mb-3">
                <p className="font-bold text-sm text-slate-800">Light Threshold</p>
                <span className="text-xs font-bold bg-slate-900 text-white px-2 py-1 rounded">{threshold} lux</span>
            </div>
            <input 
                type="range" 
                min="0" 
                max="1000" 
                value={threshold} 
                onChange={(e) => setThreshold(e.target.value)}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
            />
            <div className="flex justify-between text-xs text-slate-400 mt-2">
                <span>More Sensitive (0 lux)</span>
                <span>Less Sensitive (1000 lux)</span>
            </div>
        </div>

        {/* Tombol Simpan */}
        <button 
            onClick={handleSave}
            className="w-full bg-slate-900 text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition shadow-lg shadow-slate-200"
        >
            <Save size={18} /> Save Changes
        </button>

        <div className="mt-6 flex gap-3 p-4 bg-yellow-50 text-yellow-800 rounded-xl text-xs leading-relaxed border border-yellow-100">
            <AlertTriangle size={16} className="shrink-0 mt-0.5" />
            <p><strong>Note:</strong> In automatic mode, lights are controlled by the central panel. Manual override is disabled during the day.</p>
        </div>
      </div>

      {/* Panel Kanan: Info */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="font-bold mb-4 text-slate-800">Device Information</h3>
          <ul className="space-y-4">
              <li className="flex justify-between py-2 border-b border-slate-50">
                  <span className="text-sm text-slate-500">Device ID</span>
                  <span className="text-sm font-mono font-bold bg-slate-100 px-2 rounded text-slate-600">ESP32-CLM-001</span>
              </li>
              <li className="flex justify-between py-2 border-b border-slate-50">
                  <span className="text-sm text-slate-500">Firmware Version</span>
                  <span className="text-sm font-bold text-slate-800">v2.3.1</span>
              </li>
              <li className="flex justify-between py-2 border-b border-slate-50">
                  <span className="text-sm text-slate-500">Local IP</span>
                  <span className="text-sm font-mono text-slate-600">192.168.1.105</span>
              </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
             <h3 className="font-bold mb-2 text-slate-800">About System</h3>
             <p className="text-xs text-slate-500 leading-relaxed">
                 This centralized IoT lighting control system uses a single light sensor at the central panel to determine global day/night status. During daytime, all lights are automatically forced OFF to maximize energy savings.
             </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;