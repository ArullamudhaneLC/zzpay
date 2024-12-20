import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types/auth';
import { getStoredUser } from '../utils/auth';

interface AuthContextType {
  user: string | null;
  setUser: (user: string | null) => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const response = await getStoredUser();
      if (response === 200) {
        setUser('storedUser');
      }
      // if (storedUser) {
      //   setUser(storedUser);
      // }
      setIsLoading(false);
    };

    // Listen for auth events
    const handleAuthExpired = () => setUser(null);
    const handleLogout = () => setUser(null);

    window.addEventListener('auth:expired', handleAuthExpired);
    window.addEventListener('auth:logout', handleLogout);

    initAuth();

    // Periodically validate the session
    const validateInterval = setInterval(async () => {
      const currentUser = await getStoredUser();
      if (!currentUser && user) {
        setUser(null);
      }
    }, 5 * 60 * 1000); // Check every 5 minutes

    return () => {
      window.removeEventListener('auth:expired', handleAuthExpired);
      window.removeEventListener('auth:logout', handleLogout);
      clearInterval(validateInterval);
    };
  }, [user]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
