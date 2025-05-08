// AnimatedBackground.jsx
import React from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-background">
      <div className="particle-container">
        {Array.from({ length: 100 }).map((_, index) => (
          <div key={index} className="particle"></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
