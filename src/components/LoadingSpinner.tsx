import React from 'react';
import { COLORS, Z_INDEX } from '../utils/constants';

const LoadingSpinner: React.FC = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0,0,0,0.7)',
        zIndex: Z_INDEX.modal,
        backdropFilter: 'blur(5px)',
      }}
    >
      <div
        style={{
          animation: 'spin 1s linear infinite',
          width: '50px',
          height: '50px',
          border: `4px solid ${COLORS.border}`,
          borderTop: `4px solid ${COLORS.primary}`,
          borderRadius: '50%',
        }}
      />
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
