import React, { useRef, useEffect, useState } from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';
import { DESIGN } from '../utils/constants';

interface ImageWithLazyProps {
  src: string;
  alt: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
  placeholder?: string;
  onLoad?: () => void;
  onClick?: () => void;
}

const ImageWithLazy: React.FC<ImageWithLazyProps> = ({
  src,
  alt,
  className = '',
  width = '100%',
  height = 'auto',
  objectFit = 'cover',
  placeholder = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22400%22 height=%22300%22/%3E%3C/svg%3E',
  onLoad,
  onClick
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useLazyLoad(containerRef);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isVisible && imgRef.current && !loaded && !error) {
      imgRef.current.src = src;
    }
  }, [isVisible, src, loaded, error]);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  return (
    <div
      ref={containerRef}
      className={`image-lazy-container ${className}`}
      style={{
        width,
        height,
        overflow: 'hidden',
        backgroundColor: DESIGN.colors.background,
        borderRadius: DESIGN.borderRadius.medium,
        position: 'relative'
      }}
      onClick={onClick}
    >
      <img
        ref={imgRef}
        src={placeholder}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          width: '100%',
          height: '100%',
          objectFit,
          opacity: loaded ? 1 : 0.7,
          transition: `opacity ${DESIGN.transitions.smooth}`,
          display: 'block'
        }}
      />
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)`,
            animation: `shimmer 1.5s infinite`,
            pointerEvents: 'none'
          }}
        />
      )}
    </div>
  );
};

export default ImageWithLazy;
