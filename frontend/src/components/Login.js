import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Backend Connection ( auth.routes.js )
      // const res = await axios.post('http://localhost:3001/api/auth/login', { email, password });
      // localStorage.setItem('token', res.data.token);
      
      console.log("Simulasi Login Berhasil");
      navigate('/'); // Redirect ke dashboard
    } catch (error) {
      alert('Login Gagal! Cek console untuk detail error backend.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100">
        <div className="text-center mb-8">
            <h1 className="text-2xl font-black text-slate-900">Smart Home</h1>
            <p className="text-slate-500 text-sm">Centralized Lighting Control</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1 uppercase tracking-wide">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:outline-none transition-all bg-slate-50 focus:bg-white"
              placeholder="admin@smarthome.com"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1 uppercase tracking-wide">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:outline-none transition-all bg-slate-50 focus:bg-white"
              placeholder="••••••••"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition shadow-lg shadow-slate-200">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;