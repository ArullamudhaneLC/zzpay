import React from 'react';
import { LayoutDashboard, History, Wallet, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: History, label: 'History', path: '/history' },
  { icon: Wallet, label: 'Payout', path: '/payout' },
];

interface SidebarProps {
  onLogout: () => void;
}

export default function Sidebar({ onLogout }: SidebarProps) {
  const location = useLocation();
  const { user } = useAuth();
  
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 shadow-[2px_0_8px_-3px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-3 p-6 border-b border-gray-100">
        <div className="p-2 bg-blue-50 rounded-lg border border-blue-100">
          <LayoutDashboard className="w-6 h-6 text-blue-600" />
        </div>
        <span className="text-xl font-semibold text-gray-900">TechDash</span>
      </div>

      <div className="p-6 border-b border-gray-100">
        <p className="text-sm text-gray-500">Welcome back,</p>
        <p className="font-medium text-gray-900">{user?.name}</p>
      </div>
      
      <nav className="p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive 
                  ? 'bg-blue-50 text-blue-600 border border-blue-100' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}

        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-gray-600 hover:bg-gray-50"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Logout</span>
        </button>
      </nav>
    </div>
  );
}