/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import { Role, Branch } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [role, setRole] = useState<Role>('SUPER_ADMIN');
  const [branch, setBranch] = useState<Branch | 'ALL'>('ALL');

  // If role changes to BRANCH_ADMIN and branch is ALL, default to PUSAT
  React.useEffect(() => {
    if (role === 'BRANCH_ADMIN' && branch === 'ALL') {
      setBranch('PUSAT');
    }
  }, [role, branch]);

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      <Sidebar 
        currentView={currentView} 
        setCurrentView={setCurrentView} 
        role={role} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          role={role} 
          setRole={setRole} 
          branch={branch} 
          setBranch={setBranch} 
        />
        
        <main className="flex-1 overflow-auto">
          {currentView === 'dashboard' && <Dashboard branchTarget={branch} />}
          {currentView === 'orders' && <Orders branchTarget={branch} />}
          {currentView === 'customers' && <Customers />}
        </main>
      </div>
    </div>
  );
}

