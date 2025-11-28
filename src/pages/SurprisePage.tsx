import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import GameCard from '../components/GameCard';
import { DESIGN } from '../utils/constants';

const SurprisePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  const games = [
    { id: 'hearts', title: '💛 Heart Rain', description: 'Let the love rain! Click hearts falling from the sky' },
    { id: 'memory', title: '🧩 Memory Game', description: 'Match pairs of our memories' },
    { id: 'builder', title: '💞 Love Builder', description: 'Build our love story together' },
    { id: 'ring', title: '💍 Ring Toss', description: 'Toss rings and win prizes for Nandini' }
  ];

  const renderGame = (gameId: string) => {
    switch (gameId) {
      case 'hearts':
        return (
          <div style={styles.gameContainer}>
            <h2 style={styles.gameTitle}>💕 Heart Rain</h2>
            <div style={styles.gameArea}>
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  onClick={() => setScore(score + 1)}
                  style={{
                    ...styles.gameItem,
                    animation: `fall ${3 + Math.random() * 2}s linear infinite`,
                    animationDelay: `${i * 0.3}s`,
                    left: `${Math.random() * 90}%`
                  }}
                >
                  ❤️
                </div>
              ))}
            </div>
            <p style={styles.score}>Score: {score}</p>
          </div>
        );
      case 'memory':
        return (
          <div style={styles.gameContainer}>
            <h2 style={styles.gameTitle}>🧩 Memory Game</h2>
            <div style={styles.memoryGrid}>
              {[...Array(8)].map((_, i) => (
                <button
                  key={i}
                  style={styles.memoryCard}
                  onClick={() => setScore(score + 1)}
                >
                  🎭
                </button>
              ))}
            </div>
            <p style={styles.score}>Matches: {Math.floor(score / 2)}</p>
          </div>
        );
      default:
        return (
          <div style={styles.gameContainer}>
            <h2 style={styles.gameTitle}>🎮 Game Ready</h2>
            <p style={styles.gameDescription}>Click to start playing!</p>
          </div>
        );
    }
  };

  return (
    <div style={styles.container}>
      <Navigation />
      <div style={styles.content}>
        <h1 style={styles.title}>🎉 Surprise for Nandini!</h1>
        <p style={styles.subtitle}>Let's have some fun together!</p>

        {selectedGame ? (
          <div>
            {renderGame(selectedGame)}
            <button
              onClick={() => {
                setSelectedGame(null);
                setScore(0);
              }}
              style={styles.backBtn}
            >
              ← Back to Games
            </button>
          </div>
        ) : (
          <div style={styles.gamesGrid}>
            {games.map((game) => (
              <div
                key={game.id}
                onClick={() => setSelectedGame(game.id)}
                style={styles.gameCard}
              >
                <h3 style={styles.gameCardTitle}>{game.title}</h3>
                <p style={styles.gameCardDesc}>{game.description}</p>
                <button style={styles.playBtn}>Play Now →</button>
              </div>
            ))}
          </div>
        )}
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
  gamesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  },
  gameCard: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: `2px solid ${DESIGN.colors.primary}`,
    borderRadius: DESIGN.borderRadius.large,
    padding: '2rem',
    cursor: 'pointer',
    transition: DESIGN.transitions.smooth,
    textAlign: 'center' as const,
    backdropFilter: 'blur(10px)'
  },
  gameCardTitle: {
    fontSize: '1.5rem',
    color: DESIGN.colors.white,
    marginBottom: '0.5rem'
  },
  gameCardDesc: {
    color: DESIGN.colors.lightPink,
    marginBottom: '1rem'
  },
  playBtn: {
    padding: '0.75rem 1.5rem',
    background: DESIGN.gradients.secondary,
    color: DESIGN.colors.white,
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: 'bold' as const,
    transition: DESIGN.transitions.smooth
  },
  gameContainer: {
    background: 'rgba(255, 255, 255, 0.1)',
    border: `3px solid ${DESIGN.colors.primary}`,
    borderRadius: DESIGN.borderRadius.large,
    padding: '2rem',
    textAlign: 'center' as const,
    backdropFilter: 'blur(10px)',
    marginBottom: '2rem'
  },
  gameTitle: {
    color: DESIGN.colors.white,
    marginBottom: '1rem'
  },
  gameArea: {
    height: '400px',
    position: 'relative' as const,
    background: 'rgba(0, 0, 0, 0.2)',
    borderRadius: '1rem',
    overflow: 'hidden',
    marginBottom: '1rem'
  },
  gameItem: {
    position: 'absolute' as const,
    fontSize: '2rem',
    cursor: 'pointer',
    userSelect: 'none' as const
  },
  memoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '1rem',
    marginBottom: '1rem',
    maxWidth: '400px',
    margin: '0 auto 1rem'
  },
  memoryCard: {
    padding: '2rem',
    fontSize: '1.5rem',
    background: DESIGN.gradients.secondary,
    color: DESIGN.colors.white,
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: DESIGN.transitions.smooth
  },
  score: {
    color: DESIGN.colors.lightPink,
    fontSize: '1.2rem',
    fontWeight: 'bold' as const
  },
  backBtn: {
    padding: '1rem 2rem',
    background: DESIGN.gradients.secondary,
    color: DESIGN.colors.white,
    border: 'none',
    borderRadius: DESIGN.borderRadius.large,
    cursor: 'pointer',
    fontWeight: 'bold' as const,
    fontSize: '1rem',
    transition: DESIGN.transitions.smooth,
    width: '100%',
    maxWidth: '300px',
    display: 'block',
    margin: '2rem auto 0'
  },
  gameDescription: {
    color: DESIGN.colors.white,
    fontSize: '1.1rem',
    opacity: 0.9
  }
};

export default SurprisePage;
