import React from 'react';
import { User, KeyRound, ArrowLeft } from 'lucide-react';
import { z } from 'zod';
import { useToast } from '../../hooks/useToast';

const credentialsSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

interface CredentialsStepProps {
  onBack: () => void;
  onSubmit: (credentials: { username: string; password: string }) => void;
  isLoading: boolean;
  defaultUsername?: string;
  isAdmin?: boolean;
}

export function CredentialsStep({ 
  onBack, 
  onSubmit, 
  isLoading, 
  defaultUsername,
  isAdmin 
}: CredentialsStepProps) {
  const { addToast } = useToast();
  const [username, setUsername] = React.useState(defaultUsername || '');
  const [password, setPassword] = React.useState('');

  const validateForm = () => {
    if (!username.trim()) {
      addToast('Please enter your username', 'warning');
      return false;
    }
    if (!password.trim()) {
      addToast('Please enter your password', 'warning');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const credentials = { username, password };
      credentialsSchema.parse(credentials);
      onSubmit(credentials);
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
          {isAdmin ? 'Admin Login' : 'Welcome Back'}
        </h2>
        <p className="mt-2 text-sm text-primary-600">Enter your credentials to continue</p>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1.5">
            Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-primary-500" />
            </div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full pl-11 pr-4 py-3.5 bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-100 rounded-xl text-gray-900 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="Enter your username"
              autoComplete="username"
              readOnly={isAdmin}
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1.5">
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <KeyRound className="h-5 w-5 text-primary-500" />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-11 pr-4 py-3.5 bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-100 rounded-xl text-gray-900 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center px-4 py-3.5 rounded-xl text-sm font-medium text-white bg-gradient-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="h-5 w-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
          ) : (
            'Sign in'
          )}
        </button>

        <button
          type="button"
          onClick={onBack}
          className="w-full flex items-center justify-center px-4 py-3.5 rounded-xl text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Phone Number
        </button>
      </div>
    </form>
  );
}