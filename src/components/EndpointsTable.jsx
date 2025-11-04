import React, { useState } from 'react';
import { Copy, CheckCircle2, AlertTriangle } from 'lucide-react';

const Badge = ({ children, color }) => (
  <span className={`px-2 py-0.5 text-xs rounded-md font-medium ${color}`}>{children}</span>
);

const endpoints = [
  { method: 'GET', path: '/api/v1/users', status: 'Operational', latency: '132 ms', uptime: '99.99%' },
  { method: 'POST', path: '/api/v1/auth/login', status: 'Operational', latency: '210 ms', uptime: '99.95%' },
  { method: 'GET', path: '/api/v1/orders', status: 'Degraded', latency: '482 ms', uptime: '99.80%' },
  { method: 'DELETE', path: '/api/v1/orders/:id', status: 'Operational', latency: '190 ms', uptime: '99.90%' },
];

const methodColor = (m) => {
  switch (m) {
    case 'GET':
      return 'bg-emerald-50 text-emerald-700 border border-emerald-200';
    case 'POST':
      return 'bg-indigo-50 text-indigo-700 border border-indigo-200';
    case 'PUT':
      return 'bg-amber-50 text-amber-700 border border-amber-200';
    case 'DELETE':
      return 'bg-rose-50 text-rose-700 border border-rose-200';
    default:
      return 'bg-gray-50 text-gray-700 border border-gray-200';
  }
};

export default function EndpointsTable() {
  const [copied, setCopied] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(''), 1500);
  };

  return (
    <section className="rounded-xl border border-gray-200 overflow-hidden bg-white">
      <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h3 className="font-semibold">Endpoints</h3>
          <p className="text-xs text-gray-500">Your most active API routes right now</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              <th className="text-left font-medium px-4 py-3">Method</th>
              <th className="text-left font-medium px-4 py-3">Path</th>
              <th className="text-left font-medium px-4 py-3">Status</th>
              <th className="text-left font-medium px-4 py-3">Latency</th>
              <th className="text-left font-medium px-4 py-3">Uptime</th>
              <th className="text-right font-medium px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {endpoints.map((e) => (
              <tr key={e.method + e.path} className="border-t border-gray-100 hover:bg-gray-50/60">
                <td className="px-4 py-3"><span className={`text-xs px-2 py-1 rounded-md border ${methodColor(e.method)}`}>{e.method}</span></td>
                <td className="px-4 py-3 font-mono text-xs md:text-sm text-gray-800">{e.path}</td>
                <td className="px-4 py-3">
                  {e.status === 'Operational' ? (
                    <Badge color="bg-emerald-50 text-emerald-700 border border-emerald-200">Operational</Badge>
                  ) : (
                    <Badge color="bg-amber-50 text-amber-700 border border-amber-200 inline-flex items-center gap-1"><AlertTriangle className="h-4 w-4" />Degraded</Badge>
                  )}
                </td>
                <td className="px-4 py-3 text-gray-700">{e.latency}</td>
                <td className="px-4 py-3 text-gray-700">{e.uptime}</td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => handleCopy(e.path)}
                    className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 hover:bg-gray-50"
                  >
                    {copied === e.path ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" /> Copy URL
                      </>
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
