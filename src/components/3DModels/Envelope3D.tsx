import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Envelope3D: React.FC<{ onClick?: () => void; isActive?: boolean; size?: number }> = ({
  onClick,
  isActive = false,
  size = 100,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  let animationId: number;

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x001a2e);

    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff1493, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const envelope = new THREE.Group();

    // Envelope body
    const bodyGeometry = new THREE.BoxGeometry(1.5, 1, 0.1);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD700 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    envelope.add(body);

    // Envelope flap (top triangle)
    const flapGeometry = new THREE.BoxGeometry(1.5, 0.5, 0.05);
    const flapMaterial = new THREE.MeshPhongMaterial({ color: 0xFF69B4 });
    const flap = new THREE.Mesh(flapGeometry, flapMaterial);
    flap.position.set(0, 0.5, 0.1);
    flap.rotation.x = -Math.PI / 6;
    envelope.add(flap);

    // Letter inside (visible when flap opens)
    const letterGeometry = new THREE.BoxGeometry(1.2, 0.7, 0.05);
    const letterMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFFFFF,
      emissive: 0x00D9FF,
      emissiveIntensity: 0.4,
    });
    const letter = new THREE.Mesh(letterGeometry, letterMaterial);
    letter.position.set(0, 0, 0.15);
    envelope.add(letter);

    scene.add(envelope);

    let time = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      envelope.position.y = Math.sin(time * 2) * 0.2;
      envelope.rotation.y += isHovered ? 0.02 : 0.01;

      // Flap opening animation
      if (isHovered || isActive) {
        flap.rotation.x = -Math.PI / 6 - Math.sin(time * 3) * 0.3;
        letterMaterial.emissiveIntensity = 0.8 + Math.sin(time * 3) * 0.2;
      } else {
        flap.rotation.x = -Math.PI / 6;
        letterMaterial.emissiveIntensity = 0.4;
      }

      const targetScale = isActive || isHovered ? 1.2 : 1;
      envelope.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (mountRef.current?.children.includes(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isHovered, isActive, size]);

  return (
    <div
      ref={mountRef}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        cursor: 'pointer',
        userSelect: 'none',
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        boxShadow: isActive ? '0 0 20px rgba(255, 20, 147, 0.8)' : 'none',
      }}
      title="Love Letters - Read Nanniii & Aadi's letters"
    />
  );
};

export default Envelope3D;
