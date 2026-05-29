import React from 'react';
import { LayoutDashboard, ShoppingCart, Users, Settings, LogOut, Printer } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  role: string;
}

export default function Sidebar({ currentView, setCurrentView, role }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders', label: 'Order Management', icon: ShoppingCart },
    { id: 'customers', label: 'Customers Base', icon: Users },
  ];

  return (
    <div className="w-64 bg-slate-900 text-slate-300 flex flex-col h-screen shrink-0">
      <div className="p-6 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">
          <Printer size={20} />
        </div>
        <div>
          <h1 className="text-white font-bold text-lg tracking-tight">PrintOps Hub</h1>
          <p className="text-xs text-slate-400 font-medium">By Workspace</p>
        </div>
      </div>

      <div className="flex-1 px-4 py-4 space-y-1">
        <p className="px-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Operations</p>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive ? 'bg-blue-600 text-white' : 'hover:bg-slate-800 hover:text-white'
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="p-4 border-t border-slate-800">
        <div className="px-3 py-2">
          <p className="text-xs text-slate-500 font-medium uppercase mb-2">Role Access</p>
          <p className="text-sm font-medium text-slate-300">{role === 'SUPER_ADMIN' ? 'Super Administrator' : 'Branch Manager'}</p>
        </div>
      </div>
    </div>
  );
}
