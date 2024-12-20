import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLogin } from '../hooks/useLogin';
import { LoginForm } from '../components/login/LoginForm';

export default function Login() {
  const {
    step,
    setStep,
    isLoading,
    defaultUsername,
    handlePhoneSubmit,
    handleCredentialsSubmit,
  } = useLogin();

  return (
    <div className="min-h-screen bg-gradient-light">
      <div className="fixed top-0 left-0 right-0 p-4">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
      
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md space-y-6">
          <LoginForm
            step={step}
            setStep={setStep}
            isLoading={isLoading}
            defaultUsername={defaultUsername}
            onPhoneSubmit={handlePhoneSubmit}
            onCredentialsSubmit={handleCredentialsSubmit}
          />
        </div>
      </div>
    </div>
  );
}