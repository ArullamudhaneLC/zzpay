import React from 'react';
import { Phone, Shield } from 'lucide-react';
import { z } from 'zod';
import { useToast } from '../../hooks/useToast';

const indianPhoneSchema = z.string().regex(
  /^(\+91|91)?[6-9]\d{9}$/,
  'Please enter a valid Indian mobile number'
);

interface AdminPhoneStepProps {
  onNext: (phone: string) => void;
  isLoading: boolean;
}

export function AdminPhoneStep({ onNext, isLoading }: AdminPhoneStepProps) {
  const { addToast } = useToast();
  const [phone, setPhone] = React.useState('');

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');
    if (digits.length <= 10) return digits;
    if (digits.length === 12 && digits.startsWith('91')) return '+' + digits;
    return digits;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone.trim()) {
      addToast('Please enter your phone number', 'warning');
      return;
    }

    const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone.replace(/^91/, '')}`;

    try {
      indianPhoneSchema.parse(formattedPhone);
      onNext(formattedPhone);
    } catch (err) {
      if (err instanceof z.ZodError) {
        addToast(err.errors[0].message, 'error');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Admin Login</h2>
        <div className="flex items-center justify-center gap-2 mt-2">
          <Shield className="w-4 h-4 text-primary-600" />
          <p className="text-sm text-primary-600">Enter your registered admin phone number</p>
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Phone Number
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
            placeholder="Enter admin phone number"
            maxLength={13}
          />
        </div>
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