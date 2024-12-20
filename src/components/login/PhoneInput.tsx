import React from 'react';
import { Phone } from 'lucide-react';
import { z } from 'zod';
import { useToast } from '../../hooks/useToast';

const indianPhoneSchema = z.string().regex(
  /^[6-9]\d{9}$/,
  'Please enter a valid 10-digit mobile number'
);

interface PhoneInputProps {
  onSubmit: (phone: string) => void;
  isLoading: boolean;
  isAdmin?: boolean;
}

export function PhoneInput({ onSubmit, isLoading, isAdmin }: PhoneInputProps) {
  const { addToast } = useToast();
  const [phone, setPhone] = React.useState('');

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // Format for display: XXXXX XXXXX
    if (digits.length <= 5) return digits;
    return `${digits.slice(0, 5)} ${digits.slice(5, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clean the phone number before validation
    const cleanPhone = phone.replace(/\D/g, '');

    try {
      // indianPhoneSchema.parse(cleanPhone);
      onSubmit(cleanPhone);
    } catch (err) {
      if (err instanceof z.ZodError) {
        addToast(err.errors[0].message, 'error');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">
          {isAdmin ? 'Admin Login' : 'Welcome'}
        </h2>
        <p className="mt-2 text-sm text-primary-600">
          Enter your {isAdmin ? 'admin ' : ''}mobile number to continue
        </p>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Mobile Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-primary-500" />
          </div>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            className="block w-full pl-11 pr-4 py-3.5 bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-100 rounded-xl text-gray-900 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
            placeholder="Enter 10-digit mobile number"
            maxLength={11} // 5 digits + space + 5 digits
          />
        </div>
        <p className="mt-1.5 text-sm text-gray-500">Format: XXXXX XXXXX</p>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center px-4 py-3.5 rounded-xl text-sm font-medium text-white bg-gradient-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="h-5 w-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        ) : (
          'Continue'
        )}
      </button>
    </form>
  );
}