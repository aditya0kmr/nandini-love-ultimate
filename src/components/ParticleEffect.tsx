src/components/ParticleEffect.tsximport React from 'react';
import { useParticles } from '../hooks/useParticles';

const ParticleEffect: React.FC = () => {
  const canvasRef = useParticles();
  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: 1, pointerEvents: 'none' }} />;
};

export default ParticleEffect;
