import React, { useState, useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import { DESIGN, CONTENT } from '../utils/constants';

const TimelinePage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<number | null>(0);

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  const events = CONTENT.timeline;

  return (
    <div style={styles.container}>
      <Navigation />
      <div style={styles.content}>
        <h1 style={styles.title}>💭 Our Beautiful Timeline</h1>
        <p style={styles.subtitle}>A journey of love and memories</p>

        <div style={styles.timeline}>
          {events.map((event, idx) => (
            <div key={idx} style={styles.timelineItem}>
              <div
                style={{...styles.timelineMarker, ...(expanded === idx ? styles.markerActive : {})}}
                onClick={() => setExpanded(expanded === idx ? null : idx)}
              />
              
              <div style={styles.timelineContent}>
                <div style={styles.timelineHeader} onClick={() => setExpanded(expanded === idx ? null : idx)}>
                  <h3 style={styles.eventTitle}>{event.title}</h3>
                  <span style={styles.eventDate}>{event.date}</span>
                  <span style={styles.expandIcon}>{expanded === idx ? '↑' : '↓'}</span>
                </div>

                {expanded === idx && (
                  <div style={styles.eventDetails}>
                    <p style={styles.eventDescription}>{event.description}</p>
                    {event.details && (
                      <ul style={styles.detailsList}>
                        {event.details.map((detail, dIdx) => (
                          <li key={dIdx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={styles.footer}>
          <p style={styles.footerText}>Every moment with you is a precious memory ❤️</p>
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
    maxWidth: '900px',
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
  timeline: {
    position: 'relative' as const
  },
  timelineItem: {
    display: 'flex',
    gap: '2rem',
    marginBottom: '2rem',
    position: 'relative' as const
  },
  timelineMarker: {
    flex: '0 0 20px',
    height: '20px',
    borderRadius: '50%',
    background: DESIGN.colors.lightPink,
    position: 'sticky' as const,
    top: '150px',
    cursor: 'pointer',
    transition: DESIGN.transitions.smooth,
    boxShadow: `0 0 10px ${DESIGN.colors.primary}`
  },
  markerActive: {
    width: '30px',
    height: '30px',
    marginLeft: '-5px',
    background: DESIGN.colors.primary,
    boxShadow: `0 0 20px ${DESIGN.colors.primary}`
  },
  timelineContent: {
    flex: 1,
    background: 'rgba(255, 255, 255, 0.1)',
    border: `2px solid ${DESIGN.colors.lightPink}`,
    borderRadius: DESIGN.borderRadius.large,
    padding: '1.5rem',
    cursor: 'pointer',
    transition: DESIGN.transitions.smooth,
    backdropFilter: 'blur(10px)'
  },
  timelineHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1rem'
  },
  eventTitle: {
    color: DESIGN.colors.white,
    fontSize: '1.2rem',
    margin: 0,
    flex: 1
  },
  eventDate: {
    color: DESIGN.colors.lightPink,
    fontSize: '0.85rem',
    fontWeight: 'bold' as const
  },
  expandIcon: {
    color: DESIGN.colors.lightPink',
    fontSize: '1.2rem',
    transition: DESIGN.transitions.smooth
  },
  eventDetails: {
    marginTop: '1rem',
    paddingTop: '1rem',
    borderTop: `1px solid ${DESIGN.colors.lightPink}`,
    animation: 'fadeIn 0.3s ease-in'
  },
  eventDescription: {
    color: DESIGN.colors.white,
    lineHeight: '1.6',
    marginBottom: '1rem',
    opacity: 0.9
  },
  detailsList: {
    color: DESIGN.colors.white,
    marginLeft: '1.5rem',
    lineHeight: '1.8'
  },
  footer: {
    textAlign: 'center' as const,
    marginTop: '4rem',
    paddingTop: '2rem',
    borderTop: `2px solid ${DESIGN.colors.lightPink}`
  },
  footerText: {
    color: DESIGN.colors.lightPink,
    fontSize: '1.2rem',
    fontStyle: 'italic'
  }
};

export default TimelinePage;
