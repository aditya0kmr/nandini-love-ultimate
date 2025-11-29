import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface House3DProps {
  onClick?: () => void;
  isActive?: boolean;
  size?: number;
}

const House3D: React.FC<House3DProps> = ({ onClick, isActive = false, size = 100 }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const houseRef = useRef<THREE.Group | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  let animationId: number;

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x001a2e);
    sceneRef.current = scene;

    // Camera Setup
    const camera = new THREE.PerspectiveCamera(
      75,
      size / size,
      0.1,
      1000
    );
    camera.position.z = 3;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(size, size);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff1493, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Create House Group
    const house = new THREE.Group();
    houseRef.current = house;

    // House Base (cube)
    const baseGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const baseMaterial = new THREE.MeshPhongMaterial({ color: 0xFF69B4 });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = -0.3;
    house.add(base);

    // House Roof (cone)
    const roofGeometry = new THREE.ConeGeometry(1.2, 1, 4);
    const roofMaterial = new THREE.MeshPhongMaterial({ color: 0xFF1493 });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 1;
    roof.rotation.y = Math.PI / 4;
    house.add(roof);

    // Door
    const doorGeometry = new THREE.BoxGeometry(0.4, 0.7, 0.1);
    const doorMaterial = new THREE.MeshPhongMaterial({ color: 0xFFD700 });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, -0.3, 0.76);
    house.add(door);

    // Windows (glowing)
    const windowGeometry = new THREE.BoxGeometry(0.3, 0.3, 0.1);
    const windowMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x00D9FF,
      emissive: 0x00D9FF,
      emissiveIntensity: 0.5
    });

    // Window 1
    const window1 = new THREE.Mesh(windowGeometry, windowMaterial);
    window1.position.set(-0.4, 0.4, 0.76);
    house.add(window1);

    // Window 2
    const window2 = new THREE.Mesh(windowGeometry, windowMaterial);
    window2.position.set(0.4, 0.4, 0.76);
    house.add(window2);

    scene.add(house);

    // Animation Loop
    let time = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      time += 0.01;

      // Idle floating animation
      house.position.y = Math.sin(time * 2) * 0.3;
      house.rotation.y += isHovered ? 0.02 : 0.01;

      // Hover effect - scale up
      const targetScale = isActive || isHovered ? 1.2 : 1;
      house.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);

      // Glow effect on windows when hovered or active
      if (isHovered || isActive) {
        windowMaterial.emissiveIntensity = 0.8 + Math.sin(time * 3) * 0.3;
      } else {
        windowMaterial.emissiveIntensity = 0.5;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      baseGeometry.dispose();
      baseMaterial.dispose();
      roofGeometry.dispose();
      roofMaterial.dispose();
      doorGeometry.dispose();
      doorMaterial.dispose();
      windowGeometry.dispose();
      windowMaterial.dispose();
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isHovered, isActive, size]);

  const handleClick = () => {
    onClick?.();
  };

  return (
    <div
      ref={mountRef}
      onClick={handleClick}
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
      title="Our Story - Click to explore Nanniii & Aadi's journey"
    />
  );
};

export default House3D;
