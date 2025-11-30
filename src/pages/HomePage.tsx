import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Navigation from '../components/Navigation';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div style={styles.container}>
      <Navigation />
      <div style={styles.content}>
        <div style={styles.heroSection}>
          <h1 style={styles.title}>Heart Our Story Heart</h1>
          <div style={styles.welcomeBox}>
            <h2 style={styles.subtitle}>Stars Welcome to Our World Stars</h2>
            <p>This is our special space created with love just for you!</p>
            <p style={styles.daysCounter}>We've been together for 684 amazing days!</p>
          </div>
        </div>

        <div style={styles.linksSection}>
          <h3 style={styles.sectionTitle}>Explore Our Love Story</h3>
          <div style={styles.linksGrid}>
            <div style={styles.linkCard} onClick={() => navigate('/letters')}>
              <span style={styles.linkIcon}>BookMark</span>
              <p>Love Letters</p>
            </div>
            <div style={styles.linkCard} onClick={() => navigate('/gallery')}>
              <span style={styles.linkIcon}>Camera</span>
              <p>Gallery</p>
            </div>
            <div style={styles.linkCard} onClick={() => navigate('/timeline')}>
              <span style={styles.linkIcon}>Calendar</span>
              <p>Timeline</p>
            </div>
            <div style={styles.linkCard} onClick={() => navigate('/surprise')}>
              <span style={styles.linkIcon}>Gift</span>
              <p>Surprise</p>
            </div>
          </div>
        </div>

        <div style={styles.quoteSection}>
          <p style={styles.quote}>With you, every moment feels like forever, and that's exactly how I want it to be.</p>
          <p style={styles.quoteAuthor}>- Aadi</p>
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #1a0033 0%, #2d1b4e 50%, #1a0033 100%)',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    overflow: 'auto',
  } as React.CSSProperties,
  content: {
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    paddingBottom: '120px',
  } as React.CSSProperties,
  heroSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    marginTop: '20px',
  } as React.CSSProperties,
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ff69b4',
    textAlign: 'center',
    margin: '0',
  } as React.CSSProperties,
  welcomeBox: {
    background: 'rgba(100, 50, 150, 0.3)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 105, 180, 0.3)',
    borderRadius: '20px',
    padding: '30px',
    textAlign: 'center',
    color: '#fff',
  } as React.CSSProperties,
  subtitle: {
    fontSize: '1.8rem',
    margin: '0 0 15px 0',
    color: '#ffd700',
  } as React.CSSProperties,
  daysCounter: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#ff69b4',
    margin: '15px 0 0 0',
  } as React.CSSProperties,
  linksSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  } as React.CSSProperties,
  sectionTitle: {
    fontSize: '1.5rem',
    color: '#ffd700',
    textAlign: 'center',
    margin: '10px 0',
  } as React.CSSProperties,
  linksGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
  } as React.CSSProperties,
  linkCard: {
    background: 'rgba(100, 50, 150, 0.25)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 105, 180, 0.3)',
    borderRadius: '15px',
    padding: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textAlign: 'center',
    color: '#fff',
  } as React.CSSProperties,
  linkIcon: {
    fontSize: '2rem',
    display: 'block',
    marginBottom: '10px',
  } as React.CSSProperties,
  quoteSection: {
    background: 'rgba(255, 105, 180, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '2px solid rgba(255, 105, 180, 0.3)',
    borderRadius: '15px',
    padding: '25px',
    textAlign: 'center',
  } as React.CSSProperties,
  quote: {
    fontSize: '1.1rem',
    fontStyle: 'italic',
    color: '#fff',
    margin: '0 0 10px 0',
  } as React.CSSProperties,
  quoteAuthor: {
    fontSize: '0.95rem',
    color: '#ffd700',
    margin: '0',
  } as React.CSSProperties,
};

export default HomePage;
