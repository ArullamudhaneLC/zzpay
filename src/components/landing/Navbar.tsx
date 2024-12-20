import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet } from 'lucide-react';
import { Button } from '../ui/Button';
import { IconWrapper } from '../ui/IconWrapper';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 hover-scale">
            <IconWrapper icon={Wallet} variant="primary" />
            <span className="text-xl font-bold text-gray-900">zzzPay</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-primary-500 transition-colors">Home</Link>
            <Link to="/services" className="text-gray-600 hover:text-primary-500 transition-colors">Services</Link>
            <Link to="/about" className="text-gray-600 hover:text-primary-500 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary-500 transition-colors">Contact</Link>
            <Button to="/login" variant="primary">Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}