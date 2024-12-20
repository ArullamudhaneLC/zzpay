import React from 'react';
import { Phone } from 'lucide-react';
import { z } from 'zod';

// Indian phone number validation:
// - Must start with +91 or 91
// - Followed by a valid 10-digit Indian mobile number
// - First digit of mobile number must be between 6-9
const indianPhoneSchema = z.string().regex(
  /^(\+91|91)?[6-9]\d{9}$/,
  'Please enter a valid Indian mobile number'
);

interface PhoneStepProps {
  onNext: (phone: string) => void;
  isLoading: boolean;
}

export function PhoneStep({ onNext, isLoading }: PhoneStepProps) {
  const [error, setError] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // Format as per Indian convention
    if (digits.length <= 10) {
      return digits;
    } else if (digits.length === 12 && digits.startsWith('91')) {
      return '+' + digits;
    }
    return digits;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Ensure phone number starts with +91
    const formattedPhone = phone.startsWith('+91') ? phone : `+91${phone.replace(/^91/, '')}`;

    try {
      indianPhoneSchema.parse(formattedPhone);
      onNext(formattedPhone);
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-900">Welcome</h2>
        <p className="mt-2 text-sm text-teal-600">Enter your mobile number to continue</p>
      </div>

      {error && (
        <div className="rounded-xl bg-red-50 border-2 border-red-100 p-4">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
          Mobile Number
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-teal-500" />
          </div>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            className="block w-full pl-11 pr-4 py-3.5 bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-100 rounded-xl text-gray-900 placeholder-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
            placeholder="Enter 10-digit mobile number"
            maxLength={13} // +91 + 10 digits
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center px-4 py-3.5 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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