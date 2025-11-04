import React from 'react';
import { Home, Server, Shield, Settings } from 'lucide-react';

const navItems = [
  { label: 'Overview', icon: Home },
  { label: 'Services', icon: Server },
  { label: 'Security', icon: Shield },
  { label: 'Settings', icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:flex-col w-64 h-screen sticky top-0 border-r border-gray-200 bg-white/60 backdrop-blur-xl">
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="font-semibold text-xl tracking-tight">API Dashboard</div>
        <div className="text-xs text-gray-500 mt-1">Monitor • Analyze • Ship</div>
      </div>
      <nav className="p-3 space-y-1">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            <Icon className="h-4 w-4 text-gray-500" />
            <span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto p-4 text-xs text-gray-500">
        <div className="rounded-md bg-gradient-to-r from-indigo-50 to-blue-50 p-3 border border-indigo-100">
          <div className="font-medium text-gray-700">Pro tip</div>
          <p className="mt-1">Use the search bar to quickly jump to endpoints.</p>
        </div>
      </div>
    </aside>
  );
}
