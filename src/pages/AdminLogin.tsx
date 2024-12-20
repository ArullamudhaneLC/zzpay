import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLogin } from '../hooks/useLogin';
import { AdminLoginForm } from '../components/login/AdminLoginForm';

export default function AdminLogin() {
  const {
    step,
    setStep,
    isLoading,
    defaultUsername,
    handlePhoneSubmit,
    handleCredentialsSubmit,
  } = useLogin(true); // Pass true to indicate admin login

  return (
    <div className="min-h-screen bg-gradient-light">
      <div className="fixed top-0 left-0 right-0 p-4">
        <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
      
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <AdminLoginForm
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