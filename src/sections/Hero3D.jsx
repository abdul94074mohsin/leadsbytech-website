import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Stars, Icosahedron, TorusKnot, MeshDistortMaterial } from '@react-three/drei';

const Hero3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 7] }} className="w-full h-full">
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2.5} color="#F97316" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#3B82F6" />
        
        {/* Main Floating Distorted Shape */}
        <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.2}>
          <Icosahedron args={[1.5, 0]}>
            <MeshDistortMaterial 
              color="#F97316" 
              roughness={0.1} 
              metalness={0.8} 
              distort={0.35}
              speed={2}
              transparent
              opacity={0.75}
            />
          </Icosahedron>
        </Float>
        
        {/* Accent Geometry */}
        <Float speed={1.8} rotationIntensity={0.8} floatIntensity={0.6} position={[3, -0.5, -3]}>
          <TorusKnot args={[0.5, 0.15, 100, 16]}>
            <MeshDistortMaterial 
              color="#3B82F6" 
              roughness={0.2} 
              metalness={0.7} 
              distort={0.2}
              transparent
              opacity={0.6}
            />
          </TorusKnot>
        </Float>
        
        <Stars radius={150} depth={80} count={3500} factor={4} saturation={0.1} fade />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.8} 
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;