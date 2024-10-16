// GradientEffect.js

import React, { useEffect, useState } from 'react';
import "../App.css"; // Ensure this is the correct path to your CSS file

const GradientEffect = () => {
  const [gradientStyle, setGradientStyle] = useState({
    width: '150px', // Fixed width
    height: '80px', // Fixed height
    left: '0px',
    top: '0px',
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setGradientStyle({
        width: '150px', // Fixed width
        height: '80px', // Fixed height
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="gradient-follow"
      style={gradientStyle}
    />
  );
};

export default GradientEffect;
