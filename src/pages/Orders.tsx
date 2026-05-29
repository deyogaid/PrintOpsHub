import React, { useState } from 'react';
import { MOCK_ORDERS } from '../data/mockData';
import { Filter, MoreVertical, Plus } from 'lucide-react';
import { format } from 'date-fns';

interface OrdersProps {
  branchTarget: string;
}

export default function Orders({ branchTarget }: OrdersProps) {
  const [statusFilter, setStatusFilter] = useState('ALL');

  const filteredOrders = MOCK_ORDERS.filter(o => {
    if (branchTarget !== 'ALL' && o.branch !== branchTarget) return false;
    if (statusFilter !== 'ALL' && o.status !== statusFilter) return false;
    return true;
  });

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'PENDING': return 'bg-amber-100 text-amber-700';
      case 'PROCESSING': return 'bg-blue-100 text-blue-700';
      case 'READY': return 'bg-emerald-100 text-emerald-700';
      case 'COMPLETED': return 'bg-slate-100 text-slate-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Order Management</h2>
          <p className="text-slate-500 mt-1">Manage print jobs across {branchTarget === 'ALL' ? 'all branches' : branchTarget}</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
          <Plus size={18} />
          New Order
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex items-center gap-4 bg-slate-50/50">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 border border-slate-200 bg-white rounded-lg px-3 py-1.5 shadow-sm">
            <Filter size={16} className="text-slate-400" />
            <select 
              className="bg-transparent focus:outline-none"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="ALL">All Status</option>
              <option value="PENDING">Pending</option>
              <option value="PROCESSING">Processing</option>
              <option value="READY">Ready</option>
              <option value="COMPLETED">Completed</option>
            </select>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-slate-50 sticky top-0 z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Items</th>
                {branchTarget === 'ALL' && <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Branch</th>}
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Total</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Deadline</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredOrders.length === 0 ? (
                 <tr>
                    <td colSpan={8} className="px-6 py-12 text-center text-slate-500">No orders found.</td>
                 </tr>
              ) : filteredOrders.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-slate-900">{order.id}</td>
                  <td className="px-6 py-4 text-sm text-slate-600">{order.customerName}</td>
                  <td className="px-6 py-4 text-sm text-slate-600 max-w-[200px] truncate" title={order.items}>{order.items}</td>
                  {branchTarget === 'ALL' && (
                    <td className="px-6 py-4 text-sm text-slate-600">
                      <span className="bg-slate-100 px-2 py-1 rounded text-xs font-medium border border-slate-200">{order.branch}</span>
                    </td>
                  )}
                  <td className="px-6 py-4 text-sm text-slate-900 font-medium whitespace-nowrap">
                    Rp {order.total.toLocaleString('id-ID')}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {format(new Date(order.deadline), 'dd MMM yyyy, HH:mm')}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600 transition-colors">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
