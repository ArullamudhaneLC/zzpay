import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from './useToast';
import { loginUser, loginAdmin, verifyPhone } from '../services/auth';
import { LoginCredentials } from '../types/auth';
import { getUsernameByPhone, login } from '../utils/auth';

export type LoginStep = 'phone' | 'credentials';

export function useLogin(isAdmin: boolean = false) {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const { addToast } = useToast();
  const [step, setStep] = useState<LoginStep>('phone');
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState('');
  const [defaultUsername, setDefaultUsername] = useState('');

  const handlePhoneSubmit = async (phoneNumber: string) => {
    setIsLoading(true);
    try {
      const response = await getUsernameByPhone(phoneNumber);
      console.log(phoneNumber);
      setDefaultUsername(isAdmin ? 'admin' : response);
      setPhone(phoneNumber);
      setStep('credentials');
    } catch (error) {
      addToast('Failed to verify phone number', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCredentialsSubmit = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    try {
      const loginFn = isAdmin ? loginAdmin : loginUser;
      const response = await login(credentials);
      if(response === 200) {
        setUser(defaultUsername);
        addToast('Successfully logged in', 'success');
        navigate('/dashboard', { replace: true });

      } else {
        addToast('Try again', 'warning');
      }
     
    } catch (error) {
      addToast('Invalid credentials', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    step,
    setStep,
    isLoading,
    phone,
    defaultUsername,
    handlePhoneSubmit,
    handleCredentialsSubmit,
  };
}
