import { useState, useEffect, useCallback } from 'react';
import { validatePassword } from '../utils/validators';

interface UseAuthReturn {
  isAuthenticated: boolean;
  authenticate: (password: string) => boolean;
  logout: () => void;
  isLoading: boolean;
}

export const useAuth = (): UseAuthReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if auth token exists in localStorage
    try {
      return localStorage.getItem('nandini_auth') === 'true';
    } catch {
      return false;
    }
  });

  const [isLoading, setIsLoading] = useState(false);

  // Authenticate with password
  const authenticate = useCallback((password: string): boolean => {
    setIsLoading(true);
    try {
      // Simulate auth delay for security
      const isValid = validatePassword(password);
      if (isValid) {
        localStorage.setItem('nandini_auth', 'true');
        localStorage.setItem('nandini_auth_time', new Date().getTime().toString());
        setIsAuthenticated(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Authentication error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Logout
  const logout = useCallback(() => {
    try {
      localStorage.removeItem('nandini_auth');
      localStorage.removeItem('nandini_auth_time');
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, []);

  // Check session validity
  useEffect(() => {
    const checkSession = () => {
      try {
        const authTime = localStorage.getItem('nandini_auth_time');
        if (authTime) {
          const elapsedTime = Date.now() - parseInt(authTime);
          // Session expires after 24 hours
          if (elapsedTime > 24 * 60 * 60 * 1000) {
            logout();
          }
        }
      } catch (error) {
        console.error('Session check error:', error);
      }
    };

    const interval = setInterval(checkSession, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [logout]);

  return {
    isAuthenticated,
    authenticate,
    logout,
    isLoading,
  };
};
