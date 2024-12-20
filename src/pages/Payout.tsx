import React from 'react';
import { CreditCard, Wallet, Building2 } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';

const paymentMethods = [
  { icon: Building2, title: 'Bank Transfer', desc: '****1234', primary: true },
  { icon: CreditCard, title: 'Credit Card', desc: '****5678', primary: false },
];

export default function Payout() {
  return (
    <div className="space-y-6">
      <PageHeader title="Payout Settings">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Request Payout
        </button>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card title="Available Balance">
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
            <Wallet className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold text-gray-900">$12,750.00</p>
              <p className="text-sm text-gray-600">Available for withdrawal</p>
            </div>
          </div>
        </Card>

        <Card title="Next Scheduled Payout">
          <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
            <Wallet className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold text-gray-900">March 25, 2024</p>
              <p className="text-sm text-gray-600">Estimated amount: $5,000.00</p>
            </div>
          </div>
        </Card>
      </div>

      <Card title="Payout Methods">
        <div className="space-y-4">
          {paymentMethods.map((method) => {
            const Icon = method.icon;
            return (
              <div
                key={method.title}
                className={`flex items-center justify-between p-4 rounded-lg border ${
                  method.primary ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${
                    method.primary ? 'bg-blue-100' : 'bg-gray-100'
                  }`}>
                    <Icon className={`w-6 h-6 ${
                      method.primary ? 'text-blue-600' : 'text-gray-600'
                    }`} />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{method.title}</p>
                    <p className="text-sm text-gray-500">{method.desc}</p>
                  </div>
                </div>
                {method.primary && (
                  <span className="text-sm font-medium text-blue-600">Primary</span>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
}