'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Start fade out animation after 2 seconds
    const fadeOutTimer = setTimeout(() => {
      setIsAnimating(false);
    }, 2000);

    // Hide splash screen completely after fade animation
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 2800); // 2000ms display + 800ms fade out

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideTimer);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#2a0015] via-[#480026] to-[#2a0015] transition-opacity duration-700 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Logo with animation */}
        <div className={`transform transition-all duration-1000 ${isAnimating ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
            <Image
              src="/logo.png"
              alt="Divine Miracle Logo"
              fill
              className="object-contain animate-pulse-slow"
              priority
            />
          </div>
        </div>

        {/* Brand name with animation */}
        <div className={`text-center transform transition-all duration-1000 delay-300 ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-cormorant tracking-wide">
            Divine Miracle
          </h1>
          <p className="text-lg md:text-xl text-white/80 mt-2 font-light">
            Spiritual Guidance & Healing
          </p>
        </div>

        {/* Loading indicator */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;