import React from 'react';
import { Users, TrendingUp, ShieldCheck, Building2 } from 'lucide-react';

const stats = [
  { label: 'Active Merchants', value: '10,000+', icon: Users, desc: 'Trusted by businesses across India' },
  { label: 'Monthly Volume', value: '₹500Cr+', icon: TrendingUp, desc: 'Processed securely through our platform' },
  { label: 'Success Rate', value: '99.9%', icon: ShieldCheck, desc: 'Industry-leading transaction success' },
  { label: 'Bank Partners', value: '50+', icon: Building2, desc: 'Direct integration with major banks' },
];

export default function Stats() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="inline-flex p-3 rounded-xl bg-blue-50 mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}