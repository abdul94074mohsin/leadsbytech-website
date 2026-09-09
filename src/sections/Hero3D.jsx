import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';

const AnimatedGlobe = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.2;
      meshRef.current.rotation.x = t * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <Sphere ref={meshRef} args={[1.8, 64, 64]}>
        <MeshDistortMaterial
          color="#F97316"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          wireframe={true}
        />
      </Sphere>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#F97316" />
        <pointLight position={[-10, -10, -5]} intensity={1.5} color="#3B82F6" />
        <AnimatedGlobe />
        <Stars radius={100} depth={50} count={2500} factor={4} saturation={0} fade />
      </Canvas>
    </div>
  );
};

export default Hero3D;