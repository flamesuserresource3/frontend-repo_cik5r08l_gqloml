import React from 'react';
import { BarChart3, Globe, Shield, Server } from 'lucide-react';

const Card = ({ title, value, delta, icon: Icon, trend = [] }) => (
  <div className="rounded-xl border border-gray-200 bg-white p-4">
    <div className="flex items-center justify-between">
      <div>
        <div className="text-sm text-gray-500">{title}</div>
        <div className="text-2xl font-semibold mt-1">{value}</div>
      </div>
      <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
    </div>
    <div className="mt-3 flex items-end gap-2">
      <div className="flex-1 flex items-end gap-1 h-12">
        {trend.map((h, i) => (
          <div
            key={i}
            className="w-1.5 bg-gradient-to-t from-indigo-200 to-indigo-500 rounded"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <span className={`text-xs font-medium ${delta.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'}`}>{delta}</span>
    </div>
  </div>
);

export default function MetricsGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      <Card
        title="Requests Today"
        value="128,492"
        delta="+12.4%"
        icon={Globe}
        trend={[20, 35, 30, 45, 50, 60, 55, 70, 65, 80]}
      />
      <Card
        title="Error Rate"
        value="0.21%"
        delta="-0.05%"
        icon={Shield}
        trend={[40, 30, 35, 28, 22, 25, 20, 18, 15, 12]}
      />
      <Card
        title="Avg Latency"
        value="182 ms"
        delta="-8 ms"
        icon={BarChart3}
        trend={[70, 65, 60, 58, 55, 50, 48, 46, 44, 42]}
      />
      <Card
        title="Active Services"
        value="24"
        delta="+2"
        icon={Server}
        trend={[30, 32, 33, 35, 36, 36, 37, 38, 39, 40]}
      />
    </section>
  );
}
