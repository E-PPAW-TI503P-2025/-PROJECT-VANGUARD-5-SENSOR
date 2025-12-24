import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BarChart3, Settings } from 'lucide-react';

const Navbar = () => {
  const baseClass = "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors";
  const activeClass = "bg-white shadow-sm text-slate-900 border border-slate-200";
  const inactiveClass = "text-slate-500 hover:bg-slate-200/50";

  return (
    <div className="flex gap-2 bg-slate-100 p-1 rounded-full w-fit mt-2">
      <NavLink to="/" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
        <LayoutDashboard size={16} /> Dashboard
      </NavLink>
      <NavLink to="/analytics" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
        <BarChart3 size={16} /> Analytics
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => `${baseClass} ${isActive ? activeClass : inactiveClass}`}>
        <Settings size={16} /> Settings
      </NavLink>
    </div>
  );
};

export default Navbar;