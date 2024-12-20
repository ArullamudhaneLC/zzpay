import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend: string;
}

export function StatCard({ label, value, icon: Icon, trend }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl border border-primary-100 shadow-sm hover:shadow-md transition-all p-6">
      <div className="flex items-center justify-between">
        <div className="p-2.5 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border border-primary-100">
          <Icon className="w-6 h-6 text-primary-600" />
        </div>
        <span className="px-2.5 py-1 bg-primary-50 text-primary-600 text-sm font-medium rounded-full border border-primary-100">
          {trend}
        </span>
      </div>
      <p className="mt-4 text-2xl font-semibold text-gray-900">{value}</p>
      <p className="text-gray-500 text-sm mt-1">{label}</p>
    </div>
  );
}