import { Canvas } from '@react-three/fiber';
import { useRef, Suspense } from 'react';
import { OrbitControls, Stars, useHelper } from '@react-three/drei';
import { PointLightHelper } from 'three';

const Lights = () => {
  const pointLightRef = useRef();
  useHelper(pointLightRef, PointLightHelper, 0.5, 'red');

  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight 
        position={[-10, 10, 5]} 
        intensity={0.5} 
        color="#8b5cf6" 
      />
      <pointLight 
        ref={pointLightRef} 
        position={[10, 10, 10]} 
        intensity={0.5} 
        color="#4f46e5" 
      />
    </>
  );
};

const AnimatedSphere = () => {
  const meshRef = useRef();

  return (
    <mesh 
      ref={meshRef}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    >
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial 
        color="#8b5cf6"
        roughness={0.3}
        metalness={0.8}
        wireframe
      />
    </mesh>
  );
};

const BackgroundScene = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <Stars radius={100} depth={50} count={5000} factor={4} fade />
          <Lights />
          <AnimatedSphere />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.5} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BackgroundScene;
