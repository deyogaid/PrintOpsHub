import React from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Role, Branch } from '../types';

interface HeaderProps {
  role: Role;
  setRole: (role: Role) => void;
  branch: Branch | 'ALL';
  setBranch: (branch: Branch | 'ALL') => void;
}

export default function Header({ role, setRole, branch, setBranch }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search orders, customers, or branches..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 border-r border-slate-200 pr-6">
          <select 
            value={role}
            onChange={(e) => setRole(e.target.value as Role)}
            className="text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:outline-none"
          >
            <option value="SUPER_ADMIN">Super Admin</option>
            <option value="BRANCH_ADMIN">Branch Admin</option>
          </select>

          <select 
            value={branch}
            onChange={(e) => setBranch(e.target.value as Branch | 'ALL')}
            disabled={role === 'BRANCH_ADMIN'} // branch admins are usually locked to one branch, but let's allow change for demo, or disable it and auto-set
            className={`text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1.5 focus:outline-none ${role === 'BRANCH_ADMIN' ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <option value="ALL">All Branches</option>
            <option value="PUSAT">Pusat</option>
            <option value="CABANG_A">Cabang A</option>
            <option value="CABANG_B">Cabang B</option>
            <option value="CABANG_C">Cabang C</option>
            <option value="CABANG_D">Cabang D</option>
          </select>
        </div>

        <button className="relative text-slate-500 hover:text-slate-700 transition-colors">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center font-bold">
            3
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <User size={18} />
          </div>
          <div className="text-sm">
            <p className="font-medium text-slate-900">Admin User</p>
            <p className="text-slate-500 text-xs">PrintOps HQ</p>
          </div>
        </div>
      </div>
    </header>
  );
}
