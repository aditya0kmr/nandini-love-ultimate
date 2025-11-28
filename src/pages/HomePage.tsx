import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import Navigation from '../components/Navigation';
import ImageWithLazy from '../components/ImageWithLazy';
import { DESIGN, CONTENT } from '../utils/constants';

const HomePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { nandiniName, qualities, favoriteQuotes } = CONTENT.about;

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  return (
    <div style={styles.container}>
      <Navigation />
      <div style={styles.content}>
        {/* Hero Section with 3D */}
        <div style={styles.heroSection}>
          <div style={styles.heroContent}>
            <h1 style={styles.title}>💛 Our Story Begins 3D</h1>
            <p style={styles.subtitle}>{nandiniName} - My Everything</p>
            <div style={styles.description}>
              <p>You are the love of my life. Every moment with you is magical.</p>
              <p>This website is dedicated to celebrating you, us, and our beautiful journey together.</p>
            </div>
          </div>
          <div style={styles.heroImage}>
            <ImageWithLazy
              src="image_001.jpg"
              alt="Our moment"
              width="300px"
              height="300px"
            />
          </div>
        </div>

        {/* Qualities Section */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Why I Love You</h2>
          <div style={styles.qualitiesGrid}>
            {qualities.map((q, idx) => (
              <div key={idx} style={styles.qualityCard}>
                <div style={styles.emoji}>{q.emoji}</div>
                <h3 style={styles.qualityTitle}>{q.title}</h3>
                <p style={styles.qualityDesc}>{q.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Quote */}
        <div style={styles.quoteSection}>
          <h2 style={styles.quoteTitle}>"❤️ {favoriteQuotes[0]?.text} ❤️"</h2>
          <p style={styles.quoteAuthor}>- {favoriteQuotes[0]?.author}</p>
        </div>

        {/* CTA Buttons */}
        <div style={styles.ctaButtons}>
          <button style={{...styles.btn, ...styles.primaryBtn}} onClick={() => navigate('/love-letters')}>
            📝 Read Love Letters
          </button>
          <button style={{...styles.btn, ...styles.secondaryBtn}} onClick={() => navigate('/gallery')}>
            📸 View Gallery
          </button>
          <button style={{...styles.btn, ...styles.secondaryBtn}} onClick={() => navigate('/timeline')}>
            💭 Our Timeline
          </button>
          <button style={{...styles.btn, ...styles.secondaryBtn}} onClick={() => navigate('/surprise')}>
            🎉 Surprise Me!
          </button>
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
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px'
  },
  heroSection: {
    display: 'flex' as const,
    alignItems: 'center',
    gap: '60px',
    marginBottom: '80px',
    flexWrap: 'wrap' as const
  },
  heroContent: {
    flex: 1,
    minWidth: '300px'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: DESIGN.colors.white,
    marginBottom: '1rem',
    textShadow: '0 2px 20px rgba(255, 20, 147, 0.4)'
  },
  subtitle: {
    fontSize: '2rem',
    color: DESIGN.colors.lightPink,
    marginBottom: '2rem'
  },
  description: {
    fontSize: '1.1rem',
    color: DESIGN.colors.white,
    lineHeight: '1.8',
    opacity: 0.95
  },
  heroImage: {
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    justifyContent: 'center'
  },
  section: {
    marginBottom: '80px'
  },
  sectionTitle: {
    fontSize: '2.5rem',
    color: DESIGN.colors.white,
    marginBottom: '3rem',
    textAlign: 'center' as const
  },
  qualitiesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  qualityCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: `2px solid ${DESIGN.colors.lightPink}`,
    borderRadius: DESIGN.borderRadius.large,
    padding: '2rem',
    textAlign: 'center' as const,
    transition: DESIGN.transitions.smooth,
    backdropFilter: 'blur(10px)',
    '&:hover': {
      transform: 'translateY(-10px)',
      boxShadow: `0 20px 40px rgba(255, 20, 147, 0.3)`
    }
  },
  emoji: {
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  qualityTitle: {
    fontSize: '1.3rem',
    color: DESIGN.colors.lightPink,
    marginBottom: '0.5rem'
  },
  qualityDesc: {
    color: DESIGN.colors.white,
    fontSize: '0.95rem'
  },
  quoteSection: {
    background: 'rgba(255, 20, 147, 0.1)',
    border: `3px solid ${DESIGN.colors.primary}`,
    borderRadius: DESIGN.borderRadius.large,
    padding: '3rem',
    textAlign: 'center' as const,
    marginBottom: '60px',
    backdropFilter: 'blur(10px)'
  },
  quoteTitle: {
    fontSize: '2rem',
    color: DESIGN.colors.white,
    marginBottom: '1rem',
    fontStyle: 'italic'
  },
  quoteAuthor: {
    fontSize: '1rem',
    color: DESIGN.colors.lightPink,
    fontWeight: 'bold'
  },
  ctaButtons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    marginTop: '4rem'
  },
  btn: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: DESIGN.borderRadius.large,
    cursor: 'pointer',
    transition: DESIGN.transitions.smooth,
    boxShadow: '0 10px 30px rgba(255, 20, 147, 0.3)'
  },
  primaryBtn: {
    background: DESIGN.gradients.secondary,
    color: DESIGN.colors.white
  },
  secondaryBtn: {
    background: 'rgba(255, 255, 255, 0.2)',
    color: DESIGN.colors.white,
    border: `2px solid ${DESIGN.colors.lightPink}`
  }
};

export default HomePage;
