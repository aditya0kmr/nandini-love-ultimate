import { NANDINI } from './constants';

// Password validation
export const validatePassword = (password: string): boolean => {
  return password === NANDINI.password;
};

// Email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Name validation
export const validateName = (name: string): boolean => {
  return name.trim().length >= 2 && name.trim().length <= 50;
};

// Message validation
export const validateMessage = (message: string): boolean => {
  return message.trim().length >= 5 && message.trim().length <= 1000;
};

// Form validation helper
export const validateFormField = (
  fieldName: string,
  value: string,
  rules: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    custom?: (val: string) => boolean;
  }
): { isValid: boolean; error?: string } => {
  if (rules.required && !value.trim()) {
    return { isValid: false, error: `${fieldName} is required` };
  }

  if (rules.minLength && value.trim().length < rules.minLength) {
    return { isValid: false, error: `${fieldName} must be at least ${rules.minLength} characters` };
  }

  if (rules.maxLength && value.trim().length > rules.maxLength) {
    return { isValid: false, error: `${fieldName} must not exceed ${rules.maxLength} characters` };
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    return { isValid: false, error: `${fieldName} format is invalid` };
  }

  if (rules.custom && !rules.custom(value)) {
    return { isValid: false, error: `${fieldName} validation failed` };
  }

  return { isValid: true };
};

// Check if string is a valid UUID
export const isValidUUID = (uuid: string): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
};

// Sanitize user input to prevent XSS
export const sanitizeInput = (input: string): string => {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
};

// Validate URL
export const isValidURL = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// Rate limiting check
export const checkRateLimit = (timestamps: number[], maxRequests: number, timeWindowMs: number): boolean => {
  const now = Date.now();
  const recentTimestamps = timestamps.filter(ts => now - ts < timeWindowMs);
  return recentTimestamps.length < maxRequests;
};

// Authentication token validation
export const isValidToken = (token: string): boolean => {
  if (!token || typeof token !== 'string') return false;
  return token.length > 0 && token.length < 500;
};
