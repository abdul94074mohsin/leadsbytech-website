import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Icosahedron, TorusKnot, MeshDistortMaterial } from '@react-three/drei';

const Hero3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 7] }} className="w-full h-full">
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#3B82F6" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#F59E0B" />
        
        <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.2}>
          <Icosahedron args={[1.4, 0]}>
            <MeshDistortMaterial 
              color="#3B82F6" 
              roughness={0.1} 
              metalness={0.9} 
              wireframe={false}
              distort={0.3}
              speed={2}
              transparent
              opacity={0.7}
            />
          </Icosahedron>
        </Float>
        
        <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.6} position={[3, -0.5, -3]}>
          <TorusKnot args={[0.5, 0.15, 100, 16]}>
            <MeshDistortMaterial 
              color="#F59E0B" 
              roughness={0.2} 
              metalness={0.6} 
              distort={0.2}
              transparent
              opacity={0.5}
            />
          </TorusKnot>
        </Float>
        
        <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5} position={[-3, 1.5, -3]}>
          <mesh>
            <sphereGeometry args={[0.25, 32, 32]} />
            <meshStandardMaterial color="#60A5FA" emissive="#3B82F6" emissiveIntensity={0.5} />
          </mesh>
        </Float>
        
        <Stars radius={150} depth={80} count={5000} factor={6} saturation={0.2} fade />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;