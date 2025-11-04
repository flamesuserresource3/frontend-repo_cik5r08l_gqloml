import React from 'react';
import { Search, Bell, Plus, RefreshCw } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur-xl border-b border-gray-200">
      <div className="flex items-center gap-3 justify-between px-4 md:px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="lg:hidden font-semibold">API Dashboard</div>
          <div className="relative w-56 md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search endpoints, services..."
              className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
          <button className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-3 py-2 text-sm hover:bg-indigo-700">
            <Plus className="h-4 w-4" />
            New Endpoint
          </button>
          <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
}
