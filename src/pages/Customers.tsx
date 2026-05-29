import React, { useState } from 'react';
import { MOCK_CUSTOMERS } from '../data/mockData';
import { Search, MoreVertical, Plus, Mail, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';

export default function Customers() {
  const [search, setSearch] = useState('');

  const filteredCustomers = MOCK_CUSTOMERS.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.phone.includes(search)
  );

  return (
    <div className="p-8 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Customer Database</h2>
          <p className="text-slate-500 mt-1">Centralized view of all corporate and retail clients</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
          <Plus size={18} />
          Add Customer
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50/50">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or phone..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
            />
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead className="bg-slate-50 sticky top-0 z-10 border-b border-slate-200">
              <tr>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer Name</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact Info</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Total Orders</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Total Spent</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Last Order</th>
                <th className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredCustomers.length === 0 ? (
                 <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-slate-500">No customers found.</td>
                 </tr>
              ) : filteredCustomers.map((customer) => (
                <tr key={customer.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-medium text-slate-900">{customer.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{customer.id}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-600 flex items-center gap-2">
                       {customer.phone}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">{customer.email}</div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-900 text-right">
                    {customer.totalOrders}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-emerald-600 text-right">
                    Rp {customer.totalSpent.toLocaleString('id-ID')}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">
                    {format(new Date(customer.lastOrderDate), 'dd MMM yyyy')}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded" title="Send WhatsApp">
                            <MessageSquare size={16} />
                        </button>
                        <button className="p-1.5 text-slate-600 hover:bg-slate-100 rounded" title="Send Email">
                            <Mail size={16} />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded">
                        <MoreVertical size={16} />
                        </button>
                    </div>
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
