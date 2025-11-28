import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import ImageWithLazy from '../components/ImageWithLazy';
import { DESIGN, CONTENT } from '../utils/constants';

const GalleryPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [view, setView] = useState<'grid' | '3d'>('grid');

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  const gallery = CONTENT.gallery.photos;
  const total = gallery.length;

  const handlePrev = () => setCurrent((current - 1 + total) % total);
  const handleNext = () => setCurrent((current + 1) % total);

  return (
    <div style={styles.container}>
      <Navigation />
      <div style={styles.content}>
        <h1 style={styles.title}>📸 Our Beautiful Moments</h1>
        <p style={styles.subtitle}>A gallery of memories together</p>

        {/* View Toggle */}
        <div style={styles.viewToggle}>
          <button
            onClick={() => setView('grid')}
            style={{...styles.toggleBtn, ...(view === 'grid' ? styles.toggleBtnActive : {})}}
          >
            Grid View
          </button>
          <button
            onClick={() => setView('3d')}
            style={{...styles.toggleBtn, ...(view === '3d' ? styles.toggleBtnActive : {})}}
          >
            3D Carousel
          </button>
        </div>

        {view === '3d' ? (
          /* 3D Carousel */
          <div style={styles.carouselContainer}>
            <button onClick={handlePrev} style={styles.carouselBtn}>❮</button>
            <div style={styles.carousel3d}>
              <div style={styles.carousel3dInner}>
                {gallery.map((img, idx) => (
                  <div
                    key={idx}
                    style={{
                      ...styles.carousel3dSlide,
                      opacity: idx === current ? 1 : 0.3,
                      transform: `translateX(${(idx - current) * 100}%) scale(${idx === current ? 1 : 0.8})`
                    }}
                  >
                    <ImageWithLazy
                      src={img.url}
                      alt={img.caption}
                      width="100%"
                      height="400px"
                    />
                    <p style={styles.caption}>{img.caption}</p>
                  </div>
                ))}
              </div>
            </div>
            <button onClick={handleNext} style={styles.carouselBtn}>❯</button>
            <p style={styles.counter}>{current + 1} / {total}</p>
          </div>
        ) : (
          /* Grid View */
          <div style={styles.grid}>
            {gallery.map((img, idx) => (
              <div
                key={idx}
                style={styles.gridItem}
                onClick={() => {
                  setCurrent(idx);
                  setView('3d');
                }}
              >
                <ImageWithLazy
                  src={img.url}
                  alt={img.caption}
                  width="100%"
                  height="250px"
                />
                <p style={styles.gridCaption}>{img.caption}</p>
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
    marginBottom: '2rem'
  },
  viewToggle: {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginBottom: '3rem'
  },
  toggleBtn: {
    padding: '0.75rem 1.5rem',
    background: 'rgba(255, 255, 255, 0.1)',
    color: DESIGN.colors.white,
    border: `2px solid ${DESIGN.colors.lightPink}`,
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontWeight: 'bold' as const,
    transition: DESIGN.transitions.smooth
  },
  toggleBtnActive: {
    background: DESIGN.gradients.secondary,
    borderColor: DESIGN.colors.white
  },
  carouselContainer: {
    position: 'relative' as const,
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    marginBottom: '3rem'
  },
  carousel3d: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: DESIGN.borderRadius.large,
    background: 'rgba(255, 255, 255, 0.05)'
  },
  carousel3dInner: {
    display: 'flex',
    transition: 'all 0.5s ease-out'
  },
  carousel3dSlide: {
    flex: '0 0 100%',
    transition: 'all 0.5s ease-out'
  },
  carouselBtn: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: DESIGN.gradients.secondary,
    color: DESIGN.colors.white,
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  caption: {
    color: DESIGN.colors.lightPink,
    textAlign: 'center' as const,
    padding: '1rem',
    fontSize: '0.95rem'
  },
  counter: {
    position: 'absolute' as const,
    bottom: '-2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    color: DESIGN.colors.white,
    fontSize: '0.9rem'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem'
  },
  gridItem: {
    borderRadius: DESIGN.borderRadius.large,
    overflow: 'hidden',
    cursor: 'pointer',
    transition: DESIGN.transitions.smooth,
    boxShadow: '0 10px 30px rgba(255, 20, 147, 0.2)'
  },
  gridCaption: {
    color: DESIGN.colors.lightPink,
    padding: '1rem',
    textAlign: 'center' as const,
    fontSize: '0.9rem',
    background: 'rgba(255, 255, 255, 0.05)'
  }
};

export default GalleryPage;
