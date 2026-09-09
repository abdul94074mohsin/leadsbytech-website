import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero3D = () => {
  return (
    <div className="w-full h-full relative">
      {/* Interactive Spline 3D Scene */}
      <Spline 
        scene="https://prod.spline.design/6Wq1Q7YGyM-mab6X/scene.splinecode" 
        className="w-full h-full"
      />
    </div>
  );
};

export default Hero3D;