src/components/Navigation.tsximport React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COLORS, Z_INDEX, SPACING } from '../utils/constants';
import { animationHelpers } from '../utils/animations';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: '💙 Home', path: '/home' },
    { label: '💌 Love Letters', path: '/letters' },
    { label: '📸 Gallery', path: '/gallery' },
    { label: '⏳ Timeline', path: '/timeline' },
    { label: '🎁 Surprise', path: '/surprise' },
  ];

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: Z_INDEX.fixed,
        background: `linear-gradient(135deg, ${COLORS.dark}, ${COLORS.darkGradient})`,
        backdropFilter: 'blur(10px)',
        padding: SPACING.md,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: '70px',
        borderBottom: `2px solid ${COLORS.border}`,
      }}
    >
      {/* Logo */}
      <div
        onClick={() => navigate('/home')}
        style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          ...animationHelpers.glow(500),
        }}
      >
        💙 Nandini
      </div>

      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          color: COLORS.primary,
          fontSize: '1.5rem',
          cursor: 'pointer',
          padding: SPACING.md,
          pointerEvents: 'auto',
        }}
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '70px',
            right: 0,
            background: COLORS.darkGradient,
            border: `1px solid ${COLORS.border}`,
            borderRadius: '0.5rem',
            minWidth: '200px',
            zIndex: Z_INDEX.dropdown,
            animation: 'slideInRight 300ms ease-out',
          }}
        >
          {menuItems.map((item) => (
            <div
              key={item.path}
              onClick={() => handleNavigate(item.path)}
              style={{
                padding: SPACING.md,
                cursor: 'pointer',
                borderBottom: `1px solid ${COLORS.border}`,
                transition: 'all 300ms ease',
                ':hover': {
                  background: COLORS.primary,
                },
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = COLORS.primary;
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = 'transparent';
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
