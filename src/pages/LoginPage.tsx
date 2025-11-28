import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import LoadingSpinner from '../components/LoadingSpinner';
import ParticleEffect from '../components/ParticleEffect';
import { DESIGN, CONTENT } from '../utils/constants';

const LoginPage: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (password === 'nanniii') {
        login();
        navigate('/home');
      } else {
        setError('Incorrect password. Try again! 💝');
        setPassword('');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <ParticleEffect />
      <div style={styles.content}>
        <h1 style={styles.title}>💕 For Nandini 💕</h1>
        <p style={styles.subtitle}>Welcome to our love story...</p>
        
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Enter the password for Nandini's heart 🔐"
              style={styles.input}
              disabled={loading}
              autoFocus
            />
          </div>
          
          {error && <p style={styles.error}>{error}</p>}
          
          <button
            type="submit"
            style={styles.button}
            disabled={loading || !password}
          >
            {loading ? <LoadingSpinner /> : 'Enter 💝'}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: DESIGN.gradients.primary,
    position: 'relative' as const,
    overflow: 'hidden'
  },
  content: {
    textAlign: 'center' as const,
    zIndex: 10,
    animation: 'fadeIn 0.8s ease-in'
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: DESIGN.colors.white,
    marginBottom: '1rem',
    textShadow: '0 2px 20px rgba(255, 20, 147, 0.5)'
  },
  subtitle: {
    fontSize: '1.5rem',
    color: DESIGN.colors.lightPink,
    marginBottom: '3rem'
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1.5rem',
    maxWidth: '400px',
    margin: '0 auto'
  },
  inputGroup: {
    position: 'relative' as const
  },
  input: {
    width: '100%',
    padding: '1rem',
    fontSize: '1rem',
    border: `2px solid ${DESIGN.colors.primary}`,
    borderRadius: DESIGN.borderRadius.large,
    background: 'rgba(255, 255, 255, 0.9)',
    color: DESIGN.colors.darkText,
    transition: DESIGN.transitions.smooth,
    '&:focus': {
      outline: 'none',
      boxShadow: `0 0 20px ${DESIGN.colors.primary}`
    }
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    background: DESIGN.gradients.secondary,
    color: DESIGN.colors.white,
    border: 'none',
    borderRadius: DESIGN.borderRadius.large,
    cursor: 'pointer',
    transition: DESIGN.transitions.smooth,
    boxShadow: '0 10px 30px rgba(255, 20, 147, 0.3)',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 15px 40px rgba(255, 20, 147, 0.5)'
    },
    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed'
    }
  },
  error: {
    color: '#ff6b9d',
    fontSize: '0.95rem',
    fontWeight: 'bold',
    animation: 'shake 0.5s ease-in-out'
  }
};

export default LoginPage;
