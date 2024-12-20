import React from 'react';
import { Calendar, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const transactions = [
  { id: 1, type: 'credit', amount: '+$2,400', description: 'Payment received', date: '2024-03-15', status: 'completed' },
  { id: 2, type: 'debit', amount: '-$1,250', description: 'Withdrawal', date: '2024-03-14', status: 'completed' },
  { id: 3, type: 'credit', amount: '+$3,100', description: 'Payment received', date: '2024-03-13', status: 'completed' },
  { id: 4, type: 'debit', amount: '-$890', description: 'Withdrawal', date: '2024-03-12', status: 'pending' },
];

export default function History() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Transaction History</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Export History
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <Calendar className="w-5 h-5 text-gray-500" />
            <select className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>

          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${
                    transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {transaction.type === 'credit' ? (
                      <ArrowDownLeft className={`w-5 h-5 ${
                        transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`} />
                    ) : (
                      <ArrowUpRight className={`w-5 h-5 ${
                        transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                      }`} />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-medium ${
                    transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.amount}
                  </p>
                  <p className={`text-sm ${
                    transaction.status === 'completed' ? 'text-green-500' : 'text-yellow-500'
                  }`}>
                    {transaction.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}