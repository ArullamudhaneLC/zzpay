import React from 'react';
import { Banknote, QrCode, Building, Shield, FileSpreadsheet, BarChart3, Webhook, Users2 } from 'lucide-react';

const services = [
  {
    icon: Banknote,
    title: 'Bulk Payouts',
    description: 'Process thousands of payments in one go with our advanced bulk processing system.'
  },
  {
    icon: QrCode,
    title: 'UPI Solutions',
    description: 'Seamless UPI integration with support for all major UPI apps and dynamic QR codes.'
  },
  {
    icon: Building,
    title: 'Bank Transfers',
    description: 'Direct bank transfers via NEFT, RTGS, and IMPS with instant processing.'
  },
  {
    icon: Shield,
    title: 'Secure Gateway',
    description: 'PCI DSS compliant payment gateway with advanced fraud detection.'
  },
  {
    icon: FileSpreadsheet,
    title: 'Auto Reconciliation',
    description: 'Automated reconciliation with detailed reports and real-time tracking.'
  },
  {
    icon: BarChart3,
    title: 'Smart Reports',
    description: 'Comprehensive reporting with customizable dashboards and insights.'
  },
  {
    icon: Webhook,
    title: 'Business API',
    description: 'Robust API integration for seamless business process automation.'
  },
  {
    icon: Users2,
    title: 'Vendor Payments',
    description: 'Streamlined vendor payment management with approval workflows.'
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            Comprehensive payment solutions designed to streamline your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex p-3 rounded-xl bg-blue-50 mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}