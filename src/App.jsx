import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MetricsGrid from './components/MetricsGrid';
import EndpointsTable from './components/EndpointsTable';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-w-0">
          <Header />
          <div className="px-4 md:px-6 py-6 space-y-6">
            <MetricsGrid />
            <EndpointsTable />
          </div>
        </main>
      </div>
      <footer className="px-4 md:px-6 py-6 text-xs text-gray-500">
        Built for visibility and control — track requests, errors, and performance across your APIs.
      </footer>
    </div>
  );
}
