import { Canvas } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

const Icon = ({ position, icon, color = '#6d28d9', speed = 1 }) => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime() * speed;
      meshRef.current.position.y = position[1] + Math.sin(t) * 0.5;
      meshRef.current.rotation.y = t * 0.5;
    }
  });

  return (
    <Text
      ref={meshRef}
      position={position}
      fontSize={1.5}
      color={color}
      anchorX="center"
      anchorY="middle"
    >
      {icon}
    </Text>
  );
};

const FloatingIcons = () => {
  const icons = [
    { icon: '⚛️', position: [-3, 2, 0], color: '#61dafb', speed: 0.8 },
    { icon: '🔥', position: [3, -2, 0], color: '#ff4c10', speed: 1.2 },
    { icon: '🚀', position: [-4, -3, -2], color: '#ffffff', speed: 1 },
    { icon: '💻', position: [4, 3, -1], color: '#9ca3af', speed: 0.9 },
    { icon: '🎨', position: [0, 4, -3], color: '#ec4899', speed: 1.1 },
    { icon: '🧩', position: [-3, -4, -2], color: '#8b5cf6', speed: 1.3 },
  ];

  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <Suspense fallback={null}>
          {icons.map((icon, index) => (
            <Icon key={index} {...icon} />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingIcons;
