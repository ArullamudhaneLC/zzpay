import React from 'react';
import { Shield } from 'lucide-react';
import { PhoneInput } from './PhoneInput';
import { CredentialsStep } from './CredentialsStep';
import { LoginStep } from '../../hooks/useLogin';

interface AdminLoginFormProps {
  step: LoginStep;
  setStep: (step: LoginStep) => void;
  isLoading: boolean;
  defaultUsername: string;
  onPhoneSubmit: (phone: string) => void;
  onCredentialsSubmit: (credentials: { username: string; password: string }) => void;
}

export function AdminLoginForm({
  step,
  setStep,
  isLoading,
  defaultUsername,
  onPhoneSubmit,
  onCredentialsSubmit,
}: AdminLoginFormProps) {
  return (
    <div className="bg-white border-2 border-primary-100 rounded-2xl shadow-[0_8px_24px_-4px_rgba(16,185,129,0.1)] p-8">
      <div className="flex justify-center mb-8">
        <div className="h-16 w-16 bg-gradient-light border-2 border-primary-100 rounded-2xl flex items-center justify-center">
          <Shield className="h-8 w-8 text-primary-600" />
        </div>
      </div>

      {step === 'phone' && (
        <PhoneInput onSubmit={onPhoneSubmit} isLoading={isLoading} isAdmin />
      )}
      
      {step === 'credentials' && (
        <CredentialsStep
          onBack={() => setStep('phone')}
          onSubmit={onCredentialsSubmit}
          isLoading={isLoading}
          defaultUsername={defaultUsername}
          isAdmin
        />
      )}
    </div>
  );
}