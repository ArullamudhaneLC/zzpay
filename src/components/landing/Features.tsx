import React from 'react';
import { ShieldCheck, Zap, BadgeCheck, HeadphonesIcon, Smartphone, FileCheck } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Bank-Grade Security',
    description: 'Multi-layer security with end-to-end encryption and advanced fraud detection'
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process transactions in milliseconds with our high-performance infrastructure'
  },
  {
    icon: BadgeCheck,
    title: 'PCI DSS Certified',
    description: 'Compliant with highest security standards for payment processing'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Dedicated support team available round-the-clock via phone, email, and chat'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Fully responsive solutions that work seamlessly on all devices'
  },
  {
    icon: FileCheck,
    title: 'RBI Compliant',
    description: 'Fully compliant with RBI guidelines and regulations'
  }
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose zzzPay?
          </h2>
          <p className="text-lg text-gray-600">
            Experience the next generation of payment solutions with our cutting-edge features
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex items-start gap-4 p-6 rounded-xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-blue-50">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}