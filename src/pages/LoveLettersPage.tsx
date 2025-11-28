import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { DESIGN, CONTENT } from '../utils/constants';

const LoveLettersPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedLetter, setSelectedLetter] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  const letters = CONTENT.loveletters;
  const current = letters[selectedLetter];

  return (
    <div style={styles.container}>
      <Navigation />
      <div style={styles.content}>
        <h1 style={styles.title}>📝 Love Letters to Nandini</h1>
        <p style={styles.subtitle}>My thoughts, feelings, and everything I want to say...</p>

        <div style={styles.layout}>
          {/* Letter List Sidebar */}
          <div style={styles.sidebar}>
            <h3 style={styles.sidebarTitle}>Letters</h3>
            <div style={styles.letterList}>
              {letters.map((letter, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedLetter(idx);
                    setShowPreview(false);
                  }}
                  style={{
                    ...styles.letterButton,
                    ...(selectedLetter === idx ? styles.letterButtonActive : {})
                  }}
                >
                  <span style={styles.letterIndex}>{idx + 1}</span>
                  <span style={styles.letterTitle}>{letter.title}</span>
                  <span style={styles.letterDate}>{letter.date}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Letter Display */}
          <div style={styles.letterDisplay}>
            <div style={styles.letterHeader}>
              <h2 style={styles.letterTitle}>{current.title}</h2>
              <p style={styles.letterDate}>{current.date}</p>
            </div>

            <div style={styles.letterContent}>
              {current.content.split('\n\n').map((para, idx) => (
                <p key={idx} style={styles.paragraph}>{para}</p>
              ))}
            </div>

            <div style={styles.signature}>
              <p>Forever yours,</p>
              <p style={styles.signer}>Aditya ❤️</p>
            </div>

            <div style={styles.actions}>
              <button
                style={styles.btn}
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </button>
              <button
                style={styles.btn}
                onClick={() => setSelectedLetter((selectedLetter + 1) % letters.length)}
              >
                Next Letter →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: DESIGN.gradients.primary,
    paddingTop: '80px',
    paddingBottom: '40px'
  },
  content: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '40px 20px'
  },
  title: {
    fontSize: '3rem',
    color: DESIGN.colors.white,
    textAlign: 'center' as const,
    marginBottom: '0.5rem'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: DESIGN.colors.lightPink,
    textAlign: 'center' as const,
    marginBottom: '3rem'
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    gap: '3rem',
    alignItems: 'start'
  },
  sidebar: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: `2px solid ${DESIGN.colors.primary}`,
    borderRadius: DESIGN.borderRadius.large,
    padding: '1.5rem',
    backdropFilter: 'blur(10px)',
    height: 'fit-content',
    stickyTop: '100px',
    position: 'sticky' as const,
    top: '100px'
  },
  sidebarTitle: {
    color: DESIGN.colors.lightPink,
    marginBottom: '1rem',
    fontSize: '1.2rem'
  },
  letterList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem'
  },
  letterButton: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: `1px solid ${DESIGN.colors.lightPink}`,
    color: DESIGN.colors.white,
    padding: '0.75rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    textAlign: 'left' as const,
    transition: DESIGN.transitions.smooth,
    fontSize: '0.85rem'
  },
  letterButtonActive: {
    background: DESIGN.gradients.secondary,
    border: `2px solid ${DESIGN.colors.white}`
  },
  letterIndex: {
    display: 'block',
    fontSize: '0.75rem',
    opacity: 0.7
  },
  letterTitle: {
    display: 'block',
    fontWeight: 'bold' as const,
    marginTop: '0.25rem'
  },
  letterDate: {
    display: 'block',
    fontSize: '0.75rem',
    opacity: 0.7,
    marginTop: '0.25rem'
  },
  letterDisplay: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: `3px solid ${DESIGN.colors.primary}`,
    borderRadius: DESIGN.borderRadius.large,
    padding: '3rem',
    backdropFilter: 'blur(10px)',
    minHeight: '500px'
  },
  letterHeader: {
    borderBottom: `2px solid ${DESIGN.colors.lightPink}`,
    paddingBottom: '2rem',
    marginBottom: '2rem'
  },
  letterContent: {
    color: DESIGN.colors.white,
    lineHeight: '1.8',
    marginBottom: '2rem',
    fontSize: '1rem'
  },
  paragraph: {
    marginBottom: '1rem'
  },
  signature: {
    textAlign: 'right' as const,
    color: DESIGN.colors.lightPink',
    fontSize: '1.1rem',
    marginBottom: '2rem'
  },
  signer: {
    fontSize: '1.3rem',
    fontWeight: 'bold' as const
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'flex-end',
    borderTop: `1px solid ${DESIGN.colors.lightPink}`,
    paddingTop: '1.5rem'
  },
  btn: {
    padding: '0.75rem 1.5rem',
    background: DESIGN.gradients.secondary,
    color: DESIGN.colors.white,
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: 'bold' as const,
    transition: DESIGN.transitions.smooth
  }
};

export default LoveLettersPage;
