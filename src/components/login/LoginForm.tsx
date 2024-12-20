import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Shield } from 'lucide-react';
import { useToast } from '../../hooks/useToast';
import { PhoneInput } from './PhoneInput';
import { CredentialsStep } from './CredentialsStep';
import { LoginStep } from '../../hooks/useLogin';

interface LoginFormProps {
  step: LoginStep;
  setStep: (step: LoginStep) => void;
  isLoading: boolean;
  defaultUsername: string;
  onPhoneSubmit: (phone: string) => void;
  onCredentialsSubmit: (credentials: { username: string; password: string }) => void;
}

export function LoginForm({
  step,
  setStep,
  isLoading,
  defaultUsername,
  onPhoneSubmit,
  onCredentialsSubmit,
}: LoginFormProps) {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [showAdmin, setShowAdmin] = useState(false);

  const handleAdminClick = () => {
    navigate('/admin');
    setShowAdmin(false);
  };

  return (
    <div className="relative bg-white border-2 border-primary-100 rounded-2xl shadow-[0_8px_24px_-4px_rgba(16,185,129,0.1)] p-8">
      <div 
        className="flex justify-center mb-8 cursor-pointer"
        onClick={() => setShowAdmin(true)}
      >
        <div className="h-16 w-16 bg-gradient-light border-2 border-primary-100 rounded-2xl flex items-center justify-center">
          <Lock className="h-8 w-8 text-primary-600" />
        </div>
      </div>

      {step === 'phone' && (
        <PhoneInput onSubmit={onPhoneSubmit} isLoading={isLoading} />
      )}
      
      {step === 'credentials' && (
        <CredentialsStep
          onBack={() => setStep('phone')}
          onSubmit={onCredentialsSubmit}
          isLoading={isLoading}
          defaultUsername={defaultUsername}
        />
      )}

      {showAdmin && (
        <button
          onClick={handleAdminClick}
          className="absolute top-4 right-4 p-2 rounded-lg bg-gradient-primary text-white hover:opacity-90 transition-all flex items-center gap-2"
        >
          <Shield className="w-4 h-4" />
          <span className="text-sm">Admin</span>
        </button>
      )}
    </div>
  );
}