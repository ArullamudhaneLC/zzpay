import React from 'react';
import { Activity } from 'lucide-react';
import { StatCard } from '../components/ui/StatCard';
import { Card } from '../components/ui/Card';
import { PageHeader } from '../components/ui/PageHeader';
import { dashboardStats } from '../constants/stats';

const quickActions = ['Generate Report', 'Export Data', 'Update Profile', 'View Analytics'];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <PageHeader title="Dashboard Overview">
        <div className="text-sm text-gray-500">Last updated: Just now</div>
      </PageHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white border-primary-100">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 p-3 hover:bg-gradient-to-br from-primary-50/50 to-secondary-50/50 rounded-lg transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-50 to-secondary-50 border border-primary-100 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">New transaction processed</p>
                    <p className="text-xs text-gray-500">{i} hour ago</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="bg-white border-primary-100">
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action) => (
                <button
                  key={action}
                  className="p-4 text-left rounded-xl border border-primary-100 hover:border-primary-300 hover:bg-gradient-to-br from-primary-50 to-secondary-50 transition-colors"
                >
                  <p className="font-medium text-gray-900">{action}</p>
                  <p className="text-sm text-gray-500">Click to proceed</p>
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}