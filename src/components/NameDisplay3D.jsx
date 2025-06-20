import { Canvas } from '@react-three/fiber';
import { Text3D, Center, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

const NameDisplay3D = ({ name }) => {
  return (
    <div className="h-40 w-full my-6">
      <Canvas camera={{ position: [0, 0, 7], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Center>
            <Text3D
              font="/fonts/inter_bold.json"
              size={1.5}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              {name}
              <meshStandardMaterial 
                color="#6d28d9"
                metalness={0.8}
                roughness={0.2}
              />
            </Text3D>
          </Center>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default NameDisplay3D;
