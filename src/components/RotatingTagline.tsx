'use client';

import { useState, useEffect } from 'react';

export default function RotatingTagline() {
  const taglines = [
    "ctrl + z for the real world.",
    "because everyone deserves backspace.",
    "the art of fixing mistakes.",
    "time machines made simple.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');

  useEffect(() => {
    const interval = setInterval(() => {
      // Start fade out
      setFadeState('fade-out');
      
      // After fade out completes, change text and fade in
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        setFadeState('fade-in');
      }, 500); // Half a second for fade out
      
    }, 4000); // Change every 4 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <p className={`text-xl text-gray-600 transition-opacity duration-500 ${fadeState === 'fade-out' ? 'opacity-0' : 'opacity-100'}`}>
      {taglines[currentIndex]}
    </p>
  );
} 