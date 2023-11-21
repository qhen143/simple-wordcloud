import React, { useState, useEffect } from 'react';
import './FaceTracker.css'; // Import your CSS file for styling

const FaceTracker = () => {
  const [eyePosition, setEyePosition] = useState({ left: 0, right: 0 });

  const trackMouse = (e) => {
    const boundingBox = e.target.getBoundingClientRect();
    const eyeCenterX = boundingBox.left + boundingBox.width / 2;
    const eyeCenterY = boundingBox.top + boundingBox.height / 2;

    // Normalize cursor position within the eye's bounding box
    const normalizedX = (e.clientX - eyeCenterX) / (boundingBox.width / 4);
    const normalizedY = (e.clientY - eyeCenterY) / (boundingBox.height / 4);

    const maxMovement = 1; // Maximum normalized movement for X and Y

    const eyePositionX = Math.min(Math.max(normalizedX, -maxMovement), maxMovement);
    const eyePositionY = Math.min(Math.max(normalizedY, -maxMovement), maxMovement);

    setEyePosition({ left: eyePositionX, right: eyePositionY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', trackMouse);
    return () => {
      document.removeEventListener('mousemove', trackMouse);
    };
  }, []);

  return (
    <div className="face-container yellow-face">
      <div className="face">
        <div className="eye left-eye">
          <div className="pupil" style={{
            transform: `translate(calc(-50% + ${eyePosition.left * 25}px), calc(-50% + ${eyePosition.right * 25}px))`
          }}></div>
        </div>
        <div className="eye right-eye">
          <div className="pupil" style={{
            transform: `translate(calc(-50% + ${eyePosition.left * 25}px), calc(-50% + ${eyePosition.right * 25}px))`
          }}></div>
        </div>
        <div className="mouth"></div>
        <div className="smile"></div> {/* New element for the smile */}
      </div>
    </div>
  );
};

export default FaceTracker;
