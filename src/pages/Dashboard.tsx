import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { PERFORMANCE_DATA } from '../data/mockData';
import { TrendingUp, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

interface DashboardProps {
  branchTarget: string;
}

export default function Dashboard({ branchTarget }: DashboardProps) {
  // Mock summarized metrics
  const metrics = [
    { label: 'Total Revenue', value: 'Rp 45.2M', trend: '+12.5%', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { label: 'Pending Orders', value: '124', trend: '-5.2%', icon: Clock, color: 'text-amber-600', bg: 'bg-amber-100' },
    { label: 'Completed (MTD)', value: '892', trend: '+18.1%', icon: CheckCircle, color: 'text-blue-600', bg: 'bg-blue-100' },
    { label: 'SLA Breaches', value: '3', trend: '-2.0%', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100' },
  ];

  return (
    <div className="p-8 space-y-8 h-full overflow-y-auto">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Dashboard Overview</h2>
        <p className="text-slate-500 mt-1">Monitoring performance for {branchTarget === 'ALL' ? 'All Branches' : branchTarget}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${metric.bg}`}>
                  <Icon size={20} className={metric.color} />
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${metric.trend.startsWith('+') ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                  {metric.trend}
                </span>
              </div>
              <h3 className="text-slate-500 text-sm font-medium">{metric.label}</h3>
              <p className="text-2xl font-bold text-slate-900 mt-1">{metric.value}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-slate-900">Branch Output Volume</h3>
            <p className="text-sm text-slate-500">Total print volume (A3 equivalents) per branch</p>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={PERFORMANCE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                <Tooltip cursor={{fill: '#F1F5F9'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                {branchTarget === 'ALL' ? (
                  <>
                    <Bar dataKey="PUSAT" name="Pusat" stackId="a" fill="#0F172A" radius={[0, 0, 4, 4]} />
                    <Bar dataKey="CABANG_A" name="Cabang A" stackId="a" fill="#3B82F6" />
                    <Bar dataKey="CABANG_B" name="Cabang B" stackId="a" fill="#10B981" />
                    <Bar dataKey="CABANG_C" name="Cabang C" stackId="a" fill="#F59E0B" />
                    <Bar dataKey="CABANG_D" name="Cabang D" stackId="a" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  </>
                ) : (
                  <Bar dataKey={branchTarget} name={branchTarget} fill="#3B82F6" radius={[4, 4, 0, 0]} />
                )}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Revenue Trend</h3>
              <p className="text-sm text-slate-500">7-day moving average</p>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={PERFORMANCE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748B' }} />
                <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Legend iconType="circle" wrapperStyle={{fontSize: '12px', paddingTop: '20px'}} />
                {branchTarget === 'ALL' ? (
                  <>
                    <Line type="monotone" dataKey="PUSAT" stroke="#0F172A" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
                    <Line type="monotone" dataKey="CABANG_A" stroke="#3B82F6" strokeWidth={3} />
                  </>
                ) : (
                  <Line type="monotone" dataKey={branchTarget} stroke="#3B82F6" strokeWidth={3} dot={{r: 4}} activeDot={{r: 6}} />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
