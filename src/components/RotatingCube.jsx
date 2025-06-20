import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';

const RotatingCube = ({ position, size = 1, color = '#6d28d9', speed = 1 }) => {
  const meshRef = useRef();
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * speed * 0.5) * 0.5;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.rotation.z = Math.sin(clock.getElapsedTime() * speed * 0.3) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <MeshWobbleMaterial 
        color={color}
        factor={0.2} 
        speed={0.5}
        roughness={0.4}
        metalness={0.7}
      />
    </mesh>
  );
};

export default RotatingCube;
