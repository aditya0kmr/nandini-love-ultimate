import React from 'react';
import { COLORS, SPACING } from '../utils/constants';

interface GameCardProps {
  title: string;
  description: string;
  emoji: string;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, emoji, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        padding: SPACING.lg,
        margin: SPACING.md,
        background: `linear-gradient(135deg, ${COLORS.primary}22, ${COLORS.secondary}22)`,
        border: `2px solid ${COLORS.border}`,
        borderRadius: '12px',
        cursor: 'pointer',
        transition: 'all 300ms ease',
        textAlign: 'center',
        minWidth: '200px',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(1.05)';
        (e.currentTarget as HTMLElement).style.borderColor = COLORS.primary;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
        (e.currentTarget as HTMLElement).style.borderColor = COLORS.border;
      }}
    >
      <div style={{ fontSize: '2rem', marginBottom: SPACING.md }}>{emoji}</div>
      <h3 style={{ color: COLORS.primary, margin: `${SPACING.md} 0` }}>{title}</h3>
      <p style={{ color: COLORS.textMuted, fontSize: '0.9rem' }}>{description}</p>
    </div>
  );
};

export default GameCard;
