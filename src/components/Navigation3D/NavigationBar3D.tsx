import React, { useState } from 'react';
import House3D from '../3DModels/House3D';
import Envelope3D from '../3DModels/Envelope3D';

interface NavigationBar3DProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const NavigationBar3D: React.FC<NavigationBar3DProps> = ({ currentPage, onNavigate }) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const iconSize = 80;
  const navigationIcons = [
    { id: 'home', label: 'Our Story', component: House3D },
    { id: 'letters', label: 'Love Letters', component: Envelope3D },
    { id: 'gallery', label: 'Memories', component: House3D }, // Placeholder - PhotoFrame3D coming
    { id: 'timeline', label: 'Timeline', component: House3D }, // Placeholder - Calendar3D coming
    { id: 'games', label: 'Games', component: House3D }, // Placeholder - GameController3D coming
    { id: 'messages', label: 'Compliments', component: House3D }, // Placeholder - ChatBubbles3D coming
    { id: 'special', label: 'Special', component: House3D }, // Placeholder - GiftBox3D coming
    { id: 'art', label: 'Art', component: House3D }, // Placeholder - Palette3D coming
    { id: 'surprise', label: 'Surprise', component: House3D }, // Placeholder - Star3D coming
  ];

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 1000,
        background: 'rgba(0, 26, 46, 0.9)',
        padding: '15px 20px',
        borderRadius: '20px',
        backdropFilter: 'blur(10px)',
        border: '2px solid rgba(255, 105, 180, 0.3)',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '90vw',
        boxShadow: '0 8px 32px rgba(255, 20, 147, 0.2)',
      }}
    >
      {navigationIcons.map((icon) => {
        const IconComponent = icon.component;
        return (
          <div
            key={icon.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '5px',
              cursor: 'pointer',
            }}
            onMouseEnter={() => setHoveredIcon(icon.id)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <IconComponent
              onClick={() => onNavigate(icon.id)}
              isActive={currentPage === icon.id}
              size={iconSize}
            />
            {hoveredIcon === icon.id && (
              <span
                style={{
                  fontSize: '12px',
                  color: '#FF69B4',
                  fontWeight: 'bold',
                  textShadow: '0 0 10px rgba(255, 105, 180, 0.8)',
                  animation: 'fadeInUp 0.3s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {icon.label}
              </span>
            )}
          </div>
        );
      })}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NavigationBar3D;
