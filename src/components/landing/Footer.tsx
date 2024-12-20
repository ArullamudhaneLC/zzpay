import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet } from 'lucide-react';

const footerLinks = {
  Company: ['About Us', 'Careers', 'Blog'],
  Services: ['Payouts', 'Reconciliation', 'Analytics'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Compliance']
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Wallet className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold text-white">zzzPay</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering businesses with seamless payment solutions
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      to="#"
                      className="hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} zzzPay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}